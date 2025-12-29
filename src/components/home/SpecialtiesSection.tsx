import { Link } from "react-router-dom";
import { 
  Droplets, 
  FlaskConical, 
  Bug, 
  Activity, 
  Shield, 
  Dna,
  Heart,
  Eye,
  Stethoscope,
  Baby,
  Pill,
  Microscope
} from "lucide-react";

const specialties = [
  {
    id: "hematologie",
    name: "Hématologie",
    nameAr: "أمراض الدم",
    description: "Analyses du sang et de la coagulation",
    icon: Droplets,
    color: "hematology",
    count: 45,
  },
  {
    id: "biochimie",
    name: "Biochimie",
    nameAr: "الكيمياء الحيوية",
    description: "Métabolisme, enzymes, électrolytes",
    icon: FlaskConical,
    color: "biochemistry",
    count: 78,
  },
  {
    id: "microbiologie",
    name: "Microbiologie",
    nameAr: "علم الأحياء الدقيقة",
    description: "Bactéries, virus, parasites",
    icon: Bug,
    color: "microbiology",
    count: 52,
  },
  {
    id: "hormonologie",
    name: "Hormonologie",
    nameAr: "علم الهرمونات",
    description: "Hormones et marqueurs tumoraux",
    icon: Activity,
    color: "hormonology",
    count: 63,
  },
  {
    id: "immunologie",
    name: "Immunologie",
    nameAr: "علم المناعة",
    description: "Système immunitaire et allergies",
    icon: Shield,
    color: "immunology",
    count: 41,
  },
  {
    id: "genetique",
    name: "Génétique",
    nameAr: "علم الوراثة",
    description: "Tests génétiques et dépistages",
    icon: Dna,
    color: "genetics",
    count: 28,
  },
  {
    id: "cardiologie",
    name: "Cardiologie",
    nameAr: "أمراض القلب",
    description: "Marqueurs cardiaques",
    icon: Heart,
    color: "hematology",
    count: 18,
  },
  {
    id: "ophtalmologie",
    name: "Ophtalmologie",
    nameAr: "طب العيون",
    description: "Analyses oculaires",
    icon: Eye,
    color: "biochemistry",
    count: 12,
  },
  {
    id: "pneumologie",
    name: "Pneumologie",
    nameAr: "أمراض الرئة",
    description: "Analyses respiratoires",
    icon: Stethoscope,
    color: "microbiology",
    count: 15,
  },
  {
    id: "pediatrie",
    name: "Pédiatrie",
    nameAr: "طب الأطفال",
    description: "Analyses spécifiques enfants",
    icon: Baby,
    color: "hormonology",
    count: 32,
  },
  {
    id: "toxicologie",
    name: "Toxicologie",
    nameAr: "علم السموم",
    description: "Dépistage et dosages",
    icon: Pill,
    color: "immunology",
    count: 24,
  },
  {
    id: "cytologie",
    name: "Cytologie",
    nameAr: "علم الخلايا",
    description: "Analyse cellulaire",
    icon: Microscope,
    color: "genetics",
    count: 19,
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  hematology: { bg: "bg-hematology-light", text: "text-hematology", border: "border-hematology/20" },
  biochemistry: { bg: "bg-biochemistry-light", text: "text-biochemistry", border: "border-biochemistry/20" },
  microbiology: { bg: "bg-microbiology-light", text: "text-microbiology", border: "border-microbiology/20" },
  hormonology: { bg: "bg-hormonology-light", text: "text-hormonology", border: "border-hormonology/20" },
  immunology: { bg: "bg-immunology-light", text: "text-immunology", border: "border-immunology/20" },
  genetics: { bg: "bg-genetics-light", text: "text-genetics", border: "border-genetics/20" },
};

export function SpecialtiesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explorer par spécialité
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Naviguez dans notre guide complet des analyses biologiques, organisé par 
            spécialité médicale pour une recherche facilitée.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {specialties.map((specialty, index) => {
            const colors = colorClasses[specialty.color];
            return (
              <Link
                key={specialty.id}
                to={`/analyses/${specialty.id}`}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-transparent hover:shadow-large transition-all duration-300 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Hover background */}
                <div className={`absolute inset-0 ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative">
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <specialty.icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {specialty.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2" dir="rtl">
                    {specialty.nameAr}
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    {specialty.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-medium ${colors.text}`}>
                      {specialty.count} analyses
                    </span>
                    <span className="text-xs text-muted-foreground group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
