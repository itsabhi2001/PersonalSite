export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white/80 backdrop-blur dark:bg-neutral-950/70">
      <div className="container flex flex-col items-center justify-between gap-3 py-6 text-sm text-neutral-600 dark:text-neutral-400 md:flex-row">
        <p>© {new Date().getFullYear()} Abhimanyu Verma. All rights reserved.</p>

        <div className="flex items-center gap-4">
          <a
            href="mailto:abhimanyu@example.com"
            className="hover:text-brand-600 transition-colors"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/abhimanyuverma/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand-600 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/abhimanyu-verma"
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand-600 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}