// src/App.tsx
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Home from "@/pages/home";
import ServiceDetail from "@/pages/service-detail";
import ServicePricing from "@/pages/service-pricing";
import MinorsDeclaration from "@/pages/minors-declaration";
import Careers from "@/pages/careers"; // >>>>>>> ДОБАВЕНО: Импорт на страницата Careers <<<<<<<
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services/:slug" component={ServiceDetail} />
      <Route path="/pricing" component={ServicePricing} />
      <Route path="/minors-declaration" component={MinorsDeclaration} />
      {/* >>>>>>> ДОБАВЕНО: Маршрут за Кариери <<<<<<< */}
      <Route path="/careers" component={Careers} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;