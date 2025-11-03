import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ScrollReveal from "@/components/ScrollReveal";
import { Mail, Phone, Linkedin, Calendar, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      projectType: "",
      budget: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Let's Build Something Great</h1>
              <p className="text-xl text-muted-foreground">
                Schedule a free consultation to discuss your AI automation needs and discover how
                we can help you scale.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <Card>
                  <CardContent className="pt-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="company">Company Name</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Acme Inc."
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="projectType">Project Type</Label>
                          <Select
                            value={formData.projectType}
                            onValueChange={(value) =>
                              setFormData({ ...formData, projectType: value })
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="workflow">Workflow Automation</SelectItem>
                              <SelectItem value="agents">AI Agents</SelectItem>
                              <SelectItem value="data">Data Systems</SelectItem>
                              <SelectItem value="consulting">Strategy & Consulting</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="budget">Budget Range</Label>
                          <Select
                            value={formData.budget}
                            onValueChange={(value) =>
                              setFormData({ ...formData, budget: value })
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="10-25k">$10K - $25K</SelectItem>
                              <SelectItem value="25-50k">$25K - $50K</SelectItem>
                              <SelectItem value="50-100k">$50K - $100K</SelectItem>
                              <SelectItem value="100k+">$100K+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message">Project Description *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project, challenges, and goals..."
                          rows={6}
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="hero"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <ScrollReveal delay={100}>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Mail className="h-5 w-5 text-accent mr-3 mt-1" />
                        <div>
                          <p className="font-medium">Email</p>
                          <a
                            href="mailto:hello@a2bagency.com"
                            className="text-muted-foreground hover:text-accent"
                          >
                            hello@a2bagency.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Phone className="h-5 w-5 text-accent mr-3 mt-1" />
                        <div>
                          <p className="font-medium">Phone</p>
                          <a
                            href="tel:+15551234567"
                            className="text-muted-foreground hover:text-accent"
                          >
                            +1 (555) 123-4567
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Linkedin className="h-5 w-5 text-accent mr-3 mt-1" />
                        <div>
                          <p className="font-medium">LinkedIn</p>
                          <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-accent"
                          >
                            Connect with us
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <Card className="bg-gradient-to-br from-accent/10 to-primary/10">
                  <CardContent className="pt-6">
                    <Calendar className="h-8 w-8 text-accent mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Book a Discovery Call</h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Prefer to schedule a call directly? Choose a time that works for you.
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <a
                        href="https://calendly.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Calendar
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-3">Business Hours</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monday - Friday</span>
                        <span>9:00 AM - 6:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Response Time</span>
                        <span>Within 24 hours</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
              <p className="text-muted-foreground mb-8">
                Check out our frequently asked questions or reach out directly.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6 text-left">
                    <h3 className="font-semibold mb-2">What's the typical timeline?</h3>
                    <p className="text-sm text-muted-foreground">
                      Most projects launch in 4-12 weeks depending on complexity.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-left">
                    <h3 className="font-semibold mb-2">Do you offer ongoing support?</h3>
                    <p className="text-sm text-muted-foreground">
                      Yes, all partnerships include maintenance and optimization.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-left">
                    <h3 className="font-semibold mb-2">What industries do you serve?</h3>
                    <p className="text-sm text-muted-foreground">
                      We work across industries including healthcare, finance, and more.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;
