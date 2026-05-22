import { useState } from "react";
import { motion } from "framer-motion";
import { PageShell } from "../components/page-shell";
import { Section } from "../components/section";
import { LighthouseBeam, ScanLine } from "../components/lighthouse-beam";
import { LighthouseScene } from "../components/lighthouse-scene";
import { Particles } from "../components/particles";
import { Link } from "react-router-dom";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
{/* HERO */}
      {/* CONTACT HERO SECTION */}
     <section className="relative -mt-28 min-h-screen flex items-center overflow-hidden">

  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,0,128,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,120,255,0.18),transparent_35%)]" />

  <Particles count={90} />
  <ScanLine />

  {/* LIGHTHOUSE BEAM */}
  <div className="absolute inset-0 opacity-70">
    <LighthouseBeam intensity="strong" />
  </div>

  <div className="relative z-10 mx-auto max-w-7xl px-6">

    {/* TOP LABEL */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="mx-auto mb-10 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 backdrop-blur-xl"
    >
      <span className="h-2 w-2 rounded-full bg-gradient-brand pulse-glow" />

      <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
        Contact Lightwarp
      </span>
    </motion.div>

    <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.95fr]">

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
      >

        <h1 className="text-4xl sm:text-5xl xl:text-7xl font-semibold leading-[0.92]">
          Let's Build
          <br />
          Something
          <br />
          <span className="text-gradient">
            Extraordinary Together
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Whether you need cinematic 3D visuals, immersive brand
          storytelling, or cutting-edge digital experiences, our team
          is ready to illuminate your next big idea.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-10 flex flex-wrap gap-4">

          <Link
            to="/projects"
            className="group relative overflow-hidden rounded-full bg-gradient-brand px-8 py-4 text-sm font-medium text-white glow-brand transition-all hover:scale-[1.03]"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Our Work
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>

            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
          </Link>

          <Link
            to="/services"
            className="rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-medium backdrop-blur-xl transition-all hover:bg-white/[0.08]"
          >
            Explore Services
          </Link>
        </div>

        {/* CONTACT INFO CARDS */}
        <div className="mt-16 grid gap-4 sm:grid-cols-3">

          {[
            {
              title: "Email",
              desc: "hello@lightwarp.com"
            },
            {
              title: "Location",
              desc: "San Francisco, CA"
            },
            {
              title: "Availability",
              desc: "Open For Projects"
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl"
            >
              <h3 className="text-lg font-semibold">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* RIGHT VISUAL */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >

        {/* OUTER GLOW */}
        <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-pink/20 via-violet/10 to-blue/20 blur-3xl" />

        {/* MAIN CARD */}
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl">

          {/* GRID OVERLAY */}
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>

          {/* LIGHTHOUSE VISUAL */}
          <div className="relative h-[520px]">

            <LighthouseScene className="h-full w-full scale-110" />

            {/* MAIN GLOW */}
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink/10 blur-3xl animate-pulse" />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>

          {/* FLOATING MESSAGE CARD */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute left-6 top-6 w-[260px] rounded-3xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl"
          >
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Start A Conversation
            </div>

            <h3 className="mt-3 text-xl font-semibold">
              Your Vision Matters
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Share your ideas, goals, and creative challenges —
              we’ll help bring them to life.
            </p>
          </motion.div>

          {/* FLOATING RESPONSE CARD */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="absolute bottom-6 right-6 rounded-3xl border border-white/10 bg-black/40 px-6 py-5 backdrop-blur-xl"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Response Time
            </div>

            <div className="mt-2 text-3xl font-semibold text-gradient">
              Within 24hrs
            </div>
          </motion.div>

          {/* FLOATING BADGE */}
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 7 }}
            className="absolute right-10 top-1/2 rounded-full border border-pink/20 bg-pink/10 px-5 py-3 backdrop-blur-xl"
          >
            <span className="text-sm font-medium text-white">
              Let's Create
            </span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      <Section
        eyebrow="Contact"
        title={<>Send Up A <span className="text-gradient">Signal</span></>}
        subtitle="Tell us about your project. We respond within one business day — usually faster."
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="relative overflow-hidden rounded-3xl glass border-gradient p-8 sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" />
              <Field label="Email" name="email" type="email" />
              <Field label="Company" name="company" />
              <Field label="Budget" name="budget" placeholder="$25k – $50k" />
            </div>
            <div className="mt-5">
              <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Project</label>
              <textarea
                rows={5}
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-pink/60 focus:bg-white/10"
                placeholder="Tell us about your vision…"
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-medium text-white glow-brand pulse-glow disabled:opacity-60"
            >
              {sent ? "Beam Received ✓" : "Send Signal →"}
            </button>
          </motion.form>

          <div className="relative">
            <div className="rounded-3xl glass border-gradient p-8">
              <h3 className="text-xl font-semibold">Studio</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li><span className="text-white">Email · </span>hello@lightwarp.studio</li>
                <li><span className="text-white">Phone · </span>+1 (415) 555-0142</li>
                <li><span className="text-white">SF · </span>1 Lighthouse Way, San Francisco</li>
                <li><span className="text-white">Lisbon · </span>Rua do Farol 12, Belém</li>
              </ul>
              <div className="mt-8 border-t border-white/10 pt-6">
                <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Hours</h4>
                <p className="mt-2 text-sm">Mon — Fri · 9:00 to 19:00 local</p>
              </div>
            </div>
            <div className="mt-6 relative overflow-hidden rounded-3xl glass border-gradient p-8">
              <LighthouseBeam />
              <p className="relative text-sm text-muted-foreground">
                Prefer async? Drop a Loom or a deck.{" "}
                <span className="text-white">We'll review and respond by EOD.</span>
              </p>
            </div>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}

function Field({
  label, name, type = "text", placeholder,
}: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-pink/60 focus:bg-white/10"
      />
    </div>
  );
}
