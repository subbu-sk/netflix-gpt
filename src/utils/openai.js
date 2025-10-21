
import { GoogleGenAI } from "@google/genai";
import { GEMINI_API_KEY } from "./constants";

const genAI = new GoogleGenAI({apiKey: GEMINI_API_KEY});
export default genAI
