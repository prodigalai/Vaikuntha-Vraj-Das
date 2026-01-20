import { useState, useEffect, useRef } from "react";
import { Menu, X, Moon, Sun, ChevronDown, BookOpen, FileText, Video, Calendar, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import Logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const resourcesDropdownRef = useRef<HTMLDivElement>(null);
  const activitiesDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        openDropdown === "resources" &&
        resourcesDropdownRef.current &&
        !resourcesDropdownRef.current.contains(target)
      ) {
        setOpenDropdown(null);
      } else if (
        openDropdown === "activities" &&
        activitiesDropdownRef.current &&
        !activitiesDropdownRef.current.contains(target)
      ) {
        setOpenDropdown(null);
      }
    };

    if (openDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

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

  const mainNavItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Journey", path: "/journey" },
  ];

  const resourcesDropdown = {
    name: "Resources",
    items: [
      { name: "Teachings", path: "/teachings", icon: BookOpen },
      { name: "Case Studies", path: "/case-studies", icon: FileText },
      { name: "Media", path: "/media", icon: Video },
    ],
  };

  const activitiesDropdown = {
    name: "Activities",
    items: [
      { name: "Events", path: "/events", icon: Calendar },
      { name: "Serve", path: "/serve", icon: HeartHandshake },
    ],
  };

  const isActive = (path: string) => location.pathname === path;
  const isDropdownActive = (items: { path: string }[]) =>
    items.some(item => location.pathname.startsWith(item.path));

  return (
    <header className={`sticky top-0 z-50 py-3 sm:py-4 transition-all duration-500 ${isScrolled ? 'backdrop-blur-xl bg-cream/90 dark:bg-background/90 shadow-soft' : ''}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 rounded-full bg-card/80 backdrop-blur-md px-5 sm:px-7 border border-border/30 shadow-soft">
          {/* Logo + Name */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
            <img
              src={Logo}
              alt="Logo"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full transition-transform duration-300 group-hover:scale-105"
            />

            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-lg sm:text-xl font-script text-primary tracking-wide">
                Vaikuntha Vraj Das
              </span>
              <span className="text-[10px] text-muted-foreground/70 uppercase tracking-widest font-medium">
                Spiritual Guide
              </span>
            </div>

            <span className="sm:hidden text-lg font-script text-primary">
              VVD
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Main Navigation Items */}
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium rounded-full px-4 py-2.5 transition-all duration-300 ${isActive(item.path)
                  ? 'bg-primary/15 text-primary font-semibold'
                  : 'text-foreground/80 hover:bg-muted/50 hover:text-foreground'
                  }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Resources Dropdown */}
            <div className="relative" ref={resourcesDropdownRef}>
              <button
                onClick={() => setOpenDropdown(openDropdown === "resources" ? null : "resources")}
                onMouseEnter={() => setOpenDropdown("resources")}
                className={`text-sm font-medium rounded-full px-4 py-2.5 transition-all duration-300 flex items-center gap-1.5 ${isDropdownActive(resourcesDropdown.items)
                  ? 'bg-primary/15 text-primary font-semibold'
                  : 'text-foreground/80 hover:bg-muted/50 hover:text-foreground'
                  }`}
              >
                {resourcesDropdown.name}
                <ChevronDown className={`w-4 h-4 transition-all duration-300 ${openDropdown === "resources" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "resources" && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 rounded-2xl bg-card/95 backdrop-blur-lg border border-border/40 shadow-lg py-2 z-50 overflow-hidden dropdown-enter"
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-saffron/5 via-transparent to-gold/5" />
                  {resourcesDropdown.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setOpenDropdown(null)}
                        className={`group relative flex items-center gap-3 px-4 py-3 mx-1.5 rounded-xl text-sm transition-all duration-300 ${isActive(item.path)
                          ? 'bg-primary/10 text-primary font-medium'
                          : 'hover:bg-muted/60 text-foreground/80 hover:text-foreground'
                          }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${isActive(item.path) ? 'bg-primary/20' : 'bg-muted/50 group-hover:bg-primary/10'}`}>
                          <Icon className={`w-4 h-4 transition-all duration-300 ${isActive(item.path) ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'}`} />
                        </div>
                        <span className="flex-1">{item.name}</span>
                        {isActive(item.path) && (
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        )}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Activities Dropdown */}
            <div className="relative" ref={activitiesDropdownRef}>
              <button
                onClick={() => setOpenDropdown(openDropdown === "activities" ? null : "activities")}
                onMouseEnter={() => setOpenDropdown("activities")}
                className={`text-sm font-medium rounded-full px-4 py-2.5 transition-all duration-300 flex items-center gap-1.5 ${isDropdownActive(activitiesDropdown.items)
                  ? 'bg-primary/15 text-primary font-semibold'
                  : 'text-foreground/80 hover:bg-muted/50 hover:text-foreground'
                  }`}
              >
                {activitiesDropdown.name}
                <ChevronDown className={`w-4 h-4 transition-all duration-300 ${openDropdown === "activities" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "activities" && (
                <div
                  className="absolute top-full left-0 mt-2 w-52 rounded-2xl bg-card/95 backdrop-blur-lg border border-border/40 shadow-lg py-2 z-50 overflow-hidden dropdown-enter"
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-saffron/5 via-transparent to-gold/5" />
                  {activitiesDropdown.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setOpenDropdown(null)}
                        className={`group relative flex items-center gap-3 px-4 py-3 mx-1.5 rounded-xl text-sm transition-all duration-300 ${isActive(item.path)
                          ? 'bg-primary/10 text-primary font-medium'
                          : 'hover:bg-muted/60 text-foreground/80 hover:text-foreground'
                          }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${isActive(item.path) ? 'bg-primary/20' : 'bg-muted/50 group-hover:bg-primary/10'}`}>
                          <Icon className={`w-4 h-4 transition-all duration-300 ${isActive(item.path) ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'}`} />
                        </div>
                        <span className="flex-1">{item.name}</span>
                        {isActive(item.path) && (
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        )}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Guidance */}
            <Link
              to="/guidance"
              className={`text-sm font-medium rounded-full px-4 py-2.5 transition-all duration-300 ${isActive("/guidance")
                ? 'bg-primary/15 text-primary font-semibold'
                : 'text-foreground/80 hover:bg-muted/50 hover:text-foreground'
                }`}
            >
              Guidance
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className={`text-sm font-medium rounded-full px-4 py-2.5 transition-all duration-300 ${isActive("/contact")
                ? 'bg-primary/15 text-primary font-semibold'
                : 'text-foreground/80 hover:bg-muted/50 hover:text-foreground'
                }`}
            >
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full bg-muted/50 hover:bg-muted transition-all duration-300 flex items-center justify-center border border-border/30"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-4 w-4 text-gold" />
              ) : (
                <Moon className="h-4 w-4 text-foreground/70" />
              )}
            </button>

            <Link to="/guidance">
              <Button className="hidden md:flex btn-golden rounded-full px-6 py-2.5 font-medium text-sm shadow-soft hover:shadow-golden transition-all duration-300">
                Get Guidance
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden w-10 h-10 rounded-full bg-muted/50 hover:bg-muted transition-all duration-300 flex items-center justify-center border border-border/30"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-3 py-5 px-5 rounded-2xl bg-card/95 backdrop-blur-lg border border-border/40 shadow-lg animate-fade-in">
            <nav className="flex flex-col gap-1">
              {/* Main Items */}
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium rounded-xl px-4 py-3 transition-all duration-300 ${isActive(item.path)
                    ? 'bg-primary/15 text-primary font-semibold'
                    : 'text-foreground/80 hover:bg-muted/50 hover:text-foreground'
                    }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Resources Section */}
              <div className="mt-3 pt-3 border-t border-border/30">
                <div className="text-xs font-semibold text-muted-foreground/70 uppercase tracking-widest px-4 py-2">
                  Resources
                </div>
                {resourcesDropdown.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center gap-3 text-sm font-medium rounded-xl px-4 py-2.5 transition-all duration-300 ${isActive(item.path)
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground/70 hover:bg-muted/50 hover:text-foreground'
                        }`}
                    >
                      <Icon className="w-4 h-4" />
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              {/* Activities Section */}
              <div className="mt-3 pt-3 border-t border-border/30">
                <div className="text-xs font-semibold text-muted-foreground/70 uppercase tracking-widest px-4 py-2">
                  Activities
                </div>
                {activitiesDropdown.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center gap-3 text-sm font-medium rounded-xl px-4 py-2.5 transition-all duration-300 ${isActive(item.path)
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground/70 hover:bg-muted/50 hover:text-foreground'
                        }`}
                    >
                      <Icon className="w-4 h-4" />
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              {/* Guidance & Contact */}
              <div className="mt-3 pt-3 border-t border-border/30 space-y-1">
                <Link
                  to="/guidance"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-sm font-medium rounded-xl px-4 py-3 transition-all duration-300 ${isActive("/guidance")
                    ? 'bg-primary/15 text-primary font-semibold'
                    : 'text-foreground/80 hover:bg-muted/50 hover:text-foreground'
                    }`}
                >
                  Guidance
                </Link>

                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-sm font-medium rounded-xl px-4 py-3 transition-all duration-300 ${isActive("/contact")
                    ? 'bg-primary/15 text-primary font-semibold'
                    : 'text-foreground/80 hover:bg-muted/50 hover:text-foreground'
                    }`}
                >
                  Contact
                </Link>
              </div>

              <Link
                to="/guidance"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4"
              >
                <Button className="btn-golden rounded-full w-full py-3.5 font-medium shadow-soft">
                  Get Guidance
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
