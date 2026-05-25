import { NextResponse } from "next/server";
import { MINES } from "@/app/demo/_data/mines";

export async function GET() {
  return NextResponse.json(MINES);
}
