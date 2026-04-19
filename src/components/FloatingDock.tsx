import { Linkedin, Github, Mail } from "lucide-react";

const FloatingDock = () => {
  return (
    <>
      {/* Left vertical sidebar (desktop only) */}
      <aside className="hidden lg:flex fixed left-5 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3">
        <a
          href="https://linkedin.com/in/hariprasad-ram-933152358/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="grid place-items-center h-10 w-10 rounded-md border border-border bg-card/80 backdrop-blur hover:border-primary hover:text-primary transition"
        >
          <Linkedin className="h-4 w-4" />
        </a>
        <a
          href="https://github.com/HariPrasad-Ram"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="grid place-items-center h-10 w-10 rounded-md border border-border bg-card/80 backdrop-blur hover:border-primary hover:text-primary transition"
        >
          <Github className="h-4 w-4" />
        </a>
        <a
          href="mailto:ramh2125@gmail.com"
          aria-label="Email"
          className="grid place-items-center h-10 w-10 rounded-md border border-border bg-card/80 backdrop-blur hover:border-primary hover:text-primary transition"
        >
          <Mail className="h-4 w-4" />
        </a>
      </aside>

      {/* Floating Hire Me button (bottom right) */}
      <a
        href="#contact"
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_15px_40px_-10px_hsl(var(--primary))] hover:brightness-110 hover:scale-105 transition"
      >
        <Mail className="h-4 w-4" /> Hire Me
      </a>
    </>
  );
};

export default FloatingDock;
