import { useEffect, useRef } from 'react';
import partnerLogo from '@/assets/partners/download.ico';

const PartnersScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Clone the initial set of logos to create the seamless loop
    const content = scrollContainer.innerHTML;
    scrollContainer.innerHTML = content + content;

    const animate = () => {
      if (!scrollContainer) return;
      
      const animation = scrollContainer.animate(
        [
          { transform: 'translateX(0)' },
          { transform: 'translateX(-50%)' }
        ],
        {
          duration: 30000,
          iterations: Infinity,
          easing: 'linear'
        }
      );

      return animation;
    };

    const animation = animate();

    return () => {
      if (animation) {
        animation.cancel();
      }
    };
  }, []);

  // Create array of logos (using the same logo multiple times for now)
  const logos = Array(8).fill(partnerLogo);

  return (
    <div className="w-full overflow-hidden py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-8 text-foreground">
          Trusted by Leading Brands
        </h2>
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-16 items-center"
            style={{ width: 'fit-content' }}
          >
            {logos.map((logo, index) => (
              <div
                key={index}
                className="partner-item flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={logo}
                  alt="Partner Logo"
                  className="h-12 w-auto opacity-70 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersScroll;