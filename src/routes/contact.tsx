import { useState } from "react";
import { motion } from "framer-motion";
import { PageShell } from "../components/page-shell";
import { Section } from "../components/section";
import { LighthouseBeam } from "../components/lighthouse-beam";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
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
