import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import LogoWithName from "@/assets/logo.png";
import blurredCityBg from "@/assets/blurred-cityscape-bg.jpg";

const Footer = () => {
  return (
    <footer className="mt-20 relative overflow-hidden">
      {/* Warm cream/beige gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(38,35%,88%)] via-[hsl(35,40%,85%)] to-[hsl(32,45%,82%)]" />
      
      {/* Blurred cityscape background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${blurredCityBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.12,
          transform: 'scaleX(-1)',
        }}
      />
      
      {/* Soft radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(42,50%,90%)/50%,transparent_60%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                <img src={LogoWithName} alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="font-script text-2xl text-foreground">Vaikuntha</div>
                <div className="text-sm text-muted-foreground -mt-1">Vraj Das</div>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Spiritual guidance and wisdom for modern life through the timeless teachings of Bhagavad Gita.
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary/70" />
                <span>ISKCON Punjabi Bagh, Delhi</span>
              </div>
            </div>
          </div>

          {/* Explore Section */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-6 text-foreground">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/teachings" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                  Teachings
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/media" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                  Media
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-6 text-foreground">About</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                  About
                </Link>
              </li>
              <li>
                <Link to="/journey" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                  Journey
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/serve" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                  Serve
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-6 text-foreground">Connect</h3>
            <div className="flex gap-3 mb-6">
              <a 
                href="https://www.youtube.com/@vaikunthavrajdas" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:bg-primary/10 hover:scale-110 hover:border-primary/30 transition-all duration-300 group p-2 shadow-sm"
              >
                <img 
                  src="https://cdn3d.iconscout.com/3d/free/thumb/free-youtube-3d-icon-png-download-7516827.png" 
                  alt="YouTube" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                />
              </a>
              <a 
                href="https://www.instagram.com/vaikunthavrajdas/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:bg-primary/10 hover:scale-110 hover:border-primary/30 transition-all duration-300 group p-2 shadow-sm"
              >
                <img 
                  src="https://cdn3d.iconscout.com/3d/free/thumb/free-instagram-logo-3d-icon-png-download-12257263.png" 
                  alt="Instagram" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                />
              </a>
              <a 
                href="https://www.facebook.com/vaikunthavrajdas/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:bg-primary/10 hover:scale-110 hover:border-primary/30 transition-all duration-300 group p-2 shadow-sm"
              >
                <img 
                  src="https://cdn3d.iconscout.com/3d/free/thumb/free-facebook-logo-3d-icon-png-download-12257268.png" 
                  alt="Facebook" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                />
              </a>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Join our community for daily spiritual insights and updates.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 <span className="font-script text-primary">Vaikuntha Vraj Das</span>. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link 
                to="/privacy" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="w-1 h-1 rounded-full bg-primary/30" />
              <Link 
                to="/terms" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
