import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

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
              goal: "Create, distribute, and analyze content effortlessly to scale brand visibility and engagement.",
              automations: [
                {
                  title: "Cross-Platform Posting Systems",
                  description: "Automate creation and scheduling across LinkedIn, Instagram, X (Twitter), YouTube, and Facebook from a single dashboard. The system auto-adapts formats, captions, and schedules per platform for consistent brand presence.",
                  impact: "Faster, more consistent publishing and reduced manual overhead.",
                },
                {
                  title: "AI-Driven Content Pipelines",
                  description: "Use AI to generate captions, hashtags, blog intros, and ad copy aligned to brand tone and keywords. Automate repurposing — turning a long-form blog into short videos, carousels, and newsletters.",
                  impact: "AI-assisted creativity, reduced content fatigue, and higher output with maintained quality.",
                },
                {
                  title: "Unified Analytics Dashboards",
                  description: "Consolidate engagement metrics, impressions, conversions, and ad ROI from all channels into a single real-time dashboard. Automatically surface top-performing content and send weekly performance summaries to stakeholders.",
                  impact: "Centralized insights that enable smarter marketing decisions and faster optimization.",
                },
                {
                  title: "Automated Client Reporting",
                  description: "Auto-generate campaign performance reports in templates (PDF, Notion, Slides) and deliver them to clients or internal teams without manual data pulling.",
                  impact: "Streamlined reporting cycles and better client communication with less manual effort.",
                },
              ],
            },
            {
              id: "saas",
              title: "SaaS & Tech Startups",
              goal: "Build scalable systems and growth loops that evolve faster than your team size.",
              automations: [
                {
                  title: "User Onboarding Workflows",
                  description: "Automate the onboarding experience — welcome emails, demo scheduling, personalized product tours, and setup guides. Trigger targeted flows based on user behavior or subscription tier.",
                  impact: "Faster onboarding and higher user activation through tailored experiences.",
                },
                {
                  title: "Continuous Feedback Loops",
                  description: "Automatically collect and analyze product feedback, NPS scores, and feature requests. Push insights into Notion, Slack, or Productboard to help teams prioritize product improvements with real-time signals.",
                  impact: "Faster product iteration and prioritization driven by user data.",
                },
                {
                  title: "CRM + Support Desk Integration",
                  description: "Connect HubSpot, Intercom, Notion and support desks to create a unified customer system. Sync tickets, lifecycle stages, and customer data so sales, support, and product share a single source of truth.",
                  impact: "Improved retention and faster resolution with cross-team visibility.",
                },
                {
                  title: "Custom Internal Tools & AI Dashboards",
                  description: "Develop AI-powered dashboards and internal tools that monitor churn, usage, MRR and trigger alerts for anomalies or opportunities. Integrate with Slack or email for proactive notifications.",
                  impact: "Proactive growth signals and scalable monitoring without manual reporting.",
                },
              ],
            },

            {
              id: "support",
              title: "Customer Support & Operations",
              goal: "Deliver faster, smarter support experiences without expanding your team size.",
              automations: [
                {
                  title: "AI-Powered Chat Systems",
                  description: "Deploy AI chatbots trained on product docs, FAQs, and internal KBs to handle common queries instantly. Integrate with Intercom, Zendesk, or WhatsApp for 24/7 assistance and seamless escalation to human agents when needed.",
                  impact: "Dramatically faster first response and reduced load on support agents.",
                },
                {
                  title: "Intelligent Ticket Routing",
                  description: "Automatically categorize and assign tickets to the right teams or agents based on keywords, priority, or customer profile. Critical issues are escalated instantly while routine requests get auto-resolved.",
                  impact: "Faster resolution times and fewer misrouted tickets.",
                },
                {
                  title: "Dynamic Knowledge Base Management",
                  description: "Sync and auto-update help articles, FAQs, and troubleshooting guides based on recurring issues and product changes. Use AI to detect outdated content and suggest improvements or new articles.",
                  impact: "Better self-service, fewer support queries, and continuously improving documentation.",
                },
                {
                  title: "Customer Feedback & Satisfaction Loops",
                  description: "Trigger post-resolution surveys or NPS forms automatically to capture sentiment. Feed results into dashboards for trend analysis and automate actions for low-satisfaction cases.",
                  impact: "Higher customer satisfaction and a clear path to service improvements.",
                },
              ],
            },
          ];

          const commonAutomations = [
            {
              id: "whatsapp",
              title: "WhatsApp & Communication Automations",
              goal: "Enable instant, personalized communication at scale without manual effort.",
              automations: [
                {
                  title: "Auto-reply and Lead-Qualification Chatbots",
                  description: "Deploy intelligent chatbots on WhatsApp Business that auto-reply to common queries, qualify leads based on responses, and forward high-intent prospects to your team with full context.",
                  impact: "Faster response times, higher-quality leads, and reduced manual triage work.",
                },
                {
                  title: "Message Broadcasting with Personalized Templates",
                  description: "Send bulk messages to customer segments with personalized variables (name, order ID, date). Schedule broadcasts for optimal engagement times and track open/click rates.",
                  impact: "Consistent outreach, better engagement rates, and professional communication.",
                },
                {
                  title: "Automated Follow-up Sequences",
                  description: "Trigger multi-step WhatsApp follow-ups for inquiries, payment reminders, or booking confirmations. Sequences automatically stop upon conversion or response.",
                  impact: "Never lose a lead due to follow-up delays; improved conversion rates.",
                },
                {
                  title: "CRM & Payment System Integration",
                  description: "Sync WhatsApp conversations with CRMs like HubSpot or Zoho. Auto-log messages, send payment links, and trigger workflows based on customer responses.",
                  impact: "Unified customer data, streamlined payments, and better insights.",
                },
              ],
            },
            {
              id: "gmail",
              title: "Gmail & Email Automations",
              goal: "Streamline email workflows and ensure no important messages or follow-ups are missed.",
              automations: [
                {
                  title: "Smart Auto-Replies and Acknowledgments",
                  description: "Set context-aware auto-replies that respond differently based on sender, keywords, or time. Send acknowledgment emails that confirm receipt and set expectations for response time.",
                  impact: "Professional communication, reduced manual replies, and better customer experience.",
                },
                {
                  title: "Intelligent Email Labeling and Sorting",
                  description: "Automatically label, archive, or forward emails based on sender, subject, or content. Create rules that move important emails to a priority folder and mark spam automatically.",
                  impact: "Cleaner inbox, faster email processing, and fewer missed messages.",
                },
                {
                  title: "Scheduled Outreach and Drip Campaigns",
                  description: "Schedule follow-up emails to be sent at optimal times. Create multi-step email sequences that nurture leads or re-engage inactive contacts automatically.",
                  impact: "Consistent outreach, higher engagement, and time saved on manual scheduling.",
                },
                {
                  title: "Invoice and Receipt Automation",
                  description: "Auto-generate and send invoices, receipts, and payment reminders from CRMs or spreadsheets. Include personalized payment links and due date alerts.",
                  impact: "Faster payments, reduced manual invoicing, and better payment tracking.",
                },
              ],
            },
            {
              id: "social",
              title: "Instagram & Facebook Automations",
              goal: "Maintain consistent social media presence without daily manual work.",
              automations: [
                {
                  title: "Auto-Posting and Content Scheduling",
                  description: "Schedule posts across Instagram, Facebook, and multiple profiles. Optimize posting times based on audience activity and use templates for consistent branding.",
                  impact: "Consistent content delivery, better reach, and more time for strategy.",
                },
                {
                  title: "Comment-to-DM Lead Capture",
                  description: "Automatically send DM responses when customers comment on posts. Qualify leads in DMs and forward to sales team or CRM with conversation history.",
                  impact: "Capture more leads, faster responses, and automated lead qualification.",
                },
                {
                  title: "Auto-Reply to Messages and FAQs",
                  description: "Set up AI-powered chatbots that auto-reply to common DM questions. Route complex inquiries to your team while handling repetitive questions automatically.",
                  impact: "Faster customer service, reduced manual DM handling, and 24/7 support.",
                },
                {
                  title: "Analytics and Engagement Dashboards",
                  description: "Track follower growth, engagement rates, reach, and post performance. Generate weekly/monthly reports and get alerts when engagement drops.",
                  impact: "Data-driven social strategy, better insights, and measurable growth.",
                },
              ],
            },
            {
              id: "linkedin",
              title: "LinkedIn Automations",
              goal: "Build professional networks and drive B2B leads with automated outreach.",
              automations: [
                {
                  title: "Auto-Post Scheduling for Company Updates",
                  description: "Schedule company updates, thought leadership posts, and industry insights. Auto-share posts to multiple LinkedIn pages and track engagement metrics.",
                  impact: "Consistent professional presence and increased thought leadership visibility.",
                },
                {
                  title: "Smart Connection Requests and Follow-ups",
                  description: "Automate connection requests with personalized messages. Send follow-up messages to new connections after a set period to warm leads.",
                  impact: "Faster network growth, better conversion from connections to conversations.",
                },
                {
                  title: "Message Automation for Lead Nurturing",
                  description: "Create automated sequences for new connections. Send value-driven messages, offers, or resources based on connection profile or activity.",
                  impact: "More qualified leads, better engagement, and streamlined outreach.",
                },
                {
                  title: "Profile Engagement and Analytics",
                  description: "Track profile views, engagement trends, and message response rates. Get alerts for high-intent visitors and analyze which content drives the most engagement.",
                  impact: "Smarter networking decisions and measurable professional growth.",
                },
              ],
            },
            {
              id: "youtube",
              title: "YouTube & Video Automations",
              goal: "Manage video distribution and engagement at scale without manual daily work.",
              automations: [
                {
                  title: "Automated Video Upload and Scheduling",
                  description: "Schedule video uploads for optimal times. Auto-generate thumbnails using AI, add descriptions from templates, and auto-tag videos with keywords.",
                  impact: "Consistent upload schedule, better CTR from thumbnails, and improved discoverability.",
                },
                {
                  title: "AI Comment Moderation and Highlight Extraction",
                  description: "Automatically filter and remove spam comments. Extract high-value comments and feedback using AI to identify key insights and customer testimonials.",
                  impact: "Cleaner comment section, valuable feedback capture, and reduced moderation time.",
                },
                {
                  title: "Auto-Share New Videos Across Platforms",
                  description: "When a video is uploaded, automatically share it to Instagram, Twitter, LinkedIn, and email lists. Customize text for each platform.",
                  impact: "Multi-platform reach, better audience growth, and consistent content distribution.",
                },
                {
                  title: "Analytics Dashboards and Performance Tracking",
                  description: "Track watch time, click-through rates, subscriber growth, and audience retention. Get weekly reports and alerts for videos performing above/below average.",
                  impact: "Data-driven content strategy and measurable channel growth.",
                },
              ],
            },
            {
              id: "workspace",
              title: "Google Workspace & Office Tools",
              goal: "Eliminate manual data entry and keep all business systems synchronized.",
              automations: [
                {
                  title: "Form Submissions to Google Sheets Automation",
                  description: "Automatically populate Google Sheets when forms are submitted. Trigger notifications, send confirmations, or update CRMs based on form data.",
                  impact: "Zero manual data entry, real-time data updates, and better data accuracy.",
                },
                {
                  title: "Document Generation from Templates",
                  description: "Auto-generate contracts, proposals, or agreements from templates with data from CRMs or spreadsheets. Send for e-signature automatically.",
                  impact: "Faster document turnaround, consistent branding, and streamlined approvals.",
                },
                {
                  title: "Auto-Backup and File Management",
                  description: "Automatically backup files to Drive or Dropbox. Archive old files, organize by date/project, and maintain version control.",
                  impact: "Never lose important files and organized document management.",
                },
                {
                  title: "Meeting Scheduling and Summary Generation",
                  description: "Auto-create meeting notes in Docs, generate meeting summaries using AI, and send action items to attendees via email or Slack.",
                  impact: "Better meeting follow-up, improved accountability, and time saved on admin.",
                },
              ],
            },
            {
              id: "ai-productivity",
              title: "AI-Powered Productivity Systems",
              goal: "Leverage AI to make smarter decisions, automate content creation, and reduce mental load.",
              automations: [
                {
                  title: "Custom Chatbots Trained on Your Documents",
                  description: "Train AI chatbots on your FAQs, knowledge base, or internal documentation. Deploy on website, Slack, or WhatsApp to answer customer or employee questions.",
                  impact: "24/7 support without hiring new staff, faster issue resolution, and better UX.",
                },
                {
                  title: "AI Email and Content Summarization",
                  description: "Auto-summarize long emails, documents, or Slack threads. Use AI to extract key action items, decisions, and deadlines.",
                  impact: "Faster information processing and better focus on priority items.",
                },
                {
                  title: "Task Prioritization and Smart Reminders",
                  description: "Auto-prioritize tasks based on deadlines, importance, and dependencies. Send smart reminders via Slack, email, or ClickUp based on context.",
                  impact: "Better focus, fewer missed deadlines, and improved productivity.",
                },
                {
                  title: "Custom Business Intelligence Dashboards",
                  description: "Combine data from marketing, sales, and operations into a single dashboard. Auto-update with real-time data and highlight anomalies or opportunities.",
                  impact: "Unified business view, faster decision-making, and better insights.",
                },
              ],
            },
            {
              id: "funnels",
              title: "Sales & Marketing Funnels",
              goal: "Convert more leads into customers with automated nurturing and tracking.",
              automations: [
                {
                  title: "Lead Capture from Multiple Sources",
                  description: "Capture leads from website forms, Facebook/Instagram ads, email signups, and social DMs. Automatically deduplicate and enrich leads with data.",
                  impact: "Unified lead source, better lead quality, and no duplicate data.",
                },
                {
                  title: "Auto-Nurture with Personalized Offers",
                  description: "Send personalized WhatsApp, email, or SMS sequences based on lead stage, interests, and behavior. Adjust messaging based on responses.",
                  impact: "Higher conversion rates, better personalization, and improved customer experience.",
                },
                {
                  title: "CRM Sync and Pipeline Tracking",
                  description: "Auto-sync all interactions with CRM. Track leads through every stage, set automatic reminders for follow-ups, and get daily pipeline reports.",
                  impact: "Full visibility into sales pipeline, better forecasting, and no lost leads.",
                },
                {
                  title: "Automatic Campaign Performance Reporting",
                  description: "Generate weekly/monthly reports showing conversion rates, cost per lead, ROI, and funnel drop-off points. Get alerts for underperforming campaigns.",
                  impact: "Data-driven optimization and measurable campaign success.",
                },
              ],
            },
            {
              id: "payments",
              title: "Payment & Billing Automations",
              goal: "Get paid faster with automated invoicing, reminders, and financial tracking.",
              automations: [
                {
                  title: "Auto-Invoice Generation",
                  description: "Auto-generate and send invoices from CRMs, forms, or spreadsheets. Include payment links (Razorpay, Stripe, PayPal) and personalized messages.",
                  impact: "Faster invoicing, fewer payment delays, and professional communication.",
                },
                {
                  title: "Smart Payment Reminders",
                  description: "Send automatic payment reminders via WhatsApp and email on due dates. Escalate unpaid invoices after set periods with friendly follow-ups.",
                  impact: "Faster collections, improved cash flow, and reduced DSO.",
                },
                {
                  title: "Payment Gateway Integration",
                  description: "Integrate with Razorpay, Stripe, and PayPal. Auto-reconcile payments, update CRM with payment status, and trigger workflows on successful payments.",
                  impact: "Seamless payments, better financial accuracy, and automated reconciliation.",
                },
                {
                  title: "Automated Financial Dashboards",
                  description: "Auto-generate profit/loss statements, cash flow dashboards, and revenue reports. Get alerts when revenue drops or expenses spike.",
                  impact: "Better financial visibility, faster decision-making, and improved forecasting.",
                },
              ],
            },
            {
              id: "analytics",
              title: "Analytics & Reporting",
              goal: "Get instant, actionable insights into your business performance across all channels.",
              automations: [
                {
                  title: "Real-Time Business Intelligence Dashboards",
                  description: "Pull data from social media, ads, CRM, email, and sales systems into one dashboard. Update in real-time and visualize key metrics.",
                  impact: "Unified business view, faster insights, and better decision-making.",
                },
                {
                  title: "Auto-Generated Weekly and Monthly Reports",
                  description: "Automatically generate comprehensive reports on sales, marketing, customer satisfaction, and operations. Send to stakeholders with key insights and recommendations.",
                  impact: "Consistent reporting, better stakeholder alignment, and time saved on manual reporting.",
                },
                {
                  title: "Smart Alerts and Anomaly Detection",
                  description: "Set up alerts for key metrics (revenue drop, high churn, spike in complaints). Get notified immediately when anomalies are detected so you can act fast.",
                  impact: "Faster issue detection, reduced downtime, and proactive problem-solving.",
                },
                {
                  title: "Centralized Reporting Across Teams and Clients",
                  description: "Aggregate reports from multiple departments or client accounts into one centralized system. Provide clients with white-labeled dashboards.",
                  impact: "Better team alignment, improved client satisfaction, and easier account management.",
                },
              ],
            },
          ];

          const [selected, setSelected] = useState(industries[0].id);
          const [carouselIndex, setCarouselIndex] = useState(0);
          const [searchQuery, setSearchQuery] = useState("");
          const searchInputRef = useRef<HTMLInputElement>(null);

          // Combine industries and automations for unified display
          const allItemsList = [
            ...industries,
            ...commonAutomations,
          ];
          
          const current = allItemsList.find((i) => i.id === selected) || industries[0];

          // Calculate similarity score between search query and industry title using Levenshtein distance
          const calculateSimilarity = (query: string, title: string): number => {
            const q = query.toLowerCase().trim();
            const t = title.toLowerCase();
            
            if (!q) return 0;
            if (t === q) return 1;
            
            // Check for exact word matches in title
            const titleWords = t.split(/\s+/);
            const queryWords = q.split(/\s+/);
            
            // If any query word exactly matches any title word
            for (const qWord of queryWords) {
              if (titleWords.some(tWord => tWord.includes(qWord) || qWord.includes(tWord))) {
                return 0.95;
              }
            }
            
            // Check if query is substring of title
            if (t.includes(q)) return 0.9;
            
            // Check if title starts with query
            if (t.startsWith(q)) return 0.85;
            
            // Levenshtein distance for fuzzy matching
            const levenshtein = (str1: string, str2: string): number => {
              const track = Array(str2.length + 1).fill(null).map(() =>
                Array(str1.length + 1).fill(null));
              
              for (let i = 0; i <= str1.length; i += 1) track[0][i] = i;
              for (let j = 0; j <= str2.length; j += 1) track[j][0] = j;
              
              for (let j = 1; j <= str2.length; j += 1) {
                for (let i = 1; i <= str1.length; i += 1) {
                  const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
                  track[j][i] = Math.min(
                    track[j][i - 1] + 1,
                    track[j - 1][i] + 1,
                    track[j - 1][i - 1] + indicator
                  );
                }
              }
              
              return track[str2.length][str1.length];
            };
            
            const maxLen = Math.max(q.length, t.length);
            const distance = levenshtein(q, t);
            const similarity = 1 - (distance / maxLen);
            
            return Math.max(0, similarity);
          };

          // Find the most similar industry or automation
          const handleSearch = () => {
            if (!searchQuery.trim()) return;
            
            // Search in industries
            const industryMatches = industries
              .map((ind) => ({
                id: ind.id,
                title: ind.title,
                type: "industry",
                similarity: calculateSimilarity(searchQuery, ind.title),
              }))
              .filter(m => m.similarity > 0);
            
            // Search in universal automations
            const automationMatches = commonAutomations
              .map((auto) => ({
                id: auto.id,
                title: auto.title,
                type: "automation",
                similarity: calculateSimilarity(searchQuery, auto.title),
              }))
              .filter(m => m.similarity > 0);
            
            // Combine and sort by similarity
            const allMatches = [...industryMatches, ...automationMatches]
              .sort((a, b) => b.similarity - a.similarity);
            
            if (allMatches.length > 0) {
              setSelected(allMatches[0].id);
              
              // Create combined items list for carousel
              const allItemsForSearch = [
                ...industries,
                ...commonAutomations
              ];
              
              // Scroll carousel to show the selected item
              const itemsPerView = 3;
              const maxIndexVal = Math.max(0, allItemsForSearch.length - itemsPerView);
              const bestMatch = allItemsForSearch.findIndex((i) => i.id === allMatches[0].id);
              const newIndex = Math.max(0, Math.min(bestMatch - 1, maxIndexVal));
              setCarouselIndex(newIndex);
            }
            
            setSearchQuery("");
          };

          const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          };
          
          const itemsPerView = 3;
          
          const handlePrev = () => {
            setCarouselIndex(Math.max(0, carouselIndex - 1));
          };
          
          const handleNext = () => {
            setCarouselIndex(Math.min(maxIndex, carouselIndex + 1));
          };
          
          // Combine industries and universal automations for carousel display
          const allItems = [
            ...industries.map(ind => ({ ...ind, type: 'industry' })),
            ...commonAutomations.map(auto => ({ ...auto, type: 'automation' }))
          ];
          
          const maxIndex = Math.max(0, allItems.length - itemsPerView);
          const visibleIndustries = allItems.slice(carouselIndex, carouselIndex + itemsPerView);

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
                    {/* Search Bar Section */}
                    <div className="mb-12 -mt-12">
                      <div className="flex gap-0 max-w-2xl mx-auto mb-8 rounded-full bg-white/5 border border-accent/40 neon-glow-border overflow-hidden">
                        <input
                          ref={searchInputRef}
                          type="text"
                          placeholder="Search industry/automation..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          onKeyPress={handleKeyPress}
                          className="flex-1 px-6 py-4 text-lg bg-transparent border-none text-foreground placeholder-foreground/40 focus:outline-none transition-all duration-300"
                        />
                        <button
                          onClick={handleSearch}
                          className="px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold transition-all duration-300 flex items-center gap-2 border-none"
                        >
                          <Search className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                  </ScrollReveal>

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
                          <div className="flex flex-wrap gap-3 justify-center">
                            {visibleIndustries.map((ind, idx) => (
                              <button
                                key={ind.id}
                                onClick={() => setSelected(ind.id)}
                                className={`pill-tag px-6 py-2 rounded-full border-2 text-center transition-all duration-300 transform whitespace-nowrap ${
                                  selected === ind.id
                                    ? "bg-accent text-white border-accent shadow-lg pill-selected neon-glow-border"
                                    : "bg-white/5 border-white/30 hover:bg-white/10 hover:border-accent/50 hover:shadow-md text-foreground"
                                }`}
                                style={{
                                  animationDelay: `${idx * 0.05}s`
                                }}
                              >
                                <span className="text-xs font-semibold">{ind.title}</span>
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
