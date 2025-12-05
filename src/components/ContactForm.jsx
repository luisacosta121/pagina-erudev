import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ nombre: "", email: "", empresa: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Validación para el nombre: solo letras y espacios, máximo 30 caracteres
    if (name === "nombre") {
      // Remover caracteres no válidos
      let onlyLetters = value.replace(/[^a-záéíóúàèìòùäëïöüñ\s]/gi, "");
      // Remover espacios consecutivos
      onlyLetters = onlyLetters.replace(/\s{2,}/g, " ");
      // Limitar a 30 caracteres
      onlyLetters = onlyLetters.slice(0, 30);
      setForm({ ...form, [name]: onlyLetters });
    } 
    // Validación para el email: máximo 30 caracteres
    else if (name === "email") {
      const email = value.slice(0, 45);
      setForm({ ...form, [name]: email });
    }
    // Validación para la empresa: permite letras, números, símbolos; máximo 40 caracteres, sin espacios consecutivos
    else if (name === "empresa") {
      // Remover espacios consecutivos
      let empresa = value.replace(/\s{2,}/g, " ");
      // Limitar a 40 caracteres
      empresa = empresa.slice(0, 40);
      setForm({ ...form, [name]: empresa });
    }
    // Validación para el mensaje: máximo 500 caracteres, permite todo
    else if (name === "mensaje") {
      const mensaje = value.slice(0, 500);
      setForm({ ...form, [name]: mensaje });
    }
    else {
      setForm({ ...form, [name]: value });
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validar que el nombre tenga mínimo 3 caracteres
    if (form.nombre.trim().length < 3) {
      alert("El nombre debe tener mínimo 3 caracteres");
      return;
    }
    
    // Validar que el email tenga formato válido
    if (!validateEmail(form.email)) {
      alert("Por favor ingresa un email válido (ej: usuario@ejemplo.com)");
      return;
    }
    
    // Validar que la empresa tenga mínimo 3 caracteres (si la proporciona)
    if (form.empresa.trim().length > 0 && form.empresa.trim().length < 3) {
      alert("El nombre de empresa debe tener mínimo 3 caracteres");
      return;
    }
    
    // Validar que el mensaje tenga entre 10 y 500 caracteres
    if (form.mensaje.trim().length < 10) {
      alert("El mensaje debe tener mínimo 10 caracteres");
      return;
    }
    
    if (form.mensaje.trim().length > 500) {
      alert("El mensaje no puede exceder 500 caracteres");
      return;
    }
    
    alert("Consulta enviada (acá podés integrar EmailJS).");
    setEnviado(true);
    setTimeout(() => {
      setForm({ nombre: "", email: "", empresa: "", mensaje: "" });
      setEnviado(false);
    }, 3000);
  };

  return (
    <section id="contacto" className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Cuéntanos sobre tu proyecto y nos pondremos en contacto en las próximas 24 horas
          </p>
        </div>

        {/* Grid: Formulario + Info */}
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Formulario */}
          <div className="md:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-800/60 border border-gray-700 p-10 rounded-2xl 
              hover:border-blue-500/50 transition-all duration-300"
            >
              {/* Nombre */}
              <label className="block mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 font-medium">Nombre</span>
                  <span className="text-sm text-gray-500">{form.nombre.length}/30</span>
                </div>
                <input
                  name="nombre"
                  value={form.nombre}
                  required
                  maxLength="30"
                  className={`w-full p-3 bg-gray-900/50 text-gray-200 border rounded-lg outline-none transition ${
                    form.nombre.trim().length > 0 && form.nombre.trim().length < 3
                      ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                      : "border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  }`}
                  placeholder="Tu nombre completo"
                  onChange={handleChange}
                />
                <div className="flex justify-between items-start mt-1">
                  <p className="text-xs text-gray-500">Solo letras, espacios. Mínimo 3 caracteres</p>
                  {form.nombre.trim().length > 0 && form.nombre.trim().length < 3 && (
                    <p className="text-xs text-red-400">Mínimo 3 caracteres</p>
                  )}
                </div>
              </label>

              {/* Email */}
              <label className="block mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 font-medium">Email</span>
                  <span className="text-sm text-gray-500">{form.email.length}/45</span>
                </div>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  required
                  maxLength="45"
                  className={`w-full p-3 bg-gray-900/50 text-gray-200 border rounded-lg outline-none transition ${
                    form.email.length > 0 && !validateEmail(form.email)
                      ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                      : "border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  }`}
                  placeholder="Tu email"
                  onChange={handleChange}
                />
                <div className="flex justify-between items-start mt-1">
                  <p className="text-xs text-gray-500">Formato: usuario@dominio.com</p>
                  {form.email.length > 0 && !validateEmail(form.email) && (
                    <p className="text-xs text-red-400">Email inválido</p>
                  )}
                </div>
              </label>

              {/* Empresa */}
              <label className="block mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 font-medium">Empresa</span>
                  <span className="text-sm text-gray-500">{form.empresa.length}/40</span>
                </div>
                <input
                  name="empresa"
                  value={form.empresa}
                  maxLength="40"
                  className={`w-full p-3 bg-gray-900/50 text-gray-200 border rounded-lg outline-none transition ${
                    form.empresa.trim().length > 0 && form.empresa.trim().length < 3
                      ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                      : "border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  }`}
                  placeholder="Nombre de tu empresa"
                  onChange={handleChange}
                />
                <div className="flex justify-between items-start mt-1">
                  <p className="text-xs text-gray-500">Mínimo 3 caracteres. Sin espacios consecutivos</p>
                  {form.empresa.trim().length > 0 && form.empresa.trim().length < 3 && (
                    <p className="text-xs text-red-400">Mínimo 3 caracteres</p>
                  )}
                </div>
              </label>

              {/* Mensaje */}
              <label className="block mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 font-medium">Mensaje / Descripción del proyecto</span>
                  <span className={`text-sm ${form.mensaje.length < 10 || form.mensaje.length > 500 ? 'text-red-400' : 'text-gray-500'}`}>
                    {form.mensaje.length}/500
                  </span>
                </div>
                <textarea
                  name="mensaje"
                  value={form.mensaje}
                  required
                  rows="5"
                  maxLength="500"
                  className={`w-full p-3 bg-gray-900/50 text-gray-200 border rounded-lg outline-none transition resize-none ${
                    form.mensaje.length > 0 && (form.mensaje.length < 10 || form.mensaje.length > 500)
                      ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                      : "border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  }`}
                  placeholder="Cuéntanos qué necesitas automatizar o mejorar en tu industria..."
                  onChange={handleChange}
                />
                <div className="flex justify-between items-start mt-1">
                  <p className="text-xs text-gray-500">Mínimo 10, máximo 500 caracteres</p>
                  {form.mensaje.length > 0 && form.mensaje.length < 10 && (
                    <p className="text-xs text-red-400">Mínimo 10 caracteres</p>
                  )}
                  {form.mensaje.length > 500 && (
                    <p className="text-xs text-red-400">Máximo 500 caracteres</p>
                  )}
                </div>
              </label>

              {/* Botón */}
              <button
                type="submit"
                disabled={enviado}
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg
                hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30 disabled:bg-green-600 disabled:cursor-default
                transition-all duration-300"
              >
                {enviado ? "✓ Enviado" : "Enviar consulta"}
              </button>
            </form>
          </div>

          {/* Info de contacto */}
          <div className="space-y-8">
            {/* Tiempo de respuesta */}
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="text-white font-semibold mb-1">Tiempo de respuesta</h4>
                  <p className="text-gray-300 text-sm">Respuesta en menos de 24 horas</p>
                </div>
              </div>
            </div>

            {/* Consultoría gratuita */}
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="text-white font-semibold mb-1">Consulta inicial</h4>
                  <p className="text-gray-300 text-sm">Análisis gratuito de tu caso</p>
                </div>
              </div>
            </div>

            {/* Soluciones personalizadas */}
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div>
                  <h4 className="text-white font-semibold mb-1">Soluciones a medida</h4>
                  <p className="text-gray-300 text-sm">Adaptamos el proyecto a tu industria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
