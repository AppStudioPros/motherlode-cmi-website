import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

/**
 * Operator intake endpoint for the /operators page waitlist form.
 *
 * Writes to public.mining_operators_waitlist on the MotherLode Supabase project
 * (project ref: tmjpkserhakfylthkncj). Service role used server-side; RLS still
 * provides defense-in-depth (anon role can only INSERT, never SELECT).
 *
 * Returns a success or error response. Frontend handles the toast.
 */

type IntakePayload = {
  name?: string;
  entity?: string;
  email?: string;
  phone?: string;
  site_location?: string;
  funding_source?: string;
  funding_award_id?: string;
  message?: string;
  has_doe_award?: boolean;
  // honeypot — if filled, silently drop
  website?: string;
};

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as IntakePayload;

    // Honeypot — bots will fill this, real humans won't see it
    if (body.website && body.website.trim().length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // Minimum validation
    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Supabase setup
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!supabaseUrl || !serviceRole) {
      console.error("Operators intake: Supabase env vars missing");
      return NextResponse.json(
        { error: "Server configuration error. Please try again later." },
        { status: 500 }
      );
    }
    const supabase = createClient(supabaseUrl, serviceRole, {
      auth: { persistSession: false },
    });

    // Forwarded request metadata (light fingerprinting; not used for blocking)
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      null;
    const userAgent = request.headers.get("user-agent") || null;

    const row = {
      name,
      entity: (body.entity || "").trim() || null,
      email,
      phone: (body.phone || "").trim() || null,
      site_location: (body.site_location || "").trim() || null,
      funding_source: (body.funding_source || "").trim() || null,
      funding_award_id: (body.funding_award_id || "").trim() || null,
      message: (body.message || "").trim() || null,
      has_doe_award: Boolean(body.has_doe_award),
      ip_address: ip,
      user_agent: userAgent,
    };

    const { error } = await supabase
      .from("mining_operators_waitlist")
      .insert(row);

    if (error) {
      console.error("Operators intake: insert error", error);
      return NextResponse.json(
        { error: "Could not save submission. Please try again or email us directly." },
        { status: 500 }
      );
    }

    // Send notification email via Resend (if configured)
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "MotherLode Intake <onboarding@resend.dev>",
            to: ["info@webdesignpros365.com"],
            reply_to: email,
            subject: `[MotherLode Operator Intake] ${name}${row.entity ? " · " + row.entity : ""}${row.has_doe_award ? " · DOE-funded" : ""}`,
            html: buildEmail(row),
          }),
        });
      } catch (e) {
        // Email failure should NOT block the success response — the row is already saved.
        console.error("Operators intake: Resend notification failed (row saved anyway)", e);
      }
    }

    return NextResponse.json(
      {
        ok: true,
        message: "Submission received. We respond within 5 business days.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Operators intake: unexpected error", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

function buildEmail(row: {
  name: string;
  entity: string | null;
  email: string;
  phone: string | null;
  site_location: string | null;
  funding_source: string | null;
  funding_award_id: string | null;
  message: string | null;
  has_doe_award: boolean;
  ip_address: string | null;
  user_agent: string | null;
}) {
  return `
    <h2>New Operator Waitlist Submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(row.name)}</p>
    ${row.entity ? `<p><strong>Entity:</strong> ${escapeHtml(row.entity)}</p>` : ""}
    <p><strong>Email:</strong> <a href="mailto:${escapeHtml(row.email)}">${escapeHtml(row.email)}</a></p>
    ${row.phone ? `<p><strong>Phone:</strong> <a href="tel:${escapeHtml(row.phone)}">${escapeHtml(row.phone)}</a></p>` : ""}
    ${row.site_location ? `<p><strong>Site location:</strong> ${escapeHtml(row.site_location)}</p>` : ""}
    ${row.has_doe_award ? `<p><strong>Federal funding flag:</strong> Yes</p>` : ""}
    ${row.funding_source ? `<p><strong>Funding source:</strong> ${escapeHtml(row.funding_source)}</p>` : ""}
    ${row.funding_award_id ? `<p><strong>Award ID:</strong> ${escapeHtml(row.funding_award_id)}</p>` : ""}
    ${row.message ? `<p><strong>Message:</strong></p><p>${escapeHtml(row.message).replace(/\n/g, "<br>")}</p>` : ""}
    <hr>
    <p style="font-size:11px;color:#888">
      Submitted from ${row.ip_address || "unknown IP"}<br>
      User agent: ${escapeHtml(row.user_agent || "unknown")}
    </p>
  `;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
