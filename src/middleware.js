import { NextResponse } from "next/server";
export const middleware = (request) =>{
     console.log("middle ware is working", request.url);
    if(request.nextUrl.pathname!="/login")
    return NextResponse.redirect(new URL("login", request.url))
}

export const config ={
    matcher : "/about/:path*"
}