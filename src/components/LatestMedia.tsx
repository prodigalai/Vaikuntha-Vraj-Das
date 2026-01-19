import { Link } from "react-router-dom";
import { Play, ArrowRight } from "lucide-react";
import { useState } from "react";

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
  { 
    title: "Spiritual Wisdom for Daily Life", 
    duration: "42 min", 
    views: "10K", 
    videoId: "dAbfaizn8C8" 
  },
];

const LatestMedia = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="flex items-center justify-between mb-12" data-animate="fadeInUp">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Latest Videos</h2>
        <Link 
          to="/media" 
          className="hidden md:flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300 group"
        >
          View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      <div 
        className="grid md:grid-cols-3 gap-6"
        data-animate-group="fadeInUp"
        data-stagger-delay="0.15"
      >
        {videos.map((video, index) => (
          <div 
            key={index} 
            className="group rounded-2xl overflow-hidden bg-card border border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:scale-[1.02] hover:border-primary/20 cursor-pointer"
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
                  <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-md bg-black/80 text-white text-xs font-medium backdrop-blur-sm">{video.duration}</div>
                </>
              )}
            </div>
            <div className="p-5">
              <h3 className="font-semibold group-hover:text-primary transition-colors duration-300">{video.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{video.views} views</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center md:hidden" data-animate="fadeInUp">
        <Link to="/media" className="inline-flex items-center gap-2 text-primary font-medium group">
          View All Videos <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

export default LatestMedia;