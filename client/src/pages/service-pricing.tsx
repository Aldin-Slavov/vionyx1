// src/pages/ServicePricing.tsx
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, Download } from "lucide-react"; // Уверете се, че сте импортирали Download, ако ще го използвате
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

// Тип за една референция
interface Reference {
  id: string;
  title: string;
  descriptionKey: string; // <<< Променено: Използваме ключ за превод вместо директен текст
  pdfUrl: {
    bg: string;
    en: string;
  };
}

export default function ServicePricing() {
  const { t, language } = useLanguage();

  // Списък с референции - използваме ключове за описания
  const references: Reference[] = [
    {
      id: 'bgtsk',
      title: 'BGTSC GROUP EOOD',
      descriptionKey: 'servicePricing.references.bgtsk', // <<< Променено: Ключ
      pdfUrl: {
        bg: '/references/РЕФЕРЕНЦИЯ БГТСЦ БГ.pdf',
        en: '/references/РЕФЕРЕНЦИЯ БГТСЦ АНГ.pdf',
      },
    },
    {
      id: 'loshomie',
      title: 'Bar Singles (Loshomie Ltd.)',
      descriptionKey: 'servicePricing.references.loshomie', // <<< Променено: Ключ
      pdfUrl: {
        bg: '/references/РЕФЕРЕНЦИЯ ЛОШОМИЕ БГ.pdf',
        en: '/references/РЕФЕРЕНЦИЯ ЛОШОМИЕ АНГ.pdf',
      },
    },
    {
      id: 'school128',
      title: '128 Secondary School "Albert Einstein"',
      descriptionKey: 'servicePricing.references.school128', // <<< Променено: Ключ
      pdfUrl: {
        // Тъй като PDF файлът съдържа и двата езика, може да използвате един и същ URL
        // или да ги разделите, ако имате отделни файлове.
        bg: '/references/Референция-Охрана 128 СУ БГ АНГ.pdf',
        en: '/references/Референция-Охрана 128 СУ БГ АНГ.pdf',
      },
    },
    // >>>>>>> ДОБАВЕНА НОВА РЕФЕРЕНЦИЯ <<<<<<<
    {
      id: 'neweventic',
      title: 'New Eventic Aventura Ltd.',
      descriptionKey: 'servicePricing.references.neweventic', // <<< Използваме новия ключ
      pdfUrl: {
        // Предполагаме, че файловете са с тези имена. Ако са различни, коригирайте пътищата.
        bg: '/references/РЕФЕРЕНЦИЯ НЮ ИВЕНТИК БГ.pdf',
        en: '/references/РЕФЕРЕНЦИЯ НЮ ИВЕНТИК АНГ.pdf',
      },
    },
    // >>>>>>> КРАЙ НА ДОБАВЕНАТА РЕФЕРЕНЦИЯ <<<<<<<
    // Тук можете да добавите още референции
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-vionyx-blue mb-4">
          {t('servicePricing.title')} {/* Ще показва "Референции" или "References" */}
        </h1>
        <p className="text-xl text-gray-600">
          {t('servicePricing.subtitle')}
        </p>
        <p className="mt-4 text-gray-500 italic">
          {t('servicePricing.note')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {references.map((ref) => (
          <div key={ref.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-vionyx-blue mb-2">{ref.title}</h3>
              {/* Показване на преведеното описание */}
              <p className="text-gray-600 mb-4 min-h-[60px]"> {/* Добавена min-h за по-добър изглед ако няма описание */}
                {t(ref.descriptionKey)}
              </p>
              
              {/* Връзка към PDF файла в зависимост от езика */}
              <a
                href={ref.pdfUrl[language]}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-vionyx-blue text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                {/* Добавена икона за изтегляне */}
                <Download className="mr-2 h-4 w-4" />
                {language === 'bg' ? 'Виж референцията (PDF)' : 'View Reference (PDF)'}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Допълнителна информация, ако е нужна */}
      <div className="mt-16 text-center text-gray-600">
        <p className="mb-4">{t('servicePricing.personalizedQuoteDesc')}</p> {/* Използване на съществуващ превод */}
        <Link href="/">
          <Button variant="outline" className="border-vionyx-blue text-vionyx-blue hover:bg-vionyx-blue hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('common.back')} {/* Използване на общ превод за "Назад" */}
          </Button>
        </Link>
      </div>
    </div>
  );
}