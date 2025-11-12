export default function About() {
  return (
    <section className="container py-16 scroll-mt-20">
      <h2 className="text-3xl font-semibold mb-8">About Me</h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Profile Photo + Icons */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/page-img/PhotoPlaceholder.jpg"
            alt="Abhimanyu Verma"
            className="w-40 h-40 rounded-2xl object-cover shadow-md"
          />

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/abhimanyu-verma"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/tech/linkedin.svg"
                alt="LinkedIn"
                className="w-6 h-6 invert hover:opacity-80 transition"
              />
            </a>
            <a href="mailto:abhimanyu@example.com">
              <img
                src="/tech/mail.svg"
                alt="Email"
                className="w-6 h-6 invert hover:opacity-80 transition"
              />
            </a>
            <a
              href="https://github.com/AbhimanyuVerma"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/tech/github.svg"
                alt="GitHub"
                className="w-6 h-6 invert hover:opacity-80 transition"
              />
            </a>
          </div>
        </div>

        {/* Bio Text */}
        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-2xl">
          I’ve always loved solving problems. It doesn't matter if it’s figuring out a tricky bug in code, helping a
          client build something that works for them and their clients, or taking care of someone’s dog like it’s my
          own. I strive to empathize with my clients and their problems, and I believe this is what powers the quality
          in my solutions. I’m not only able to look at a client’s current needs — I can extrapolate and anticipate
          future ones, planning accordingly.
        </p>
      </div>
    </section>
  );
}
