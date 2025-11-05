import { motion } from "framer-motion";

export default function Hero() {
    const scrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    };




    return (
    
    //<section className="min-h-screen w-full bg-red-500"></section>
    <section className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-blue-500 to-blue-100 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-4"
      >
        Hi, I'm Abhimanyu Verma
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg text-gray-600"
      >
        Software Engineer · React · Java · Spring · AWS
      </motion.p>

    {/*Projects Button */}
    <motion.button
        onClick={scrollToProjects}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex items-center gap-2 rounded-xl border border-blue-300 bg-white/80 backdrop-blur px-5 py-3 text-blue-700 shadow-sm hover:shadow-md"
        aria-label="View projects"
    >
        View Projects
        <span aria-hidden>↓</span>
    </motion.button>




    </section>
  );
}

