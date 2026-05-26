import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "../../components/section";
import { LighthouseBeam } from "../../components/lighthouse-beam";

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

const subjects = [
  "General Inquiry",
  "Services Request",
  "Request a Quote",
  "Partnership Request",
  "Employment Interest",
];

export function ContactPanelForm() {
  const [sent, setSent] = useState(false);

  return (
    <Section
      eyebrow="Contact"
      title={<>We Would Love To <span className="text-gradient">Hear From You</span></>}
      subtitle="Ready to do business with you and create stunning visuals and stories. We respond within one business day — usually faster."
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
            <Field label="Name"  name="name"  />
            <Field label="Email" name="email" type="email" />
          </div>

          {/* Subject dropdown */}
          <div className="mt-5">
            <label htmlFor="subject" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-pink/60 focus:bg-white/10 appearance-none"
            >
              {subjects.map((s) => (
                <option key={s} value={s} className="bg-slate-900 text-white">{s}</option>
              ))}
            </select>
          </div>

          <div className="mt-5">
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Message</label>
            <textarea
              rows={5}
              name="message"
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-pink/60 focus:bg-white/10"
              placeholder="Tell us about your vision…"
            />
          </div>

          <button
            type="submit"
            disabled={sent}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-medium text-white glow-brand pulse-glow disabled:opacity-60"
          >
            {sent ? "Message Sent ✓" : "Send →"}
          </button>
        </motion.form>

        {/* Contact details sidebar */}
        <div className="space-y-5">
          <div className="rounded-3xl glass border-gradient p-8">
            <h3 className="text-xl font-semibold">Get In Touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li><span className="text-white">New Business · </span>newbiz@lightwarp3d.com</li>
              <li><span className="text-white">General · </span>info@lightwarp3d.com</li>
              <li><span className="text-white">Phone · </span>(615) 571-9395</li>
            </ul>
            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Schedule a Meeting</p>
              <a
                href="https://calendar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium transition-all hover:bg-white/10"
              >
                Book via Google Meet →
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl glass border-gradient p-8">
            <LighthouseBeam />
            <p className="relative text-sm font-medium">
              Get started with your 3D animated vision today.
            </p>
            <p className="relative mt-2 text-sm text-muted-foreground">
              Know what you're looking for?{" "}
              <span className="text-white">Click the button above to get started</span> — we'll send a beam back within a day.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
