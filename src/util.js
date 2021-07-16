import fetch from "node-fetch";

export async function getSentiment(value) {
  const url = process.env.REACT_APP_API_ENDPOINT + "/api/v1/sentiment/predict";
  console.log(url);
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ text: value }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await res.json();
}
