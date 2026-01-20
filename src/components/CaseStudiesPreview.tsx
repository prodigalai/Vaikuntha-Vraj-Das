import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import arcBg from "@/assets/vedic_architecture_bg.png";

const caseStudies = [
  { slug: "silent-epidemic-suicide-india", title: "The Silent Epidemic: Suicide in India", category: "Mind", image: "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=800&q=80" },
  { slug: "stress-management-gita", title: "Managing Stress Through Gita", category: "Mind", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80" },
  { slug: "career-dharma", title: "Finding Your Career Dharma", category: "Career", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" },
];

const CaseStudiesPreview = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Soft warm background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-[hsl(40,35%,94%)] to-background" />

      {/* Subtle blurred bg */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${arcBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6" data-animate="fadeInUp">
          <div className="text-center md:text-left">
            <span className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium uppercase tracking-wider mb-4">
              Case Studies
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground">
              Featured <span className="font-script text-primary">Stories</span>
            </h2>
          </div>
          <Link
            to="/case-studies"
            className="hidden md:flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300 group"
          >
            View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div
          className="grid md:grid-cols-3 gap-8"
          data-animate-group="fadeInUp"
          data-stagger-delay="0.15"
        >
          {caseStudies.map((study, index) => (
            <Link
              to={`/case-studies/${study.slug}`}
              key={index}
              className="group rounded-3xl overflow-hidden bg-card/80 backdrop-blur-sm border border-border/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1"
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
              <div className="p-6">
                <span className="text-xs text-primary font-medium uppercase tracking-wider">{study.category}</span>
                <h3 className="text-xl font-serif font-semibold mt-2 text-foreground group-hover:text-primary transition-colors duration-300">{study.title}</h3>
              </div>
            </Link>
          ))}
        </div>
        <Link
          to="/case-studies"
          className="md:hidden flex items-center justify-center gap-2 text-primary font-medium mt-10 group"
          data-animate="fadeInUp"
        >
          View All Case Studies <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;
