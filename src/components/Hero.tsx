import { Sparkles } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

export default function Hero() {
  return (
    <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-600/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">
          
          {/* TEXTO */}
          <div className="space-y-6 sm:space-y-8">
            
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900 px-3 py-2 sm:px-4 rounded-full text-xs sm:text-sm font-bold">
              <Sparkles size={14} className="sm:w-4 sm:h-4" />
              Tratamento Comprovado
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white leading-tight">
              Transforme Seu Corpo com{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                Resultados Reais
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              Emagrecimento eficaz com tirzepatida. Reduza até 20% do peso corporal com acompanhamento profissional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton text="Falar com Especialista no WhatsApp" />
            </div>

            {/* STATS */}
            <div className="flex flex-wrap justify-between gap-4 sm:gap-8 pt-4">
              
              <div className="text-center flex-1 min-w-[90px] sm:border-r sm:border-yellow-600/30 sm:pr-6">
                <div className="text-2xl sm:text-4xl font-black text-yellow-400">98%</div>
                <div className="text-xs sm:text-sm text-gray-400">Satisfação</div>
              </div>

              <div className="text-center flex-1 min-w-[90px] sm:border-r sm:border-yellow-600/30 sm:pr-6">
                <div className="text-2xl sm:text-4xl font-black text-yellow-400">+5mil</div>
                <div className="text-xs sm:text-sm text-gray-400">Clientes</div>
              </div>

              <div className="text-center flex-1 min-w-[90px]">
                <div className="text-2xl sm:text-4xl font-black text-yellow-400">-20%</div>
                <div className="text-xs sm:text-sm text-gray-400">Peso Médio</div>
              </div>

            </div>
          </div>

          {/* IMAGEM */}
          <div className="relative mt-6 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-3xl blur-3xl"></div>
            
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-2xl p-4 sm:p-8 border border-yellow-600/30">
              <img
                src="/public/image/flay.png.jpeg"
                alt="Tratamento Premium"
                className="w-full h-auto rounded-2xl shadow-xl"
              />

              {/* BADGE */}
              <div className="absolute bottom-2 right-2 sm:-bottom-4 sm:-right-4 text-xs sm:text-sm bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-bold shadow-2xl border-2 border-yellow-300">
                Resultados em 4 semanas
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}