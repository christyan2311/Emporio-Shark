import { Activity } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Como funciona"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-full text-sm font-semibold">
              <Activity size={16} />
              Ciência Aplicada
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Como a{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Tirzepatida
              </span>{' '}
              Age
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Agonista Duplo GLP-1 e GIP</h3>
                <p className="text-gray-600 leading-relaxed">
                  A tirzepatida atua em dois receptores hormonais importantes: GLP-1 e GIP. Essa ação dupla potencializa o controle do apetite e melhora significativamente o metabolismo da glicose.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Saciedade Prolongada</h3>
                <p className="text-gray-600 leading-relaxed">
                  Reduz naturalmente a fome e aumenta a sensação de saciedade, facilitando o controle alimentar sem esforço excessivo.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Metabolismo Otimizado</h3>
                <p className="text-gray-600 leading-relaxed">
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
