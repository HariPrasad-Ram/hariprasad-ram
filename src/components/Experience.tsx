import { Building2, MapPin, Calendar, BadgeCheck, CheckCircle2 } from "lucide-react";

interface ExpItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  focus: string;
  bullets: string[];
  internId?: string;
}

const items: ExpItem[] = [
  {
    company: "AI Variant",
    role: "Data Analyst Intern",
    duration: "Jun 2025 – Sep 2025",
    location: "Remote",
    focus: "Sales Analytics & Business Intelligence",
    bullets: [
      "Architected a star-schema sales data model integrating 5+ fact and dimension tables, enabling cross-functional analytics across region, product, and time dimensions",
      "Designed KPI framework (Revenue, Margin, Cost) uncovering $29.36M revenue and 41.15% gross margin — identified Accessories as the highest-margin product category",
      "Delivered 3 executive Power BI dashboards with regional and product drill-downs, significantly reducing reporting latency for stakeholders",
      "Identified Bikes as #1 revenue driver, directly influencing category-level resource allocation strategy",
    ],
  },
  {
    company: "Saiket Systems",
    role: "Power BI Intern",
    duration: "Jan 2026 – Feb 2026",
    location: "Remote",
    focus: "Business Intelligence & Power BI",
    internId: "SKS/A2/C86944",
    bullets: [
      "Developed and delivered Power BI dashboards demonstrating exceptional BI skills and attention to detail",
      "Approached assignments with enthusiasm and strong commitment to learning new Power BI techniques and reporting workflows",
      "Demonstrated effective data communication abilities in translating raw data into actionable visual insights",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-20 bg-muted/20">
      <div className="container">
        <div className="reveal mb-12 max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-amber mb-3">EXPERIENCE</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold border-l-4 border-primary pl-5 leading-tight">
            Experience
          </h2>
          <p className="mt-4 text-muted-foreground text-lg pl-5">
            Where I&apos;ve turned analytics into measurable business outcomes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {items.map((it) => (
            <article
              key={it.company}
              className="reveal card-hover relative rounded-2xl bg-card border border-primary/40 p-6 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center h-12 w-12 rounded-md bg-primary/10 text-primary">
                    <Building2 className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold">{it.company}</h3>
                    <p className="text-sm text-muted-foreground">{it.role}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 border border-primary/40 px-2.5 py-1 text-[10px] sm:text-[11px] font-bold tracking-wider text-amber whitespace-nowrap">
                  <BadgeCheck className="h-3.5 w-3.5" /> VERIFIED INTERNSHIP
                </span>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground mb-4">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" /> {it.duration}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" /> {it.location}
                </span>
                {it.internId && (
                  <span className="inline-flex items-center gap-1.5">
                    ID: <span className="text-foreground font-mono">{it.internId}</span>
                  </span>
                )}
              </div>

              <span className="inline-block rounded-full border border-secondary/60 bg-secondary/10 px-3 py-1 text-xs font-medium text-cyan mb-5">
                {it.focus}
              </span>

              <ul className="space-y-3">
                {it.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                    <CheckCircle2 className="h-4 w-4 text-amber shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
