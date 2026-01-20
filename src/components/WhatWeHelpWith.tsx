import { Brain, Heart, Briefcase, Leaf, Target, CloudRain, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import lotusBg from "@/assets/lotus_pond_bg.png";

const topics = [
  {
    icon: Brain,
    title: "Stress & Anxiety",
    description: "Find lasting peace through mindfulness and spiritual practice.",
    iconBg: "bg-[hsl(280,25%,92%)]",
    iconColor: "text-[hsl(280,35%,50%)]",
  },
  {
    icon: Heart,
    title: "Relationships",
    description: "Build meaningful connections rooted in wisdom and compassion.",
    iconBg: "bg-[hsl(340,30%,92%)]",
    iconColor: "text-[hsl(340,40%,50%)]",
  },
  {
    icon: Briefcase,
    title: "Career Clarity",
    description: "Discover your dharma and work with purpose.",
    iconBg: "bg-[hsl(42,40%,90%)]",
    iconColor: "text-[hsl(42,50%,45%)]",
  },
  {
    icon: Leaf,
    title: "Breaking Habits",
    description: "Overcome addictions and cultivate positive patterns.",
    iconBg: "bg-[hsl(160,25%,90%)]",
    iconColor: "text-[hsl(160,35%,45%)]",
  },
  {
    icon: Target,
    title: "Finding Purpose",
    description: "Uncover your life's mission and deeper meaning.",
    iconBg: "bg-[hsl(200,35%,90%)]",
    iconColor: "text-[hsl(200,45%,45%)]",
  },
  {
    icon: CloudRain,
    title: "Grief & Loss",
    description: "Navigate difficult times with spiritual resilience.",
    iconBg: "bg-[hsl(220,20%,90%)]",
    iconColor: "text-[hsl(220,30%,50%)]",
  },
];

const WhatWeHelpWith = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[hsl(38,35%,92%)] via-background to-background" />

      {/* Subtle blurred bg */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${lotusBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 relative z-10">
        <div className="text-center mb-16" data-animate="fadeInUp">
          <span className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium uppercase tracking-wider mb-6">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-6 text-foreground">
            What We <span className="font-script text-primary">Help With</span>
          </h2>
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
                className="group relative p-8 rounded-3xl bg-card/80 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
                data-animate-item
              >
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className={`w-16 h-16 rounded-2xl ${topic.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500`}>
                    <Icon className={`w-8 h-8 ${topic.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-serif font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
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
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeHelpWith;
