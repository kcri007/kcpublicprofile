import { motion } from 'framer-motion';
import { GraduationCap, BadgeCheck } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { resumeData } from '@/data/resume';

export function EducationSection() {
  return (
    <Section
      id="education"
      title="Education & Certifications"
      className="border-t border-white/5"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {resumeData.certifications.map((cert, index) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="rounded-xl border border-white/5 bg-white/[0.02] p-5"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 flex items-center justify-center mb-4">
              <BadgeCheck className="h-4 w-4 text-cyan-400" />
            </div>
            <h3 className="text-sm font-semibold text-white mb-1">{cert.name}</h3>
            <p className="text-sm text-gray-500">{cert.issuer}</p>
            <p className="text-xs text-gray-500 mt-1">{cert.date}</p>
          </motion.div>
        ))}

        {resumeData.education.map((edu, index) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: (resumeData.certifications.length + index) * 0.05 }}
            className="rounded-xl border border-white/5 bg-white/[0.02] p-5"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 flex items-center justify-center mb-4">
              <GraduationCap className="h-4 w-4 text-cyan-400" />
            </div>
            <h3 className="text-sm font-semibold text-white mb-1">{edu.institution}</h3>
            <p className="text-sm text-gray-500 mb-2">{edu.program}</p>
            <ul className="space-y-1">
              {edu.highlights.map((h, i) => (
                <li key={i} className="text-xs text-gray-500">{h}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
