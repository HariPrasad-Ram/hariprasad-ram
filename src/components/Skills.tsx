import { useEffect, useRef, useState } from "react";
import { Database, BarChart3, TrendingUp, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Accent = "primary" | "secondary";

interface Skill {
  name: string;
  pct: number;
}

interface SkillCard {
  title: string;
  icon: LucideIcon;
  subtitle: string;
  accent: Accent;
  skills: Skill[];
}

const cards: SkillCard[] = [
  {
    title: "Data & Databases",
    icon: Database,
    subtitle: "MySQL · SQL Queries · ETL",
    accent: "primary",
    skills: [
      { name: "SQL / MySQL", pct: 90 },
      { name: "ETL Pipelines", pct: 82 },
      { name: "Data Modelling", pct: 78 },
    ],
  },
  {
    title: "Visualization & BI",
    icon: BarChart3,
    subtitle: "Dashboards · Reports · Storytelling",
    accent: "secondary",
    skills: [
      { name: "Power BI (DAX, Power Query)", pct: 90 },
      { name: "Tableau", pct: 85 },
      { name: "Excel (PivotTables, VLOOKUP)", pct: 80 },
    ],
  },
  {
    title: "Analytics & Python",
    icon: TrendingUp,
    subtitle: "EDA · Feature Engineering · Insights",
    accent: "primary",
    skills: [
      { name: "Python (Pandas, NumPy)", pct: 82 },
      { name: "Exploratory Data Analysis", pct: 85 },
      { name: "KPI Design & Churn Analysis", pct: 88 },
    ],
  },
];

const techStack = [
  "SQL", "MySQL", "Python", "Pandas", "NumPy", "Jupyter Notebook",
  "Power BI", "DAX", "Power Query", "Tableau", "Excel", "ETL",
  "Star Schema", "Cohort Analysis", "Feature Engineering",
  "KPI Design", "Data Modelling", "EDA",
];

const SkillBar = ({ name, pct, accent, animate }: Skill & { accent: Accent; animate: boolean }) => (
  <div>
    <div className="flex justify-between text-xs mb-1.5">
      <span className="text-foreground/90 font-medium">{name}</span>
      <span className={accent === "primary" ? "text-amber" : "text-cyan"}>{pct}%</span>
    </div>
    <div className="h-2 rounded-full bg-muted overflow-hidden">
      <div
        className={cn(
          "h-full rounded-full transition-[width] duration-[1400ms] ease-out",
          accent === "primary" ? "bg-primary" : "bg-secondary"
        )}
        style={{ width: animate ? `${pct}%` : "0%" }}
      />
    </div>
  </div>
);

const Card = ({ card }: { card: SkillCard }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);
  const Icon = card.icon;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setAnimate(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const accentColor = card.accent === "primary" ? "bg-primary" : "bg-secondary";
  const accentText = card.accent === "primary" ? "text-amber" : "text-cyan";
  const accentBg = card.accent === "primary" ? "bg-primary/10" : "bg-secondary/10";

  return (
    <div ref={ref} className="reveal card-hover relative rounded-2xl bg-card border border-border p-6 sm:p-7 overflow-hidden">
      <div className={cn("absolute top-0 inset-x-0 h-[3px]", accentColor)} />
      <div className="flex items-center gap-3 mb-1">
        <span className={cn("grid place-items-center h-10 w-10 rounded-md", accentBg, accentText)}>
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="font-display text-xl font-bold">{card.title}</h3>
      </div>
      <p className="text-xs text-muted-foreground mb-6 ml-[52px]">{card.subtitle}</p>

      <div className="space-y-4">
        {card.skills.map((s) => (
          <SkillBar key={s.name} {...s} accent={card.accent} animate={animate} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 bg-muted/20">
      <div className="container">
        <div className="reveal mb-12 max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-amber mb-3">SKILLS</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold border-l-4 border-primary pl-5 leading-tight">
            Technical Arsenal
          </h2>
          <p className="mt-4 text-muted-foreground text-lg pl-5">
            Tools and technologies I use to extract value from data.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <Card key={c.title} card={c} />
          ))}
        </div>

        <div className="reveal">
          <p className="text-xs font-semibold tracking-[0.3em] text-amber mb-5">TECH STACK</p>
          <div className="flex flex-wrap gap-2.5">
            {techStack.map((t) => (
              <span
                key={t}
                className="cursor-default rounded-full border border-secondary/60 bg-card px-3.5 py-1.5 text-xs sm:text-sm text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
