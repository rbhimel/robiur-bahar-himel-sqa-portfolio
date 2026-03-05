
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

export const getQAInsight = async (query: string) => {
  if (!API_KEY) return "AI Assistant is currently offline. Please check back later.";

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: `You are the AI version of Robiur Bahar Himel, a Junior SQA Engineer from Bangladesh. 
        You answer questions about software testing, QA methodologies, or Robiur's portfolio. 
        Keep responses professional, witty, and focused on quality assurance. 
        Robiur is skilled in Manual Testing, Postman, Jira, and SDLC/STLC. 
        He is a Geography student but passionate about tech.`,
        temperature: 0.7,
      },
    });
    return response.text || "I'm having trouble analyzing that request. Mind trying again?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error scanning for insights. System busy.";
  }
};
