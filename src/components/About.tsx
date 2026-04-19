import { Linkedin, Github, GraduationCap, MapPin, Briefcase, BarChart3, Award, CheckCircle2 } from "lucide-react";

const facts = [
  { icon: GraduationCap, text: "B.Tech CSE — CVR College of Engineering, 2024" },
  { icon: MapPin, text: "Hyderabad, Telangana, India" },
  { icon: Briefcase, text: "5 Months — AI Variant (Data Analyst Intern)" },
  { icon: Briefcase, text: "1 Month — Saiket Systems (Power BI Intern)" },
  { icon: BarChart3, text: "4 End-to-End Analytics Projects" },
  { icon: Award, text: "4 Professional Certifications" },
  { icon: CheckCircle2, text: "Actively Seeking Full-Time Analyst Roles" },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="container">
        <div className="reveal mb-12 max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-amber mb-3">ABOUT ME</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold border-l-4 border-primary pl-5 leading-tight">
            About Me
          </h2>
          <p className="mt-4 italic text-muted-foreground text-lg pl-5">
            Data with a point of view — built on curiosity, rigor, and clear storytelling.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-start">
          {/* LEFT */}
          <div className="reveal lg:col-span-3 space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
            <p>
              I don&apos;t just analyze data — I interrogate it. Every dataset has a story buried
              inside it, and my job is to find it before the business makes the wrong decision.
              That&apos;s what drives me.
            </p>
            <p>
              Over the past 7 months, I&apos;ve worked across banking, telecom, HR, and sales
              analytics — building SQL pipelines, Power BI dashboards, and Python EDA workflows
              that have surfaced{" "}
              <span className="text-amber font-semibold">$435.8M in loan risk</span>, flagged{" "}
              <span className="text-cyan font-semibold">27% customer churn</span>, and given
              executives the clarity to act fast. I don&apos;t deliver reports —{" "}
              <span className="font-bold text-foreground">I deliver decisions</span>.
            </p>
            <p>
              When I&apos;m not deep in a dataset, I&apos;m studying what makes data communication
              actually land — because the best analysis means nothing if the right person
              doesn&apos;t understand it. That&apos;s the gap I&apos;m built to close.
            </p>
          </div>

          {/* RIGHT */}
          <div className="reveal lg:col-span-2">
            <div className="card-hover relative rounded-2xl bg-card border border-primary/40 p-7">
              <div className="flex items-start justify-between mb-6">
                <h3 className="font-display text-2xl font-bold text-amber">Quick Facts</h3>
                <span className="text-[10px] font-semibold tracking-[0.25em] text-muted-foreground mt-2">
                  AT A GLANCE
                </span>
              </div>

              <ul className="space-y-3.5">
                {facts.map(({ icon: Icon, text }, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="grid place-items-center h-8 w-8 shrink-0 rounded-md bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="pt-1.5">{text}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-2 gap-3 mt-7">
                <a
                  href="https://linkedin.com/in/hariprasad-ram-933152358/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-secondary px-3 py-2.5 text-xs sm:text-sm font-semibold text-secondary hover:bg-secondary/10 transition"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a
                  href="https://github.com/HariPrasad-Ram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-primary px-3 py-2.5 text-xs sm:text-sm font-semibold text-primary hover:bg-primary/10 transition"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
