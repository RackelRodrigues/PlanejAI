import { useCallback, useState } from 'react';

import { AI_ASSISTANT_PROMPT } from '../data/chatPrompt';
import type { ChatMessage } from '../services/aiService';
import { getChatResponse } from '../services/chatService';
import { useSimulationStorage } from './useSimulationStorage';

export function useChat(id: string) {
  const { getFormData, updateSimulation } = useSimulationStorage();

  const simulation = getFormData(id);

  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    if (simulation?.messages) {
      return JSON.parse(simulation.messages) as ChatMessage[];
    }
    return [];
  });

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(
    async (question: string) => {
      if (!simulation) return;

      setIsLoading(true);
      setError(null);

      const userMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'user',
        content: question,
        createdAt: new Date().toISOString(),
      };

      const updatedMessages = [...messages, userMessage];

      setMessages(updatedMessages);

      try {
        const history = updatedMessages
          .map(
            (message) => `${message.role === 'user' ? 'Usuário' : 'Consultor'}: ${message.content}`,
          )
          .join('\n\n');

        const prompt = AI_ASSISTANT_PROMPT({
          simulation: JSON.stringify(simulation, null, 2),
          history,
          question,
        });

        const answer = await getChatResponse(prompt);

        const assistantMessage: ChatMessage = {
          id: crypto.randomUUID(),
          role: 'assistant',
          content: answer,
          createdAt: new Date().toISOString(),
        };

        const finalMessages = [...updatedMessages, assistantMessage];

        setMessages(finalMessages);

        updateSimulation(id, {
          ...simulation,
          messages: JSON.stringify(finalMessages),
        });

        console.log('Resposta recebida:', answer);
      } catch {
        setError('Erro ao enviar mensagem.');
      } finally {
        setIsLoading(false);
      }
    },
    [id, messages, simulation, updateSimulation],
  );

  return {
    messages,
    sendMessage,
    isLoading,
    error,
  };
}
