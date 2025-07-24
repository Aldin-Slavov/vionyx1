import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Clients from "@/components/clients";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Clients />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
