import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="relative py-20">
      <div className="container">
        <div className="reveal mb-12 max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-amber mb-3">EDUCATION</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold border-l-4 border-primary pl-5 leading-tight">
            Education
          </h2>
          <p className="mt-4 text-muted-foreground text-lg pl-5">
            Academic foundation that grounds my analytical work.
          </p>
        </div>

        <div className="reveal max-w-4xl">
          <div className="card-hover relative rounded-2xl bg-card border border-border p-6 sm:p-8">
            <div className="absolute top-0 left-0 h-full w-1 bg-primary rounded-l-2xl" />
            <div className="grid sm:grid-cols-[180px_1fr_auto] gap-6 items-center">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 text-amber" />
                <span>Jun 2020 – Apr 2024</span>
              </div>

              <div className="flex items-start gap-4">
                <span className="grid place-items-center h-12 w-12 shrink-0 rounded-md bg-primary/10 text-primary">
                  <GraduationCap className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold leading-tight">
                    B.Tech in Computer Science &amp; Engineering
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    CVR College of Engineering, Hyderabad
                  </p>
                </div>
              </div>

              <div className="grid place-items-center h-20 w-20 rounded-full border-2 border-primary bg-primary/10 text-center shadow-[0_0_30px_-8px_hsl(var(--primary))] justify-self-start sm:justify-self-end">
                <div>
                  <div className="text-[10px] font-bold tracking-widest text-amber">GPA</div>
                  <div className="font-display text-2xl font-bold text-amber leading-none">7.0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
