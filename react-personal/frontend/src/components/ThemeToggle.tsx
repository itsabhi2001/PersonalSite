// src/components/ThemeToggle.tsx
import { useEffect, useState } from "react";

const KEY = "theme";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() =>
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
    localStorage.setItem(KEY, isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(v => !v)}
      className="inline-flex items-center gap-2 rounded-md border border-black/10 bg-white/70
                 px-3 py-1.5 text-sm text-neutral-700 shadow-sm hover:bg-black/5
                 dark:border-white/10 dark:bg-white/10 dark:text-neutral-200 dark:hover:bg-white/5 transition"
      aria-label="Toggle dark mode"
    >
      <span aria-hidden>{isDark ? "🌞" : "🌙"}</span>
      <span>{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}
