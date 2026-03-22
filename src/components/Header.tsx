import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 shadow-2xl z-50 border-b border-yellow-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3 group cursor-pointer">
            <img
              src="./image/logo_shark.png.png"
              alt="Empório Shark Logo"
              className="h-8 w-8 group-hover:animate-pulse transition duration-300"
            />
            <h1 className="text-2xl font-black">
              <span className="text-white">Empório</span>
              <span className="text-yellow-500">Shark</span>
            </h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('produtos')} className="text-gray-300 hover:text-yellow-400 transition duration-300">
              Produtos
            </button>
            <button onClick={() => scrollToSection('beneficios')} className="text-gray-300 hover:text-yellow-400 transition duration-300">
              Benefícios
            </button>
            <button onClick={() => scrollToSection('duvidas')} className="text-gray-300 hover:text-yellow-400 transition duration-300">
              Dúvidas
            </button>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-yellow-400 hover:bg-slate-800 transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-yellow-600/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('produtos')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-yellow-400 hover:bg-slate-800 rounded-md transition"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection('beneficios')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-yellow-400 hover:bg-slate-800 rounded-md transition"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection('duvidas')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-yellow-400 hover:bg-slate-800 rounded-md transition"
            >
              Dúvidas
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
