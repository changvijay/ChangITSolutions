import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
      closePopup?: () => void;
    };
  }
}

export const useCalendlyPopup = (calendlyUrl: string) => {
  const [isCalendlyReady, setIsCalendlyReady] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const openCalendlyPopup = () => {
    if (typeof window === "undefined" || !window.Calendly?.initPopupWidget) {
      return false;
    }

    window.Calendly.initPopupWidget({ url: calendlyUrl });
    return true;
  };

  const triggerCalendlyPopup = () => {
    if (typeof window === "undefined") {
      return;
    }

    if (openCalendlyPopup()) {
      setIsCalendlyReady(true);
      return;
    }

    if (!isCalendlyReady) {
      console.info("Calendly widget is loading; the popup will appear once it's ready.");
    }

    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    let attempts = 0;
    const maxAttempts = 10;
    intervalRef.current = window.setInterval(() => {
      attempts += 1;
      if (openCalendlyPopup()) {
        setIsCalendlyReady(true);
        if (intervalRef.current !== null) {
          window.clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      } else if (attempts >= maxAttempts) {
        if (intervalRef.current !== null) {
          window.clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        console.warn("Calendly widget is still loading. Please try again in a moment.");
      }
    }, 150);
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
      setIsCalendlyReady(true);
    }

    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  const handleCalendlyLoaded = () => setIsCalendlyReady(true);

  return {
    handleCalendlyLoaded,
    triggerCalendlyPopup,
  };
};
