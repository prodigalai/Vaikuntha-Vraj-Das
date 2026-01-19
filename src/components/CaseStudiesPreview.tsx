import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  { slug: "silent-epidemic-suicide-india", title: "The Silent Epidemic: Suicide in India", category: "Mind", image: "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=800&q=80" },
  { slug: "stress-management-gita", title: "Managing Stress Through Gita", category: "Mind", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80" },
  { slug: "career-dharma", title: "Finding Your Career Dharma", category: "Career", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" },
];

const CaseStudiesPreview = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 bg-muted/20">
      <div className="flex items-center justify-between mb-12" data-animate="fadeInUp">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Featured Case Studies</h2>
        <Link 
          to="/case-studies" 
          className="hidden md:flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300 group"
        >
          View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      <div 
        className="grid md:grid-cols-3 gap-6"
        data-animate-group="fadeInUp"
        data-stagger-delay="0.15"
      >
        {caseStudies.map((study, index) => (
          <Link 
            to={`/case-studies/${study.slug}`} 
            key={index} 
            className="group rounded-2xl overflow-hidden bg-card border border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:scale-[1.02] hover:border-primary/20"
            data-animate-item
          >
            <div className="aspect-video overflow-hidden relative">
              <img 
                src={study.image} 
                alt={study.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-5">
              <span className="text-xs text-primary font-medium uppercase tracking-wide">{study.category}</span>
              <h3 className="text-lg font-semibold mt-2 group-hover:text-primary transition-colors duration-300">{study.title}</h3>
            </div>
          </Link>
        ))}
      </div>
      <Link 
        to="/case-studies" 
        className="md:hidden flex items-center justify-center gap-2 text-primary font-medium mt-8 group"
        data-animate="fadeInUp"
      >
        View All Case Studies <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </section>
  );
};

export default CaseStudiesPreview;