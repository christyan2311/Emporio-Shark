import { Sparkles } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-600/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900 px-4 py-2 rounded-full text-sm font-bold">
              <Sparkles size={16} />
              Tratamento Comprovado
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
              Transforme Seu Corpo com{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                Resultados Reais
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Emagrecimento eficaz com tirzepatida. Reduza até 20% do peso corporal com acompanhamento profissional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton text="Falar com Especialista no WhatsApp" />
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center border-r border-yellow-600/30 pr-8">
                <div className="text-4xl font-black text-yellow-400">98%</div>
                <div className="text-sm text-gray-400">Satisfação</div>
              </div>
              <div className="text-center border-r border-yellow-600/30 pr-8">
                <div className="text-4xl font-black text-yellow-400">+5mil</div>
                <div className="text-sm text-gray-400">Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-yellow-400">-20%</div>
                <div className="text-sm text-gray-400">Peso Médio</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-2xl p-8 border border-yellow-600/30">
              <img
                src="/public/image/WhatsApp Image 2026-03-19 at 22.08.33.jpeg"
                alt="Tratamento Premium"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-6 py-3 rounded-full font-bold shadow-2xl border-2 border-yellow-300">
                Resultados em 4 semanas
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
