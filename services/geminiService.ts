import { GoogleGenAI } from "@google/genai";
import { Language } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateLiteraryAnalysis = async (prompt: string, language: Language): Promise<string> => {
  try {
    const systemInstruction = language === 'zh'
      ? `你是一位博学的中国古典文学专家，专攻唐诗宋词。你的语调优雅、深刻，并对人类境遇充满同情。你擅长分析“过年”这一主题。在分析时，请使用 Markdown 格式（标题、列表、粗体）。`
      : `You are a distinguished scholar of classical Chinese literature, specializing in Tang poetry and Song lyrics (Tang Shi Song Ci). Your tone is elegant, insightful, and empathetic to the human condition. You are an expert in analyzing the theme of "Guo Nian" (Chinese New Year). When analyzing, use Markdown formatting for clarity.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
      }
    });
    return response.text || (language === 'zh' ? "暂时无法生成分析。" : "Unable to generate analysis at this time.");
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    return language === 'zh' ? "查阅典籍时发生错误。" : "An error occurred while consulting the archives.";
  }
};

export const chatWithScholar = async (history: {role: string, parts: {text: string}[]}[], message: string, language: Language) => {
  try {
    const systemInstruction = language === 'zh'
      ? `你是一位睿智且温和的中国文学专家。你回答关于唐宋时期“过年”习俗、诗歌和诗人的问题。保持回答简洁而深刻。引用相关名句。请用中文回答。`
      : `You are a wise and gentle Chinese literature expert. You answer questions about poems, poets, and cultural traditions regarding the Chinese New Year (Guo Nian) in Tang and Song dynasties. Keep answers concise but profound. Use examples from famous poems where relevant.`;

    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      history: history,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Chat Error:", error);
    throw error;
  }
};
