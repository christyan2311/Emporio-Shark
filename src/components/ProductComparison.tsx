import { Check, Crown } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

export default function ProductComparison() {
  const products = [
    {
      name: 'Tirzec 15',
      popular: true,
      price: 'R$ 1.499',
      period: '/mês',
      features: [
        'Tirzepatida 15mg',
        'Redução de até 20% do peso',
        'Controle de apetite avançado',
        'Melhora metabólica',
        'Suporte técnico',
      ],
    },
    {
      name: 'T.G. 15',
      popular: false,
      price: 'R$ 1.299',
      period: '/mês',
      features: [
        'Tirzepatida 15mg',
        'Perda de peso eficaz',
        'Controle de apetite',
        'Aplicação semanal',
        'Orientação profissional',
      ],
    },
  ];

  return (
    <section id="produtos" className="py-16 sm:py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Escolha Seu{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Tratamento Ideal
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300">
            Produtos premium com qualidade garantida
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-2xl p-5 sm:p-8 border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                product.popular ? 'border-yellow-500' : 'border-slate-700'
              }`}
            >
              
              {/* Badge */}
              {product.popular && (
                <div className="absolute top-2 left-1/2 -translate-x-1/2 sm:-top-4">
                  <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1 sm:gap-2 shadow-2xl border-2 border-yellow-400">
                    <Crown size={14} className="sm:w-[18px] sm:h-[18px]" />
                    Mais Vendido
                  </div>
                </div>
              )}

              {/* Conteúdo */}
              <div className="text-center mb-6 sm:mb-8 mt-6 sm:mt-0">
                <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                  {product.name}
                </h3>

                <div className="flex items-end justify-center gap-1 flex-wrap">
                  <span className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                    {product.price}
                  </span>
                  <span className="text-gray-400 mb-1 sm:mb-2 text-sm sm:text-lg">
                    {product.period}
                  </span>
                </div>
              </div>

              {/* Lista */}
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full p-1 flex-shrink-0">
                      <Check size={14} className="sm:w-4 sm:h-4 text-slate-900" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <WhatsAppButton
                text="Quero Este Produto"
                className="w-full justify-center text-sm sm:text-base"
              />
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="text-center mt-10 sm:mt-12">
          <p className="text-gray-400 mb-6 text-sm sm:text-base">
            Ainda tem dúvidas sobre qual escolher?
          </p>
          <WhatsAppButton text="Consultar Especialista" />
        </div>
      </div>
    </section>
  );
}