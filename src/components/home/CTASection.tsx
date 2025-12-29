import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TestTubes, Bot } from "lucide-react";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* For Patients */}
          <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-hero overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />
            
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mb-6">
                <TestTubes className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Vous êtes patient ?
              </h3>
              
              <p className="text-primary-foreground/80 mb-8 max-w-md">
                Comprenez vos analyses, trouvez un laboratoire près de chez vous et 
                prenez rendez-vous en quelques clics. Notre assistant IA répond à 
                toutes vos questions.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/analyses">
                  <Button variant="glass" size="lg" className="text-primary-foreground border-primary-foreground/20">
                    Explorer le guide
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/assistant">
                  <Button variant="ghost" size="lg" className="text-primary-foreground hover:bg-primary-foreground/10">
                    <Bot className="w-4 h-4 mr-2" />
                    Poser une question
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* For Professionals */}
          <div className="relative p-8 md:p-10 rounded-3xl bg-card border border-border overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Vous êtes professionnel ?
              </h3>
              
              <p className="text-muted-foreground mb-8 max-w-md">
                Accédez à des outils de prescription avancés, des consultations en ligne 
                et des ressources de formation continue. Rejoignez notre réseau de 
                professionnels de santé.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/espace-pro">
                  <Button variant="hero" size="lg">
                    Accéder à l'espace pro
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/formations">
                  <Button variant="outline" size="lg">
                    Voir les formations
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
