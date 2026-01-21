import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import People from "./pages/People";
import Publications from "./pages/Publications";
import Research from "./pages/Research";
import Projects from "./pages/Projects";
import Courses from "./pages/Courses";
import Achievements from "./pages/Achievements";
import Gallery from "./pages/Gallery";
import Schedule from "./pages/Schedule";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/people" element={<People />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/research" element={<Research />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
