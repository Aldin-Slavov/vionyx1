import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'bg' ? 'en' : 'bg');
  };

  return (
    <button
  onClick={toggleLanguage}
  className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-100 shadow-sm transition-colors"
  aria-label="Switch language"
>
  <span className="text-sm font-medium text-gray-700">
    {language === 'bg' ? '🇧🇬 BG' : '🇺🇸 EN'}
  </span>
  <svg 
    className="w-4 h-4 text-gray-500" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M8 9l4-4 4 4m0 6l-4 4-4-4" 
    />
  </svg>
</button>
  );
}