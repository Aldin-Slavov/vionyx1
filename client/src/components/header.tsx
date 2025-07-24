import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

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
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection("home")}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("home") ? "text-gray-900" : "text-gray-600 hover:text-vionyx-blue"
                }`}
              >
                Начало
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="text-gray-600 hover:text-vionyx-blue px-3 py-2 text-sm font-medium transition-colors"
              >
                Услуги
              </button>
              <button 
                onClick={() => scrollToSection("clients")}
                className="text-gray-600 hover:text-vionyx-blue px-3 py-2 text-sm font-medium transition-colors"
              >
                Клиенти
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-gray-600 hover:text-vionyx-blue px-3 py-2 text-sm font-medium transition-colors"
              >
                За нас
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 hover:text-vionyx-blue px-3 py-2 text-sm font-medium transition-colors"
              >
                Контакти
              </button>
              <Link href="/minors-declaration">
                <Button className="bg-vionyx-accent text-white hover:bg-blue-700">
                  Декларация за непълнолетни
                </Button>
              </Link>
            </div>
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
                  <button 
                    onClick={() => {
                      scrollToSection("home");
                      setIsOpen(false);
                    }}
                    className="text-left px-2 py-1 text-sm font-medium text-gray-600 hover:text-vionyx-blue transition-colors"
                  >
                    Начало
                  </button>
                  <button 
                    onClick={() => {
                      scrollToSection("services");
                      setIsOpen(false);
                    }}
                    className="text-left px-2 py-1 text-sm font-medium text-gray-600 hover:text-vionyx-blue transition-colors"
                  >
                    Услуги
                  </button>
                  <button 
                    onClick={() => {
                      scrollToSection("clients");
                      setIsOpen(false);
                    }}
                    className="text-left px-2 py-1 text-sm font-medium text-gray-600 hover:text-vionyx-blue transition-colors"
                  >
                    Клиенти
                  </button>
                  <button 
                    onClick={() => {
                      scrollToSection("about");
                      setIsOpen(false);
                    }}
                    className="text-left px-2 py-1 text-sm font-medium text-gray-600 hover:text-vionyx-blue transition-colors"
                  >
                    За нас
                  </button>
                  <button 
                    onClick={() => {
                      scrollToSection("contact");
                      setIsOpen(false);
                    }}
                    className="text-left px-2 py-1 text-sm font-medium text-gray-600 hover:text-vionyx-blue transition-colors"
                  >
                    Контакти
                  </button>
                  <Link href="/minors-declaration">
                    <Button 
                      className="bg-vionyx-accent text-white hover:bg-blue-700 w-full justify-start"
                      onClick={() => setIsOpen(false)}
                    >
                      Декларация за непълнолетни
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
