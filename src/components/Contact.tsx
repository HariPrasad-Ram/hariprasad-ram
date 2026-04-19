import { useState } from "react";
import { Mail, Linkedin, Github, MapPin, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

const contactItems = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "ramh2125@gmail.com",
    href: "mailto:ramh2125@gmail.com",
    accent: true,
  },
  {
    icon: Linkedin,
    label: "LINKEDIN",
    value: "/in/hariprasad-ram-933152358",
    href: "https://linkedin.com/in/hariprasad-ram-933152358/",
    external: true,
  },
  {
    icon: Github,
    label: "GITHUB",
    value: "@HariPrasad-Ram",
    href: "https://github.com/HariPrasad-Ram",
    external: true,
  },
  { icon: MapPin, label: "LOCATION", value: "Hyderabad, Telangana, India" },
  { icon: MessageCircle, label: "WHATSAPP", value: "+91 6302585050", href: "https://wa.me/916302585050", external: true },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "Job Opportunity", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:ramh2125@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${body}`;
    toast.success("Opening your email client…");
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="container">
        <div className="reveal mb-12 max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-amber mb-3">CONTACT</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold border-l-4 border-primary pl-5 leading-tight">
            Get In Touch
          </h2>
          <p className="mt-4 text-muted-foreground text-lg pl-5">
            Open to Data Analyst &amp; BI Developer roles, freelance work, and collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* LEFT */}
          <div className="reveal card-hover relative rounded-2xl bg-card border border-border p-6 sm:p-8 overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-[3px] bg-primary" />
            <h3 className="font-display text-2xl font-bold">Contact Info</h3>
            <p className="text-sm text-muted-foreground mb-6">The fastest ways to reach me.</p>

            <ul className="space-y-3">
              {contactItems.map(({ icon: Icon, label, value, href, external, accent }) => {
                const content = (
                  <div className="flex items-center gap-4 rounded-lg border border-border bg-background/40 p-3.5 hover:border-primary/50 transition">
                    <span className="grid place-items-center h-10 w-10 rounded-md bg-primary/10 text-primary shrink-0">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold tracking-[0.25em] text-muted-foreground">{label}</p>
                      <p className={`text-sm truncate ${accent ? "text-amber font-medium" : "text-foreground"}`}>{value}</p>
                    </div>
                  </div>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="block">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* RIGHT */}
          <form
            onSubmit={onSubmit}
            className="reveal card-hover relative rounded-2xl bg-card border border-border p-6 sm:p-8 overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-[3px] bg-secondary" />
            <h3 className="font-display text-2xl font-bold">Send a Message</h3>
            <p className="text-sm text-muted-foreground mb-6">I&apos;ll get back within 24 hours.</p>

            <div className="space-y-4">
              <Field label="YOUR NAME">
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Jane Doe"
                  className="w-full rounded-md bg-background border border-border px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition"
                />
              </Field>
              <Field label="YOUR EMAIL">
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jane@company.com"
                  className="w-full rounded-md bg-background border border-border px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition"
                />
              </Field>
              <Field label="SUBJECT">
                <select
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full rounded-md bg-background border border-border px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition"
                >
                  <option>Job Opportunity</option>
                  <option>Freelance Project</option>
                  <option>Collaboration</option>
                  <option>Other</option>
                </select>
              </Field>
              <Field label="YOUR MESSAGE">
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or role..."
                  className="w-full rounded-md bg-background border border-border px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition resize-none"
                />
              </Field>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110 shadow-[0_15px_40px_-15px_hsl(var(--primary))] transition"
              >
                Send Message <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <label className="block">
    <span className="block text-[10px] font-bold tracking-[0.25em] text-muted-foreground mb-1.5">{label}</span>
    {children}
  </label>
);

export default Contact;
