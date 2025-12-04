import { useState } from "react";

export default function Navbar({ setPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Servicios", href: "#servicios" },
    { label: "Contacto", href: "#contacto" },
  ];

  const handleLogoClick = () => {
    setPage("home");
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 
  backdrop-blur-md bg-gray-900/80 border-b border-blue-500/20 shadow-[0_0_10px_#3b82f6]/10">

      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">

        {/* LOGO / NOMBRE */}
        <div 
          onClick={handleLogoClick}
          className="flex items-center gap-3 group cursor-pointer hover:opacity-90 transition"
        >
          <img src="/src/assets/logoBlanco.svg" alt="EruDev Logo" className="w-12 h-12" />
          <span className="text-2xl font-bold text-white tracking-wide group-hover:text-blue-400 transition">
            EruDev
          </span>
        </div>

        {/* LINKS Desktop */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="px-5 py-2.5 text-gray-300 hover:text-blue-400 transition font-medium
              border border-gray-700/50 rounded-lg hover:border-blue-500/50 hover:bg-blue-500/5"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Desktop */}
        <div className="hidden md:flex">
          <a
            href="#contacto"
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-2.5 rounded-xl font-semibold 
            hover:from-blue-500 hover:to-blue-600 hover:shadow-lg hover:shadow-blue-500/40 hover:-translate-y-0.5 
            transition-all duration-300"
          >
            Presupuesto
          </a>
        </div>

        {/* Hamburger Mobile */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 group"
        >
          <span className={`w-6 h-0.5 bg-gray-300 transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-gray-300 transition-all ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-gray-300 transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* MENU MOBILE */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800/95 backdrop-blur-md border-b border-gray-700 px-6 py-6 space-y-3">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                setPage("home");
                setMobileMenuOpen(false);
              }}
              className="flex items-center px-4 py-3 text-gray-300 hover:text-blue-400 transition font-medium
              border border-gray-700/50 rounded-lg hover:border-blue-500/50 hover:bg-blue-500/5"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              setPage("home");
              setMobileMenuOpen(false);
            }}
            className="flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold
            hover:from-blue-500 hover:to-blue-600 transition-all duration-300 mt-4"
          >
            Solicitar presupuesto
          </a>
        </div>
      )}
    </nav>
  );
}
