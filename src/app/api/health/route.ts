import { NextResponse } from "next/server";
import { MINES } from "@/app/demo/_data/mines";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    mines_loaded: MINES.length,
    anthropic_configured: !!process.env.ANTHROPIC_API_KEY,
    brave_configured: !!process.env.BRAVE_API_KEY,
  });
}
