import React from 'react';
import { Scroll, Sparkles, ChevronDown } from 'lucide-react';
import { Language, PoemCategory } from '../types';
import { TRANSLATIONS, POEM_CATEGORIES, STATIC_POEMS } from '../constants';

interface HeroProps {
  onStart: () => void;
  onCategorySelect: (cat: PoemCategory) => void;
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ onStart, onCategorySelect, language }) => {
  const t = TRANSLATIONS[language];
  const totalPoems = STATIC_POEMS.length;

  const getCategoryCount = (catId: PoemCategory) => {
    return STATIC_POEMS.filter(p => p.category === catId).length;
  };

  return (
    <div className="min-h-screen w-full bg-[#fdfbf7] flex flex-col items-center overflow-y-auto">
      {/* Hero Section */}
      <div className="relative h-screen w-full flex flex-col items-center justify-center text-center px-4 shrink-0">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
           <div className="absolute top-10 left-10 w-64 h-64 bg-red-800 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
           <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        </div>

        <div className="z-10 max-w-4xl space-y-8 animate-fade-in-up">
          <div className="flex items-center justify-center space-x-3 mb-4 text-red-800 opacity-80">
            <Sparkles className="w-5 h-5" />
            <span className="uppercase tracking-widest text-sm font-semibold">Tang & Song Dynasty Archives</span>
            <Sparkles className="w-5 h-5" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display font-bold text-stone-900 leading-tight">
            岁 <span className="text-red-800">月</span> 长 河
          </h1>
          <h2 className="text-2xl md:text-3xl font-serif text-stone-600 italic">
            {t.heroSubtitle}
          </h2>
          
          <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed pt-4">
            {t.heroDesc}
          </p>

          <div className="pt-10 flex flex-col items-center gap-4">
            <button 
              onClick={onStart}
              className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-red-900 transition duration-300 ease-out border-2 border-red-900 rounded-full shadow-md group hover:bg-red-900"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-900 group-hover:translate-x-0 ease">
                <Scroll className="w-6 h-6" />
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-red-900 transition-all duration-300 transform group-hover:translate-x-full ease">
                {t.enterArchives}
              </span>
              <span className="relative invisible">{t.enterArchives}</span>
            </button>
            <p className="text-stone-400 text-sm font-serif italic">
               {t.collectionCount} <span className="text-red-800 font-bold">{totalPoems}</span> {t.works}
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-10 text-stone-400 text-sm animate-bounce cursor-pointer flex flex-col items-center"
             onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}>
          <span className="mb-2">{t.exploreCategories}</span>
          <ChevronDown />
        </div>
      </div>

      {/* Category Guide Module */}
      <div id="categories" className="w-full py-20 px-4 bg-stone-100/50 min-h-[50vh]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold text-stone-800 mb-2">{t.exploreCategories}</h3>
            <div className="w-16 h-1 bg-red-900 mx-auto opacity-30"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POEM_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onCategorySelect(cat.id)}
                className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 text-left border border-stone-100 hover:border-red-900/30 flex flex-col justify-between h-48"
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-stone-900 group-hover:text-red-900 transition-colors">
                      {language === 'zh' ? cat.labelZh : cat.labelEn}
                    </h4>
                    <span className="bg-stone-100 text-stone-500 text-xs px-2 py-1 rounded-full group-hover:bg-red-50 group-hover:text-red-800 transition-colors">
                      {getCategoryCount(cat.id)} {t.worksCount}
                    </span>
                  </div>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {language === 'zh' ? cat.descZh : cat.descEn}
                  </p>
                </div>
                <div className="flex items-center text-red-800 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-semibold">
                  <span className="mr-2">{t.enterArchives}</span>
                  <Scroll size={14} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;