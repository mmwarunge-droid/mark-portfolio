import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, ChevronRight, ArrowUpRight, Briefcase, Trophy, Globe2, TrendingUp, Users, ShieldCheck, Sparkles, Menu, X, Download, Plane, Code2, WalletCards } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const highlights = [
  { label: "African markets covered", value: "10+" },
  { label: "Enterprise pipeline owned", value: "$250K+" },
  { label: "Recurring revenue deals", value: "$50K+ MRR" },
  { label: "Operational efficiency gains", value: "50%" },
];

const expertise = [
  "Fintech Commercial Leadership",
  "Enterprise Sales",
  "Cross-Border Payments",
  "FX Partnerships",
  "Market Expansion",
  "Product Monetization",
  "Revenue Strategy",
  "Partnership Negotiation",
  "Go-to-Market Execution",
  "Treasury & Payment Operations",
  "Customer Lifecycle Management",
  "Regulatory Navigation",
];

const experience = [
  {
    company: "Verto",
    role: "Sales Executive – East Africa",
    period: "Mar 2026 – Present",
    icon: WalletCards,
    points: [
      "Driving enterprise sales of FX and cross-border payment solutions across 5 African markets, targeting fintechs, importers/exporters, and digital platforms.",
      "Owning the full sales lifecycle from pipeline generation to demos, negotiation, closure, and growth of high-value accounts.",
      "Onboarded and commercialized cross-border clients generating $200K+ in monthly recurring revenue across African and global corridors.",
      "Partnered cross-functionally to improve payment efficiency by about 50%, reducing settlement delays and unlocking upsell opportunities.",
    ],
  },
  {
    company: "Cellulant Corporation",
    role: "Account Manager – Enterprise Fintech",
    period: "2025 – Mar 2026",
    icon: TrendingUp,
    points: [
      "Managed high-value enterprise fintech accounts across 10+ African markets spanning payroll, gig economy, remittances, and e-commerce.",
      "Led onboarding and commercialization of enterprise clients generating $50,000+ in monthly recurring revenue through checkout, payout, and FX solutions.",
      "Expanded into Zambia, DRC, Nigeria, and Ghana while navigating regulatory frameworks and local compliance constraints.",
      "Worked with compliance, treasury, engineering, and operations to improve payout efficiency by about 50%.",
    ],
  },
  {
    company: "Cellulant Corporation",
    role: "Account Executive – Fintech & Payments",
    period: "2022 – 2025",
    icon: Globe2,
    points: [
      "Negotiated and closed strategic FX and remittance partnerships that unlocked new rails and delivered around 70% share of wallet across priority corridors.",
      "Drove cross-sell and upsell of checkout, payout, and banking products, increasing customer lifetime value and delivering around 25% YoY client acquisition growth.",
      "Managed a 100+ lead enterprise pipeline, closing deals worth up to $250,000 per account across payments, remittances, and digital banking verticals.",
      "Reduced lead-to-go-live timelines by aligning legal, compliance, risk, and engineering teams.",
    ],
  },
  {
    company: "Nation Media Group",
    role: "Content Developer – Digital Media",
    period: "2020 – 2022",
    icon: Sparkles,
    points: [
      "Improved digital content layout and presentation, contributing to roughly 15% growth in daily digital readership over 24 months.",
      "Managed A&R operations for 30+ artists and creators across web and mobile distribution channels.",
      "Executed data-informed content initiatives that increased digital engagement by about 20%.",
    ],
  },
];

const earlierRoles = [
  "Content & Partnerships Lead – Digital Products, Cellulant Corporation",
  "Rights & Acquisition Assistant – VAS, Cellulant Corporation",
  "Content Strategist – VAS, Onfon Media Ltd",
  "Music Project Manager / Production Coordinator, True Media Solutions",
];

const education = [
  "Software Engineering — Moringa School (2026)",
  "BSc. Project Management — JKUAT (2025)",
  "Diploma, Aeronautical Engineering — Nairobi Aviation College",
  "Private Pilot’s License — Ninety-Nines Flying School",
];

const contact = {
  name: "Mark Warunge",
  title: "Head of Business Development & Growth",
  subtitle:
    "Fintech commercial leader building revenue engines across Africa through enterprise sales, FX partnerships, payments strategy, and market expansion.",
  location: "Nairobi, Kenya",
  phone: "+254 713 722 822",
  email: "mmwarunge@gmail.com",
  linkedin: "https://linkedin.com/in/mark-warunge",
};

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl space-y-3">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-cyan-200">
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
      <p className="text-sm leading-7 text-slate-300 md:text-base">{description}</p>
    </div>
  );
}

function FloatingOrb({ className }) {
  return (
    <motion.div
      aria-hidden
      className={`absolute rounded-full blur-3xl ${className}`}
      animate={{ y: [0, -16, 10, 0], x: [0, 10, -8, 0], scale: [1, 1.06, 0.98, 1] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export default function MarkWarungePortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("");

  const filteredExpertise = useMemo(() => {
    if (!filter.trim()) return expertise;
    return expertise.filter((item) => item.toLowerCase().includes(filter.toLowerCase()));
  }, [filter]);

  const nav = [
    ["About", "#about"],
    ["Experience", "#experience"],
    ["Strengths", "#strengths"],
    ["Education", "#education"],
    ["Contact", "#contact"],
  ];

  return (
    <div className="min-h-screen bg-[#07111f] text-slate-100">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.12),transparent_22%),linear-gradient(180deg,#07111f_0%,#081426_45%,#050913_100%)]" />
        <FloatingOrb className="left-[-5rem] top-20 h-56 w-56 bg-cyan-500/20" />
        <FloatingOrb className="right-0 top-64 h-72 w-72 bg-indigo-500/20" />
        <FloatingOrb className="bottom-16 left-1/3 h-64 w-64 bg-fuchsia-500/10" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:42px_42px] opacity-[0.16]" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-500 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20">
              MW
            </div>
            <div>
              <div className="text-sm font-semibold tracking-wide text-white">Mark Warunge</div>
              <div className="text-xs text-slate-400">Fintech Growth & Partnerships</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map(([label, href]) => (
              <a key={label} href={href} className="text-sm text-slate-300 transition hover:text-white">
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild className="rounded-2xl bg-white text-slate-950 hover:bg-slate-200">
              <a href={`mailto:${contact.email}`}>Let&apos;s Talk</a>
            </Button>
          </div>

          <button
            className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-200 md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-white/10 bg-slate-950/90 px-4 py-3 md:hidden">
            <div className="flex flex-col gap-3">
              {nav.map(([label, href]) => (
                <a key={label} href={href} className="text-sm text-slate-300" onClick={() => setMenuOpen(false)}>
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-12 md:px-8 md:pb-28 md:pt-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-7"
            >
              <Badge className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-cyan-100 hover:bg-cyan-400/10">
                Head of Business Development & Growth
              </Badge>

              <div className="space-y-5">
                <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl md:leading-[1.02]">
                  Building <span className="bg-gradient-to-r from-cyan-300 via-white to-indigo-300 bg-clip-text text-transparent">fintech growth engines</span> across Africa.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                  {contact.subtitle}
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="rounded-2xl bg-white px-6 text-slate-950 hover:bg-slate-200">
                  <a href="#contact">
                    Start a Conversation <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-2xl border-white/15 bg-white/5 px-6 text-white hover:bg-white/10">
                  <a href={contact.linkedin} target="_blank" rel="noreferrer">
                    View LinkedIn <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {highlights.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + idx * 0.08, duration: 0.5 }}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/10 backdrop-blur"
                  >
                    <div className="text-2xl font-semibold text-white">{item.value}</div>
                    <div className="mt-2 text-sm leading-6 text-slate-400">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-indigo-400/10 to-fuchsia-400/10 blur-2xl" />
              <Card className="relative overflow-hidden rounded-[2rem] border-white/10 bg-white/5 shadow-2xl shadow-cyan-900/20 backdrop-blur-xl">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.28),transparent_35%),linear-gradient(180deg,rgba(8,20,38,0.4),rgba(8,20,38,0.9))]" />
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80"
                      alt="Portrait placeholder for Mark Warunge"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="rounded-3xl border border-white/10 bg-slate-950/55 p-5 backdrop-blur-md">
                        <div className="text-xl font-semibold text-white">{contact.name}</div>
                        <div className="mt-1 text-sm text-cyan-200">{contact.title}</div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Badge className="rounded-full bg-white/10 text-slate-100 hover:bg-white/10">Cross-Border Payments</Badge>
                          <Badge className="rounded-full bg-white/10 text-slate-100 hover:bg-white/10">FX Partnerships</Badge>
                          <Badge className="rounded-full bg-white/10 text-slate-100 hover:bg-white/10">Enterprise Growth</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <Card className="rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl">
              <CardContent className="p-8 md:p-10">
                <SectionTitle
                  eyebrow="Profile"
                  title="Commercial operator with product instincts."
                  description="A growth leader who connects fintech product capability to commercial outcomes — from enterprise acquisition and GTM strategy to corridor expansion, onboarding acceleration, and wallet-share growth."
                />
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-5">
                    <div className="mb-3 flex items-center gap-3 text-cyan-200"><Briefcase className="h-5 w-5" /> Commercial Leadership</div>
                    <p className="text-sm leading-7 text-slate-300">Experienced in revenue strategy, enterprise partnerships, sales execution, and fintech product commercialization.</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-5">
                    <div className="mb-3 flex items-center gap-3 text-cyan-200"><ShieldCheck className="h-5 w-5" /> Regulatory Navigation</div>
                    <p className="text-sm leading-7 text-slate-300">Comfortable aligning sales motion with KYC, AML, treasury, risk, and engineering realities in African markets.</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-5">
                    <div className="mb-3 flex items-center gap-3 text-cyan-200"><Globe2 className="h-5 w-5" /> Market Expansion</div>
                    <p className="text-sm leading-7 text-slate-300">Built commercial traction across East, West, and Central Africa with corridor-led thinking and practical expansion execution.</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-5">
                    <div className="mb-3 flex items-center gap-3 text-cyan-200"><Users className="h-5 w-5" /> Cross-Functional Execution</div>
                    <p className="text-sm leading-7 text-slate-300">Trusted partner to product, operations, compliance, treasury, and engineering teams when turning deals into live revenue.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card id="strengths" className="rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl">
              <CardContent className="p-8 md:p-10">
                <SectionTitle
                  eyebrow="Strengths"
                  title="Capability stack for high-growth fintech roles."
                  description="Search or scan the areas that best fit business development, partnerships, commercial strategy, GTM, and payments leadership opportunities."
                />
                <div className="mt-8 space-y-5">
                  <Input
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    placeholder="Filter strengths, e.g. FX, GTM, revenue..."
                    className="h-12 rounded-2xl border-white/10 bg-slate-950/40 text-white placeholder:text-slate-500"
                  />
                  <div className="flex flex-wrap gap-3">
                    {filteredExpertise.map((item) => (
                      <motion.div key={item} whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
                        <Badge className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100 hover:bg-white/15">
                          {item}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <SectionTitle
            eyebrow="Experience"
            title="A track record shaped by payments, media, and monetization."
            description="Selected roles that demonstrate a progression from digital content operations into enterprise fintech sales, partnership development, cross-border payments, and regional commercial leadership."
          />

          <div className="mt-10 grid gap-6">
            {experience.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={`${item.company}-${item.role}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                >
                  <Card className="rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl transition hover:bg-white/[0.07]">
                    <CardContent className="p-8 md:p-10">
                      <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
                        <div className="space-y-4">
                          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 text-cyan-200">
                            <Icon className="h-7 w-7" />
                          </div>
                          <div>
                            <div className="text-xl font-semibold text-white">{item.company}</div>
                            <div className="mt-1 text-sm text-slate-400">{item.period}</div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold text-white">{item.role}</h3>
                          <div className="mt-5 grid gap-4">
                            {item.points.map((point) => (
                              <div key={point} className="flex gap-3 rounded-2xl border border-white/8 bg-slate-950/35 p-4">
                                <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                                <p className="text-sm leading-7 text-slate-300">{point}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8 rounded-[2rem] border border-dashed border-white/10 bg-white/[0.03] p-6 md:p-8">
            <div className="text-sm uppercase tracking-[0.25em] text-slate-400">Earlier Roles</div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {earlierRoles.map((role) => (
                <div key={role} className="rounded-2xl border border-white/10 bg-slate-950/35 p-4 text-sm text-slate-300">
                  {role}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                icon: Trophy,
                title: "Revenue & Growth",
                body: "Closed and expanded recurring-revenue relationships, built high-value enterprise pipelines, and improved customer lifetime value through cross-sell and upsell execution.",
              },
              {
                icon: Globe2,
                title: "Regional Expansion",
                body: "Helped unlock new corridors and operational go-lives across East, West, and Central African markets with careful commercial-regulatory coordination.",
              },
              {
                icon: Code2,
                title: "Technical Fluency",
                body: "Software engineering training adds an execution edge when working with APIs, product teams, implementation workflows, and modern digital platforms.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                >
                  <Card className="h-full rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl">
                    <CardContent className="p-8">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/15 to-indigo-500/20 text-cyan-200">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="mt-6 text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-300">{item.body}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="education" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionTitle
              eyebrow="Education"
              title="Built on business, aviation, and software foundations."
              description="A career path that blends commercial instinct, operational rigor, and technical literacy — useful for fintech, SaaS, partnerships, product growth, and expansion roles."
            />
            <div className="grid gap-4">
              {education.map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 rounded-2xl bg-cyan-400/10 p-3 text-cyan-200">
                      {idx === 2 ? <Plane className="h-5 w-5" /> : <Download className="h-5 w-5" />}
                    </div>
                    <div className="text-sm leading-7 text-slate-200">{item}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-white/[0.04] to-indigo-500/10 p-8 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl md:p-12"
          >
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-cyan-100">
                  <Mail className="h-3.5 w-3.5" />
                  Open to Opportunities
                </div>
                <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
                  Let&apos;s build the next growth chapter.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-300 md:text-base">
                  Available for business development, partnerships, commercial strategy, market expansion, and fintech growth roles across Africa and global emerging-market teams.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <a href={`mailto:${contact.email}`} className="rounded-2xl border border-white/10 bg-slate-950/40 p-5 transition hover:bg-slate-950/60">
                    <div className="flex items-center gap-3 text-cyan-200"><Mail className="h-4 w-4" /> Email</div>
                    <div className="mt-3 text-sm text-slate-200">{contact.email}</div>
                  </a>
                  <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className="rounded-2xl border border-white/10 bg-slate-950/40 p-5 transition hover:bg-slate-950/60">
                    <div className="flex items-center gap-3 text-cyan-200"><Phone className="h-4 w-4" /> Phone</div>
                    <div className="mt-3 text-sm text-slate-200">{contact.phone}</div>
                  </a>
                  <a href={contact.linkedin} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-slate-950/40 p-5 transition hover:bg-slate-950/60">
                    <div className="flex items-center gap-3 text-cyan-200"><Linkedin className="h-4 w-4" /> LinkedIn</div>
                    <div className="mt-3 text-sm text-slate-200">linkedin.com/in/mark-warunge</div>
                  </a>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                    <div className="flex items-center gap-3 text-cyan-200"><MapPin className="h-4 w-4" /> Location</div>
                    <div className="mt-3 text-sm text-slate-200">{contact.location}</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 lg:items-end">
                <Button asChild size="lg" className="rounded-2xl bg-white px-6 text-slate-950 hover:bg-slate-200">
                  <a href={`mailto:${contact.email}?subject=Opportunity%20for%20Mark%20Warunge`}>Email Mark</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-2xl border-white/15 bg-white/5 px-6 text-white hover:bg-white/10">
                  <a href={contact.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn</a>
                </Button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
