import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Service } from "@shared/schema";

export default function ServiceDetail() {
  const { slug } = useParams();
  
  const { data: service, isLoading, error } = useQuery<Service>({
    queryKey: ["/api/services", slug],
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded mb-4"></div>
              <div className="h-64 bg-gray-200 rounded mb-8"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <h1 className="text-2xl font-bold text-gray-900 mb-4">Услугата не е намерена</h1>
                  <p className="text-gray-600 mb-4">Заявената услуга не съществува.</p>
                  <Link href="/">
                    <Button>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Обратно към началото
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-vionyx-blue to-vionyx-gray text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <Button variant="outline" className="mb-6 border-white text-white hover:bg-white hover:text-vionyx-blue">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Обратно към услугите
            </Button>
          </Link>
          
          <div className="flex items-center mb-4">
            <i className={`${service.icon} text-4xl mr-4`}></i>
            <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
          </div>
          
          <p className="text-xl text-gray-200 mb-6">{service.description}</p>
          
          <Badge className="bg-white text-vionyx-blue text-lg px-4 py-2">
            От {service.priceFrom} {service.priceUnit}
          </Badge>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-64 object-cover rounded-xl shadow-lg mb-8"
              />
              
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-vionyx-blue mb-4">Подробно описание</h2>
                <p className="text-gray-700 mb-6">{service.fullDescription}</p>
                
                {service.features && service.features.length > 0 && (
                  <>
                    <h3 className="text-xl font-semibold text-vionyx-blue mb-4">Включени услуги:</h3>
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
            
            <div>
              <Card className="bg-vionyx-light sticky top-20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-vionyx-blue mb-4">Заявете оферта</h3>
                  <div className="mb-4">
                    <div className="text-sm text-gray-600">Цена от:</div>
                    <div className="text-2xl font-bold text-vionyx-accent">
                      {service.priceFrom} {service.priceUnit}
                    </div>
                  </div>
                  
                  <Button 
                    onClick={scrollToContact}
                    className="w-full bg-vionyx-accent hover:bg-blue-700 text-white mb-4"
                  >
                    Заявете безплатна консултация
                  </Button>
                  
                  <div className="text-sm text-gray-600">
                    <p className="mb-2">📞 Обадете се на:</p>
                    <p className="font-semibold">+359 89 566 2600</p>
                    <p className="mt-2">✉️ Изпратете имейл:</p>
                    <p className="font-semibold">savov@vionyx.eu</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
