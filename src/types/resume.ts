export interface ContactInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin?: string;
  github?: string;
  substack?: string;
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location?: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface Education {
  institution: string;
  program: string;
  year: string;
  highlights: string[];
}

export interface ProjectHighlight {
  title: string;
  description: string;
  tags: string[];
  icon: string;
}

export interface ResumeData {
  contact: ContactInfo;
  summary: string;
  experience: Experience[];
  skills: SkillCategory[];
  certifications: Certification[];
  education: Education[];
  projects: ProjectHighlight[];
}
