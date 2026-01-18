
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getHealthAssistantResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `You are a helpful and professional Health Assistant for VitalPoint Health, a modern US-based healthcare system launching soon.
        The technology is powered by Nexaforge Technologies. 
        Your tone should be empathetic, professional, and clear. 
        Focus on explaining how a modern digital-first healthcare system can benefit patients through better interoperability and security.
        IMPORTANT: Provide information for educational purposes only. Always advise users to consult with a licensed US medical professional for diagnosis or treatment. 
        Keep responses concise and formatted with markdown if needed.`,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I'm having trouble processing that right now. How can I help you with our upcoming system launch?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently initializing my systems. Please check back in a moment!";
  }
};
