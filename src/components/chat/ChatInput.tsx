import { useState, useRef, useEffect } from 'react';
import { Send, ClipboardPaste, Upload } from 'lucide-react';

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading: boolean;
  jobSpecMode: boolean;
  onToggleJobSpec: () => void;
}

export function ChatInput({ onSend, isLoading, jobSpecMode, onToggleJobSpec }: ChatInputProps) {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (jobSpecMode) {
      textareaRef.current?.focus();
    } else {
      inputRef.current?.focus();
    }
  }, [jobSpecMode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() && !isLoading) {
      if (jobSpecMode) {
        onSend(
          `Here is a job description. Based on Kevin's background and experience, would he be a good fit for this role?\n\n---\n${value.trim()}`
        );
        onToggleJobSpec();
      } else {
        onSend(value);
      }
      setValue('');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = ev.target?.result as string;
      if (text) setValue((prev) => (prev ? prev + '\n\n' + text : text));
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  if (jobSpecMode) {
    return (
      <form onSubmit={handleSubmit} className="px-5 py-4 border-t border-white/10">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-gray-400">
              Paste a job description, project brief, or role requirements
            </span>
            <button
              type="button"
              onClick={() => {
                setValue('');
                onToggleJobSpec();
              }}
              className="text-xs text-gray-500 hover:text-white transition-colors"
            >
              Cancel
            </button>
          </div>
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Paste the job description here..."
            rows={6}
            disabled={isLoading}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 resize-none disabled:opacity-50"
          />
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-white transition-colors"
            >
              <Upload className="h-3.5 w-3.5" />
              Upload .txt file
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".txt,.text"
              onChange={handleFileUpload}
              className="hidden"
            />
            <div className="flex-1" />
            <button
              type="submit"
              disabled={!value.trim() || isLoading}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-30"
            >
              Check Kevin's Fit
            </button>
          </div>
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="px-5 py-4 border-t border-white/10">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onToggleJobSpec}
          className="p-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors flex-shrink-0"
          title="Paste a job description to check fit"
        >
          <ClipboardPaste className="h-4 w-4" />
        </button>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Ask about Kevin's experience..."
          disabled={isLoading}
          className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 focus:border-cyan-400/30 disabled:opacity-50 transition-colors"
        />
        <button
          type="submit"
          disabled={!value.trim() || isLoading}
          className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:opacity-90 transition-opacity disabled:opacity-30 flex-shrink-0"
          aria-label="Send message"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
