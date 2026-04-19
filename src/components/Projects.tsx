import { useState } from "react";
import { Github, ExternalLink, ArrowRight, Calendar, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type Filter = "All" | "SQL & Excel" | "Python & EDA" | "Power BI & Tableau";

const filters: Filter[] = ["All", "SQL & Excel", "Python & EDA", "Power BI & Tableau"];

interface Project {
  title: string;
  duration: string;
  description: string;
  stat: string;
  tech: string[];
  categories: Filter[];
}

const projects: Project[] = [
  {
    title: "Customer Churn Analysis & Prediction",
    duration: "Jan 2026 – Feb 2026",
    description:
      "Analyzed behavior of 7,043 telecom customers to identify churn patterns across tenure, contract type, and monthly charges. Engineered 2 new features (contract type buckets, tenure bands) and generated 11 visualizations including histograms, heatmaps, and box plots.",
    stat: "38% of churned users had < 3-month tenure on monthly contracts",
    tech: ["Python", "Pandas", "NumPy", "EDA", "Feature Engineering", "Power BI"],
    categories: ["Python & EDA", "Power BI & Tableau"],
  },
  {
    title: "Bank Loan Performance & Credit Risk Analysis",
    duration: "Oct 2025 – Dec 2025",
    description:
      "End-to-end credit risk system covering 38,600 loans and $435.8M portfolio. Designed a 3-layer KPI architecture (MTD, MoM, portfolio health) for real-time monitoring with borrower demographic and geographic breakdowns across 4 dashboard pages.",
    stat: "Flagged 13.8% — 5,327 high-risk loans via SQL segmentation",
    tech: ["SQL", "MySQL", "Excel", "KPI Design", "Credit Risk", "Window Functions"],
    categories: ["SQL & Excel"],
  },
  {
    title: "HR Attrition Analytics Dashboard",
    duration: "Oct 2025 – Nov 2025",
    description:
      "Tracked 21.7% attrition across 749 employees. Identified Lab Technicians aged 25–34 as highest-risk group through DAX-driven segmentation. Linked salary bands across 9 job roles to attrition patterns.",
    stat: "Identified 2 high-risk clusters driving retention strategy",
    tech: ["Power BI", "DAX", "HR Analytics", "Segmentation", "Data Modelling"],
    categories: ["Power BI & Tableau"],
  },
  {
    title: "Sales Performance Analytics — AI Variant",
    duration: "Jun 2025 – Sep 2025",
    description:
      "Architected a star-schema data model with 5+ fact and dimension tables for cross-functional analytics across region, product, and time. Delivered 3 executive dashboards reducing reporting latency.",
    stat: "$29.36M revenue · 41.15% gross margin uncovered",
    tech: ["SQL", "Tableau", "Power BI", "Star Schema", "KPI Framework", "ETL"],
    categories: ["SQL & Excel", "Power BI & Tableau"],
  },
];

const Projects = () => {
  const [active, setActive] = useState<Filter>("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.categories.includes(active));

  return (
    <section id="projects" className="relative py-20">
      <div className="container">
        <div className="reveal mb-10 max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-amber mb-3">FEATURED PROJECTS</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold border-l-4 border-primary pl-5 leading-tight">
            Featured <span className="text-amber">projects.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg pl-5">
            Real analyses and dashboards that turned raw data into business outcomes — filter by tools used.
          </p>
        </div>

        <div className="reveal flex flex-wrap gap-2.5 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                "rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-colors border",
                active === f
                  ? "bg-primary text-primary-foreground border-primary shadow-[0_8px_24px_-10px_hsl(var(--primary))]"
                  : "border-border text-muted-foreground hover:text-primary hover:border-primary"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {visible.map((p) => (
            <article
              key={p.title}
              className="reveal group relative rounded-2xl bg-card border border-border p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-primary/50 hover:shadow-[0_25px_60px_-20px_hsl(var(--primary)/0.4)]"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {p.duration}
                </span>
                <div className="flex items-center gap-1.5">
                  <a
                    href="https://github.com/HariPrasad-Ram"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="grid place-items-center h-8 w-8 rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary transition"
                  >
                    <Github className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="https://github.com/HariPrasad-Ram"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="External"
                    className="grid place-items-center h-8 w-8 rounded-md border border-border text-muted-foreground hover:text-secondary hover:border-secondary transition"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold leading-tight mb-3 group-hover:text-amber transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.description}</p>

              <div className="flex items-start gap-3 rounded-lg border border-primary/40 bg-primary/10 p-3.5 mb-5">
                <Sparkles className="h-4 w-4 text-amber shrink-0 mt-0.5" />
                <p className="text-sm font-medium text-foreground leading-snug">{p.stat}</p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-12 flex justify-center">
          <a
            href="https://github.com/HariPrasad-Ram"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110 shadow-[0_15px_40px_-15px_hsl(var(--primary))] transition"
          >
            <Github className="h-4 w-4" /> View All Projects on GitHub
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
