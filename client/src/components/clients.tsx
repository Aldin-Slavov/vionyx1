import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Client } from "@shared/schema";

export default function Clients() {
  const { t, language } = useLanguage();
  const { data: clients, isLoading } = useQuery<Client[]>({
    queryKey: ["/api/clients"],
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-vionyx-blue mb-4">
              {language === 'en' ? 'Our Clients' : 'Нашите клиенти'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'en' 
                ? 'Trusted by leading organizations across various industries'
                : 'Доверие от водещи организации в различни индустрии'
              }
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-6">
                  <div className="h-4 bg-gray-200 rounded mb-3"></div>
                  <div className="h-20 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-vionyx-blue mb-4">
            {language === 'en' ? 'Our Clients' : 'Нашите клиенти'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Trusted by leading organizations across various industries'
              : 'Доверие от водещи организации в различни индустрии'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients?.map((client) => {
            // Use English version if language is 'en', otherwise use Bulgarian
            const name = language === 'en' && client.nameEn ? client.nameEn : client.name;
            const testimonial = language === 'en' && client.testimonialEn ? client.testimonialEn : client.testimonial;
            const contactPerson = language === 'en' && client.contactPersonEn ? client.contactPersonEn : client.contactPerson;
            const position = language === 'en' && client.positionEn ? client.positionEn : client.position;

            return (
              <Card key={client.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <Quote className="text-vionyx-accent flex-shrink-0 mt-1 mr-3" size={20} />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-vionyx-blue mb-2">{name}</h3>
                      {testimonial && (
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                          "{testimonial}"
                        </p>
                      )}
                      {contactPerson && (
                        <div className="text-sm">
                          <p className="font-medium text-vionyx-blue">{contactPerson}</p>
                          {position && (
                            <p className="text-gray-500">{position}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}