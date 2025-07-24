import { Link } from "wouter";
import { MapPin, Phone, Mail, Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-vionyx-blue text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">VIONYX</h3>
            <p className="text-blue-200 mb-4">
              Професионални охранителни услуги с най-високи стандарти за качество и сигурност.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Услуги</h4>
            <ul className="space-y-2 text-blue-200">
              <li><Link href="/services/okhrana-na-meropriyatia" className="hover:text-white transition-colors">Охрана на мероприятия</Link></li>
              <li><Link href="/services/okhrana-na-imushtestvo" className="hover:text-white transition-colors">Охрана на имуществото</Link></li>
              <li><Link href="/services/signalno-okhranitelna-deynost" className="hover:text-white transition-colors">Сигнално-охранителна дейност</Link></li>
              <li><Link href="/services/okhrana-na-obekti-nedvizhimi" className="hover:text-white transition-colors">Охрана на недвижими имоти</Link></li>
              <li><Link href="/services/okhrana-na-selskostopansko-imushtestvo" className="hover:text-white transition-colors">Селскостопанска охрана</Link></li>
              <li><Link href="/services/styuarding-kontrol-bileti" className="hover:text-white transition-colors">Стюардинг услуги</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Компания</h4>
            <ul className="space-y-2 text-blue-200">
              <li><Link href="/#about" className="hover:text-white transition-colors">За нас</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Нашият екип</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Лицензи</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Кариери</a></li>
              <li><Link href="/minors-declaration" className="hover:text-white transition-colors">Декларация за непълнолетни</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Контакти</h4>
            <ul className="space-y-2 text-blue-200">
              <li className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                <span>ул. "Витоша" 123, София</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                <span>+359 2 XXX XXXX</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                <span>info@vionyx.bg</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">
              © 2024 Vionyx. Всички права запазени.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
                Политика за поверителност
              </a>
              <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
                Условия за ползване
              </a>
              <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
