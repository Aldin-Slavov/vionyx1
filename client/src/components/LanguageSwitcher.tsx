import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'bg' ? 'en' : 'bg');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-white hover:text-vionyx-accent hover:bg-white/10 flex items-center gap-2"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">
        {language === 'bg' ? 'EN' : 'BG'}
      </span>
    </Button>
  );
}