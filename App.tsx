import React, { useState, useEffect } from 'react';
import { CalculatorForm } from './components/CalculatorForm';
import { ResultsSection } from './components/ResultsSection';
import { ReferenceTable } from './components/ReferenceTable';
import { translations } from './constants';
import { CalculationData, CourseType, LocationType, Language, Theme } from './types';
import { calculatePrice } from './utils/calculations';

const App: React.FC = () => {
  // Default theme is 'dark' as requested
  const [theme, setTheme] = useState<Theme>('dark');
  const [lang, setLang] = useState<Language>('en');
  
  const [courseType, setCourseType] = useState<CourseType>('');
  const [location, setLocation] = useState<LocationType>('');
  const [participants, setParticipants] = useState<number>(1);
  const [calculationData, setCalculationData] = useState<CalculationData | null>(null);

  // Apply theme class to body
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleCalculate = () => {
    if (!courseType || !location || participants < 1) {
      alert(lang === 'en' ? 'Please fill in all fields' : 'Sila isi semua ruangan');
      return;
    }
    const data = calculatePrice(courseType, location, participants);
    setCalculationData(data);
    
    // Smooth scroll to results
    setTimeout(() => {
      document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const t = translations[lang];

  return (
    <div className={`min-h-screen p-4 md:p-8 transition-colors duration-300 text-gray-900 dark:text-gray-100`}>
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header Section */}
        <header className="bg-white dark:bg-brand-bgDarkSec p-6 rounded-2xl shadow-lg text-center relative overflow-hidden">
          
          {/* Controls - Moved to top and made smaller */}
          <div className="flex justify-center gap-4 mb-6 flex-wrap z-20 relative">
            {/* Language Toggle */}
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full shadow-inner border border-gray-200 dark:border-gray-700">
              <span className={`text-xs font-semibold ${lang === 'en' ? 'text-brand-red' : 'text-gray-500'}`}>English</span>
              <button 
                onClick={() => setLang(l => l === 'en' ? 'ms' : 'en')}
                className="relative w-10 h-5 bg-slate-300 dark:bg-slate-600 rounded-full transition-colors focus:outline-none"
              >
                <div className={`absolute top-1 left-1 w-3 h-3 bg-white rounded-full shadow-md transform transition-transform duration-300 ${lang === 'ms' ? 'translate-x-5' : ''}`} />
              </button>
              <span className={`text-xs font-semibold ${lang === 'ms' ? 'text-brand-red' : 'text-gray-500'}`}>Bahasa</span>
            </div>

            {/* Theme Toggle */}
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full shadow-inner border border-gray-200 dark:border-gray-700">
              <span className={`text-xs font-semibold ${theme === 'light' ? 'text-yellow-500' : 'text-gray-500'}`}>Light</span>
              <button 
                onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
                className="relative w-10 h-5 bg-slate-300 dark:bg-slate-600 rounded-full transition-colors focus:outline-none"
              >
                <div className={`absolute top-1 left-1 w-3 h-3 bg-white rounded-full shadow-md transform transition-transform duration-300 ${theme === 'dark' ? 'translate-x-5' : ''}`} />
              </button>
              <span className={`text-xs font-semibold ${theme === 'dark' ? 'text-blue-400' : 'text-gray-500'}`}>Dark</span>
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo - Updated for the new circular logo file */}
            <div className="mb-4">
              <img 
                src="logo.png" 
                alt="CPR Hero Logo" 
                className="h-32 w-32 object-contain rounded-full shadow-md bg-white"
                onError={(e) => {
                  // Fallback if logo.png is missing
                  e.currentTarget.src = "https://placehold.co/150x150/white/dc3545?text=CPR+Hero";
                  e.currentTarget.onerror = null;
                }}
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-brand-red mb-2 tracking-tight">
              {t.mainTitle}
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">
              {t.subtitle}
            </p>
          </div>
          
        </header>

        {/* Main Content Grid */}
        <main className="space-y-8">
          
          {/* Calculator Form */}
          <CalculatorForm 
            lang={lang}
            courseType={courseType}
            setCourseType={setCourseType}
            location={location}
            setLocation={setLocation}
            participants={participants}
            setParticipants={setParticipants}
            onCalculate={handleCalculate}
          />

          {/* Results Section */}
          <div id="results-section">
             {calculationData && (
                <ResultsSection data={calculationData} lang={lang} />
             )}
          </div>

          {/* Formula Reference Table */}
          <ReferenceTable lang={lang} />
        </main>
        
        <footer className="text-center text-gray-400 text-sm py-4">
          &copy; {new Date().getFullYear()} CPR Hero. VER18
        </footer>
      </div>
    </div>
  );
};

export default App;
