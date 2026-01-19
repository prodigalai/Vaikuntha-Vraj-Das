import { Brain, Heart, Briefcase, Leaf, Target, CloudRain, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const topics = [
  { 
    icon: Brain, 
    title: "Stress & Anxiety", 
    description: "Find lasting peace through mindfulness and spiritual practice.", 
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-600",
    borderColor: "border-purple-500/20",
    hoverBg: "hover:bg-purple-500/5"
  },
  { 
    icon: Heart, 
    title: "Relationships", 
    description: "Build meaningful connections rooted in wisdom and compassion.", 
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-600",
    borderColor: "border-pink-500/20",
    hoverBg: "hover:bg-pink-500/5"
  },
  { 
    icon: Briefcase, 
    title: "Career Clarity", 
    description: "Discover your dharma and work with purpose.", 
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600",
    borderColor: "border-amber-500/20",
    hoverBg: "hover:bg-amber-500/5"
  },
  { 
    icon: Leaf, 
    title: "Breaking Habits", 
    description: "Overcome addictions and cultivate positive patterns.", 
    iconBg: "bg-green-500/10",
    iconColor: "text-green-600",
    borderColor: "border-green-500/20",
    hoverBg: "hover:bg-green-500/5"
  },
  { 
    icon: Target, 
    title: "Finding Purpose", 
    description: "Uncover your life's mission and deeper meaning.", 
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
    borderColor: "border-blue-500/20",
    hoverBg: "hover:bg-blue-500/5"
  },
  { 
    icon: CloudRain, 
    title: "Grief & Loss", 
    description: "Navigate difficult times with spiritual resilience.", 
    iconBg: "bg-slate-500/10",
    iconColor: "text-slate-600",
    borderColor: "border-slate-500/20",
    hoverBg: "hover:bg-slate-500/5"
  },
];

const WhatWeHelpWith = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="text-center mb-16" data-animate="fadeInUp">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wide mb-4">
          Our Services
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">What We Help With</h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Practical spiritual solutions for modern challenges
        </p>
      </div>
      <div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        data-animate-group="fadeInUp"
        data-stagger-delay="0.1"
      >
        {topics.map((topic, index) => {
          const Icon = topic.icon;
          return (
            <Link 
              to="/case-studies" 
              key={index} 
              className="group relative p-8 rounded-3xl bg-card border-2 border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 overflow-hidden"
              data-animate-item
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${topic.hoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon Container */}
                <div className={`w-16 h-16 rounded-2xl ${topic.iconBg} ${topic.borderColor} border-2 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <Icon className={`w-8 h-8 ${topic.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {topic.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-4 text-base">
                  {topic.description}
                </p>
                
                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium text-sm">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              
              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default WhatWeHelpWith;