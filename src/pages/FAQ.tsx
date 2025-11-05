import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";

const FAQ = () => {
  return (
    <>
      <SEO 
        title="FAQ - A2B AI Solutions & Enterprise Automation"
        description="Frequently asked questions about A2B's AI solutions, pricing, technical capabilities, implementation process, and support services for enterprise automation."
        canonical="https://a2b.services/faq"
      />
      
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
                <p className="text-xl text-muted-foreground">
                  Everything you need to know about A2B's AI solutions and services
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              
              {/* Getting Started Section */}
              <ScrollReveal>
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Getting Started with A2B</h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="what-is-a2b">
                      <AccordionTrigger>What does A2B do?</AccordionTrigger>
                      <AccordionContent>
                        A2B is an AI solutions agency that designs, builds, and deploys custom AI systems for businesses. We create intelligent automation, conversational AI agents, knowledge management systems, voice assistants, and workflow integrations that help organizations scale efficiently and deliver better customer experiences.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="typical-clients">
                      <AccordionTrigger>Who are your typical clients?</AccordionTrigger>
                      <AccordionContent>
                        We work with growth-stage startups, enterprise technology teams, e-commerce businesses, professional services firms, and digital agencies. Our clients range from companies looking to automate their first workflow to large organizations implementing enterprise-wide AI transformation.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="industries">
                      <AccordionTrigger>What industries do you specialize in?</AccordionTrigger>
                      <AccordionContent>
                        We have experience across multiple sectors including SaaS, e-commerce, financial services, healthcare, education, marketing agencies, and professional services. Our model-agnostic approach and flexible infrastructure allow us to adapt to industry-specific requirements and compliance needs.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="why-different">
                      <AccordionTrigger>How is A2B different from other AI agencies?</AccordionTrigger>
                      <AccordionContent>
                        We combine deep technical expertise with rapid deployment capabilities. Our model-agnostic approach means we're not locked into a single AI provider—we select the best technology for your specific needs. With 850+ ready-to-use integrations and multi-cloud infrastructure experience, we can connect to your existing systems and deliver production-ready solutions quickly.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </Card>
              </ScrollReveal>

              {/* Project Scope & Pricing */}
              <ScrollReveal>
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Project Scope & Pricing</h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="cost">
                      <AccordionTrigger>How much does it cost to build an AI solution with A2B?</AccordionTrigger>
                      <AccordionContent>
                        Project costs vary based on complexity, scope, and requirements. Simple automation workflows might start around $5,000-$15,000, while comprehensive AI systems with custom training and enterprise integrations typically range from $30,000-$100,000+. We provide detailed quotes after understanding your specific needs during a discovery consultation.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="timeline">
                      <AccordionTrigger>How long does a typical project take?</AccordionTrigger>
                      <AccordionContent>
                        Timeline depends on project complexity. Simple chatbots or workflow automations can be deployed in 2-4 weeks. More sophisticated systems like custom RAG implementations, voice AI solutions, or enterprise integrations typically take 6-12 weeks. We'll provide a realistic timeline during our initial planning phase.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="support">
                      <AccordionTrigger>Do you offer ongoing support and maintenance?</AccordionTrigger>
                      <AccordionContent>
                        Yes, we provide flexible support packages including monitoring, updates, performance optimization, and technical assistance. Most clients opt for monthly retainer agreements that include system maintenance, feature enhancements, and priority support access.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="budget">
                      <AccordionTrigger>Can you work within our existing budget?</AccordionTrigger>
                      <AccordionContent>
                        We're experienced at delivering value across various budget ranges. During discovery, we'll identify high-impact features that fit your budget and can recommend phased approaches that deliver quick wins while building toward a comprehensive solution over time.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </Card>
              </ScrollReveal>

              {/* Technical Capabilities */}
              <ScrollReveal>
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Technical Capabilities</h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="ai-tech">
                      <AccordionTrigger>What AI technologies and models do you use?</AccordionTrigger>
                      <AccordionContent>
                        We're model-agnostic and work with all major LLM providers including OpenAI, Anthropic, Google, and others. We select models based on your specific requirements—whether you prioritize speed, accuracy, cost-efficiency, or specialized capabilities. Our infrastructure supports rapid testing across providers to identify optimal performance.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="integration">
                      <AccordionTrigger>Can you integrate with our existing systems?</AccordionTrigger>
                      <AccordionContent>
                        Absolutely. Through our partnership with n8n, we have access to 850+ pre-built integrations covering major platforms like Salesforce, HubSpot, Shopify, Slack, Google Workspace, Microsoft 365, and countless others. For custom systems, we build API integrations tailored to your infrastructure.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="security">
                      <AccordionTrigger>What's your approach to data security?</AccordionTrigger>
                      <AccordionContent>
                        Security is foundational to our architecture. We implement end-to-end encryption, use secure credential management systems, follow least-privilege access controls, and can deploy solutions in your private cloud or on-premises environment. We're experienced with HIPAA, SOC 2, and other compliance frameworks.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="training-data">
                      <AccordionTrigger>Do you provide training data for AI models?</AccordionTrigger>
                      <AccordionContent>
                        We work with your existing data—documents, knowledge bases, conversation histories, or other proprietary information. We handle data preprocessing, cleaning, and formatting. If additional training data is needed, we can advise on data collection strategies or synthetic data generation approaches.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="mistakes">
                      <AccordionTrigger>What happens if the AI makes mistakes?</AccordionTrigger>
                      <AccordionContent>
                        We implement multiple safeguards including validation frameworks, hallucination detection, human-in-the-loop review processes, and fallback mechanisms. Our systems include monitoring and logging so we can quickly identify and correct issues. We also establish clear escalation paths for edge cases.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </Card>
              </ScrollReveal>

              {/* Implementation & Deployment */}
              <ScrollReveal>
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Implementation & Deployment</h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="hosting">
                      <AccordionTrigger>Where will the AI system be hosted?</AccordionTrigger>
                      <AccordionContent>
                        We primarily deploy on AWS, but support multi-cloud environments including Azure, GCP, and DigitalOcean based on your needs. We also accommodate private cloud and on-premises deployments for organizations with specific security or compliance requirements.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="self-hosting">
                      <AccordionTrigger>Can we host the solution on our own infrastructure?</AccordionTrigger>
                      <AccordionContent>
                        Yes, we support client-hosted deployments through VPC configurations or private cloud setups. This requires IAM provisioning and security credential setup. Self-hosted options include additional deployment fees compared to our fully-managed hosting.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="updates">
                      <AccordionTrigger>How do you handle updates and new features?</AccordionTrigger>
                      <AccordionContent>
                        We establish CI/CD pipelines using GitHub Actions or n8n workflows that enable controlled, tested deployments. All updates go through staging environments before production release. Clients on maintenance plans receive regular feature enhancements and performance optimizations.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="model-switch">
                      <AccordionTrigger>What if we want to switch AI models later?</AccordionTrigger>
                      <AccordionContent>
                        Our architecture is designed for flexibility. Because we build model-agnostic systems, switching providers or models is straightforward. We can benchmark new models, conduct A/B testing, and migrate without rebuilding your entire solution.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </Card>
              </ScrollReveal>

              {/* Use Cases & Applications */}
              <ScrollReveal>
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Use Cases & Applications</h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="chatbots">
                      <AccordionTrigger>Can you build custom chatbots for our website?</AccordionTrigger>
                      <AccordionContent>
                        Yes, we specialize in conversational AI systems that can handle customer inquiries, qualify leads, schedule appointments, provide product recommendations, and more. These can be integrated into websites, mobile apps, or messaging platforms like WhatsApp, Slack, or SMS.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="voice-ai">
                      <AccordionTrigger>Do you build voice AI solutions?</AccordionTrigger>
                      <AccordionContent>
                        Absolutely. We use ElevenLabs and other voice synthesis technologies to create natural-sounding voice agents for phone support, interactive voice response (IVR) systems, virtual assistants, and voice-enabled applications.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="workflows">
                      <AccordionTrigger>Can you help automate our internal workflows?</AccordionTrigger>
                      <AccordionContent>
                        Yes, workflow automation is a core capability. We can automate data entry, document processing, email responses, reporting, scheduling, and virtually any repetitive task. Our 850+ integrations enable seamless connectivity across your entire tech stack.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="rag">
                      <AccordionTrigger>What is RAG and do we need it?</AccordionTrigger>
                      <AccordionContent>
                        Retrieval-Augmented Generation (RAG) is a technique that grounds AI responses in your specific knowledge base—documents, databases, or proprietary information. You need RAG if you want AI to answer questions accurately using your company's information rather than general knowledge. It's essential for customer support, internal knowledge management, and domain-specific applications.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="data-analysis">
                      <AccordionTrigger>Can you help us analyze large amounts of data?</AccordionTrigger>
                      <AccordionContent>
                        Yes, we build AI systems that can process documents, extract insights, identify patterns, generate summaries, and create reports from structured and unstructured data. This includes text analysis, sentiment analysis, document classification, and more.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </Card>
              </ScrollReveal>

              {/* Results & ROI */}
              <ScrollReveal>
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Results & ROI</h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="measure-success">
                      <AccordionTrigger>How do we measure success?</AccordionTrigger>
                      <AccordionContent>
                        Success metrics depend on your goals. Common KPIs include response time reduction, cost per interaction, customer satisfaction scores, conversion rate improvements, time saved per employee, and automation rate. We establish baseline metrics and tracking systems during implementation.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="expected-roi">
                      <AccordionTrigger>What kind of ROI can we expect?</AccordionTrigger>
                      <AccordionContent>
                        ROI varies by use case. Clients typically see significant returns through reduced labor costs (40-70% reduction in manual tasks), improved conversion rates (15-30% increases), faster response times (reducing hours to minutes), and scalability gains (handling 10x volume without proportional cost increases).
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="time-to-results">
                      <AccordionTrigger>How quickly will we see results?</AccordionTrigger>
                      <AccordionContent>
                        Initial results often appear within the first few weeks as systems go live. Full ROI typically materializes over 3-6 months as teams adapt workflows and the AI system learns from real-world usage. We provide regular performance reports to track progress against established goals.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </Card>
              </ScrollReveal>

              {/* Partnership & Process */}
              <ScrollReveal>
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Partnership & Process</h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="engagement">
                      <AccordionTrigger>What's your typical engagement process?</AccordionTrigger>
                      <AccordionContent>
                        We start with a discovery consultation to understand your goals and challenges. Next, we conduct technical assessment and scoping. Then we move to design and prototyping, followed by development and testing. After deployment, we provide training and transition to ongoing support.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="nda">
                      <AccordionTrigger>Do you sign NDAs and data protection agreements?</AccordionTrigger>
                      <AccordionContent>
                        Yes, we routinely sign NDAs, DPAs, and other confidentiality agreements. Protecting client data and intellectual property is paramount to our business.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="examples">
                      <AccordionTrigger>Can we see examples of your previous work?</AccordionTrigger>
                      <AccordionContent>
                        We maintain a portfolio of case studies and can arrange references upon request. Due to confidentiality agreements, some client work cannot be publicly disclosed, but we can discuss similar implementations and outcomes during consultations.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="white-label">
                      <AccordionTrigger>Do you offer white-label solutions for agencies?</AccordionTrigger>
                      <AccordionContent>
                        Yes, we partner with marketing agencies, consultancies, and software companies who want to offer AI solutions under their own brand. We provide white-label development, technical support, and can work directly with your clients while you maintain the primary relationship.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="satisfaction">
                      <AccordionTrigger>What if we're not satisfied with the results?</AccordionTrigger>
                      <AccordionContent>
                        We work collaboratively throughout development with regular check-ins and iterative refinement. If outputs don't meet specifications, we make adjustments until expectations are met. Our contracts include clear acceptance criteria and revision policies.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </Card>
              </ScrollReveal>

              {/* Technical Support */}
              <ScrollReveal>
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Technical Support</h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="post-launch">
                      <AccordionTrigger>What support is included after launch?</AccordionTrigger>
                      <AccordionContent>
                        Initial projects include a warranty period (typically 30-90 days) covering bug fixes and technical issues. Beyond that, we offer tiered support packages ranging from business-hours email support to 24/7 priority response with dedicated account management.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="daily-contact">
                      <AccordionTrigger>Who will we work with day-to-day?</AccordionTrigger>
                      <AccordionContent>
                        You'll have a dedicated project lead who serves as your primary contact. Depending on project complexity, you may also work directly with our AI engineers, infrastructure specialists, and integration experts. We maintain consistent communication through your preferred channels.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="issues">
                      <AccordionTrigger>What happens if something breaks?</AccordionTrigger>
                      <AccordionContent>
                        Our support packages include monitoring and incident response. For critical issues, we provide rapid response with escalation protocols. All systems include logging and diagnostics that help us quickly identify and resolve problems.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="training">
                      <AccordionTrigger>Can you provide training for our team?</AccordionTrigger>
                      <AccordionContent>
                        Yes, we include training as part of implementation. This covers system operation, basic troubleshooting, content management, and best practices. We can provide additional training sessions for new team members or advanced functionality as needed.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQ;