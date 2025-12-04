export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-40 pt-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Contenido */}
          <div className="space-y-6 animate-slideInLeft">
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full">
              <span className="text-blue-400 text-lg font-semibold">Transformación Digital para Industria</span>
            </div>

            <h1 className="text-6xl font-bold text-white leading-tight">
              Automatiza, Digitaliza, <span className="text-blue-400">Crece</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Impulsamos tu negocio con tecnología: desarrollamos aplicaciones industriales a medida para mejorar procesos, reducir costos y aumentar la eficiencia operativa. Además, diseñamos páginas web modernas, rápidas y profesionales para que tu empresa destaque y atraiga más clientes. Soluciones integrales para que puedas enfocarte en crecer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contacto"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold 
                hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300"
              >
                Solicitar presupuesto
              </a>
              
              <a
                href="#servicios"
                className="inline-block border-2 border-gray-400 text-gray-300 px-8 py-4 rounded-xl font-semibold 
                hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
              >
                Ver servicios
              </a>
            </div>
          </div>

          {/* Visual derecha */}
          <div className="hidden md:flex justify-center">
            <div className="relative w-80 h-80">
              {/* Círculo animado */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
              
              {/* Ícono */}
              <div className="absolute inset-0 flex items-center justify-center animate-float">
                <svg className="w-48 h-48 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
