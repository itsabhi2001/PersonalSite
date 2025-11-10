import { useMemo, useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { id: "hero", label: "Home" },
  { id: "software", label: "Software Dev" },
  { id: "engineering", label: "Engineering" },
  { id: "dogsitting", label: "Dogsitting" },
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
  const [active, setActive] = useState(LINKS[0].id);
  useEffect(() => {
    if (loc.pathname !== "/") return; // only on SPA home
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
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
        <a href="/" onClick={(e)=>{e.preventDefault(); navigate("/");}}
           className="font-semibold text-lg tracking-tight">AV</a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-4 text-sm">
          {LINKS.map((l) => {
            const isActive = loc.pathname === "/" && active === l.id;
            return (
              <a
                key={l.id}
                href={`/#${l.id}`}
                onClick={scrollTo(l.id)}
                className={`relative px-2 py-1 rounded-md hover:bg-black/5 dark:hover:bg-white/5 ${
                  isActive
                    ? "text-brand-700 dark:text-brand-100"
                    : "text-neutral-700 dark:text-neutral-200"
                }`}
              >
                {l.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-2 right-2 -bottom-1 h-0.5 bg-brand-600 rounded"
                  />
                )}
              </a>
            );
          })}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-2 py-1 rounded-md hover:bg-black/5 dark:hover:bg-white/5 ${
                isActive
                  ? "text-brand-700 dark:text-brand-100"
                  : "text-neutral-700 dark:text-neutral-200"
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
              {LINKS.map((l, i) => (
                <li key={l.id}>
                  <a
                    href={`/#${l.id}`}
                    onClick={scrollTo(l.id)}
                    className="block rounded-md px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/5 text-neutral-700 dark:text-neutral-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <NavLink
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/5 text-neutral-700 dark:text-neutral-200"
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