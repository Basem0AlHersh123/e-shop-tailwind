// src/services/aiService.js
const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

export const sendMessage = async (messages, model) => {
  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:5173", // your domain
        "X-Title": "AI Models Hub",
      },
      body: JSON.stringify({
        model,
        messages,
        stream: false,
      }),
    },
  );

  const data = await response.json();
  return data.choices[0].message.content;
};
