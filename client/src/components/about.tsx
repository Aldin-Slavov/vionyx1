// src/components/About.tsx (или където и да е компонента About)
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-10 bg-vionyx-light"> {/* Намалена padding-top, за да има място за новото съдържание */}
      {/* СЪЩЕСТВУВАЩАТА СЕКЦИЯ "За нас" - Може да я запазите или частично да я премахнете, ако новото е достатъчно */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10"> {/* Добавен margin-bottom */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"> {/* Намален gap */}
          <div>
            <h2 className="text-3xl font-bold text-vionyx-blue mb-4"> {/* Намален размер на заглавието */}
              {t('about.title')}
            </h2>
            <p className="text-base text-gray-700 mb-4"> {/* Намален размер на текста */}
              {t('about.description')}
            </p>
            {/* Може да премахнете или модифицирате статистиките, ако новото съдържание е по-подходящо */}
            {/* <div className="grid grid-cols-2 gap-4 mb-6"> 
              <div className="text-center">
                <div className="text-2xl font-bold text-vionyx-accent mb-1">200+</div>
                <div className="text-gray-600 text-sm">{t('about.successfulProjects')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-vionyx-accent mb-1">50+</div>
                <div className="text-gray-600 text-sm">{t('about.trainedGuards')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-vionyx-accent mb-1">24/7</div>
                <div className="text-gray-600 text-sm">{t('about.service247')}</div>
              </div>
            </div> */}
            <div className="flex flex-col sm:flex-row gap-3"> {/* Намален gap */}
              <Button
                onClick={scrollToContact}
                className="bg-vionyx-accent hover:bg-blue-700 text-white px-5 py-2.5 text-base font-medium" // Намален padding и размер на шрифта
              >
                {t('contact.title')}
              </Button>
              <Link href="/minors-declaration">
                <Button
                  variant="outline"
                  className="border-2 border-vionyx-blue text-vionyx-blue hover:bg-vionyx-blue hover:text-white px-5 py-2.5 text-base font-medium w-full sm:w-auto" // Намален padding и размер на шрифта
                >
                  {t('nav.minorsDeclaration')}
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <img
              src="/images/services/vionyx_png.png"
              alt={t('about.aboutVionyx')}
              className="mx-auto" // Центриране на изображението
            />
          </div>
        </div>
      </div>

      {/* НОВА СЕКЦИЯ: ПОДРОБНО ПРЕДСТАВЯНЕ ОТ DOCX ФАЙЛОВЕТЕ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-gray-300">
        <div className="space-y-8"> {/* Използване на space-y за разстояние между секциите */}
          
          {/* Подробно описание */}
          <div>
            <h3 className="text-xl font-semibold text-vionyx-blue mb-3">{t('about.aboutVionyx')}</h3>
            {/* Използване на whitespace-pre-line за запазване на новите редове */}
            <p className="text-gray-700 whitespace-pre-line">{t('about.fullDescription')}</p>
          </div>

          {/* Мисия */}
          <div>
            <h3 className="text-xl font-semibold text-vionyx-blue mb-3">{t('about.missionTitle')}</h3>
            <p className="text-gray-700 whitespace-pre-line">{t('about.missionStatement')}</p>
          </div>

          {/* Какво предлагаме */}
          <div>
            <h3 className="text-xl font-semibold text-vionyx-blue mb-3">{t('about.whatWeOfferTitle')}</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {t('about.whatWeOfferList').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Защо да изберете нас */}
          <div>
            <h3 className="text-xl font-semibold text-vionyx-blue mb-3">{t('about.whyChooseUsTitle')}</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {t('about.whyChooseUsList').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Нашите клиенти */}
          <div>
            <h3 className="text-xl font-semibold text-vionyx-blue mb-3">{t('about.ourClientsTitle')}</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {t('about.ourClientsList').map((client, index) => (
                <li key={index}>{client}</li>
              ))}
            </ul>
          </div>

          {/* Контактна информация */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-vionyx-blue mb-4">Контакти</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <div><strong>Телефон:</strong> {t('about.contactInfo.phone')}</div>
              <div><strong>Email:</strong> <a href={`mailto:${t('about.contactInfo.email')}`} className="text-vionyx-blue hover:underline">{t('about.contactInfo.email')}</a></div>
              <div><strong>Уебсайт:</strong> <a href={t('about.contactInfo.website')} target="_blank" rel="noopener noreferrer" className="text-vionyx-blue hover:underline">{t('about.contactInfo.website')}</a></div>
              <div><strong>Адрес:</strong> {t('about.contactInfo.address')}</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
