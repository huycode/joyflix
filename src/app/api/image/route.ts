import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const url = req.nextUrl.searchParams.get("url");

    if (!url) {
        return new Response("missing url", { status: 400 });
    }

    const res = await fetch(url, {
        headers: {
            "User-Agent": "Joyflix"
        }
    });

    return new Response(res.body, {
        headers: {
            "Content-Type": res.headers.get("Content-Type") || "image/jpeg",
            "Cache-Control": "public,max-age=86400"
        }
    });
}