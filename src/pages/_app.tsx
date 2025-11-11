import type { AppProps } from "next/app";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Auth0Provider from "@/providers/Auth0Provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "@/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Auth0Provider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </TooltipProvider>
      </Auth0Provider>
    </QueryClientProvider>
  );
};

export default App;
