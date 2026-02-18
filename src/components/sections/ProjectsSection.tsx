import { motion } from 'framer-motion';
import { Phone, Globe, Blocks, Shield, Workflow, Bot, Headset } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/badge';
import { resumeData } from '@/data/resume';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Phone, Globe, Blocks, Shield, Workflow, Bot, Headset,
};

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      title="Project Highlights"
      subtitle="Key initiatives that showcase enterprise-scale delivery"
      className="border-t border-white/5"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {resumeData.projects.map((project, index) => {
          const IconComponent = iconMap[project.icon] || Phone;
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 flex items-center justify-center mb-4">
                <IconComponent className="h-4 w-4 text-cyan-400" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
