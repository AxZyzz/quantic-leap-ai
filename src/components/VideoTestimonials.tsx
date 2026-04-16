import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";

const videoModules = import.meta.glob('@/assets/textimonials/*.{mp4,webm,ogg}', { eager: true, query: '?url', import: 'default' });

const melvinTestimonial = (
  <div className="space-y-4">
    <p className="text-muted-foreground">
      I needed an AI automation workflow that could pull data from Google Search Console and Analytics to generate weekly SEO reports for my clients.
    </p>
    <p className="text-muted-foreground">
      they understood the project immediately and kept me updated. I’m really impressed with his dedication, responsiveness, and attention to detail.
    </p>
    <p className="text-lg italic font-medium text-foreground border-l-2 border-accent pl-4 my-6">
      "Earlier, it used to take me 2 to 3 days to prepare a monthly SEO report. Now, it takes just minutes. That’s a huge time saver."
    </p>
    <p className="font-medium text-foreground pt-2">
      If you're looking to automate your workflows, I highly recommend him. You won’t be disappointed.
    </p>
  </div>
);

const videos = Object.entries(videoModules).map(([path, url], index) => ({
  id: index + 1,
  src: url as string,
  text: index === 0 ? melvinTestimonial : null
}));

const VideoTestimonials = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
      
      // Pause all videos when scrolling
      const videoElements = document.querySelectorAll('.testimonial-video');
      videoElements.forEach((vid: any) => {
        if (!vid.paused) {
          vid.pause();
        }
      });
    });
  }, [api]);

  return (
    <div className="w-full relative mb-16 mt-8">
      <ScrollReveal>
        <div className="text-center mb-10">
          <h3 className="text-3xl md:text-4xl font-bold mb-3">See It In Action</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear directly from our clients about their automation journey
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <div className="w-full mx-auto relative group max-w-5xl">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent>
              {videos.map((video) => (
                <CarouselItem key={video.id} className="basis-full flex justify-center">
                  <div className={`p-2 lg:p-4 w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${video.text ? 'justify-between' : 'justify-center'}`}>
                    
                    {video.text && (
                      <Card className="w-full lg:w-1/2 text-left order-2 lg:order-1 relative overflow-hidden shadow-md h-fit">
                        <CardContent className="p-6 md:p-8">
                          {video.text}
                          
                          <div className="mt-6 pt-4 border-t">
                            <p className="font-semibold text-foreground">Melvin</p>
                            <p className="text-sm text-muted-foreground">Digital Marketing & n8n Consultant</p>
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    <div className={`flex justify-center flex-shrink-0 relative ${video.text ? 'lg:w-[280px] order-1 lg:order-2' : ''}`}>
                      {/* Premium Floating Video Card */}
                      <div className="relative mx-auto rounded-[2.5rem] h-[550px] w-full min-w-[260px] max-w-[270px] shadow-2xl overflow-hidden ring-1 ring-white/10 backdrop-blur-3xl group/video transition-transform duration-500 hover:scale-[1.02]">
                        
                        {/* Ambient Glowing Background */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-primary/20 opacity-50 blur-xl pointer-events-none" />
                        
                        {/* Glass Border Effect */}
                        <div className="absolute inset-0 rounded-[2.5rem] border-[1px] border-white/20 pointer-events-none z-20" />
                        
                        {/* Shadow Gradient Overlay (Internal) */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />

                        {/* Video Layer */}
                        <div className="w-full h-full bg-black/50 overflow-hidden relative z-0">
                          <video
                            src={video.src}
                            className="w-full h-full object-cover testimonial-video"
                            controls
                            playsInline
                            preload="metadata"
                            poster={video.src + "#t=0.1"}
                          />
                        </div>
                      </div>
                    </div>

                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {videos.length > 1 && (
              <>
                <CarouselPrevious className="absolute -left-2 md:-left-8 top-1/2 bg-background/80 backdrop-blur-sm border-white/10 hidden lg:flex" />
                <CarouselNext className="absolute -right-2 md:-right-8 top-1/2 bg-background/80 backdrop-blur-sm border-white/10 hidden lg:flex" />
              </>
            )}
          </Carousel>
          
          {videos.length > 1 && (
            <div className="flex flex-col items-center mt-8 gap-4">
              <div className="bg-muted px-4 py-1.5 rounded-full text-sm font-medium text-muted-foreground flex gap-2 items-center">
                <span>{current}</span>
                <span className="w-8 h-px bg-muted-foreground/30"></span>
                <span>{count}</span>
              </div>
              
              <div className="flex justify-center gap-2">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index + 1 === current 
                        ? "bg-accent w-6" 
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => api?.scrollTo(index)}
                  />
                ))}
              </div>
            </div>
          )}

        </div>
      </ScrollReveal>
    </div>
  );
};

export default VideoTestimonials;
