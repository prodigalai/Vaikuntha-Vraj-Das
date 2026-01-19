import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventsTeaser = () => {
  return (
    <section 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28"
      data-animate="fadeIn"
    >
      <div className="rounded-3xl bg-gradient-to-br from-[hsl(38,45%,90%)] via-[hsl(40,40%,92%)] to-[hsl(42,35%,94%)] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-border/30 shadow-xl hover:shadow-2xl transition-shadow duration-500">
        <div className="flex items-center gap-6" data-animate="fadeInLeft">
          <div className="w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center shadow-lg">
            <Calendar className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground">Upcoming: <span className="font-script text-primary">Youth Retreat</span></h3>
            <p className="text-muted-foreground">March 15-17, 2026 • ISKCON Punjabi Bagh</p>
          </div>
        </div>
        <Link to="/events" data-animate="fadeInRight">
          <Button className="btn-golden px-8 py-6 text-base group">
            View All Events <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default EventsTeaser;
