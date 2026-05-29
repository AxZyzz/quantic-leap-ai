import ScrollReveal from "@/components/ScrollReveal";
import type { CaseStudy } from "@/data/casestudies";
import InteractiveImageViewer from "@/components/InteractiveImageViewer";

interface CaseStudyRendererProps {
  study: CaseStudy;
}

const convertMarkdown = (text: string): string => {
  return text.split('\n').map(line => {
    const trimmed = line.trim();
    const convertBold = (s: string) => s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    if (trimmed.startsWith('-')) {
      return `<li class="ml-4 mb-1">${convertBold(trimmed.substring(1).trim())}</li>`;
    }
    return `<p class="mb-2">${convertBold(trimmed)}</p>`;
  }).join('');
};

const CaseStudyRenderer = ({ study }: CaseStudyRendererProps) => {
  return (
    <section className="animate-fade-in">
      <ScrollReveal>
        <div className="space-y-8">
          {/* Hero Header */}
          <div className="cs-hero-gradient rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(260_80%_55%/0.06),transparent_50%)]" />
            <div className="relative z-10">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="cs-badge-tech">{study.industry}</span>
                <span className="cs-badge-tech">{study.size}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{study.client}</h2>
            </div>
          </div>

          {/* Challenge Section */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <span className="w-1.5 h-6 rounded-full bg-destructive" />
              The Challenge
            </h3>
            <p className="text-muted-foreground whitespace-pre-wrap text-sm md:text-base leading-relaxed pl-5">
              {study.challenge}
            </p>
          </div>

          <div className="cs-section-divider" />

          {/* Solution Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <span className="w-1.5 h-6 rounded-full bg-accent" />
              The Solution
            </h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed pl-5">
              {study.solution}
            </p>
            <div className="flex flex-wrap gap-2 pl-5">
              {study.technology.map((tech) => (
                <span key={tech} className="cs-badge-tech text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Primary Image */}
          {study.images && study.images[0] && (
            study.images[0].interactive ? (
              <InteractiveImageViewer
                src={study.images[0].src}
                alt={study.images[0].alt}
                caption={study.images[0].caption}
              />
            ) : (
              <div className="cs-image-container">
                <img
                  src={study.images[0].src}
                  alt={study.images[0].alt}
                  className="w-full h-auto"
                />
                <p className="text-xs text-center text-muted-foreground py-3 bg-muted/20">
                  {study.images[0].caption}
                </p>
              </div>
            )
          )}

          {/* Implementation Details (Phases) */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold">Implementation Details</h3>
            {Object.values(study.details).map((phase, index) => (
              <div key={index} className="cs-phase-block pb-6">
                <div className="cs-phase-number">{index + 1}</div>
                <h4 className="text-lg font-semibold mb-2">{phase.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  <span className="font-medium text-foreground/80">Trigger:</span> {phase.trigger}
                </p>
                <div className="space-y-3">
                  {phase.capabilities.map((capability, capIndex) => (
                    <div key={capIndex} className="cs-capability-card">
                      <h5 className="text-sm md:text-base font-semibold mb-2">{capability.title}</h5>
                      <div className="text-muted-foreground text-sm leading-relaxed">
                        {capability.description.includes('-') ? (
                          <div dangerouslySetInnerHTML={{ __html: convertMarkdown(capability.description) }} />
                        ) : (
                          <p>{capability.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Secondary Image */}
          {study.images && study.images[1] && (
            study.images[1].interactive ? (
              <InteractiveImageViewer
                src={study.images[1].src}
                alt={study.images[1].alt}
                caption={study.images[1].caption}
              />
            ) : (
              <div className="cs-image-container">
                <img
                  src={study.images[1].src}
                  alt={study.images[1].alt}
                  className="w-full h-auto"
                />
                <p className="text-xs text-center text-muted-foreground py-3 bg-muted/20">
                  {study.images[1].caption}
                </p>
              </div>
            )
          )}

          {/* Extra Images (3+) */}
          {study.images && study.images.length > 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {study.images.slice(2).map((img, i) => (
                img.interactive ? (
                  <div key={i} className="md:col-span-2">
                    <InteractiveImageViewer
                      src={img.src}
                      alt={img.alt}
                      caption={img.caption}
                    />
                  </div>
                ) : (
                  <div key={i} className="cs-image-container">
                    <img src={img.src} alt={img.alt} className="w-full h-auto" />
                    <p className="text-xs text-center text-muted-foreground py-3 bg-muted/20">
                      {img.caption}
                    </p>
                  </div>
                )
              ))}
            </div>
          )}

          <div className="cs-section-divider" />

          {/* Key Metrics */}
          <div>
            <h3 className="text-xl font-bold mb-6">Key Metrics</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {study.results.map((result, i) => (
                <div
                  key={result.label}
                  className="cs-metric-card text-center p-4 md:p-5 rounded-xl"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <result.icon className="h-6 w-6 md:h-7 md:w-7 text-accent mx-auto mb-3" />
                  <div className="text-xl md:text-2xl font-bold mb-1 cs-gradient-text">
                    {result.metric}
                  </div>
                  <div className="text-xs text-muted-foreground">{result.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ROI Section */}
          <div className="cs-glass-card rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Return on Investment</h3>
            <div
              className="text-sm md:text-base text-muted-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: convertMarkdown(study.roi) }}
            />
          </div>

          {/* Testimonial */}
          <div className="cs-testimonial">
            <p className="text-base md:text-lg italic mb-3 pl-6">{study.testimonial}</p>
            <p className="text-xs md:text-sm text-muted-foreground pl-6">— {study.author}</p>
          </div>

          {/* Conclusion */}
          <div className="text-center py-4">
            <p className="text-base md:text-lg font-medium cs-gradient-text inline-block">
              {study.conclusion}
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default CaseStudyRenderer;
