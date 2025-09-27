import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Get the pathname and search params from the request
  const { pathname, search } = new URL(request.url);

  // List of valid hash fragments
  const validHashes = ["about", "pricing", "faq"];

  // If it's the root path, just continue
  if (pathname === "/") {
    return NextResponse.next();
  }

  // Check if the path starts with a hash (e.g., /#about)
  if (pathname.startsWith("/#") || validHashes.includes(pathname.substring(1))) {
    // Redirect to the canonical URL with hash
    const hash = pathname.startsWith("/#") ? pathname.substring(1) : `#${pathname.substring(1)}`;
    const url = new URL(`/${hash}`, request.url);
    return NextResponse.redirect(url);
  }

  // For any other path, continue
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
