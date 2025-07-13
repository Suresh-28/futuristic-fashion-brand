
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import Index from "./pages/Index";
import VirtualShowroom from "./pages/VirtualShowroom";
import InnovationLab from "./pages/InnovationLab";
import InnovationDetail from "./pages/InnovationDetail";
import InnovationApply from "./pages/InnovationApply";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/virtual-showroom" element={<VirtualShowroom />} />
            <Route path="/innovation-lab" element={<InnovationLab />} />
            <Route path="/innovation-detail/:innovationId" element={<InnovationDetail />} />
            <Route path="/innovation-lab/apply" element={<InnovationApply />} />
            <Route path="/product-details/:productId" element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
