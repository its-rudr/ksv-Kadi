import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { processQuery } from '../../utils/chatbotEngine';
import { chatKnowledge } from '../../data/chatKnowledge';

const WELCOME = "Hi! I'm KSV Assistant. Ask me about admissions, courses, campus, placements, research, or anything about KSV.";

const SUGGESTIONS = [
  'How to apply for admission?',
  'What courses are offered?',
  'Tell me about placements',
  'Where is the campus?',
];

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{ from: 'bot', text: WELCOME }]);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  function send(text) {
    const q = text.trim();
    if (!q) return;
    const answer = processQuery(q, chatKnowledge);
    setMessages((prev) => [
      ...prev,
      { from: 'user', text: q },
      { from: 'bot', text: answer },
    ]);
    setInput('');
  }

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-80 sm:w-96 rounded-2xl overflow-hidden flex flex-col"
            style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.18)', maxHeight: '520px' }}
          >
            <div className="flex items-center gap-3 px-4 py-3" style={{ background: '#1A3A6B' }}>
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-heading"
                style={{ background: '#C8973A', color: '#1A3A6B' }}
              >
                KSV
              </div>
              <div className="flex-1">
                <p className="font-heading font-semibold text-sm text-white leading-none">KSV Assistant</p>
                <p className="font-body text-xs text-white/60 mt-0.5">Powered by local knowledge base</p>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-white" style={{ minHeight: 0 }}>
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className="max-w-[80%] rounded-2xl px-4 py-2.5 font-body text-sm leading-relaxed"
                    style={
                      msg.from === 'user'
                        ? { background: '#1A3A6B', color: '#fff', borderBottomRightRadius: 4 }
                        : { background: '#F8F9FC', color: '#0D1B2A', borderBottomLeftRadius: 4, border: '1px solid #DDE3EE' }
                    }
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {messages.length === 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2 bg-white">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="font-body text-xs px-3 py-1.5 rounded-full border transition-colors hover:bg-ksv-primary hover:text-white hover:border-ksv-primary"
                    style={{ borderColor: '#DDE3EE', color: '#1A3A6B' }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <div className="flex items-center gap-2 px-3 py-3 border-t" style={{ background: '#fff', borderColor: '#DDE3EE' }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask me anything about KSV…"
                className="flex-1 font-body text-sm outline-none px-3 py-2 rounded-full border"
                style={{ borderColor: '#DDE3EE', background: '#F8F9FC' }}
              />
              <button
                onClick={() => send(input)}
                disabled={!input.trim()}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all disabled:opacity-40"
                style={{ background: '#1A3A6B' }}
              >
                <Send size={15} color="#fff" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors"
        style={{ background: open ? '#0D1B2A' : '#1A3A6B' }}
        aria-label="Toggle chat"
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={open ? 'close' : 'open'}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {open ? <X size={22} color="#fff" /> : <MessageCircle size={22} color="#fff" />}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </div>
  );
}