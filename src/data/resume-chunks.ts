export interface ResumeChunk {
  id: string;
  section: string;
  title: string;
  content: string;
}

export const resumeChunks: ResumeChunk[] = [
  {
    id: 'summary',
    section: 'profile',
    title: 'Profile Summary',
    content:
      'Kevin Curtin is a Voice AI architect with over 20 years of experience in enterprise telephony, specializing in AI voice and calling agents, automation, and enterprise integration. He is an expert in deploying production voice AI solutions using a wide ecosystem of SaaS and enterprise platforms. His deep expertise spans LLM orchestration, real-time speech processing, and workflow automation, transforming customer engagement through secure, scalable voice AI architectures. Kevin is based in East Greenwich, Rhode Island, and currently serves as Principal Consultant at CloudEvolve.',
  },
  {
    id: 'exp-cloudevolve-ai',
    section: 'experience',
    title: 'CloudEvolve - Agentic AI and Orchestration (2020-Present)',
    content:
      'As Principal Consultant at CloudEvolve since March 2020, Kevin has focused on agentic AI and orchestration. He designed and deployed Voice (PSTN/Web) calling agents using Bland.ai, Vapi.ai, Synthflow.ai, and Pipecat, orchestrated via Vercel, Twilio Flex, Genesys Cloud, Azure Communication Services, and AWS Connect. He applied AI/ML engineering expertise in Python, NLP/LLMs, and MLOps for context management, performance optimization, and secure, scalable deployment of conversational AI models. Kevin established governance frameworks for AI voice agents, implementing security controls, compliance monitoring, and safety guardrails while enabling real-time sentiment analysis and conversation analytics. He architected cloud-native solutions on Microsoft, AWS, and Google platforms for real-time telephony integration, enabling automated call routing (IVR), data enrichment, and AI-powered orchestration. He built advanced automation pipelines with n8n, Make, Zapier, and Azure/AWS/GCP, and integrated Voice AI agents with Microsoft Teams, Cisco Webex, Slack, Dynamics 365, Salesforce, and ServiceNow.',
  },
  {
    id: 'exp-cloudevolve-voice',
    section: 'experience',
    title: 'CloudEvolve - Enterprise Voice Integrations (2020-Present)',
    content:
      'At CloudEvolve, Kevin also focused on enterprise voice integrations. He architected and delivered Microsoft Teams Phone System deployments with Audiocodes SBCs, Direct Routing, E911, auto-attendants (IVR), and call queues. He integrated Microsoft, Cisco Call Manager, Avaya Aura, NICE CXone, and Genesys Cloud CX into unified voice ecosystems. Kevin modernized collaboration environments by migrating organizations from Slack, Webex, and Google Workspace into Microsoft Teams. He consulted on global-scale projects, including a 65-country Teams Phone System rollout for a multinational gaming company and hybrid Teams Rooms integrations.',
  },
  {
    id: 'exp-corebts',
    section: 'experience',
    title: 'Core BTS - UC Practice Lead (2018-2020)',
    content:
      'From January 2018 to March 2020, Kevin served as the MSFT Intelligent / Unified Communications Practice Lead at Core BTS (formerly SADA Systems MSFT). In this role, he led business development and growth of a full-service unified communications practice. His responsibilities included demand generation, partner co-sell, pre-sales technical design, strategic solution positioning, enterprise delivery oversight, and quality control. Kevin was instrumental in driving the practice forward by combining technical depth with business acumen to deliver Microsoft-centric communication solutions to enterprise clients.',
  },
  {
    id: 'exp-nacr',
    section: 'experience',
    title: 'NACR/Converge One - UC Practice Lead (2012-2018)',
    content:
      'From September 2012 to January 2018, Kevin held the position of MSFT Unified Communications U.S. North-East Practice Lead at NACR/Converge One. He was responsible for regional year-over-year P&L growth and practice evolution, serving as lead cloud strategist on the national team. His day-to-day focus encompassed enterprise-class opportunity lead qualification, presales, partner relations, architectural envisioning, and service delivery. This period saw Kevin establish himself as a regional leader in Microsoft unified communications deployments.',
  },
  {
    id: 'exp-carousel',
    section: 'experience',
    title: 'Carousel Industries - UC Practice Lead (2010-2012)',
    content:
      'From June 2010 to September 2012, Kevin was the Microsoft / Unified Communications North-East Practice Lead at Carousel Industries. As UC Practice lead, he delivered mid-market and enterprise-class architectural envisioning, pre-sales, solution fulfillment, and upselling of technical services and solutions for a 5000+ customer base. Kevin played a key role in growing the Microsoft UC practice within the organization.',
  },
  {
    id: 'exp-bt',
    section: 'experience',
    title: 'BT Americas - Senior Microsoft Consultant (2008-2010)',
    content:
      'From July 2008 to June 2010, Kevin worked as a Senior Microsoft Consultant at BT Americas. He served as a senior consultant for field operations in the Northeast region, acting as technical lead and pre-sales engineer on global-scaled Microsoft infrastructure design projects. This role gave Kevin exposure to large-scale international deployments and strengthened his expertise in enterprise Microsoft architectures.',
  },
  {
    id: 'exp-aegis',
    section: 'experience',
    title: 'Aegis Technology Consulting - Senior Microsoft Consultant (2001-2008)',
    content:
      'From June 2001 to June 2008, Kevin served as Senior Microsoft Consultant for Infrastructure Design and Management at Aegis Technology Consulting. As the lead Microsoft consultant, he was responsible for infrastructure design and management across a diverse client base with user populations ranging from 100 to 100,000. This foundational period established Kevin\'s deep expertise in Microsoft enterprise infrastructure.',
  },
  {
    id: 'skills-programming',
    section: 'skills',
    title: 'Programming Skills',
    content:
      'Kevin has extensive programming and development skills spanning multiple languages and protocols. His programming expertise includes PowerShell, Python, .NET, JavaScript, SQL, JSON, Power Fx, TypeScript, and Node.js. He is also proficient in communication protocols including WebRTC, SIP, and SSML. These skills enable him to build end-to-end solutions from backend infrastructure automation to real-time voice communication applications.',
  },
  {
    id: 'skills-aiml',
    section: 'skills',
    title: 'AI/ML Skills',
    content:
      'Kevin possesses deep expertise across the AI and machine learning landscape. He works with leading large language models including OpenAI GPT-4, Anthropic Claude, and Google Gemini. His platform experience includes Azure OpenAI Service, Google Dialogflow, Amazon Lex, Azure Bot Framework, and RASA for conversational AI. He leverages orchestration frameworks such as LangChain and Semantic Kernel, and utilizes Hugging Face Transformers for custom model work. This breadth of AI/ML knowledge allows him to select and combine the right tools for each enterprise use case.',
  },
  {
    id: 'skills-speech',
    section: 'skills',
    title: 'Speech Technology Skills',
    content:
      'Kevin is highly proficient in speech and voice technologies across all major cloud providers. His speech technology expertise includes Azure Cognitive Services Speech, Amazon Transcribe and Amazon Polly, Google Speech-to-Text and Google TTS, and OpenAI Whisper. These capabilities enable him to architect sophisticated voice AI solutions with high-quality speech recognition, natural text-to-speech synthesis, and real-time audio processing for enterprise telephony applications.',
  },
  {
    id: 'skills-mlops',
    section: 'skills',
    title: 'MLOps and AI Infrastructure Skills',
    content:
      'Kevin has strong expertise in MLOps and AI infrastructure. His capabilities include sentiment analysis, emotion detection, conversation intelligence, call scoring, model deployment pipelines, A/B testing, and drift detection. He works with vector databases and search technologies including Pinecone, Weaviate, and Azure Cognitive Search. Kevin is experienced with advanced AI patterns such as Retrieval-Augmented Generation (RAG), prompt chaining, function calling, and agent architectures. These skills allow him to build production-grade AI systems with proper monitoring, evaluation, and continuous improvement.',
  },
  {
    id: 'skills-safety',
    section: 'skills',
    title: 'AI Safety and Governance Skills',
    content:
      'Kevin is experienced in AI safety and responsible AI deployment. His safety expertise includes implementing guardrails, content filtering, PII detection and redaction, and hallucination mitigation techniques. He ensures compliance with regulatory frameworks including GDPR and CCPA. Kevin implements automated QA processes and human-in-the-loop validation to maintain quality and trust in AI-powered voice systems. This safety-first approach is integral to his enterprise AI deployments.',
  },
  {
    id: 'certifications',
    section: 'certifications',
    title: 'Certifications',
    content:
      'Kevin holds the AWS Solutions Architect Associate certification, obtained in January 2025. This certification validates his expertise in designing distributed systems and architectures on Amazon Web Services, complementing his extensive hands-on experience with Azure, AWS, and Google Cloud Platform. The certification demonstrates his commitment to staying current with cloud architecture best practices and his ability to design scalable, resilient cloud solutions.',
  },
  {
    id: 'education-ihm',
    section: 'education',
    title: 'IHM School of Economics - Sweden',
    content:
      'Kevin studied at the IHM School of Economics in Gothenburg, Sweden during Spring 1997. His program focused on EU economics and international marketing research, working with major multinational corporations including SKF, Volvo, and Motorola. This international education provided Kevin with a global business perspective and understanding of European markets that has informed his approach to large-scale international technology deployments throughout his career.',
  },
  {
    id: 'education-entrepreneurial',
    section: 'education',
    title: 'Entrepreneurial Studies - Eastern Europe',
    content:
      'Kevin participated in an entrepreneurial studies program in Eastern Europe during the Summer of 1999. The program involved case studies with major global companies including Ford, Philips, Coca-Cola, and NABI. This experience deepened Kevin\'s understanding of business strategy, market entry, and entrepreneurship in emerging markets, contributing to his ability to lead practice development and business growth throughout his consulting career.',
  },
  {
    id: 'project-voice-ai',
    section: 'projects',
    title: 'Voice AI Agent Architecture',
    content:
      'Kevin designed and deployed production-grade Voice AI calling agents across PSTN and Web channels using platforms including Bland.ai, Vapi.ai, Synthflow.ai, and Pipecat. These agents handle real-time customer interactions with context management, NLP-driven intent recognition, and seamless handoffs to live agents. The solutions are orchestrated through Vercel, Twilio Flex, Genesys Cloud, and Azure Communication Services for enterprise-scale reliability. This work represents the cutting edge of conversational AI applied to voice telephony.',
  },
  {
    id: 'project-global-teams',
    section: 'projects',
    title: 'Global Teams Deployment',
    content:
      'Kevin led the architectural design and consulting for a 65-country Microsoft Teams Phone System rollout for a multinational gaming company. The project encompassed Direct Routing with Audiocodes SBCs, E911 compliance, auto-attendants, call queues, and hybrid Teams Rooms integrations across diverse regulatory environments. This global-scale deployment required deep expertise in international telephony standards, compliance requirements, and Microsoft Teams architecture.',
  },
  {
    id: 'project-enterprise-ai',
    section: 'projects',
    title: 'Enterprise AI Integration',
    content:
      'Kevin integrated Voice AI agents with major enterprise platforms including Microsoft Teams, Cisco Webex, Slack, Dynamics 365, Salesforce, and ServiceNow. He built cloud-native solutions on Azure, AWS, and GCP that enable real-time telephony integration, automated call routing, data enrichment, and AI-powered orchestration across unified communication ecosystems. This work bridges the gap between modern AI capabilities and established enterprise software, delivering measurable business value through intelligent automation.',
  },
  {
    id: 'project-governance',
    section: 'projects',
    title: 'AI Governance Framework',
    content:
      'Kevin established comprehensive governance frameworks for AI voice agents, implementing security controls, compliance monitoring, and safety guardrails. The framework covers PII detection and redaction, content filtering, hallucination mitigation, GDPR/CCPA compliance, and human-in-the-loop validation. This ensures responsible and trustworthy AI deployment at enterprise scale, addressing the critical need for governance as organizations adopt AI-powered voice solutions in customer-facing and internal workflows.',
  },
  {
    id: 'project-automation',
    section: 'projects',
    title: 'Automation Pipelines',
    content:
      'Kevin built advanced automation pipelines using n8n, Make, Zapier, and native Azure/AWS/GCP services to orchestrate complex multi-step workflows. These pipelines connect Voice AI agents to CRM systems, ticketing platforms, and analytics dashboards, enabling end-to-end process automation. The automation layer incorporates real-time sentiment analysis, call scoring, and conversation intelligence to provide actionable insights and drive continuous improvement across customer engagement workflows.',
  },
  {
    id: 'digital-workers-overview',
    section: 'expertise',
    title: 'Digital Workers and Voice AI Agents in the Enterprise',
    content:
      'Kevin is a leading practitioner in designing and deploying digital workers — autonomous AI-powered voice agents that handle customer interactions end-to-end without human intervention. These digital workers go far beyond traditional IVR systems. They leverage large language models (GPT-4, Claude, Gemini) combined with real-time speech-to-text and text-to-speech to conduct natural, multi-turn conversations over the phone. Kevin architects digital worker solutions that integrate directly into enterprise contact center platforms like Amazon Connect, Genesys Cloud CX, NICE CXone, Microsoft Azure Communication Services, and Zoom Contact Center. These digital workers handle tasks like appointment scheduling, order status inquiries, account management, technical troubleshooting, and lead qualification — all with human-like conversational ability. Kevin designs these systems with intelligent escalation paths so digital workers seamlessly hand off to live agents when the conversation requires human judgment, preserving full context and conversation history during the transfer.',
  },
  {
    id: 'amazon-connect-integration',
    section: 'expertise',
    title: 'Amazon Connect Voice AI Integration',
    content:
      'Kevin has deep expertise in architecting Voice AI solutions on Amazon Connect, AWS\'s cloud-based contact center platform. He designs custom contact flows that route inbound calls to AI-powered digital workers built with Amazon Lex for intent recognition, Amazon Transcribe for real-time speech-to-text, and Amazon Polly for natural text-to-speech. Kevin goes beyond native AWS AI services by integrating external LLMs (GPT-4, Claude) into Connect flows via AWS Lambda functions, enabling far more sophisticated conversational AI than Lex alone can provide. His Amazon Connect deployments include real-time sentiment analysis using Amazon Comprehend, call recording and analytics, integration with Amazon S3 and DynamoDB for conversation persistence, and custom CRM integrations through Connect\'s Contact Control Panel (CCP) APIs. Kevin has architected multi-region Connect deployments with disaster recovery, workforce management integration, and compliance recording for regulated industries. He leverages Amazon Connect\'s Contact Lens for conversation analytics, automated quality management, and agent performance dashboards.',
  },
  {
    id: 'azure-ai-studio-integration',
    section: 'expertise',
    title: 'Microsoft Azure AI Studio and Azure Communication Services',
    content:
      'Kevin architects sophisticated Voice AI solutions using Microsoft Azure AI Studio (formerly Azure AI Foundry) and Azure Communication Services (ACS). He builds custom AI voice agents that leverage Azure OpenAI Service for LLM-powered conversations, Azure AI Speech for high-fidelity speech recognition and synthesis, and Azure AI Language for entity extraction and sentiment analysis. His Azure deployments integrate Voice AI agents directly into Microsoft Teams Phone System and Dynamics 365 Customer Service through ACS call automation APIs, enabling digital workers to handle inbound and outbound calls within the Microsoft ecosystem. Kevin designs these solutions with Azure Cognitive Search for RAG-based knowledge retrieval, allowing digital workers to answer complex questions by referencing enterprise knowledge bases, product documentation, and CRM records in real time. He implements Azure AI Content Safety for guardrails and compliance, Azure Monitor for observability, and Azure Key Vault for secrets management. Kevin\'s Azure architectures support hybrid deployments where AI voice agents operate alongside human agents in Microsoft Teams contact center environments.',
  },
  {
    id: 'genesys-cloud-integration',
    section: 'expertise',
    title: 'Genesys Cloud CX Voice AI Integration',
    content:
      'Kevin has extensive experience integrating Voice AI digital workers with Genesys Cloud CX, one of the leading enterprise contact center platforms. He architects solutions using Genesys Cloud\'s Architect flow designer combined with external AI services to create intelligent call routing and self-service automation. Kevin connects LLM-powered voice agents to Genesys through its open APIs and data actions, enabling digital workers to access customer data, update records, and perform actions within Genesys\'s unified communications platform during live calls. His Genesys integrations include predictive routing based on AI-driven customer intent analysis, real-time agent assist where AI provides live suggestions to human agents during calls, and post-call analytics with automated quality scoring. Kevin designs Genesys deployments with workforce engagement management (WEM) integration, ensuring that digital worker capacity is balanced with human agent scheduling. He implements Genesys AppFoundry marketplace solutions alongside custom-built AI components for a best-of-breed approach to enterprise voice AI.',
  },
  {
    id: 'nice-cxone-integration',
    section: 'expertise',
    title: 'NICE CXone Voice AI Integration',
    content:
      'Kevin integrates Voice AI digital workers with NICE CXone, deploying intelligent virtual agents that handle complex customer interactions within NICE\'s cloud contact center platform. He architects solutions using NICE CXone\'s Studio scripting environment combined with external LLM services to build conversational AI flows that go far beyond traditional IVR scripts. Kevin\'s NICE integrations leverage CXone\'s Enlighten AI for real-time sentiment analysis and automated quality management, combined with custom Voice AI agents for actual customer-facing conversations. He designs omnichannel solutions where digital workers operate seamlessly across voice, chat, and messaging channels within CXone. Kevin implements NICE\'s workforce management APIs to coordinate digital worker availability with human agent scheduling, and uses CXone\'s recording and analytics capabilities for continuous improvement of AI agent performance. His NICE deployments include compliance recording, PCI-DSS secure payment handling through AI agents, and integration with enterprise CRMs through CXone\'s open APIs.',
  },
  {
    id: 'zoom-contact-center-integration',
    section: 'expertise',
    title: 'Zoom Contact Center and Voice AI',
    content:
      'Kevin architects Voice AI solutions that integrate with Zoom Contact Center, leveraging Zoom\'s unified communications platform to deploy digital workers alongside traditional Zoom Phone and Zoom Meetings infrastructure. He designs AI-powered virtual agents that handle inbound calls through Zoom\'s contact center routing, using Zoom\'s native AI Companion features combined with external LLM integrations for sophisticated conversational AI. Kevin\'s Zoom integrations enable organizations that already rely on Zoom for unified communications to add intelligent voice automation without deploying a separate contact center platform. He implements solutions where digital workers handle first-contact resolution on Zoom Contact Center, then seamlessly escalate to Zoom Phone or Zoom Meetings for live agent or specialist consultations when needed. Kevin designs these architectures to leverage Zoom\'s recording, transcription, and analytics capabilities alongside custom AI-driven conversation intelligence.',
  },
  {
    id: 'enterprise-ivr-modernization',
    section: 'expertise',
    title: 'Enterprise IVR Modernization with Voice AI',
    content:
      'Kevin specializes in modernizing legacy IVR systems by replacing rigid, menu-driven phone trees with AI-powered conversational voice agents. Traditional IVR systems force callers through numbered menus ("Press 1 for billing, Press 2 for support"), leading to high abandonment rates and poor customer experience. Kevin replaces these with digital workers that understand natural language — callers simply state their intent and the AI routes, resolves, or escalates intelligently. His modernization approach connects to existing contact center platforms (Amazon Connect, Genesys, NICE, Zoom) without requiring a complete platform replacement, enabling incremental migration from legacy IVR to AI-powered voice agents. Kevin\'s IVR modernization projects consistently deliver measurable results: reduced average handle time, higher first-contact resolution rates, lower call abandonment, and improved customer satisfaction scores. He implements A/B testing frameworks to compare AI agent performance against legacy IVR paths, providing data-driven evidence for continued modernization investment. Kevin addresses enterprise concerns around AI safety by implementing comprehensive guardrails, fallback routing to human agents, and real-time monitoring dashboards that give operations teams full visibility into digital worker performance.',
  },
];
