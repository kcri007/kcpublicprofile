import { ClipboardPaste } from 'lucide-react';
import { suggestedQuestions } from '@/data/suggested-questions';

interface SuggestedQuestionsProps {
  onSelect: (question: string) => void;
  onPasteJobSpec: () => void;
}

export function SuggestedQuestions({ onSelect, onPasteJobSpec }: SuggestedQuestionsProps) {
  return (
    <div className="space-y-3 pt-2">
      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Try asking</p>
      <div className="flex flex-wrap gap-2">
        {suggestedQuestions.map((question) => (
          <button
            key={question}
            onClick={() => onSelect(question)}
            className="text-xs px-3 py-2 rounded-lg border border-white/10 text-gray-300 hover:text-white hover:border-cyan-500/30 hover:bg-white/5 transition-all text-left leading-relaxed"
          >
            {question}
          </button>
        ))}
        <button
          onClick={onPasteJobSpec}
          className="text-xs px-3 py-2 rounded-lg border border-cyan-500/20 text-cyan-400 hover:text-white hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all text-left leading-relaxed flex items-center gap-1.5"
        >
          <ClipboardPaste className="h-3 w-3" />
          Paste a job spec to check fit
        </button>
      </div>
    </div>
  );
}
