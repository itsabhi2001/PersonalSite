import TechScroller from "../components/TechScroller";
import { motion } from "framer-motion";

export default function SoftwareDev() {
  return (
    <section className="w-full bg-white">
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
            description="Full-stack platform (Angular + Spring Boot) with enrollment flows, payments, and AWS EC2/Docker deployment."
            tags={["Angular", "Spring Boot", "AWS EC2", "Docker"]}
            href="#"
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
      <div className="container py-12">
        <h3 className="text-xl font-semibold">Experience Highlights</h3>
        <ul className="mt-4 space-y-3 text-sm text-neutral-700">
          <li className="rounded-lg border border-black/10 p-4">
            <span className="font-medium">Marsh McLennan — Software Developer Intern.</span>{" "}
            Built Angular UI features and metrics dashboards; collaborated across teams and
            supported CI/CD practices.
          </li>
          <li className="rounded-lg border border-black/10 p-4">
            <span className="font-medium">RYNO Strategic Solutions — Web Developer Intern.</span>{" "}
            Contributed to web experiences with a focus on SEO and performance; exposure to
            Cloudflare and modern web tooling.
          </li>
          <li className="rounded-lg border border-black/10 p-4">
            <span className="font-medium">Certifications.</span> AWS Certified Cloud Practitioner; strong
            foundation in Python ML libs (Pandas, scikit-learn, PyTorch).
          </li>
        </ul>
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