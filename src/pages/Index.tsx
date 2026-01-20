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
import blurredCityBg from "@/assets/blurred-cityscape-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Who is Vaikuntha Vraj Das - with blurred bg */}
        <section
          className="relative overflow-hidden"
          data-animate="fadeInUp"
        >
          {/* Blurred background */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${blurredCityBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.08,
              transform: 'scaleX(-1)',
            }}
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/95 to-[hsl(38,35%,92%)]" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 relative z-10">
            <div className="text-center space-y-8">
              <span className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium uppercase tracking-wider">
                About
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight text-foreground">
                Who is <span className="font-script text-primary">Vaikuntha Vraj Das</span>?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                A celibate monk, spiritual coach, and Bhagavad Gita teacher based in Delhi. Currently serving as
                Co-President of ISKCON Punjabi Bagh, he has dedicated over 13 years to mentoring thousands of youth
                from premier institutions like IITs and NITs, helping them find purpose, peace, and practical wisdom
                for modern life.
              </p>
            </div>
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
          className="relative overflow-hidden"
          data-animate="fadeIn"
        >
          {/* Soft background */}
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-[hsl(38,35%,92%)] via-[hsl(40,40%,94%)] to-background" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 relative z-10">
            <div className="rounded-3xl bg-card/80 backdrop-blur-sm p-8 md:p-12 lg:p-16 border border-border/30 shadow-xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6" data-animate="fadeInLeft">
                  <span className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium uppercase tracking-wider">
                    ISKCON Punjabi Bagh
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground">
                    Food Distribution & <span className="font-script text-primary">Community Welfare</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Through our initiatives at ISKCON Punjabi Bagh, we serve thousands of meals daily to those in need.
                    Join us in this sacred service of feeding the hungry and uplifting the community.
                  </p>
                  <a
                    href="/serve"
                    className="btn-golden inline-flex items-center gap-2 px-8 py-4 text-base"
                  >
                    Learn More & Volunteer
                  </a>
                </div>
                <div
                  className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
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
