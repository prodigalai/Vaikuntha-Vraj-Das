import { Instagram, Facebook, Youtube, Play, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-saffron-light/20 via-gold-light/10 to-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
              WE CARE
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              Spiritual Solutions for <span className="text-primary">Daily Life</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Ancient wisdom meets modern challenges. Find clarity, purpose, and peace through practical 
              teachings from the Bhagavad Gita.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/media">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base font-medium hover:scale-105 transition-all">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Talks
                </Button>
              </Link>
              <Link to="/guidance">
                <Button variant="outline" className="rounded-full px-8 py-6 text-base font-medium hover:scale-105 transition-all border-2">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Session
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-muted-foreground">Follow:</span>
              <a href="https://www.youtube.com/@vaikunthavrajdas" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border-2 border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/vaikunthavrajdas/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border-2 border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/vaikunthavrajdas/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border-2 border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80" alt="Vaikuntha Vraj Das" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-xl border border-border">
              <div className="text-3xl font-bold text-primary">13+</div>
              <div className="text-sm text-muted-foreground">Years of Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;