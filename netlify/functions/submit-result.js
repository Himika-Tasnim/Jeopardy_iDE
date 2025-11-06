export async function handler(event, context) {
  try {
    const data = JSON.parse(event.body || "{}");
    console.log("Game results:", data); // store in DB or Google Sheets if needed

    return {
      statusCode: 200,
      body: JSON.stringify({ status: "success", message: "Results received" }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ status: "error", message: err.message }),
    };
  }
}
