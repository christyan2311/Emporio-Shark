import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductComparison from "./components/ProductComparison";
import Benefits from "./components/Benefits";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main>
        <Hero />
        <ProductComparison />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <FAQ />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 to-slate-950 border-t border-blue-500/20 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="flex items-center justify-center gap-2 text-2xl font-bold mb-2">
            <img
              src="/image/shark (2).png"
              alt="Empório Shark Logo"
              className="h-8 w-8"
            />
            Empório <span className="text-yellow-400">Shark</span>
          </h3>

          <p className="text-gray-300 mb-4">
            Transformando vidas através da ciência
          </p>

          <p className="text-sm text-gray-400">
            © 2024 Empório Shark. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      <FloatingWhatsApp />
    </div>
  );
}

export default App;
