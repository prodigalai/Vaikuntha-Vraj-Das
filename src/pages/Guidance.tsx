import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { MessageCircle, Mic, HelpCircle, Users, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import spiritualGuidanceSetting from "@/assets/spiritual-guidance-setting.jpg";

const guidanceOptions = [
  {
    id: "mentorship",
    title: "Request Mentorship",
    icon: MessageCircle,
    description: "Apply for personal spiritual guidance and counseling.",
  },
  {
    id: "invite",
    title: "Invite for a Talk",
    icon: Mic,
    description: "Invite Vaikuntha Vraj Das to speak at your institution or event.",
  },
  {
    id: "question",
    title: "Ask a Question",
    icon: HelpCircle,
    description: "Submit your spiritual or life questions for consideration.",
  },
];

const faqs = [
  {
    question: "How can I start my spiritual journey?",
    answer: "Begin with simple practices: chant the Hare Krishna maha-mantra daily, read a few verses from Bhagavad Gita, and try to associate with devotees. Start with 10-15 minutes of japa meditation each morning.",
  },
  {
    question: "Do I need to leave my career to be spiritual?",
    answer: "Not at all. Bhagavad Gita teaches us to work in a spirit of devotion without attachment to results. You can practice spirituality while pursuing your career—it's about consciousness, not renunciation of duties.",
  },
  {
    question: "How do I deal with stress and anxiety?",
    answer: "Regular spiritual practice, especially meditation and kirtan, helps calm the mind. Understanding that we're not the controllers but instruments of a higher power brings great relief and clarity.",
  },
  {
    question: "Can I get personal guidance?",
    answer: "Yes, you can apply for mentorship through this page. We review applications and connect suitable candidates with appropriate guidance based on their needs and our capacity.",
  },
];

const Guidance = () => {
  const { type } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your request has been submitted. We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", topic: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center space-y-6">
          <div className="relative w-full max-w-4xl mx-auto aspect-[21/9] rounded-3xl overflow-hidden mb-8">
            <img 
              src={spiritualGuidanceSetting} 
              alt="Spiritual guidance setting with Bhagavad Gita and sacred items"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium animate-slide-down">
            Guidance
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            Seek Spiritual Guidance
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-slide-up stagger-1">
            Whether you're seeking mentorship, want to invite for a talk, or have questions—we're here to help.
          </p>
        </div>

        {/* Guidance Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {guidanceOptions.map((option, index) => {
            const Icon = option.icon;
            const isActive = type === option.id;
            return (
              <Link
                key={option.id}
                to={`/guidance/${option.id}`}
                className={`p-6 rounded-2xl border-2 transition-all animate-slide-up stagger-${index + 1} ${
                  isActive 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border bg-card hover:border-primary/50'
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className={`w-6 h-6 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
                <p className="text-sm text-muted-foreground">{option.description}</p>
              </Link>
            );
          })}
        </div>

        {/* Form Section */}
        <section className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="rounded-2xl bg-card p-8">
            <h2 className="text-2xl font-bold mb-6">
              {type === "mentorship" && "Apply for Mentorship"}
              {type === "invite" && "Invite for a Talk"}
              {type === "question" && "Submit Your Question"}
              {!type && "Get in Touch"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone (optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              {type === "mentorship" && (
                <div>
                  <label htmlFor="topic" className="block text-sm font-medium mb-2">Area of Guidance</label>
                  <select
                    id="topic"
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select an area</option>
                    <option value="spiritual-practice">Spiritual Practice</option>
                    <option value="career">Career Guidance</option>
                    <option value="relationships">Relationships</option>
                    <option value="mental-health">Mental Wellbeing</option>
                    <option value="purpose">Finding Purpose</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              )}
              {type === "invite" && (
                <div>
                  <label htmlFor="topic" className="block text-sm font-medium mb-2">Event Type</label>
                  <select
                    id="topic"
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select event type</option>
                    <option value="college">College/University</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="community">Community Gathering</option>
                    <option value="retreat">Retreat/Workshop</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              )}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {type === "question" ? "Your Question" : "Message"}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder={type === "question" 
                    ? "Describe your question or situation in detail..." 
                    : "Tell us more about your request..."
                  }
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6"
              >
                <Send className="w-4 h-4 mr-2" />
                Submit Request
              </Button>
            </form>
          </div>

          {/* FAQ Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="rounded-xl bg-muted/50 p-5">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Guidance;