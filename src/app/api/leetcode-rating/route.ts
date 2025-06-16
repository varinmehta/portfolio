// src/app/api/leetcode-rating/route.ts
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
    const formatted = json.data.userContestRankingHistory.map((entry: any) => ({
        contest: entry.contest.title,
        time: new Date(entry.contest.startTime * 1000),
        rating: entry.rating,
    }));

    return new Response(JSON.stringify(formatted), {
        headers: { "Content-Type": "application/json" },
    });
}
