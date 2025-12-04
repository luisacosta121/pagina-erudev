export default function Footer({ setPage }) {
  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Sección superior */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Marca */}
          <div>
            <h3 className="text-2xl font-bold text-white tracking-wide mb-2">
              EruDev
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Soluciones tecnológicas para la transformación digital de tu industria.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@erudev.com" className="text-gray-400 hover:text-blue-400 transition text-sm">
                  info@erudev.com
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-400 text-sm">
                  [Tu teléfono aquí]
                </span>
              </div>
            </div>
          </div>

          {/* Ubicación */}
          <div>
            <h4 className="text-white font-semibold mb-4">Ubicación</h4>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p className="text-gray-400 text-sm">Buenos Aires</p>
                <p className="text-gray-400 text-sm">Argentina</p>
              </div>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="#servicios"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Software Industrial
                </a>
              </li>
              <li>
                <a 
                  href="#servicios"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Desarrollo Web & Apps
                </a>
              </li>
              <li>
                <a 
                  href="#servicios"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Consultoría
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* División */}
        <hr className="border-gray-700 mb-8" />

        {/* Derechos */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-500">
            © {new Date().getFullYear()} EruDev. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 mt-6 md:mt-0">
            <button 
              onClick={() => setPage("privacy")}
              className="text-gray-500 hover:text-gray-300 transition"
            >
              Privacidad
            </button>
            <button 
              onClick={() => setPage("terms")}
              className="text-gray-500 hover:text-gray-300 transition"
            >
              Términos
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
