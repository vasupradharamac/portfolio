"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, X, Presentation } from 'lucide-react'
import Image from 'next/image'
import { SectionBackground } from './section-background'

const experiences = [
	{
	  title: "Senior Backend Developer",
	  company: "Isha Life Private Limited",
	  linkedIn: "https://www.linkedin.com/company/isha-foundation",
	  logo: "/images/logos/ishav1.png",
	  location: "Coimbatore, India",
	  startYear: "Apr 2024",
	  endYear: "Dec 2025",
	  highlights: [
		"Built and deployed a RAG pipeline using LangChain and Pinecone, ingesting document archives and video transcripts to serve queries via a custom voice persona with a continuous user feedback loop for retrieval improvement",
		"Built a distributed image processing pipeline with async orchestration achieving 60% throughput improvement for 10M+ annual participants",
		"Unified four fragmented payment systems into a single fault-tolerant pipeline with CloudWatch observability, handling partial failure scenarios across 4 upstream systems",
		"Reduced data retrieval latency from 150ms to sub-30ms for 30,000+ concurrent users",
	  ],
	},
	{
	  title: "Backend Developer",
	  company: "Keenai Global",
	  linkedIn: "https://www.linkedin.com/company/keenaiglobal/",
	  logo: "/images/logos/keenai logo.jpeg",
	  location: "Bangalore, India",
	  startYear: "Sep 2022",
	  endYear: "Mar 2024",
	  highlights: [
		"Engineered a high-traffic event-driven scheduler using concurrent processing and fan-out patterns, enabling low-latency time-based automation across distributed workloads with 99.95% execution reliability",
		"Owned the delivery of a real-time multi-channel notification engine from architecture to design within a microservice architecture, achieving 99.9% delivery success rate",
		"Migrated infrastructure to a full IaC model using Terraform with automated CI/CD pipelines supporting multi-region cross-account deployments",
		"Built an internal social platform actively used by the team, supporting post creation, editing, likes, shares, comments, and nested comments",
	  ],
	},
	{
	  title: "Full Stack Developer Intern",
	  company: "Defy — Y Combinator YC21",
	  linkedIn: "https://www.linkedin.com/company/defyclub",
	  logo: "/images/logos/defyclub_logo.jpeg",
	  location: "Bangalore, India",
	  startYear: "Nov 2021",
	  endYear: "Feb 2022",
	  highlights: [
		"Built a CDM admin portal with RBAC and REST APIs serving 60,000+ users",
		"Implemented investment allocation algorithms with sub-100ms performance in a high-velocity fintech startup",
	  ],
	},
  ]

const Experience = () => {
	const [pptModal, setPptModal] = useState<{ isOpen: boolean; file: string; title: string }>({
		isOpen: false,
		file: '',
		title: ''
	});

	const openPptModal = (file: string, title: string) => {
		setPptModal({ isOpen: true, file, title });
	};

	const closePptModal = () => {
		setPptModal({ isOpen: false, file: '', title: '' });
	};

	return (
		<section id="experience" className="py-24 relative overflow-hidden">
			<SectionBackground variant="experience" />
			{/* PPT Modal */}
			<AnimatePresence>
				{pptModal.isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
						onClick={closePptModal}
					>
						<motion.div
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							className="relative w-full max-w-6xl h-[85vh] bg-background rounded-lg overflow-hidden shadow-2xl"
							onClick={(e) => e.stopPropagation()}
						>
							{/* Header */}
							<div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-muted/30">
								<div className="flex items-center gap-2">
									<Presentation className="w-5 h-5 text-primary" />
									<span className="text-sm font-medium text-foreground truncate max-w-[500px]">
										{pptModal.title}
									</span>
								</div>
								<button
									onClick={closePptModal}
									className="p-2 rounded-md hover:bg-muted transition-colors"
								>
									<X className="w-5 h-5 text-muted-foreground" />
								</button>
							</div>
							{/* PPT Viewer using Google Docs Viewer */}
							<div className="w-full h-[calc(100%-52px)] relative">
								<iframe
									src={`https://docs.google.com/gview?url=${encodeURIComponent(
										typeof window !== 'undefined'
											? window.location.origin + pptModal.file
											: pptModal.file
									)}&embedded=true`}
									className="w-full h-full border-0"
									title={pptModal.title}
									allowFullScreen
								/>
								{/* Download fallback at bottom */}
								<div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gradient-to-t from-background to-transparent">
									<a
										href={pptModal.file}
										download
										className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
									>
										<FileText className="w-3.5 h-3.5" />
										Download if viewer doesn&apos;t load
									</a>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			<div className="container mx-auto px-4 max-w-4xl relative z-10">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-2xl font-medium mb-16 text-foreground"
				>
					Work Experience
				</motion.h2>

				<div className="space-y-12">
					{experiences.map((exp, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="group"
						>
							<div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
								{/* Logo + Date Column */}
								<div className="sm:w-44 flex-shrink-0 flex items-start gap-3">
									<div className="w-14 h-14 rounded-full overflow-hidden bg-muted/30 flex-shrink-0 flex items-center justify-center">
										<Image
											src={exp.logo}
											alt={`${exp.company} logo`}
											width={56}
											height={56}
											className="object-cover"
										/>
									</div>
									<span className="text-sm text-muted-foreground font-light pt-4">
										{exp.startYear} — {exp.endYear}
									</span>
								</div>

								{/* Content Column */}
								<div className="flex-1">
								<h3 className="text-base font-medium text-foreground group-hover:text-primary transition-colors">
										{exp.title} at{' '}
										<a
											href={exp.linkedIn}
											target="_blank"
											rel="noopener noreferrer"
										>
											{exp.company}
										</a>
									</h3>
									<p className="text-sm text-muted-foreground mt-1">
										{exp.location}
									</p>

									{/* Highlights */}
									<ul className="mt-3 space-y-1.5">
										{exp.highlights.map((highlight, i) => (
											<li key={i} className="text-sm text-muted-foreground/70 leading-relaxed pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-muted-foreground/50">
												{highlight}
											</li>
										))}
									</ul>

									{/* Publications */}
									{/* {exp.publications && exp.publications.length > 0 && (
										<div className="mt-4 space-y-2">
											<span className="text-xs text-muted-foreground font-medium">Publications</span>
											<div className="space-y-2">
												{exp.publications.map((pub, i) => {
													const Wrapper = pub.url ? 'a' : 'div';
													const linkProps = pub.url ? { href: pub.url, target: "_blank" as const, rel: "noopener noreferrer" } : {};
													return (
													<Wrapper
														key={i}
														{...linkProps}
														className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 hover:border-primary/20 transition-all group/pub"
													>
														<div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
															<FileText className="w-4 h-4 text-primary" />
														</div>
														<div className="flex-1 min-w-0">
														<p className="text-sm font-medium text-foreground group-hover/pub:text-primary transition-colors truncate">
															{pub.title}
														</p>
														{pub.venue && (
															<p className="text-xs text-muted-foreground mt-0.5">{pub.venue}</p>
														)}
													</div>
														{pub.url && <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover/pub:text-primary group-hover/pub:-translate-y-0.5 group-hover/pub:translate-x-0.5 transition-all flex-shrink-0" />}
													</Wrapper>
													);
												})}
											</div>
										</div>
									)} */}

									{/* Website / MCP Links */}
									{/* {(('website' in exp && exp.website) || ('mcpPackage' in exp && exp.mcpPackage)) && (
										<div className="mt-4 flex flex-wrap gap-3">
											{'website' in exp && exp.website && (
												<a
													href={exp.website}
													target="_blank"
													rel="noopener noreferrer"
													className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 hover:bg-primary/20 hover:border-primary/30 transition-all group/web"
												>
													<ArrowUpRight className="w-4 h-4 text-primary" />
													<span className="text-sm font-medium text-foreground group-hover/web:text-primary transition-colors">JobMatch-AI</span>
												</a>
											)}
											{'mcpPackage' in exp && exp.mcpPackage && (
												<a
													href={exp.mcpPackage}
													target="_blank"
													rel="noopener noreferrer"
													className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 hover:bg-primary/20 hover:border-primary/30 transition-all group/mcp"
												>
													<ArrowUpRight className="w-4 h-4 text-primary" />
													<span className="text-sm font-medium text-foreground group-hover/mcp:text-primary transition-colors">MCP Package</span>
												</a>
											)}
										</div>
									)} */}

									{/* PPT Presentation
									{exp.ppt && (
										<div className="mt-4">
											<span className="text-xs text-muted-foreground font-medium block mb-2">Presentation</span>
											<button
												onClick={() => openPptModal(exp.ppt!.file, exp.ppt!.title)}
												className="group/ppt block w-full max-w-sm rounded-lg overflow-hidden border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg"
											>
												<div className="relative aspect-[16/9] bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
													<div className="text-center">
														<Presentation className="w-12 h-12 text-orange-500 mx-auto mb-2" />
														<span className="text-xs text-muted-foreground">Click to view presentation</span>
													</div>
													<div className="absolute inset-0 bg-black/0 group-hover/ppt:bg-black/10 transition-all flex items-center justify-center opacity-0 group-hover/ppt:opacity-100">
														<span className="text-sm font-medium text-primary">Open Presentation</span>
													</div>
												</div>
												<div className="px-3 py-2 bg-muted/30 border-t border-border/30">
													<p className="text-xs text-muted-foreground truncate flex items-center gap-1.5">
														<Presentation className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
														{exp.ppt.title}
													</p>
												</div>
											</button>
										</div>
									)} */}
								</div>
							</div>

							{/* Divider */}
							{index < experiences.length - 1 && (
								<div className="border-b border-border/30 mt-12" />
							)}
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Experience
