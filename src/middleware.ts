
import { NextResponse,  NextRequest } from "next/server";
import { getSession, updateSession } from "./Actions/POST/HomePage/Authentication";
import { cookies } from "next/headers";

export async function middleware(req: NextRequest) {
  // const session = await getSession();
  // const data = cookies().get(`${process.env.COOKIES_DATA_NAME}`)?.value;
  // const hostname = process.env.NEXT_PUBLIC_HOSTNAME_PATH;
  // const environment = process.env.NODE_ENV;
  // const path = req.nextUrl.pathname;
  // const isPublicPath = path === "/login" || path === "/signup" || path === "/";
  // switch (environment) {
  //   case "development":
  //     if (isPublicPath && session) {
  //       return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  //     }

  //     if (!isPublicPath && !session) {
  //         return NextResponse.rewrite(new URL("/warning", req.nextUrl.origin));
  //     }
  //     break;

  //   case "production":
  //     if (isPublicPath && session) {
  //       return NextResponse.redirect(`http://${data.}.${hostname}/dashboard`);
  //     }

  //     if (!isPublicPath && !session) {
  //         return NextResponse.rewrite(`http://${hostname}/warning`);
  //     }
  //     break;

  //   default:
  //     break;
  // }

  return updateSession(req);

}

// See "Matching Paths" below to learn more
export const config = {
}

