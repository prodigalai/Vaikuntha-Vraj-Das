import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { Play, Headphones, Film, Radio, Filter } from "lucide-react";
import { useState } from "react";

const mediaTypes = [
  { id: "all", label: "All", icon: Filter },
  { id: "videos", label: "Videos", icon: Play },
  { id: "podcasts", label: "Podcasts", icon: Headphones },
  { id: "shorts", label: "Shorts", icon: Film },
  { id: "live", label: "Live Archive", icon: Radio },
];

const topics = ["All Topics", "Bhagavad Gita", "Youth", "Relationships", "Career", "Meditation"];
const durations = ["Any Duration", "Under 15 min", "15-30 min", "30-60 min", "Over 1 hour"];

const mediaItems = [
  {
    id: "1",
    type: "videos",
    title: "Managing Stress: Lessons from Bhagavad Gita",
    topic: "Bhagavad Gita",
    duration: "45 min",
    thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    views: "12K",
    platform: "YouTube",
  },
  {
    id: "2",
    type: "videos",
    title: "Finding Purpose in Your 20s",
    topic: "Youth",
    duration: "38 min",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    views: "8.5K",
    platform: "YouTube",
  },
  {
    id: "3",
    type: "podcasts",
    title: "The Art of Detachment",
    topic: "Meditation",
    duration: "52 min",
    thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80",
    views: "3.2K",
    platform: "SoundCloud",
  },
  {
    id: "4",
    type: "shorts",
    title: "One Truth That Changed My Life",
    topic: "Youth",
    duration: "60 sec",
    thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    views: "25K",
    platform: "Instagram",
  },
  {
    id: "5",
    type: "videos",
    title: "Building Meaningful Relationships",
    topic: "Relationships",
    duration: "55 min",
    thumbnail: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    views: "6.1K",
    platform: "YouTube",
  },
  {
    id: "6",
    type: "live",
    title: "Live Q&A: Career Decisions",
    topic: "Career",
    duration: "1h 20 min",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    views: "4.8K",
    platform: "YouTube",
  },
];

const Media = () => {
  const { type } = useParams();
  const [selectedType, setSelectedType] = useState(type || "all");
  const [selectedTopic, setSelectedTopic] = useState("All Topics");

  const filteredMedia = mediaItems.filter(item => {
    const typeMatch = selectedType === "all" || item.type === selectedType;
    const topicMatch = selectedTopic === "All Topics" || item.topic === selectedTopic;
    return typeMatch && topicMatch;
  });

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-12 text-center space-y-6">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium animate-slide-down">
            Media
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            Watch, Listen & Learn
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-slide-up stagger-1">
            Explore our collection of talks, podcasts, and shorts on spiritual wisdom for modern life.
          </p>
        </div>

        {/* Platform Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a 
            href="https://www.youtube.com/@vaikunthavrajdas" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-card border border-border hover:border-primary transition-colors"
          >
            <Play className="w-5 h-5 text-red-500" />
            <span className="font-medium">YouTube</span>
          </a>
          <a 
            href="https://www.instagram.com/vaikunthavrajdas/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-card border border-border hover:border-primary transition-colors"
          >
            <Film className="w-5 h-5 text-pink-500" />
            <span className="font-medium">Instagram</span>
          </a>
          <a 
            href="https://www.facebook.com/vaikunthavrajdas/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-card border border-border hover:border-primary transition-colors"
          >
            <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span className="font-medium">Facebook</span>
          </a>
        </div>

        {/* Type Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {mediaTypes.map((t) => {
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => setSelectedType(t.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedType === t.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                <Icon className="w-4 h-4" />
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Topic Filter */}
        <div className="flex justify-center gap-4 mb-12">
          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="px-4 py-2 rounded-lg border border-input bg-background text-sm"
          >
            {topics.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        {/* Media Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedia.map((item, index) => (
            <div 
              key={item.id}
              className={`group rounded-2xl overflow-hidden bg-card card-hover cursor-pointer animate-slide-up stagger-${Math.min(index + 1, 6)}`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={item.thumbnail} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                    <Play className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/70 text-white text-xs">
                  {item.duration}
                </div>
                <div className="absolute top-3 left-3 px-2 py-1 rounded bg-background/90 text-xs font-medium">
                  {item.platform}
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs text-primary font-medium uppercase tracking-wide">
                  {item.topic}
                </span>
                <h3 className="text-lg font-semibold mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.views} views</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 rounded-full border border-border hover:bg-muted transition-colors font-medium">
            Load More
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Media;