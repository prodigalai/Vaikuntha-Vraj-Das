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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="rounded-3xl bg-card p-8 md:p-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Connected</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Subscribe for weekly spiritual insights, event updates, and new content notifications.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
            className="flex-1 px-6 py-4 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <button type="submit" className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;