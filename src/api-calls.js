//import { Configuration, OpenAIApi } from "openai";

const API_KEY = process.env.REACT_APP_API_KEY
console.log('api key', API_KEY)

export const getResponse = (prompt) => {
  console.log('prompt in api call, ', prompt)
  return fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      prompt: prompt,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    }),
  })
    .then(response => response.json())
    .then(data => console.log('response data, ', data))
}

// const data = {
//   prompt: "Write a poem about a dog wearing skis",
//   temperature: 0.5,
//   max_tokens: 64,
//   top_p: 1.0,
//   frequency_penalty: 0.0,
//   presence_penalty: 0.0,
// };

// fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${process.env.OPENAI_SECRET}`,
//   },
//   body: JSON.stringify(data),
// });