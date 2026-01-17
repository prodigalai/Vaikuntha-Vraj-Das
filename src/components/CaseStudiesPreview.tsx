import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  { slug: "silent-epidemic-suicide-india", title: "The Silent Epidemic: Suicide in India", category: "Mind", image: "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=800&q=80" },
  { slug: "stress-management-gita", title: "Managing Stress Through Gita", category: "Mind", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80" },
  { slug: "career-dharma", title: "Finding Your Career Dharma", category: "Career", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" },
];

const CaseStudiesPreview = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-muted/30">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Featured Case Studies</h2>
        <Link to="/case-studies" className="hidden md:flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
          View All <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {caseStudies.map((study, index) => (
          <Link to={`/case-studies/${study.slug}`} key={index} className={`group rounded-2xl overflow-hidden bg-card card-hover animate-slide-up stagger-${index + 1}`}>
            <div className="aspect-video overflow-hidden">
              <img src={study.image} alt={study.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="p-5">
              <span className="text-xs text-primary font-medium uppercase">{study.category}</span>
              <h3 className="text-lg font-semibold mt-1 group-hover:text-primary transition-colors">{study.title}</h3>
            </div>
          </Link>
        ))}
      </div>
      <Link to="/case-studies" className="md:hidden flex items-center justify-center gap-2 text-primary font-medium mt-8">
        View All Case Studies <ArrowRight className="w-4 h-4" />
      </Link>
    </section>
  );
};

export default CaseStudiesPreview;