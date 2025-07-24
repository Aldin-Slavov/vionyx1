import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { ArrowLeft, Check, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Service } from "@shared/schema";

export default function ServicePricing() {
  const { data: services, isLoading } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded mb-4"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-64 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-vionyx-blue to-vionyx-gray text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <Button variant="outline" className="mb-6 border-white text-white hover:bg-white hover:text-vionyx-blue">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Обратно към началото
            </Button>
          </Link>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Цени и услуги</h1>
            <p className="text-xl text-gray-200 mb-6">
              Прозрачни цени за всички наши охранителни услуги
            </p>
            <p className="text-lg text-blue-200">
              Всички цени са ориентировъчни и могат да бъдат персонализирани според вашите нужди
            </p>
          </div>
        </div>
      </section>

      {/* Services Pricing Section */}
      <section className="py-16 bg-vionyx-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services?.map((service) => (
              <Card key={service.id} className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-2">
                    <i className={`${service.icon} text-vionyx-accent text-2xl mr-3`}></i>
                    <CardTitle className="text-lg text-vionyx-blue">{service.title}</CardTitle>
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    от {service.priceFrom} {service.priceUnit}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                  
                  {service.features && service.features.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Включва:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center text-sm">
                            <Check className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                        {service.features.length > 3 && (
                          <li className="text-xs text-gray-500">
                            + още {service.features.length - 3} услуги
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex flex-col space-y-2">
                    <Link href={`/services/${service.slug}`}>
                      <Button variant="outline" size="sm" className="w-full text-xs">
                        Подробности
                      </Button>
                    </Link>
                    <Button 
                      onClick={scrollToContact}
                      size="sm" 
                      className="w-full bg-vionyx-accent hover:bg-blue-700 text-white text-xs"
                    >
                      Заявете оферта
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-vionyx-blue mb-4">
            Нужна ви е персонализирана оферта?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Свържете се с нас за подробна консултация и цена, адаптирана към вашите специфични нужди
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-vionyx-light">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 text-vionyx-accent mx-auto mb-3" />
                <h3 className="font-semibold text-vionyx-blue mb-2">Обадете се</h3>
                <p className="text-gray-600 text-lg font-semibold">+359 89 566 2600</p>
                <p className="text-sm text-gray-500 mt-1">Работно време: 8:00 - 18:00</p>
              </CardContent>
            </Card>
            
            <Card className="bg-vionyx-light">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 text-vionyx-accent mx-auto mb-3" />
                <h3 className="font-semibold text-vionyx-blue mb-2">Изпратете имейл</h3>
                <p className="text-gray-600 text-lg font-semibold">savov@vionyx.eu</p>
                <p className="text-sm text-gray-500 mt-1">Отговаряме в рамките на 24 часа</p>
              </CardContent>
            </Card>
          </div>
          
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-vionyx-accent hover:bg-blue-700 text-white px-8 py-3"
          >
            Заявете безплатна консултация
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}