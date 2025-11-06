export async function handler(event, context) {
  const sessionId = Date.now(); // unique session for each user
  return {
    statusCode: 200,
    body: JSON.stringify({
      gameUrl: "https://himika-tasnim.github.io/Jeopardy_iDE/",
      sessionId
    }),
  };
}
