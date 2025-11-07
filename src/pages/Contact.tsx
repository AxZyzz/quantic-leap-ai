import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { Mail, Phone, Linkedin, Calendar, Send, Twitter, Youtube, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    companyName: "",
    website: "",
    phone: "",
    companySize: "",
    annualRevenue: "",
    projectBudget: "",
    message: "",
    emailOptIn: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const webhookUrl = import.meta.env.VITE_WEBHOOK_URL ?? 'https://discordtrolls.app.n8n.cloud/webhook-test/onboarding';
      const websiteHeaderValue = import.meta.env.VITE_WEBHOOK_WEBSITE_HEADER ?? 'a2b.business.official@gmail.comWebsiteAutomation';
      const authValue = import.meta.env.VITE_WEBHOOK_AUTH ?? null;

      // Build headers and include optional Authorization header if provided
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        Website: websiteHeaderValue,
      };
      if (authValue) {
        // If the caller provided an auth secret via env, send it as Authorization header
        headers['Authorization'] = authValue;
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers,
        // include a small metadata flag so the webhook knows this came from the contact page
        body: JSON.stringify({ ...formData, source: 'contact-page' }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        role: "",
        companyName: "",
        website: "",
        phone: "",
        companySize: "",
        annualRevenue: "",
        projectBudget: "",
        message: "",
        emailOptIn: false,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                      <h2 className="text-2xl font-semibold mb-6">Let's get to know you</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Jane"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Doe"
                          />
                        </div>
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
                          placeholder="example@gmail.com"
                        />
                      </div>

                      <div>
                        <Label htmlFor="role">Your Role within Organization *</Label>
                        <Input
                          id="role"
                          name="role"
                          required
                          value={formData.role}
                          onChange={handleChange}
                          placeholder="e.g. CTO, Project Manager, etc."
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="companyName">Company Name *</Label>
                          <Input
                            id="companyName"
                            name="companyName"
                            required
                            value={formData.companyName}
                            onChange={handleChange}
                            placeholder="Your company name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="website">Website (Optional)</Label>
                          <Input
                            id="website"
                            name="website"
                            type="url"
                            value={formData.website}
                            onChange={handleChange}
                            placeholder="https://yourcompany.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="phone">Phone Number (Optional)</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 555-5555"
                          />
                        </div>
                        <div>
                          <Label htmlFor="companySize">Company Size *</Label>
                          <Select
                            value={formData.companySize}
                            onValueChange={(value) =>
                              setFormData({ ...formData, companySize: value })
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select company size" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-10">1-10 employees</SelectItem>
                              <SelectItem value="11-50">11-50 employees</SelectItem>
                              <SelectItem value="51-200">51-200 employees</SelectItem>
                              <SelectItem value="201-500">201-500 employees</SelectItem>
                              <SelectItem value="501+">501+ employees</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="annualRevenue">Annual Revenue (Optional)</Label>
                          <Select
                            value={formData.annualRevenue}
                            onValueChange={(value) =>
                              setFormData({ ...formData, annualRevenue: value })
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select annual revenue" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="<1M">Less than $1M</SelectItem>
                              <SelectItem value="1-10M">$1M - $10M</SelectItem>
                              <SelectItem value="10-50M">$10M - $50M</SelectItem>
                              <SelectItem value="50-100M">$50M - $100M</SelectItem>
                              <SelectItem value="100M+">$100M+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="projectBudget">Project Budget *</Label>
                          <Select
                            value={formData.projectBudget}
                            onValueChange={(value) =>
                              setFormData({ ...formData, projectBudget: value })
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select project budget" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="<25k">Less than $25K</SelectItem>
                              <SelectItem value="25-50k">$25K - $50K</SelectItem>
                              <SelectItem value="50-100k">$50K - $100K</SelectItem>
                              <SelectItem value="100-250k">$100K - $250K</SelectItem>
                              <SelectItem value="250k+">$250K+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message">How Can We Help? *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Please describe your project needs and how we can assist you"
                          rows={4}
                        />
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="emailOptIn"
                            checked={formData.emailOptIn}
                            onCheckedChange={(checked) =>
                              setFormData({ ...formData, emailOptIn: checked as boolean })
                            }
                          />
                          <Label htmlFor="emailOptIn" className="text-sm">
                            Opt into email list for exclusive offerings and bonus AI content
                          </Label>
                        </div>
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
                            href="mailto:a2b.business.official@gmail.com"
                            className="text-muted-foreground hover:text-accent"
                          >
                            a2b.business.official@gmail.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Phone className="h-5 w-5 text-accent mr-3 mt-1" />
                        <div>
                          <p className="font-medium">Phone</p>
                          <a
                            href="tel:+919446447169"
                            className="text-muted-foreground hover:text-accent"
                          >
                            +91 9446447169 , +91 9495401959
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Linkedin className="h-5 w-5 text-accent mr-3 mt-1" />
                        <div>
                          <p className="font-medium">LinkedIn</p>
                          <a
                            href="https://www.linkedin.com/in/automation-to-business-95745937a/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-accent"
                          >
                            Connect with us
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Twitter className="h-5 w-5 text-accent mr-3 mt-1" />
                        <div>
                          <p className="font-medium">X (Twitter)</p>
                          <a
                            href="https://x.com/ABusiness41270"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-accent"
                          >
                            Follow us
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Instagram className="h-5 w-5 text-accent mr-3 mt-1" />
                        <div>
                          <p className="font-medium">Instagram</p>
                          <a
                            href="https://www.instagram.com/automate.2.business/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-accent"
                          >
                            Follow us
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Youtube className="h-5 w-5 text-accent mr-3 mt-1" />
                        <div>
                          <p className="font-medium">YouTube</p>
                          <a
                            href="https://www.youtube.com/channel/UCOr8E2dKBEP6wZI3j19tlaw"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-accent"
                          >
                            Subscribe
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 text-accent mr-3 mt-1" fill="currentColor">
                          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                        </svg>
                        <div>
                          <p className="font-medium">Reddit</p>
                          <a
                            href="https://www.reddit.com/user/automation2_business/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-accent"
                          >
                            Follow us
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
                        href="https://calendly.com/a2b-business-official/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Calendly
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
                        <span>9:00 AM - 6:00 PM IST</span>
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
