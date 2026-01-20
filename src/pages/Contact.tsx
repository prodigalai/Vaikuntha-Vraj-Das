import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import gardenBg from "@/assets/morning_meditation_bg.png";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-transparent relative">
      <PageBackground image={gardenBg} opacity={0.12} />
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16 text-center space-y-6">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Contact
          </span>
          <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to connect? Reach out to us through the form below or contact us directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="rounded-2xl bg-card p-8">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this regarding?"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground rounded-full py-6 text-base font-medium">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-card p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-muted-foreground">ISKCON Punjabi Bagh</p>
                    <p className="text-muted-foreground">New Delhi, India</p>
                  </div>
                </div>

                {/* Sritayu Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Sritayu Helpline</h3>
                    <a href="tel:+919582887788" className="text-primary hover:underline font-medium">
                      +91 95828 87788
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">For spiritual guidance and counseling</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a href="mailto:contact@vaikunthavrajdas.com" className="text-primary hover:underline">
                      contact@vaikunthavrajdas.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map or Additional Info */}
            <div className="rounded-2xl bg-gradient-to-br from-saffron-light/20 to-gold-light/30 p-8">
              <h3 className="font-bold text-lg mb-4">Visit ISKCON Punjabi Bagh</h3>
              <p className="text-muted-foreground mb-4">
                Join us for daily programs, Sunday feasts, and special festivals. Everyone is welcome to experience the joy of spiritual community.
              </p>
              <div className="text-sm text-muted-foreground space-y-2">
                <p><strong>Morning Program:</strong> 4:30 AM - 8:00 AM</p>
                <p><strong>Evening Program:</strong> 6:30 PM - 8:30 PM</p>
                <p><strong>Sunday Feast:</strong> 5:00 PM onwards</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="rounded-2xl bg-card p-8">
              <h3 className="font-bold text-lg mb-4">Connect on Social Media</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.youtube.com/@vaikunthavrajdas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-14 h-14 rounded-xl bg-muted/50 border border-border hover:border-red-500/50 hover:bg-red-500/10 flex items-center justify-center transition-all duration-300 hover:scale-110 p-2"
                >
                  <img
                    src="https://cdn3d.iconscout.com/3d/free/thumb/free-youtube-3d-icon-png-download-7516827.png"
                    alt="YouTube"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                  />
                </a>
                <a
                  href="https://www.instagram.com/vaikunthavrajdas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-14 h-14 rounded-xl bg-muted/50 border border-border hover:border-pink-500/50 hover:bg-pink-500/10 flex items-center justify-center transition-all duration-300 hover:scale-110 p-2"
                >
                  <img
                    src="https://cdn3d.iconscout.com/3d/free/thumb/free-instagram-logo-3d-icon-png-download-12257263.png"
                    alt="Instagram"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                  />
                </a>
                <a
                  href="https://www.facebook.com/vaikunthavrajdas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-14 h-14 rounded-xl bg-muted/50 border border-border hover:border-blue-500/50 hover:bg-blue-500/10 flex items-center justify-center transition-all duration-300 hover:scale-110 p-2"
                >
                  <img
                    src="https://cdn3d.iconscout.com/3d/free/thumb/free-facebook-logo-3d-icon-png-download-12257268.png"
                    alt="Facebook"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;