import { Download, Eye, ArrowRight, Mail, Linkedin, Github } from "lucide-react";
import profile from "@/assets/profile.png";
import TypingText from "./TypingText";
import CountUp from "./CountUp";

const Hero = () => {
  return (
    <section id="hero" className="relative pt-20 pb-20 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />
      <div
        className="absolute -top-40 -left-40 h-96 w-96 rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--primary)/0.5), transparent 70%)" }}
      />
      <div
        className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--secondary)/0.5), transparent 70%)" }}
      />

      <div className="container relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* LEFT */}
        <div className="flex flex-col items-start gap-6 self-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-muted-foreground">
              Available for Work · <span className="text-foreground">Hyderabad, Telangana</span>
            </span>
          </div>

          <div className="relative h-[220px] w-[220px]">
            <img
              src={profile}
              alt="Hariprasad Ram"
              className="h-[220px] w-[220px] rounded-full object-cover border-[3px] border-[#f59e0b] shadow-[0_0_25px_rgba(245,158,11,0.5)]"
              style={{ objectPosition: "center 15%" }}
            />
            <span className="absolute -inset-1 rounded-full border-2 border-[#f59e0b]/30 animate-pulse pointer-events-none" />
          </div>

          <div className="space-y-3 text-left w-full">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95]">
              Hariprasad <span className="text-amber">Ram</span>
            </h1>
            <p className="text-2xl sm:text-3xl font-display">
              <TypingText words={["Data Analyst", "BI Developer"]} />
            </p>
          </div>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl">
            I turn messy datasets into decisions that move the needle. With hands-on experience in SQL,
            Python, Power BI and Tableau, I&apos;ve analyzed 38,600+ bank loans, exposed a 27% telecom
            churn signal, and built executive dashboards that replaced 10+ hours of manual reporting per
            month. I don&apos;t just visualize data — I find the story inside it.
          </p>

          <div className="flex flex-col gap-3 sm:gap-4">
            {/* Row 1: Resume buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/Hariram_data_analyst.pdf"
                download
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:brightness-110 shadow-[0_10px_30px_-10px_hsl(var(--primary))] transition"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
              <a
                href="/Hariram_data_analyst.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-primary px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary/10 transition"
              >
                <Eye className="h-4 w-4" /> Preview Resume
              </a>
            </div>
            {/* Row 2: Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#projects"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-cyan-500 px-5 py-2.5 text-sm font-semibold text-cyan-400 hover:bg-cyan-500/10 transition"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-foreground/30 px-5 py-2.5 text-sm font-semibold text-foreground hover:border-foreground hover:bg-foreground/5 transition"
              >
                <Mail className="h-4 w-4" /> Hire Me
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
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
        </div>

        {/* RIGHT */}
        <div className="self-start">
          <div className="card-hover relative rounded-2xl bg-card border border-border p-7 sm:p-8 overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-[3px] bg-primary" />
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-xl sm:text-2xl font-semibold">Impact at a Glance</h2>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Live</span>
            </div>

            <div className="grid grid-cols-2 gap-5 sm:gap-7">
              <Stat
                value={<><span className="text-amber">$</span><CountUp end={435.8} decimals={1} /><span className="text-amber">M</span></>}
                label="Loan Portfolio"
                sub="Risk Surfaced"
              />
              <Stat
                value={<><CountUp end={38600} />+</>}
                label="Loans Analyzed"
                sub="via SQL"
              />
              <Stat
                value={<><CountUp end={27} /><span className="text-amber">%</span></>}
                label="Telecom Churn"
                sub="Rate Exposed"
              />
              <Stat
                value={<><CountUp end={10} />+ <span className="text-base font-normal text-muted-foreground">hrs</span></>}
                label="Monthly Reporting"
                sub="Eliminated"
              />
            </div>

            <div className="my-6 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

            <p className="text-sm text-muted-foreground text-center">
              <span className="text-foreground font-medium">2</span> Internships ·{" "}
              <span className="text-foreground font-medium">4</span> Projects ·{" "}
              <span className="text-foreground font-medium">4</span> Certifications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ value, label, sub }: { value: React.ReactNode; label: string; sub: string }) => (
  <div>
    <div className="font-display text-3xl sm:text-4xl font-bold leading-none mb-2">{value}</div>
    <div className="text-sm font-medium">{label}</div>
    <div className="text-xs text-muted-foreground">{sub}</div>
  </div>
);

export default Hero;
