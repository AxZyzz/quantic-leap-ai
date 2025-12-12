import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import tool1 from '@/assets/tools/1.png';
import tool2 from '@/assets/tools/2.png';
import tool3 from '@/assets/tools/3.png';
import tool4 from '@/assets/tools/4.png';
import tool5 from '@/assets/tools/5.png';
import tool6 from '@/assets/tools/6.png';
import tool7 from '@/assets/tools/7.png';
import tool8 from '@/assets/tools/8.png';
import tool9 from '@/assets/tools/9.png';
import tool10 from '@/assets/tools/10.png';
import tool11 from '@/assets/tools/11.png';
import tool12 from '@/assets/tools/12.png';
import tool13 from '@/assets/tools/13.png';
import tool14 from '@/assets/tools/14.png';

const leftColumnTools = [tool1, tool2, tool3, tool4, tool5, tool6, tool7];
const rightColumnTools = [tool8, tool9, tool10, tool11, tool12, tool13, tool14];

const ToolsSection = () => {
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const leftColumn = leftColumnRef.current;
    const rightColumn = rightColumnRef.current;

    if (!leftColumn || !rightColumn) return;

    // Clone the content for seamless infinite scroll
    leftColumn.innerHTML = leftColumn.innerHTML + leftColumn.innerHTML;
    rightColumn.innerHTML = rightColumn.innerHTML + rightColumn.innerHTML;

    const animateLeftColumn = leftColumn.animate(
      [
        { transform: 'translateY(0)' },
        { transform: 'translateY(-50%)' }
      ],
      {
        duration: 20000,
        iterations: Infinity,
        easing: 'linear'
      }
    );

    const animateRightColumn = rightColumn.animate(
      [
        { transform: 'translateY(-50%)' },
        { transform: 'translateY(0)' }
      ],
      {
        duration: 20000,
        iterations: Infinity,
        easing: 'linear'
      }
    );

    // Pause animations when tab is not visible
    const handleVisibilityChange = () => {
      if (document.hidden) {
        animateLeftColumn.pause();
        animateRightColumn.pause();
      } else {
        animateLeftColumn.play();
        animateRightColumn.play();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      animateLeftColumn.cancel();
      animateRightColumn.cancel();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
          {/* Left side - Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Integrate With Tools You Know and Love
            </h2>
            <p className="text-xl text-muted-foreground mb-4">
              A2B offers integration with 850+ industry standard tools.
            </p>
            <Link to="/case-studies#tech-stack" className="text-accent hover:underline">
              View our tech stack here
            </Link>
          </div>

          {/* Right side - Moving Logos */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-8">
              {/* Left Column - Moving Upwards */}
              <div className="relative h-[500px] overflow-hidden">
                <div ref={leftColumnRef} className="absolute w-full">
                  {leftColumnTools.map((tool, index) => (
                    <div key={`left-${index}`} className="flex justify-center p-6">
                      <img
                        src={tool}
                        alt={`Integration Tool ${index + 1}`}
                        className="h-12 w-auto hover:opacity-80 transition-opacity duration-300 transform hover:scale-105"
                        style={{ imageRendering: 'crisp-edges' }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Moving Downwards */}
              <div className="relative h-[500px] overflow-hidden">
                <div ref={rightColumnRef} className="absolute w-full">
                  {rightColumnTools.map((tool, index) => (
                    <div key={`right-${index}`} className="flex justify-center p-6">
                      <img
                        src={tool}
                        alt={`Integration Tool ${index + 8}`}
                        className="h-12 w-auto hover:opacity-80 transition-opacity duration-300 transform hover:scale-105"
                        style={{ imageRendering: 'crisp-edges' }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;