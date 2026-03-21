import { Star, Quote } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Mariana S.',
      result: '-18kg em 3 meses',
      text: 'Incrível! Nunca imaginei que conseguiria resultados tão rápidos. O atendimento é excepcional e me sinto muito mais confiante.',
      rating: 5,
    },
    {
      name: 'Carlos R.',
      result: '-22kg em 4 meses',
      text: 'Produto de altíssima qualidade. A aplicação é simples e os resultados apareceram logo na primeira semana. Recomendo!',
      rating: 5,
    },
    {
      name: 'Juliana M.',
      result: '-15kg em 2 meses',
      text: 'Melhor investimento que fiz em mim mesma. Além do emagrecimento, melhorei minha saúde e disposição. Equipe muito atenciosa.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Histórias de{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Transformação
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Veja o que nossos clientes têm a dizer
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-blue-500/30 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              
              {/* Estrelas */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Ícone de aspas */}
              <Quote size={32} className="text-yellow-400 mb-4 opacity-70" />

              {/* Texto */}
              <p className="text-gray-300 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Nome + resultado */}
              <div className="border-t border-blue-500/30 pt-4">
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-yellow-400 font-semibold">{testimonial.result}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-300 mb-6">
            Pronto para sua transformação?
          </p>
          <WhatsAppButton text="Iniciar Minha Jornada" />
        </div>
      </div>
    </section>
  );
}