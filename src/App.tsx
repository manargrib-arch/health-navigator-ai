import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AnalysesPage from "./pages/AnalysesPage";
import AnalysisDetailPage from "./pages/AnalysisDetailPage";
import EspaceProPage from "./pages/EspaceProPage";
import AssistantPage from "./pages/AssistantPage";
import LaboratoiresPage from "./pages/LaboratoiresPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/analyses" element={<AnalysesPage />} />
          <Route path="/analyses/:specialty" element={<AnalysesPage />} />
          <Route path="/analyses/detail/:id" element={<AnalysisDetailPage />} />
          <Route path="/espace-pro" element={<EspaceProPage />} />
          <Route path="/espace-pro/:type" element={<EspaceProPage />} />
          <Route path="/assistant" element={<AssistantPage />} />
          <Route path="/laboratoires" element={<LaboratoiresPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
