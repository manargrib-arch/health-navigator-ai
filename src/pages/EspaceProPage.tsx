import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Stethoscope, 
  Pill, 
  Microscope, 
  GraduationCap,
  FileEdit,
  Video,
  Calendar,
  BookOpen,
  Users,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const professionals = [
  {
    id: "medecin",
    title: "Médecins",
    description: "Outils de prescription, consultations en ligne et ressources professionnelles",
    icon: Stethoscope,
    color: "from-primary to-primary/80",
    features: [
      "Générateur de prescriptions électroniques",
      "Bibliothèque de profils d'analyses",
      "Consultations en ligne (audio/vidéo)",
      "Revue des nouveautés scientifiques",
      "Forum modéré entre professionnels",
    ],
    cta: "Accéder à l'espace médecin",
    link: "/espace-pro/medecin",
  },
  {
    id: "pharmacien",
    title: "Pharmaciens",
    description: "Guide officine, interface laboratoire et formations continues",
    icon: Pill,
    color: "from-accent to-accent/80",
    features: [
      "Guide des analyses disponibles en officine",
      "Interface commande/résultats laboratoire",
      "Gestion des partenariats labos",
      "Modules de formation continue",
      "Fiches conseil pour les patients",
    ],
    cta: "Accéder à l'espace pharmacien",
    link: "/espace-pro/pharmacien",
  },
  {
    id: "biologiste",
    title: "Biologistes",
    description: "Mise à jour des référentiels, consultations expertes et veille scientifique",
    icon: Microscope,
    color: "from-microbiology to-microbiology/80",
    features: [
      "Mise à jour des valeurs de référence",
      "Documentation des méthodes analytiques",
      "Consultations inter-laboratoires",
      "Veille scientifique personnalisée",
      "Comparaison des pratiques",
    ],
    cta: "Accéder à l'espace biologiste",
    link: "/espace-pro/biologiste",
  },
];

const tools = [
  {
    icon: FileEdit,
    title: "Prescription électronique",
    description: "Générez des ordonnances avec QR code et signature numérique",
  },
  {
    icon: Video,
    title: "Téléconsultations",
    description: "Vidéo HD sécurisée avec partage d'écran et bibliothèque de schémas",
  },
  {
    icon: Calendar,
    title: "Agenda intelligent",
    description: "Gestion des rendez-vous avec synchronisation calendrier",
  },
  {
    icon: BookOpen,
    title: "Formation continue",
    description: "Webinaires, e-learning et certifications accréditées",
  },
  {
    icon: Users,
    title: "Communauté",
    description: "Forum modéré, cas cliniques et groupes de discussion",
  },
  {
    icon: GraduationCap,
    title: "Veille scientifique",
    description: "Articles triés, recommandations HAS et nouvelles normes",
  },
];

export default function EspaceProPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                Réservé aux professionnels de santé
              </div>
              
              <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
                Espace Professionnel
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                Accédez à des outils avancés de prescription, des consultations en ligne 
                et des ressources de formation continue pour optimiser votre pratique.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="lg">
                  Créer un compte professionnel
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" size="lg">
                  Se connecter
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Spaces */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Choisissez votre espace
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Chaque profession dispose d'un espace dédié avec des outils adaptés à ses besoins spécifiques.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {professionals.map((pro, index) => (
                <div
                  key={pro.id}
                  className="group relative p-8 rounded-3xl bg-card border border-border hover:shadow-xl transition-all duration-300 animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${pro.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pro.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <pro.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    
                    <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                      {pro.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6">
                      {pro.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {pro.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link to={pro.link}>
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {pro.cta}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Outils professionnels
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Une suite complète d'outils pour faciliter votre pratique quotidienne.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <div
                  key={tool.title}
                  className="p-6 rounded-2xl bg-card border border-border hover:shadow-large transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <tool.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {tool.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {tool.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl bg-gradient-hero text-primary-foreground text-center">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Rejoignez le réseau LabNet
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Plus de 1 000 professionnels de santé algériens utilisent déjà LabNet 
                pour optimiser leur pratique. Inscrivez-vous gratuitement.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="glass" size="lg" className="text-primary-foreground border-primary-foreground/30">
                  S'inscrire maintenant
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="ghost" size="lg" className="text-primary-foreground hover:bg-primary-foreground/10">
                  En savoir plus
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
