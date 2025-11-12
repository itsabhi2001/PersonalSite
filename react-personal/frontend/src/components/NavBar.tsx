import { useMemo, useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import WeatherWidget from "../sections/Weather";


const LINKS = [
  { id: "hero", label: "Home" },
  { id: "software", label: "Software Dev" },
  { id: "engineering", label: "Engineering" },
  { id: "dogsitting", label: "Dogsitting" },
  { id: "weather", label: "Weather" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const reduced = useMemo(
    () =>
      typeof window !== "undefined" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );
  const navigate = useNavigate();
  const loc = useLocation();

  // Scroll-spy with IntersectionObserver
  // state
const [active, setActive] = useState(LINKS[0].id);

// effect
useEffect(() => {
  if (loc.pathname !== "/") return;

  const ids = LINKS.map(l => l.id);
  const observeEls = ids
    .map(id => document.getElementById(id))
    .filter((el): el is HTMLElement => !!el);

  // Fallback: if a section is missing, avoid errors
  if (observeEls.length === 0) return;

  let ticking = false;
  const TOP_ANCHOR = window.innerHeight * 0.33; // top third

  const calcActive = () => {
    ticking = false;
    // choose the section whose top is closest to TOP_ANCHOR but not too far below
    let bestId = ids[0];
    let bestDist = Number.POSITIVE_INFINITY;

    for (const el of observeEls) {
      const rect = el.getBoundingClientRect();
      const dist = Math.abs(rect.top - TOP_ANCHOR);
      // prefer elements that are on screen (some part visible)
      const visible = rect.bottom > 0 && rect.top < window.innerHeight;
      if (visible && dist < bestDist) {
        bestDist = dist;
        bestId = el.id;
      }
    }
    setActive(bestId);
  };

  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(calcActive);
    }
  };

  // Initial run + listeners
  calcActive();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", calcActive);

  return () => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", calcActive);
  };
}, [loc.pathname]);


  // Smooth scroll handler (navigates to home first if on /contact)
  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (loc.pathname !== "/") {
      navigate("/");
      // wait for route paint
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
      });
    } else {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
    }
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 z-40 border-b border-black/5 bg-white/80 backdrop-blur dark:bg-neutral-950/70">
      <div className="container flex h-14 items-center justify-between">
        {/* Brand */}
        <a
          href="/"
          className="inline-flex items-center gap-2"
          aria-label="Home"
        >
          {/* Light logo */}
          <img
            src="\logo\av_monogram_badge_light_bold.svg"
            alt="Abhimanyu Verma Logo"
            className="h-10 w-auto dark:hidden select-none"
            draggable={false}
          />
          {/* Dark logo */}
          <img
            src="\logo\av_monogram_badge_dark_bold.svg"
            alt="Abhimanyu Verma Logo (dark)"
            className="hidden dark:block h-10 w-auto select-none"
            draggable={false}
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-2 text-sm">
  {LINKS.map(l => {
    const isActive = loc.pathname === "/" && active === l.id;
    return (
      <a
        key={l.id}
        href={`/#${l.id}`}
        onClick={scrollTo(l.id)}
        className={`relative px-3 py-1.5 rounded-full transition
          ${isActive
            ? "bg-sky-600 text-white shadow-sm"
            : "text-neutral-700 hover:bg-black/5 dark:text-neutral-200 dark:hover:bg-white/5"}`}
      >
        {l.label}

        {/* underline accent for active */}
        {isActive && (
          <span className="pointer-events-none absolute left-3 right-3 -bottom-1 block h-0.5 rounded bg-white/80" />
        )}
      </a>
    );
  })}
  <WeatherWidget/>

  <NavLink
  to="/contact"
  className={({ isActive }) =>
    `px-3 py-1.5 rounded-full font-medium transition ${
      isActive
  ? "bg-orange-500 text-white shadow-md shadow-orange-500/30 dark:bg-orange-600"
  : "text-orange-600 hover:bg-orange-500/10 dark:text-orange-400 dark:hover:bg-orange-600/20"
    }`
  }
>
  Contact
</NavLink>
</div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-md px-3 py-2 hover:bg-black/5 focus:outline-none"
          aria-label="Menu"
          aria-expanded={open}
        >
          ☰
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-black/5"
          >
            <ul className="container py-2 space-y-1">
              {LINKS.map((l) => (
                <li key={l.id}>
                  <a
                    href={`/#${l.id}`}
                    onClick={scrollTo(l.id)}
                    className={`block rounded-md px-3 py-2 text-sm transition
                      ${active === l.id && loc.pathname === "/"
                        ? "bg-sky-600/10 text-sky-700 dark:text-sky-300"
                        : "hover:bg-black/5 dark:hover:bg-white/5"}`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <NavLink
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm transition
                            bg-orange-500/10 text-orange-700 hover:bg-orange-500/20
                            dark:text-orange-300 dark:hover:bg-orange-600/20"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}