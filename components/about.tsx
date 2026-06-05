"use client"

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import {
  SiOpenai,
  SiTerraform,
  SiVercel,
  SiTypescript,
  SiPython,
  SiJavascript,
  SiReact,
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiApachekafka,
  SiGrafana,
  SiGit,
  SiLinux,
  SiNextdotjs,
  SiFastapi,
  SiGraphql,
  SiRedis,
  SiGooglebigquery,
  SiGithubactions,
  SiJenkins,
  SiAnthropic,
  SiClaude,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { TbDatabaseSearch, TbTopologyRing, TbWaveSine } from "react-icons/tb";
import { FiDatabase } from "react-icons/fi";
import { HeroBackground } from './hero-background';
import { MapPin, GraduationCap, Briefcase, Heart, Camera, Mountain, Gamepad2, Coffee, Trophy, Github, ExternalLink, CalendarDays, Mail } from 'lucide-react'

// Skills data organized by category
type Skill = {
  icon: React.ElementType;
  name: string;
};

const programmingSkills: Skill[] = [
  { icon: SiPython, name: "Python" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiJavascript, name: "JavaScript" },
];

const aiLlmSkills: Skill[] = [
  { icon: LuBrainCircuit, name: "LangGraph & LangChain"},
  { icon: TbTopologyRing, name: "Knowledge Graphs"},
  { icon: TbDatabaseSearch, name: "Pinecone"},
  { icon: TbWaveSine, name: "Voice AI (LiveKit, Sarvam)"},
  { icon: SiAnthropic, name: "Athropic API"},
  { icon: SiOpenai, name: "OpenAI API"},
  { icon: SiClaude, name: "Claude Code"}

];

const webFrameworkSkills: Skill[] = [
  { icon: SiReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiDjango, name: "Django" },
  { icon: SiFastapi, name: "FastAPI" },
  { icon: SiGraphql, name: "GraphQL" },
];

const infraSkills: Skill[] = [
  { icon: SiDocker, name: "Docker" },
  { icon: FaAws, name: "AWS" },
  { icon: SiApachekafka, name: "Kafka" },
  { icon: SiJenkins, name: "Jenkins" },
  { icon: SiGithubactions, name: "GitHub Actions" },
];

const databaseSkills: Skill[] = [
  { icon: SiMongodb, name: "MongoDB" },
  { icon: FiDatabase, name: "DynamoDB" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiRedis, name: "Redis" },
  { icon: TbDatabaseSearch, name: "Pinecone"}
  
];

const toolsSkills: Skill[] = [
  { icon: SiGit, name: "Git" },
  { icon: SiLinux, name: "Linux" },
];

// Photo gallery data
const travelPhotos = [
  {
    src: "/images/me/Khao Lak sunset.jpeg",
    alt: "Sunset in Tropics",
    caption: "Khao Lak, Thailand",
    size: "large" as const,
  },
  {
    src: "/images/me/Shades of the Andaman Sea.jpeg",
    alt: "Turquoise Waters",
    caption: "Andaman Sea, Surin Islands",
    size: "medium" as const,
  },
  {
    src: "/images/me/a night to remember - coldplay.jpeg",
    alt: "Coldplay - Mumbai, 25'",
    caption: "Mumbai, India",
    size: "medium" as const,
  },
  {
    src: "/images/me/Japanese restaurant .jpeg",
    alt: "Exploring Japanese Cuisine",
    caption: "Marriot, Khao Lak",
    size: "small" as const,
  },
  {
    src: "/images/me/peacock - ashram.jpeg",
    alt: "Super friendly companions",
    caption: "Isha Foundation, Coimbatore",
    size: "medium" as const,
  },
];

const ashramPhotos = [
  {
    src: "/images/me/glimpse of Adiyogi - ashram.jpeg",
    alt: "",
    caption: "A glimpse of 112ft Adiyogi against the backdrop Velliangiri",
    size: "large" as const,
  },
  {
    src: "/images/me/annual catch up with teams - ashram.jpeg",
    alt: "",
    caption: "Annual catch up with the team",
    size: "small" as const,
  },
  {
    src: "/images/me/early mornings - ashram.jpeg",
    alt: "",
    caption: "Heading for early morning sadhana",
    size: "medium" as const,
  },
  {
    src: "/images/me/flower arch - ashram.jpeg",
    alt: "",
    caption: "The infamous flower arch at the ashram",
    size: "small" as const,
  },
 
  {
    src: "/images/me/Monthly events - ashram.jpeg",
    alt: "",
    caption: "Monthly special dinners at ashram",
    size: "medium" as const,
  },
];

const hobbyPhotos = [
  {
    src: "/images/me/nandyy and vee.jpeg",
    alt: "",
    caption: "",
    size: "small" as const,
  },
  {
    src: "/images/me/peak vacationing.jpeg",
    alt: "",
    caption: "",
    size: "small" as const,
  },
  {
    src: "/images/me/jivu and vee.jpeg",
    alt: "",
    caption: "",
    size: "large" as const,
  },
  {
    src: "/images/me/I like you very matcha.jpeg",
    alt: "",
    caption: "",
    size: "large" as const,
  },
  {
    src: "/images/me/beachy beachy.jpeg",
    alt: "",
    caption: "",
    size: "large" as const,
  },
  {
    src: "/images/me/smoll me.jpeg",
    alt: "",
    caption: "",
    size: "large" as const,
  },
  {
    src: "/images/me/best matcha ever.jpeg",
    alt: "",
    caption: "",
    size: "small" as const,
  },
];

// Hackathon highlights data
 const hackathonHighlights = [
  {
    title: "SentinelEdge",
    event: "HackASU 2025 - On-Device AI",
    image: "/images/hackathons/hackASU2.JPG",
    description: "Built a multimodal scam detection system combining Whisper Tiny and XGBoost for real-time speech + text classification at <50ms on edge hardware — zero cloud dependency with federated learning for private on-device updates.",
    award: "1st Place Winner",
    githubLink: "https://github.com/Mayank-glitch-cpu/SentinelEdge",
  },
  {
    title: "GamED-AI",
    event: "HackASU 2025 - Anthropic Claude AI",
    image: "/images/me/claude.jpeg",
    description: "Built a 4-layer AI pipeline that transforms educational questions into interactive, story-based visualizations with 18 game templates and intelligent caching reducing processing time by 80%.",
    award: "1st Place Winner",
    githubLink: "https://github.com/Mayank-glitch-cpu/Claude_Hackathon/tree/main",
    projectLink: "https://youtu.be/0q3TwJJ7xrA",
  },
  {
    title: "Hire Smart",
    event: "DevHacks x Strategy Hackathon",
    image: "/images/me/firstSolo.jpeg",
    description: "Designed an end-to-end NLP candidate search engine using BERT and FAISS for semantic matching across 10,000+ profiles with <100ms latency.",
    projectLink: "https://youtu.be/CKlaSQfaLH4?si=dY8mIRTTya8_Ve58",
  },
  {
    title: "Interview Unlocked",
    event: "Agentic AI Hackathon - SODA ASU",
    image: "/images/me/interviewprep.jpeg",
    description: "Built an Agentic AI system using LangChain and LangGraph for automated, personalized interview prep—cut manual effort by 90% via modular orchestration.",
    githubLink: "https://github.com/Mayank-glitch-cpu/interview-unlocked",
  },
  {
    title: "Gamify",
    event: "Zoom App Hackathon",
    description: "Developed a Zoom application leveraging real-time transcription to automatically generate interactive quizzes using Gemini AI with seamless platform integration.",
  },
  {
    title: "TwinGenius",
    event: "Devils Invent - Honeywell & ASU",
    description: "Revolutionized industrial digital twin creation by generating complete environments from natural language prompts in under 60 seconds using Gemini AI and AWS IoT TwinMaker.",
  },
 ];

// Skill Grid Component
const SkillGrid = ({ skills, title }: { skills: Skill[], title: string }) => (
  <div className="mb-4">
    <h4 className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">{title}</h4>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <motion.div
          key={`${skill.name}-${index}`}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          whileHover={{ scale: 1.1, y: -2 }}
          className="group"
        >
          <div className="flex items-center gap-1.5 bg-background/30 backdrop-blur-sm border border-border/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 px-2.5 py-1.5 rounded-lg">
            <skill.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">
              {skill.name}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

// Photo Gallery Component
const PhotoGallery = ({ photos, className = "" }: { photos: typeof travelPhotos, className?: string }) => (
  <div className={`grid grid-cols-4 gap-3 ${className}`}>
    {photos.map((photo, index) => {
      const sizeClasses = {
        small: "col-span-1 row-span-1 aspect-square",
        medium: "col-span-2 row-span-1 aspect-video",
        large: "col-span-2 row-span-2 aspect-square",
      };

      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ scale: 1.02, zIndex: 10 }}
          className={`${sizeClasses[photo.size]} relative rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300`}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-white text-xs font-medium flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {photo.caption}
            </p>
          </div>
        </motion.div>
      );
    })}
  </div>
);

const PhotoGallery_ashram = ({ photos, className = "" }: { photos: typeof ashramPhotos, className?: string }) => (
  <div className={`grid grid-cols-4 gap-3 ${className}`}>
    {photos.map((photo, index) => {
      const sizeClasses = {
        small: "col-span-1 row-span-1 aspect-square",
        medium: "col-span-2 row-span-1 aspect-video",
        large: "col-span-2 row-span-2 aspect-square",
      };

      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ scale: 1.02, zIndex: 10 }}
          className={`${sizeClasses[photo.size]} relative rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300`}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-white text-xs font-medium flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {photo.caption}
            </p>
          </div>
        </motion.div>
      );
    })}
  </div>
);

// About Section
const About = () => {
  const containerRef = useRef(null);

  return (
    <section id="about" className="py-20 relative overflow-hidden" ref={containerRef}>
      <HeroBackground />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4 text-center gradient-text"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          A glimpse into my journey, passions, and the adventures that shape who I am
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-8 items-start max-w-7xl mx-auto">
          {/* Left Column - Journey & Professional Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Introduction Card */}
            <Card className="bg-card/70 backdrop-blur-md border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span className="gradient-text">About Me</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    Hey there, I’m <span className="text-primary font-semibold">Vasu</span>. Glad you’re here. I spend most of my time building systems at the intersection of <span className="text-primary font-semibold">backend engineering, cloud infrastructure, and AI</span>. Over the years, I’ve worked on distributed platforms, cloud-native applications, large-scale digital systems, and more recently, production-grade AI applications. I enjoy taking complex problems, breaking them down, and turning them into reliable products that people actually use.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Outside of work, curiosity tends to take over. You’ll usually find me keeping up with space exploration and counting down to Artemis III 🚀🌕, reading physics papers just because a topic sounds interesting, exploring ideas around the technological singularity, or diving into the engineering behind high-performance cars 🏎️, engines, and aerodynamics.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    At their core, these interests all stem from the same fascination: <span className="text-primary font-semibold">complex systems</span>. Whether it's software serving thousands of users, a spacecraft headed for the Moon, or a race car finding speed through engineering, I'm drawn to understanding how ambitious ideas become reality.
                  </motion.p>
                </div>
              </CardContent>
            </Card>

            {/* Technical Stack Card */}
            <Card className="bg-card/70 backdrop-blur-md border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold gradient-text">
                  Technical Arsenal
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <SkillGrid skills={programmingSkills} title="Languages" />
                <SkillGrid skills={aiLlmSkills} title="AI/ML" />
                <SkillGrid skills={webFrameworkSkills} title="Web & Frameworks" />
                <SkillGrid skills={infraSkills} title="Infrastructure" />
                <SkillGrid skills={databaseSkills} title="Databases" />
                <SkillGrid skills={toolsSkills} title="Tools" />

                <div className="text-center mt-4">
                  <Badge variant="outline" className="bg-primary/10 border-primary/30 text-primary text-xs">
                    30+ Technologies & Growing
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* What I Do Card */}
            <Card className="bg-card/70 backdrop-blur-md border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <span className="gradient-text">What I Build</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    I enjoy building the systems behind modern applications, from cloud-native platforms to production-grade AI.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Over the years, I've designed and delivered products from the ground up, owning{" "}
                    <span className="text-primary font-semibold">
                      architecture, engineering decisions, and execution end to end
                    </span>
                    . My work includes building a full e-commerce platform with integrated payments
                    and WhatsApp-native lead processing, engineering a distributed image processing
                    pipeline that improved throughput by{" "}
                    <span className="text-primary font-semibold">60%</span> for an ecosystem serving{" "}
                    <span className="text-primary font-semibold">10 million+ annual participants</span>,
                    unifying four fragmented payment systems into a single fault-tolerant platform,
                    and reducing data retrieval latency from{" "}
                    <span className="text-primary font-semibold">150ms to under 30ms</span> for more
                    than <span className="text-primary font-semibold">30,000 concurrent users</span>.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    My background is rooted in{" "}
                    <span className="text-primary font-semibold">
                      backend engineering, cloud infrastructure, and distributed systems
                    </span>
                    . I've spent much of my career building and operating systems that need to be
                    reliable, scalable, and resilient under real-world load.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    Over the last year, I've been exploring AI systems through practical business
                    problems rather than experimentation for its own sake. That journey has led me
                    to build voice-based workflows, agentic applications, and retrieval-augmented
                    systems involving contextual memory, evaluation pipelines, confidence scoring,
                    structured outputs, and orchestration frameworks designed for production
                    reliability.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    Beyond engineering, I write extensively about{" "}
                    <span className="text-primary font-semibold">
                      AI adoption, enterprise technology, and intelligent systems
                    </span>
                    , translating complex technical concepts into practical insights for business
                    and technology leaders.
                  </motion.p>
                </div>
              </CardContent>
            </Card>

            {/* Hackathon Highlights Card */}

            {/* Life at Ashram Card */}
            <Card className="bg-card/70 backdrop-blur-md border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Camera className="w-5 h-5 text-primary" />
                  <span className="gradient-text">Life at Ashram</span>
                </CardTitle>
                <Badge variant="outline" className="w-fit bg-primary/10 border-primary/30 text-primary text-xs mt-1">
                  Curving Away From the Straight Line
                </Badge>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-sm text-muted-foreground mb-4">
                My office view wasn't the skylines. It was the Velliangiri Mountains ⛰️. While working with the core engineering teams, I had the opportunity to contribute to large-scale digital platforms in an environment that blended technology, culture, and nature in a way few workplaces can. Between mountain views, classical music drifting through the campus, and people from every corner of the world coming together for a shared purpose, it was a unique experience that constantly reminded me there's more to life than deadlines, deployments, and sprint boards.
                </p>

                <p className="text-muted-foreground text-sm mt-4 mb-3">
                Initiatives making a global difference - Towards a more conscious planet 🌏:
                </p>

                <div className="flex flex-wrap gap-2">
                  <a href="https://consciousplanet.org/en" target="_blank" 
                    className="px-3 py-1 text-xs font-medium border border-primary/30 
                    bg-primary/8 text-primary rounded-full tracking-wide 
                    hover:bg-primary/15 hover:border-primary/50 transition-all cursor-pointer">
                    🌱 Save Soil
                  </a>
                  <a href="https://consciousplanet.org/en" target="_blank"
                    className="px-3 py-1 text-xs font-medium border border-primary/30 
                    bg-primary/8 text-primary rounded-full tracking-wide 
                    hover:bg-primary/15 hover:border-primary/50 transition-all cursor-pointer">
                    🌊 Rally for Rivers
                  </a>
                  <a href="https://consciousplanet.org/en" target="_blank"
                    className="px-3 py-1 text-xs font-medium border border-primary/30 
                    bg-primary/8 text-primary rounded-full tracking-wide 
                    hover:bg-primary/15 hover:border-primary/50 transition-all cursor-pointer">
                    💧 Cauvery Calling
                  </a>
                </div>
                <br/>
                <PhotoGallery_ashram photos={ashramPhotos} className="mt-4" />
              </CardContent>
            </Card>

          </motion.div>

          {/* Right Column - Personal & Hobbies */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Beyond the Code Card */}
            <Card className="bg-card/70 backdrop-blur-md border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  <span className="gradient-text">Beyond the Code</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    Life, for me, is a collection of experiences. Some are found in late-night conversations with good people, some in discovering a café I'll probably revisit ten times, and some while standing by the ocean wondering where to go next. I'm always looking for new experiences, and new stories to collect. Bonus points if one of those stories involves meeting a sea turtle somewhere along the way.𓆉
                  </motion.p>
                </div>
              </CardContent>
            </Card>

            {/* Hobbies Grid */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="bg-card/70 backdrop-blur-md border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 h-full">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Gamepad2 className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-sm mb-1">Sim Time</h4>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="bg-card/70 backdrop-blur-md border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 h-full">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Coffee className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-sm mb-1">Cafe Hopping</h4>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="bg-card/70 backdrop-blur-md border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 h-full">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Camera className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-sm mb-1">Photography</h4>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className="bg-card/70 backdrop-blur-md border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 h-full">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-sm mb-1">Road Trips</h4>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Hobby Photos */}
            <Card className="bg-card/70 backdrop-blur-md border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  <span className="gradient-text">Life in Frames</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <PhotoGallery photos={hobbyPhotos} />
              </CardContent>
            </Card>

            {/* Philosophy Card */}
            {/* <Card className="bg-gradient-to-br from-primary/10 to-purple-500/10 backdrop-blur-md border-primary/20 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500">
              <CardContent className="p-6">
                <motion.blockquote
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <p className="text-base font-medium text-foreground/90 mb-2">
                    "युक्तः कर्मफल त्यक्त्वा।"
                  </p>
                  <p className="text-lg italic text-foreground/80 mb-3">
                    "Give your best without obsessing over results. Let go and trust."
                  </p>
                  <p className="text-sm text-muted-foreground">
                    — My guiding philosophy
                  </p>
                </motion.blockquote>
              </CardContent>
            </Card> */}

            {/* Fun Facts Card */}
            <Card className="bg-card/70 backdrop-blur-md border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold gradient-text">
                  Quick Facts
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="space-y-2">
                  {[
                    { emoji: "📍", fact: "Currently based in Bangalore, India" },
                    { emoji: "☕", fact: "Coffee, code and Italian cuisine" },
                    { emoji: "🌴", fact: "Tropics over anywhere, always" },
                    { emoji: "🤿", fact: "Exploring the ocean, one snorkel at a time" },
                    { emoji: "🏎️", fact: "Cars, F1, and anything with an engine" },
                    { emoji: "🎸", fact: "Figuring out chords, one song at a time" },

                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors"
                    >
                      <span className="text-lg">{item.emoji}</span>
                      <span className="text-sm text-muted-foreground">{item.fact}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Travel Photos Card - At bottom of right column */}
            <Card className="bg-card/70 backdrop-blur-md border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Camera className="w-5 h-5 text-primary" />
                  <span className="gradient-text">Places I've Explored</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-sm text-muted-foreground mb-4">
                Chasing tropical shorelines, snorkeling 100 feet into the open ocean, eating food whose names I won't remember later, drinking coconut straight from the source on a beach with nowhere to be. Every one of these experiences is different, yet they all lead to the same feeling. Travel, for me, is not about ticking destinations. It is a reminder that the world is staggeringly beautiful, wildly varied, and worth showing up for fully.                </p>
                <PhotoGallery photos={travelPhotos} />
              </CardContent>
            </Card>

            {/* What's Happening Currently */}
            <Card className="bg-card/70 backdrop-blur-md border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <CalendarDays className="w-5 h-5 text-primary" />
                  <span className="gradient-text">What&#39;s Happening Currently</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="flex-1">
                      <h4 className="text-base font-medium text-foreground">
                        The Next Adventure
                      </h4>
                      <p className="text-sm text-muted-foreground/80 mt-1.5 leading-relaxed">
                        Building AI systems, shipping experiments, and exploring opportunities where ambitious ideas become real products.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <a
                      href="mailto:vasupradharamachandrans@gmail.com"
                      className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      Always open to interesting conversations, ideas, and opportunities - Let&apos;s Talk
                    </a>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
