import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/badge';
import { resumeData } from '@/data/resume';

export function SkillsSection() {
  return (
    <Section
      id="skills"
      title="Skills & Technologies"
      subtitle="Deep expertise across the Voice AI and enterprise telephony stack"
      className="border-t border-white/5"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {resumeData.skills.map((skillGroup, index) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="rounded-xl border border-white/5 bg-white/[0.02] p-5"
          >
            <h3 className="text-sm font-semibold text-white mb-3">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-1.5">
              {skillGroup.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
