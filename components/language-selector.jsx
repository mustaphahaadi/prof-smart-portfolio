import { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (languageCode) => {
    setSelectedLanguage(languageCode);
    setIsOpen(false);
    // Here you would typically handle the language change
    // For example, using i18n or updating the app's language state
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center h-10 px-4 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <Globe className="h-4 w-4 text-primary mr-2" />
        <span className="text-sm font-medium text-foreground">
          {languages.find(lang => lang.code === selectedLanguage)?.name}
        </span>
        <ChevronDown
          className={`ml-1 h-4 w-4 text-foreground transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-xl bg-card border border-border shadow-lg py-1 z-50 ring-1 ring-border/20">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full text-left px-4 py-2 text-sm flex items-center ${
                selectedLanguage === language.code
                  ? 'bg-primary/10 text-primary'
                  : 'text-foreground hover:bg-accent hover:text-foreground'
              } transition-colors`}
            >
              {selectedLanguage === language.code && (
                <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              )}
              <span className={selectedLanguage === language.code ? "ml-2" : "ml-6"}>
                {language.name}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}