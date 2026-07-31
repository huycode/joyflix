export async function GET() {
    const res = await fetch("https://api.bgm.tv/calendar", {
        headers: {
            "User-Agent": "Joyflix"
        }
    });

    return new Response(await res.text(), {
        headers: {
            "Content-Type": "application/json"
        }
    });
}