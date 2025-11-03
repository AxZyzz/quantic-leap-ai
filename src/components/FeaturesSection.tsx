import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import feature1 from '@/assets/features/1.png';
import feature2 from '@/assets/features/2.png';
import feature3 from '@/assets/features/3.png';
import feature4 from '@/assets/features/4.png';
import feature5 from '@/assets/features/5.png';

const features = [
  {
    id: 1,
    title: "Custom AI agent engineering →",
    description: "We design, deploy, and maintain custom AI agents specifically tailored to your business growth goals.",
    image: feature1
  },
  {
    id: 2,
    title: "Fully Managed automation pipelines",
    description: "Robust data infrastructure and ingestion processes are a critical component in how we build our AI systems.",
    image: feature2
  },
  {
    id: 3,
    title: "Performance analytic dashboard",
    description: "Easily track ROI and efficiency gains with custom metrics on your AI agent's performance.",
    image: feature3
  },
  {
    id: 4,
    title: "Intelligent access control",
    description: "Manage agent permissions with your teams to ensure secure operations across your organization.",
    image: feature4
  },
  {
    id: 5,
    title: "Secure and compliant protocols",
    description: "Technology architecture that is fully hosted in the cloud, ensuring compliance with SOC-2, ISO, and other industry standards.",
    image: feature5
  }
];

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleFeatureClick = (featureId: number) => {
    if (featureId === activeFeature) return;
    setIsTransitioning(true);
    setActiveFeature(featureId);
    // Reset transition state after animation completes
    setTimeout(() => setIsTransitioning(false), 300);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need In One Place
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to make your business seamless.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Features List */}
          <div className="space-y-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`cursor-pointer group transition-all duration-300 ${
                  activeFeature === feature.id ? 'scale-105' : ''
                }`}
                onClick={() => handleFeatureClick(feature.id)}
              >
                <h3 className={`text-xl font-semibold mb-2 flex items-center ${
                  activeFeature === feature.id ? 'text-accent' : 'text-foreground'
                }`}>
                  {feature.title}
                  <ArrowRight className={`ml-2 h-5 w-5 transition-transform duration-300 ${
                    activeFeature === feature.id ? 'translate-x-1' : ''
                  }`} />
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Feature Image */}
          <div className="relative h-[500px]">
            {features.map((feature) => (
              <img
                key={feature.id}
                src={feature.image}
                alt={feature.title}
                className={`absolute inset-0 w-full h-full object-contain transition-all duration-300 ${
                  activeFeature === feature.id
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-95'
                } ${isTransitioning ? 'transition-all duration-300' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;