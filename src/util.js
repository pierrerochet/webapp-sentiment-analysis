import fetch from "node-fetch";

export async function getSentiment(value) {
  // const url = "http://localhost:8000/api/v1/sentiment/predict";
  // const url = "http://localhost:8080/api/v1/sentiment/predict";
  const url = 'http://ec2-15-236-60-229.eu-west-3.compute.amazonaws.com/api/v1/sentiment/predict'
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ text: value }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await res.json();
}
