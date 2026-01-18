
import { GoogleGenAI } from "@google/genai";

/**
 * Safely retrieves the API Key. 
 * In a Vercel/Vite environment, process.env is usually 
 * handled by the build tool or a global shim.
 */
const getApiKey = (): string => {
  try {
    // Check for process.env or fallback to empty string
    return (typeof process !== 'undefined' && process.env?.API_KEY) || "";
  } catch (e) {
    return "";
  }
};

const apiKey = getApiKey();
const ai = new GoogleGenAI({ apiKey });

export const getHealthAssistantResponse = async (userMessage: string): Promise<string> => {
  if (!apiKey) {
    console.warn("VitalPoint: API_KEY is missing. AI Assistant functionality is limited.");
    return "I'm currently in 'Launch Preview' mode. Once we go live in 2025, I'll be able to answer all your healthcare infrastructure questions!";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `You are the VitalPoint Health AI Assistant, powered by Nexaforge Technologies. 
        VitalPoint is a revolutionary unified healthcare infrastructure launching across the USA in 2025.
        Our core tech is the Nexaforge High-Availability Mesh, ensuring HIPAA compliance and sub-second data sharing between US providers.
        
        Your tone: Professional, empathetic, and innovative.
        Your goal: Help users understand the benefits of a unified health system.
        
        IMPORTANT: Provide information for educational/promotional purposes only. Always advise users to consult with a licensed US medical professional for diagnosis.`,
        temperature: 0.7,
      },
    });

    return response.text || "I'm analyzing that request. How else can I help you with the VitalPoint rollout?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our intelligence systems are currently synchronizing with the Nexaforge Mesh. Please try again in a moment.";
  }
};
