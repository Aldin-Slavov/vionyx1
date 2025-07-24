import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 bg-vionyx-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-vionyx-blue mb-6">За Vionyx</h2>
            <p className="text-lg text-gray-700 mb-6">
              Vionyx e водеща охранителна компания с над 15 години опит в предоставянето на професионални услуги за сигурност. Нашият екип от сертифицирани специалисти осигурява надеждна защита за широк спектър от клиенти.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-vionyx-accent mb-2">200+</div>
                <div className="text-gray-600">Успешни проекта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-vionyx-accent mb-2">50+</div>
                <div className="text-gray-600">Обучени охранители</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-vionyx-accent mb-2">24/7</div>
                <div className="text-gray-600">Денонощно обслужване</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-vionyx-accent mb-2">15+</div>
                <div className="text-gray-600">Години опит</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-vionyx-accent hover:bg-blue-700 text-white px-6 py-3 font-medium"
              >
                Свържете се с нас
              </Button>
              <Link href="/minors-declaration">
                <Button 
                  variant="outline"
                  className="border-2 border-vionyx-blue text-vionyx-blue hover:bg-vionyx-blue hover:text-white px-6 py-3 font-medium w-full sm:w-auto"
                >
                  Декларация за непълнолетни
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Екипът на Vionyx" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
