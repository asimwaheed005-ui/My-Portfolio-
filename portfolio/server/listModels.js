import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function main() {
  const models = await ai.models.list();

  for await (const model of models) {
    console.log("--------------------------------");
    console.log("Name:", model.name);
    console.log("Supported Methods:", model.supportedActions);
  }
}

main();