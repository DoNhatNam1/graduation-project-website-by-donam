
import { NextResponse,  NextRequest } from "next/server";
import { updateSession } from "./Actions/POST/HomePage/Authentication";

export async function middleware(req: NextRequest) {
  const cookiePath = req.cookies.get("agencyPath")?.value;
  const hostname = "webweldingstores.vercel.app";
  const environment = process.env.NODE_ENV;
  const path = req.nextUrl.pathname;
  const isPublicPath = path === "/login" || path === "/signup" || path === "/";
  const session = req.cookies.get("session")?.value

  switch (environment) {
    case "development":
      if (isPublicPath && session) {
        return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
      }

      if (!isPublicPath && !session) {
          return NextResponse.rewrite(new URL("/warning", req.nextUrl.origin));
      }
      break;

    case "production":
      if (isPublicPath && session) {
        return NextResponse.redirect(`http://${cookiePath}.${hostname}/dashboard`);
      }

      if (!isPublicPath && !session) {
          return NextResponse.rewrite(`http://${hostname}/warning`);
      }
      break;

    default:
      break;
  }

  return updateSession(req);

}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/dashboard',
    '/login',
    '/signup',
  ]
}

