import { useEffect, useRef } from "react";
import { Instagram, Facebook, Youtube, Play, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroPortrait from "@/assets/vaikuntha-vraj-das-portrait.png";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
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

    // Animate badge
    if (badgeRef.current) {
      gsap.from(badgeRef.current, {
        opacity: 0,
        y: 20,
        scale: 0.9,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.6,
      });
    }

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
      // Only kill this component's ScrollTrigger
      if (parallaxTriggerRef.current) {
        parallaxTriggerRef.current.kill();
        parallaxTriggerRef.current = null;
      }
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative overflow-hidden max-h-[85vh] flex items-center bg-gradient-to-br from-saffron-light/10 via-gold-light/5 to-background"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div ref={contentRef} className="space-y-8">
            <span 
              className="inline-block px-5 py-2.5 rounded-full bg-primary/10 text-primary font-medium text-sm tracking-wide"
              data-animate="fadeIn"
            >
              WE CARE
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
              Spiritual Solutions for{" "}
              <span className="text-primary relative">
                Daily Life
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 rounded-full" />
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Ancient wisdom meets modern challenges. Find clarity, purpose, and peace through practical
              teachings from the Bhagavad Gita.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/media">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base font-medium hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Talks
                </Button>
              </Link>
              <Link to="/guidance">
                <Button 
                  variant="outline" 
                  className="rounded-full px-8 py-6 text-base font-medium hover:scale-105 transition-all duration-300 border-2 hover:border-primary/50 hover:bg-primary/5"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Session
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-muted-foreground font-medium">Follow:</span>
              <a 
                href="https://www.youtube.com/@vaikunthavrajdas" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 flex items-center justify-center group p-2"
              >
                <img 
                  src="https://cdn3d.iconscout.com/3d/free/thumb/free-youtube-3d-icon-png-download-7516827.png" 
                  alt="YouTube" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                />
              </a>
              <a 
                href="https://www.instagram.com/vaikunthavrajdas/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 flex items-center justify-center group p-2"
              >
                <img 
                  src="https://cdn3d.iconscout.com/3d/free/thumb/free-instagram-logo-3d-icon-png-download-12257263.png" 
                  alt="Instagram" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                />
              </a>
              <a 
                href="https://www.facebook.com/vaikunthavrajdas/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 flex items-center justify-center group p-2"
              >
                <img 
                  src="https://cdn3d.iconscout.com/3d/free/thumb/free-facebook-logo-3d-icon-png-download-12257268.png" 
                  alt="Facebook" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                />
              </a>
            </div>
          </div>
          <div ref={imageRef} className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative group">
              <img
                src={heroPortrait}
                alt="Vaikuntha Vraj Das - Spiritual Guide"
                className="w-full h-[75vh] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
            <div 
              ref={badgeRef}
              className="absolute -bottom-6 -left-6 bg-card/95 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-border/50"
            >
              <div className="text-3xl font-bold text-primary">13+</div>
              <div className="text-sm text-muted-foreground font-medium">Years of Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;