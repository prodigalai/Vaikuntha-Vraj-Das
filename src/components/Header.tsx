import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Default to light theme
    const savedTheme = localStorage.getItem("theme");
    const shouldBeDark = savedTheme === "dark";
    
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Journey", path: "/journey" },
    { name: "Teachings", path: "/teachings" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Media", path: "/media" },
    { name: "Events", path: "/events" },
    { name: "Serve", path: "/serve" },
    { name: "Guidance", path: "/guidance" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`sticky top-0 z-50 py-2 sm:py-4 transition-all duration-300 ${isScrolled ? 'backdrop-blur-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 pill-nav px-4 sm:px-6">
          {/* Logo */}
          <div className="flex items-center min-w-0">
            <Link to="/" className="flex items-center gap-2 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                <span className="text-primary-foreground font-bold text-lg sm:text-xl font-serif">व</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-lg sm:text-xl font-bold font-serif tracking-tight">Vaikuntha Vraj Das</span>
              </div>
              <span className="sm:hidden text-base font-bold font-serif">VVD</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium rounded-full px-4 py-2 transition-all ${
                  isActive(item.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted/60'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-muted/60 transition-all"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
              ) : (
                <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
              )}
            </button>
            
            <Link to="/guidance">
              <Button className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-2 hover:scale-105 transition-all font-medium">
                Get Guidance
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-2 py-4 px-4 rounded-2xl bg-card/95 backdrop-blur-lg border border-border animate-fade-in">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium rounded-lg px-4 py-3 transition-all ${
                    isActive(item.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted/60'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                to="/guidance"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2"
              >
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-full py-3">
                  Get Guidance
                </Button>
              </Link>
              <Link 
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button variant="outline" className="rounded-full w-full py-3 mt-2">
                  Contact
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;