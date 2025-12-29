import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  TestTubes, 
  Search, 
  MapPin, 
  Users, 
  Bot, 
  ChevronDown 
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Guide des Analyses", href: "/analyses", icon: TestTubes },
  { name: "Trouver un Labo", href: "/laboratoires", icon: MapPin },
  { name: "Espace Pro", href: "/espace-pro", icon: Users },
  { name: "Assistant IA", href: "/assistant", icon: Bot },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border/50">
      <nav className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center shadow-medium group-hover:shadow-glow transition-shadow duration-300">
                <TestTubes className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-accent border-2 border-card" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl text-foreground">LabNet</span>
              <span className="text-[10px] text-muted-foreground -mt-1">Santé Numérique Algérie</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href || 
                              (item.href !== "/" && location.pathname.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive 
                      ? "bg-primary/10 text-primary" 
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="hero" size="sm" className="hidden md:flex">
              Prendre RDV
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-slide-down">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                      isActive 
                        ? "bg-primary/10 text-primary" 
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-2 mt-2 border-t border-border/50">
                <Button variant="hero" className="w-full">
                  Prendre RDV
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
