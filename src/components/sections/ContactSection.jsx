import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { slideInLeft, slideInRight } from "../../animations/variants.js";
import SectionHeading from "../ui/SectionHeading.jsx";
import Button from "../ui/Button.jsx";

const initialForm = { name: "", email: "", company: "", message: "" };

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section id="contact" className="section-y bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's schedule your first pickup"
          subtitle="Tell us a little about your business and a specialist will follow up within one business day."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <motion.form
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideInLeft}
            onSubmit={handleSubmit}
            className="gradient-border col-span-3 flex flex-col gap-5 rounded-xl3 bg-mist-50 p-8 shadow-card"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-800">Full name</label>
                <input
                  id="name" name="name" required value={form.name} onChange={handleChange}
                  className="w-full rounded-xl border border-ink-900/10 bg-white px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none"
                  placeholder="Jordan Lee"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-800">Email</label>
                <input
                  id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                  className="w-full rounded-xl border border-ink-900/10 bg-white px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none"
                  placeholder="jordan@company.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-ink-800">Company</label>
              <input
                id="company" name="company" value={form.company} onChange={handleChange}
                className="w-full rounded-xl border border-ink-900/10 bg-white px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none"
                placeholder="Harborline Hotels"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-800">Message</label>
              <textarea
                id="message" name="message" rows={4} value={form.message} onChange={handleChange}
                className="w-full rounded-xl border border-ink-900/10 bg-white px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none"
                placeholder="Tell us about your locations and typical volume"
              />
            </div>
            <Button type="submit" variant="gradient" size="lg" className="w-fit">
              Send message <Send size={16} />
            </Button>
            {submitted && (
              <p className="text-sm font-medium text-emerald-600">
                Thanks — we&apos;ve received your message and will be in touch shortly.
              </p>
            )}
          </motion.form>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideInRight}
            className="col-span-2 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4 rounded-xl3 bg-mist-50 p-6 shadow-card">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 text-emerald-600" size={20} />
                <p className="text-sm text-ink-700/80">Inside Orchha Gate, Near Sultana Masjid, Gayatri Biofuels,Jhansi, <br />Uttar Pradesh - 284002, India</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 text-emerald-600" size={20} />
                <a href="tel:+918601650628,+919098852502"  className="text-sm text-ink-700/80 hover:text-ink-900">+91 8601650628, 9098852502</a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 text-emerald-600" size={20} />
                <a href="mailto:gayatribiofuels24@gmail.com" className="text-sm text-ink-700/80 hover:text-ink-900">gayatribiofuels24@gmail.com</a>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
