// src/components/Header.tsx
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  // Функция за скролиране към секция или навигация към страница с котва
  const navigateToSection = (path: string, sectionId?: string) => {
    const targetPath = sectionId ? `${path}#${sectionId}` : path;

    if (location !== path && sectionId) {
      // Ако сме на различна страница и има секция, пренасочваме към новия URL с котва
      window.location.href = targetPath;
    } else if (location !== path) {
       // Ако сме на различна страница и НЯМА секция, пренасочваме към новия URL
       window.location.href = targetPath;
    } else if (sectionId) {
      // Ако сме на същата страница и има секция, просто скролираме
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        // Затваряме мобилното меню, ако е отворено
        setIsOpen(false);
      }
    } else {
        // Ако сме на същата страница и НЯМА секция (напр. за минори), затваряме менюто
        setIsOpen(false);
    }
  };

  // Функция за скролиране (запазена за съвместимост, ако я използват други части)
  const scrollToSection = (sectionId: string) => {
    if (location !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActive = (path: string) => {
    if (path === "home") return location === "/";
    return false;
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-vionyx-blue">VIONYX</h1>
              <p className="text-xs text-vionyx-gray">Security Solutions</p>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection("home")}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("home") ? "text-gray-900" : "text-gray-600 hover:text-vionyx-blue"
                }`}
              >
                {t('nav.home')}
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="text-gray-600 hover:text-vionyx-blue px-3 py-2 text-sm font-medium transition-colors"
              >
                {t('nav.services')}
              </button>
              
              {/* Променена връзка "Цени" на "Референции" 
              <button 
                 onClick={() => navigateToSection('references')} // <<< Променено
                 className="text-gray-600 hover:text-vionyx-blue px-3 py-2 text-sm font-medium transition-colors"
              >
                {t('nav.pricing')} {/* Ще показва "Референции"/"References" благодарение на LanguageContext 
              </button>
              Край на промяната */}
              
              {/* Променена връзка "Цени" на "Референции" */}
              <Link 
                 href="/pricing" // <<< Променено на Link, сочещ към /pricing
                 className="text-gray-600 hover:text-vionyx-blue px-3 py-2 text-sm font-medium transition-colors"
              >
                {t('nav.pricing')} {/* Ще показва "Референции"/"References" благодарение на LanguageContext */}
              </Link>
              {/* Край на промяната */}



              <button 
                onClick={() => scrollToSection("about")}
                className="text-gray-600 hover:text-vionyx-blue px-3 py-2 text-sm font-medium transition-colors"
              >
                {t('nav.about')}
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 hover:text-vionyx-blue px-3 py-2 text-sm font-medium transition-colors"
              >
                {t('nav.contact')}
              </button>
              <Link href="/minors-declaration">
                <Button className="bg-vionyx-accent text-white hover:bg-blue-700">
                  {t('nav.minorsDeclaration')}
                </Button>
              </Link>
            </div>
            <LanguageSwitcher />
          </div>
          
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  <div className="flex justify-end mb-4">
                    <LanguageSwitcher />
                  </div>
                  <button 
                    onClick={() => {
                      scrollToSection("home");
                      setIsOpen(false);
                    }}
                    className="text-left px-2 py-1 text-sm font-medium text-gray-600 hover:text-vionyx-blue transition-colors"
                  >
                    {t('nav.home')}
                  </button>
                  <button 
                    onClick={() => {
                      scrollToSection("services");
                      setIsOpen(false);
                    }}
                    className="text-left px-2 py-1 text-sm font-medium text-gray-600 hover:text-vionyx-blue transition-colors"
                  >
                    {t('nav.services')}
                  </button>
                  
                  {/* Променена връзка "Цени" на "Референции" в мобилното меню */}
                  <button 
                     onClick={() => {
                       navigateToSection('/about', 'references'); // <<< Променено
                       // setIsOpen(false); // handle се извиква в navigateToSection
                     }}
                     className="text-left px-2 py-1 text-sm font-medium text-gray-600 hover:text-vionyx-blue transition-colors w-full"
                  >
                    {t('nav.pricing')} {/* Ще показва "Референции"/"References" */}
                  </button>
                  {/* Край на промяната */}

                  <button 
                    onClick={() => {
                      scrollToSection("about");
                      setIsOpen(false);
                    }}
                    className="text-left px-2 py-1 text-sm font-medium text-gray-600 hover:text-vionyx-blue transition-colors"
                  >
                    {t('nav.about')}
                  </button>
                  <button 
                    onClick={() => {
                      scrollToSection("contact");
                      setIsOpen(false);
                    }}
                    className="text-left px-2 py-1 text-sm font-medium text-gray-600 hover:text-vionyx-blue transition-colors"
                  >
                    {t('nav.contact')}
                  </button>
                  <Link href="/minors-declaration">
                    <Button 
                      className="bg-vionyx-accent text-white hover:bg-blue-700 w-full justify-start"
                      onClick={() => setIsOpen(false)}
                    >
                      {t('nav.minorsDeclaration')}
                    </Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}