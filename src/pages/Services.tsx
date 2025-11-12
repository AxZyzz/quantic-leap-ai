import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Services = () => {
  const industries = [
            {
              id: "e-commerce",
              title: "E-Commerce Automation",
              goal: "Scale your online store revenue while cutting down repetitive manual operations — enabling true 24/7 business automation.",
              automations: [
                {
                  title: "Order Processing & Fulfillment Workflows",
                  description:
                    "Automated order management triggers workflows when customers purchase. The system updates inventory across all platforms, sends instant confirmations via email and WhatsApp, auto-generates invoices and shipping labels, and integrates with logistics partners for real-time tracking updates.",
                  impact: "90% reduction in manual fulfillment tasks, faster order dispatch, real-time visibility, and lower error rates in stock or delivery updates.",
                },
                {
                  title: "Abandoned Cart Recovery",
                  description: "Detect abandoned carts and trigger personalized recovery sequences with product images, names, and discount codes. Automated follow-up messages (up to 3 reminders) re-engage customers across WhatsApp and email channels, with sequences stopping automatically upon checkout completion.",
                  impact: "Recover 25–30% of lost carts, improve user engagement, and deliver consistent customer experience without manual tracking.",
                },
                {
                  title: "AI-Driven Product Recommendations",
                  description: "Analyze customer purchase history, viewed items, and session data to deliver real-time product suggestions. AI models identify complementary products for upselling and cross-selling on product pages, checkout pages, and follow-up emails, with continuous retraining on new sales data.",
                  impact: "10–20% increase in average order value, personalized shopping experience, and higher retention through relevant product discovery.",
                },
                {
                  title: "Review & Sentiment Analysis",
                  description: "Automatically request reviews after purchase, capture feedback in databases, and perform AI-powered sentiment analysis to classify customer opinions. Negative reviews trigger internal alerts, and monthly reports summarize key trends for data-driven service improvements.",
                  impact: "Structured and searchable review data, faster response to negative experiences, and continuous improvement driven by customer insights.",
                },
                {
                  title: "Dynamic Pricing & Inventory Sync",
                  description: "Maintain a central database as your 'source of truth' for inventory and pricing. Automatically sync stock levels and prices across Shopify, WooCommerce, Amazon, and other platforms. Adjust pricing dynamically based on demand and inventory levels, with simultaneous storefont updates.",
                  impact: "Zero overselling or stock mismatches, optimized pricing for higher margins, and live synchronization across all marketplaces.",
                },
              ],
            },
            {
              id: "real-estate",
              title: "Real Estate Automation",
              goal: "Convert leads faster, reduce administrative workload, and manage property listings effortlessly.",
              automations: [
                {
                  title: "Lead Capture & CRM Integration",
                  description: "Automatically collect leads from Facebook Ads, Google Ads, and website forms directly into CRMs like HubSpot, Zoho, or Airtable. Each lead is enriched with contact details, property interests, and campaign metadata to enable instant, contextual follow-up.",
                  impact: "Faster lead response and higher conversion rates; zero data loss between platforms.",
                },
                {
                  title: "Follow-Up Sequences",
                  description: "Trigger personalized WhatsApp and email drip campaigns that nurture cold leads automatically. Workflows can escalate high-intent prospects to agents or schedule calls via calendar integrations based on responses or inactivity.",
                  impact: "Improved lead qualification and faster handoffs to sales teams.",
                },
                {
                  title: "Listing Sync & Updates",
                  description: "Sync property listings, price changes, and availability across portals such as 99acres, MagicBricks, Housing.com, and your own website. Updates propagate in real time so listings remain accurate everywhere.",
                  impact: "Accurate listings, fewer double-bookings, and reduced manual editing overhead.",
                },
                {
                  title: "AI-Powered Chatbots",
                  description: "Deploy intelligent chatbots on your website and WhatsApp that qualify prospects (budget, location, property type) and forward qualified leads with full context to your CRM or sales team.",
                  impact: "Higher quality leads passed to agents and lower time spent on unqualified inquiries.",
                },
                {
                  title: "Digital Document Workflows",
                  description: "Generate, store, and share KYC forms, NDAs, agreements, and receipts. Automate e-signature collection, approvals, and document tracking to accelerate closings and reduce paperwork.",
                  impact: "Streamlined documentation and approvals so agents spend more time closing deals and less on admin.",
                },
              ],
            },
            {
              id: "professional-services",
              title: "Professional Services",
              goal: "Eliminate repetitive admin work so you can focus on delivering value to clients and scaling your business.",
              automations: [
                {
                  title: "Proposal → Contract → Invoice Pipelines",
                  description: "Automatically generate and send proposals, contracts, and invoices using pre-approved templates when a deal advances. Integrations with PandaDoc, Google Docs, Notion, or your document system keep branding and legal language consistent and instantly shareable.",
                  impact: "Zero manual document assembly; faster billable cycles and fewer contract delays.",
                },
                {
                  title: "AI-Driven Project Dashboards",
                  description: "Create intelligent dashboards in ClickUp, Notion, or Airtable that update automatically with project status, deadlines, and client communications. AI summaries extract progress and action items from Slack or email threads to keep teams and clients aligned.",
                  impact: "Real-time visibility into project health and fewer status meetings.",
                },
                {
                  title: "Smart Scheduling & Reminders",
                  description: "Sync calendars (Google Calendar, Outlook) and Slack to enable client self-booking, automatic reminder sequences, and post-meeting summary delivery. Availability updates and rescheduling are handled automatically.",
                  impact: "Fewer no-shows, streamlined meeting ops, and better client experience.",
                },
                {
                  title: "Workflow & Tool Integration",
                  description: "Connect Notion, Slack, Google Drive, Trello, and other tools via n8n or Zapier so files, messages, and task updates stay synchronized across systems without manual copying.",
                  impact: "Reduced context switching and more accurate, single-source updates across teams.",
                },
                {
                  title: "Automated Client Onboarding",
                  description: "Automate welcome sequences, contract signing, billing setup, and resource provisioning so new clients get a consistent, frictionless onboarding experience.",
                  impact: "Faster onboarding, improved first-week retention, and reduced setup overhead.",
                },
              ],
            },
            {
              id: "healthcare",
              title: "Healthcare & Clinics",
              goal: "Streamline patient management, reduce manual workload, and eliminate human errors in day-to-day operations.",
              automations: [
                {
                  title: "Appointment Scheduling Systems",
                  description: "Enable patients to book, reschedule, or cancel appointments automatically through WhatsApp, email, or web forms. The system sends smart reminders to reduce no-shows and syncs appointments directly with doctors’ calendars.",
                  impact: "Fewer missed or double-booked appointments and reduced front-desk workload.",
                },
                {
                  title: "Patient Intake & Medical Records",
                  description: "Digitize patient onboarding with secure online forms and automatically store records, prescriptions, and diagnostics in HIPAA-compliant databases integrated with EHR/EMR systems. Authorized staff get instant access to patient data.",
                  impact: "Improved accuracy in patient data and faster access to records for care teams.",
                },
                {
                  title: "AI-Powered Chatbots",
                  description: "Provide 24/7 virtual assistance with symptom-based guidance, pre-consultation FAQs, and appointment scheduling. Chatbots reduce inbound calls while preserving a conversational experience and can hand off serious cases to clinicians with full context.",
                  impact: "Reduced front-desk load, faster response times, and better triage of patient requests.",
                },
                {
                  title: "Billing, Invoicing & Insurance Claims",
                  description: "Automate billing, payment tracking, and insurance claim submissions. Generate invoices after consultations, update patient balances, and sync claim data with insurance providers to reduce administrative effort and payment delays.",
                  impact: "Faster reimbursements, fewer billing errors, and reduced administrative overhead.",
                },
                {
                  title: "Operational Insights & Alerts",
                  description: "Automatic reporting and alerting for capacity, no-show trends, and billing anomalies so managers can act proactively.",
                  impact: "Data-driven improvements to patient flow and resource allocation.",
                },
              ],
            },
            {
              id: "manufacturing",
              title: "Manufacturing & Logistics",
              goal: "Build predictable, data-driven operations while minimizing downtime and manual oversight.",
              automations: [
                {
                  title: "Real-Time Inventory Monitoring",
                  description: "Track raw materials, components, and finished goods across warehouses in real time. When stock falls below thresholds, trigger alerts, create purchase orders, or notify suppliers automatically to avoid production delays.",
                  impact: "Zero production delays due to stockouts and improved supply reliability.",
                },
                {
                  title: "Predictive Maintenance",
                  description: "Use IoT and sensor telemetry to predict equipment wear and failures. Automations schedule maintenance tasks, alert technicians, and pause vulnerable lines before failure to prevent costly downtimes.",
                  impact: "Reduced unplanned downtime and lower maintenance costs through proactive interventions.",
                },
                {
                  title: "Order & Shipment Tracking",
                  description: "Integrate with logistics APIs to update clients and partners with live shipment status, ETAs, and proof-of-delivery. Notifications reduce inbound support requests and improve partner trust.",
                  impact: "Higher customer satisfaction and fewer support tickets with transparent tracking.",
                },
                {
                  title: "Automated Performance Reporting",
                  description: "Auto-generate daily, weekly, or monthly reports that summarize production efficiency, equipment utilization, and logistics KPIs, and deliver them to managers' dashboards or inboxes.",
                  impact: "Faster, data-driven decisions and continuous process improvements.",
                },
              ],
            },
            {
              id: "education",
              title: "Education & EdTech",
              goal: "Streamline student management, reduce administrative load, and boost engagement through intelligent automation.",
              automations: [
                {
                  title: "Admission & Enrollment Workflows",
                  description: "Digitize the admission journey from application submission to approval and fee confirmation. Automatically validate entries, send notifications, and store student data in structured databases for easy access and compliance.",
                  impact: "Faster admissions, reduced manual processing, and improved data accuracy.",
                },
                {
                  title: "Smart Attendance Tracking",
                  description: "Integrate biometric systems, Google Sheets, or LMS platforms to auto-sync attendance data and generate visual dashboards for teachers and admins. Alerts notify parents or students when attendance drops below thresholds.",
                  impact: "Improved attendance visibility and timely interventions for at-risk students.",
                },
                {
                  title: "AI Teaching Assistants",
                  description: "Deploy AI chatbots and assistants to handle student queries, collect feedback, and recommend learning resources 24/7, reducing faculty workload and improving student support.",
                  impact: "Higher student engagement and faster resolution of common queries.",
                },
                {
                  title: "Certificate & Result Automation",
                  description: "Automatically generate and deliver digital certificates, report cards, and progress summaries once evaluations are complete. Integrate with LMS or Google Drive for secure document storage and delivery.",
                  impact: "Faster grading cycles and reliable distribution of academic documents.",
                },
              ],
            },
            {
              id: "finance",
              title: "Finance & Accounting",
              goal: "Enhance financial accuracy, transparency, and speed by automating repetitive accounting workflows.",
              automations: [
                {
                  title: "Invoice & Payment Workflows",
                  description: "Automatically generate, send, and reconcile invoices and payments for multiple clients or vendors. Integrations with payment gateways and accounting platforms provide real-time status on received and pending payments, reducing manual follow-up.",
                  impact: "Faster collections, fewer missed payments, and reduced manual reconciliation.",
                },
                {
                  title: "AI-Powered Expense Categorization",
                  description: "Use ML to auto-classify expenses from receipts, transactions, and emails. The system identifies trends, flags anomalies, and prepares data for audit-ready bookkeeping.",
                  impact: "Cleaner books, faster close cycles, and fewer categorization errors.",
                },
                {
                  title: "CRM + Accounting Integration",
                  description: "Sync client and transaction data between Zoho Books, QuickBooks, Xero, and HubSpot so sales and finance teams work from a single source of truth and duplicate entries are eliminated.",
                  impact: "Improved cross-team visibility and reduced data entry errors.",
                },
                {
                  title: "Real-Time Financial Dashboards",
                  description: "Build dynamic dashboards that visualize cash flow, revenue trends, profit margins, and KPIs. Automate monthly or quarterly reports and deliver insights directly to leadership.",
                  impact: "Faster, data-driven financial decisions and shorter reporting cycles.",
                },
              ],
            },
            {
              id: "hr",
              title: "HR & Recruitment",
              goal: "Streamline recruitment, onboarding, and employee management to build efficient and people-first workplaces.",
              automations: [
                {
                  title: "AI Candidate Screening",
                  description: "Leverage AI to analyze resumes, evaluate skill matches, and rank candidates automatically based on job requirements. This speeds up shortlisting and reduces manual bias in the hiring process.",
                  impact: "Faster, fairer shortlisting and higher-quality candidate pipelines.",
                },
                {
                  title: "Automated Onboarding Workflows",
                  description: "Trigger personalized welcome emails, set up access credentials, and share policy documentation automatically upon hiring. Integrations with Google Workspace, Slack, and Notion provision accounts and resources seamlessly.",
                  impact: "Consistent, low-friction onboarding and reduced manual setup work.",
                },
                {
                  title: "Performance & Attendance Dashboards",
                  description: "Track attendance, productivity KPIs, and review cycles in real time. Managers receive automated reports and reminders for performance reviews and goal tracking.",
                  impact: "Clear visibility into team performance and timely review cycles.",
                },
                {
                  title: "Payroll & Leave Sync",
                  description: "Integrate attendance and timesheet data with payroll systems (Zoho People, Deel, or Excel-based setups) to calculate salaries and leaves automatically, minimizing errors and delays.",
                  impact: "Fewer payroll errors, faster payroll runs, and accurate leave accounting.",
                },
              ],
            },
            {
              id: "hospitality",
              title: "Hospitality & Travel",
              goal: "Deliver seamless, personalized guest experiences while minimizing manual operations.",
              automations: [
                {
                  title: "Reservation Management Systems",
                  description: "Automate the full booking cycle — confirmations, itinerary sharing, cancellations, and refunds. Integrate with Booking.com, Airbnb, Expedia and other OTAs to sync availability and prevent double-bookings in real time.",
                  impact: "Reduced double-bookings and faster confirmations, improving guest satisfaction and operational efficiency.",
                },
                {
                  title: "AI Concierge Chatbots",
                  description: "Provide 24/7 guest support via WhatsApp, website chat, or in-app assistants. Guests receive instant help with check-in details, local recommendations, restaurant suggestions, and FAQs without waiting for staff.",
                  impact: "Faster responses, lower staff load, and better guest experience.",
                },
                {
                  title: "Feedback & Reputation Management",
                  description: "Automatically collect post-stay feedback and analyze sentiment with AI. Prompt satisfied guests to leave reviews on Google or TripAdvisor and consolidate reputation metrics into centralized dashboards.",
                  impact: "Improved ratings and easier reputation management across platforms.",
                },
                {
                  title: "Dynamic Pricing & Package Automation",
                  description: "Adjust room rates, packages, and itineraries dynamically based on occupancy, demand, and seasonal trends, then push updates to OTAs and direct channels to stay competitive without manual monitoring.",
                  impact: "Higher occupancy, optimized revenue, and faster price responsiveness.",
                },
              ],
            },
            {
              id: "media",
              title: "Media, Marketing & Content",
              goal: "Create, publish, and analyze content at scale.",
              automations: [
                { title: "Content scheduling", description: "Cross-posting and scheduling.", impact: "Faster output." },
                { title: "AI content pipelines", description: "Generate and repurpose content.", impact: "Higher volume." },
                { title: "Campaign analytics", description: "Auto reporting and dashboards.", impact: "Deeper insights." },
                { title: "Client reporting", description: "Automated reports for agencies.", impact: "Smoother client management." },
              ],
            },
            {
              id: "saas",
              title: "SaaS & Tech Startups",
              goal: "Scale systems faster than headcount.",
              automations: [
                { title: "Onboarding & demo scheduling", description: "Automated user onboarding.", impact: "Faster activation." },
                { title: "Feedback collection", description: "In-app surveys and analytics.", impact: "Better product decisions." },
                { title: "CRM + support sync", description: "HubSpot/Intercom integrations.", impact: "Unified customer view." },
                { title: "Custom internal tools", description: "AI-powered utilities.", impact: "Higher developer productivity." },
              ],
            },
            {
              id: "construction",
              title: "Construction & Architecture",
              goal: "Keep projects on track and communication clear.",
              automations: [
                { title: "Timeline updates", description: "Project progress automation.", impact: "Fewer delays." },
                { title: "Vendor coordination", description: "Approval workflows.", impact: "Faster procurement." },
                { title: "Expense tracking", description: "Automated expense management.", impact: "Better costing." },
                { title: "Safety checklists", description: "Compliance automation.", impact: "Safer sites." },
              ],
            },
            {
              id: "support",
              title: "Customer Support & Operations",
              goal: "Resolve issues faster without expanding the team.",
              automations: [
                { title: "AI chat systems", description: "Bots trained on your data.", impact: "Faster first response." },
                { title: "Ticket triage", description: "Automated routing and escalation.", impact: "Faster resolution." },
                { title: "Knowledge base automation", description: "Auto-update KBs.", impact: "Better self-service." },
                { title: "Surveys & feedback", description: "Automated NPS and follow-ups.", impact: "Continuous improvement." },
              ],
            },
          ];

          const commonAutomations = [
            {
              id: "whatsapp",
              title: "WhatsApp & Communication Automations",
              bullets: [
                "Auto-reply and lead-qualification chatbots for WhatsApp Business.",
                "Message broadcasting with personalized templates.",
                "Automated follow-ups for inquiries, payments, or bookings.",
                "Integrations with Google Sheets, CRM, or payment systems.",
              ],
              impact: "Faster responses, zero missed leads, and consistent communication.",
            },
            {
              id: "gmail",
              title: "Gmail & Email Automations",
              bullets: [
                "Smart auto-replies and acknowledgment emails.",
                "Labeling, sorting, and auto-forwarding of mails.",
                "Scheduled outreach and drip campaigns.",
                "Invoice and receipt email automation from CRMs or spreadsheets.",
              ],
              impact: "Cleaner inbox, quicker client communication, and 24/7 professionalism.",
            },
            {
              id: "social",
              title: "Instagram & Facebook Automations",
              bullets: [
                "Auto-posting and scheduling across pages and profiles.",
                "Comment-to-DM automations for lead capture.",
                "Auto-reply to messages and FAQs.",
                "Analytics dashboards for engagement and follower growth.",
              ],
              impact: "Consistent social presence without daily manual work.",
            },
            {
              id: "linkedin",
              title: "LinkedIn Automations",
              bullets: [
                "Auto-post scheduling for company updates.",
                "Smart connection requests and follow-ups.",
                "Message automation for lead nurturing and recruitment.",
                "Profile engagement reports and analytics.",
              ],
              impact: "More visibility, more leads, and stronger professional networks.",
            },
            {
              id: "youtube",
              title: "YouTube & Video Automations",
              bullets: [
                "Automated video upload scheduling and thumbnail generation.",
                "Comment moderation and highlight extraction using AI.",
                "Auto-share new videos to social platforms and email lists.",
                "Analytics dashboards showing watch time and engagement.",
              ],
              impact: "Save editing time and increase channel consistency.",
            },
            {
              id: "workspace",
              title: "Google Workspace & Office Tools",
              bullets: [
                "Form submissions → auto-fill Google Sheets → trigger updates.",
                "Document generation from templates.",
                "Auto-backup files to Drive or Dropbox.",
                "Meeting scheduling, summary generation, and follow-ups.",
              ],
              impact: "Seamless collaboration and zero manual file handling.",
            },
            {
              id: "ai-productivity",
              title: "AI-Powered Productivity Systems",
              bullets: [
                "Chatbots trained on your business FAQs or documents.",
                "Assistants that summarize emails, create content, or draft reports.",
                "Task prioritization and reminders via Notion, Slack, or ClickUp.",
                "Custom dashboards combining marketing, sales, and ops data.",
              ],
              impact: "Smarter decisions, less mental load, more focus on growth.",
            },
            {
              id: "funnels",
              title: "Sales & Marketing Funnels",
              bullets: [
                "Lead capture from forms, ads, and social DMs.",
                "Auto-nurture via WhatsApp, email, or SMS with personalized offers.",
                "CRM sync + pipeline tracking for every stage.",
                "Automatic reporting on campaign performance.",
              ],
              impact: "More conversions with less manual follow-up.",
            },
            {
              id: "payments",
              title: "Payment & Billing Automations",
              bullets: [
                "Auto-invoice generation from forms or CRMs.",
                "Payment reminders through WhatsApp or email.",
                "Integration with Razorpay, Stripe, or PayPal.",
                "Automated profit/loss and cash flow dashboards.",
              ],
              impact: "Faster payments, fewer delays, better financial clarity.",
            },
            {
              id: "analytics",
              title: "Analytics & Reporting",
              bullets: [
                "Real-time dashboards pulling data from social, ads, and sales.",
                "Auto-generated weekly or monthly performance reports.",
                "Notification triggers for key metrics.",
                "Centralized reporting across teams or clients.",
              ],
              impact: "Instant insights, smarter strategies, and complete transparency.",
            },
          ];

          const [selected, setSelected] = useState(industries[0].id);
          const [carouselIndex, setCarouselIndex] = useState(0);

          const current = industries.find((i) => i.id === selected) || industries[0];
          
          const itemsPerView = 3;
          const maxIndex = Math.max(0, industries.length - itemsPerView);
          
          const handlePrev = () => {
            setCarouselIndex(Math.max(0, carouselIndex - 1));
          };
          
          const handleNext = () => {
            setCarouselIndex(Math.min(maxIndex, carouselIndex + 1));
          };
          
          const visibleIndustries = industries.slice(carouselIndex, carouselIndex + itemsPerView);

          return (
            <div className="min-h-screen pt-20">
              <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
                <div className="container mx-auto px-4">
                  <ScrollReveal>
                    <div className="max-w-3xl mx-auto text-center">
                      <h1 className="text-5xl md:text-6xl font-bold mb-6">Industry Automations</h1>
                      <p className="text-xl text-muted-foreground">
                        Select your industry to explore automation solutions we build and the impact they deliver.
                      </p>
                    </div>
                  </ScrollReveal>
                </div>
              </section>

              <section className="py-16">
                <div className="container mx-auto px-4 max-w-6xl">
                  <ScrollReveal>
                    <div className="mb-16">
                      {/* Carousel Slider */}
                      <div className="flex items-center gap-6">
                        {/* Left Arrow */}
                        <button
                          onClick={handlePrev}
                          disabled={carouselIndex === 0}
                          className="p-3 rounded-full border border-white/20 hover:bg-white/10 hover:border-accent/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>

                        {/* Carousel Items */}
                        <div className="flex-1 overflow-hidden">
                          <div className="grid grid-cols-3 gap-4">
                            {visibleIndustries.map((ind) => (
                              <button
                                key={ind.id}
                                onClick={() => setSelected(ind.id)}
                                className={`p-6 rounded-xl border-2 text-center transition-all duration-300 transform ${
                                  selected === ind.id
                                    ? "bg-accent text-white border-accent shadow-2xl scale-105"
                                    : "bg-white/5 border-white/20 hover:bg-white/10 hover:border-accent/50 hover:scale-102"
                                }`}
                              >
                                <span className="text-sm font-semibold leading-tight block">{ind.title}</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Right Arrow */}
                        <button
                          onClick={handleNext}
                          disabled={carouselIndex === maxIndex}
                          className="p-3 rounded-full border border-white/20 hover:bg-white/10 hover:border-accent/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                      </div>

                      {/* Progress Indicator */}
                      <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCarouselIndex(i)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              i === carouselIndex ? "w-8 bg-accent" : "w-2 bg-white/30 hover:bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>

                  <div>
                    <ScrollReveal>
                      <div className="mb-16 p-8 bg-gradient-to-r from-accent/5 to-transparent rounded-xl border border-accent/20">
                        <h2 className="text-4xl font-bold mb-4">{current.title}</h2>
                        <p className="text-lg text-foreground/70 font-medium">Goal: {current.goal}</p>
                      </div>
                    </ScrollReveal>

                    <div className="space-y-12">
                      {current.automations.map((a, index) => (
                        <ScrollReveal key={a.title} delay={index * 50}>
                          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                            {/* Left: Details (or Right on alternating) */}
                            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                              <Card className="h-full hover:shadow-2xl transition-all duration-300 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-accent/40">
                                <CardContent className="pt-8 pb-8">
                                  <h4 className="font-bold mb-4 text-2xl text-foreground">{a.title}</h4>
                                  <p className="text-base text-foreground/70 mb-8 leading-relaxed">{a.description}</p>
                                  <div className="pt-6 border-t border-white/10">
                                    <p className="text-accent font-semibold text-base">Impact: <span className="text-foreground/90">{a.impact}</span></p>
                                  </div>
                                </CardContent>
                              </Card>
                            </div>

                            {/* Right: Accent Visual (or Left on alternating) */}
                            <div className={`flex items-center justify-center p-12 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                              <div className="w-full h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl border border-accent/20 flex items-center justify-center">
                                <div className="text-center">
                                  <div className="text-6xl font-bold text-accent/30 mb-2">✓</div>
                                  <p className="text-foreground/50 font-medium">{a.title}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </ScrollReveal>
                      ))}
                    </div>
                  </div>

                  {/* Common Automations Section */}
                  <div className="mt-20">
                    <ScrollReveal>
                      <div className="text-center mb-16">
                        <h3 className="text-5xl font-bold mb-4">Universal Automation Solutions</h3>
                        <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-medium">
                          Powerful automation frameworks that drive impact across all industries
                        </p>
                      </div>
                    </ScrollReveal>

                    <div className="space-y-16">
                      {commonAutomations.map((c, index) => (
                        <ScrollReveal key={c.id} delay={index * 50}>
                          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                            {/* Left: Title & Details (or Right on alternating) */}
                            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                              <div className="p-8 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                                <h3 className="text-2xl font-bold mb-6">{c.title}</h3>
                                <ul className="text-sm text-foreground/70 space-y-3 mb-8">
                                  {c.bullets.map((b, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                      <span className="text-accent font-bold mt-1">→</span>
                                      <span>{b}</span>
                                    </li>
                                  ))}
                                </ul>
                                <div className="pt-6 border-t border-white/10">
                                  <p className="text-sm text-foreground/60"><span className="text-accent font-semibold">Impact:</span> {c.impact}</p>
                                </div>
                              </div>
                            </div>

                            {/* Right: Visual Accent (or Left on alternating) */}
                            <div className={`flex items-center justify-center p-12 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                              <div className="w-full h-56 bg-gradient-to-br from-accent/5 to-primary/5 border border-accent/20 rounded-xl flex items-center justify-center hover:border-accent/40 transition-all duration-300">
                                <div className="text-center">
                                  <div className="text-5xl font-bold text-accent/20 mb-3">◆</div>
                                  <p className="text-foreground/40 font-medium text-sm">{c.title}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </ScrollReveal>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* CTA Section (keep existing) */}
              <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                  <ScrollReveal>
                    <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-accent text-primary-foreground">
                      <CardContent className="pt-12 pb-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
                        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                          Schedule a free consultation to discuss your specific needs and learn how our AI
                          solutions can transform your business.
                        </p>
                        <Button size="lg" className="bg-background text-foreground hover:bg-background/90" asChild>
                          <Link to="/contact">Book Your Discovery Call</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                </div>
              </section>
            </div>
          );
        };

        export default Services;
