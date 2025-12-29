import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  MapPin, 
  Clock, 
  Phone, 
  Star, 
  Navigation,
  Filter,
  ChevronDown,
  Accessibility,
  CreditCard,
  TestTubes
} from "lucide-react";

const laboratories = [
  {
    id: "1",
    name: "Laboratoire Central Alger",
    address: "123 Rue Didouche Mourad, Alger Centre",
    wilaya: "Alger",
    phone: "+213 21 XX XX XX",
    rating: 4.8,
    reviews: 234,
    hours: "7h00 - 19h00",
    distance: "1.2 km",
    features: ["Accessible PMR", "Conventionné CNAS", "Résultats en ligne"],
    specialties: ["Hématologie", "Biochimie", "Microbiologie"],
    priceRange: "Conventionné",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&h=300&fit=crop",
  },
  {
    id: "2",
    name: "Lab Bio Express",
    address: "45 Boulevard Mohamed V, Oran",
    wilaya: "Oran",
    phone: "+213 41 XX XX XX",
    rating: 4.6,
    reviews: 156,
    hours: "6h30 - 20h00",
    distance: "2.5 km",
    features: ["Prélèvement à domicile", "Résultats en ligne", "Parking"],
    specialties: ["Biochimie", "Hormonologie", "Immunologie"],
    priceRange: "Conventionné",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop",
  },
  {
    id: "3",
    name: "Laboratoire Pasteur Constantine",
    address: "78 Avenue de l'ALN, Constantine",
    wilaya: "Constantine",
    phone: "+213 31 XX XX XX",
    rating: 4.9,
    reviews: 312,
    hours: "7h00 - 18h00",
    distance: "3.1 km",
    features: ["Accessible PMR", "Conventionné CNAS", "Prélèvement à domicile"],
    specialties: ["Hématologie", "Génétique", "Cytologie"],
    priceRange: "Conventionné",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop",
  },
  {
    id: "4",
    name: "Centre d'Analyses Médicales Annaba",
    address: "12 Rue de la Liberté, Annaba",
    wilaya: "Annaba",
    phone: "+213 38 XX XX XX",
    rating: 4.5,
    reviews: 98,
    hours: "7h30 - 17h30",
    distance: "4.8 km",
    features: ["Parking", "Résultats en ligne"],
    specialties: ["Biochimie", "Microbiologie", "Hormonologie"],
    priceRange: "Hors convention",
    image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=400&h=300&fit=crop",
  },
];

const wilayas = ["Toutes", "Alger", "Oran", "Constantine", "Annaba", "Blida", "Sétif"];

export default function LaboratoiresPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedWilaya, setSelectedWilaya] = useState("Toutes");
  const [showFilters, setShowFilters] = useState(false);

  const filteredLabs = laboratories.filter((lab) => {
    const matchesSearch = 
      lab.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lab.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesWilaya = selectedWilaya === "Toutes" || lab.wilaya === selectedWilaya;
    return matchesSearch && matchesWilaya;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="bg-gradient-to-b from-accent/10 to-background pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Trouver un Laboratoire
              </h1>
              <p className="text-muted-foreground">
                Localisez les laboratoires d'analyses médicales près de chez vous. 
                Comparez les services, tarifs et prenez rendez-vous en ligne.
              </p>
            </div>

            {/* Search */}
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Rechercher un laboratoire ou une adresse..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                <div className="relative">
                  <select
                    value={selectedWilaya}
                    onChange={(e) => setSelectedWilaya(e.target.value)}
                    className="w-full md:w-48 px-4 py-4 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none"
                  >
                    {wilayas.map((wilaya) => (
                      <option key={wilaya} value={wilaya}>{wilaya}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              {filteredLabs.length} laboratoire{filteredLabs.length > 1 ? 's' : ''} trouvé{filteredLabs.length > 1 ? 's' : ''}
            </p>
            <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)}>
              <Filter className="w-4 h-4 mr-2" />
              Filtres
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredLabs.map((lab, index) => (
              <div
                key={lab.id}
                className="group rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={lab.image}
                    alt={lab.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-lg bg-card/90 backdrop-blur-sm text-sm">
                    <Star className="w-4 h-4 text-warning fill-warning" />
                    <span className="font-medium">{lab.rating}</span>
                    <span className="text-muted-foreground">({lab.reviews})</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {lab.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {lab.address}
                      </div>
                    </div>
                    <span className="px-2 py-1 rounded-lg bg-accent/10 text-accent text-xs font-medium">
                      {lab.distance}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {lab.features.map((feature) => (
                      <span 
                        key={feature} 
                        className="px-2 py-1 rounded-full bg-secondary text-secondary-foreground text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {lab.hours}
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="w-4 h-4" />
                      {lab.phone}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <TestTubes className="w-4 h-4 text-muted-foreground" />
                    <div className="flex flex-wrap gap-1">
                      {lab.specialties.map((specialty) => (
                        <span key={specialty} className="text-xs text-muted-foreground">
                          {specialty}{lab.specialties.indexOf(specialty) < lab.specialties.length - 1 ? " •" : ""}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="hero" className="flex-1">
                      Prendre RDV
                    </Button>
                    <Button variant="outline" size="icon">
                      <Navigation className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Phone className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredLabs.length === 0 && (
            <div className="text-center py-16">
              <MapPin className="w-16 h-16 mx-auto text-muted-foreground/30 mb-4" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Aucun laboratoire trouvé
              </h3>
              <p className="text-muted-foreground mb-6">
                Essayez de modifier vos critères de recherche.
              </p>
              <Button variant="outline" onClick={() => { setSearchQuery(""); setSelectedWilaya("Toutes"); }}>
                Réinitialiser les filtres
              </Button>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
