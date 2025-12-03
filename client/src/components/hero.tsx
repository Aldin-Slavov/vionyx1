// src/components/Hero.tsx
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t, language } = useLanguage(); // Вземаме и езика
  
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-r from-vionyx-blue to-vionyx-gray text-green py-20 lg:py-32">
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/services/vnx_hero_img.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* СЛОГАН - Голям като първоначалното заглавие */}
          {/* Променен е цветът на текста на слогана на #FFD700 (златист) */}
          <p className={`text-4xl md:text-6xl font-bold mb-4 leading-tight ${language === 'bg' ? '' : 'italic'}`}> 
            {language === 'bg' ? 'Нашата мисия е Вашата сигурност' : 'Your Security Is Our Mission'}
          </p>
          
          {/* ОСНОВНО ЗАГЛАВИЕ - Намалено до размера на първоначалното подзаглавие */}
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 leading-tight"> 
            {t('hero.title')}
          </h1>
          
          {/* ПОДЗАГЛАВИЕ - Още по-малко */}
          <p className="text-base md:text-lg lg:text-xl mb-8 text-gray-200"> 
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={scrollToContact}
              className="bg-vionyx-accent hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold h-auto"
            >
              {t('hero.contactUs')}
            </Button>
            <Button 
              onClick={scrollToServices}
              variant="outline"
              className="border-2 border-white text-black hover:bg-white hover:text-vionyx-blue px-8 py-4 text-lg font-semibold h-auto"
            >
              {t('hero.learnMore')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}