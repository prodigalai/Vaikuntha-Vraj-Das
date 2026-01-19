import { Link } from "react-router-dom";
import { Play, ArrowRight } from "lucide-react";
import { useState } from "react";
import blurredCityBg from "@/assets/blurred-cityscape-bg.jpg";

const videos = [
  { 
    title: "Managing Stress: Lessons from Gita", 
    duration: "45 min", 
    views: "12K", 
    videoId: "1Ay-sSBYZj8" 
  },
  { 
    title: "Finding Purpose in Your 20s", 
    duration: "38 min", 
    views: "8.5K", 
    videoId: "hSaw27_Gxnw" 
  },
  { 
    title: "Building Meaningful Relationships", 
    duration: "55 min", 
    views: "6.1K", 
    videoId: "1lfBJ6eHUw0" 
  },
];

const LatestMedia = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background to-[hsl(38,35%,93%)]" />
      
      {/* Subtle blurred bg */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${blurredCityBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom center',
          opacity: 0.05,
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6" data-animate="fadeInUp">
          <div className="text-center md:text-left">
            <span className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium uppercase tracking-wider mb-4">
              Media
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground">
              Latest <span className="font-script text-primary">Videos</span>
            </h2>
          </div>
          <Link 
            to="/media" 
            className="hidden md:flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300 group"
          >
            View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div 
          className="grid md:grid-cols-3 gap-8"
          data-animate-group="fadeInUp"
          data-stagger-delay="0.15"
        >
          {videos.map((video, index) => (
            <div 
              key={index} 
              className="group rounded-3xl overflow-hidden bg-card/80 backdrop-blur-sm border border-border/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 cursor-pointer"
              data-animate-item
            >
              <div className="relative aspect-video overflow-hidden">
                {playingVideo === video.videoId ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  <>
                    <img 
                      src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                      alt={video.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                      }}
                    />
                    <button 
                      onClick={() => setPlayingVideo(video.videoId)}
                      className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <div className="w-16 h-16 rounded-full bg-primary/95 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-7 h-7 text-primary-foreground ml-1" />
                      </div>
                    </button>
                    <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-black/70 text-white text-xs font-medium backdrop-blur-sm">{video.duration}</div>
                  </>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-serif font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300">{video.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{video.views} views</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center md:hidden" data-animate="fadeInUp">
          <Link to="/media" className="inline-flex items-center gap-2 text-primary font-medium group">
            View All Videos <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestMedia;
