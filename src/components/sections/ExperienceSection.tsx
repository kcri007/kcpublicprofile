import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { resumeData } from '@/data/resume';

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="20+ years in enterprise telephony and Voice AI"
      className="border-t border-white/5"
    >
      <div className="space-y-6">
        {resumeData.experience.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
              <div>
                <h3 className="text-base font-semibold text-white">{exp.role}</h3>
                <p className="text-sm text-gray-400">{exp.company}</p>
              </div>
              <span className="text-sm text-gray-500 whitespace-nowrap">
                {exp.startDate} — {exp.endDate}
              </span>
            </div>
            <ul className="space-y-1.5">
              {exp.highlights.map((highlight, i) => (
                <li key={i} className="text-sm text-gray-400 leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white/10">
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
