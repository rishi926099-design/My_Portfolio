import dotenv from "dotenv";
dotenv.config();

import OpenAI from "openai/index.js";

console.log("API Key Loaded:", process.env.OPENROUTER_API_KEY ? "YES" : "NO");

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

export default client;
