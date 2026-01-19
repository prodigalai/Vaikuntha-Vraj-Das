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

  // Close dropdown when clicking outside
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
    <header className={`sticky top-0 z-50 py-2 sm:py-4 transition-all duration-500 ${isScrolled ? 'backdrop-blur-xl bg-background/80 shadow-sm' : ''}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 pill-nav px-4 sm:px-6 border border-border/50">
          {/* Logo + Name */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <img
              src={Logo}
              alt="Logo"
              className="w-10 h-10 sm:w-12 sm:h-12"
            />

            <span className="hidden sm:block text-lg sm:text-xl font-bold font-serif italic tracking-tight">
              Vaikuntha Vraj Das
            </span>

            <span className="sm:hidden text-base font-bold font-serif">
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
                className={`text-sm font-medium rounded-full px-4 py-2 transition-all ${isActive(item.path)
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted/60'
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
                className={`text-sm font-medium rounded-full px-4 py-2 transition-all duration-300 flex items-center gap-1.5 group ${isDropdownActive(resourcesDropdown.items)
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted/60'
                  }`}
              >
                {resourcesDropdown.name}
                <ChevronDown className={`w-4 h-4 transition-all duration-300 ${openDropdown === "resources" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "resources" && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 rounded-2xl bg-card border border-border shadow-2xl py-2 z-50 overflow-hidden dropdown-enter"
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
                  {resourcesDropdown.items.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setOpenDropdown(null)}
                        className={`group relative flex items-center gap-3 px-4 py-2.5 mx-1 rounded-xl text-sm transition-all duration-300 ${isActive(item.path)
                          ? 'bg-primary/15 text-primary font-medium shadow-sm'
                          : 'hover:bg-muted/70 text-foreground'
                          }`}
                      >
                        <Icon className={`w-4 h-4 transition-transform duration-300 ${isActive(item.path) ? 'text-primary' : 'text-muted-foreground group-hover:text-primary group-hover:scale-110'}`} />
                        <span className="flex-1">{item.name}</span>
                        {isActive(item.path) && (
                          <div className="absolute right-2 w-1.5 h-1.5 rounded-full bg-primary" />
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
                className={`text-sm font-medium rounded-full px-4 py-2 transition-all duration-300 flex items-center gap-1.5 group ${isDropdownActive(activitiesDropdown.items)
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted/60'
                  }`}
              >
                {activitiesDropdown.name}
                <ChevronDown className={`w-4 h-4 transition-all duration-300 ${openDropdown === "activities" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "activities" && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 rounded-2xl bg-card border border-border shadow-2xl py-2 z-50 overflow-hidden dropdown-enter"
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
                  {activitiesDropdown.items.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setOpenDropdown(null)}
                        className={`group relative flex items-center gap-3 px-4 py-2.5 mx-1 rounded-xl text-sm transition-all duration-300 ${isActive(item.path)
                          ? 'bg-primary/15 text-primary font-medium shadow-sm'
                          : 'hover:bg-muted/70 text-foreground'
                          }`}
                      >
                        <Icon className={`w-4 h-4 transition-transform duration-300 ${isActive(item.path) ? 'text-primary' : 'text-muted-foreground group-hover:text-primary group-hover:scale-110'}`} />
                        <span className="flex-1">{item.name}</span>
                        {isActive(item.path) && (
                          <div className="absolute right-2 w-1.5 h-1.5 rounded-full bg-primary" />
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
              className={`text-sm font-medium rounded-full px-4 py-2 transition-all ${isActive("/guidance")
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-muted/60'
                }`}
            >
              Guidance
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className={`text-sm font-medium rounded-full px-4 py-2 transition-all ${isActive("/contact")
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-muted/60'
                }`}
            >
              Contact
            </Link>
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
              {/* Main Items */}
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium rounded-lg px-4 py-3 transition-all ${isActive(item.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted/60'
                    }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Resources Section */}
              <div className="mt-2">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4 py-2">
                  Resources
                </div>
                {resourcesDropdown.items.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-sm font-medium rounded-lg px-6 py-2 transition-all ${isActive(item.path)
                      ? 'bg-primary/10 text-primary'
                      : 'hover:bg-muted/60'
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Activities Section */}
              <div className="mt-2">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4 py-2">
                  Activities
                </div>
                {activitiesDropdown.items.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-sm font-medium rounded-lg px-6 py-2 transition-all ${isActive(item.path)
                      ? 'bg-primary/10 text-primary'
                      : 'hover:bg-muted/60'
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Guidance */}
              <Link
                to="/guidance"
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium rounded-lg px-4 py-3 transition-all mt-2 ${isActive("/guidance")
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted/60'
                  }`}
              >
                Guidance
              </Link>

              {/* Contact */}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium rounded-lg px-4 py-3 transition-all ${isActive("/contact")
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted/60'
                  }`}
              >
                Contact
              </Link>

              <Link
                to="/guidance"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4"
              >
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-full py-3">
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