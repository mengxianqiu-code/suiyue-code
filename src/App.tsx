import React, { useState } from 'react';
import Hero from './components/Hero';
import PoemGallery from './components/PoemGallery';
import LiteratureChat from './components/LiteratureChat';
import { ViewState, Language, PoemCategory } from './types';
import { TRANSLATIONS } from './constants';
import { LayoutGrid, MessageCircle, Globe } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.HOME);
  const [language, setLanguage] = useState<Language>('zh'); 
  const [selectedCategory, setSelectedCategory] = useState<PoemCategory | 'all'>('all');

  const t = TRANSLATIONS[language];

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'zh' : 'en');
  };

  const handleCategorySelect = (category: PoemCategory | 'all') => {
    setSelectedCategory(category);
    setView(ViewState.GALLERY);
  };

  const NavItem = ({ target, icon: Icon, label }: { target: ViewState; icon: any; label: string }) => (
    <button
      onClick={() => setView(target)}
      className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
        view === target 
          ? 'bg-red-900 text-white shadow-md' 
          : 'text-stone-500 hover:bg-stone-100 hover:text-red-900'
      }`}
    >
      <Icon size={18} />
      <span className="font-medium text-sm">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-[#fdfbf7] flex flex-col">
      {/* Navigation - Added pt-[env(safe-area-inset-top)] for mobile status bars */}
      <nav className={`sticky top-0 z-50 bg-[#fdfbf7]/80 backdrop-blur-md border-b border-stone-200 transition-all pt-[env(safe-area-inset-top)] ${view === ViewState.HOME ? 'absolute w-full border-none bg-transparent' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
           <div 
             className="flex items-center gap-2 cursor-pointer"
             onClick={() => setView(ViewState.HOME)}
           >
              {view !== ViewState.HOME && (
                <div className="w-8 h-8 bg-red-900 rounded-lg flex items-center justify-center text-white font-serif font-bold">
                  岁
                </div>
              )}
              {view !== ViewState.HOME && (
                 <span className="font-display font-bold text-stone-900 text-lg">Suiyue</span>
              )}
           </div>

           <div className="flex items-center gap-2">
             {view !== ViewState.HOME && (
               <>
                <NavItem target={ViewState.GALLERY} icon={LayoutGrid} label={t.navAnthology} />
                <NavItem target={ViewState.CHAT} icon={MessageCircle} label={t.navChat} />
                <div className="w-px h-6 bg-stone-300 mx-2"></div>
               </>
             )}
             
             {/* Language Switcher */}
             <button
               onClick={toggleLanguage}
               className="flex items-center space-x-1 px-3 py-2 text-stone-600 hover:text-red-900 transition-colors border border-stone-200 rounded-full bg-white/50 hover:bg-white"
             >
               <Globe size={16} />
               <span className="text-xs font-bold uppercase tracking-wider w-6 text-center">{language === 'en' ? 'CN' : 'EN'}</span>
             </button>
           </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {view === ViewState.HOME && (
          <Hero 
            onStart={() => handleCategorySelect('all')} 
            onCategorySelect={handleCategorySelect}
            language={language} 
          />
        )}
        
        {view === ViewState.GALLERY && (
          <div className="animate-fade-in">
            <PoemGallery 
              language={language} 
              selectedCategory={selectedCategory} 
              onCategorySelect={setSelectedCategory}
            />
          </div>
        )}
        
        {view === ViewState.CHAT && (
          <div className="animate-fade-in">
            <LiteratureChat language={language} />
          </div>
        )}
      </main>

      {/* Footer */}
      {view !== ViewState.HOME && (
        <footer className="border-t border-stone-200 py-8 text-center bg-stone-50 pb-[env(safe-area-inset-bottom)]">
          <p className="text-stone-400 text-sm font-serif italic">
            {t.footerQuote}
          </p>
          <p className="text-stone-300 text-xs mt-2">
            Powered by Gemini • React • Tailwind
          </p>
        </footer>
      )}
    </div>
  );
};

export default App;