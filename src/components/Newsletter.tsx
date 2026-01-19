import { useState } from "react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <section 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32"
      data-animate="fadeIn"
    >
      <div className="rounded-3xl bg-gradient-to-br from-card to-card/50 p-8 md:p-16 text-center border border-border/50 shadow-lg">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" data-animate="fadeInUp">
          Stay Connected
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed" data-animate="fadeInUp">
          Subscribe for weekly spiritual insights, event updates, and new content notifications.
        </p>
        <form 
          onSubmit={handleSubmit} 
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          data-animate="fadeInUp"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
            className="flex-1 px-6 py-4 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
          />
          <button 
            type="submit" 
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 hover:scale-105"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;