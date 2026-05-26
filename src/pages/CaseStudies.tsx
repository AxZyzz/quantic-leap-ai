import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ScrollReveal";
import { FileText, Workflow, Laptop, Library } from "lucide-react";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import { useRef, useState } from "react";
import SEO from "@/components/SEO";
import { caseStudySchema } from "@/lib/schemas";
import { caseStudies, automationTemplates } from "@/data/casestudies";
import CaseStudyRenderer from "@/components/CaseStudyRenderer";
import lifosysImg from "../assets/solution/Lifosys_er.png";

const CaseStudies = () => {
    // Interactive viewer state for the Lifosys architecture image
    const viewerRef = useRef<HTMLDivElement | null>(null);
    const [viewerScale, setViewerScale] = useState<number>(1);
    const MIN_SCALE = 0.2;
    const MAX_SCALE = 4;
    const prevBodyOverflow = useRef<string | null>(null);
    const panRef = useRef({ x: 0, y: 0 });
    const [pan, setPan] = useState({ x: 0, y: 0 });
    const isPanningRef = useRef(false);
    const pointerStartRef = useRef<{ x: number; y: number } | null>(null);

    const lockBodyScroll = () => {
        try {
            prevBodyOverflow.current = document.body.style.overflow || "";
            document.body.style.overflow = "hidden";
        } catch (e) {
            // ignore (SSR or unavailable)
        }
    };

    const unlockBodyScroll = () => {
        try {
            if (prevBodyOverflow.current !== null) {
                document.body.style.overflow = prevBodyOverflow.current;
                prevBodyOverflow.current = null;
            } else {
                document.body.style.overflow = "";
            }
        } catch (e) {
            // ignore
        }
    };

    const handleViewerWheel = (e: React.WheelEvent) => {
        // Always prevent and stop propagation for wheel events captured on the viewer
        e.preventDefault();
        e.stopPropagation();
        const delta = -e.deltaY; // invert so wheel up -> zoom in
        // Reduced sensitivity: smaller increments per wheel tick
        const speed = e.shiftKey ? 0.008 : 0.002;
        setViewerScale((s) => {
            const next = s + delta * speed;
            return Math.min(MAX_SCALE, Math.max(MIN_SCALE, next));
        });
    };

    const handleViewerKey = (e: React.KeyboardEvent) => {
        if (e.key === "+" || e.key === "=") {
            // smaller keyboard increments
            setViewerScale((s) => Math.min(MAX_SCALE, s + 0.05));
        } else if (e.key === "-" || e.key === "_") {
            setViewerScale((s) => Math.max(MIN_SCALE, s - 0.05));
        } else if (e.key === "0") {
            setViewerScale(1);
        }
    };

    // Pointer drag handlers for pan
    const handlePointerDown = (e: React.PointerEvent) => {
        if (!viewerRef.current) return;
        // left button only
        if (e.button !== 0) return;
        isPanningRef.current = true;
        pointerStartRef.current = { x: e.clientX, y: e.clientY };
        panRef.current = { x: pan.x, y: pan.y };
        viewerRef.current.setPointerCapture?.(e.pointerId);
        e.preventDefault();
        e.stopPropagation();
    };

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!isPanningRef.current || !pointerStartRef.current) return;
        const dx = e.clientX - pointerStartRef.current.x;
        const dy = e.clientY - pointerStartRef.current.y;
        const next = { x: panRef.current.x + dx, y: panRef.current.y + dy };
        setPan(next);
        e.preventDefault();
        e.stopPropagation();
    };

    const endPan = (e?: React.PointerEvent) => {
        if (!isPanningRef.current) return;
        isPanningRef.current = false;
        pointerStartRef.current = null;
        try {
            viewerRef.current?.releasePointerCapture?.((e && e.pointerId) || 0);
        } catch (err) {
            // ignore
        }
    };

    const renderSection = (currentSection: string) => {
        // Check if it's a case study slug
        const study = caseStudies.find(s => s.id === currentSection);
        if (study) {
            return <CaseStudyRenderer study={study} />;
        }

        // Check if it's an automation template slug
        const template = automationTemplates.find(t => t.id === currentSection);
        if (template) {
            return (
                <section className="animate-fade-in">
                    <ScrollReveal>
                        <div className="space-y-8">
                            <div className="cs-hero-gradient rounded-2xl p-8 md:p-10 relative overflow-hidden">
                                <h2 className="text-2xl md:text-3xl font-bold mb-2">{template.title}</h2>
                                <p className="text-muted-foreground">{template.subtitle}</p>
                            </div>

                            <div className="cs-glass-card rounded-xl p-6 md:p-8">
                                <h3 className="text-xl font-bold mb-4">Overview</h3>
                                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                                    {template.overview}
                                </p>
                                <Button asChild variant="outline" className="cs-badge-tech border-accent/20 hover:bg-accent/10 transition-colors">
                                    <a href={template.downloadUrl} download>
                                        {template.downloadLabel}
                                    </a>
                                </Button>
                            </div>

                            {template.images.length === 1 ? (
                                <div className="cs-image-container max-w-2xl mx-auto">
                                    <img src={template.images[0].src} alt={template.images[0].alt} loading="lazy" className="w-full h-auto" />
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {template.images.map((img, i) => (
                                        <div key={i} className="cs-image-container">
                                            <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-auto" />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </ScrollReveal>
                </section>
            );
        }

        switch (currentSection) {
            case "introduction":
                return (
                    <section className="space-y-10 animate-fade-in">
                        {/* Hero Banner */}
                        <div className="cs-hero-gradient rounded-2xl p-8 md:p-12 relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(217_91%_60%/0.08),transparent_60%)]" />
                            <div className="relative z-10">
                                <Badge variant="outline" className="cs-badge-tech mb-4">
                                    Documentation Portal
                                </Badge>
                                <h1 className="text-4xl md:text-5xl font-bold mb-4 cs-gradient-text">
                                    Welcome to A2B AI Technologies
                                </h1>
                                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                                    A2B AI Technologies was founded with the vision of empowering startups and businesses
                                    to move seamlessly. Our mission is to simplify complexity through automation, AI-driven
                                    systems, and intelligent workflows.
                                </p>
                                <p className="text-base text-muted-foreground/80 mt-4 max-w-2xl">
                                    At A2B, we believe that automation isn't just about efficiency — it's about creating
                                    space for innovation, creativity, and scaling what truly matters.
                                </p>
                            </div>
                        </div>

                        {/* Quick Start Cards */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Getting Started</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="cs-glass-card rounded-xl p-6">
                                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                                        <FileText className="h-5 w-5 text-accent" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">Explore Case Studies</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Dive into real-world implementations — from sacred text video generation to
                                        AI-powered medical consultation systems.
                                    </p>
                                </div>
                                <div className="cs-glass-card rounded-xl p-6">
                                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                                        <Workflow className="h-5 w-5 text-accent" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">Automation Templates</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Download ready-to-use n8n workflow templates for AI assistants,
                                        research pipelines, and newsletter creation.
                                    </p>
                                </div>
                                <div className="cs-glass-card rounded-xl p-6">
                                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                                        <Laptop className="h-5 w-5 text-accent" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">Technology Stack</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Explore our curated technology foundation — from cloud infrastructure
                                        to AI platforms and integration architecture.
                                    </p>
                                </div>
                                <div className="cs-glass-card rounded-xl p-6">
                                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                                        <Library className="h-5 w-5 text-accent" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">Resources & FAQ</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Technical support guides, implementation tips, and a glossary
                                        of AI terminology to help you navigate our ecosystem.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="cs-section-divider" />

                        {/* Navigation Guide */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold">Navigating the Documentation</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Our documentation is structured for clarity and action. Each major category expands into
                                detailed subtopics like "Workflow Automation," "AI Integrations," "Dashboards & Analytics,"
                                and "Implementation Guides." Use the sidebar to explore each section.
                            </p>
                        </div>

                        {/* Who This Is For */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold">Who This Is For</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    "Business leaders evaluating AI automation",
                                    "Technical teams seeking integration guidance",
                                    "Startup founders exploring AI capabilities",
                                    "Enterprise teams considering workflow automation"
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                                        <span className="text-sm text-muted-foreground">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="cs-section-divider" />

                        {/* Lifosys Architecture Viewer */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold">Lifosys Architecture Overview</h2>
                            <p className="text-muted-foreground">
                                Explore our end-to-end system architecture. Use your mouse wheel to zoom, click and drag to pan, or use keyboard shortcuts (+/-/0).
                            </p>
                            <div
                                ref={viewerRef}
                                tabIndex={0}
                                className="relative w-full h-[600px] overflow-hidden rounded-xl border border-border/40 bg-muted/20 cursor-grab active:cursor-grabbing focus:outline-none focus:ring-2 focus:ring-accent/40"
                                onWheel={handleViewerWheel}
                                onKeyDown={handleViewerKey}
                                onPointerDown={handlePointerDown}
                                onPointerMove={handlePointerMove}
                                onPointerUp={endPan}
                                onPointerCancel={endPan}
                                onPointerLeave={endPan}
                                onMouseEnter={lockBodyScroll}
                                onMouseLeave={unlockBodyScroll}
                            >
                                <img
                                    src={lifosysImg}
                                    alt="Lifosys Architecture"
                                    draggable={false}
                                    style={{
                                        transform: `translate(${pan.x}px, ${pan.y}px) scale(${viewerScale})`,
                                        transformOrigin: "center center",
                                        transition: isPanningRef.current ? "none" : "transform 0.15s ease-out",
                                        userSelect: "none",
                                        pointerEvents: "none",
                                    }}
                                    className="absolute inset-0 w-full h-full object-contain"
                                />
                                {/* Zoom indicator */}
                                <div className="absolute bottom-3 right-3 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs text-muted-foreground border border-border/40 select-none">
                                    {Math.round(viewerScale * 100)}%
                                </div>
                            </div>
                            <p className="text-xs text-muted-foreground text-center">
                                Scroll to zoom • Click and drag to pan • Press 0 to reset
                            </p>
                        </div>
                    </section>
                );

            case "tech-stack":
                return (
                    <section className="animate-fade-in">
                        <ScrollReveal>
                            <div className="space-y-8">
                                <div className="cs-hero-gradient rounded-2xl p-8 md:p-10 relative overflow-hidden">
                                    <h2 className="text-3xl font-bold mb-4">Enterprise Technology Stack</h2>
                                    <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
                                        Our robust technology infrastructure is engineered for maximum reliability, scalability, and security, providing the foundation for mission-critical AI solutions.
                                    </p>
                                </div>

                                <div className="cs-glass-card rounded-2xl p-8 md:p-12">
                                    <div className="space-y-16">
                                        {/* Infrastructure Core */}
                                        <div className="cs-phase-block">
                                            <div className="cs-phase-number">01</div>
                                            <h3 className="text-2xl font-bold mb-8 text-accent">Infrastructure Core</h3>
                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                                <div className="space-y-6">
                                                    <h4 className="text-xl font-semibold text-primary">Cloud Ecosystem</h4>
                                                    <p className="text-muted-foreground leading-relaxed">
                                                        Our infrastructure backbone is built predominantly on <strong>Amazon Web Services (AWS)</strong>, providing enterprise-level security, global availability, and comprehensive service integration.
                                                    </p>
                                                    <div className="flex flex-wrap gap-2">
                                                        <span className="cs-badge-tech">AWS</span>
                                                        <span className="cs-badge-tech">Azure</span>
                                                        <span className="cs-badge-tech">GCP</span>
                                                        <span className="cs-badge-tech">DigitalOcean</span>
                                                    </div>
                                                </div>
                                                <div className="space-y-6">
                                                    <h4 className="text-xl font-semibold text-primary">Backend & Storage</h4>
                                                    <div className="space-y-4">
                                                        <div className="cs-capability-card">
                                                            <strong className="text-foreground">Supabase & PostgreSQL</strong>
                                                            <p className="text-sm text-muted-foreground mt-1">Real-time synchronization and enterprise-grade relational data management.</p>
                                                        </div>
                                                        <div className="cs-capability-card">
                                                            <strong className="text-foreground">Vector Intelligence</strong>
                                                            <p className="text-sm text-muted-foreground mt-1">Specialized storage including Pinecone, Weaviate, and Qdrant for semantic search.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="cs-section-divider" />

                                        {/* Development Architecture */}
                                        <div className="cs-phase-block">
                                            <div className="cs-phase-number">02</div>
                                            <h3 className="text-2xl font-bold mb-8 text-accent">Development Architecture</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div className="cs-capability-card">
                                                    <h4 className="text-lg font-semibold mb-3">Core Languages & IDEs</h4>
                                                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                                        A balanced stack of Python for AI/Backend and TypeScript for frontend, supported by AI-assisted development platforms.
                                                    </p>
                                                    <div className="flex flex-wrap gap-2">
                                                        <span className="cs-badge-tech">Python</span>
                                                        <span className="cs-badge-tech">TypeScript</span>
                                                        <span className="cs-badge-tech">Replit</span>
                                                        <span className="cs-badge-tech">Cursor</span>
                                                    </div>
                                                </div>
                                                <div className="cs-capability-card">
                                                    <h4 className="text-lg font-semibold mb-3">Integration & Voice</h4>
                                                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                                        Strategic partnerships enabling 850+ pre-built integrations and industry-leading neural voice synthesis.
                                                    </p>
                                                    <div className="flex flex-wrap gap-2">
                                                        <span className="cs-badge-tech">n8n</span>
                                                        <span className="cs-badge-tech">ElevenLabs</span>
                                                        <span className="cs-badge-tech">Voice AI</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="cs-section-divider" />

                                        {/* AI Methodology */}
                                        <div className="cs-phase-block">
                                            <div className="cs-phase-number">03</div>
                                            <h3 className="text-2xl font-bold mb-8 text-accent">Artificial Intelligence Platform</h3>
                                            <div className="space-y-8">
                                                <div className="cs-glass-card border-none bg-accent/5 p-6 rounded-xl">
                                                    <p className="text-muted-foreground italic text-center">
                                                        "A2B maintains a <strong>model-agnostic philosophy</strong>, selection optimal LLMs based on performance, budget, and business objectives."
                                                    </p>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div className="space-y-4">
                                                        <h4 className="text-lg font-semibold flex items-center gap-2">
                                                            <span className="w-1.5 h-4 bg-accent rounded-full" />
                                                            RAG Pipeline
                                                        </h4>
                                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                                            Sophisticated context injection architectures that minimize factual errors by anchoring responses to proprietary data.
                                                        </p>
                                                    </div>
                                                    <div className="space-y-4">
                                                        <h4 className="text-lg font-semibold flex items-center gap-2">
                                                            <span className="w-1.5 h-4 bg-accent rounded-full" />
                                                            Agent Orchestration
                                                        </h4>
                                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                                            Autonomous agents performing active tasks—searching, summarizing, and triggering cross-system workflows.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </section>
                );

            case "resources":
                return (
                    <section className="animate-fade-in">
                        <ScrollReveal>
                            <div className="space-y-8">
                                <div className="cs-hero-gradient rounded-2xl p-8 md:p-10 relative overflow-hidden">
                                    <h2 className="text-3xl font-bold mb-4">Additional Resources</h2>
                                    <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
                                        Technical support, implementation guides, and terminology reference for partners and decision-makers.
                                    </p>
                                </div>

                                <div className="cs-glass-card rounded-2xl p-8 md:p-12">
                                    <div className="space-y-16">
                                        {/* AI Development FAQ */}
                                        <div className="cs-phase-block">
                                            <div className="cs-phase-number">01</div>
                                            <h3 className="text-2xl font-bold mb-8 text-accent">AI Development & Implementation</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {[
                                                    {
                                                        q: "How do you maintain long-term stability?",
                                                        a: "Our systems use component-based architecture with versioned APIs and comprehensive documentation for isolated updates."
                                                    },
                                                    {
                                                        q: "What safeguards exist against inaccuracies?",
                                                        a: "Validation frameworks like RAGAS and manual reviews track model behavior, with verification against known-accurate data."
                                                    },
                                                    {
                                                        q: "Is on-premises deployment supported?",
                                                        a: "Yes, we support VPC configurations and dedicated private environments with standard IAM and security credentials."
                                                    },
                                                    {
                                                        q: "Do you support international languages?",
                                                        a: "Certainly. We implement multilingual model configurations and localization frameworks tailored to global engagement."
                                                    }
                                                ].map((faq, i) => (
                                                    <div key={i} className="cs-capability-card">
                                                        <h4 className="text-lg font-semibold mb-3 text-primary">{faq.q}</h4>
                                                        <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="cs-section-divider" />

                                        {/* Terminology Reference */}
                                        <div className="cs-phase-block">
                                            <div className="cs-phase-number">02</div>
                                            <h3 className="text-2xl font-bold mb-8 text-accent">Technical Terminology</h3>
                                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                                                {[
                                                    { label: "LLM", desc: "Large Language Models trained on extensive datasets." },
                                                    { label: "RAG", desc: "Retrieval-Augmented Generation for factual reliability." },
                                                    { label: "Vector DB", desc: "Similarity-based search for semantic meaning." },
                                                    { label: "Embeddings", desc: "Numerical representations of intent and context." },
                                                    { label: "HITL", desc: "Human-in-the-loop for verified decision making." },
                                                    { label: "CI/CD", desc: "Automated delivery and validation pipelines." }
                                                ].map((term, i) => (
                                                    <div key={i} className="cs-metric-card p-4">
                                                        <div className="text-accent font-bold mb-1">{term.label}</div>
                                                        <div className="text-xs text-muted-foreground">{term.desc}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </section>
                );

            default:
                return null;
        }
    };

    return (
        <>
            <SEO
                title="AI Automation Case Studies | Real-World Success Stories | A2B AI Technologies"
                description="Explore detailed case studies of A2B's AI automation implementations: sacred text video generation, medical WhatsApp chatbots, brand image AI, and more. See real ROI results."
                canonical="https://a2b.services/case-studies"
                schema={caseStudySchema}
            />
            <CaseStudyLayout>
                {(currentSection) => renderSection(currentSection)}
            </CaseStudyLayout>
        </>
    );
};

export default CaseStudies;
