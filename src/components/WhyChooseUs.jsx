export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Experiencia Comprobada",
      desc: "Soluciones tecnológicas aplicadas en entornos reales, logrando mejoras en automatización, eficiencia y calidad operativa.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: "Tecnología de Punta",
      desc: "Utilizamos las herramientas y frameworks más modernos para garantizar sistemas escalables, seguros y de alto rendimiento.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Soporte Dedicado",
      desc: "No te dejamos solo. Ofrecemos seguimiento continuo, mantenimiento proactivo y respuesta rápida ante cualquier inconveniente.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Equipo Especializado",
      desc: "Profesionales con experiencia en diferentes industrias, certificados y actualizados en las últimas tecnologías del mercado.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-800 via-gray-850 to-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ¿Por qué elegir EruDev?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Te ofrecemos más que código. Ofrecemos soluciones que transforman tu negocio
          </p>
        </div>

        {/* Grid de razones */}
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="bg-gray-800/60 border border-gray-700 rounded-2xl p-8
              hover:border-blue-500 hover:bg-gray-800/80 hover:shadow-[0_0_20px_#3b82f6]/20 transition-all duration-300 group"
            >
              {/* Ícono */}
              <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition">
                {reason.icon}
              </div>

              {/* Título */}
              <h3 className="text-2xl font-semibold text-white mb-3">
                {reason.title}
              </h3>

              {/* Descripción */}
              <p className="text-gray-300 leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6 text-lg">
            Estamos listos para ayudarte a crecer
          </p>
          <a
            href="#contacto"
            className="inline-block bg-blue-600 text-white px-10 py-4 rounded-xl font-semibold
            hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
          >
            Comencemos tu transformación
          </a>
        </div>
      </div>
    </section>
  );
}