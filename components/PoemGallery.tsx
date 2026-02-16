import React, { useMemo, useState } from 'react';
import { STATIC_POEMS, TRANSLATIONS, POEM_CATEGORIES } from '../constants';
import { Poem, Language, PoemCategory } from '../types';
import { Feather, Wine, Clock, MapPin, Sparkles, Loader2, ChevronDown, ChevronUp } from 'lucide-react';
import { generateLiteraryAnalysis } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';

const PoemCard: React.FC<{ poem: Poem; language: Language }> = ({ poem, language }) => {
  const t = TRANSLATIONS[language];
  const translationText = language === 'zh' ? poem.translationCn : poem.translation;
  
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisContent, setAnalysisContent] = useState<string | null>(null);
  const [showAnalysis, setShowAnalysis] = useState(false);

  const handleAnalysis = async () => {
    if (analysisContent) {
      setShowAnalysis(!showAnalysis);
      return;
    }

    setIsAnalyzing(true);
    setShowAnalysis(true);

    const prompt = language === 'zh' 
      ? `请对${poem.author}的诗作《${poem.title}》进行深度文学赏析。内容如下：“${poem.content}”。请着重分析：1. 意象与象征。2. 情感基调（如喜悦或感伤）。3. 提及的具体春节习俗。4. 这首诗为何在今天依然能引起现代人的共鸣。请用 Markdown 格式返回。`
      : `Please provide a deep literary analysis of the poem "${poem.title}" by ${poem.author}. Content: "${poem.content}". Focus on: 1. Imagery and Symbolism. 2. Emotional tone (e.g. Joy vs Melancholy). 3. The specific New Year customs mentioned. 4. Why this poem still resonates with modern people today. Return in Markdown.`;

    const result = await generateLiteraryAnalysis(prompt, language);
    setAnalysisContent(result);
    setIsAnalyzing(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 border-t-4 border-transparent hover:border-red-800 group relative overflow-hidden flex flex-col h-full">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Feather size={64} className="text-stone-800" />
      </div>
      
      <div className="flex justify-between items-start mb-4">
        <span className={`px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full ${poem.dynasty === 'Tang' ? 'bg-amber-100 text-amber-800' : 'bg-stone-100 text-stone-800'}`}>
          {poem.dynasty} {t.dynasty}
        </span>
        <div className="flex gap-1">
          {poem.themes.includes('Wine') && <Wine size={16} className="text-red-400" />}
          {poem.themes.includes('Time') && <Clock size={16} className="text-stone-400" />}
          {poem.themes.includes('Travel') && <MapPin size={16} className="text-emerald-400" />}
        </div>
      </div>

      <h3 className="text-2xl font-bold text-stone-900 mb-1">{poem.title}</h3>
      <p className="text-sm text-stone-500 italic mb-6">{t.authorBy} {poem.author}</p>

      <div className="space-y-4 flex-grow">
        <div className="text-lg leading-loose text-stone-800 font-serif whitespace-pre-line border-l-2 border-red-100 pl-4">
          {poem.content}
        </div>
      </div>

      <div className="pt-6 mt-4 border-t border-stone-100 space-y-4">
          <p className="text-sm text-stone-500 leading-relaxed font-sans">
            {translationText}
          </p>

          <button 
            onClick={handleAnalysis}
            className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all ${
              showAnalysis 
                ? 'bg-stone-100 text-stone-700'
                : 'bg-red-50 text-red-900 hover:bg-red-100'
            }`}
          >
             {isAnalyzing ? (
               <><Loader2 size={16} className="animate-spin" /> {t.loadingAnalysis}</>
             ) : (
               <>
                 <Sparkles size={16} /> 
                 {showAnalysis ? t.closeAnalysis : t.analyzeBtn}
                 {showAnalysis ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
               </>
             )}
          </button>
          
          {showAnalysis && analysisContent && (
             <div className="mt-4 p-4 bg-stone-50 rounded-lg animate-fade-in border border-stone-100">
                <div className="prose prose-stone prose-sm max-w-none prose-headings:font-display prose-headings:text-red-950 prose-a:text-red-800">
                   <ReactMarkdown>{analysisContent}</ReactMarkdown>
                </div>
             </div>
          )}
      </div>
    </div>
  );
};

const CategoryFilter: React.FC<{ 
  selected: PoemCategory | 'all'; 
  onSelect: (c: PoemCategory | 'all') => void;
  language: Language; 
}> = ({ selected, onSelect, language }) => {
  const t = TRANSLATIONS[language];

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      <button
        onClick={() => onSelect('all')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          selected === 'all' 
            ? 'bg-red-900 text-white shadow-md' 
            : 'bg-white text-stone-600 hover:bg-stone-100'
        }`}
      >
        {t.filterAll}
      </button>
      {POEM_CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            selected === cat.id 
              ? 'bg-red-900 text-white shadow-md' 
              : 'bg-white text-stone-600 hover:bg-stone-100'
          }`}
        >
          {language === 'zh' ? cat.labelZh : cat.labelEn}
        </button>
      ))}
    </div>
  );
};

const PoemGallery: React.FC<{ 
  language: Language; 
  selectedCategory: PoemCategory | 'all';
  onCategorySelect: (c: PoemCategory | 'all') => void;
}> = ({ language, selectedCategory, onCategorySelect }) => {
  const t = TRANSLATIONS[language];

  const filteredPoems = useMemo(() => {
    if (selectedCategory === 'all') return STATIC_POEMS;
    return STATIC_POEMS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 min-h-screen">
      <div className="text-center mb-10 space-y-4">
        <h2 className="text-4xl font-display font-bold text-stone-900">{t.galleryTitle}</h2>
        <p className="text-stone-600 max-w-2xl mx-auto">
          {t.galleryDesc}
        </p>
      </div>

      <CategoryFilter 
        selected={selectedCategory} 
        onSelect={onCategorySelect} 
        language={language}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPoems.length > 0 ? (
          filteredPoems.map((poem) => (
            <PoemCard key={poem.id} poem={poem} language={language} />
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-stone-400 italic">
            No poems found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default PoemGallery;