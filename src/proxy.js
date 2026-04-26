// import { NextResponse } from "next/server";

// export function proxy(request) {
//   const isLoggedIn = true

//   if (isLoggedIn) {
//     return NextResponse.redirect(new URL('/auth/signin', request.url))
// }
//   }

// export const config = {
//   matcher: ['/career', '/about']
// }

// import dns from "node:dns";
// dns.setServers(["8.8.8.8", "8.8.4.4"]);
import dns from 'dns'
dns.setDefaultResultOrder('ipv4first')
import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/auth/signin", request.url));
}

export const config = {
  matcher: ['/career', '/about', "/news/:path*"],
};