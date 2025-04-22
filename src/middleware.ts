import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const isAuthenticated = !!token;

  // Check if the request is for a protected route
  if (request.nextUrl.pathname.startsWith("/protected") && !isAuthenticated) {
    // Redirect to login page if not authenticated
    const loginUrl = new URL("/api/auth/signin", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/protected/:path*"],
};