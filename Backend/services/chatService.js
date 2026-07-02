import client from "../config/openrouter.js";

export const askAI = async (message) => {
  const completion = await client.chat.completions.create({
    model: "nvidia/nemotron-3-super-120b-a12b:free",
    messages: [
      {
        role: "user",
        content: message,
      },
    ],
  });

  return completion.choices[0].message.content;
};
