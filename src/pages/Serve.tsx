import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { Heart, Users, HandHeart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const serveOptions = [
  {
    id: "food-distribution",
    title: "Food Distribution",
    icon: Heart,
    description: "Join our daily prasadam distribution serving thousands of meals to those in need.",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80",
    impact: "10,000+ meals served monthly",
  },
  {
    id: "volunteer",
    title: "Volunteer",
    icon: Users,
    description: "Contribute your time and skills to various temple and community programs.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
    impact: "100+ active volunteers",
  },
  {
    id: "donate",
    title: "Donate",
    icon: HandHeart,
    description: "Support our initiatives through financial contributions.",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80",
    impact: "Every contribution matters",
  },
];

const Serve = () => {
  const { type } = useParams();

  const selectedOption = type ? serveOptions.find(o => o.id === type) : null;

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center space-y-6">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium animate-slide-down">
            Serve
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            Be Part of the Mission
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-slide-up stagger-1">
            Selfless service (seva) is at the heart of spiritual growth. Join us in making a difference.
          </p>
        </div>

        {/* Service Options */}
        {!selectedOption && (
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {serveOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Link
                  key={option.id}
                  to={`/serve/${option.id}`}
                  className={`group rounded-3xl overflow-hidden bg-card card-hover animate-slide-up stagger-${index + 1}`}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={option.image} 
                      alt={option.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {option.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{option.description}</p>
                    <span className="text-sm text-primary font-medium">{option.impact}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* Food Distribution Detail */}
        {selectedOption?.id === "food-distribution" && (
          <div className="mb-16">
            <Link 
              to="/serve"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              ← Back to Serve
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                <img 
                  src={selectedOption.image} 
                  alt={selectedOption.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">{selectedOption.title}</h2>
                <p className="text-lg text-muted-foreground">
                  Through ISKCON Punjabi Bagh's Annadana program, we distribute thousands of nutritious meals 
                  (prasadam) daily to the underprivileged, homeless, and those in need across Delhi.
                </p>
                <div className="rounded-2xl bg-muted/50 p-6">
                  <h3 className="font-semibold mb-4">How it works:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-sm text-primary">1</span>
                      <span>Fresh vegetarian meals are prepared daily with love and devotion</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-sm text-primary">2</span>
                      <span>Volunteers pack and distribute at hospitals, slums, and public areas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-sm text-primary">3</span>
                      <span>Anyone can sponsor meals or volunteer for distribution</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                    Volunteer for Distribution
                  </Button>
                  <Button variant="outline" className="rounded-full px-8">
                    Sponsor Meals
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Volunteer Detail */}
        {selectedOption?.id === "volunteer" && (
          <div className="mb-16">
            <Link 
              to="/serve"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              ← Back to Serve
            </Link>

            <div className="space-y-12">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Volunteer Opportunities</h2>
                <p className="text-lg text-muted-foreground">
                  Whether you have an hour a week or can commit regularly, there's a seva opportunity for you.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Temple Services", desc: "Deity worship, cleaning, decoration" },
                  { title: "Kitchen Seva", desc: "Cooking and prasadam preparation" },
                  { title: "Distribution", desc: "Food and book distribution" },
                  { title: "Youth Programs", desc: "Mentoring and organizing youth events" },
                  { title: "Media & Tech", desc: "Photography, video, social media" },
                  { title: "Administration", desc: "Office work, event coordination" },
                ].map((role, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-card border border-border">
                    <h3 className="font-semibold text-lg mb-2">{role.title}</h3>
                    <p className="text-muted-foreground text-sm">{role.desc}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                  Apply to Volunteer
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Impact Section */}
        <section className="rounded-3xl bg-gradient-to-br from-saffron-light/20 to-gold-light/30 p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Meals Monthly</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Active Volunteers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Distribution Centers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">365</div>
              <div className="text-muted-foreground">Days a Year</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Serve;