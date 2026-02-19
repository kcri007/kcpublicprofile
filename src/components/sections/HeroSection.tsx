import { motion } from 'framer-motion';
import { MessageSquare, ClipboardPaste, BookOpen, Briefcase, Globe, Award, Download, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { resumeData } from '@/data/resume';

export function HeroSection() {
  const stats = [
    { icon: Briefcase, label: 'Years Experience', value: '20+' },
    { icon: Globe, label: 'Country Deployment', value: '65' },
    { icon: Award, label: 'Enterprise Projects', value: '100+' },
  ];

  const openChat = () => {
    window.dispatchEvent(new CustomEvent('open-chat'));
  };

  const openJobSpec = () => {
    window.dispatchEvent(new CustomEvent('open-chat', { detail: { jobSpec: true } }));
  };

  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center">
          {/* Profile initials */}
          <motion.img
            src="/Kevin_Headshot.png"
            alt="Kevin Curtin"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.5 }}
            transition={{ duration: 0.3 }}
            className="w-24 h-24 rounded-full object-cover mb-8 cursor-pointer"
          />

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3"
          >
            {resumeData.contact.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-lg md:text-xl text-gray-400 font-medium mb-6"
          >
            {resumeData.contact.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-gray-500 text-base max-w-xl mb-8 leading-relaxed"
          >
            {resumeData.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="flex flex-wrap gap-3 justify-center mb-14"
          >
            <Button onClick={openChat} className="gap-2">
              <MessageSquare className="h-4 w-4" />
              Ask AI About Me
            </Button>
            <Button onClick={openJobSpec} variant="secondary" className="gap-2">
              <ClipboardPaste className="h-4 w-4" />
              Check Role Fit
            </Button>
            <Button variant="secondary" asChild>
              <a href="https://kevincloudevolveai.substack.com" target="_blank" rel="noopener noreferrer" className="gap-2">
                <BookOpen className="h-4 w-4" />
                Newsletter
              </a>
            </Button>
            <Button variant="secondary" asChild>
              <a href="/KevinCurtinResume_2026.pdf" download className="gap-2">
                <Download className="h-4 w-4" />
                Resume
              </a>
            </Button>
            <Button variant="secondary" asChild>
              <a href="https://www.linkedin.com/in/kevin-curtin-509990344" target="_blank" rel="noopener noreferrer" className="gap-2">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex gap-12 md:gap-16"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-5 w-5 text-gray-500 mx-auto mb-1.5" />
                <div className="text-xl md:text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
