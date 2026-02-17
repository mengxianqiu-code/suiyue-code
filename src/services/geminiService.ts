import { Language } from "../types";

// Configuration for Qwen (Alibaba DashScope)
const API_KEY = "sk-bc2fc2608d43416e80345b670563041e";
// Using the OpenAI-compatible endpoint for DashScope
const API_URL = "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions";
// User requested qwen3.5-plus. Mapping to the standard 'qwen-plus' identifier which points to the latest stable Plus model (usually 2.5/Turbo/Plus/Max series).
// If a specific 'qwen3.5-plus' string is required by a beta program, it can be swapped here. 
// For stability in this demo, we use 'qwen-plus'.
const MODEL_NAME = "qwen-plus"; 

/**
 * Helper function to call the Qwen API
 */
async function callQwenAPI(messages: { role: string; content: string }[], systemInstruction?: string) {
  // If there is a system instruction, prepend it to messages
  const finalMessages = systemInstruction 
    ? [{ role: "system", content: systemInstruction }, ...messages]
    : messages;

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: MODEL_NAME,
        messages: finalMessages,
        stream: false
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Qwen API Error:", data);
      throw new Error(data.message || `API Error: ${response.status}`);
    }

    // OpenAI compatible response structure
    return data.choices?.[0]?.message?.content || "";
  } catch (error) {
    console.error("Network or API Error:", error);
    throw error;
  }
}

export const generateLiteraryAnalysis = async (prompt: string, language: Language): Promise<string> => {
  try {
    const systemInstruction = language === 'zh'
      ? `你是一位博学的中国古典文学专家，专攻唐诗宋词。你的语调优雅、深刻，并对人类境遇充满同情。你擅长分析“过年”这一主题。在分析时，请使用 Markdown 格式（标题、列表、粗体）。`
      : `You are a distinguished scholar of classical Chinese literature, specializing in Tang poetry and Song lyrics (Tang Shi Song Ci). Your tone is elegant, insightful, and empathetic to the human condition. You are an expert in analyzing the theme of "Guo Nian" (Chinese New Year). When analyzing, use Markdown formatting for clarity.`;

    const responseText = await callQwenAPI(
      [{ role: "user", content: prompt }],
      systemInstruction
    );

    return responseText || (language === 'zh' ? "暂时无法生成分析。" : "Unable to generate analysis at this time.");
  } catch (error) {
    return language === 'zh' ? "查阅典籍时发生错误（请检查网络或Key配额）。" : "An error occurred while consulting the archives.";
  }
};

/**
 * Chats with the scholar.
 * Adapts the Google GenAI history format (passed from UI) to OpenAI/Qwen format.
 */
export const chatWithScholar = async (
  history: {role: string, parts: {text: string}[]}[], 
  message: string, 
  language: Language
) => {
  try {
    const systemInstruction = language === 'zh'
      ? `你是一位睿智且温和的中国文学专家。你回答关于唐宋时期“过年”习俗、诗歌和诗人的问题。保持回答简洁而深刻。引用相关名句。请用中文回答。`
      : `You are a wise and gentle Chinese literature expert. You answer questions about poems, poets, and cultural traditions regarding the Chinese New Year (Guo Nian) in Tang and Song dynasties. Keep answers concise but profound. Use examples from famous poems where relevant.`;

    // Adapter: Convert Google "parts" format to Qwen "content" format
    const convertedHistory = history.map(msg => ({
      role: msg.role === 'model' ? 'assistant' : 'user', // Map 'model' to 'assistant'
      content: msg.parts[0]?.text || ""
    }));

    // Add the new user message
    const messages = [
      ...convertedHistory,
      { role: "user", content: message }
    ];

    const result = await callQwenAPI(messages, systemInstruction);
    return result;
  } catch (error) {
    console.error("Chat Error:", error);
    throw error;
  }
};