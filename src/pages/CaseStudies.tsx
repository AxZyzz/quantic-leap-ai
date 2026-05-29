import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import SEO from "@/components/SEO";
import { caseStudySchema } from "@/lib/schemas";
import { caseStudies, automationTemplates } from "@/data/casestudies";
import CaseStudyRenderer from "@/components/CaseStudyRenderer";

const CaseStudies = () => {

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
