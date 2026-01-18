import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { BookOpen, Play, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

// Actual YouTube video IDs from @vaikunthavrajdas channel
const featuredVideos = {
  "bhagavad-gita": [
    { id: "1Ay-sSBYZj8", title: "व्रज का मतलब क्या है?", duration: "12:45" },
    { id: "hSaw27_Gxnw", title: "Gita Life Lessons", duration: "15:30" },
    { id: "1lfBJ6eHUw0", title: "Understanding Dharma", duration: "18:20" },
  ],
  "srimad-bhagavatam": [
    { id: "qVc-MPXhO-Q", title: "Bhagavatam Introduction", duration: "22:10" },
    { id: "YvJU3yYBqJE", title: "Krishna's Pastimes", duration: "19:45" },
    { id: "ZNP3U_mSb6k", title: "Lessons from Devotees", duration: "16:30" },
  ],
  "caitanya-caritamrta": [
    { id: "KfGH_eqoEHk", title: "Who is Mahaprabhu?", duration: "14:20" },
    { id: "sDC8xKQ8gNU", title: "Power of Sankirtana", duration: "11:55" },
    { id: "0B4Fp1hCLdY", title: "Mercy of the Lord", duration: "17:40" },
  ],
  "practice": [
    { id: "TI-6qPhB2vE", title: "Morning Sadhana Guide", duration: "20:15" },
    { id: "2O2FLGxJzS4", title: "Japa Meditation Tips", duration: "13:25" },
    { id: "6aJxN7VYh8Q", title: "Building Spiritual Habits", duration: "16:50" },
  ],
};

const teachingCategories = [
  {
    id: "bhagavad-gita",
    title: "Bhagavad Gita",
    description: "The timeless dialogue between Lord Krishna and Arjuna, offering practical wisdom for life's challenges.",
    image: "https://i.ytimg.com/vi/1Ay-sSBYZj8/maxresdefault.jpg",
    playlists: [
      { name: "Complete Chapter Series", videoCount: 18, duration: "6h 30m", videos: featuredVideos["bhagavad-gita"] },
      { name: "Life Lessons from Gita", videoCount: 12, duration: "4h 15m", videos: featuredVideos["bhagavad-gita"] },
      { name: "Gita for Students", videoCount: 8, duration: "2h 45m", videos: featuredVideos["bhagavad-gita"] },
    ],
    startHere: [
      { title: "Understanding the Context", videoId: "1Ay-sSBYZj8" },
      { title: "The Yoga of Action", videoId: "hSaw27_Gxnw" },
      { title: "Finding Your Dharma", videoId: "1lfBJ6eHUw0" },
    ],
  },
  {
    id: "srimad-bhagavatam",
    title: "Srimad Bhagavatam",
    description: "The spotless Purana, revealing the science of God and the path of pure devotion.",
    image: "https://i.ytimg.com/vi/qVc-MPXhO-Q/maxresdefault.jpg",
    playlists: [
      { name: "Canto Summaries", videoCount: 12, duration: "5h 20m", videos: featuredVideos["srimad-bhagavatam"] },
      { name: "Character Studies", videoCount: 10, duration: "3h 45m", videos: featuredVideos["srimad-bhagavatam"] },
      { name: "Practical Applications", videoCount: 8, duration: "2h 30m", videos: featuredVideos["srimad-bhagavatam"] },
    ],
    startHere: [
      { title: "Introduction to Bhagavatam", videoId: "qVc-MPXhO-Q" },
      { title: "Krishna's Pastimes", videoId: "YvJU3yYBqJE" },
      { title: "Lessons from Great Devotees", videoId: "ZNP3U_mSb6k" },
    ],
  },
  {
    id: "caitanya-caritamrta",
    title: "Caitanya-caritamrta",
    description: "The life and teachings of Sri Caitanya Mahaprabhu, the golden avatar who spread the holy name.",
    image: "https://i.ytimg.com/vi/KfGH_eqoEHk/maxresdefault.jpg",
    playlists: [
      { name: "Adi Lila Series", videoCount: 15, duration: "5h 10m", videos: featuredVideos["caitanya-caritamrta"] },
      { name: "Teachings of Mahaprabhu", videoCount: 10, duration: "3h 30m", videos: featuredVideos["caitanya-caritamrta"] },
      { name: "Kirtan & Chanting", videoCount: 6, duration: "1h 45m", videos: featuredVideos["caitanya-caritamrta"] },
    ],
    startHere: [
      { title: "Who is Caitanya Mahaprabhu?", videoId: "KfGH_eqoEHk" },
      { title: "The Power of Sankirtana", videoId: "sDC8xKQ8gNU" },
      { title: "Mercy of the Lord", videoId: "0B4Fp1hCLdY" },
    ],
  },
  {
    id: "practice",
    title: "Spiritual Practice (Sadhana)",
    description: "Practical guidance on daily spiritual disciplines: japa, kirtan, habits, and discipline.",
    image: "https://i.ytimg.com/vi/TI-6qPhB2vE/maxresdefault.jpg",
    playlists: [
      { name: "Morning Sadhana Guide", videoCount: 7, duration: "2h 30m", videos: featuredVideos["practice"] },
      { name: "Japa Meditation", videoCount: 5, duration: "1h 45m", videos: featuredVideos["practice"] },
      { name: "Building Spiritual Habits", videoCount: 9, duration: "3h 15m", videos: featuredVideos["practice"] },
    ],
    startHere: [
      { title: "Starting Your Practice", videoId: "TI-6qPhB2vE" },
      { title: "The Power of Japa", videoId: "2O2FLGxJzS4" },
      { title: "Creating a Sacred Routine", videoId: "6aJxN7VYh8Q" },
    ],
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
                  <a 
                    key={index}
                    href={`https://www.youtube.com/watch?v=${item.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-2xl bg-card border border-border hover:border-primary transition-colors cursor-pointer group"
                  >
                    <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                      <img 
                        src={`https://i.ytimg.com/vi/${item.videoId}/mqdefault.jpg`}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                        <Play className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <span className="text-sm text-primary font-medium">Part {index + 1}</span>
                    <h3 className="font-semibold mt-1">{item.title}</h3>
                  </a>
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
                    className="rounded-2xl bg-gradient-to-br from-saffron-light/20 to-gold-light/20 border border-border hover:shadow-lg transition-all overflow-hidden"
                  >
                    <div className="p-6 pb-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Play className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg">{playlist.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{playlist.videoCount} videos • {playlist.duration}</p>
                    </div>
                    <div className="px-4 pb-4 space-y-2">
                      {playlist.videos.slice(0, 3).map((video, vIndex) => (
                        <a
                          key={vIndex}
                          href={`https://www.youtube.com/watch?v=${video.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors text-sm"
                        >
                          <img 
                            src={`https://i.ytimg.com/vi/${video.id}/default.jpg`}
                            alt={video.title}
                            className="w-16 h-10 object-cover rounded"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="font-medium truncate text-xs">{video.title}</p>
                            <p className="text-xs text-muted-foreground">{video.duration}</p>
                          </div>
                        </a>
                      ))}
                    </div>
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