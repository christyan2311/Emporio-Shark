import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const handleClick = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os tratamentos com tirzepatida.', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 z-50 animate-pulse"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={32} />
    </button>
  );
}
