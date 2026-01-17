import { Link } from "react-router-dom";
import { Play, ArrowRight } from "lucide-react";

const videos = [
  { title: "Managing Stress: Lessons from Gita", duration: "45 min", views: "12K", thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80" },
  { title: "Finding Purpose in Your 20s", duration: "38 min", views: "8.5K", thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80" },
  { title: "Building Meaningful Relationships", duration: "55 min", views: "6.1K", thumbnail: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80" },
];

const LatestMedia = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Latest Videos</h2>
        <Link to="/media" className="hidden md:flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
          View All <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div key={index} className={`group rounded-2xl overflow-hidden bg-card card-hover cursor-pointer animate-slide-up stagger-${index + 1}`}>
            <div className="relative aspect-video overflow-hidden">
              <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center">
                  <Play className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/70 text-white text-xs">{video.duration}</div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold group-hover:text-primary transition-colors">{video.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{video.views} views</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestMedia;