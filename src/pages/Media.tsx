import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import cityBg from "@/assets/blurred-cityscape-bg.jpg";
import { useParams } from "react-router-dom";
import { Play, Headphones, Film, Radio, Filter, Instagram, Facebook, Youtube, ExternalLink, Calendar, Eye } from "lucide-react";
import { useState } from "react";
import natureBg from "@/assets/spiritual_nature_bg.png";

const mediaTypes = [
  { id: "all", label: "All Media", icon: Filter },
  { id: "videos", label: "Videos", icon: Play },
  { id: "podcasts", label: "Podcasts", icon: Headphones },
  { id: "shorts", label: "Shorts", icon: Film },
  { id: "live", label: "Live", icon: Radio },
];

const topics = [
  { value: "all", label: "All Topics" },
  { value: "Bhagavad Gita", label: "Bhagavad Gita" },
  { value: "Youth", label: "Youth" },
  { value: "Relationships", label: "Relationships" },
  { value: "Career", label: "Career" },
  { value: "Meditation", label: "Meditation" },
  { value: "Mental Health", label: "Mental Health" },
];

const mediaItems = [
  {
    id: "1",
    type: "videos",
    title: "Spiritual Wisdom for Daily Life",
    topic: "Bhagavad Gita",
    duration: "42 min",
    videoId: "dAbfaizn8C8",
    views: "10K",
    platform: "YouTube",
    date: "2 weeks ago",
  },
];

const instagramReels = [
  {
    id: "insta1",
    type: "shorts",
    title: "Spiritual Insights",
    platform: "Instagram",
    url: "https://www.instagram.com/p/DMUOz18BFf6/",
    postId: "DMUOz18BFf6",
  },
  {
    id: "insta2",
    type: "shorts",
    title: "Daily Wisdom",
    platform: "Instagram",
    url: "https://www.instagram.com/p/DK96rq3Bqyd/",
    postId: "DK96rq3Bqyd",
  },
  {
    id: "fb1",
    type: "shorts",
    title: "Facebook Reel",
    platform: "Facebook",
    url: "https://www.facebook.com/reel/720049007402094",
    postId: "720049007402094",
  },
];

const Media = () => {
  const { type } = useParams();
  const [selectedType, setSelectedType] = useState(type || "all");
  const [selectedTopic, setSelectedTopic] = useState("all");
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const filteredMedia = mediaItems.filter(item => {
    const typeMatch = selectedType === "all" || item.type === selectedType;
    const topicMatch = selectedTopic === "all" || item.topic === selectedTopic;
    return typeMatch && topicMatch;
  });

  return (
    <div className="min-h-screen bg-transparent relative">
      <PageBackground image={cityBg} opacity={0.65} />
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="pt-12 pb-12 md:pt-16 md:pb-16">
          <div className="text-center space-y-5 max-w-4xl mx-auto" data-animate="fadeInUp">
            <span className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
              Media Library
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Spiritual Wisdom
              <span className="block text-primary mt-2">For Modern Life</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Explore discourses, podcasts, and insights on applying timeless wisdom to contemporary challenges.
            </p>
          </div>

          {/* Platform Links - Premium Design */}
          <div className="flex flex-wrap justify-center gap-4 mt-8" data-animate="fadeInUp">
            <a
              href="https://www.youtube.com/@vaikunthavrajdas"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors p-2">
                <img
                  src="https://cdn3d.iconscout.com/3d/free/thumb/free-youtube-3d-icon-png-download-7516827.png"
                  alt="YouTube"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                />
              </div>
              <div className="text-left">
                <div className="font-semibold text-sm">YouTube</div>
                <div className="text-xs text-muted-foreground">@vaikunthavrajdas</div>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-red-500 transition-colors ml-2" />
            </a>
            <a
              href="https://www.instagram.com/vaikunthavrajdas/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors p-2">
                <img
                  src="https://cdn3d.iconscout.com/3d/free/thumb/free-instagram-logo-3d-icon-png-download-12257263.png"
                  alt="Instagram"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                />
              </div>
              <div className="text-left">
                <div className="font-semibold text-sm">Instagram</div>
                <div className="text-xs text-muted-foreground">@vaikunthavrajdas</div>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-pink-500 transition-colors ml-2" />
            </a>
            <a
              href="https://www.facebook.com/vaikunthavrajdas/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors p-2">
                <img
                  src="https://cdn3d.iconscout.com/3d/free/thumb/free-facebook-logo-3d-icon-png-download-12257268.png"
                  alt="Facebook"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                />
              </div>
              <div className="text-left">
                <div className="font-semibold text-sm">Facebook</div>
                <div className="text-xs text-muted-foreground">@vaikunthavrajdas</div>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-blue-500 transition-colors ml-2" />
            </a>
          </div>
        </section>

        {/* Featured Video Section */}
        <section className="mb-20" data-animate="fadeIn">
          <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-card via-card/50 to-card border border-border/50 shadow-2xl">
            <div className="aspect-video bg-black/5">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dAbfaizn8C8?rel=0"
                title="Featured: Spiritual Wisdom for Daily Life"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="p-8 md:p-10">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                      Featured Video
                    </span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      10K views
                    </span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      2 weeks ago
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">Spiritual Wisdom for Daily Life</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                    Watch this inspiring discourse on applying spiritual wisdom to everyday challenges and finding peace in modern life through the timeless teachings of Bhagavad Gita.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border/50">
                <a
                  href="https://www.youtube.com/@vaikunthavrajdas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 hover:scale-105"
                >
                  <Youtube className="w-5 h-5" />
                  Visit Channel
                </a>
                <a
                  href="https://www.youtube.com/watch?v=dAbfaizn8C8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border hover:border-primary/50 font-medium transition-all duration-300 hover:scale-105"
                >
                  Watch on YouTube
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="mb-12">
          <div className="mb-6" data-animate="fadeInUp">
            <h2 className="text-2xl md:text-3xl font-bold mb-1">Media Library</h2>
            <p className="text-sm text-muted-foreground">Filter by type and topic</p>
          </div>

          {/* Type Filters */}
          <div className="mb-6" data-animate="fadeInUp">
            <div className="flex flex-wrap gap-2">
              {mediaTypes.map((t) => {
                const Icon = t.icon;
                return (
                  <button
                    key={t.id}
                    onClick={() => setSelectedType(t.id)}
                    className={`group flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${selectedType === t.id
                      ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                      : 'bg-card border border-border/50 hover:border-primary/50 hover:bg-card/80'
                      }`}
                  >
                    <Icon className={`w-4 h-4 ${selectedType === t.id ? '' : 'text-muted-foreground group-hover:text-primary'}`} />
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Topic Filter */}
          <div className="flex flex-wrap gap-2" data-animate="fadeInUp">
            {topics.map((topic) => (
              <button
                key={topic.value}
                onClick={() => setSelectedTopic(topic.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedTopic === topic.value
                  ? 'bg-primary/15 text-primary border border-primary/30 font-semibold'
                  : 'bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card text-foreground'
                  }`}
              >
                {topic.label}
              </button>
            ))}
          </div>
        </section>

        {/* Instagram Reels Section */}
        <section className="mb-20" data-animate="fadeInUp">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center">
              <Instagram className="w-6 h-6 text-pink-500" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Instagram Reels & Posts</h2>
              <p className="text-muted-foreground">Latest spiritual insights and wisdom</p>
            </div>
          </div>
          <div
            className="grid md:grid-cols-3 gap-6"
            data-animate-group="fadeInUp"
            data-stagger-delay="0.15"
          >
            {instagramReels.map((reel) => (
              <a
                key={reel.id}
                href={reel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02] hover:border-primary/30"
                data-animate-item
              >
                <div className="relative aspect-[9/16] bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 flex items-center justify-center overflow-hidden">
                  {reel.platform === "Instagram" ? (
                    <>
                      <Instagram className="w-20 h-20 text-pink-500/30 group-hover:text-pink-500 group-hover:scale-125 transition-all duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </>
                  ) : (
                    <>
                      <Facebook className="w-20 h-20 text-blue-500/30 group-hover:text-blue-500 group-hover:scale-125 transition-all duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </>
                  )}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-background/95 backdrop-blur-md border border-border/50 text-xs font-semibold shadow-lg">
                    {reel.platform}
                  </div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-background/95 backdrop-blur-md border border-border/50 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {reel.platform === "Instagram" ? (
                      <Instagram className="w-5 h-5 text-pink-500" />
                    ) : (
                      <Facebook className="w-5 h-5 text-blue-500" />
                    )}
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{reel.platform}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">{reel.title}</h3>
                  <p className="text-sm text-muted-foreground">Click to view on {reel.platform}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Media Grid */}
        {filteredMedia.length > 0 ? (
          <section className="mb-20" data-animate-group="fadeInUp" data-stagger-delay="0.1">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMedia.map((item) => (
                <div
                  key={item.id}
                  className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02] hover:border-primary/30"
                  data-animate-item
                >
                  <div className="relative aspect-video overflow-hidden bg-black/5">
                    {playingVideo === item.id ? (
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1`}
                        title={item.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    ) : (
                      <>
                        <img
                          src={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`;
                          }}
                        />
                        <button
                          onClick={() => setPlayingVideo(item.id)}
                          className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"
                        >
                          <div className="w-20 h-20 rounded-full bg-primary/95 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                            <Play className="w-10 h-10 text-primary-foreground ml-1" />
                          </div>
                        </button>
                        <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md text-white text-xs font-semibold">
                          {item.duration}
                        </div>
                        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-background/95 backdrop-blur-md border border-border/50 text-xs font-semibold shadow-lg">
                          {item.platform}
                        </div>
                      </>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide">
                        {item.topic}
                      </span>
                      {item.date && (
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {item.date}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {item.views} views
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <section className="mb-20 py-20 text-center" data-animate="fadeIn">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-6">
                <Film className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-2">No media found</h3>
              <p className="text-muted-foreground">Try adjusting your filters to see more content.</p>
            </div>
          </section>
        )}

        {/* Subscribe CTA */}
        <section className="mb-20" data-animate="fadeIn">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-background border border-border/50 p-12 md:p-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary))/0.05,transparent_70%)]" />
            <div className="relative text-center max-w-3xl mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <Youtube className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Never Miss a Teaching</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Subscribe to our YouTube channel for weekly discourses on Bhagavad Gita, spiritual wisdom, and practical guidance for modern life.
              </p>
              <a
                href="https://www.youtube.com/@vaikunthavrajdas?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition-all duration-300 shadow-xl shadow-red-600/30 hover:scale-105"
              >
                <Youtube className="w-6 h-6" />
                Subscribe on YouTube
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Media;
