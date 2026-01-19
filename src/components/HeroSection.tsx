import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroPortrait from "@/assets/vaikuntha-vraj-das-portrait.png";
import blurredCityBg from "@/assets/blurred-cityscape-bg.jpg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const parallaxTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    if (!heroRef.current || !contentRef.current || !imageRef.current) return;

    // Animate content on mount
    const tl = gsap.timeline();
    
    tl.from(contentRef.current.children, {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.15,
      ease: "power2.out",
    });

    // Animate image with scale effect
    gsap.from(imageRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 1.2,
      ease: "power2.out",
      delay: 0.3,
    });

    // Parallax effect on scroll
    const parallaxAnimation = gsap.to(imageRef.current, {
      y: 30,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Store the ScrollTrigger instance for cleanup
    if (parallaxAnimation.scrollTrigger) {
      parallaxTriggerRef.current = parallaxAnimation.scrollTrigger;
    }

    return () => {
      if (parallaxTriggerRef.current) {
        parallaxTriggerRef.current.kill();
        parallaxTriggerRef.current = null;
      }
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Blurred cityscape background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${blurredCityBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          opacity: 0.4,
        }}
      />
      
      {/* Warm cream gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[hsl(40,40%,96%)] via-[hsl(40,40%,96%)/80%] to-[hsl(38,35%,92%)/95%]" />
      
      {/* Soft radial glow */}
      <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(ellipse_at_30%_50%,hsl(38,60%,85%),transparent_60%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Portrait */}
          <div ref={imageRef} className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              <img
                src={heroPortrait}
                alt="Vaikuntha Vraj Das - Spiritual Guide"
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.1))',
                }}
              />
              {/* Soft glow behind portrait */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[hsl(38,60%,85%)/50%] via-transparent to-transparent blur-3xl scale-110" />
            </div>
          </div>

          {/* Right side - Content */}
          <div ref={contentRef} className="space-y-8 order-1 lg:order-2 text-center lg:text-left">
            {/* Script name - handwritten style */}
            <h1 className="font-script text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground leading-none">
              Vaikuntha Vraj Das
            </h1>
            
            {/* Description paragraph */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              It's not every day that one stumbles upon a monk's website. I want to thank you for being here! 
              I have spent over 13 years as a practicing monk, devoted to understanding and decoding 
              the many aspects of life. Along the way, I've discovered that wisdom grows when it's shared. 
              That's why I speak, write, and connect with the simple hope that the lessons life has taught me 
              might illuminate someone else's path, too.
            </p>
            
            {/* CTA Button - warm golden gradient */}
            <div className="pt-4">
              <Link to="/guidance">
                <Button 
                  className="btn-golden px-10 py-7 text-lg font-medium"
                >
                  Get Guidance
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
