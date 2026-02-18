import ReactMarkdown from 'react-markdown';
import { Bot, User } from 'lucide-react';
import type { ChatMessage as ChatMessageType } from '@/types/chat';

interface ChatMessageProps {
  message: ChatMessageType;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : ''}`}>
      {/* Avatar */}
      <div
        className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
          isUser
            ? 'bg-white/10'
            : 'bg-gradient-to-r from-cyan-500 to-blue-500'
        }`}
      >
        {isUser ? (
          <User className="h-3.5 w-3.5 text-gray-300" />
        ) : (
          <Bot className="h-3.5 w-3.5 text-white" />
        )}
      </div>

      {/* Bubble */}
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 ${
          isUser
            ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-tr-md'
            : 'bg-white/5 text-gray-200 rounded-tl-md'
        }`}
      >
        {isUser ? (
          <p className="text-sm leading-relaxed">{message.content}</p>
        ) : (
          <div className="text-sm leading-relaxed prose prose-invert prose-sm max-w-none prose-p:my-1.5 prose-ul:my-1.5 prose-li:my-0.5 prose-headings:text-cyan-400 prose-headings:text-sm prose-headings:mt-3 prose-headings:mb-1 prose-strong:text-white prose-a:text-cyan-400">
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
