import TechScroller from "../components/TechScroller";
import { motion } from "framer-motion";


export default function SoftwareDev() {
  return (
    <section className="w-full">
      <div className="container py-12">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold"
        >
          Software Development
        </motion.h2>

        {/* Resume-based intro */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-2 max-w-2xl text-neutral-700"
        >
          I’m a software engineer focused on smooth, performant UIs and scalable systems.
          My toolkit spans React, TypeScript, Tailwind, Java/Spring Boot, and AWS. I’ve
          shipped full-stack products, led a showcase-winning capstone, and built
          data/ML pipelines using Python and Scala/Spark.
        </motion.p>
      </div>

      {/* Tech scroller (animated logos) */}
      <TechScroller />

      {/* Skills / Stack */}
      <div className="container py-12">
        <h3 className="text-xl font-semibold">Core Skills & Stack</h3>
        <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 text-sm text-neutral-700">
          <li className="rounded-md border border-black/10 px-3 py-2">React, TypeScript, Vite</li>
          <li className="rounded-md border border-black/10 px-3 py-2">Tailwind CSS, Framer Motion</li>
          <li className="rounded-md border border-black/10 px-3 py-2">Java, Spring Boot</li>
          <li className="rounded-md border border-black/10 px-3 py-2">AWS (EC2), Docker</li>
          <li className="rounded-md border border-black/10 px-3 py-2">SQL (MySQL), MongoDB</li>
          <li className="rounded-md border border-black/10 px-3 py-2">CI/CD, Git/GitHub</li>
        </ul>
      </div>

      {/* Featured Projects */}
      <div className="container py-8">
        <h3 className="text-xl font-semibold">Featured Projects</h3>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Debt Relief App */}
          <ProjectCard
            title="Debt Relief Application (Showcase Winner)"
            description="Full-stack platform (Angular + Spring Boot) with login/registration, a full dashboard, and AWS EC2/Docker deployment."
            tags={["Angular", "Spring Boot", "AWS EC2", "Docker"]}
            href="https://github.com/itsabhi2001/capstone-ui"
            imageUrl="/projects/debt-relief.jpg"
          />

          {/* Hotspot Analysis */}
          <ProjectCard
            title="Hotspot Analysis (CSE 512)"
            description="Scala/Spark geospatial pipeline; data slicing, aggregation, and visualization for spatial hotspots."
            tags={["Scala", "Apache Spark", "Data Mining"]}
            href="#"
            imageUrl="/projects/hotspot.jpg"
          />

          {/* Dojo Manager */}
          <ProjectCard
            title="Dojo Manager (WIP)"
            description="Role-based dashboards for a TKD dojo (students/instructors), appointments, billing, and belt progression."
            tags={["React", "RBAC", "PostgreSQL"]}
            href="#"
            imageUrl="/projects/dojo.jpg"
          />
        </div>
      </div>

      {/* Experience highlights */}
      <div className="w-full flex justify-center py-8">
        <a
          href="/resume.pdf"
          download="Abhimanyu-Verma-Resume.pdf"
          className="inline-flex items-center gap-2 rounded-xl border border-orange-500 bg-orange-500 px-5 py-3 text-white font-medium shadow-sm hover:bg-orange-600 dark:border-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 transition">
          Download my Resume 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5v-9m0 9l3.5-3.5M12 16.5l-3.5-3.5M4.5 19.5h15" />
          </svg>
        </a>
      </div>
    </section>
  );
}

/** Lightweight card (no external deps) */
function ProjectCard(props: {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  imageUrl?: string;
}) {
  const { title, description, tags, href, imageUrl } = props;
  return (
    <motion.a
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noreferrer" : undefined}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -2 }}
      className="block rounded-2xl border border-black/10 bg-white p-4 shadow-sm hover:shadow-md"
    >
      <div className="mb-3 overflow-hidden rounded-xl aspect-video bg-neutral-100">
        {imageUrl ? (
          <img src={imageUrl} alt="" className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <div className="grid h-full place-items-center text-neutral-400">No image</div>
        )}
      </div>

      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="mt-1 text-sm text-neutral-600">{description}</p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {tags.map((t) => (
          <span
            key={t}
            className="text-xs rounded-md bg-blue-600/10 text-blue-700 px-2 py-0.5"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.a>
  );
}