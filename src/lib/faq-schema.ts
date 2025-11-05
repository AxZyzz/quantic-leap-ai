export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does A2B do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A2B is an AI solutions agency that designs, builds, and deploys custom AI systems for businesses. We create intelligent automation, conversational AI agents, knowledge management systems, voice assistants, and workflow integrations that help organizations scale efficiently and deliver better customer experiences."
      }
    },
    {
      "@type": "Question",
      "name": "Who are your typical clients?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work with growth-stage startups, enterprise technology teams, e-commerce businesses, professional services firms, and digital agencies. Our clients range from companies looking to automate their first workflow to large organizations implementing enterprise-wide AI transformation."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost to build an AI solution with A2B?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Project costs vary based on complexity, scope, and requirements. Simple automation workflows might start around $5,000-$15,000, while comprehensive AI systems with custom training and enterprise integrations typically range from $30,000-$100,000+. We provide detailed quotes after understanding your specific needs during a discovery consultation."
      }
    },
    {
      "@type": "Question",
      "name": "What AI technologies and models do you use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We're model-agnostic and work with all major LLM providers including OpenAI, Anthropic, Google, and others. We select models based on your specific requirements—whether you prioritize speed, accuracy, cost-efficiency, or specialized capabilities. Our infrastructure supports rapid testing across providers to identify optimal performance."
      }
    },
    {
      "@type": "Question",
      "name": "What's your approach to data security?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Security is foundational to our architecture. We implement end-to-end encryption, use secure credential management systems, follow least-privilege access controls, and can deploy solutions in your private cloud or on-premises environment. We're experienced with HIPAA, SOC 2, and other compliance frameworks."
      }
    },
    {
      "@type": "Question",
      "name": "Where will the AI system be hosted?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We primarily deploy on AWS, but support multi-cloud environments including Azure, GCP, and DigitalOcean based on your needs. We also accommodate private cloud and on-premises deployments for organizations with specific security or compliance requirements."
      }
    },
    {
      "@type": "Question",
      "name": "What kind of ROI can we expect?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ROI varies by use case. Clients typically see significant returns through reduced labor costs (40-70% reduction in manual tasks), improved conversion rates (15-30% increases), faster response times (reducing hours to minutes), and scalability gains (handling 10x volume without proportional cost increases)."
      }
    },
    {
      "@type": "Question",
      "name": "What is RAG and do we need it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Retrieval-Augmented Generation (RAG) is a technique that grounds AI responses in your specific knowledge base—documents, databases, or proprietary information. You need RAG if you want AI to answer questions accurately using your company's information rather than general knowledge. It's essential for customer support, internal knowledge management, and domain-specific applications."
      }
    }
  ]
};