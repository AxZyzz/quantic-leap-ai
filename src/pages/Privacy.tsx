import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";

const Privacy = () => {
    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
                <div className="container mx-auto px-4">
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
                            <p className="text-xl text-muted-foreground">
                                Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <ScrollReveal>
                            <Card>
                                <CardContent className="p-8 md:p-12 space-y-8 text-foreground/90">

                                    {/* Introduction */}
                                    <div className="space-y-4">
                                        <h2 className="text-2xl font-bold text-foreground">1. Introduction</h2>
                                        <p className="leading-relaxed">
                                            At A2B ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website or use our services. By accessing or using our services, you consent to the practices described in this policy.
                                        </p>
                                    </div>

                                    {/* Information Collection */}
                                    <div className="space-y-4">
                                        <h2 className="text-2xl font-bold text-foreground">2. Information We Collect</h2>
                                        <p className="leading-relaxed">
                                            We may collect the following types of information:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                                            <li><strong>Personal Identification Information:</strong> Name, email address, phone number, company name, and job title when you voluntarily provide it to us (e.g., through contact forms).</li>
                                            <li><strong>Technical Data:</strong> IP address, browser type, operating system, and usage data collected automatically through cookies and analytics tools.</li>
                                            <li><strong>Usage Data:</strong> Information about how you navigate and interact with our website to help us improve user experience.</li>
                                        </ul>
                                    </div>

                                    {/* Use of Information */}
                                    <div className="space-y-4">
                                        <h2 className="text-2xl font-bold text-foreground">3. How We Use Your Information</h2>
                                        <p className="leading-relaxed">
                                            We use the collected data for the following purposes:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                                            <li>To provide, operate, and maintain our services.</li>
                                            <li>To improve, personalize, and expand our website content.</li>
                                            <li>To communicate with you regarding updates, offers, and customer support.</li>
                                            <li>To analyze usage patterns and optimize our digital presence.</li>
                                            <li>To prevent fraud and ensure the security of our platform.</li>
                                        </ul>
                                    </div>

                                    {/* Data Sharing */}
                                    <div className="space-y-4">
                                        <h2 className="text-2xl font-bold text-foreground">4. Disclosure of Your Information</h2>
                                        <p className="leading-relaxed">
                                            We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners and trusted affiliates for the purposes outlined above.
                                        </p>
                                        <p className="leading-relaxed">
                                            We may also disclose your information if required by law or in response to valid requests by public authorities (e.g., a court or a government agency).
                                        </p>
                                    </div>

                                    {/* Data Security */}
                                    <div className="space-y-4">
                                        <h2 className="text-2xl font-bold text-foreground">5. Data Security</h2>
                                        <p className="leading-relaxed">
                                            We implement appropriate technical and organizational security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure.
                                        </p>
                                    </div>

                                    {/* Third-Party Links */}
                                    <div className="space-y-4">
                                        <h2 className="text-2xl font-bold text-foreground">6. Third-Party Links</h2>
                                        <p className="leading-relaxed">
                                            Our website may contain links to other sites that are not operated by us. We generally have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                                        </p>
                                    </div>

                                    {/* Updates to Policy */}
                                    <div className="space-y-4">
                                        <h2 className="text-2xl font-bold text-foreground">7. Changes to This Policy</h2>
                                        <p className="leading-relaxed">
                                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                                        </p>
                                    </div>

                                    {/* Contact Us */}
                                    <div className="space-y-4">
                                        <h2 className="text-2xl font-bold text-foreground">8. Contact Us</h2>
                                        <p className="leading-relaxed">
                                            If you have any questions about this Privacy Policy, please contact us:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                                            <li>By email: <a href="mailto:a2b.business.official@gmail.com" className="text-accent hover:underline">a2b.business.official@gmail.com</a></li>
                                            <li>By visiting our contact page: <a href="/contact" className="text-accent hover:underline">/contact</a></li>
                                        </ul>
                                    </div>

                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Privacy;
