export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-12 pt-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Contenido */}
          <div className="space-y-6 animate-slideInLeft">
            

            <h1 className="text-6xl font-bold text-white leading-tight">
              Desarrollo de Aplicaciones Web y Software Industrial
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Somos especialistas en <strong>automatización industrial</strong> y <strong>desarrollo web profesional</strong>. Creamos soluciones tecnológicas a medida para mejorar procesos, reducir costos y aumentar la eficiencia operativa de tu industria. Desde control de producción hasta aplicaciones web modernas, impulsamos tu transformación digital.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contacto"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold 
                hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300"
              >
                Solicitar presupuesto
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
