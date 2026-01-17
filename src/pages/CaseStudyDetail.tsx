import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Download, Play, BookOpen, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudyData: Record<string, {
  title: string;
  category: string;
  description: string;
  image: string;
  problem: string;
  rootCauses: string[];
  gitaQuote: { text: string; reference: string };
  protocol: { title: string; description: string }[];
  reflectionQuestions: string[];
  relatedStudies: string[];
}> = {
  "silent-epidemic-suicide-india": {
    title: "The Silent Epidemic: Understanding Suicide in India",
    category: "Mind",
    description: "A deep dive into the rising crisis of mental health and suicide, with practical spiritual solutions.",
    image: "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=800&q=80",
    problem: "India faces a growing mental health crisis, with suicide rates among youth reaching alarming levels. The pressure of academic expectations, career uncertainty, relationship challenges, and a sense of purposelessness contribute to this silent epidemic. Many suffer in silence, unable to find meaningful support or lasting solutions.",
    rootCauses: [
      "Disconnection from deeper purpose and meaning in life",
      "Over-identification with temporary roles and achievements",
      "Lack of genuine community and meaningful relationships",
      "Unchecked negative thought patterns and mental habits",
      "Absence of spiritual foundation and practices",
    ],
    gitaQuote: {
      text: "For one who has conquered the mind, the mind is the best of friends; but for one who has failed to do so, the mind will remain the greatest enemy.",
      reference: "Bhagavad Gita 6.6",
    },
    protocol: [
      { title: "Day 1-3: Foundation", description: "Establish basic routine: wake early, practice 10 minutes of gratitude, reduce screen time before bed." },
      { title: "Day 4-7: Connection", description: "Begin simple mantra meditation (japa) for 15 minutes. Connect with one supportive person daily." },
      { title: "Day 8-14: Deepening", description: "Read Bhagavad Gita Chapter 2 slowly. Increase japa to 20 minutes. Start a reflection journal." },
      { title: "Day 15-21: Integration", description: "Attend satsang (spiritual gathering). Practice seva (selfless service). Review and celebrate progress." },
    ],
    reflectionQuestions: [
      "What gives my life meaning beyond achievements and possessions?",
      "How do I respond when my plans and expectations don't materialize?",
      "Who in my life provides genuine support without judgment?",
      "What regular practices help me maintain mental peace?",
      "How can I use my struggles to help others facing similar challenges?",
    ],
    relatedStudies: ["stress-management-gita", "digital-addiction", "purpose-anxiety"],
  },
};

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const study = slug ? caseStudyData[slug] : null;

  if (!study) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
          <p className="text-muted-foreground mb-8">This case study is coming soon or doesn't exist.</p>
          <Link to="/case-studies">
            <Button>Back to Case Studies</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Link */}
        <Link 
          to="/case-studies"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Case Studies
        </Link>

        {/* Header */}
        <div className="mb-12 space-y-6">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            {study.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            {study.title}
          </h1>
          <p className="text-lg text-muted-foreground">{study.description}</p>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-video rounded-3xl overflow-hidden mb-12">
          <img 
            src={study.image} 
            alt={study.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Problem Statement */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{study.problem}</p>
        </section>

        {/* Root Causes */}
        <section className="mb-12 rounded-2xl bg-card p-8">
          <h2 className="text-2xl font-bold mb-6">Root Causes</h2>
          <ul className="space-y-4">
            {study.rootCauses.map((cause, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-sm font-medium text-primary">
                  {index + 1}
                </span>
                <span className="text-muted-foreground">{cause}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Gita Wisdom */}
        <section className="mb-12 rounded-2xl bg-gradient-to-br from-saffron-light/20 to-gold-light/30 p-8 md:p-12">
          <div className="flex items-start gap-4 mb-4">
            <BookOpen className="w-8 h-8 text-primary flex-shrink-0" />
            <h2 className="text-2xl font-bold">Wisdom from the Gita</h2>
          </div>
          <blockquote className="text-xl md:text-2xl font-serif italic text-foreground leading-relaxed mb-4">
            "{study.gitaQuote.text}"
          </blockquote>
          <p className="text-primary font-medium">— {study.gitaQuote.reference}</p>
        </section>

        {/* Practical Protocol */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">21-Day Transformation Protocol</h2>
          <div className="space-y-4">
            {study.protocol.map((step, index) => (
              <div key={index} className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reflection Questions */}
        <section className="mb-12 rounded-2xl bg-muted/50 p-8">
          <div className="flex items-start gap-4 mb-6">
            <MessageCircle className="w-6 h-6 text-primary flex-shrink-0" />
            <h2 className="text-2xl font-bold">Reflection Questions</h2>
          </div>
          <ol className="space-y-4 list-decimal list-inside">
            {study.reflectionQuestions.map((question, index) => (
              <li key={index} className="text-muted-foreground">{question}</li>
            ))}
          </ol>
        </section>

        {/* Download CTA */}
        <section className="mb-12 rounded-2xl bg-card p-8 text-center">
          <Download className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Download the Complete Guide</h3>
          <p className="text-muted-foreground mb-6">Get the PDF with full protocols, worksheets, and infographic.</p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
            Download PDF
          </Button>
        </section>

        {/* Related Videos */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Related Talks</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-card hover:bg-muted/50 transition-colors cursor-pointer">
              <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center">
                <Play className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Overcoming Mental Challenges</h4>
                <p className="text-sm text-muted-foreground">45 min • YouTube</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-card hover:bg-muted/50 transition-colors cursor-pointer">
              <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center">
                <Play className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Finding Purpose in Crisis</h4>
                <p className="text-sm text-muted-foreground">32 min • YouTube</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyDetail;