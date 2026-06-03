"use client";

import React, { useState } from "react";

type State =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success"; message: string }
  | { kind: "error"; message: string };

export function OperatorIntakeForm() {
  const [state, setState] = useState<State>({ kind: "idle" });
  const [hasFunding, setHasFunding] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState({ kind: "submitting" });

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      entity: String(fd.get("entity") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      site_location: String(fd.get("site_location") || ""),
      has_doe_award: fd.get("has_doe_award") === "on",
      funding_source: String(fd.get("funding_source") || ""),
      funding_award_id: String(fd.get("funding_award_id") || ""),
      message: String(fd.get("message") || ""),
      website: String(fd.get("website") || ""), // honeypot
    };

    try {
      const resp = await fetch("/api/operators-intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await resp.json();
      if (resp.ok) {
        setState({
          kind: "success",
          message: data.message || "Submission received. We respond within 5 business days.",
        });
        (e.target as HTMLFormElement).reset();
        setHasFunding(false);
      } else {
        setState({
          kind: "error",
          message: data.error || "Submission failed. Please try again or email us directly.",
        });
      }
    } catch {
      setState({
        kind: "error",
        message: "Network error. Please try again or email us directly.",
      });
    }
  }

  if (state.kind === "success") {
    return (
      <div className="rounded-2xl border border-gold/40 bg-gold/10 p-6 sm:p-8 text-center">
        <div className="text-3xl mb-3">✓</div>
        <h3 className="text-lg font-bold text-gold mb-2">Submission received</h3>
        <p className="text-base text-light leading-relaxed">{state.message}</p>
        <p className="text-sm text-muted mt-4">
          For urgent inquiries: <a href="mailto:info@webdesignpros365.com" className="text-gold hover:underline">info@webdesignpros365.com</a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot — hidden from real users, bots fill it */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] opacity-0 pointer-events-none"
        aria-hidden="true"
      />

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
        <Field label="Name" name="name" required placeholder="Your full name" />
        <Field label="Entity" name="entity" placeholder="Company / mine / partnership name" />
      </div>

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
        <Field label="Email" name="email" type="email" required placeholder="you@example.com" />
        <Field label="Phone" name="phone" type="tel" placeholder="+1 555 555 5555" />
      </div>

      <Field
        label="Site location"
        name="site_location"
        placeholder="City, state, and county or coordinates if known"
      />

      {/* Funding flag — toggles two extra fields */}
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="has_doe_award"
            checked={hasFunding}
            onChange={(e) => setHasFunding(e.target.checked)}
            className="mt-1 w-4 h-4 rounded border-gold/40 bg-transparent text-gold focus:ring-gold focus:ring-offset-0 cursor-pointer"
          />
          <span className="text-[15px] sm:text-base text-light leading-relaxed">
            We have federal critical-minerals funding (DOE, DOD, ARPA-E, or state critical-minerals
            commission award).
          </span>
        </label>
        {hasFunding && (
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <Field
              label="Funding source"
              name="funding_source"
              placeholder="DOE OCM, DPA Title III, ARPA-E, etc."
            />
            <Field
              label="Award ID (if public)"
              name="funding_award_id"
              placeholder="DE-EE000xxxx, W912xxxx, etc."
            />
          </div>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Brief message</label>
        <textarea
          name="message"
          rows={5}
          placeholder="What you have, what you're looking for, anything we should know."
          className="w-full px-4 py-3 rounded-lg bg-ink/40 border border-white/15 text-text placeholder:text-muted focus:border-gold/60 focus:outline-none focus:ring-2 focus:ring-gold/20 transition-colors"
        />
      </div>

      {state.kind === "error" && (
        <div className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {state.message}
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={state.kind === "submitting"}
          className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-lg bg-gradient-to-r from-gold to-copper text-ink font-semibold hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {state.kind === "submitting" ? "Submitting..." : "Request consideration"}
        </button>
        <p className="text-sm text-muted leading-relaxed">
          We respond within 5 business days. All submissions confidential.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2" htmlFor={name}>
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg bg-ink/40 border border-white/15 text-text placeholder:text-muted focus:border-gold/60 focus:outline-none focus:ring-2 focus:ring-gold/20 transition-colors"
      />
    </div>
  );
}
