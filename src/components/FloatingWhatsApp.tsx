import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '1234567890'; // Replace with actual WhatsApp number
    const message = 'Hello! I\'m interested in your IT solutions. Can we discuss?';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full glass bg-green-500/90 hover:bg-green-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 group p-0"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
      
      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping" />
    </Button>
  );
};