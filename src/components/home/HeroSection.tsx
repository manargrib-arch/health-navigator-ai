import { Button } from "@/components/ui/button";
import { Search, ArrowRight, Sparkles, Shield, Clock } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const features = [
  { icon: Sparkles, text: "IA Assistante" },
  { icon: Shield, text: "Données sécurisées" },
  { icon: Clock, text: "24/7 Disponible" },
];

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/analyses?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />
      </div>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            Première plateforme de santé numérique algérienne
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Votre guide complet des{" "}
            <span className="text-gradient">analyses biologiques</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Comprenez vos analyses, trouvez un laboratoire, prenez rendez-vous et bénéficiez 
            de l'expertise de professionnels de santé qualifiés.
          </p>

          {/* Search Bar */}
          <form 
            onSubmit={handleSearch}
            className="max-w-2xl mx-auto mb-8 animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-hero rounded-2xl opacity-20 blur group-hover:opacity-30 transition-opacity duration-300" />
              <div className="relative flex items-center bg-card rounded-xl shadow-large overflow-hidden">
                <Search className="w-5 h-5 text-muted-foreground ml-5" />
                <input
                  type="text"
                  placeholder="Rechercher une analyse... (ex: NFS, Glycémie, TSH)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-4 py-4 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-base"
                />
                <Button type="submit" variant="hero" className="m-2 px-6">
                  Rechercher
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </form>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <span className="text-sm text-muted-foreground">Recherches populaires :</span>
            {["NFS", "Glycémie", "Bilan lipidique", "TSH", "Vitamine D"].map((term) => (
              <button
                key={term}
                onClick={() => navigate(`/analyses?q=${term}`)}
                className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm hover:bg-secondary/80 transition-colors"
              >
                {term}
              </button>
            ))}
          </div>

          {/* Feature badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: "0.6s" }}>
          {[
            { value: "500+", label: "Analyses documentées" },
            { value: "1200+", label: "Laboratoires partenaires" },
            { value: "50k+", label: "Consultations mensuelles" },
            { value: "48", label: "Wilayas couvertes" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-4">
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
