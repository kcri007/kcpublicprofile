import { motion } from 'framer-motion';
import { Phone, Bot, Shield, Workflow, Cloud, Users } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Phone,
    title: 'Voice AI Architecture',
    description:
      'Design and deploy production Voice AI agents using Bland.ai, Vapi.ai, Synthflow.ai, and Pipecat. End-to-end architecture from PSTN integration to LLM orchestration.',
    features: ['PSTN/WebRTC Integration', 'LLM Orchestration', 'Real-time Speech Processing', 'Multi-platform Deployment'],
  },
  {
    icon: Bot,
    title: 'Conversational AI Development',
    description:
      'Build intelligent conversational agents with context management, sentiment analysis, and natural language understanding using GPT-4, Claude, and Gemini.',
    features: ['Multi-turn Dialogue', 'Context Management', 'Sentiment Analysis', 'Intent Recognition'],
  },
  {
    icon: Cloud,
    title: 'Enterprise Teams & Telephony',
    description:
      'Microsoft Teams Phone System deployments, Direct Routing, SBC configuration, and migration from legacy PBX systems. Proven at 65-country global scale.',
    features: ['Teams Phone System', 'Direct Routing & SBCs', 'E911 & Compliance', 'Global Rollouts'],
  },
  {
    icon: Workflow,
    title: 'Automation & Integration',
    description:
      'Build advanced automation pipelines connecting Voice AI with CRM, ticketing, and collaboration platforms using n8n, Make, Zapier, and native cloud services.',
    features: ['n8n / Make / Zapier', 'Salesforce & Dynamics 365', 'ServiceNow Integration', 'Custom API Pipelines'],
  },
  {
    icon: Shield,
    title: 'AI Governance & Safety',
    description:
      'Implement responsible AI frameworks including guardrails, PII redaction, compliance monitoring, and evaluation frameworks for production voice AI.',
    features: ['Guardrails & Content Filtering', 'PII Detection & Redaction', 'GDPR/CCPA Compliance', 'Quality Assurance'],
  },
  {
    icon: Users,
    title: 'Strategic Consulting',
    description:
      'Executive-level advisory on Voice AI strategy, platform selection, vendor evaluation, and roadmap planning. 20+ years of enterprise telephony expertise.',
    features: ['Platform Evaluation', 'Roadmap Planning', 'Vendor Selection', 'Team Enablement'],
  },
];

export default function Services() {
  return (
    <Section
      title="Services"
      subtitle="Enterprise Voice AI consulting and architecture services"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-colors group"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 flex items-center justify-center mb-4">
              <service.icon className="h-4 w-4 text-cyan-400" />
            </div>
            <h3 className="text-sm font-semibold text-white mb-2">{service.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">{service.description}</p>
            <ul className="space-y-1.5">
              {service.features.map((feature) => (
                <li key={feature} className="text-xs text-gray-500 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-gray-600" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center pt-4"
      >
        <p className="text-gray-400 text-sm mb-4">
          Interested in working together?
        </p>
        <Button asChild>
          <a href="mailto:Kevin.curtin@cloudevolve.us">Get in Touch</a>
        </Button>
      </motion.div>
    </Section>
  );
}
