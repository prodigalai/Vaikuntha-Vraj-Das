import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Filter, Brain, Heart, Briefcase, Users, Baby, Sparkles } from "lucide-react";
import { useState } from "react";

const categories = [
  { id: "all", label: "All", icon: Filter },
  { id: "mind", label: "Mind", icon: Brain },
  { id: "relationships", label: "Relationships", icon: Heart },
  { id: "career", label: "Career", icon: Briefcase },
  { id: "youth", label: "Youth", icon: Users },
  { id: "parenting", label: "Parenting", icon: Baby },
  { id: "faith", label: "Faith", icon: Sparkles },
];

const formats = ["All Formats", "Article", "Infographic", "Video", "Worksheet"];
const audiences = ["All Audiences", "Student", "Young Professional", "Family"];

const caseStudies = [
  {
    slug: "silent-epidemic-suicide-india",
    title: "The Silent Epidemic: Understanding Suicide in India",
    category: "mind",
    format: "Article",
    audience: "Student",
    description: "A deep dive into the rising crisis of mental health and suicide among youth, with practical spiritual solutions rooted in Vedic wisdom.",
    image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=800&q=80",
    featured: true,
  },
  {
    slug: "stress-management-gita",
    title: "Managing Stress Through Gita's Wisdom",
    category: "mind",
    format: "Article",
    audience: "Young Professional",
    description: "How the teachings of Bhagavad Gita offer practical tools for managing modern-day stress and finding lasting peace.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
  },
  {
    slug: "building-lasting-relationships",
    title: "Building Lasting Relationships",
    category: "relationships",
    format: "Article",
    audience: "Young Professional",
    description: "Vedic principles for creating meaningful connections in an age of superficiality and instant gratification.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
  },
  {
    slug: "career-dharma",
    title: "Finding Your Career Dharma",
    category: "career",
    format: "Article",
    audience: "Student",
    description: "How to choose a career path aligned with your nature, values, and higher purpose using Vedic wisdom.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
  {
    slug: "digital-addiction",
    title: "Breaking Free from Digital Addiction",
    category: "youth",
    format: "Worksheet",
    audience: "Student",
    description: "A 21-day protocol to reclaim your attention, time, and mental peace from technology's grip.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
  },
  {
    slug: "purpose-anxiety",
    title: "From Anxiety to Purpose",
    category: "mind",
    format: "Article",
    audience: "Young Professional",
    description: "Understanding the root causes of anxiety and finding lasting peace through spiritual practice and purpose.",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80",
  },
];

const CaseStudies = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedFormat, setSelectedFormat] = useState("All Formats");
  const [selectedAudience, setSelectedAudience] = useState("All Audiences");

  const filteredStudies = caseStudies.filter(study => {
    const categoryMatch = selectedCategory === "all" || study.category === selectedCategory;
    const formatMatch = selectedFormat === "All Formats" || study.format === selectedFormat;
    const audienceMatch = selectedAudience === "All Audiences" || study.audience === selectedAudience;
    return categoryMatch && formatMatch && audienceMatch;
  });

  const featuredStudy = caseStudies.find(s => s.featured);

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-12 text-center space-y-6">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium animate-slide-down">
            Case Studies
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            Burning Topics, Spiritual Solutions
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-slide-up stagger-1">
            In-depth explorations of modern challenges with practical protocols rooted in Vedic wisdom.
          </p>
        </div>

        {/* Featured Case Study */}
        {featuredStudy && (
          <Link 
            to={`/case-studies/${featuredStudy.slug}`}
            className="block mb-16 group"
          >
            <div className="relative rounded-3xl overflow-hidden animate-scale-in">
              <div className="aspect-[21/9]">
                <img 
                  src={featuredStudy.image} 
                  alt={featuredStudy.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium mb-4">
                  Featured
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {featuredStudy.title}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl">{featuredStudy.description}</p>
              </div>
            </div>
          </Link>
        )}

        {/* Filters */}
        <div className="mb-12 space-y-6">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Format & Audience Filters */}
          <div className="flex flex-wrap gap-4">
            <select
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value)}
              className="px-4 py-2 rounded-lg border border-input bg-background text-sm"
            >
              {formats.map(f => <option key={f} value={f}>{f}</option>)}
            </select>
            <select
              value={selectedAudience}
              onChange={(e) => setSelectedAudience(e.target.value)}
              className="px-4 py-2 rounded-lg border border-input bg-background text-sm"
            >
              {audiences.map(a => <option key={a} value={a}>{a}</option>)}
            </select>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudies.filter(s => !s.featured).map((study, index) => (
            <Link 
              key={study.slug}
              to={`/case-studies/${study.slug}`}
              className={`group rounded-2xl overflow-hidden bg-card card-hover animate-slide-up stagger-${Math.min(index + 1, 6)}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-background/90 text-xs font-medium">
                    {study.format}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs text-primary font-medium uppercase tracking-wide">
                  {study.category}
                </span>
                <h3 className="text-lg font-bold mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {study.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{study.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudies;