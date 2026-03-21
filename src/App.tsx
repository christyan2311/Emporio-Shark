import Header from './components/Header';
import Hero from './components/Hero';
import ProductComparison from './components/ProductComparison';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProductComparison />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <FAQ />
      </main>
      <footer className="bg-gradient-to-r from-blue-900 to-blue-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Empório Shark</h3>
          <p className="text-blue-200 mb-4">Transformando vidas através da ciência</p>
          <p className="text-sm text-blue-300">
            © 2024 Empório Shark. Todos os direitos reservados.
          </p>
        </div>
      </footer>
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
