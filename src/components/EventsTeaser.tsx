import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventsTeaser = () => {
  return (
    <section 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32"
      data-animate="fadeIn"
    >
      <div className="rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-background p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-500">
        <div className="flex items-center gap-6" data-animate="fadeInLeft">
          <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center shadow-lg">
            <Calendar className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold">Upcoming: Youth Retreat</h3>
            <p className="text-muted-foreground">March 15-17, 2026 • ISKCON Punjabi Bagh</p>
          </div>
        </div>
        <Link to="/events" data-animate="fadeInRight">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20 group">
            View All Events <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default EventsTeaser;