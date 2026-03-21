import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import WhatsAppButton from './WhatsAppButton';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Como funciona o tratamento com tirzepatida?',
      answer: 'A tirzepatida é um medicamento que atua em dois receptores hormonais (GLP-1 e GIP), reduzindo o apetite e melhorando o metabolismo. É aplicada semanalmente de forma subcutânea, promovendo perda de peso gradual e sustentável.',
    },
    {
      question: 'O tratamento é seguro?',
      answer: 'Sim! A tirzepatida é aprovada por órgãos reguladores e passou por rigorosos testes clínicos. Sempre recomendamos acompanhamento médico durante todo o tratamento para garantir segurança e eficácia máximas.',
    },
    {
      question: 'Quando vejo os primeiros resultados?',
      answer: 'A maioria dos pacientes começa a notar resultados já nas primeiras 2-4 semanas de tratamento. A perda de peso é progressiva e consistente, com resultados mais expressivos após 3 meses de uso contínuo.',
    },
    {
      question: 'Preciso de acompanhamento médico?',
      answer: 'Sim, é fundamental ter acompanhamento médico durante todo o tratamento. Nossos especialistas estão disponíveis para orientação, ajuste de doses e monitoramento de resultados, garantindo sua segurança e sucesso.',
    },
    {
      question: 'Qual a diferença entre Tirzec 15 e T.G. 15?',
      answer: 'Ambos contêm tirzepatida 15mg e são igualmente eficazes. A diferença está no fabricante e em pequenas variações de formulação. Nossa equipe pode ajudar a escolher a melhor opção para seu perfil.',
    },
    {
      question: 'Como faço para começar o tratamento?',
      answer: 'É muito simples! Clique no botão do WhatsApp e fale com nossos especialistas. Vamos entender suas necessidades, tirar todas as dúvidas e orientar sobre o melhor tratamento para você.',
    },
  ];

  return (
    <section id="duvidas" className="py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Dúvidas{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Frequentes
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Tudo o que você precisa saber
          </p>
        </div>

        {/* FAQ */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg border border-blue-500/30 overflow-hidden transition-all duration-300 hover:shadow-2xl"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>

                <ChevronDown
                  size={24}
                  className={`text-yellow-400 flex-shrink-0 transition-all duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  } group-hover:scale-110`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/30 rounded-3xl p-12 text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            Ainda tem dúvidas?
          </h3>
          <p className="text-xl mb-8 text-gray-300">
            Nossa equipe está pronta para ajudar você
          </p>
          <WhatsAppButton text="Tirar Minhas Dúvidas Agora" />
        </div>
      </div>
    </section>
  );
}