import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  GraduationCap,
  ArrowRight,
  Building2,
  ShieldCheck,
  CheckCircle2,
  Star,
  Sparkles,
  PhoneCall,
  BadgeCheck,
  ChevronRight,
  MessageCircle,
  X,
  FileCheck,
  Headphones,
  Laptop,
  Send,
  ClipboardList,
  Award,
  BookCheck,
  UserCheck,
  Menu,
} from "lucide-react";
import { toast } from "sonner";
import heroImage from "@/assets/hero-education.jpg";
import admissionImage from "@/assets/admission-process.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Career4s — Online University Admission Guidance & Counselling" },
      {
        name: "description",
        content:
          "Career4s provides 100% free admission guidance for UGC-entitled online universities. Check eligibility, verify documents, and get direct enrolment support.",
      },
      { property: "og:title", content: "Career4s — Online University Admissions" },
      {
        property: "og:description",
        content:
          "Get direct admission into top UGC-entitled online universities with expert 1-on-1 academic counselling.",
      },
    ],
  }),
  component: Index,
});

// Navigation Links
const navLinks = [
  { name: "Admission Process", href: "#process" },
  { name: "Eligibility Checker", href: "#eligibility" },
  { name: "Why Career4s", href: "#benefits" },
];

// Admission steps
const admissionSteps = [
  {
    n: "01",
    t: "Free Profile & Eligibility Evaluation",
    d: "Share your past qualifications, academic interests, and career goals with our certified counsellors for an instant eligibility evaluation.",
    icon: Sparkles,
  },
  {
    n: "02",
    t: "University Shortlist & Seat Guidance",
    d: "We guide you in selecting the right UGC-DEB entitled university based on accreditation (NAAC A++/A+), syllabus structure, and exam modes.",
    icon: Building2,
  },
  {
    n: "03",
    t: "Document Verification & Fast Application",
    d: "Our admissions desk verifies your marksheets, IDs, and certificates to ensure 100% error-free university portal submission.",
    icon: FileCheck,
  },
  {
    n: "04",
    t: "Enrolment ID & LMS Portal Activation",
    d: "Receive your official University Enrolment Number, Student ID card, and LMS access credentials tracked end-to-end.",
    icon: Laptop,
  },
];

// Why choose us / Admission benefits
const admissionBenefits = [
  {
    icon: ShieldCheck,
    title: "100% UGC-DEB Entitled Universities",
    desc: "We exclusively guide admissions into universities legally entitled by UGC and accredited by NAAC.",
  },
  {
    icon: UserCheck,
    title: "Zero Service Fees to Students",
    desc: "Our admission consultation, document review, and guidance are completely 100% free of cost.",
  },
  {
    icon: BookCheck,
    title: "Scholarship & Fee Waiver Desk",
    desc: "We help students claim merit waivers, defense concessions, and early-bird scholarship discounts.",
  },
  {
    icon: Headphones,
    title: "Dedicated Student Mentor",
    desc: "Your personal advisor stays with you from initial registration until semester exams and degree dispatch.",
  },
  {
    icon: ClipboardList,
    title: "Hassle-Free Documentation",
    desc: "We assist in digital document scanning, equivalence checks, and university approval clearances.",
  },
  {
    icon: Award,
    title: "Placement & LMS Guidance",
    desc: "Get access to university placement portals, resume workshops, and virtual campus hiring drives.",
  },
];

function Index() {
  // Mobile navigation state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Apply for Online University Admission");
  
  // Form input states
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    level: "Postgraduate (PG Degree)",
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [heroPhone, setHeroPhone] = useState("");

  // Eligibility Checker State
  const [checkerState, setCheckerState] = useState({
    qualification: "Bachelor's Degree Completed",
    stream: "Management / Commerce",
    targetDegree: "Master's (PG)",
  });
  const [eligibilityResult, setEligibilityResult] = useState<boolean | null>(null);

  const handleOpenModal = (title = "Apply for Online University Admission") => {
    setModalTitle(title);
    setIsModalOpen(true);
    setMobileMenuOpen(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone || formData.phone.length < 10) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }
    toast.success("Admission Enquiry Submitted! 🎉", {
      description: "Our senior academic advisor will call you within 15 minutes.",
    });
    setIsModalOpen(false);
    setFormData({ name: "", phone: "", email: "", level: "Postgraduate (PG Degree)" });
  };

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroPhone || heroPhone.length < 10) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }
    toast.success("Admission Callback Requested! 🚀", {
      description: "An admissions counsellor will reach out shortly with university guidelines.",
    });
    setHeroPhone("");
  };

  const handleCheckerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEligibilityResult(true);
    toast.success("Eligibility Confirmed! ✅", {
      description: "You are eligible for direct admission in top UGC-entitled universities.",
    });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) {
      toast.error("Please provide a valid email address.");
      return;
    }
    toast.success("Subscribed to Admission Alerts!", {
      description: "You'll receive notifications on admission deadlines & university circulars.",
    });
    setNewsletterEmail("");
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      {/* 1. TOP LIVE ANNOUNCEMENT TICKER */}
      <div className="bg-primary px-3 sm:px-4 py-2 text-center text-xs font-semibold text-primary-foreground sm:text-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 sm:gap-4 flex-wrap">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-2 py-0.5 text-[11px] font-bold tracking-wide text-white">
            <span className="h-2 w-2 animate-ping rounded-full bg-amber-300" />
            LIVE
          </span>
          <span className="leading-tight text-center">
            🔥 Online University Admissions Open for July 2026 Session
          </span>
          <button
            onClick={() => handleOpenModal("Claim Direct Admission Guidance")}
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-[11px] font-bold text-primary shadow-sm transition-all hover:bg-white/90 active:scale-95"
          >
            Apply for Admission <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* 2. STICKY HEADER WITH RESPONSIVE MOBILE MENU */}
      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur-md transition-all">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5">
          <a href="/" className="group flex items-center gap-2">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md transition-transform group-hover:scale-105">
              <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-foreground">
                Career<span className="text-primary">4s</span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-medium tracking-wider uppercase text-muted-foreground">
                University Admissions
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.name}
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {l.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="tel:+919876543210"
              className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              <PhoneCall className="h-3.5 w-3.5 text-primary" />
              1800-890-4422
            </a>

            <button
              onClick={() => handleOpenModal("Book Free Admission Counselling")}
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg active:scale-95"
            >
              <span>Apply for Admission</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex md:hidden p-2 rounded-xl border border-border bg-card text-foreground hover:bg-surface"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-card px-4 pt-3 pb-5 space-y-3 animate-in slide-in-from-top-2">
            <nav className="flex flex-col space-y-2.5">
              {navLinks.map((l) => (
                <a
                  key={l.name}
                  href={l.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-foreground hover:bg-primary-soft hover:text-primary transition-colors"
                >
                  {l.name}
                </a>
              ))}
            </nav>
            <div className="pt-2 border-t border-border flex flex-col gap-2">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 rounded-xl border border-border py-2 text-xs font-semibold text-foreground"
              >
                <PhoneCall className="h-3.5 w-3.5 text-primary" />
                Call Helpline: 1800-890-4422
              </a>
              <button
                onClick={() => handleOpenModal("Book Free Admission Counselling")}
                className="w-full rounded-xl bg-primary py-2.5 text-xs font-bold text-primary-foreground shadow-md"
              >
                Apply for Admission
              </button>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* 3. HERO SECTION */}
        <section className="relative overflow-hidden mesh-bg px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 pb-14 sm:pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-8 lg:gap-12 lg:grid-cols-12">
              {/* Left Column */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-primary/20 bg-primary-soft px-3 py-1 text-[11px] sm:text-xs font-bold text-primary shadow-sm">
                  <BadgeCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                  <span>UGC-Entitled & NAAC A++ Online Universities</span>
                </div>

                <h1 className="mt-4 sm:mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl sm:leading-[1.15]">
                  Direct Admission in{" "}
                  <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-500 bg-clip-text text-transparent">
                    Top Online Universities
                  </span>
                </h1>

                <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Career4s simplifies your online university admission journey. Get free profile evaluation, instant eligibility verification, document approval, and direct enrolment guidance with{" "}
                  <strong className="font-semibold text-foreground">zero consultation charges</strong>.
                </p>

                {/* Trust Points */}
                <div className="mt-5 sm:mt-6 grid grid-cols-2 gap-2.5 sm:gap-3 sm:grid-cols-4">
                  {[
                    "100% Free Guidance",
                    "UGC & DEB Entitled",
                    "24,500+ Admitted",
                    "Direct LMS Onboarding",
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-center gap-1.5 text-xs font-semibold text-foreground/90">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary" />
                      <span className="truncate">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Instant Admission Callback Form inside Hero */}
                <div className="mt-6 sm:mt-8 rounded-2xl border border-border/80 bg-card p-4 shadow-xl sm:p-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    ⚡ Instant Free Admission Check & Callback
                  </div>
                  <form onSubmit={handleHeroSubmit} className="mt-3 flex flex-col gap-2.5 sm:flex-row">
                    <div className="relative flex-1">
                      <PhoneCall className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" />
                      <input
                        type="tel"
                        value={heroPhone}
                        onChange={(e) => setHeroPhone(e.target.value)}
                        placeholder="Enter 10-digit mobile number"
                        required
                        className="w-full rounded-xl border border-input bg-background pl-10 pr-4 py-2.5 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:scale-[1.02] active:scale-95"
                    >
                      <span>Start Admission</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </form>
                  <p className="mt-2 text-[11px] text-muted-foreground">
                    🔒 100% verified. Certified academic advisors will guide your admission for free.
                  </p>
                </div>
              </div>

              {/* Right Column: Hero Image with Badges */}
              <div className="relative lg:col-span-5 mt-4 lg:mt-0">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-primary/30 to-emerald-400/20 blur-2xl opacity-70" />

                  <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/40 bg-card shadow-2xl">
                    <img
                      src={heroImage}
                      alt="Student securing online university admission"
                      width={1200}
                      height={900}
                      className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white">
                      <div className="flex items-center gap-2">
                        <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping" />
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-emerald-300">
                          Admissions Active
                        </span>
                      </div>
                      <h4 className="mt-0.5 sm:mt-1 text-xs sm:text-sm font-bold text-white">
                        July 2026 Academic Batch Admissions Ongoing
                      </h4>
                    </div>
                  </div>

                  {/* Floating Badges */}
                  <div className="glass-card animate-float absolute -top-3 -left-2 sm:-top-5 sm:-left-4 rounded-xl sm:rounded-2xl border border-border/80 p-2 sm:p-3 shadow-xl">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-lg sm:rounded-xl bg-amber-500/10 text-amber-500">
                        <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-400 text-amber-400" />
                      </div>
                      <div>
                        <div className="text-[11px] sm:text-xs font-extrabold text-foreground">4.9 / 5 Rating</div>
                        <div className="text-[9px] sm:text-[10px] font-medium text-muted-foreground">
                          15k+ Students
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card animate-float-reverse absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-4 rounded-xl sm:rounded-2xl border border-border/80 p-2 sm:p-3 shadow-xl">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div>
                        <div className="text-[11px] sm:text-xs font-extrabold text-foreground">100% UGC Approved</div>
                        <div className="text-[9px] sm:text-[10px] font-medium text-muted-foreground">
                          NAAC Accredited
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. STATS COUNTER STRIP */}
        <section className="border-y border-border bg-card/60 py-8 sm:py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-4">
              {[
                { value: "24,500+", label: "Students Admitted", sub: "Guided into Online Degrees" },
                { value: "60+", label: "Accredited Universities", sub: "UGC-DEB & NAAC A++" },
                { value: "100%", label: "Free Counselling", sub: "Zero Platform or Agent Fees" },
                { value: "98.8%", label: "Admission Success", sub: "End-to-End Documentation" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center p-2">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-primary">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs sm:text-sm font-bold text-foreground">{stat.label}</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. ADMISSION PROCESS & STEPS */}
        <section className="px-4 sm:px-6 lg:px-8 py-14 sm:py-20" id="process">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-8 lg:gap-12 lg:grid-cols-12">
              <div className="relative lg:col-span-5 order-2 lg:order-1">
                <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-border shadow-xl sm:shadow-2xl">
                  <img
                    src={admissionImage}
                    alt="Admission guidance and counselling at Career4s"
                    width={1000}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="glass-card absolute -bottom-3 right-3 sm:-bottom-5 sm:right-5 rounded-xl sm:rounded-2xl border border-border p-3 sm:p-4 shadow-xl">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-primary text-primary-foreground">
                      <Headphones className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-foreground">Official Admission Desk</div>
                      <div className="text-[10px] sm:text-[11px] text-muted-foreground">Direct LMS & Enrolment Setup</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                  <FileCheck className="h-4 w-4" /> Seamless Admission Flow
                </span>
                <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                  Four Simple Steps to Secure Your Online University Admission
                </h2>
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  We eliminate admission stress with fast-track profile verification, scholarship assistance, and direct enrolment access.
                </p>

                <div className="mt-6 sm:mt-8 space-y-3.5 sm:space-y-5">
                  {admissionSteps.map((step) => {
                    return (
                      <div
                        key={step.n}
                        className="group flex items-start gap-3 sm:gap-4 rounded-xl sm:rounded-2xl border border-border/80 bg-card p-3.5 sm:p-4 shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
                      >
                        <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-primary-soft text-primary font-black text-xs sm:text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          {step.n}
                        </div>
                        <div>
                          <h3 className="text-xs sm:text-sm font-bold text-foreground">{step.t}</h3>
                          <p className="mt-0.5 sm:mt-1 text-[11px] sm:text-xs text-muted-foreground leading-relaxed">{step.d}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. INTERACTIVE ELIGIBILITY CHECKER */}
        <section className="bg-surface/70 px-4 sm:px-6 lg:px-8 py-14 sm:py-20" id="eligibility">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl sm:rounded-3xl border border-border/80 bg-card p-5 sm:p-8 lg:p-10 shadow-xl sm:shadow-2xl">
              <div className="text-center">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                  <ClipboardList className="h-4 w-4" /> Instant Profile Assessment
                </span>
                <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-foreground">
                  Online University Admission Eligibility Checker
                </h2>
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground">
                  Check if you qualify for direct admission into UGC-entitled online undergraduate or postgraduate degree programs.
                </p>
              </div>

              <form onSubmit={handleCheckerSubmit} className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">
                <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-3">
                  <div>
                    <label className="text-xs font-semibold text-foreground">Highest Qualification</label>
                    <select
                      value={checkerState.qualification}
                      onChange={(e) => setCheckerState({ ...checkerState, qualification: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-input bg-background p-2.5 sm:p-3 text-xs outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="12th Standard Passed">12th Standard Passed (HSC)</option>
                      <option value="Bachelor's Degree Completed">Bachelor's Degree (Graduation)</option>
                      <option value="Diploma / Polytechnic">3-Year Polytechnic Diploma</option>
                      <option value="Master's Degree">Master's Degree / Postgrad</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-foreground">Academic Background</label>
                    <select
                      value={checkerState.stream}
                      onChange={(e) => setCheckerState({ ...checkerState, stream: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-input bg-background p-2.5 sm:p-3 text-xs outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="Management / Commerce">Commerce / Business Studies</option>
                      <option value="Science / Engineering">Science / Maths / Engineering</option>
                      <option value="Arts / Humanities">Arts / Humanities / Social Sciences</option>
                      <option value="Computer Applications">Computer Science / IT</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-foreground">Desired Admission Level</label>
                    <select
                      value={checkerState.targetDegree}
                      onChange={(e) => setCheckerState({ ...checkerState, targetDegree: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-input bg-background p-2.5 sm:p-3 text-xs outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="Master's (PG)">Postgraduate Degree (PG)</option>
                      <option value="Bachelor's (UG)">Undergraduate Degree (UG)</option>
                      <option value="Executive Diploma">Executive Postgraduate Diploma</option>
                    </select>
                  </div>
                </div>

                <div className="text-center pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 sm:px-8 py-3 text-xs sm:text-sm font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
                  >
                    <span>Check Admission Eligibility</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>

              {eligibilityResult && (
                <div className="mt-5 sm:mt-6 rounded-xl sm:rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 sm:p-5 text-center animate-in fade-in">
                  <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-emerald-700 dark:text-emerald-300">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                    <span>Eligible for Direct Online University Admission!</span>
                  </div>
                  <p className="mt-1 text-[11px] sm:text-xs text-muted-foreground">
                    Based on your profile ({checkerState.qualification} in {checkerState.stream}), you qualify for immediate enrolment in accredited online universities.
                  </p>
                  <button
                    onClick={() => handleOpenModal(`Claim Direct Admission for ${checkerState.targetDegree}`)}
                    className="mt-3.5 inline-flex items-center gap-1.5 rounded-xl bg-primary px-5 py-2 text-xs font-bold text-primary-foreground shadow-sm hover:bg-primary/90"
                  >
                    <span>Claim Admission Guidance</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 7. WHY CAREER4S FOR ADMISSIONS (BENEFITS) */}
        <section className="px-4 sm:px-6 lg:px-8 py-14 sm:py-20" id="benefits">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                <ShieldCheck className="h-4 w-4" /> Trusted Admissions Partner
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                Why Students Trust Career4s for Online Admissions
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm text-muted-foreground">
                We safeguard your academic future with accredited university admissions and end-to-end student support.
              </p>
            </div>

            <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {admissionBenefits.map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.title}
                    className="flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-5 sm:p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-lg"
                  >
                    <div>
                      <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-primary-soft text-primary">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <h3 className="mt-3 sm:mt-4 text-sm sm:text-base font-bold text-foreground">{b.title}</h3>
                      <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* 8. COMPREHENSIVE MULTI-COLUMN ENTERPRISE FOOTER */}
      <footer className="border-t border-border bg-card text-foreground" id="footer">
        {/* Top Newsletter / Quick Alert Subscription */}
        <div className="border-b border-border px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-between gap-5 sm:gap-6 rounded-2xl bg-surface p-5 sm:p-8 md:flex-row md:p-10">
              <div className="text-center md:text-left">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                  <Sparkles className="h-4 w-4" /> Admission Notifications
                </span>
                <h3 className="mt-1 text-lg sm:text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  Subscribe to University Admission & Deadline Alerts
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Get updates on university application windows, merit scholarship deadlines, and UGC guidelines.
                </p>
              </div>

              <form onSubmit={handleNewsletterSubmit} className="flex w-full max-w-md flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-xs outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-1.5 shrink-0 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground transition-all hover:bg-primary/90"
                >
                  <span>Subscribe</span>
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 sm:gap-10 sm:grid-cols-2">
              {/* Col 1: Brand & Approvals */}
              <div className="space-y-4">
                <a href="/" className="flex items-center gap-2">
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                    <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg sm:text-xl font-extrabold tracking-tight text-foreground">
                      Career<span className="text-primary">4s</span>
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-medium tracking-wider uppercase text-muted-foreground">
                      Online University Admissions
                    </span>
                  </div>
                </a>

                <p className="text-xs leading-relaxed text-muted-foreground max-w-md">
                  Career4s is India's premier admission guidance platform facilitating online university enrolment into UGC-DEB entitled and NAAC accredited institutions for students and working professionals.
                </p>

                {/* Trust Badges */}
                <div className="pt-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-foreground">
                    Accredited Recognitions
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["UGC-DEB Entitled", "AICTE Approved", "NAAC A++", "AIU Recognized", "WES Accepted"].map(
                      (b) => (
                        <span
                          key={b}
                          className="rounded-md border border-border bg-surface px-2.5 py-1 text-[10px] font-semibold text-muted-foreground"
                        >
                          ✓ {b}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Col 2: Admission Resources */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-foreground">
                  Admission Resources
                </h4>
                <ul className="mt-3.5 space-y-2.5 text-xs text-muted-foreground">
                  <li>
                    <a href="#eligibility" className="transition-colors hover:text-primary">
                      Profile & Eligibility Checker
                    </a>
                  </li>
                  <li>
                    <a href="#process" className="transition-colors hover:text-primary">
                      4-Step Admission Journey
                    </a>
                  </li>
                  <li>
                    <a href="#benefits" className="transition-colors hover:text-primary">
                      Why Choose Career4s
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={() => handleOpenModal("Check Required Admission Documents")}
                      className="transition-colors hover:text-primary text-left"
                    >
                      Document Checklist Guide
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleOpenModal("Apply for Merit Scholarship")}
                      className="transition-colors hover:text-primary text-left"
                    >
                      Scholarship & Waiver Desk
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="border-t border-border bg-surface/60 px-4 sm:px-6 lg:px-8 py-6 text-xs text-muted-foreground">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <div>
              <p>
                © {new Date().getFullYear()} Career4s Education Services Pvt. Ltd. All rights reserved.
              </p>
              <p className="mt-1 text-[10px] sm:text-[11px] text-muted-foreground/80">
                Disclaimer: Career4s is an independent education guidance and digital admissions enablement portal facilitating admissions into accredited online universities.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[10px] sm:text-[11px] font-medium">
              <button
                onClick={() => toast.info("Privacy Policy: Your student data is 100% encrypted & never sold.")}
                className="hover:text-primary"
              >
                Privacy Policy
              </button>
              <span>•</span>
              <button
                onClick={() => toast.info("Terms: 100% free and transparent admission assistance for students.")}
                className="hover:text-primary"
              >
                Terms of Service
              </button>
              <span>•</span>
              <button
                onClick={() => toast.info("Grievance Redressal: grievance@career4s.com")}
                className="hover:text-primary"
              >
                Grievance Cell
              </button>
              <span>•</span>
              <button
                onClick={() => toast.info("Refunds: Managed directly per official university admission policies.")}
                className="hover:text-primary"
              >
                Refund Policy
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* 9. FLOATING QUICK-ACTION / WHATSAPP & EXPERT WIDGET */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-3">
        <button
          onClick={() => handleOpenModal("Chat with Admission Counsellor")}
          className="group flex items-center gap-2 sm:gap-2.5 rounded-full bg-emerald-600 px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs font-bold text-white shadow-2xl transition-all hover:bg-emerald-700 hover:scale-105 active:scale-95"
        >
          <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-emerald-400" />
          </span>
          <MessageCircle className="h-4 w-4" />
          <span>Talk to Expert</span>
        </button>
      </div>

      {/* 10. INTERACTIVE FREE ADMISSION COUNSELLING MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl border border-border bg-card p-5 sm:p-8 shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 sm:right-5 sm:top-5 rounded-full p-1.5 text-muted-foreground hover:bg-surface hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
              <Sparkles className="h-4 w-4" /> Online University Admission
            </div>
            <h3 className="mt-1.5 text-lg sm:text-2xl font-extrabold text-foreground">
              {modalTitle}
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Submit your details below. An official academic advisor will contact you within 15 minutes to guide your admission and document verification.
            </p>

            <form onSubmit={handleFormSubmit} className="mt-5 sm:mt-6 space-y-3 sm:space-y-3.5">
              <div>
                <label className="text-[11px] font-semibold text-foreground">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-xs sm:text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-foreground">Mobile Phone (WhatsApp)</label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-xs sm:text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-foreground">Email Address</label>
                <input
                  type="email"
                  placeholder="name@example.com (optional)"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-xs sm:text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-foreground">Admission Category</label>
                <select
                  value={formData.level}
                  onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2.5 text-xs sm:text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                >
                  <option value="Postgraduate (PG Degree)">Postgraduate (PG Degree - MBA / MCA / M.Sc / M.Com)</option>
                  <option value="Undergraduate (UG Degree)">Undergraduate (UG Degree - BBA / BCA / B.Com / BA)</option>
                  <option value="Executive Diploma">Executive Postgraduate Diploma</option>
                  <option value="Lateral Entry">Direct / Lateral Entry Admission</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-xl bg-primary py-3 text-xs sm:text-sm font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:scale-[1.01]"
                >
                  Submit & Get Free Admission Guidance
                </button>
              </div>

              <p className="text-center text-[10px] text-muted-foreground">
                🔒 100% confidential. No spam or sharing with unverified third parties.
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
