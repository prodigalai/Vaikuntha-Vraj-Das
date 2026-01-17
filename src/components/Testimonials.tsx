import { Quote } from "lucide-react";

const testimonials = [
  { name: "Rahul S.", role: "IIT Delhi Student", quote: "Prabhuji's guidance helped me find clarity during my most stressful semester. His practical approach to spirituality resonates deeply." },
  { name: "Priya M.", role: "Young Professional", quote: "The case studies and practical protocols have transformed how I handle workplace stress. Forever grateful." },
  { name: "Sharma Family", role: "Delhi", quote: "Our family attends the weekly Gita sessions. It has brought us closer together and given us a spiritual foundation." },
];

const Testimonials = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What People Say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, index) => (
          <div key={index} className={`p-6 rounded-2xl bg-card border border-border animate-slide-up stagger-${index + 1}`}>
            <Quote className="w-8 h-8 text-primary/30 mb-4" />
            <p className="text-muted-foreground mb-6 italic">"{t.quote}"</p>
            <div>
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm text-muted-foreground">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;