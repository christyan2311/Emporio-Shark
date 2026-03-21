import { Activity } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Imagem */}
          <div className="order-2 lg:order-1">
            <img
              src="/public/image/250525-info-como-age-tirzepatida-semaglutida.avif"
              alt="Como funciona"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          {/* Conteúdo */}
          <div className="order-1 lg:order-2 space-y-6">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
              <Activity size={16} />
              Ciência Aplicada
            </div>

            {/* Título */}
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Como a{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                Tirzepatida
              </span>{' '}
              Age
            </h2>

            {/* Cards */}
            <div className="space-y-6">
              
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 shadow-lg border border-blue-500/30">
                <h3 className="text-xl font-bold text-white mb-3">
                  Agonista Duplo GLP-1 e GIP
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  A tirzepatida atua em dois receptores hormonais importantes: GLP-1 e GIP. Essa ação dupla potencializa o controle do apetite e melhora significativamente o metabolismo da glicose.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 shadow-lg border border-blue-500/30">
                <h3 className="text-xl font-bold text-white mb-3">
                  Saciedade Prolongada
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Reduz naturalmente a fome e aumenta a sensação de saciedade, facilitando o controle alimentar sem esforço excessivo.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 shadow-lg border border-blue-500/30">
                <h3 className="text-xl font-bold text-white mb-3">
                  Metabolismo Otimizado
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Melhora a sensibilidade à insulina e ajuda o corpo a utilizar energia de forma mais eficiente.
                </p>
              </div>
            </div>

            <WhatsAppButton text="Começar Meu Tratamento" />
          </div>
        </div>
      </div>
    </section>
  );
}