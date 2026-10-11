"use client";
import { motion } from "motion/react";
import { skills, tools } from "@/data/skills";
import SectionHeading from "./ui/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="px-5 py-24 md:px-10 md:py-32">
      <SectionHeading number="03" eyebrow="Skills & tools" title="What I bring" />

      <div className="grid gap-16 lg:grid-cols-2">
        {/* Animated skill bars */}
        <div className="space-y-7">
          {skills.map((s, i) => (
            <div key={s.name}>
              <div className="mb-2 flex justify-between font-semibold">
                <span>{s.name}</span>
                <span className="text-accent">{s.level}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-cream-dark">
                <motion.div className="h-full rounded-full bg-accent"
                  initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }} viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }} />
              </div>
            </div>
          ))}
        </div>

        {/* Wobbly tool chips */}
        <div>
          <h3 className="mb-6 font-display text-3xl uppercase">Toolbox</h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((t, i) => (
              <motion.span key={t} whileHover={{ rotate: i % 2 ? 4 : -4, scale: 1.08 }}
                className="cursor-default rounded-full border-2 border-ink px-5 py-2.5 font-semibold transition-colors hover:border-accent hover:bg-accent hover:text-cream">
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
