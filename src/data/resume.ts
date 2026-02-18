import type { ResumeData } from '../types/resume';

export const resumeData: ResumeData = {
  contact: {
    name: 'Kevin Curtin',
    title: 'Voice AI Architect & Enterprise Telephony Specialist',
    location: 'East Greenwich, RI 02818',
    email: 'kevin@cloudevolve.ai',
    phone: '401-626-2256',
  },

  summary:
    'Voice AI architect with 20+ years in enterprise telephony, specializing in AI voice and calling agents, automation and enterprise integration. Expert in deploying production voice AI solutions using a wide eco-system of SaaS and Enterprise platforms. Deep expertise in LLM orchestration, real-time speech processing, and workflow automation, transforming customer engagement through secure, scalable voice AI architectures.',

  experience: [
    {
      company: 'CloudEvolve',
      role: 'Principal Consultant',
      startDate: '2020-03',
      endDate: 'Present',
      highlights: [
        'Designed and deployed Voice (PSTN/Web) calling agents using Bland.ai, Vapi.ai, Synthflow.ai, and Pipecat. Orchestrated via Vercel, Twilio Flex, Genesys Cloud, Azure Communication Services and AWS Connect.',
        'Applied AI/ML engineering expertise (Python, NLP/LLMs, MLOps) for context management, performance optimization, and secure, scalable deployment of conversational AI models.',
        'Established governance frameworks for AI voice agents, implementing security controls, compliance monitoring, and safety guardrails while enabling real-time sentiment analysis and conversation analytics.',
        'Architected cloud-native solutions on Microsoft/AWS/Google platforms for real-time telephony integration, enabling automated call routing (IVR), data enrichment, and AI-powered orchestration.',
        'Built advanced automation pipelines with n8n, Make, Zapier, and Azure/AWS/GCP.',
        'Integrated Voice AI agents with Microsoft Teams, Cisco Webex, Slack, Dynamics 365, Salesforce, and ServiceNow.',
        'Architected and delivered Microsoft Teams Phone System deployments with Audiocodes SBCs, Direct Routing, E911, auto-attendants (IVR), and call queues.',
        'Integrated Microsoft, Cisco Call Manager, Avaya Aura, NICE CXone, and Genesys Cloud CX into unified voice ecosystems.',
        'Modernized collaboration environments by migrating from Slack, Webex, and Google Workspace into Microsoft Teams.',
        'Consulted on global-scale projects, including a 65-country Teams Phone System rollout for a multinational gaming company and hybrid Teams Rooms integrations.',
      ],
    },
    {
      company: 'Core BTS (Formerly SADA Systems MSFT)',
      role: 'MSFT Intelligent / Unified Communications Practice Lead',
      startDate: '2018-01',
      endDate: '2020-03',
      highlights: [
        'Lead business development and growth of full-service UC practice.',
        'Responsibilities include demand generation, partner co-sell, pre-sales technical design, strategic solution positioning, enterprise delivery oversight, and quality control.',
      ],
    },
    {
      company: 'NACR/Converge One',
      role: 'MSFT Unified Communications U.S. North-East Practice Lead',
      startDate: '2012-09',
      endDate: '2018-01',
      highlights: [
        'Responsible for regional year-over-year P&L growth and practice evolution.',
        'Lead cloud strategist on national team.',
        'Enterprise-class opportunity lead qualification, presales, partner relations, architectural envisioning, service delivery.',
      ],
    },
    {
      company: 'Carousel Industries',
      role: 'Microsoft / Unified Communications North-East Practice Lead',
      startDate: '2010-06',
      endDate: '2012-09',
      highlights: [
        'UC Practice lead for mid-market and enterprise-class clients.',
        'Delivery of architectural envisioning, pre-sales, solution fulfillment and upselling technical services and solutions for 5000+ customer base.',
      ],
    },
    {
      company: 'BT Americas',
      role: 'Senior Microsoft Consultant',
      startDate: '2008-07',
      endDate: '2010-06',
      highlights: [
        'Senior Microsoft consultant for field operations in Northeast region.',
        'Technical lead and pre-sales engineer on global-scaled Microsoft infrastructure design.',
      ],
    },
    {
      company: 'Aegis Technology Consulting',
      role: 'Senior Microsoft Consultant / Infrastructure Design and Management',
      startDate: '2001-06',
      endDate: '2008-06',
      highlights: [
        'Lead Microsoft consultant for infrastructure design and management.',
        'Client base with user populations ranging from 100 to 100,000.',
      ],
    },
  ],

  skills: [
    {
      category: 'Programming',
      skills: [
        'PowerShell',
        'Python',
        '.NET',
        'JavaScript',
        'SQL',
        'JSON',
        'Power Fx',
        'TypeScript',
        'Node.js',
        'WebRTC',
        'SIP',
        'SSML',
      ],
    },
    {
      category: 'AI/ML',
      skills: [
        'OpenAI GPT-4',
        'Claude',
        'Gemini',
        'Azure OpenAI Service',
        'Dialogflow',
        'Amazon Lex',
        'Azure Bot Framework',
        'RASA',
        'LangChain',
        'Semantic Kernel',
        'Hugging Face Transformers',
      ],
    },
    {
      category: 'Speech',
      skills: [
        'Azure Cognitive Services Speech',
        'Amazon Transcribe',
        'Amazon Polly',
        'Google Speech-to-Text',
        'Google TTS',
        'Whisper',
      ],
    },
    {
      category: 'MLOps',
      skills: [
        'Sentiment analysis',
        'Emotion detection',
        'Conversation intelligence',
        'Call scoring',
        'Model deployment pipelines',
        'A/B testing',
        'Drift detection',
        'Pinecone',
        'Weaviate',
        'Azure Cognitive Search',
        'RAG',
        'Prompt chaining',
        'Function calling',
        'Agent architectures',
      ],
    },
    {
      category: 'Contact Center Platforms',
      skills: [
        'Amazon Connect',
        'Genesys Cloud CX',
        'NICE CXone',
        'Azure Communication Services',
        'Zoom Contact Center',
        'Twilio Flex',
        'Microsoft Teams Phone',
        'Cisco Webex',
        'Avaya Aura',
      ],
    },
    {
      category: 'Safety',
      skills: [
        'Guardrails',
        'Content filtering',
        'PII detection/redaction',
        'Hallucination mitigation',
        'GDPR/CCPA',
        'Automated QA',
        'Human-in-the-loop validation',
      ],
    },
  ],

  certifications: [
    {
      name: 'AWS Solutions Architect Associate',
      issuer: 'Amazon Web Services',
      date: '2025-01',
    },
  ],

  education: [
    {
      institution: 'IHM School of Economics',
      program: 'EU Economics & International Marketing Research',
      year: '1997',
      highlights: [
        'Gothenburg, Sweden (Spring 1997)',
        'International marketing research with SKF, Volvo, and Motorola',
      ],
    },
    {
      institution: 'Entrepreneurial Studies Program',
      program: 'Entrepreneurial Studies, Eastern Europe',
      year: '1999',
      highlights: [
        'Summer 1999',
        'Case studies with Ford, Philips, Coca-Cola, NABI',
      ],
    },
  ],

  projects: [
    {
      title: 'Voice AI Agent Architecture',
      description:
        'Designed and deployed production-grade Voice AI calling agents across PSTN and Web channels using Bland.ai, Vapi.ai, Synthflow.ai, and Pipecat. These agents handle real-time customer interactions with context management, NLP-driven intent recognition, and seamless handoffs to live agents. Solutions are orchestrated through Vercel, Twilio Flex, Genesys Cloud, and Azure Communication Services for enterprise-scale reliability.',
      tags: ['Bland.ai', 'Vapi.ai', 'Pipecat', 'Twilio', 'LLM'],
      icon: 'Phone',
    },
    {
      title: 'Global Teams Deployment',
      description:
        'Led the architectural design and consulting for a 65-country Microsoft Teams Phone System rollout for a multinational gaming company. The project encompassed Direct Routing with Audiocodes SBCs, E911 compliance, auto-attendants, call queues, and hybrid Teams Rooms integrations across diverse regulatory environments.',
      tags: ['Microsoft Teams', 'Direct Routing', 'Audiocodes', 'E911'],
      icon: 'Globe',
    },
    {
      title: 'Enterprise AI Integration',
      description:
        'Integrated Voice AI agents with enterprise platforms including Microsoft Teams, Cisco Webex, Slack, Dynamics 365, Salesforce, and ServiceNow. Built cloud-native solutions on Azure, AWS, and GCP that enable real-time telephony integration, automated call routing, data enrichment, and AI-powered orchestration across unified communication ecosystems.',
      tags: ['Salesforce', 'ServiceNow', 'Teams', 'Azure', 'AWS'],
      icon: 'Bot',
    },
    {
      title: 'AI Governance Framework',
      description:
        'Established comprehensive governance frameworks for AI voice agents, implementing security controls, compliance monitoring, and safety guardrails. The framework covers PII detection and redaction, content filtering, hallucination mitigation, GDPR/CCPA compliance, and human-in-the-loop validation to ensure responsible and trustworthy AI deployment at enterprise scale.',
      tags: ['Guardrails', 'GDPR', 'PII Redaction', 'Compliance'],
      icon: 'Shield',
    },
    {
      title: 'Digital Workers & Contact Center AI',
      description:
        'Architects autonomous AI-powered digital workers that replace legacy IVR systems with natural-language voice agents on enterprise contact center platforms. Deploys across Amazon Connect, Genesys Cloud CX, NICE CXone, Azure Communication Services, and Zoom Contact Center — handling appointment scheduling, order inquiries, troubleshooting, and lead qualification with intelligent escalation to live agents.',
      tags: ['Amazon Connect', 'Genesys', 'NICE CXone', 'Azure ACS', 'Zoom'],
      icon: 'Headset',
    },
    {
      title: 'Automation Pipelines',
      description:
        'Built advanced automation pipelines using n8n, Make, Zapier, and native Azure/AWS/GCP services to orchestrate complex multi-step workflows. These pipelines connect Voice AI agents to CRM systems, ticketing platforms, and analytics dashboards, enabling end-to-end process automation with real-time sentiment analysis, call scoring, and conversation intelligence.',
      tags: ['n8n', 'Make', 'Zapier', 'Azure', 'Workflow'],
      icon: 'Workflow',
    },
  ],
};
