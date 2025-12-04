import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";

export default function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <>
      <Navbar setPage={setPage} />
      
      {page === "home" && (
        <>
          <Hero />
          <Services />
          <WhyChooseUs />
          <ContactForm />
        </>
      )}
      
      {page === "privacy" && <Privacy setPage={setPage} />}
      {page === "terms" && <Terms setPage={setPage} />}
      
      <Footer setPage={setPage} />
    </>
  );
}
