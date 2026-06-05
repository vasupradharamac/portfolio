"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Youtube } from 'lucide-react'
import { SectionBackground } from './section-background'

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  achievements: string[];
  // period: string;
  // githubUrl: string;
  // liveUrl?: string;
  // videoUrl?: string;
  // articleUrl?: string;
  category: string;
};

// {
//   title: 'Enterprise Sales Analytics Dashboard',
//   description: 'Power BI dashboard with DAX measures and advanced data modeling for actionable business intelligence.',
//   image: '/images/projects/dashboard.png',
//   technologies: ['Power BI', 'DAX', 'Data Modeling', 'ETL'],
//   achievements: [
//     'Achieved 99.8% accuracy in YoY growth calculations',
//     'Reduced query time by 40% through star schema optimization',
//     'Revealed $1.2M revenue opportunity via geo-spatial analysis'
//   ],
//   period: 'Feb 2025',
//   githubUrl: 'https://github.com/intel-retail/automated-self-checkout/pull/652',
//   liveUrl: 'https://app.powerbi.com/reportEmbed?reportId=28cfe113-229a-461c-a719-cc7ce42fd44d&autoAuth=true&ctid=41f88ecb-ca63-404d-97dd-ab0a169fd138',
//   category: 'Data Analytics'
// },

const projects: Project[] = [
  {
    title: 'AI-Assisted Voice Concierge Platform',
    description: 'A voice concierge platform with constrained retrieval, confidence-gated LLM responses, and an offline eval framework built to validate source attribution accuracy and answer fidelity at scale.',
    technologies: ['Python', 'LiveKit', 'GPT-4o', 'Supabase pgvector', 'FastAPI'],
    achievements: [
      'Constrained retrieval at query time via metadata filters, preventing content overlap across knowledge sources',
      'Confidence-gated retrieval where similarity scores below threshold suppress the LLM response and log the coverage gap, reducing hallucination under low-recall conditions',
      'Offline eval framework validating source attribution accuracy and answer fidelity against a pre-generated dataset',
    ],
    image: "",
    category:"Voice AI",
  },
  {
    title: 'Multilingual Voice Support Agent',
    description: 'A production-ready multilingual support agent handling queries across all 22 Indian languages in under 3 seconds, with retrieval scoped via metadata filters to prevent cross-account context leakage.',
    technologies: ['Python', 'Sarvam AI', 'Pinecone', 'pgvector', 'OpenAI', 'FastAPI'],
    achievements: [
      'Handles all 22 Indian languages in under 3 seconds on Sarvam AI 30B model with metadata-scoped retrieval preventing cross-account context leakage',
      'RAG pipeline with document ingestion and persistent conversation history for contextual recall and feedback-loop-driven retrieval improvement',
      'Automatic escalation logic with sentiment and confidence-score triggers, passing a structured conversation summary to the human agent at handoff for zero-context-loss transfers',
    ],
    image: "",
    category: "Voice AI"
  },
  {
    title: 'VP in Your Pocket — Agentic Deal Accelerator',
    description: 'A multi-agent conversational sales coaching system built on LangGraph where one agent coaches the rep in real time and a background MEDDIC scoring agent evaluates deal health, flags risks, and propagates context forward automatically.',
    technologies: ['Python', 'LangGraph', 'OpenAI API', 'FastAPI', 'Pinecone'],
    achievements: [
      'Two agents on shared LangGraph state, one coaching the rep in real time, one scoring MEDDIC dimensions in the background with OpenAI as the inference layer',
      'Deal health updates, risk flags, and context propagation handled automatically, eliminating manual CRM updates',
      'Worked directly with the client through discovery sessions to understand sales workflows, pain points, and desired outcomes',
      'Managed the full project lifecycle from requirements to delivery with continuous client feedback loops',
    ],
    image:"",
    category: "Multi-Agent"
  },
  {
    title: 'KV Iyengars — Full Stack E-commerce Platform',
    description: 'A full e-commerce platform built from scratch as a freelance engagement. Owned the entire product from architecture to delivery including storefront, payments, admin operations, and automated lead processing.',
    technologies: ['Python', 'FastAPI', 'React', 'Razorpay', 'WhatsApp Business API', 'n8n', 'PostgreSQL'],
    achievements: [
      'Razorpay payment integration with full order lifecycle management across storefront and admin portal',
      'WhatsApp Business API integration for inbound lead processing, turning conversational queries into tracked orders',
      'n8n automation pipeline for lead qualification and routing, eliminating manual follow-up overhead',
    ],
    image:"",
    category:"Backend"
  },
  {
    title: 'LLM-Powered Pricing Engine',
    description: 'A production pricing intelligence system generating rich product feature vectors from natural language descriptions, benchmarking live market prices, and directly informing pricing strategy for a real business.',
    technologies: ['Python', 'OpenAI API', 'LangChain'],
    achievements: [
      'Generates rich product features from natural language descriptions with no manual tagging required',
      'Live market price benchmarking surfaces actionable recommendations that non-technical staff can act on directly',
      'Worked closely with the business owner through discovery to ensure outputs matched actual pricing decision workflows',
    ],
    image: "",
    category: "AI & LLM"
  },
]

const categories = ['All', 'AI & LLM', 'Voice AI', 'Backend']

const Projects = () => {
  const [filter, setFilter] = useState<string>('All')

  const filteredProjects = projects.filter(project => {
    if (filter === 'All') return true
    return project.category === filter
  })

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <SectionBackground variant="projects" />
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl font-medium mb-8 text-foreground"
        >
          Projects
        </motion.h2>

        {/* Minimal Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-3 py-1.5 text-sm rounded-full transition-all duration-200 ${
                filter === category
                  ? 'bg-foreground text-background'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects List */}
        <div className="space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                layout
                className="group"
              >
                <div className="flex flex-col gap-4">
                  {/* Content Column */}
                  <div className="w-full">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base font-medium text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {/* <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-md hover:bg-muted/50 transition-colors"
                          aria-label="View on GitHub"
                        >
                          <Github className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
                        </a> */}
                        {/* {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-md hover:bg-muted/50 transition-colors"
                            aria-label="View live demo"
                          >
                            <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
                          </a>
                        )} */}
                        {/* {project.videoUrl && (
                          <a
                            href={project.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-md hover:bg-muted/50 transition-colors"
                            aria-label="Watch demo video"
                          >
                            <Youtube className="w-4 h-4 text-muted-foreground hover:text-red-500 transition-colors" />
                          </a>
                        )} */}
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground/80 mt-1.5 leading-relaxed">
                      {project.description}
                    </p>

                    {/* {project.articleUrl && (
                      <a
                        href={project.articleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-2 text-xs text-primary hover:text-primary/80 transition-colors"
                      >
                        Read more →
                      </a>
                    )} */}

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs text-muted-foreground/60 px-2 py-0.5 rounded-full border border-border/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Achievements */}
                    <ul className="mt-3 space-y-1">
                      {project.achievements.map((achievement, i) => {
                        const isMetric = /^\d[\d,+]/.test(achievement);
                        return (
                        <li
                          key={i}
                          className={`text-xs leading-relaxed pl-3 relative before:absolute before:left-0 ${
                            isMetric
                              ? 'text-purple-300 font-medium before:content-["★"] before:text-purple-400'
                              : 'text-muted-foreground/70 before:content-["·"] before:text-muted-foreground/50'
                          }`}
                          style={isMetric ? { textShadow: '0 0 12px rgba(168,85,247,0.7)' } : undefined}
                        >
                          {achievement}
                        </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                {/* Divider */}
                {index < filteredProjects.length - 1 && (
                  <div className="border-b border-border/30 mt-8" />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">No projects in this category.</p>
            <button
              onClick={() => setFilter('All')}
              className="mt-3 text-sm text-primary hover:underline"
            >
              Show all projects
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects
