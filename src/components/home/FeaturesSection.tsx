import { 
  BookOpen, 
  MapPin, 
  Calendar, 
  Bot, 
  Stethoscope, 
  GraduationCap,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: BookOpen,
    title: "Guide des Analyses",
    description: "Plus de 500 analyses biologiques documentées avec explications pédagogiques, valeurs de référence et indications.",
    link: "/analyses",
    linkText: "Explorer le guide",
    gradient: "from-primary/10 to-accent/10",
  },
  {
    icon: MapPin,
    title: "Trouver un Laboratoire",
    description: "Localisez les laboratoires près de chez vous, comparez les tarifs et vérifiez les analyses disponibles.",
    link: "/laboratoires",
    linkText: "Rechercher",
    gradient: "from-accent/10 to-microbiology/10",
  },
  {
    icon: Calendar,
    title: "Prise de Rendez-vous",
    description: "Réservez votre créneau en ligne pour vos prélèvements ou consultations avec des professionnels.",
    link: "/rendez-vous",
    linkText: "Prendre RDV",
    gradient: "from-hormonology/10 to-primary/10",
  },
  {
    icon: Bot,
    title: "Assistant IA",
    description: "Posez vos questions sur les analyses biologiques et recevez des explications adaptées à votre niveau.",
    link: "/assistant",
    linkText: "Discuter avec l'IA",
    gradient: "from-genetics/10 to-hormonology/10",
  },
  {
    icon: Stethoscope,
    title: "Espace Professionnel",
    description: "Outils de prescription, consultations en ligne et ressources pour médecins, pharmaciens et biologistes.",
    link: "/espace-pro",
    linkText: "Accéder à l'espace pro",
    gradient: "from-biochemistry/10 to-primary/10",
  },
  {
    icon: GraduationCap,
    title: "Formations Continues",
    description: "Webinaires, modules e-learning et certifications pour les professionnels de santé.",
    link: "/formations",
    linkText: "Voir les formations",
    gradient: "from-immunology/10 to-accent/10",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Une plateforme complète pour votre santé
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            LabNet rassemble tous les outils nécessaires pour naviguer dans le monde 
            des analyses biologiques, que vous soyez patient ou professionnel de santé.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:shadow-large transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                  {feature.description}
                </p>
                
                <Link to={feature.link}>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 group/btn">
                    {feature.linkText}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
