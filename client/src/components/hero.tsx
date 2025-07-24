import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-r from-vionyx-blue to-vionyx-gray text-white py-20 lg:py-32">
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&h=1200')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Професионални <span className="text-blue-300">охранителни услуги</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Осигуряваме надеждна защита за вашия бизнес, събития и имущество с най-високи стандарти за качество и професионализъм.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={scrollToContact}
              className="bg-vionyx-accent hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold h-auto"
            >
              Заявете оферта
            </Button>
            <Button 
              onClick={scrollToServices}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-vionyx-blue px-8 py-4 text-lg font-semibold h-auto"
            >
              Нашите услуги
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
