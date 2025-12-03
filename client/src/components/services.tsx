import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Service } from "@shared/schema";

export default function Services() {
  const { t, language } = useLanguage();
  const { data: services, isLoading } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });

  if (isLoading) {
    return (
      <section id="services" className="py-20 bg-vionyx-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-vionyx-blue mb-4">{t('services.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="animate-pulse">
                <div className="w-full h-48 bg-gray-200"></div>
                <CardContent className="p-6">
                  <div className="h-4 bg-gray-200 rounded mb-3"></div>
                  <div className="h-16 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-20 bg-vionyx-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-vionyx-blue mb-4">{t('services.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services?.map((service) => {
            // Use English version if language is 'en', otherwise use Bulgarian
            const title = language === 'en' && service.titleEn ? service.titleEn : service.title;
            const description = language === 'en' && service.descriptionEn ? service.descriptionEn : service.description;
            const priceUnit = language === 'en' && service.priceUnitEn ? service.priceUnitEn : service.priceUnit;
            
            return (
              <Card key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={service.image} 
                  alt={title} 
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <i className={`${service.icon} text-vionyx-accent text-2xl mr-3`}></i>
                    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                  </div>
                  <p className="text-gray-800 mb-4">{description}</p>
                  {/*
                  <div className="text-sm text-gray-500 mb-4">
                    <span className="font-medium">
                      {language === 'en' ? 'Indicative price:' : ' '}
                    </span> {t(' ')} {service.priceFrom} {priceUnit}
                  </div>
                  */}
                  <Link href={`/services/${service.slug}`}>
                    <Button variant="link" className="text-vionyx-accent hover:text-blue-700 p-0 font-medium">
                      {t('services.learnMore')} <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}