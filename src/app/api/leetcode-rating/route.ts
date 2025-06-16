export async function GET() {
    const res = await fetch("https://leetcode.com/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: `
            {
              userContestRankingHistory(username: "vrinamehta") {
                rating
                contest {
                  title
                  startTime
                }
              }
            }
            `,
        }),
    });

    const json = await res.json();

    // Define July 1, 2024 in milliseconds
    const julyStart = new Date("2024-07-01T00:00:00Z").getTime();

    const formatted = json.data.userContestRankingHistory
        .filter((entry: any) => entry.contest.startTime * 1000 >= julyStart)
        .map((entry: any) => ({
            contest: entry.contest.title,
            time: new Date(entry.contest.startTime * 1000),
            rating: entry.rating,
        }));

    return new Response(JSON.stringify(formatted), {
        headers: { "Content-Type": "application/json" },
    });
}
