import { motion } from "framer-motion";

export default function Hero() {
    const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      className="
        min-h-screen w-full flex flex-col items-center justify-center text-center
        bg-gradient-to-b from-sky-500 via-sky-100 to-white
        dark:from-sky-600 dark:via-slate-900 dark:to-neutral-950
      "
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white"
      >
        Let’s build something people love.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.8 }}
        className="mt-3 max-w-2xl px-4 text-base md:text-lg text-slate-800 dark:text-slate-200"
      >
        I design smooth, fast UIs and ship reliable backends—React, TypeScript, Java/Spring, and AWS—
        from idea to production.
      </motion.p>

      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="mt-6 inline-flex items-center gap-2 rounded-xl border border-orange-500 bg-orange-500
                  px-5 py-3 text-white font-medium shadow-sm hover:bg-orange-600
                  dark:border-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700
                  backdrop-blur transition-colors"
        aria-label="About Me"
      >
        About Me
        <span aria-hidden>↓</span>
      </motion.button>
    </section>
  );
}

