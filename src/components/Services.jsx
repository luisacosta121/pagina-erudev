import { useState, useRef, useEffect } from "react";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const services = [
   {
      title: "Software Industrial",
      desc: "Sistemas robustos y escalables para control de calidad, producción y automatización de procesos.",
      features: [
        "Monitoreo en tiempo real",
        "Control de inventario",
        "Dashboards personalizados",
      ],
      icon: (
        <svg className="w-12 h-12 animate-spin-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Desarrollo Web & Apps",
      desc: "Plataformas modernas, intuitivas y optimizadas para gestionar tu negocio desde cualquier lugar.",
      features: [
        "Interfaces responsivas",
        "Integración con sistemas existentes",
        "Aplicaciones móviles nativas",
      ],
      icon: (
        <svg className="w-12 h-12 animate-vibrate-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Consultoría y Optimización",
      desc: "Análisis, asesoramiento e implementación de estrategias digitales adaptadas a tu industria.",
      features: [
        "Auditoría de procesos",
        "Plan de digitalización",
        "Capacitación técnica",
      ],
      icon: (
        <svg className="w-12 h-12 animate-flash-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-gradient-to-b from-gray-900 via-gray-850 to-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Encabezado */}
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Soluciones integrales para transformar tu industria y llevar tu negocio al siguiente nivel
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-gray-800/60 border border-gray-700 rounded-2xl p-8 
              hover:border-blue-500 hover:shadow-[0_0_20px_#3b82f6]/20 hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Ícono */}
              <div className="text-blue-400 mb-6 group-hover:text-blue-300 transition">
                {s.icon}
              </div>

              {/* Título */}
              <h3 className="text-2xl font-semibold text-white mb-3">{s.title}</h3>
              
              {/* Descripción */}
              <p className="text-gray-300 mb-6 leading-relaxed">{s.desc}</p>
              
              {/* Features */}
              <ul className="space-y-3">
                {s.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-400 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">¿No encontraste lo que buscas?</p>
          <a
            href="#contacto"
            className="inline-block border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-xl font-semibold
            hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            Contáctanos para una solución personalizada
          </a>
        </div>
      </div>
    </section>
  );
}
