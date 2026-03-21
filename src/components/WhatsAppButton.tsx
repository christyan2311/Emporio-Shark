import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  text?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function WhatsAppButton({
  text = "Falar com Especialista",
  variant = 'primary',
  className = ''
}: WhatsAppButtonProps) {
  const handleClick = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os tratamentos com tirzepatida.', '_blank');
  };

  const baseStyles = "inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-2xl";

  const variantStyles = variant === 'primary'
    ? "bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white hover:from-green-600 hover:via-green-700 hover:to-green-800 border border-green-400/50"
    : "bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900 hover:from-yellow-600 hover:to-yellow-700 border border-yellow-400/50";

  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      <MessageCircle size={24} />
      {text}
    </button>
  );
}
