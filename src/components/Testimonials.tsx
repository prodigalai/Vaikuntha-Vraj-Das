import { Quote } from "lucide-react";
import blurredCityBg from "@/assets/blurred-cityscape-bg.jpg";

const testimonials = [
  { name: "Rahul S.", role: "IIT Delhi Student", quote: "Prabhuji's guidance helped me find clarity during my most stressful semester. His practical approach to spirituality resonates deeply." },
  { name: "Priya M.", role: "Young Professional", quote: "The case studies and practical protocols have transformed how I handle workplace stress. Forever grateful." },
  { name: "Sharma Family", role: "Delhi", quote: "Our family attends the weekly Gita sessions. It has brought us closer together and given us a spiritual foundation." },
];

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-[hsl(38,35%,93%)] to-background" />
      
      {/* Subtle blurred bg */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${blurredCityBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.05,
          transform: 'scaleX(-1)',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 relative z-10">
        <div className="text-center mb-16" data-animate="fadeInUp">
          <span className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium uppercase tracking-wider mb-6">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground">
            What People <span className="font-script text-primary">Say</span>
          </h2>
        </div>
        <div 
          className="grid md:grid-cols-3 gap-8"
          data-animate-group="fadeInUp"
          data-stagger-delay="0.15"
        >
          {testimonials.map((t, index) => (
            <div 
              key={index} 
              className="p-8 rounded-3xl bg-card/80 backdrop-blur-sm border border-border/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1"
              data-animate-item
            >
              <Quote className="w-10 h-10 text-primary/25 mb-6" />
              <p className="text-muted-foreground mb-8 italic leading-relaxed text-lg">"{t.quote}"</p>
              <div>
                <div className="font-serif font-semibold text-lg text-foreground">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
