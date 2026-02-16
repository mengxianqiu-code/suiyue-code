import React, { useState } from 'react';
import { generateLiteraryAnalysis } from '../services/geminiService';
import { PROMPTS, TRANSLATIONS } from '../constants';
import { Language } from '../types';
import { BookOpen, Sparkles, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface FrameworkAnalysisProps {
  language: Language;
}

const FrameworkAnalysis: React.FC<FrameworkAnalysisProps> = ({ language }) => {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [generated, setGenerated] = useState<boolean>(false);
  const t = TRANSLATIONS[language];

  const handleGenerate = async () => {
    setLoading(true);
    // Select the correct prompt based on language
    const prompt = PROMPTS[language];
    const result = await generateLiteraryAnalysis(prompt, language);
    setContent(result);
    setLoading(false);
    setGenerated(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 min-h-screen">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-display font-bold text-stone-900 mb-4">{t.analysisTitle}</h2>
        <p className="text-stone-600">
          {t.analysisDesc}
        </p>
      </div>

      {!generated && !loading && (
        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-lg shadow-sm border border-stone-100 p-8">
          <BookOpen className="w-16 h-16 text-stone-300 mb-6" />
          <h3 className="text-xl font-bold text-stone-800 mb-2">{t.unlockAnalysis}</h3>
          <p className="text-stone-500 text-center max-w-md mb-8">
             {language === 'zh' 
               ? "请教 AI 博士，生成一份关于唐宋新年时间、空间与仪式的深度研究报告。"
               : "Consult the AI scholar to generate a real-time, comprehensive framework analyzing the temporal, spatial, and ritual dimensions of the New Year."}
          </p>
          <button
            onClick={handleGenerate}
            className="flex items-center space-x-2 bg-stone-900 hover:bg-stone-800 text-white px-6 py-3 rounded-full transition-colors"
          >
            <Sparkles className="w-4 h-4" />
            <span>{t.generateBtn}</span>
          </button>
        </div>
      )}

      {loading && (
        <div className="flex flex-col items-center justify-center py-32 space-y-4">
          <Loader2 className="w-10 h-10 text-red-800 animate-spin" />
          <p className="text-stone-500 animate-pulse">{t.loading}</p>
        </div>
      )}

      {generated && !loading && (
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border-t-4 border-red-900 animate-fade-in">
          <div className="prose prose-stone prose-lg max-w-none prose-headings:font-display prose-headings:text-red-950 prose-a:text-red-800">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
          <div className="mt-10 pt-10 border-t border-stone-100 text-center">
             <button onClick={handleGenerate} className="text-sm text-stone-400 hover:text-red-800 transition-colors">
               {t.regenerate}
             </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FrameworkAnalysis;