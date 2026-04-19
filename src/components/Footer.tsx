import { Linkedin, Github } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container flex flex-col items-center gap-4 text-center">
      <div className="flex items-center gap-3">
        <a
          href="https://linkedin.com/in/hariprasad-ram-933152358/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="grid place-items-center h-10 w-10 rounded-md border border-border hover:border-primary hover:text-primary transition"
        >
          <Linkedin className="h-4 w-4" />
        </a>
        <a
          href="https://github.com/HariPrasad-Ram"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="grid place-items-center h-10 w-10 rounded-md border border-border hover:border-primary hover:text-primary transition"
        >
          <Github className="h-4 w-4" />
        </a>
      </div>
      <p className="text-sm text-muted-foreground">
        © 2025 <span className="text-foreground font-medium">Hariprasad Ram</span> · Data Analyst · Built with passion for data 📊
      </p>
    </div>
  </footer>
);

export default Footer;
