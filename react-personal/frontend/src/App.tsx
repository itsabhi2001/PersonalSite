import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import SoftwareDev from "./sections/SoftwareDev";
import Engineering from "./sections/Engineering";
import Dogsitting from "./sections/Dogsitting";
import Contact from "./pages/Contact";

function Home() {
  return (
    <main>
      {/* Each section has scroll-mt so it doesn’t hide behind sticky navbar */}
      <section id="hero" className="scroll-mt-20">
        <Hero />
      </section>

      <section id="software" className="scroll-mt-20">
        <SoftwareDev />
      </section>

      <section id="engineering" className="scroll-mt-20">
        <Engineering />
      </section>

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
    <div className="min-h-dvh flex flex-col bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <NavBar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}