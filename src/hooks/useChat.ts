import { useState, useCallback, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import type { ChatMessage } from '@/types/chat';

function generateId() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

function getSessionId(): string {
  const key = 'chat-session-id';
  let id = sessionStorage.getItem(key);
  if (!id) {
    id = generateId();
    sessionStorage.setItem(key, id);
  }
  return id;
}

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sessionId] = useState(getSessionId);

  // Add welcome message on mount
  useEffect(() => {
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        content:
          "Hi! I'm Kevin's AI assistant. I can answer questions about his professional background, skills, and experience in Voice AI and enterprise telephony. What would you like to know?",
        timestamp: new Date(),
      },
    ]);
  }, []);

  const sendMessage = useCallback(
    async (content: string) => {
      if (!content.trim() || isLoading) return;

      const userMessage: ChatMessage = {
        id: generateId(),
        role: 'user',
        content: content.trim(),
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setIsLoading(true);
      setError(null);

      try {
        // Build messages array for the API (exclude welcome message)
        const apiMessages = [...messages.filter((m) => m.id !== 'welcome'), userMessage].map(
          (m) => ({
            role: m.role,
            content: m.content,
          })
        );

        const { data, error: fnError } = await supabase.functions.invoke('chat', {
          body: { messages: apiMessages, sessionId },
        });

        if (fnError) throw fnError;

        const assistantMessage: ChatMessage = {
          id: generateId(),
          role: 'assistant',
          content: data.message,
          timestamp: new Date(),
          sources: data.sources,
        };

        setMessages((prev) => [...prev, assistantMessage]);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'Failed to get response. Please try again.';
        setError(errorMessage);

        // Add error message as assistant response
        setMessages((prev) => [
          ...prev,
          {
            id: generateId(),
            role: 'assistant',
            content: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment.",
            timestamp: new Date(),
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    },
    [messages, isLoading, sessionId]
  );

  const clearMessages = useCallback(() => {
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        content:
          "Hi! I'm Kevin's AI assistant. I can answer questions about his professional background, skills, and experience in Voice AI and enterprise telephony. What would you like to know?",
        timestamp: new Date(),
      },
    ]);
    setError(null);
  }, []);

  return { messages, isLoading, error, sendMessage, clearMessages };
}
