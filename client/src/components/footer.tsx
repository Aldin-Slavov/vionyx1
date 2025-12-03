// src/components/Footer.tsx
import { Link } from "wouter";
import { MapPin, Phone, Mail, Facebook, Twitter } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  // Функция за скролиране до секция по ID
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (window.location.pathname !== '/') {
      // Ако секцията не е на текущата страница и не сме на началната, пренасочваме
      window.location.href = `/#${sectionId}`;
    }
    // Ако не сме на / и секцията не е намерена, няма действие (или може да се добави логика)
  };

  return (
    <footer className="bg-vionyx-blue text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">VIONYX</h3>
            <p className="text-blue-200 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/Vionyx-LTD-Security/100057514656993/" className="text-blue-300 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2 text-blue-200">
              <li><Link href="/services/okhrana-na-meropriyatia" className="hover:text-white transition-colors">{t('services.eventSecurity')}</Link></li>
              <li><Link href="/services/okhrana-na-imushtestvo" className="hover:text-white transition-colors">{t('services.propertySecurity')}</Link></li>
              <li><Link href="/services/signalno-okhranitelna-deynost" className="hover:text-white transition-colors">{t('services.alarmSecurity')}</Link></li>
              <li><Link href="/services/okhrana-na-obekti-nedvizhimi" className="hover:text-white transition-colors">{t('services.realEstateSecurity')}</Link></li>
              <li><Link href="/services/okhrana-na-selskostopansko-imushtestvo" className="hover:text-white transition-colors">{t('services.agriculturalSecurity')}</Link></li>
              <li><Link href="/services/styuarding-kontrol-bileti" className="hover:text-white transition-colors">{t('services.stewarding')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2 text-blue-200">
              {/* Променена връзка "За нас" да скролира до #about */}
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-white transition-colors text-left w-full" // text-left и w-full за стил като линк
                >
                  {t('footer.aboutUs')}
                </button>
              </li>
              {/* Край на промяната */}
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.team')}</a></li>
              <li>
               <a 
                href="/downloads/ЛИЦЕНЗ ВИОНИКС.pdf"
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors" >
                 {t('footer.licenses')}
                </a>
              </li>
              <li><Link href="/careers" className="hover:text-white transition-colors">{t('footer.careers')}</Link></li>
              <li><Link href="/minors-declaration" className="hover:text-white transition-colors">{t('nav.minorsDeclaration')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.contacts')}</h4>
            <ul className="space-y-2 text-blue-200">
              <li className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                <span>ж.к. Дружба, бл.44, София, България</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                <span>+359 89 566 2600</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                <span>savov@vionyx.eu</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">
              {t('footer.rights')}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
                {t('footer.terms')}
              </a>
              <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
                {t('footer.cookies')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}