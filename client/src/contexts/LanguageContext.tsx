import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'bg' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations object
const translations = {
  bg: {
    // Navigation
    'nav.home': 'Начало',
    'nav.services': 'Услуги',
    'nav.pricing': 'Цени',
    'nav.about': 'За нас',
    'nav.contact': 'Контакти',
    'nav.minorsDeclaration': 'Декларация за непълнолетни',

    // Hero Section
    'hero.title': 'Професионални охранителни услуги с най-високи стандарти',
    'hero.subtitle': 'Защитаваме вашия бизнес, имущество и мероприятия с лицензирани охранители и модерни технологии',
    'hero.contactUs': 'Свържете се с нас',
    'hero.learnMore': 'Научете повече',

    // Services Section
    'services.title': 'Нашите услуги',
    'services.subtitle': 'Предлагаме пълна гама от охранителни услуги за всички ваши нужди',
    'services.learnMore': 'Научете повече',
    
    // Services Names
    'service.eventSecurity': 'Охрана на мероприятия',
    'service.propertySecurity': 'Охрана на имуществото',
    'service.alarmSecurity': 'Сигнално-охранителна дейност',
    'service.realEstateSecurity': 'Охрана на недвижими имоти',
    'service.agriculturalSecurity': 'Селскостопанска охрана',
    'service.stewardingSecurity': 'Стюардинг услуги',

    // About Section
    'about.title': 'За Vionyx',
    'about.subtitle': 'Водеща охранителна компания в България',
    'about.description': 'Vionyx е лицензирана охранителна компания с дългогодишен опит в областта на сигурността. Предлагаме професионални услуги на физически и юридически лица.',
    'about.years': 'години опит',
    'about.clients': 'доволни клиенти',
    'about.guards': 'лицензирани охранители',
    'about.coverage': '24/7 покритие',

    // Clients Section
    'clients.title': 'Нашите клиенти',
    'clients.subtitle': 'Доверяват ни водещи компании и институции',

    // Contact Section
    'contact.title': 'Свържете се с нас',
    'contact.subtitle': 'Готови сме да обсъдим вашите нужди от охрана',
    'contact.info': 'Контактна информация',
    'contact.address': 'Адрес',
    'contact.phone': 'Телефон',
    'contact.email': 'Email',
    'contact.hours': 'Работно време',
    'contact.hoursValue': 'Понеделник - Петък: 8:00 - 18:00',
    'contact.form': 'Изпратете запитване',
    'contact.firstName': 'Име',
    'contact.lastName': 'Фамилия',
    'contact.phoneNumber': 'Телефон',
    'contact.service': 'Услуга',
    'contact.message': 'Съобщение',
    'contact.send': 'Изпрати',
    'contact.success': 'Вашата заявка беше изпратена успешно. Ще се свържем с вас скоро.',
    'contact.error': 'Възникна грешка при изпращането на заявката. Моля опитайте отново.',

    // Footer
    'footer.company': 'Компания',
    'footer.services': 'Услуги',
    'footer.contacts': 'Контакти',
    'footer.aboutUs': 'За нас',
    'footer.ourTeam': 'Нашият екип',
    'footer.licenses': 'Лицензи',
    'footer.careers': 'Кариери',
    'footer.privacy': 'Политика за поверителност',
    'footer.terms': 'Условия за ползване',
    'footer.rights': 'Всички права запазени.',

    // Pricing Page
    'pricing.title': 'Цени на услугите',
    'pricing.subtitle': 'Прозрачно ценообразуване за всички наши охранителни услуги',
    'pricing.from': 'от',
    'pricing.requestQuote': 'Заявете оферта',
    'pricing.customQuote': 'Нужна ви е персонализирана оферта?',
    'pricing.customQuoteDesc': 'Свържете се с нас за подробна консултация и цена, адаптирана към вашите специфични нужди',
    'pricing.callUs': 'Обадете се',
    'pricing.sendEmail': 'Изпратете имейл',
    'pricing.workingHours': 'Работно време: 8:00 - 18:00',
    'pricing.responseTime': 'Отговаряме в рамките на 24 часа',

    // Minors Declaration
    'minors.title': 'Декларация за непълнолетни',
    'minors.subtitle': 'Нашето ангажиране за защита на правата на децата',
    'minors.declaration': 'ДЕКЛАРАЦИЯ',
    'minors.legalBasis': 'Във връзка с чл. 8, ал. 3 и ал. 4 от Закона за закрила на детето',
    'minors.form': 'Образец на декларация за масови мероприятия',
    'minors.whenToUse': 'Кога се използва декларацията:',
    'minors.useCase1': '• При масови мероприятия с участие на непълнолетни',
    'minors.useCase2': '• Когато родителят не може да придружи детето',
    'minors.useCase3': '• За деца под 18 години на обществени места след 22:00 ч.',
    'minors.useCase4': '• За деца под 14 години на обществени места след 20:00 ч.',
    'minors.download': 'Изтеглете декларацията (DOC)',
    'minors.updated': 'Последно актуализирано: Януари 2025',

    // Service Detail
    'serviceDetail.requestQuote': 'Заявете безплатна консултация',
    'serviceDetail.callUs': 'Обадете се на:',
    'serviceDetail.sendEmail': 'Изпратете имейл:',
    'serviceDetail.priceFrom': 'Цена от:',

    // Common
    'common.learnMore': 'Научете повече',
    'common.contactUs': 'Свържете се с нас',
    'common.requestQuote': 'Заявете оферта',
    'common.loading': 'Зареждане...',
    'common.error': 'Възникна грешка',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.pricing': 'Pricing',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.minorsDeclaration': 'Minors Declaration',

    // Hero Section
    'hero.title': 'Professional security services with the highest standards',
    'hero.subtitle': 'We protect your business, property and events with licensed security guards and modern technology',
    'hero.contactUs': 'Contact Us',
    'hero.learnMore': 'Learn More',

    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'We offer a full range of security services for all your needs',
    'services.learnMore': 'Learn More',
    
    // Services Names
    'service.eventSecurity': 'Event Security',
    'service.propertySecurity': 'Property Security',
    'service.alarmSecurity': 'Alarm Security Services',
    'service.realEstateSecurity': 'Real Estate Security',
    'service.agriculturalSecurity': 'Agricultural Security',
    'service.stewardingSecurity': 'Stewarding Services',

    // About Section
    'about.title': 'About Vionyx',
    'about.subtitle': 'Leading security company in Bulgaria',
    'about.description': 'Vionyx is a licensed security company with years of experience in the field of security. We offer professional services to individuals and legal entities.',
    'about.years': 'years of experience',
    'about.clients': 'satisfied clients',
    'about.guards': 'licensed guards',
    'about.coverage': '24/7 coverage',

    // Clients Section
    'clients.title': 'Our Clients',
    'clients.subtitle': 'Trusted by leading companies and institutions',

    // Contact Section
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We are ready to discuss your security needs',
    'contact.info': 'Contact Information',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.hours': 'Working Hours',
    'contact.hoursValue': 'Monday - Friday: 8:00 - 18:00',
    'contact.form': 'Send Inquiry',
    'contact.firstName': 'First Name',
    'contact.lastName': 'Last Name',
    'contact.phoneNumber': 'Phone',
    'contact.service': 'Service',
    'contact.message': 'Message',
    'contact.send': 'Send',
    'contact.success': 'Your request has been sent successfully. We will contact you soon.',
    'contact.error': 'An error occurred while sending the request. Please try again.',

    // Footer
    'footer.company': 'Company',
    'footer.services': 'Services',
    'footer.contacts': 'Contacts',
    'footer.aboutUs': 'About Us',
    'footer.ourTeam': 'Our Team',
    'footer.licenses': 'Licenses',
    'footer.careers': 'Careers',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.rights': 'All rights reserved.',

    // Pricing Page
    'pricing.title': 'Service Pricing',
    'pricing.subtitle': 'Transparent pricing for all our security services',
    'pricing.from': 'from',
    'pricing.requestQuote': 'Request Quote',
    'pricing.customQuote': 'Need a personalized quote?',
    'pricing.customQuoteDesc': 'Contact us for detailed consultation and pricing adapted to your specific needs',
    'pricing.callUs': 'Call Us',
    'pricing.sendEmail': 'Send Email',
    'pricing.workingHours': 'Working Hours: 8:00 - 18:00',
    'pricing.responseTime': 'We respond within 24 hours',

    // Minors Declaration
    'minors.title': 'Minors Declaration',
    'minors.subtitle': 'Our commitment to protecting children\'s rights',
    'minors.declaration': 'DECLARATION',
    'minors.legalBasis': 'In connection with Art. 8, para. 3 and para. 4 of the Child Protection Act',
    'minors.form': 'Declaration form for mass events',
    'minors.whenToUse': 'When to use the declaration:',
    'minors.useCase1': '• At mass events with minors participation',
    'minors.useCase2': '• When the parent cannot accompany the child',
    'minors.useCase3': '• For children under 18 years old in public places after 22:00',
    'minors.useCase4': '• For children under 14 years old in public places after 20:00',
    'minors.download': 'Download Declaration (DOC)',
    'minors.updated': 'Last updated: January 2025',

    // Service Detail
    'serviceDetail.requestQuote': 'Request Free Consultation',
    'serviceDetail.callUs': 'Call us:',
    'serviceDetail.sendEmail': 'Send email:',
    'serviceDetail.priceFrom': 'Price from:',

    // Common
    'common.learnMore': 'Learn More',
    'common.contactUs': 'Contact Us',
    'common.requestQuote': 'Request Quote',
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('bg');

  const t = (key: string): string => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}