import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sections = [
        { id: "intro", title: "1. Introduction" },
        { id: "collection", title: "2. Information We Collect" },
        { id: "usage", title: "3. How We Use Your Information" },
        { id: "sharing", title: "4. Disclosure of Your Information" },
        { id: "security", title: "5. Data Security" },
        { id: "cookies", title: "6. Cookies and Tracking" },
        { id: "rights", title: "7. Your Rights" },
        { id: "contact", title: "8. Contact Us" },
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Sticky header offset
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="min-h-screen pt-20 bg-background">
            {/* Header Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 via-primary/5 to-transparent z-0 pointer-events-none" />
                <div className="container mx-auto px-4 relative z-10">
                    <ScrollReveal>
                        <div className="max-w-4xl">
                            <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-accent mb-6 transition-colors">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Home
                            </Link>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                                Privacy <span className="text-accent">Policy</span>
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-2xl">
                                We value your trust and are committed to protecting your personal information.
                                This policy outlines how we handle your data transparently.
                            </p>
                            <div className="mt-8 flex items-center text-sm text-muted-foreground">
                                <span className="px-3 py-1 rounded-full bg-accent/10 text-accent font-medium border border-accent/20">
                                    Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                </span>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

                        {/* Sidebar Navigation - Sticky on Desktop */}
                        <div className="hidden lg:block lg:col-span-1">
                            <div className="sticky top-32 space-y-2">
                                <h3 className="font-semibold text-lg mb-4 px-4">Table of Contents</h3>
                                <nav className="flex flex-col space-y-1">
                                    {sections.map((section) => (
                                        <button
                                            key={section.id}
                                            onClick={() => scrollToSection(section.id)}
                                            className="text-left px-4 py-2 text-sm text-muted-foreground hover:text-accent hover:bg-accent/5 rounded-md transition-all duration-200 border-l-2 border-transparent hover:border-accent"
                                        >
                                            {section.title}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="lg:col-span-3">
                            <Card className="border-none shadow-none bg-transparent">
                                <CardContent className="p-0 space-y-12">

                                    <ScrollReveal>
                                        <div id="intro" className="scroll-mt-32">
                                            <h2 className="text-2xl font-bold mb-4 flex items-center">
                                                <span className="bg-accent/10 text-accent w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">1</span>
                                                Introduction
                                            </h2>
                                            <div className="prose prose-lg dark:prose-invert text-muted-foreground leading-relaxed">
                                                <p>
                                                    At A2B ("we," "our," or "us"), protecting your privacy is at the core of our business values. This Privacy Policy is designed to clearly explain how we collect, use, disclose, and safeguard your collected information when you visit our website or engage with our services.
                                                </p>
                                                <p className="mt-4">
                                                    By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this privacy policy, please do not access the site.
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>

                                    <div className="w-full h-px bg-border/50" />

                                    <ScrollReveal>
                                        <div id="collection" className="scroll-mt-32">
                                            <h2 className="text-2xl font-bold mb-4 flex items-center">
                                                <span className="bg-accent/10 text-accent w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">2</span>
                                                Information We Collect
                                            </h2>
                                            <div className="prose prose-lg dark:prose-invert text-muted-foreground leading-relaxed space-y-4">
                                                <p>We collect information that identifies, relates to, describes, references, is capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or device.</p>
                                                <ul className="list-disc pl-5 space-y-2">
                                                    <li><strong>Personal Identifiers:</strong> Including real name, postal address, unique personal identifier, online identifier, Internet Protocol address, email address, account name, or other similar identifiers.</li>
                                                    <li><strong>Professional Information:</strong> Including current employer, job title, and business contact details provided through B2B interactions.</li>
                                                    <li><strong>Internet Activity:</strong> Browsing history, search history, and information on a consumer's interaction with a website, application, or advertisement.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </ScrollReveal>

                                    <div className="w-full h-px bg-border/50" />

                                    <ScrollReveal>
                                        <div id="usage" className="scroll-mt-32">
                                            <h2 className="text-2xl font-bold mb-4 flex items-center">
                                                <span className="bg-accent/10 text-accent w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">3</span>
                                                How We Use Your Information
                                            </h2>
                                            <div className="prose prose-lg dark:prose-invert text-muted-foreground leading-relaxed">
                                                <p>We use the information we collect for various business purposes, including:</p>
                                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 list-none pl-0">
                                                    <li className="bg-muted/30 p-4 rounded-lg border border-border/50">
                                                        <strong className="block text-foreground mb-1">Service Delivery</strong>
                                                        To provide, operate, and maintain our website and services.
                                                    </li>
                                                    <li className="bg-muted/30 p-4 rounded-lg border border-border/50">
                                                        <strong className="block text-foreground mb-1">Improvement</strong>
                                                        To improve, personalize, and expand our website and user experience.
                                                    </li>
                                                    <li className="bg-muted/30 p-4 rounded-lg border border-border/50">
                                                        <strong className="block text-foreground mb-1">Communication</strong>
                                                        To contact you regarding updates, offers, and customer service needs.
                                                    </li>
                                                    <li className="bg-muted/30 p-4 rounded-lg border border-border/50">
                                                        <strong className="block text-foreground mb-1">Security</strong>
                                                        To prevent fraud and ensure the security of our platform.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </ScrollReveal>

                                    <div className="w-full h-px bg-border/50" />

                                    <ScrollReveal>
                                        <div id="sharing" className="scroll-mt-32">
                                            <h2 className="text-2xl font-bold mb-4 flex items-center">
                                                <span className="bg-accent/10 text-accent w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">4</span>
                                                Disclosure of Your Information
                                            </h2>
                                            <div className="prose prose-lg dark:prose-invert text-muted-foreground leading-relaxed">
                                                <p>
                                                    We generally do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
                                                </p>
                                                <p className="mt-4">
                                                    We may also release information when its release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>

                                    <div className="w-full h-px bg-border/50" />

                                    <ScrollReveal>
                                        <div id="security" className="scroll-mt-32">
                                            <h2 className="text-2xl font-bold mb-4 flex items-center">
                                                <span className="bg-accent/10 text-accent w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">5</span>
                                                Data Security
                                            </h2>
                                            <div className="prose prose-lg dark:prose-invert text-muted-foreground leading-relaxed">
                                                <p>
                                                    We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential.
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>

                                    <div className="w-full h-px bg-border/50" />

                                    <ScrollReveal>
                                        <div id="cookies" className="scroll-mt-32">
                                            <h2 className="text-2xl font-bold mb-4 flex items-center">
                                                <span className="bg-accent/10 text-accent w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">6</span>
                                                Cookies and Tracking
                                            </h2>
                                            <div className="prose prose-lg dark:prose-invert text-muted-foreground leading-relaxed">
                                                <p>
                                                    We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience. When you access the Site, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Site.
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>

                                    <div className="w-full h-px bg-border/50" />

                                    <ScrollReveal>
                                        <div id="rights" className="scroll-mt-32">
                                            <h2 className="text-2xl font-bold mb-4 flex items-center">
                                                <span className="bg-accent/10 text-accent w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">7</span>
                                                Your Rights
                                            </h2>
                                            <div className="prose prose-lg dark:prose-invert text-muted-foreground leading-relaxed">
                                                <p>Depending on your location, you may have the following rights:</p>
                                                <ul className="list-disc pl-5 mt-2 space-y-1">
                                                    <li>The right to access – You have the right to request copies of your personal data.</li>
                                                    <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate.</li>
                                                    <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
                                                    <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </ScrollReveal>

                                    <div className="w-full h-px bg-border/50" />

                                    <ScrollReveal>
                                        <div id="contact" className="scroll-mt-32">
                                            <h2 className="text-2xl font-bold mb-4 flex items-center">
                                                <span className="bg-accent/10 text-accent w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">8</span>
                                                Contact Us
                                            </h2>
                                            <div className="bg-muted/30 p-8 rounded-xl border border-border/50">
                                                <p className="text-muted-foreground mb-6">
                                                    If you have questions or comments about this Privacy Policy, please contact us at:
                                                </p>
                                                <div className="space-y-4">
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mr-4">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-medium text-muted-foreground">Email Us</p>
                                                            <a href="mailto:a2b.business.official@gmail.com" className="text-lg font-semibold hover:text-accent transition-colors">
                                                                a2b.business.official@gmail.com
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mr-4">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 8l4 4-4 4M8 12h8" /></svg>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-medium text-muted-foreground">Action</p>
                                                            <Link to="/contact" className="text-lg font-semibold hover:text-accent transition-colors">
                                                                Visit Contact Page
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollReveal>

                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Privacy;
