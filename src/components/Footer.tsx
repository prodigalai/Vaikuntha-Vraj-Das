import { Link } from "react-router-dom";
import { Youtube, Instagram, Facebook, MapPin, Mail, Phone } from "lucide-react";
import LogoWithName from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="mt-20 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center border border-primary-foreground/20">
           <img src={LogoWithName} alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="text-lg font-bold font-serif text-primary-foreground">Vaikuntha</div>
                <div className="text-sm text-primary-foreground/80">Vraj Das</div>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/80 leading-relaxed mb-6">
              Spiritual guidance and wisdom for modern life through the timeless teachings of Bhagavad Gita.
            </p>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>ISKCON Punjabi Bagh, Delhi</span>
              </div>
            </div>
          </div>

          {/* Explore Section */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-primary-foreground">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/teachings" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-primary-foreground/40 group-hover:bg-primary-foreground transition-colors" />
                  Teachings
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-primary-foreground/40 group-hover:bg-primary-foreground transition-colors" />
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/media" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-primary-foreground/40 group-hover:bg-primary-foreground transition-colors" />
                  Media
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-primary-foreground/40 group-hover:bg-primary-foreground transition-colors" />
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-primary-foreground">About</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-primary-foreground/40 group-hover:bg-primary-foreground transition-colors" />
                  About
                </Link>
              </li>
              <li>
                <Link to="/journey" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-primary-foreground/40 group-hover:bg-primary-foreground transition-colors" />
                  Journey
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-primary-foreground/40 group-hover:bg-primary-foreground transition-colors" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-primary-foreground">Connect</h3>
            <div className="flex gap-3 mb-6">
              <a 
                href="https://www.youtube.com/@vaikunthavrajdas" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-14 h-14 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/20 hover:scale-110 hover:border-primary-foreground/40 transition-all duration-300 group p-2"
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
                className="w-14 h-14 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/20 hover:scale-110 hover:border-primary-foreground/40 transition-all duration-300 group p-2"
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
                className="w-14 h-14 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/20 hover:scale-110 hover:border-primary-foreground/40 transition-all duration-300 group p-2"
              >
                <img 
                  src="https://cdn3d.iconscout.com/3d/free/thumb/free-facebook-logo-3d-icon-png-download-12257268.png" 
                  alt="Facebook" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                />
              </a>
            </div>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>ISKCON Punjabi Bagh</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/80">
              © 2026 Vaikuntha Vraj Das. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link 
                to="/privacy" 
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="w-1 h-1 rounded-full bg-primary-foreground/40" />
              <Link 
                to="/terms" 
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
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