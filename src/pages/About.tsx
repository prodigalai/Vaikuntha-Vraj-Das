import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import arcBg from "@/assets/vedic_architecture_bg.png";
import { Mail, MapPin, Users, BookOpen, Mic } from "lucide-react";
import aboutPortrait from "@/assets/vaikuntha-vraj-das-portrait.png";

const About = () => {
  const stats = [
    { label: "Years as a Monk", value: "13+" },
    { label: "Youth Mentored", value: "1000s" },
    { label: "Talks at Premier Institutes", value: "100+" },
    { label: "Featured Platforms", value: "10+" },
  ];

  return (
    <div className="min-h-screen bg-transparent relative">
      <PageBackground image={arcBg} opacity={0.25} />
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center space-y-6">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium animate-slide-down">
            About
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            Vaikuntha Vraj Das
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-slide-up stagger-1">
            Celibate monk • Spiritual coach • Bhagavad Gita teacher
          </p>
        </div>

        {/* Bio Section */}
        <section className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden animate-scale-in">
            <img
              src={aboutPortrait}
              alt="Vaikuntha Vraj Das - Spiritual Coach"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>

          <div className="space-y-6 animate-slide-up stagger-2">
            <h2 className="text-3xl font-bold">A Life Dedicated to Service</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Vaikuntha Vraj Das is a celibate monk, spiritual coach, and mentor dedicated to sharing
                practical wisdom from the Bhagavad Gita and other Vedic scriptures. Based in Delhi, India,
                he currently serves as the Co-President of ISKCON Punjabi Bagh.
              </p>
              <p>
                He leads youth-focused initiatives, mentoring students and young professionals—especially
                from premier institutions like IITs and NITs—to apply spiritual principles in modern life.
              </p>
              <p>
                His teachings have been featured on Speaking Tree and other reputed platforms, reaching
                thousands seeking practical spiritual solutions for daily challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Current Role */}
        <section className="rounded-3xl bg-card p-8 md:p-12 mb-16 animate-slide-up">
          <h2 className="text-2xl font-bold mb-8">Current Roles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-muted/50">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Co-President, ISKCON Punjabi Bagh</h3>
                <p className="text-muted-foreground">
                  Leading spiritual programs, community welfare, and youth outreach initiatives in Delhi.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-muted/50">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Youth Forum Director</h3>
                <p className="text-muted-foreground">
                  Directing programs that connect ancient wisdom with modern challenges for young minds.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Teaching Style */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Teaching Approach</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-2xl bg-muted/30">
              <div className="w-16 h-16 rounded-full bg-saffron-light/30 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Shastra-backed</h3>
              <p className="text-muted-foreground">
                Teachings rooted in authentic Vedic scriptures like Bhagavad Gita, Srimad Bhagavatam, and Caitanya-caritamrta.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-muted/30">
              <div className="w-16 h-16 rounded-full bg-gold-light/30 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Youth-centric</h3>
              <p className="text-muted-foreground">
                Tailored for modern youth facing real-world challenges in education, career, and relationships.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-muted/30">
              <div className="w-16 h-16 rounded-full bg-saffron-light/30 flex items-center justify-center mx-auto mb-4">
                <Mic className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Practical</h3>
              <p className="text-muted-foreground">
                Focus on actionable protocols and real-life application, not just theory.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="rounded-3xl bg-gradient-to-br from-saffron-light/20 to-gold-light/30 p-8 md:p-12 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* As Seen On */}
        <section className="text-center mb-16">
          <h3 className="text-lg text-muted-foreground mb-8">As Seen On</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
            {/* Speaking Tree / Times of India */}
            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50 w-full">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">ST</span>
              </div>
              <span className="text-sm font-medium text-center">Speaking Tree</span>
              <span className="text-xs text-muted-foreground">Times of India</span>
            </div>

            {/* Hare Krsna TV */}
            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50 w-full">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">HK</span>
              </div>
              <span className="text-sm font-medium text-center">Hare Krsna TV</span>
              <span className="text-xs text-muted-foreground">ISKCON Media</span>
            </div>

            {/* IITs */}
            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50 w-full">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <span className="text-white font-bold text-sm">IIT</span>
              </div>
              <span className="text-sm font-medium text-center">IITs</span>
              <span className="text-xs text-muted-foreground">Delhi, Bombay, Kanpur</span>
            </div>

            {/* NITs */}
            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50 w-full">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center">
                <span className="text-white font-bold text-sm">NIT</span>
              </div>
              <span className="text-sm font-medium text-center">NITs</span>
              <span className="text-xs text-muted-foreground">Allahabad, Trichy +</span>
            </div>

            {/* Corporate */}
            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50 w-full">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center">
                <span className="text-white font-bold text-sm">💼</span>
              </div>
              <span className="text-sm font-medium text-center">Corporates</span>
              <span className="text-xs text-muted-foreground">Wellness Programs</span>
            </div>

            {/* YouTube */}
            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50 w-full">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center">
                <span className="text-white font-bold text-lg">▶</span>
              </div>
              <span className="text-sm font-medium text-center">YouTube</span>
              <span className="text-xs text-muted-foreground">10K+ Subscribers</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;