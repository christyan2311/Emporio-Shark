import { TrendingDown, Eye, Zap } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: TrendingDown,
      title: 'Redução de Apetite',
      description: 'Controle natural da fome, facilitando a adesão à dieta e hábitos saudáveis.',
    },
    {
      icon: Eye,
      title: 'Resultados Visíveis',
      description: 'Perda de peso consistente e mensurável a partir da primeira semana de tratamento.',
    },
    {
      icon: Zap,
      title: 'Praticidade Total',
      description: 'Aplicação semanal simples. Mantenha sua rotina sem complicações.',
    },
  ];

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Por Que{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Funciona
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Benefícios comprovados cientificamente
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
