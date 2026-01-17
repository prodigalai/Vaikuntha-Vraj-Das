import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { BookOpen, Play, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const teachingCategories = [
  {
    id: "bhagavad-gita",
    title: "Bhagavad Gita",
    description: "The timeless dialogue between Lord Krishna and Arjuna, offering practical wisdom for life's challenges.",
    image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=800&q=80",
    playlists: ["Complete Chapter Series", "Life Lessons from Gita", "Gita for Students"],
    startHere: ["Understanding the Context", "The Yoga of Action", "Finding Your Dharma"],
  },
  {
    id: "srimad-bhagavatam",
    title: "Srimad Bhagavatam",
    description: "The spotless Purana, revealing the science of God and the path of pure devotion.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    playlists: ["Canto Summaries", "Character Studies", "Practical Applications"],
    startHere: ["Introduction to Bhagavatam", "Krishna's Pastimes", "Lessons from Great Devotees"],
  },
  {
    id: "caitanya-caritamrta",
    title: "Caitanya-caritamrta",
    description: "The life and teachings of Sri Caitanya Mahaprabhu, the golden avatar who spread the holy name.",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=80",
    playlists: ["Adi Lila Series", "Teachings of Mahaprabhu", "Kirtan & Chanting"],
    startHere: ["Who is Caitanya Mahaprabhu?", "The Power of Sankirtana", "Mercy of the Lord"],
  },
  {
    id: "practice",
    title: "Spiritual Practice (Sadhana)",
    description: "Practical guidance on daily spiritual disciplines: japa, kirtan, habits, and discipline.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    playlists: ["Morning Sadhana Guide", "Japa Meditation", "Building Spiritual Habits"],
    startHere: ["Starting Your Practice", "The Power of Japa", "Creating a Sacred Routine"],
  },
];

const Teachings = () => {
  const { category } = useParams();

  const selectedCategory = category 
    ? teachingCategories.find(c => c.id === category) 
    : null;

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center space-y-6">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium animate-slide-down">
            Teachings
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            {selectedCategory ? selectedCategory.title : "Scriptural Wisdom"}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-slide-up stagger-1">
            {selectedCategory 
              ? selectedCategory.description 
              : "Explore timeless teachings from Vedic scriptures, presented for modern understanding and practical application."
            }
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Link 
            to="/teachings"
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              !category ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80'
            }`}
          >
            All
          </Link>
          {teachingCategories.map((cat) => (
            <Link
              key={cat.id}
              to={`/teachings/${cat.id}`}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                category === cat.id ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80'
              }`}
            >
              {cat.title}
            </Link>
          ))}
        </div>

        {/* All Categories View */}
        {!selectedCategory && (
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {teachingCategories.map((cat, index) => (
              <Link 
                key={cat.id} 
                to={`/teachings/${cat.id}`}
                className={`group rounded-3xl overflow-hidden bg-card card-hover animate-slide-up stagger-${Math.min(index + 1, 4)}`}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={cat.image} 
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-muted-foreground">{cat.description}</p>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Single Category Detail */}
        {selectedCategory && (
          <>
            {/* Hero Image */}
            <div className="relative aspect-[21/9] rounded-3xl overflow-hidden mb-12 animate-scale-in">
              <img 
                src={selectedCategory.image} 
                alt={selectedCategory.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            </div>

            {/* Start Here */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-primary" />
                Start Here
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {selectedCategory.startHere.map((item, index) => (
                  <div 
                    key={index}
                    className="p-5 rounded-2xl bg-card border border-border hover:border-primary transition-colors cursor-pointer"
                  >
                    <span className="text-sm text-primary font-medium">Part {index + 1}</span>
                    <h3 className="font-semibold mt-1">{item}</h3>
                  </div>
                ))}
              </div>
            </section>

            {/* Playlists */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Play className="w-6 h-6 text-primary" />
                Featured Playlists
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {selectedCategory.playlists.map((playlist, index) => (
                  <div 
                    key={index}
                    className="p-6 rounded-2xl bg-gradient-to-br from-saffron-light/20 to-gold-light/20 border border-border hover:shadow-lg transition-all cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Play className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{playlist}</h3>
                    <p className="text-sm text-muted-foreground mt-2">12 videos • 4h 30m</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Recommended Reading */}
            <section className="rounded-3xl bg-card p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Download className="w-6 h-6 text-primary" />
                Recommended Reading
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/30">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Study Guide PDF</h4>
                    <p className="text-sm text-muted-foreground">Comprehensive notes and summaries</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/30">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Original Text</h4>
                    <p className="text-sm text-muted-foreground">Sanskrit with English translation</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Teachings;