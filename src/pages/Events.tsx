import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import spiritualEventGathering from "@/assets/spiritual-event-gathering.jpg";
import youthMentorship from "@/assets/youth-mentorship.jpg";
import bhagavadGitaStudy from "@/assets/bhagavad-gita-study.jpg";

const upcomingEvents = [
  {
    id: "1",
    title: "Youth Retreat: Finding Your Purpose",
    date: "March 15-17, 2026",
    time: "Full Day",
    location: "ISKCON Punjabi Bagh, Delhi",
    type: "Retreat",
    description: "A 3-day immersive experience for young professionals seeking clarity in life and career.",
    registrationOpen: true,
  },
  {
    id: "2",
    title: "Bhagavad Gita Study Circle",
    date: "Every Sunday",
    time: "10:00 AM - 12:00 PM",
    location: "ISKCON Punjabi Bagh, Delhi",
    type: "Weekly",
    description: "Weekly discussion and study of Bhagavad Gita with practical life applications.",
    registrationOpen: true,
  },
  {
    id: "3",
    title: "Corporate Talk: Stress Management",
    date: "March 25, 2026",
    time: "2:00 PM - 4:00 PM",
    location: "Virtual (Zoom)",
    type: "Talk",
    description: "A session on managing workplace stress through Vedic wisdom.",
    registrationOpen: true,
  },
];

const pastEvents = [
  {
    id: "p1",
    title: "New Year Meditation Camp",
    date: "January 1, 2026",
    location: "ISKCON Punjabi Bagh, Delhi",
    attendees: 200,
    image: spiritualEventGathering,
  },
  {
    id: "p2",
    title: "IIT Delhi Guest Lecture",
    date: "December 15, 2025",
    location: "IIT Delhi",
    attendees: 350,
    image: youthMentorship,
  },
  {
    id: "p3",
    title: "Youth Leadership Workshop",
    date: "November 20, 2025",
    location: "ISKCON Punjabi Bagh, Delhi",
    attendees: 120,
    image: bhagavadGitaStudy,
  },
];

const Events = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center space-y-6">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium animate-slide-down">
            Events
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            Upcoming Programs
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-slide-up stagger-1">
            Join our retreats, workshops, and weekly programs for spiritual growth and community.
          </p>
        </div>

        {/* Upcoming Events */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Upcoming Events</h2>
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <div 
                key={event.id}
                className={`rounded-2xl bg-card p-6 md:p-8 hover:shadow-lg transition-shadow animate-slide-up stagger-${Math.min(index + 1, 3)}`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                      {event.type}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold mb-3">{event.title}</h3>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    {event.registrationOpen ? (
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                        Register Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    ) : (
                      <Button variant="outline" className="rounded-full px-8" disabled>
                        Registration Closed
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Invite CTA */}
        <section className="rounded-3xl bg-gradient-to-br from-saffron-light/20 to-gold-light/30 p-8 md:p-12 mb-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Invite for a Talk</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Interested in having Vaikuntha Vraj Das speak at your institution, corporate event, or community gathering?
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
            Send Invitation
          </Button>
        </section>

        {/* Past Events */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Past Events Gallery</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <div 
                key={event.id}
                className="group rounded-2xl overflow-hidden bg-card card-hover"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {event.attendees} attended
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Events;