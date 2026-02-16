import React, { useState, useRef, useEffect } from 'react';
import { chatWithScholar } from '../services/geminiService';
import { Send, User, Bot, Sparkles } from 'lucide-react';
import { ChatMessage, Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface LiteratureChatProps {
  language: Language;
}

const LiteratureChat: React.FC<LiteratureChatProps> = ({ language }) => {
  const t = TRANSLATIONS[language];
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [initialized, setInitialized] = useState(false);
  
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Reset/Initialize chat when language changes
  useEffect(() => {
    setMessages([
      {
        id: 'welcome',
        role: 'model',
        text: t.chatWelcome,
        timestamp: Date.now()
      }
    ]);
    setInitialized(true);
  }, [language, t.chatWelcome]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      // Convert internal messages to Gemini history format
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const responseText = await chatWithScholar(history, userMsg.text, language);

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText || (language === 'zh' ? "抱歉，我现在思绪有些混乱。" : "I apologize, my thoughts are clouded currently."),
        timestamp: Date.now()
      };

      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: language === 'zh' ? "连接典籍库失败，请重试。" : "I am having trouble connecting to the historical archives. Please try again.",
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!initialized) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 h-[calc(100vh-100px)] flex flex-col">
       <div className="text-center mb-8">
        <h2 className="text-3xl font-display font-bold text-stone-900">{t.chatTitle}</h2>
        <p className="text-stone-500 text-sm">{t.chatDesc}</p>
      </div>

      <div className="flex-1 bg-white rounded-2xl shadow-lg overflow-hidden border border-stone-100 flex flex-col">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-stone-50/50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-stone-800' : 'bg-red-900'}`}>
                {msg.role === 'user' ? <User size={18} className="text-white" /> : <Bot size={18} className="text-white" />}
              </div>
              <div
                className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-stone-800 text-white rounded-tr-none'
                    : 'bg-white border border-stone-200 text-stone-800 rounded-tl-none shadow-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
             <div className="flex items-start gap-3">
               <div className="w-10 h-10 rounded-full bg-red-900 flex items-center justify-center shrink-0">
                 <Bot size={18} className="text-white" />
               </div>
               <div className="bg-white border border-stone-200 p-4 rounded-2xl rounded-tl-none shadow-sm">
                 <div className="flex gap-1">
                   <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce"></span>
                   <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce delay-100"></span>
                   <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce delay-200"></span>
                 </div>
               </div>
             </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-stone-100">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder={t.chatPlaceholder}
              className="w-full pl-6 pr-14 py-4 bg-stone-50 border border-stone-200 rounded-full focus:outline-none focus:ring-2 focus:ring-red-900/20 focus:border-red-900 transition-all text-stone-800 placeholder:text-stone-400"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              className="absolute right-2 top-2 p-2 bg-red-900 text-white rounded-full hover:bg-red-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isTyping ? <Sparkles size={20} className="animate-spin" /> : <Send size={20} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiteratureChat;