import { NextRequest, NextResponse } from "next/server";
const protectedRoutes =  ['/contact', '/profile', '/home'];


export default function middleware( request: NextRequest){

    const currentUser = request.cookies.get("currentUser")?.value;

    if (!currentUser && protectedRoutes.includes(request.nextUrl.pathname)) {
        return NextResponse.redirect(new URL('/login', request.nextUrl));
    }

    NextResponse.redirect(new URL('/profile', request.nextUrl));
} 


export const config  = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)']
}