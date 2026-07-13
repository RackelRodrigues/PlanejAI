import { callGeminiAPI } from './geminiService';

export const getChatResponse = async (prompt: string) => {
  const response = await callGeminiAPI(prompt);

  return response.candidates[0].content.parts[0].text;
};
