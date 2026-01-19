import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import WhatWeHelpWith from "@/components/WhatWeHelpWith";
import CaseStudiesPreview from "@/components/CaseStudiesPreview";
import LatestMedia from "@/components/LatestMedia";
import Testimonials from "@/components/Testimonials";
import EventsTeaser from "@/components/EventsTeaser";
import Newsletter from "@/components/Newsletter";
import foodDistributionImg from "@/assets/food-distribution-seva.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Who is Vaikuntha Vraj Das */}
        <section 
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32"
          data-animate="fadeInUp"
        >
          <div className="text-center space-y-6">
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
        <section 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32"
          data-animate="fadeIn"
        >
          <div className="rounded-3xl bg-gradient-to-br from-saffron-light/20 via-gold-light/15 to-background p-8 md:p-12 lg:p-16 border border-border/50 shadow-lg">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6" data-animate="fadeInLeft">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  ISKCON Punjabi Bagh
                </span>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Food Distribution & Community Welfare
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Through our initiatives at ISKCON Punjabi Bagh, we serve thousands of meals daily to those in need. 
                  Join us in this sacred service of feeding the hungry and uplifting the community.
                </p>
                <a 
                  href="/serve" 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 hover:scale-105"
                >
                  Learn More & Volunteer
                </a>
              </div>
              <div 
                className="relative aspect-video rounded-2xl overflow-hidden shadow-xl"
                data-animate="fadeInRight"
              >
                <img 
                  src={foodDistributionImg}
                  alt="ISKCON Punjabi Bagh Food Distribution"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
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