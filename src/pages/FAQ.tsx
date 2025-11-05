import { useState, useMemo } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import { faqSchema } from "@/lib/faq-schema";
import Search from "@/components/ui/search";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

// Define FAQ data with a clear hierarchy
const faqData: FAQItem[] = [
  // Getting Started
  {
    id: "what-is-a2b",
    category: "Getting Started",
    question: "What does A2B do?",
    answer: "A2B is an AI solutions agency that designs, builds, and deploys custom AI systems for businesses. We create intelligent automation, conversational AI agents, knowledge management systems, voice assistants, and workflow integrations that help organizations scale efficiently and deliver better customer experiences."
  },
  {
    id: "typical-clients",
    category: "Getting Started",
    question: "Who are your typical clients?",
    answer: "We work with growth-stage startups, enterprise technology teams, e-commerce businesses, professional services firms, and digital agencies. Our clients range from companies looking to automate their first workflow to large organizations implementing enterprise-wide AI transformation."
  },
  
  // Pricing & Timeline
  {
    id: "cost",
    category: "Pricing & Timeline",
    question: "How much does it cost to build an AI solution with A2B?",
    answer: "Project costs vary based on complexity, scope, and requirements. Simple automation workflows might start around $500-$10,000, while comprehensive AI systems with custom training and enterprise integrations typically range from $10,000-$100,000+. We provide detailed quotes after understanding your specific needs during a discovery consultation."
  },
  {
    id: "timeline",
    category: "Pricing & Timeline",
    question: "How long does a typical project take?",
    answer: "Timeline depends on project complexity. Simple chatbots or workflow automations can be deployed in 2-4 weeks. More sophisticated systems like custom RAG implementations, voice AI solutions, or enterprise integrations typically take 6-12 weeks. We'll provide a realistic timeline during our initial planning phase."
  },
  
  // Technical Solutions
  {
    id: "ai-tech",
    category: "Technical Solutions",
    question: "What AI technologies and models do you use?",
    answer: "We're model-agnostic and work with all major LLM providers including OpenAI, Anthropic, Google, and others. We select models based on your specific requirements—whether you prioritize speed, accuracy, cost-efficiency, or specialized capabilities."
  },
  {
    id: "integration",
    category: "Technical Solutions",
    question: "Can you integrate with our existing systems?",
    answer: "Yes, we have access to 850+ pre-built integrations covering major platforms like Salesforce, HubSpot, Shopify, Slack, Google Workspace, Microsoft 365, and countless others. For custom systems, we build API integrations tailored to your infrastructure."
  },
  {
    id: "security",
    category: "Technical Solutions",
    question: "What's your approach to data security?",
    answer: "Security is foundational to our architecture. We implement end-to-end encryption, use secure credential management systems, follow least-privilege access controls, and can deploy solutions in your private cloud or on-premises environment."
  },
  
  // Support & Maintenance
  {
    id: "support",
    category: "Support & Maintenance",
    question: "What kind of support do you provide?",
    answer: "We offer comprehensive support packages including 24/7 monitoring, regular updates, performance optimization, and technical assistance. Our support team is always available to help with any issues or questions."
  },
  {
    id: "training",
    category: "Support & Maintenance",
    question: "Do you provide training for our team?",
    answer: "Yes, we include comprehensive training as part of implementation. This covers system operation, troubleshooting, content management, and best practices. We also offer ongoing training sessions for new team members or advanced features."
  },
  
  // Implementation Process
  {
    id: "implementation",
    category: "Implementation Process",
    question: "What's your implementation process?",
    answer: "Our process starts with discovery and planning, followed by design and prototyping. We then move to development and testing, with regular checkpoints for feedback. Finally, we handle deployment, training, and transition to ongoing support."
  },
  {
    id: "customization",
    category: "Implementation Process",
    question: "How customizable are your solutions?",
    answer: "Our solutions are fully customizable to your specific needs. We can adapt workflows, integrate with your existing tools, and create custom features to match your exact requirements."
  }
];

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredFAQs = useMemo(() => {
    if (!searchQuery.trim()) return faqData;
    
    const query = searchQuery.toLowerCase();
    return faqData.filter(
      item => 
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const groupedFAQs = useMemo(() => {
    return filteredFAQs.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {} as Record<string, FAQItem[]>);
  }, [filteredFAQs]);

  return (
    <>
      <SEO 
        title="FAQ - A2B AI Solutions & Enterprise Automation"
        description="Frequently asked questions about A2B's AI solutions, pricing, technical capabilities, implementation process, and support services for enterprise automation."
        canonical="https://a2b.services/faq"
        schema={faqSchema}
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

        {/* Search Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Search
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search questions..."
              />
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {Object.entries(groupedFAQs).map(([category, items]) => (
                <ScrollReveal key={category}>
                  <Card className="p-6">
                    <h2 className="text-2xl font-bold mb-6">{category}</h2>
                    <Accordion type="single" collapsible className="w-full">
                      {items.map((item) => (
                        <AccordionItem key={item.id} value={item.id}>
                          <AccordionTrigger>{item.question}</AccordionTrigger>
                          <AccordionContent>
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </Card>
                </ScrollReveal>
              ))}

              {Object.keys(groupedFAQs).length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No questions found matching your search.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQ;