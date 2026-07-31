export async function GET() {
    const res = await fetch("https://api.bgm.tv/calendar", {
        headers: {
            "User-Agent": "Joyflix"
        }
    });

    const data = await res.json();

    for (const day of data) {
        for (const item of day.items) {
            if (!item.images) continue;

            for (const key of Object.keys(item.images)) {
                const url = item.images[key];

                if (url) {
                    item.images[key] =
                        "/api/image?url=" +
                        encodeURIComponent(
                            url.replace(/^http:/, "https:")
                        );
                }
            }
        }
    }

    return Response.json(data);
}

// export async function GET() {
//     const res = await fetch("https://api.bgm.tv/calendar", {
//         headers: {
//             "User-Agent": "Joyflix"
//         }
//     });

//     return new Response(await res.text(), {
//         headers: {
//             "Content-Type": "application/json"
//         }
//     });
// }
