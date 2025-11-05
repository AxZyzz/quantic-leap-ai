import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";
import { Target, Lightbulb, TrendingUp, Users, CheckCircle2, Linkedin } from "lucide-react";

import rahulPhoto from '@/assets/team/rahul.jpg';
import amanphoto from '@/assets/team/aman.jpg';
import danyPhoto from '@/assets/team/dany.jpg';
import akhilPhoto from '@/assets/team/akhil.jpg';

const About = () => {
  const team = [
    {
      name: "Rahul V K",
      role: "CEO & Founder",
      bio: "AI Automation Expert",
      image: rahulPhoto,
      linkedin: "https://www.linkedin.com/in/rahul-v-k/"
    },
    {
      name: "Aman Xavier",
      role: "CTO & co-founder",
      bio: "AI Automation Expert",
      image: amanphoto,
      linkedin: "https://www.linkedin.com/in/aman-xavier/"
    },
    {
      name: "Dany Stephen",
      role: "COO & co-founder",
      bio: "Marketing Expert",
      image: danyPhoto,
      linkedin: "https://www.linkedin.com/in/dany-stephen/"
    },
    {
      name: "Akhil M S",
      role: "CMO & co-founder",
      bio: "Marketing Expert",
      image: akhilPhoto,
      linkedin: "https://www.linkedin.com/in/akhil-ams/"
    },
  ];

  const process = [
    {
      number: "01",
      title: "Discovery & Scoping",
      description:
        "Deep dive into your business processes, data landscape assessment, and stakeholder journey mapping to understand your unique challenges.",
      points: [
        "Process audit and analysis",
        "Data infrastructure review",
        "Stakeholder interviews",
        "Opportunity identification",
      ],
    },
    {
      number: "02",
      title: "Strategy & Planning",
      description:
        "ROI-backed solution design with clear timelines, milestones, and success metrics tailored to your business objectives.",
      points: [
        "Custom solution architecture",
        "ROI projections and modeling",
        "Implementation roadmap",
        "Risk assessment and mitigation",
      ],
    },
    {
      number: "03",
      title: "Development & Implementation",
      description:
        "Rapid sprint cycles with modular development approach, continuous testing, and validation to ensure quality at every step.",
      points: [
        "Agile development sprints",
        "Continuous integration and testing",
        "Regular progress updates",
        "Quality assurance protocols",
      ],
    },
    {
      number: "04",
      title: "Deployment & Training",
      description:
        "Secure system deployment with comprehensive team training, documentation, and enablement to ensure successful adoption.",
      points: [
        "Enterprise-grade security deployment",
        "Team training and workshops",
        "Comprehensive documentation",
        "Change management support",
      ],
    },
    {
      number: "05",
      title: "Optimization & Support",
      description:
        "Ongoing performance monitoring, continuous improvements, and strategic consultation to maximize long-term value.",
      points: [
        "Performance tracking and analytics",
        "Regular optimization cycles",
        "Strategic consultation sessions",
        "24/7 technical support",
      ],
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We measure success by your ROI and business outcomes, not just deliverables.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Leveraging cutting-edge AI technologies to solve complex business challenges.",
    },
    {
      icon: TrendingUp,
      title: "Long-Term Partnership",
      description: "We're invested in your success beyond the initial implementation.",
    },
    {
      icon: Users,
      title: "Team Enablement",
      description: "Empowering your team to understand, maintain, and expand AI capabilities.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Your Strategic AI Partner
              </h1>
              <p className="text-xl text-muted-foreground">
                We're not just another AI agency. We're a dedicated team of engineers, data
                scientists, and business strategists committed to building AI solutions that
                compound value over time.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <ScrollReveal>
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We exist to help businesses scale operations without scaling headcount. Through
                  intelligent automation and custom AI solutions, we enable companies to achieve
                  more with less—turning overlooked inputs into profit-driving outputs.
                </p>
                <p className="text-lg text-muted-foreground">
                  Founded in 2020, A2B was born from the frustration of seeing businesses struggle
                  with generic AI solutions that didn't fit their unique needs. We believe every
                  company deserves AI implementations that are tailored, secure, and built for
                  long-term success.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {values.map((value) => (
                  <Card key={value.title}>
                    <CardContent className="pt-6">
                      <value.icon className="h-8 w-8 text-accent mb-3" />
                      <h3 className="font-semibold mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-blue-600">Meet The Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Expert engineers and strategists dedicated to your success
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 100}>
                <Card className="text-center hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <CardContent className="pt-6 flex-1 flex flex-col">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                      <p className="text-sm text-accent mb-3">{member.role}</p>
                      <p className="text-sm text-muted-foreground">{member.bio}</p>
                      {member.linkedin && (
                        <div className="mt-3">
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${member.name} LinkedIn`}
                            className="text-sm text-blue-600 hover:underline inline-flex items-center justify-center"
                          >
                            <Linkedin className="h-4 w-4 mr-2" />
                            <span>LinkedIn</span>
                          </a>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">How We Work</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A proven methodology that delivers results
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-12">
            {process.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 100}>
                <div className="relative pl-20">
                  <div className="absolute left-0 top-0 w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {step.number}
                    </span>
                  </div>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {step.points.map((point) => (
                          <li key={point} className="flex items-start text-sm">
                            <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "300%", label: "Average ROI" },
              { number: "24/7", label: "Support Available" },
              { number: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 100}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
