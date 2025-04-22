import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const isAuthenticated = !!token;

  // Check if the request is for a protected route
  if ((request.nextUrl.pathname.startsWith("/protected") || 
       request.nextUrl.pathname.startsWith("/cadastro")) && 
      !isAuthenticated) {
    // Redirect to 401 page if not authenticated
    const unauthorizedUrl = new URL("/401", request.url);
    return NextResponse.redirect(unauthorizedUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/protected/:path*", "/cadastro/:path*", "/cadastro"],
};