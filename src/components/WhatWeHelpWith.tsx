import { Brain, Heart, Briefcase, Leaf, Target, CloudRain } from "lucide-react";
import { Link } from "react-router-dom";

const topics = [
  { icon: Brain, title: "Stress & Anxiety", description: "Find lasting peace through mindfulness and spiritual practice.", color: "from-purple-500/20 to-purple-500/5" },
  { icon: Heart, title: "Relationships", description: "Build meaningful connections rooted in wisdom and compassion.", color: "from-pink-500/20 to-pink-500/5" },
  { icon: Briefcase, title: "Career Clarity", description: "Discover your dharma and work with purpose.", color: "from-amber-500/20 to-amber-500/5" },
  { icon: Leaf, title: "Breaking Habits", description: "Overcome addictions and cultivate positive patterns.", color: "from-green-500/20 to-green-500/5" },
  { icon: Target, title: "Finding Purpose", description: "Uncover your life's mission and deeper meaning.", color: "from-blue-500/20 to-blue-500/5" },
  { icon: CloudRain, title: "Grief & Loss", description: "Navigate difficult times with spiritual resilience.", color: "from-slate-500/20 to-slate-500/5" },
];

const WhatWeHelpWith = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Help With</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Practical spiritual solutions for modern challenges</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic, index) => {
          const Icon = topic.icon;
          return (
            <Link to="/case-studies" key={index} className={`group p-6 rounded-2xl bg-gradient-to-br ${topic.color} border border-border hover:shadow-lg transition-all animate-slide-up stagger-${Math.min(index + 1, 6)}`}>
              <Icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{topic.title}</h3>
              <p className="text-muted-foreground">{topic.description}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default WhatWeHelpWith;