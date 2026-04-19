import { useEffect, useState } from "react";
import { Award, ExternalLink, X, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import certNasscom from "@/assets/cert-nasscom.jpg";
import certAiVariant from "@/assets/cert-aivariant.jpg";

type BadgeTone = "amber" | "cyan" | "gray";

interface Cert {
  badges: { label: string; tone: BadgeTone }[];
  title: string;
  issuer: string;
  date?: string;
  meta?: { label: string; value: string }[];
  description: string;
  tags: string[];
  asset?: { type: "image" | "pdf"; src: string };
  featured?: boolean;
}

const certs: Cert[] = [
  {
    badges: [
      { label: "POWER BI", tone: "amber" },
      { label: "NASSCOM", tone: "cyan" },
      { label: "SILVER", tone: "gray" },
    ],
    title: "Data Analytics with Microsoft Power BI",
    issuer:
      "FutureSkills Prime — NASSCOM · Ministry of Electronics & Information Technology, Government of India",
    date: "21 September 2025",
    meta: [{ label: "Certificate ID", value: "FSP/2025/9/10242057" }],
    description:
      "Government-aligned competency certification issued under the IT-ITeS Sector Skills Council NASSCOM. Cleared assessment in Silver Category (60–69% score).",
    tags: ["Power BI", "DAX", "Data Analytics", "Government Certified"],
    asset: { type: "image", src: certNasscom },
    featured: true,
  },
  {
    badges: [
      { label: "INTERNSHIP", tone: "amber" },
      { label: "AI VARIANT", tone: "cyan" },
    ],
    title: "Data Analyst Internship",
    issuer: "AI Variant",
    date: "24 September 2025",
    meta: [
      { label: "Code", value: "AIV/24-25/Q3/09/155139" },
      { label: "Period", value: "23rd June 2025 to 23rd September 2025" },
    ],
    description: "Successfully completed Data Analyst internship project at AI Variant.",
    tags: ["SQL", "Power BI", "Tableau", "Data Analysis", "ETL"],
    asset: { type: "image", src: certAiVariant },
  },
  {
    badges: [
      { label: "POWER BI", tone: "amber" },
      { label: "SAIKET SYSTEMS", tone: "cyan" },
      { label: "VERIFIED", tone: "gray" },
    ],
    title: "Power BI Internship Completion",
    issuer: "Saiket Systems — ISO 9001:2015 · MSME",
    date: "05 February 2026",
    meta: [
      { label: "Intern ID", value: "SKS/A2/C86944" },
      { label: "Period", value: "05 Jan 2026 to 05 Feb 2026" },
    ],
    description:
      "Internship completion certificate recognizing exceptional Power BI skills and dedication.",
    tags: ["Power BI", "Dashboard Development", "Data Visualization"],
    asset: { type: "pdf", src: "/cert-saiket.pdf" },
  },
  {
    badges: [
      { label: "DATA ANALYTICS", tone: "amber" },
      { label: "EXCELR", tone: "cyan" },
    ],
    title: "Data Analytics Certification",
    issuer: "ExcelR Solutions",
    description:
      "Comprehensive training in data analysis, visualization, statistics, and business intelligence.",
    tags: ["SQL", "Python", "Power BI", "Tableau", "Excel", "Statistics"],
  },
];

const toneClass = (tone: BadgeTone) =>
  tone === "amber"
    ? "bg-primary/15 text-amber border-primary/40"
    : tone === "cyan"
    ? "bg-secondary/15 text-cyan border-secondary/40"
    : "bg-muted text-muted-foreground border-border";

const Modal = ({ cert, onClose }: { cert: Cert; onClose: () => void }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center bg-black/85 backdrop-blur-sm p-4 sm:p-8 animate-fade-up"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 grid place-items-center h-10 w-10 rounded-full bg-card border border-border text-foreground hover:text-primary hover:border-primary transition"
      >
        <X className="h-5 w-5" />
      </button>
      <div
        className="relative max-w-5xl w-full max-h-[90vh] rounded-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {cert.asset?.type === "image" ? (
          <img src={cert.asset.src} alt={cert.title} className="w-full h-auto max-h-[90vh] object-contain bg-card" />
        ) : (
          <iframe src={cert.asset?.src} title={cert.title} className="w-full h-[90vh] bg-card" />
        )}
      </div>
    </div>
  );
};

const CertCard = ({ cert, onView, featured }: { cert: Cert; onView: () => void; featured?: boolean }) => (
  <article
    className={cn(
      "reveal card-hover relative rounded-2xl bg-card border p-6 sm:p-7 flex flex-col",
      featured ? "border-primary/50 lg:col-span-3" : "border-border"
    )}
  >
    <div className="flex items-start justify-between gap-4 mb-4">
      <div className="flex flex-wrap gap-1.5">
        {cert.badges.map((b) => (
          <span key={b.label} className={cn("rounded-full border px-2.5 py-0.5 text-[10px] font-bold tracking-wider", toneClass(b.tone))}>
            {b.label}
          </span>
        ))}
      </div>
      <span className="grid place-items-center h-10 w-10 shrink-0 rounded-md bg-primary/10 text-primary">
        <Award className="h-5 w-5" />
      </span>
    </div>

    <h3 className={cn("font-display font-bold leading-tight mb-2", featured ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl")}>
      {cert.title}
    </h3>
    <p className="text-sm text-amber font-medium mb-3">{cert.issuer}</p>

    {(cert.date || cert.meta) && (
      <div className="space-y-1 text-xs text-muted-foreground mb-3">
        {cert.date && (
          <p>
            <span className="text-foreground/70">Date:</span> {cert.date}
          </p>
        )}
        {cert.meta?.map((m) => (
          <p key={m.label}>
            <span className="text-foreground/70">{m.label}:</span>{" "}
            <span className="font-mono text-foreground/90">{m.value}</span>
          </p>
        ))}
      </div>
    )}

    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{cert.description}</p>

    <div className="flex flex-wrap gap-1.5 mb-5">
      {cert.tags.map((t) => (
        <span key={t} className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-[11px] text-muted-foreground">
          {t}
        </span>
      ))}
    </div>

    <div className="mt-auto">
      {cert.asset ? (
        <button
          onClick={onView}
          className="inline-flex items-center gap-2 rounded-md border border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/10 transition"
        >
          <ExternalLink className="h-4 w-4" /> View Certificate
        </button>
      ) : (
        <span className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-semibold text-muted-foreground">
          <FileText className="h-4 w-4" /> Certificate Available
        </span>
      )}
    </div>
  </article>
);

const Certifications = () => {
  const [open, setOpen] = useState<Cert | null>(null);
  const featured = certs.find((c) => c.featured)!;
  const rest = certs.filter((c) => !c.featured);

  return (
    <section id="certifications" className="relative py-24 lg:py-32 bg-muted/20">
      <div className="container">
        <div className="reveal mb-12 max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-amber mb-3">CERTIFICATIONS</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold border-l-4 border-primary pl-5 leading-tight">
            Certifications
          </h2>
          <p className="mt-4 text-muted-foreground text-lg pl-5">
            Government-aligned and industry credentials backing my analytics work.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <CertCard cert={featured} featured onView={() => setOpen(featured)} />
          {rest.map((c) => (
            <CertCard key={c.title} cert={c} onView={() => setOpen(c)} />
          ))}
        </div>
      </div>
      {open && <Modal cert={open} onClose={() => setOpen(null)} />}
    </section>
  );
};

export default Certifications;
