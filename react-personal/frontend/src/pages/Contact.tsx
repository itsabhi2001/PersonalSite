export default function Contact() {
  return (
    <section className="container py-16">
      <h2 className="text-3xl font-semibold">Contact Me</h2>
      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
        <a href="mailto:abhimanyu@example.com"
           className="rounded-lg border border-black/10 px-3 py-2 hover:bg-black/5">
          Email
        </a>
        <a href="https://www.linkedin.com/in/abhimanyuverma/" target="_blank" rel="noreferrer"
           className="rounded-lg border border-black/10 px-3 py-2 hover:bg-black/5">
          LinkedIn
        </a>
        <a href="https://github.com/abhimanyu-verma" target="_blank" rel="noreferrer"
           className="rounded-lg border border-black/10 px-3 py-2 hover:bg-black/5">
          GitHub
        </a>
      </div>
    </section>
  );
}