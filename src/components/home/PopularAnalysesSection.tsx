import { Link } from "react-router-dom";
import { ArrowRight, Clock, Droplet, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const popularAnalyses = [
  {
    id: "nfs",
    name: "NFS (Numération Formule Sanguine)",
    code: "NFS",
    specialty: "Hématologie",
    specialtyColor: "hematology",
    description: "Mesure les différentes cellules du sang : globules rouges, blancs et plaquettes.",
    sampleType: "Sang",
    delay: "24h",
    consultations: "12.5k",
  },
  {
    id: "glycemie",
    name: "Glycémie à jeun",
    code: "GLY",
    specialty: "Biochimie",
    specialtyColor: "biochemistry",
    description: "Mesure le taux de sucre dans le sang, essentiel pour le dépistage du diabète.",
    sampleType: "Sang",
    delay: "2h",
    consultations: "10.2k",
  },
  {
    id: "tsh",
    name: "TSH (Thyréostimuline)",
    code: "TSH",
    specialty: "Hormonologie",
    specialtyColor: "hormonology",
    description: "Évalue le fonctionnement de la thyroïde et régule le métabolisme.",
    sampleType: "Sang",
    delay: "24h",
    consultations: "8.7k",
  },
  {
    id: "bilan-lipidique",
    name: "Bilan Lipidique Complet",
    code: "BLC",
    specialty: "Biochimie",
    specialtyColor: "biochemistry",
    description: "Cholestérol total, HDL, LDL et triglycérides pour évaluer le risque cardiovasculaire.",
    sampleType: "Sang",
    delay: "24h",
    consultations: "7.9k",
  },
  {
    id: "crp",
    name: "CRP (Protéine C Réactive)",
    code: "CRP",
    specialty: "Biochimie",
    specialtyColor: "biochemistry",
    description: "Marqueur d'inflammation utilisé pour détecter infections et maladies inflammatoires.",
    sampleType: "Sang",
    delay: "2h",
    consultations: "6.4k",
  },
  {
    id: "vitamine-d",
    name: "Vitamine D (25-OH)",
    code: "VIT-D",
    specialty: "Biochimie",
    specialtyColor: "biochemistry",
    description: "Évalue le statut en vitamine D, essentielle pour les os et l'immunité.",
    sampleType: "Sang",
    delay: "48h",
    consultations: "5.8k",
  },
];

const specialtyColors: Record<string, string> = {
  hematology: "bg-hematology text-hematology-light",
  biochemistry: "bg-biochemistry text-biochemistry-light",
  hormonology: "bg-hormonology text-hormonology-light",
};

export function PopularAnalysesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Analyses les plus consultées
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Découvrez les analyses biologiques les plus recherchées par nos utilisateurs.
            </p>
          </div>
          <Link to="/analyses">
            <Button variant="outline" className="mt-4 md:mt-0">
              Voir toutes les analyses
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularAnalyses.map((analysis, index) => (
            <Link
              key={analysis.id}
              to={`/analyses/detail/${analysis.id}`}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-large transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${specialtyColors[analysis.specialtyColor]}`}>
                  {analysis.specialty}
                </span>
                <span className="text-xs text-muted-foreground font-mono">{analysis.code}</span>
              </div>

              <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {analysis.name}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {analysis.description}
              </p>

              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Droplet className="w-3.5 h-3.5" />
                  {analysis.sampleType}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {analysis.delay}
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  {analysis.consultations}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
