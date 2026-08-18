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
import amityLogo from "@/assets/universities/amity.png";
import kurukshetraLogo from "@/assets/universities/kurukshetra.png";
import parulLogo from "@/assets/universities/parul.png";
import galgotiasLogo from "@/assets/universities/galgotias.png";
import allianceLogo from "@/assets/universities/alliance.png";
import glaLogo from "@/assets/universities/gla.png";
import vitLogo from "@/assets/universities/vit.png";
import lpuLogo from "@/assets/universities/lpu.png";
import manipalLogo from "@/assets/universities/manipal.png";
import chandigarhLogo from "@/assets/universities/chandigarh.png";
import adtuLogo from "@/assets/universities/adtu.png";
import christLogo from "@/assets/universities/christ.png";
import shooliniLogo from "@/assets/universities/shoolini.png";
import bennettLogo from "@/assets/universities/bennett.png";
import whatsappIcon from "@/assets/whatsapp-icon.png";

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
  { name: "Career Outcomes", href: "#careers" },
  { name: "Reviews", href: "#reviews" },
  { name: "Top Universities", href: "#universities" },
  { name: "Why Online?", href: "#why-online" },
  { name: "Eligibility Checker", href: "#eligibility" },
];

// University Logos (Strictly logos/emblems only - no names)
const universityLogos = [
  {
    id: "amity",
    name: "Amity University",
    image: amityLogo,
  },
  {
    id: "kurukshetra",
    name: "Kurukshetra University",
    image: kurukshetraLogo,
  },
  {
    id: "parul",
    name: "Parul University",
    image: parulLogo,
  },
  {
    id: "galgotias",
    name: "Galgotias University",
    image: galgotiasLogo,
  },
  {
    id: "alliance",
    name: "Alliance University",
    image: allianceLogo,
  },
  {
    id: "gla",
    name: "GLA University",
    image: glaLogo,
  },
  {
    id: "vit",
    name: "Vellore Institute of Technology",
    image: vitLogo,
  },
  {
    id: "lpu",
    name: "Lovely Professional University",
    image: lpuLogo,
  },
  {
    id: "manipal",
    name: "Manipal University",
    image: manipalLogo,
  },
  {
    id: "chandigarh",
    name: "Chandigarh University",
    image: chandigarhLogo,
  },
  {
    id: "upgrad",
    name: "upGrad",
    svg: (
      <svg viewBox="0 0 160 50" className="h-10 sm:h-12 w-auto object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="5" y="36" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="34" fill="#EB0029" letterSpacing="-1.5">
          upGrad
        </text>
        <circle cx="132" cy="18" r="4" fill="#EB0029" />
      </svg>
    ),
  },
  {
    id: "adtu",
    name: "Assam Down Town University",
    image: adtuLogo,
  },
  {
    id: "christ",
    name: "Christ University",
    image: christLogo,
  },
  {
    id: "shoolini",
    name: "Shoolini University",
    image: shooliniLogo,
  },
  {
    id: "bennett",
    name: "Bennett University",
    image: bennettLogo,
  },
];

// 8 Featured Top Online Universities with Admission Cards
const topUniversities = [
  {
    id: "amity",
    name: "Amity University Online",
    logo: amityLogo,
    naac: "NAAC A+",
    approvals: ["UGC-DEB", "WES Recognized", "QS Ranked"],
    programs: ["Online MBA", "Online MCA", "Online BBA", "Online BCA"],
    highlights: "Global Faculty • Live Masterclasses • 100% Online Exam Mode",
    batch: "July 2026 Batch Open",
  },
  {
    id: "manipal",
    name: "Manipal University Jaipur (Online)",
    logo: manipalLogo,
    naac: "NAAC A+",
    approvals: ["UGC-DEB", "AICTE Approved", "NIRF Ranked"],
    programs: ["Online MBA", "Online MCA", "Online B.Com", "Online M.Com"],
    highlights: "Free Coursera Subscriptions • 20,000+ Alumni • Dedicated Career Desk",
    batch: "July 2026 Batch Open",
  },
  {
    id: "chandigarh",
    name: "Chandigarh University Online",
    logo: chandigarhLogo,
    naac: "NAAC A+",
    approvals: ["UGC-DEB", "NIRF Top 30", "AICTE Approved"],
    programs: ["Online MBA", "Online MCA", "Online M.Sc Data Science", "Online BBA"],
    highlights: "Harvard Mentors • 300+ Hiring Partners • Flexible LMS Portal",
    batch: "July 2026 Batch Open",
  },
  {
    id: "lpu",
    name: "Lovely Professional University Online",
    logo: lpuLogo,
    naac: "NAAC A++",
    approvals: ["UGC-DEB", "NIRF Rank 38", "WES Accepted"],
    programs: ["Online MBA", "Online MCA", "Online BCA", "Online MA"],
    highlights: "Interactive LMS App • Industry Mock Interviews • Global Recognition",
    batch: "July 2026 Batch Open",
  },
  {
    id: "parul",
    name: "Parul University Online",
    logo: parulLogo,
    naac: "NAAC A++",
    approvals: ["UGC-DEB", "AICTE Approved", "Govt. Recognized"],
    programs: ["Online MBA", "Online MCA", "Online BBA", "Online MSW"],
    highlights: "20+ In-demand Specializations • Practical Case Studies • 1-on-1 Mentorship",
    batch: "July 2026 Batch Open",
  },
  {
    id: "gla",
    name: "GLA University Online",
    logo: glaLogo,
    naac: "NAAC A+",
    approvals: ["UGC-DEB", "IACBE Accredited", "12B UGC Status"],
    programs: ["Online MBA", "Online MCA", "Online B.Com (Hons)", "Online BBA"],
    highlights: "Self-Paced Learning • Comprehensive E-Library • Industry Readiness",
    batch: "July 2026 Batch Open",
  },
  {
    id: "alliance",
    name: "Alliance University Online",
    logo: allianceLogo,
    naac: "NAAC A",
    approvals: ["UGC-DEB", "AACSB Member", "AIU Recognized"],
    programs: ["Executive MBA", "Online PGDM", "Online BBA", "Online M.Com"],
    highlights: "Bangalore Tech Corporate Network • Executive Leadership Sessions",
    batch: "July 2026 Batch Open",
  },
  {
    id: "kurukshetra",
    name: "Kurukshetra University Online (KUK)",
    logo: kurukshetraLogo,
    naac: "NAAC A++",
    approvals: ["UGC-DEB", "Category-I State Govt. University"],
    programs: ["Online MBA", "Online MCA", "Online MA", "Online M.Com"],
    highlights: "Prestigious Govt. Degree • Low Fee Structure • Recognized Worldwide",
    batch: "July 2026 Batch Open",
  },
  {
    id: "upgrad",
    name: "upGrad Online Programs",
    svg: (
      <svg viewBox="0 0 160 50" className="h-10 sm:h-12 w-auto object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="5" y="36" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="34" fill="#EB0029" letterSpacing="-1.5">
          upGrad
        </text>
        <circle cx="132" cy="18" r="4" fill="#EB0029" />
      </svg>
    ),
    naac: "UGC Entitled",
    approvals: ["UGC Entitled", "WES Recognized", "Top Global Faculty"],
    programs: ["Executive MBA", "M.Sc Data Science", "Global MBA", "AI & ML PG"],
    highlights: "300+ Industry Mentors • 50,000+ Placed • Top Global University Degree",
    batch: "July 2026 Batch Open",
  },
  {
    id: "adtu",
    name: "Assam Down Town University (ADTU)",
    logo: adtuLogo,
    naac: "NAAC A",
    approvals: ["UGC-DEB", "AICTE Approved", "Govt. Recognized"],
    programs: ["Online MBA", "Online MCA", "Online BBA", "Online BCA"],
    highlights: "Affordable Fee Structure • State-of-the-Art LMS • Full Placement Support",
    batch: "July 2026 Batch Open",
  },
  {
    id: "christ",
    name: "Christ (Deemed to be University) Online",
    logo: christLogo,
    naac: "NAAC A+",
    approvals: ["UGC Entitled", "MHRD Category-I", "NIRF Top 20"],
    programs: ["Online MBA", "Online BBA", "Online M.Com", "Online PGDM"],
    highlights: "Prestigious Brand Value • Corporate Mentorship • Rigorous Curriculum",
    batch: "July 2026 Batch Open",
  },
  {
    id: "shoolini",
    name: "Shoolini University Online",
    logo: shooliniLogo,
    naac: "NAAC A+",
    approvals: ["UGC-DEB", "QS World Ranked #1", "NIRF Ranked"],
    programs: ["Online MBA", "Online MCA", "Online BBA", "Online B.Com (Hons)"],
    highlights: "Top 100 Global Young Universities • 100% Online Exam Mode • Pay After Placement",
    batch: "July 2026 Batch Open",
  },
  {
    id: "bennett",
    name: "Bennett University (The Times Group)",
    logo: bennettLogo,
    naac: "NAAC A+",
    approvals: ["UGC Entitled", "Times Group Legacy", "AICTE Approved"],
    programs: ["Executive MBA", "Online MCA", "Online BBA", "PG in AI & Cloud"],
    highlights: "Times Group Media & Corporate Network • Silicon Valley Faculty • High ROI",
    batch: "July 2026 Batch Open",
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

                <h1 className="mt-4 sm:mt-5 text-3xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl sm:leading-[1.15]">
                  Direct Admission in{" "}
                  <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-500 bg-clip-text text-transparent">
                    Top Online Universities
                  </span>
                </h1>

                <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Career4s simplifies your online university admission journey. Get free profile evaluation, instant eligibility verification, document approval, and direct enrolment guidance with{" "}
                  <strong className="font-bold text-foreground">zero consultation charges</strong>.
                </p>

                {/* Trust Points */}
                <div className="mt-5 sm:mt-6 grid grid-cols-2 gap-2.5 sm:gap-3 sm:grid-cols-4">
                  {[
                    "100% Free Guidance",
                    "UGC & DEB Entitled",
                    "24,500+ Admitted",
                    "Direct LMS Onboarding",
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-foreground">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
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

        {/* 4. AUTO-SLIDING INFINITE MARQUEE — CLEAN LOGOS ONLY, NO BOXES */}
        <section className="relative border-y border-border/60 bg-white/80 dark:bg-card/80 py-8 sm:py-12 md:py-14 overflow-hidden">
          {/* Soft gradient edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 sm:w-44 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 sm:w-44 bg-gradient-to-l from-background via-background/80 to-transparent" />

          <div className="animate-marquee flex items-center gap-14 sm:gap-24 md:gap-32">
            {[...universityLogos, ...universityLogos, ...universityLogos].map((uni, idx) => (
              <button
                key={`${uni.id}-${idx}`}
                title={uni.name}
                onClick={() => handleOpenModal(`Direct Admission Guidance for ${uni.name}`)}
                className="shrink-0 flex items-center justify-center transition-all duration-300 hover:scale-115 focus:outline-none"
              >
                {"image" in uni && uni.image ? (
                  <img
                    src={uni.image}
                    alt={uni.name}
                    className="h-16 sm:h-24 md:h-28 w-auto max-w-[180px] sm:max-w-[260px] md:max-w-[320px] object-contain drop-shadow-sm"
                  />
                ) : (
                  uni.svg
                )}
              </button>
            ))}
          </div>
        </section>

        {/* 5. WHERE YOUR DEGREE CAN TAKE YOU — COMPANY LOGOS */}
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-slate-950 via-slate-900 to-primary/20 py-12 sm:py-16" id="careers">
          {/* Decorative background glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <div className="text-center mb-8 sm:mb-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-primary">
                🎯 Career Outcomes
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                Where Your Degree Can Take You
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
                Our graduates are placed in India's top companies across sectors. Your online degree opens real doors.
              </p>
            </div>

            {/* Company Logos Grid from uploaded image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 mx-auto max-w-3xl">
              <img
                src="/assets/company-logos.png"
                alt="Top companies where Career4s graduates are placed — Google, Amazon, Dell, HCL, Cognizant, Zomato, Flipkart and more"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
              {/* Subtle overlay to blend with dark bg */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 pointer-events-none" />
            </div>

            {/* CTA below */}
            <div className="mt-8 text-center">
              <p className="text-xs text-slate-400 mb-3">Join 24,500+ students already placed in top companies</p>
              <button
                onClick={() => {
                  const el = document.getElementById("eligibility");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
              >
                Check Your Eligibility Now
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* 6. 4.8/5 GOOGLE RATING & REVIEWS CTA BANNER (JUST AFTER CAREER OUTCOMES) */}
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-card via-surface to-background px-4 sm:px-6 lg:px-8 py-12 sm:py-16" id="reviews">
          <div className="mx-auto max-w-7xl">
            {/* Google Rating Header Strip */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-border/80 bg-card p-5 sm:p-6 shadow-md mb-8 sm:mb-10">
              <div className="flex items-center gap-3 sm:gap-4">
                {/* Google Multi-Color G Icon */}
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-100">
                  <svg viewBox="0 0 24 24" className="h-7 w-7 sm:h-8 sm:w-8" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                  </svg>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl sm:text-2xl font-black text-foreground">4.8</span>
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-muted-foreground">
                    Rated <strong className="text-foreground">4.8 / 5</strong> on Google Reviews • 1,200+ Verified Students
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleOpenModal("Book Free Admission Counselling")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shrink-0"
              >
                <span>Get Free Admission Help</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* 3 Real Google Review Cards */}
            <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
              {/* Review 1: Vidhi Choudhary */}
              <div className="flex flex-col justify-between rounded-2xl border border-border/80 bg-slate-900 text-slate-100 p-5 sm:p-6 shadow-xl transition-transform hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-600 font-bold text-white shadow-sm">
                        V
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Vidhi Choudhary</h4>
                        <span className="text-[11px] text-slate-400">1 review</span>
                      </div>
                    </div>
                    <span className="text-slate-500 hover:text-slate-300">⋮</span>
                  </div>

                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-400">8 months ago</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    "My journey with Career4s has been wonderful. I was confused after 12th and had no idea which course to choose. The counsellors patiently understood my interests and guided me toward the right stream. They supported me from the first counselling session to final admission. Thank you Career4s for helping me build my future."
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-3 text-xs text-slate-400">
                  <span className="inline-flex items-center gap-1 text-pink-400">
                    ❤️ 1
                  </span>
                </div>
              </div>

              {/* Review 2: Manish Jangid */}
              <div className="flex flex-col justify-between rounded-2xl border border-border/80 bg-slate-900 text-slate-100 p-5 sm:p-6 shadow-xl transition-transform hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 font-bold text-white shadow-sm">
                        M
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Manish Jangid</h4>
                        <span className="text-[11px] text-slate-400">2 reviews</span>
                      </div>
                    </div>
                    <span className="text-slate-500 hover:text-slate-300">⋮</span>
                  </div>

                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-400">8 months ago</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    "Career4s offers excellent career counselling and admission support. Their team is knowledgeable, transparent and always available to help. A great platform for students planning for higher studies in India or abroad."
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-3 text-xs text-slate-400">
                  <span className="inline-flex items-center gap-1 text-pink-400">
                    ❤️ 1
                  </span>
                </div>
              </div>

              {/* Review 3: Vansh Saini */}
              <div className="flex flex-col justify-between rounded-2xl border border-border/80 bg-slate-900 text-slate-100 p-5 sm:p-6 shadow-xl transition-transform hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white shadow-sm">
                        V
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Vansh Saini</h4>
                        <span className="text-[11px] text-slate-400">3 reviews</span>
                      </div>
                    </div>
                    <span className="text-slate-500 hover:text-slate-300">⋮</span>
                  </div>

                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-400">9 months ago</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    "I got admission in mbbs Georgia 🇬🇪. The team is very professional and humble. Thanks vipul sir..."
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-3 text-xs text-slate-400">
                  <span className="inline-flex items-center gap-1 text-pink-400">
                    ❤️ 1
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom High-Converting CTA Strip */}
            <div className="mt-8 sm:mt-10 rounded-2xl bg-gradient-to-r from-primary via-emerald-600 to-teal-600 p-6 sm:p-8 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                  <Sparkles className="h-3.5 w-3.5" /> 100% Free Consultation
                </div>
                <h3 className="mt-2 text-xl sm:text-2xl font-black tracking-tight">
                  Take the First Step Towards Your Online Degree
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-white/90 max-w-xl">
                  Talk to our certified admission counsellors to verify your eligibility and secure admission in top UGC-entitled universities.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                <a
                  href="tel:+919876543210"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white/15 px-5 py-3 text-xs sm:text-sm font-bold text-white border border-white/30 backdrop-blur-sm hover:bg-white/25 transition-all"
                >
                  <PhoneCall className="h-4 w-4" />
                  <span>1800-890-4422</span>
                </a>
                <button
                  onClick={() => handleOpenModal("Claim Direct Admission Guidance")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-xs sm:text-sm font-bold text-primary shadow-lg hover:bg-white/90 hover:scale-105 active:scale-95 transition-all"
                >
                  <span>Apply for Admission Now</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 7. TOP 8 ACCREDITED ONLINE UNIVERSITIES WITH APPLY NOW CARDS */}
        <section className="px-4 sm:px-6 lg:px-8 py-14 sm:py-20 bg-surface/50" id="universities">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-primary">
                <Building2 className="h-4 w-4" /> Top Accredited Institutions
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground">
                Apply for Admission in Top Online Universities
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
                Choose from India's premier UGC-DEB entitled and NAAC A++/A+ accredited universities offering high-flexibility online degree programs.
              </p>
            </div>

            <div className="mt-8 sm:mt-12 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {topUniversities.map((uni) => (
                <div
                  key={uni.id}
                  className="group flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-5 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1.5"
                >
                  <div>
                    {/* Card Top: Logo & NAAC Badge */}
                    <div className="flex items-center justify-between gap-2 border-b border-border/60 pb-4">
                      <div className="flex h-16 w-36 sm:h-20 sm:w-44 items-center justify-start">
                        {"logo" in uni && uni.logo ? (
                          <img
                            src={uni.logo}
                            alt={uni.name}
                            className="max-h-16 sm:max-h-20 w-auto max-w-full object-contain"
                          />
                        ) : "svg" in uni ? (
                          uni.svg
                        ) : null}
                      </div>
                      <span className="shrink-0 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-extrabold text-emerald-600 dark:text-emerald-400">
                        {uni.naac}
                      </span>
                    </div>

                    {/* University Name */}
                    <h3 className="mt-3.5 text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors">
                      {uni.name}
                    </h3>

                    {/* Approvals Tags */}
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {uni.approvals.map((app) => (
                        <span
                          key={app}
                          className="rounded-md bg-surface border border-border px-2 py-0.5 text-[10px] font-semibold text-muted-foreground"
                        >
                          ✓ {app}
                        </span>
                      ))}
                    </div>

                    {/* Popular Programs */}
                    <div className="mt-3.5 pt-3 border-t border-border/60">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                        Popular Degrees:
                      </div>
                      <div className="mt-1.5 flex flex-wrap gap-1">
                        {uni.programs.map((prog) => (
                          <span
                            key={prog}
                            className="rounded-lg bg-primary-soft text-primary px-2 py-0.5 text-[10px] font-bold"
                          >
                            {prog}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlight */}
                    <p className="mt-3 text-[11px] text-muted-foreground leading-relaxed">
                      💡 {uni.highlights}
                    </p>
                  </div>

                  {/* Card Bottom: Batch Status & Apply Now Button */}
                  <div className="mt-4 pt-3.5 border-t border-border/60">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        {uni.batch}
                      </span>
                      <span className="text-[10px] font-medium text-muted-foreground">
                        100% Free Guidance
                      </span>
                    </div>

                    <button
                      onClick={() => handleOpenModal(`Direct Admission Application for ${uni.name}`)}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary py-2.5 px-4 text-xs font-bold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md active:scale-95 group-hover:scale-[1.02]"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. WHY ONLINE DEGREE SECTION */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-gradient-to-b from-background via-surface/40 to-background border-t border-border/60" id="why-online">
          <div className="mx-auto max-w-7xl">
            {/* Header */}
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-primary">
                <Sparkles className="h-4 w-4" /> Future of Higher Education
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground">
                Why Choose an Online University Degree?
              </h2>
              <p className="mx-auto mt-2.5 max-w-3xl text-sm sm:text-base text-muted-foreground leading-relaxed">
                Online degree programs from UGC-entitled universities offer the exact same academic prestige and legal validity as on-campus degrees — with unmatched flexibility and affordability.
              </p>
            </div>

            {/* 6 Core Advantages Grid */}
            <div className="mt-10 sm:mt-14 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Award,
                  color: "from-amber-500/20 to-amber-500/5 text-amber-500 border-amber-500/20",
                  tag: "UGC Approved",
                  title: "100% Equal Degree Recognition",
                  desc: "As per UGC Regulations 2020, online degrees are fully equivalent to regular on-campus degrees. Valid for all Central/State Govt. jobs, UPSC, PSU exams, and international higher education.",
                },
                {
                  icon: Laptop,
                  color: "from-blue-500/20 to-blue-500/5 text-blue-500 border-blue-500/20",
                  tag: "Zero Career Break",
                  title: "Work & Study Simultaneously",
                  desc: "Keep earning your full-time salary without interruption. Access recorded HD lectures, digital e-libraries, and weekend live interactive sessions 24/7 on your mobile or laptop.",
                },
                {
                  icon: ShieldCheck,
                  color: "from-emerald-500/20 to-emerald-500/5 text-emerald-500 border-emerald-500/20",
                  tag: "Save 60-70%",
                  title: "Cost-Effective with No-Cost EMI",
                  desc: "Save lakhs on campus fees, hostel rent, food, and daily travel expenses. Benefit from flexible semester-wise fee payments and 0% interest monthly EMI options.",
                },
                {
                  icon: FileCheck,
                  color: "from-purple-500/20 to-purple-500/5 text-purple-500 border-purple-500/20",
                  tag: "Convenient",
                  title: "100% Online Proctored Exams",
                  desc: "No need to travel to distant examination centers. Give semester assessments and quizzes from the comfort of your home with AI-proctored, flexible weekend exam slot booking.",
                },
                {
                  icon: BadgeCheck,
                  color: "from-teal-500/20 to-teal-500/5 text-teal-500 border-teal-500/20",
                  tag: "Industry Leaders",
                  title: "Top Faculty & Global Curriculum",
                  desc: "Learn directly from distinguished NAAC A++ university professors, CXOs, and Silicon Valley industry experts with practical case studies and modern industry-aligned curriculum.",
                },
                {
                  icon: UserCheck,
                  color: "from-rose-500/20 to-rose-500/5 text-rose-500 border-rose-500/20",
                  tag: "300+ Recruiters",
                  title: "Placement Assistance & Mentorship",
                  desc: "Get dedicated career coaching, mock interview practice, resume building workshops, and exclusive access to university placement drives and global alumni networks.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1.5"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border bg-gradient-to-br ${item.color}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="rounded-full bg-surface border border-border px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">
                          {item.tag}
                        </span>
                      </div>

                      <h3 className="mt-4 text-base sm:text-lg font-black text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Comparison Card: Online vs Regular */}
            <div className="mt-12 sm:mt-16 rounded-3xl border border-border/90 bg-card p-6 sm:p-10 shadow-xl">
              <div className="text-center mb-8">
                <span className="text-xs font-black uppercase tracking-wider text-primary">
                  Side-by-Side Comparison
                </span>
                <h3 className="mt-1.5 text-2xl sm:text-3xl font-black text-foreground">
                  Online Degree vs. Traditional Regular Degree
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-border text-muted-foreground">
                      <th className="pb-3 font-extrabold uppercase tracking-wider">Key Parameters</th>
                      <th className="pb-3 font-extrabold uppercase tracking-wider text-primary">
                        🎓 Online Degree (UGC-Entitled)
                      </th>
                      <th className="pb-3 font-extrabold uppercase tracking-wider text-muted-foreground">
                        🏫 Regular On-Campus Degree
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    <tr>
                      <td className="py-3.5 font-bold text-foreground">Degree Legal Validity</td>
                      <td className="py-3.5 font-extrabold text-emerald-600 dark:text-emerald-400">
                        ✓ 100% Equivalent per UGC Notification
                      </td>
                      <td className="py-3.5 text-muted-foreground">✓ 100% Valid</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 font-bold text-foreground">Work & Earn Simultaneously</td>
                      <td className="py-3.5 font-extrabold text-emerald-600 dark:text-emerald-400">
                        ✓ Full Flexibility (No Career Break)
                      </td>
                      <td className="py-3.5 text-muted-foreground">✕ Must attend daily campus classes</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 font-bold text-foreground">Total Education Expense</td>
                      <td className="py-3.5 font-extrabold text-emerald-600 dark:text-emerald-400">
                        ✓ Up to 70% Lower + No Relocation
                      </td>
                      <td className="py-3.5 text-muted-foreground">✕ High (Tuition + Hostel + Commute)</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 font-bold text-foreground">Examination Mode</td>
                      <td className="py-3.5 font-extrabold text-emerald-600 dark:text-emerald-400">
                        ✓ 100% Online Remote Proctored
                      </td>
                      <td className="py-3.5 text-muted-foreground">✕ Physical exam hall attendance mandatory</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 font-bold text-foreground">Govt. Job & Higher Studies Eligibility</td>
                      <td className="py-3.5 font-extrabold text-emerald-600 dark:text-emerald-400">
                        ✓ 100% Eligible (UPSC, SSC, PSU, WES)
                      </td>
                      <td className="py-3.5 text-muted-foreground">✓ 100% Eligible</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Bottom Mini CTA */}
              <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <div>
                  <h4 className="text-sm sm:text-base font-extrabold text-foreground">
                    Confused which online university program fits your career goals?
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Our certified academic advisors will guide your admission journey for free.
                  </p>
                </div>
                <button
                  onClick={() => handleOpenModal("Free Online Degree Counselling")}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-xs sm:text-sm font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shrink-0"
                >
                  <span>Get Free Admission Guidance</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 8. INTERACTIVE ELIGIBILITY CHECKER */}
        <section className="bg-surface/70 px-4 sm:px-6 lg:px-8 py-14 sm:py-20" id="eligibility">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl sm:rounded-3xl border border-border/80 bg-card p-5 sm:p-8 lg:p-10 shadow-xl sm:shadow-2xl">
              <div className="text-center">
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-primary">
                  <ClipboardList className="h-4 w-4" /> Instant Profile Assessment
                </span>
                <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-foreground">
                  Online University Admission Eligibility Checker
                </h2>
                <p className="mt-1.5 sm:mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
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

        {/* 9. WHY CAREER4S FOR ADMISSIONS (COMMENTED OUT AS REQUESTED) */}
        {/*
        <section className="px-4 sm:px-6 lg:px-8 py-14 sm:py-20" id="benefits">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-primary">
                <ShieldCheck className="h-4 w-4" /> Trusted Admissions Partner
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground">
                Why Students Trust Career4s for Online Admissions
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
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
        */}
      </main>

      {/* 10. COMPREHENSIVE SLEEK DARK ENTERPRISE FOOTER */}
      <footer className="border-t border-slate-800 bg-slate-950 text-slate-200" id="footer">
        {/* Top Newsletter / Quick Alert Subscription in Dark Theme */}
        <div className="border-b border-slate-800/80 px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950/40 p-6 sm:p-8 md:flex-row md:p-10 border border-slate-800 shadow-2xl">
              <div className="text-center md:text-left">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-emerald-400">
                  <Sparkles className="h-3.5 w-3.5" /> Admission Notifications
                </span>
                <h3 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-white">
                  Subscribe to University Admission & Deadline Alerts
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-400 max-w-xl">
                  Get instant updates on admission portal deadlines, merit scholarship concessions, and UGC-DEB circulars.
                </p>
              </div>

              <form onSubmit={handleNewsletterSubmit} className="flex w-full max-w-md flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-1.5 shrink-0 rounded-xl bg-primary px-6 py-3 text-xs sm:text-sm font-bold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
                >
                  <span>Subscribe</span>
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Main 4-Column Footer */}
        <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {/* Col 1: Brand & Approvals */}
              <div className="space-y-4">
                <a href="/" className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-black tracking-tight text-white">
                      Career<span className="text-primary">4s</span>
                    </span>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400">
                      University Admissions
                    </span>
                  </div>
                </a>

                <p className="text-xs leading-relaxed text-slate-400">
                  Career4s is India's leading admission counselling platform facilitating direct enrolment into UGC-DEB entitled and NAAC accredited online universities for students and working professionals.
                </p>

                {/* Trust Badges */}
                <div className="pt-2">
                  <div className="text-[11px] font-black uppercase tracking-wider text-slate-300">
                    Accredited Recognitions
                  </div>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {["UGC-DEB Entitled", "AICTE Approved", "NAAC A++", "AIU Recognized", "WES Accepted"].map(
                      (b) => (
                        <span
                          key={b}
                          className="rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1 text-[10px] font-bold text-emerald-400 shadow-sm"
                        >
                          ✓ {b}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Col 2: Top Degrees */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-white">
                  Popular Online Degrees
                </h4>
                <ul className="mt-4 space-y-2.5 text-xs text-slate-400 font-medium">
                  {["Online MBA Admissions", "Online MCA Admissions", "Online BBA / BCA", "Online M.Sc Data Science", "Online M.Com / B.Com", "Executive PG Diplomas"].map((deg) => (
                    <li key={deg}>
                      <button
                        onClick={() => handleOpenModal(`Apply for ${deg}`)}
                        className="transition-colors hover:text-emerald-400 text-left flex items-center gap-1.5"
                      >
                        <ChevronRight className="h-3 w-3 text-emerald-500" />
                        <span>{deg}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 3: Student Resources */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-white">
                  Quick Navigation
                </h4>
                <ul className="mt-4 space-y-2.5 text-xs text-slate-400 font-medium">
                  <li>
                    <a href="#universities" className="transition-colors hover:text-emerald-400 flex items-center gap-1.5">
                      <ChevronRight className="h-3 w-3 text-emerald-500" />
                      <span>Top 8 Online Universities</span>
                    </a>
                  </li>
                  <li>
                    <a href="#reviews" className="transition-colors hover:text-emerald-400 flex items-center gap-1.5">
                      <ChevronRight className="h-3 w-3 text-emerald-500" />
                      <span>Google Reviews (4.8★ Rating)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#careers" className="transition-colors hover:text-emerald-400 flex items-center gap-1.5">
                      <ChevronRight className="h-3 w-3 text-emerald-500" />
                      <span>Where Your Degree Takes You</span>
                    </a>
                  </li>
                  <li>
                    <a href="#eligibility" className="transition-colors hover:text-emerald-400 flex items-center gap-1.5">
                      <ChevronRight className="h-3 w-3 text-emerald-500" />
                      <span>Profile Eligibility Checker</span>
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={() => handleOpenModal("Check Required Admission Documents")}
                      className="transition-colors hover:text-emerald-400 text-left flex items-center gap-1.5"
                    >
                      <ChevronRight className="h-3 w-3 text-emerald-500" />
                      <span>Document Checklist Guide</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleOpenModal("Apply for Merit Scholarship")}
                      className="transition-colors hover:text-emerald-400 text-left flex items-center gap-1.5"
                    >
                      <ChevronRight className="h-3 w-3 text-emerald-500" />
                      <span>Scholarship & Fee Waiver Desk</span>
                    </button>
                  </li>
                </ul>
              </div>

              {/* Col 4: Admission Helpline & Support */}
              <div className="space-y-4">
                <h4 className="text-xs font-black uppercase tracking-wider text-white">
                  Official Admission Desk
                </h4>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-4 space-y-3 shadow-inner">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Admissions Open for July 2026</span>
                  </div>
                  
                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <PhoneCall className="h-4 w-4 text-emerald-400 shrink-0" />
                      <div>
                        <div className="text-[10px] text-slate-400">Toll-Free Helpline</div>
                        <a href="tel:+919876543210" className="font-bold text-white hover:text-emerald-400">
                          1800-890-4422
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <Headphones className="h-4 w-4 text-emerald-400 shrink-0" />
                      <div>
                        <div className="text-[10px] text-slate-400">Support Hours</div>
                        <div className="font-medium text-slate-300">Mon - Sat: 9 AM - 8 PM IST</div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleOpenModal("Connect with Admission Advisor")}
                    className="w-full rounded-xl bg-primary py-2.5 text-xs font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/90"
                  >
                    Talk to Admission Advisor
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="border-t border-slate-900 bg-slate-950 px-4 sm:px-6 lg:px-8 py-6 text-xs text-slate-500">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <div>
              <p className="font-semibold text-slate-400">
                © {new Date().getFullYear()} Career4s Education Services Pvt. Ltd. All rights reserved.
              </p>
              <p className="mt-1 text-[10px] text-slate-500">
                Disclaimer: Career4s is an authorized admission counselling and academic guidance platform assisting students with enrolment into UGC-DEB entitled online universities.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[11px] font-semibold text-slate-400">
              <button
                onClick={() => toast.info("Privacy Policy: Your student data is 100% encrypted & strictly confidential.")}
                className="hover:text-emerald-400 transition-colors"
              >
                Privacy Policy
              </button>
              <span>•</span>
              <button
                onClick={() => toast.info("Terms: 100% free and transparent admission assistance for students.")}
                className="hover:text-emerald-400 transition-colors"
              >
                Terms of Service
              </button>
              <span>•</span>
              <button
                onClick={() => toast.info("Grievance Redressal: grievance@career4s.com")}
                className="hover:text-emerald-400 transition-colors"
              >
                Grievance Cell
              </button>
              <span>•</span>
              <button
                onClick={() => toast.info("Accreditations: All universities are UGC-DEB and NAAC approved.")}
                className="hover:text-emerald-400 transition-colors"
              >
                Accreditations
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* 10. FLOATING QUICK-ACTION / WHATSAPP WIDGET */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
        <button
          onClick={() => handleOpenModal("Chat with Admission Counsellor on WhatsApp")}
          title="Chat with Admission Counsellor on WhatsApp"
          className="group transition-transform duration-300 hover:scale-115 active:scale-95 focus:outline-none"
        >
          <img
            src={whatsappIcon}
            alt="WhatsApp Chat"
            className="h-14 w-14 sm:h-16 sm:w-16 object-contain drop-shadow-2xl transition-transform duration-300 group-hover:rotate-6"
          />
        </button>
      </div>

      {/* 11. INTERACTIVE FREE ADMISSION COUNSELLING MODAL */}
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
