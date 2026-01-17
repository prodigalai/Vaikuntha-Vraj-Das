import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import WhatWeHelpWith from "@/components/WhatWeHelpWith";
import CaseStudiesPreview from "@/components/CaseStudiesPreview";
import LatestMedia from "@/components/LatestMedia";
import Testimonials from "@/components/Testimonials";
import EventsTeaser from "@/components/EventsTeaser";
import Newsletter from "@/components/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Who is Vaikuntha Vraj Das */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center space-y-6 animate-slide-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Who is Vaikuntha Vraj Das?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A celibate monk, spiritual coach, and Bhagavad Gita teacher based in Delhi. Currently serving as 
              Co-President of ISKCON Punjabi Bagh, he has dedicated over 13 years to mentoring thousands of youth 
              from premier institutions like IITs and NITs, helping them find purpose, peace, and practical wisdom 
              for modern life.
            </p>
          </div>
        </section>

        {/* What We Help With */}
        <WhatWeHelpWith />

        {/* Case Studies */}
        <CaseStudiesPreview />

        {/* Latest Media */}
        <LatestMedia />

        {/* Welfare Highlight */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-3xl bg-gradient-to-br from-saffron-light/30 to-gold-light/40 p-8 md:p-12 lg:p-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  ISKCON Punjabi Bagh
                </span>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Food Distribution & Community Welfare
                </h2>
                <p className="text-lg text-muted-foreground">
                  Through our initiatives at ISKCON Punjabi Bagh, we serve thousands of meals daily to those in need. 
                  Join us in this sacred service of feeding the hungry and uplifting the community.
                </p>
                <a 
                  href="/serve" 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all"
                >
                  Learn More & Volunteer
                </a>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <img 
                  src="https://i.ytimg.com/vi/1lfBJ6eHUw0/maxresdefault.jpg" 
                  alt="ISKCON Punjabi Bagh Food Distribution"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80";
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* Events Teaser */}
        <EventsTeaser />

        {/* Newsletter */}
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
};

export default Index;