import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Demo gate — cookie-based session after branded login at /demo/login.
// Single shared password distributed by Lucid Tech. Override via env.

const DEMO_PASSWORD = process.env.DEMO_PASSWORD || "MotherLode2026";
const SESSION_COOKIE = "motherlode_demo_session";

function sessionTokenFor(password: string): string {
  let h = 5381;
  for (let i = 0; i < password.length; i++) {
    h = ((h << 5) + h + password.charCodeAt(i)) | 0;
  }
  return "v1." + Math.abs(h).toString(36) + "." + password.length.toString(36);
}

const VALID_TOKEN = sessionTokenFor(DEMO_PASSWORD);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only guard /demo and the proxied API endpoints (those serve demo data)
  const isDemoRoute = pathname === "/demo" || pathname.startsWith("/demo/");
  const isProxiedApi =
    pathname === "/api/chat" ||
    pathname === "/api/health" ||
    pathname === "/api/mines" ||
    pathname === "/api/scan";

  if (!isDemoRoute && !isProxiedApi) {
    return NextResponse.next();
  }

  // Always allow login page + its API
  if (pathname === "/demo/login" || pathname.startsWith("/api/demo-auth")) {
    return NextResponse.next();
  }

  // Check session cookie
  const cookie = request.cookies.get(SESSION_COOKIE);
  if (cookie && cookie.value === VALID_TOKEN) {
    return NextResponse.next();
  }

  // No valid session → redirect to login, preserve original destination
  // For API calls, return 401 instead of redirect
  if (isProxiedApi) {
    return new NextResponse(JSON.stringify({ error: "Authentication required" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const loginUrl = new URL("/demo/login", request.url);
  loginUrl.searchParams.set("next", pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/demo/:path*", "/demo", "/api/chat", "/api/health", "/api/mines", "/api/scan"],
};
