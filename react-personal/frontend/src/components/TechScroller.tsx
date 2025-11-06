import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const LOGOS = [
    { src: "/tech/react.svg", alt: "React" },
    { src: "/tech/typescript.svg", alt: "TypeScript" },
    { src: "/tech/tailwind.svg", alt: "Tailwind CSS" },
    { src: "/tech/java.svg", alt: "Java" },
    { src: "/tech/spring.svg", alt: "Spring Boot" },
    { src: "/tech/aws.svg", alt: "AWS" },
    { src: "/tech/docker.svg", alt: "Docker" },
    { src: "/tech/mysql.svg", alt: "MySQL" },
    { src: "/tech/git.svg", alt: "Git" },
];



export default function TechScroller() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const prefersReduced = useReducedMotion();

  // Map scroll progress through this section to a horizontal shift.
  // offset: ["start end","end start"] means:
  //  - progress=0 when the section top hits the bottom of viewport
  //  - progress=1 when the section bottom hits the top of viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Move logos from left -> right as you scroll down (and right -> left when scrolling up).
  // Tweak the range to control distance. Use % so it’s responsive.
  const x = prefersReduced
    ? 0
    : useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-12"
    >
      <h2 className="container text-3xl font-semibold mb-6">Technologies I use</h2>

      {/* Sticky container keeps the row in view while the page scrolls */}
      <div className="sticky top-0 w-full">
        {/* Fade edges using a mask so logos don’t hard-cut at sides */}
        <div
          className="w-full overflow-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          <motion.ul
            style={{ x, willChange: "transform" }}
            className="flex gap-8 items-center select-none"
            aria-label="Technology logos"
          >
            {LOGOS.concat(LOGOS).concat(LOGOS).map((logo, i) => (
              <li key={i} className="shrink-0">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 w-auto object-contain opacity-90 hover:opacity-100 transition"
                  draggable={false}
                />
              </li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* Spacer to give the section some scroll room (so the animation is noticeable) */}
      <div className="h-[40vh]" />
    </section>
  );
}