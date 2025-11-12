import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const LOGOS = [
    { srcLight: "/tech/react.svg", alt: "React" },
    { srcLight: "/tech/typescript.svg", alt: "TypeScript" },
    { srcLight: "/tech/tailwind.svg", alt: "Tailwind CSS" },
    { srcLight: "/tech/java.svg", alt: "Java" },
    { srcLight: "/tech/spring.svg", alt: "Spring Boot" },
    { srcLight: "/tech/aws.svg", srcDark: "/tech/aws-light.svg", alt: "AWS" },
    { srcLight: "/tech/docker.svg", alt: "Docker" },
    { srcLight: "/tech/mysql.svg", alt: "MySQL" },
    { srcLight: "/tech/git.svg", alt: "Git" },
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

   const xMotion = useTransform(scrollYProgress, [0, 1], ["-100%", "20%"]);
  // Move logos from left -> right as you scroll down (and right -> left when scrolling up).
  // Tweak the range to control distance. Use % so it’s responsive.
  const x = prefersReduced ? undefined : xMotion;

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-12">

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
                {/* Light-mode logo */}
                <img
                  src={logo.srcLight}
                  alt={logo.alt}
                  className="h-16 w-auto object-contain opacity-90 hover:opacity-100 transition dark:hidden"
                  draggable={false}
                />
                {/* Dark-mode logo */}
                <img
                  src={logo.srcDark ?? logo.srcLight}
                  alt={logo.alt}
                  className="hidden dark:block h-16 w-auto object-contain opacity-90 hover:opacity-100 transition"
                  draggable={false}
                />
              </li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* Spacer to give the section some scroll room (so the animation is noticeable) */}
      <div className="h-8" />
    </section>
  );
}