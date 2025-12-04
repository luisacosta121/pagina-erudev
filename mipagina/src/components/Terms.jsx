export default function Terms({ setPage }) {
  return (
    <section className="min-h-screen bg-gray-900 text-gray-300 py-20">
      <div className="max-w-3xl mx-auto px-6">
        
        <h1 className="text-5xl font-bold text-white mb-12">Términos y Condiciones</h1>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Aceptación de Términos</h2>
            <p>
              Al acceder y utilizar este sitio web, usted acepta estar obligado por estos Términos y Condiciones. 
              Si no acepta estos términos, por favor no utilice este sitio.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Uso del Sitio</h2>
            <p className="mb-4">Usted se compromete a usar este sitio solo para fines legales y de manera que no:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Infrinja leyes, derechos de terceros o estas condiciones</li>
              <li>Contenga virus, malware o código malicioso</li>
              <li>Interrumpa el funcionamiento normal del sitio</li>
              <li>Realice scraping o recopilación no autorizada de datos</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Servicios</h2>
            <p className="mb-4">
              EruDev proporciona servicios de desarrollo de software, consultoría y soluciones industriales. 
              Todos los servicios se proporcionan "tal cual" sin garantías implícitas adicionales a las expresamente establecidas.
            </p>
            <p>
              Los servicios se describen con la mayor precisión posible, pero no garantizamos exactitud completa 
              de la información presentada en nuestro sitio.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Limitación de Responsabilidad</h2>
            <p>
              En la máxima medida permitida por la ley, EruDev no será responsable por daños directos, indirectos, 
              incidentales, especiales o consecuentes, incluida la pérdida de ganancias, datos o interrupción de negocios, 
              incluso si se ha advertido de la posibilidad de tales daños.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Propiedad Intelectual</h2>
            <p className="mb-4">
              Todo el contenido del sitio web, incluidos textos, gráficos, logos, imágenes y software, 
              es propiedad de EruDev o sus proveedores de contenido y está protegido por leyes de derechos de autor.
            </p>
            <p>
              Usted puede usar el contenido para propósitos personales no comerciales. Está prohibido 
              copiar, modificar, distribuir o reproducir cualquier contenido sin permiso previo.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Enlaces Externos</h2>
            <p>
              Este sitio puede contener enlaces a sitios web externos. EruDev no es responsable por el contenido, 
              precisión o prácticas de privacidad de sitios externos. Use estos enlaces bajo su propio riesgo.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Modificaciones</h2>
            <p>
              EruDev se reserva el derecho de modificar estos términos, condiciones y el sitio web en cualquier momento 
              sin previo aviso. Su uso continuado del sitio constituye aceptación de cualquier cambio.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Ley Aplicable</h2>
            <p>
              Estos términos y condiciones se rigen por las leyes de la República Argentina. 
              Cualquier disputa se resolverá en los tribunales competentes de Buenos Aires, Argentina.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Contacto</h2>
            <p>
              Si tiene preguntas sobre estos Términos y Condiciones, por favor contáctenos en:
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
