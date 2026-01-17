import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GraduationCap, Heart, Users, BookOpen, Mic, Award } from "lucide-react";

const Journey = () => {
  const milestones = [
    {
      year: "Early Life",
      title: "Academic Foundations",
      description: "Completed B.Tech from NIT Allahabad, one of India's premier engineering institutions.",
      icon: GraduationCap,
    },
    {
      year: "Turning Point",
      title: "Discovery of Purpose",
      description: "Encountered the profound wisdom of Bhagavad Gita and realized a higher calling beyond material pursuits.",
      icon: Heart,
    },
    {
      year: "13+ Years",
      title: "Life as a Monk",
      description: "Embraced celibate monkhood, dedicating life to spiritual practice, study, and service.",
      icon: BookOpen,
    },
    {
      year: "Present",
      title: "Youth Mentorship at Scale",
      description: "Mentored thousands of youth from IITs, NITs, and other premier institutions across India.",
      icon: Users,
    },
    {
      year: "Ongoing",
      title: "Key Teaching Series",
      description: "Regular discourses on Bhagavad Gita, Srimad Bhagavatam, and Caitanya-caritamrta.",
      icon: Mic,
    },
    {
      year: "Leadership",
      title: "Community Service",
      description: "Co-President of ISKCON Punjabi Bagh, leading spiritual and welfare initiatives.",
      icon: Award,
    },
  ];

  const values = [
    {
      title: "Sadhana",
      description: "Daily spiritual practice is the foundation of a meaningful life. Japa, kirtan, and meditation form the core of inner transformation.",
    },
    {
      title: "Seva",
      description: "Selfless service purifies the heart. Serving others with love and dedication is worship in action.",
    },
    {
      title: "Time Utilization",
      description: "Every moment is precious. Using time wisely for spiritual advancement and helping others is essential.",
    },
    {
      title: "Rarity of Human Life",
      description: "Human birth is rare and valuable. It's the only form that allows conscious pursuit of spiritual perfection.",
    },
  ];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center space-y-6">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium animate-slide-down">
            The Journey
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            From Engineer to Monk
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-slide-up stagger-1">
            A story of transformation, dedication, and the pursuit of life's highest purpose.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[21/9] rounded-3xl overflow-hidden mb-20 animate-scale-in">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80" 
            alt="Spiritual journey"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <blockquote className="text-2xl md:text-3xl font-serif italic text-foreground max-w-3xl">
              "The real journey begins when we look within."
            </blockquote>
          </div>
        </div>

        {/* Timeline */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Life Milestones</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div 
                    key={index}
                    className={`relative flex items-center gap-8 ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Content */}
                    <div className={`flex-1 ml-20 md:ml-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                      <span className="text-sm text-primary font-medium">{milestone.year}</span>
                      <h3 className="text-xl font-bold mt-1 mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                    
                    {/* Icon */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 rounded-full bg-card border-4 border-background flex items-center justify-center shadow-lg z-10">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="rounded-3xl bg-card p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Core Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="p-6 rounded-2xl bg-muted/30">
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quote Section */}
        <section className="text-center py-16">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-3xl md:text-4xl font-serif italic text-foreground leading-relaxed">
              "I left engineering to become a spiritual engineer—helping people debug their minds 
              and optimize their lives for lasting happiness."
            </blockquote>
            <p className="mt-8 text-primary font-medium">— Vaikuntha Vraj Das</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Journey;