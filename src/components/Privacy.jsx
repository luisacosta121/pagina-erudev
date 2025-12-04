export default function Privacy({ setPage }) {
  return (
    <section className="min-h-screen bg-gray-900 text-gray-300 py-20">
      <div className="max-w-3xl mx-auto px-6">
        
        <h1 className="text-5xl font-bold text-white mb-12">Política de Privacidad</h1>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introducción</h2>
            <p>
              EruDev ("nosotros", "nuestro" o "la empresa") respeta la privacidad de nuestros visitantes y clientes. 
              Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos su información.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Información que Recopilamos</h2>
            <p className="mb-4">Recopilamos información que usted nos proporciona directamente, incluyendo:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Nombre completo</li>
              <li>Correo electrónico</li>
              <li>Nombre de empresa</li>
              <li>Descripción del proyecto</li>
              <li>Información técnica del dispositivo (automáticamente)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Cómo Usamos Su Información</h2>
            <p className="mb-4">Utilizamos la información recopilada para:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Responder a sus consultas y solicitudes</li>
              <li>Proporcionar presupuestos y propuestas</li>
              <li>Enviar información sobre nuestros servicios</li>
              <li>Mejorar nuestro sitio web y servicios</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Protección de Datos</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal 
              contra acceso no autorizado, alteración o destrucción. Sin embargo, ningún método de transmisión 
              por Internet es 100% seguro.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Retención de Datos</h2>
            <p>
              Conservamos su información personal durante el tiempo necesario para proporcionar nuestros servicios 
              y cumplir con obligaciones legales. Normalmente, conservamos los datos durante 2 años después del 
              último contacto, salvo que la ley requiera lo contrario.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Sus Derechos</h2>
            <p className="mb-4">Usted tiene derecho a:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Acceder a sus datos personales</li>
              <li>Solicitar la corrección de datos inexactos</li>
              <li>Solicitar la eliminación de sus datos</li>
              <li>Oponerse al procesamiento de sus datos</li>
              <li>Solicitar la portabilidad de datos</li>
            </ul>
            <p className="mt-4">
              Para ejercer estos derechos, contáctenos en: <span className="text-blue-400">info@erudev.com</span>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Contacto</h2>
            <p>
              Si tiene preguntas sobre esta Política de Privacidad o sobre cómo manejamos sus datos, 
              por favor contáctenos:
            </p>
            <p className="mt-4">
              <strong>EruDev</strong><br />
              Email: <span className="text-blue-400">info@erudev.com</span><br />
              Ubicación: Buenos Aires, Argentina
            </p>
          </div>

          <div className="pt-8 border-t border-gray-700">
            <p className="text-sm text-gray-400">
              Última actualización: {new Date().toLocaleDateString('es-AR')}
            </p>
          </div>
        </div>

        {/* Botón volver */}
        <div className="mt-16">
          <button
            onClick={() => setPage("home")}
            className="inline-block border-2 border-blue-500 text-blue-400 px-8 py-3 rounded-lg font-semibold
            hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    </section>
  );
}
