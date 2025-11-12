import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import SoftwareDev from "./sections/SoftwareDev";
import Engineering from "./sections/Engineering";
import Dogsitting from "./sections/Dogsitting";
import Contact from "./pages/ContactForm/Contact";

function Home() {
  return (
    <main>
      {/* Each section has scroll-mt so it doesn’t hide behind sticky navbar */}
      <section id="hero" className="scroll-mt-20">
        <Hero />
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <section id="about" className="scroll-mt-20">
        <About />
      </section>
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <section id="software" className="scroll-mt-20">
        <SoftwareDev />
      </section>
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <section id="engineering" className="scroll-mt-20">
        <Engineering />
      </section>
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <section id="dogsitting" className="scroll-mt-20">
        <Dogsitting />
      </section>
    </main>
  );
}

export default function App() {
  const loc = useLocation();

  // Scroll to top automatically when switching to /contact
  if (loc.pathname !== "/") {
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  return (
    <div className="min-h-screen bg-slate-50 bg-blue-grad dark:bg-ink dark:bg-none text-slate-900 dark:text-slate-100">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}