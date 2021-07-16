import fetch from "node-fetch";
import https from "https";

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

export async function getSentiment(value) {
  const url = process.env.REACT_APP_API_ENDPOINT + "/api/v1/sentiment/predict";
  console.log(url);
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ text: value }),
    headers: {
      "Content-Type": "application/json",
    },
    agent: httpsAgent,
  });
  return await res.json();
}
