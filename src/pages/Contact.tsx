import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Have a question or want to connect? Reach out to us.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="rounded-2xl bg-card p-8">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className="w-full px-4 py-3 rounded-lg border border-input bg-background" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Your email" className="w-full px-4 py-3 rounded-lg border border-input bg-background" />
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Subject" className="w-full px-4 py-3 rounded-lg border border-input bg-background" />
              <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Your message" className="w-full px-4 py-3 rounded-lg border border-input bg-background resize-none" />
              <Button type="submit" className="w-full bg-primary text-primary-foreground rounded-full py-6">Send Message</Button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl bg-card p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center"><MapPin className="w-5 h-5" /></div>
                  <div><h3 className="font-semibold">Location</h3><p className="text-muted-foreground">ISKCON Punjabi Bagh, Delhi, India</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center"><Mail className="w-5 h-5" /></div>
                  <div><h3 className="font-semibold">Email</h3><p className="text-muted-foreground">contact@vaikunthavrajdas.com</p></div>
                </div>
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