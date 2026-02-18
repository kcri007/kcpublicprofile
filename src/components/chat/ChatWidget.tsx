import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { ChatWindow } from './ChatWindow';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [startInJobSpec, setStartInJobSpec] = useState(false);

  // Listen for custom event to open chat
  useEffect(() => {
    const handleOpen = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail?.jobSpec) {
        setStartInJobSpec(true);
      }
      setIsOpen(true);
    };
    window.addEventListener('open-chat', handleOpen);
    return () => window.removeEventListener('open-chat', handleOpen);
  }, []);

  // Prevent body scroll when chat is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setStartInJobSpec(false);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <ChatWindow
            onClose={handleClose}
            initialJobSpec={startInJobSpec}
          />
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/20 flex items-center justify-center hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-200"
        aria-label="Open AI chat"
      >
        <MessageSquare className="h-6 w-6" />
      </button>
    </>
  );
}
