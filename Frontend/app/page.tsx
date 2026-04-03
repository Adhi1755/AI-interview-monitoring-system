"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, User, Mic, AlertTriangle, Brain, Lightbulb, Camera, Zap, Database, Play, BarChart, UserPlus, MonitorPlay, FileCheck, Shield, TrendingUp, Clock } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const features = [
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Eye Tracking Monitor",
    desc: "Real-time gaze direction analysis detecting off-screen behavior, multiple monitor usage, and suspicious visual patterns using ML-based pupil tracking.",
    accent: "#06b6d4",
  },
  {
    icon: <User className="w-6 h-6" />,
    title: "Face Detection & Identity",
    desc: "Continuous facial presence verification, identity consistency checks, and multi-person detection using deep learning facial recognition models.",
    accent: "#3b82f6",
  },
  {
    icon: <Mic className="w-6 h-6" />,
    title: "Voice Analysis Engine",
    desc: "Background noise detection, multiple speaker identification, and speech pattern analysis to ensure a controlled interview environment.",
    accent: "#8b5cf6",
  },
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    title: "Risk Scoring Engine",
    desc: "Dynamic composite risk calculation aggregating all violation signals into a real-time risk score with trend analysis and threshold alerting.",
    accent: "#8b5cf6",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Behavioral Intelligence",
    desc: "Advanced pattern recognition analyzing behavioral sequences over time to identify anomalies, stress indicators, and suspicious activity clusters.",
    accent: "#3b82f6",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Smart Feedback System",
    desc: "AI-generated personalized improvement recommendations based on session performance data with prioritized action items and trend comparisons.",
    accent: "#06b6d4",
  },
];

const stats = [
  { value: "98.7%", label: "Detection Accuracy",  color: "#06b6d4" },
  { value: "12ms",  label: "Response Latency",     color: "#3b82f6" },
  { value: "6",     label: "AI Modules",           color: "#8b5cf6" },
  { value: "24/7",  label: "Real-time Monitoring", color: "#10b981" },
];

const archSteps = [
  { icon: <Camera className="w-5 h-5" />, label: "Webcam Input",   sub: "Video + Audio",       color: "#06b6d4" },
  { icon: <Brain className="w-5 h-5" />, label: "AI Modules",     sub: "Eye · Face · Voice",  color: "#3b82f6" },
  { icon: <Zap className="w-5 h-5" />, label: "Risk Engine",    sub: "Composite Scoring",   color: "#8b5cf6" },
  { icon: <Database className="w-5 h-5" />, label: "Behavioral DB",  sub: "Session Storage",     color: "#8b5cf6" },
  { icon: <Lightbulb className="w-5 h-5" />, label: "Feedback API",   sub: "Smart Reports",       color: "#06b6d4" },
];

const techStack = [
  { label: "Backend",   value: "Flask REST API · Python AI Stack" },
  { label: "Frontend",  value: "Next.js · Tailwind CSS · WebSocket" },
  { label: "AI Models", value: "OpenCV · MediaPipe · TensorFlow" },
];

const howItWorks = [
  {
    step: "01",
    icon: <UserPlus className="w-7 h-7" />,
    title: "Sign Up & Login",
    desc: "Create your account in seconds and access the monitoring platform with role-based permissions.",
    color: "#06b6d4",
  },
  {
    step: "02",
    icon: <MonitorPlay className="w-7 h-7" />,
    title: "Start AI Session",
    desc: "Launch a monitored interview session with real-time webcam, audio, and behavioral tracking powered by 6 AI modules.",
    color: "#3b82f6",
  },
  {
    step: "03",
    icon: <FileCheck className="w-7 h-7" />,
    title: "Get AI Feedback",
    desc: "Receive comprehensive reports with risk analysis, violation breakdowns, and personalized improvement suggestions.",
    color: "#06b6d4",
  },
];

const whyChoose = [
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Exam Integrity Guaranteed",
    desc: "Multi-layered AI detection ensures every interview is fair, secure, and tamper-proof.",
    color: "#06b6d4",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Data-Driven Insights",
    desc: "Transform raw behavioral data into actionable performance metrics with trend analysis.",
    color: "#3b82f6",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Real-Time Processing",
    desc: "12ms response latency ensures instant detection and alerting with zero delay.",
    color: "#8b5cf6",
  },
];

/* ── Animation variants ──────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

const staggerContainer = {
  whileInView: { transition: { staggerChildren: 0.08 } },
  viewport: { once: true },
};

const staggerItem = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
};

const accentGradient = "linear-gradient(135deg, #8b5cf6, #3b82f6, #06b6d4)";
const primaryButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#8b5cf6] via-[#3b82f6] to-[#06b6d4] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(59,130,246,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_24px_72px_rgba(59,130,246,0.38)]";
const secondaryButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08] hover:text-white";

export default function LandingPage() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-[#05070d] text-white">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden px-6 pt-24 text-center sm:pt-28">
        {/* Background layers */}
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.24),transparent_38%),radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.16),transparent_28%),radial-gradient(circle_at_80%_15%,rgba(6,182,212,0.14),transparent_26%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070d]/20 via-[#05070d]/35 to-[#05070d]" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-32 top-[-10rem] h-[34rem] w-[34rem] rounded-full bg-[#8b5cf6]/14 blur-[120px] animate-float" />
          <div className="absolute -right-28 bottom-[-8rem] h-[30rem] w-[30rem] rounded-full bg-[#06b6d4]/10 blur-[120px] animate-float" style={{ animationDelay: "3s" }} />
          <div className="absolute left-1/2 top-20 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-[#3b82f6]/10 blur-[110px] animate-float" style={{ animationDelay: "5s" }} />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-medium text-slate-200 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
          >
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-[#06b6d4] shadow-[0_0_12px_rgba(6,182,212,0.8)]" />
            Welcome to AI Platform
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-6 max-w-4xl text-5xl font-semibold tracking-[-0.04em] leading-[1.02] sm:text-6xl lg:text-7xl"
          >
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: accentGradient }}>
              AI-Powered
            </span>{" "}
            Interview Monitoring<br />
            &amp; Behavioral Analysis System
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mx-auto mb-10 max-w-2xl text-base font-normal leading-7 text-slate-400 sm:text-lg"
          >
            Ensuring Integrity, Enhancing Performance
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {isAuthenticated ? (
              <>
                <Link
                  href="/interview"
                  className={primaryButtonClass}
                >
                  <Play className="w-4 h-4" />
                  Start Interview
                </Link>
                <Link
                  href="/dashboard"
                  className={secondaryButtonClass}
                >
                  <BarChart className="w-4 h-4" />
                  View Dashboard
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className={primaryButtonClass}
                >
                  <Play className="w-4 h-4" />
                  Get Started
                </Link>
                <button
                  onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
                  className={secondaryButtonClass}
                >
                  Explore Features
                  <span className="text-slate-400">↓</span>
                </button>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── STATS BANNER ──────────────────────────────────── */}
      <div className="relative px-6">
        <div className="mx-auto max-w-6xl rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.28)]">
          <div className="grid grid-cols-2 divide-x divide-white/10 text-center md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="px-6 py-8 sm:px-8"
              >
                <div
                  className="text-3xl font-semibold font-mono tracking-tight sm:text-4xl"
                  style={{ color: s.color, textShadow: `0 0 22px ${s.color}55` }}
                >
                  {s.value}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.22em] text-slate-400">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FEATURES ──────────────────────────────────────── */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="max-w-2xl">
          <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#06b6d4]">Core Modules</div>
          <h2 className="mb-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">Six AI-Driven Intelligence Layers</h2>
          <p className="mb-14 text-sm leading-7 text-slate-400">
            Multi-modal behavioral analysis combining computer vision, audio processing, and predictive risk modeling.
          </p>
        </motion.div>

        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.22)] transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06]"
            >
              {/* Top accent line */}
              <div
                className="absolute left-0 right-0 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: `linear-gradient(90deg, transparent, ${f.accent}, transparent)` }}
              />
              {/* Hover glow */}
              <div
                className="absolute -right-16 -top-16 h-36 w-36 rounded-full opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: `${f.accent}20` }}
              />

              <div
                className="relative mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10"
                style={{ background: `${f.accent}15`, color: f.accent }}
              >
                {f.icon}
              </div>
              <h3 className="relative mb-2 text-[15px] font-semibold tracking-[-0.02em] text-white">{f.title}</h3>
              <p className="relative text-sm leading-7 text-slate-400">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── PROCESSING PIPELINE ───────────────────────────── */}
      <section id="pipeline" className="mx-auto max-w-6xl px-6 pb-24 md:pb-32">
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="max-w-2xl">
          <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#06b6d4]">System Architecture</div>
          <h2 className="mb-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">Processing Pipeline</h2>
          <p className="mb-10 text-sm leading-7 text-slate-400">
            From raw sensor inputs to intelligent behavioral reports — all in real time.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8"
        >
          {/* Flow */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
            {archSteps.map((s, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <div
                  className="min-w-[120px] rounded-2xl border border-white/10 bg-[#05070d]/60 px-5 py-4 text-center transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
                  style={{ boxShadow: `0 0 0 1px ${s.color}10 inset` }}
                >
                  <div className="mb-1 flex justify-center" style={{ color: s.color }}>{s.icon}</div>
                  <div className="text-xs font-semibold tracking-wide" style={{ color: s.color }}>{s.label}</div>
                  <div className="mt-0.5 text-[10px] text-slate-500">{s.sub}</div>
                </div>
                {i < archSteps.length - 1 && (
                  <span className="hidden text-lg font-light text-slate-600 sm:inline">→</span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Tech stack */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {techStack.map((t, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">{t.label}</div>
                <div className="text-[13px] font-medium text-slate-200">{t.value}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────── */}
      <section className="relative py-24 md:py-32">
        <div className="section-divider" />
        <div className="bg-white/[0.02]">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="mb-14 text-center">
              <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#06b6d4]">Getting Started</div>
              <h2 className="mb-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">How It Works</h2>
              <p className="mx-auto max-w-lg text-sm leading-7 text-slate-400">
                Get up and running in three simple steps — from sign-up to AI-powered feedback.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {howItWorks.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.12 }}
                  className="relative rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06] hover:shadow-[0_18px_48px_rgba(0,0,0,0.22)]"
                >
                  {/* Step number */}
                  <div className="mb-4 font-mono text-[11px] font-bold tracking-[0.24em]" style={{ color: item.color }}>
                    STEP {item.step}
                  </div>
                  {/* Icon */}
                  <div
                    className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10"
                    style={{ background: `${item.color}12`, color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="mb-2 text-base font-semibold tracking-[-0.02em] text-white">{item.title}</h3>
                  <p className="text-sm leading-7 text-slate-400">{item.desc}</p>

                  {/* Connector arrow (between cards on desktop) */}
                  {i < howItWorks.length - 1 && (
                    <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-lg text-slate-600 md:block">→</div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="section-divider" />
      </section>

      {/* ── ABOUT / WHY CHOOSE US ─────────────────────────── */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="mb-14 text-center">
          <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#06b6d4]">Why AISMS</div>
          <h2 className="mb-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">Built for Integrity at Scale</h2>
          <p className="mx-auto max-w-lg text-sm leading-7 text-slate-400">
            A purpose-built monitoring platform that combines cutting-edge AI with seamless user experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {whyChoose.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06]"
            >
              <div
                className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10"
                style={{ background: `${item.color}12`, color: item.color }}
              >
                {item.icon}
              </div>
              <h3 className="mb-2 text-[15px] font-semibold tracking-[-0.02em] text-white">{item.title}</h3>
              <p className="text-sm leading-7 text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FOOTER CTA ───────────────────────────────────── */}
      <div className="relative">
        <div className="section-divider" />
        <div className="relative overflow-hidden py-16 text-center">
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-1/2 top-1/2 h-[320px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3b82f6]/10 blur-[100px]" />
          </div>

          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="relative z-10">
            <p className="mb-6 text-base font-normal text-slate-400">Ready to monitor your next interview session?</p>
            <Link
              href={isAuthenticated ? "/interview" : "/login"}
              className={primaryButtonClass}
            >
              {isAuthenticated ? "Launch Monitoring System" : "Get Started Free"}
              <span className="text-lg">→</span>
            </Link>
          </motion.div>
        </div>

        {/* Footer branding */}
        <div className="section-divider" />
        <div className="py-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-[#8b5cf6] via-[#3b82f6] to-[#06b6d4] text-[9px] font-bold text-white">AI</div>
            <span className="text-xs font-bold tracking-[0.22em] text-slate-500">AISMS</span>
          </div>
          <p className="text-[11px] text-slate-600">AI-Powered Interview Monitoring & Behavioral Analysis System</p>
        </div>
      </div>
    </div>
  );
}
