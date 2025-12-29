import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link, useSearchParams } from "react-router-dom";
import { 
  Search, 
  Filter, 
  Droplets, 
  FlaskConical, 
  Bug, 
  Activity, 
  Shield, 
  Dna,
  Clock,
  ArrowRight,
  ChevronDown
} from "lucide-react";

const specialties = [
  { id: "all", name: "Toutes", icon: FlaskConical, count: 500 },
  { id: "hematologie", name: "Hématologie", icon: Droplets, count: 45, color: "hematology" },
  { id: "biochimie", name: "Biochimie", icon: FlaskConical, count: 78, color: "biochemistry" },
  { id: "microbiologie", name: "Microbiologie", icon: Bug, count: 52, color: "microbiology" },
  { id: "hormonologie", name: "Hormonologie", icon: Activity, count: 63, color: "hormonology" },
  { id: "immunologie", name: "Immunologie", icon: Shield, count: 41, color: "immunology" },
  { id: "genetique", name: "Génétique", icon: Dna, count: 28, color: "genetics" },
];

const analyses = [
  {
    id: "nfs",
    name: "NFS (Numération Formule Sanguine)",
    code: "NFS",
    specialty: "hematologie",
    specialtyName: "Hématologie",
    description: "Mesure les différentes cellules du sang : globules rouges, blancs et plaquettes. Essentiel pour dépister anémie, infections et troubles de la coagulation.",
    sampleType: "Sang veineux",
    delay: "24h",
    frequency: "très courante",
  },
  {
    id: "glycemie",
    name: "Glycémie à jeun",
    code: "GLY",
    specialty: "biochimie",
    specialtyName: "Biochimie",
    description: "Mesure le taux de sucre dans le sang après 8h de jeûne. Indispensable pour le diagnostic et le suivi du diabète.",
    sampleType: "Sang veineux",
    delay: "2h",
    frequency: "très courante",
  },
  {
    id: "hba1c",
    name: "HbA1c (Hémoglobine glyquée)",
    code: "HBA1C",
    specialty: "biochimie",
    specialtyName: "Biochimie",
    description: "Reflète la glycémie moyenne des 3 derniers mois. Marqueur clé du contrôle du diabète.",
    sampleType: "Sang veineux",
    delay: "24h",
    frequency: "courante",
  },
  {
    id: "tsh",
    name: "TSH (Thyréostimuline)",
    code: "TSH",
    specialty: "hormonologie",
    specialtyName: "Hormonologie",
    description: "Hormone de régulation de la thyroïde. Premier test pour évaluer le fonctionnement thyroïdien.",
    sampleType: "Sang veineux",
    delay: "24h",
    frequency: "très courante",
  },
  {
    id: "bilan-lipidique",
    name: "Bilan Lipidique Complet",
    code: "BLC",
    specialty: "biochimie",
    specialtyName: "Biochimie",
    description: "Cholestérol total, HDL, LDL et triglycérides. Évalue le risque cardiovasculaire.",
    sampleType: "Sang veineux",
    delay: "24h",
    frequency: "très courante",
  },
  {
    id: "crp",
    name: "CRP (Protéine C Réactive)",
    code: "CRP",
    specialty: "biochimie",
    specialtyName: "Biochimie",
    description: "Marqueur sensible d'inflammation. Augmente en cas d'infection ou d'inflammation aiguë.",
    sampleType: "Sang veineux",
    delay: "2h",
    frequency: "très courante",
  },
  {
    id: "vitamine-d",
    name: "Vitamine D (25-OH)",
    code: "VIT-D",
    specialty: "biochimie",
    specialtyName: "Biochimie",
    description: "Évalue le statut en vitamine D, essentielle pour la santé osseuse et l'immunité.",
    sampleType: "Sang veineux",
    delay: "48h",
    frequency: "courante",
  },
  {
    id: "ferritine",
    name: "Ferritine sérique",
    code: "FER",
    specialty: "hematologie",
    specialtyName: "Hématologie",
    description: "Reflète les réserves en fer de l'organisme. Utile pour diagnostiquer carences ou surcharges.",
    sampleType: "Sang veineux",
    delay: "24h",
    frequency: "courante",
  },
  {
    id: "ecbu",
    name: "ECBU (Examen Cytobactériologique des Urines)",
    code: "ECBU",
    specialty: "microbiologie",
    specialtyName: "Microbiologie",
    description: "Recherche d'infection urinaire. Identifie les bactéries et teste leur sensibilité aux antibiotiques.",
    sampleType: "Urines",
    delay: "48-72h",
    frequency: "très courante",
  },
  {
    id: "groupe-sanguin",
    name: "Groupe Sanguin ABO + Rhésus",
    code: "GS-RH",
    specialty: "hematologie",
    specialtyName: "Hématologie",
    description: "Détermine le groupe sanguin et le facteur Rhésus. Indispensable pour transfusions et grossesse.",
    sampleType: "Sang veineux",
    delay: "24h",
    frequency: "courante",
  },
  {
    id: "psa",
    name: "PSA (Antigène Prostatique Spécifique)",
    code: "PSA",
    specialty: "hormonologie",
    specialtyName: "Hormonologie",
    description: "Marqueur tumoral prostatique. Utilisé pour le dépistage et le suivi du cancer de la prostate.",
    sampleType: "Sang veineux",
    delay: "24h",
    frequency: "courante",
  },
  {
    id: "transaminases",
    name: "Transaminases (ASAT/ALAT)",
    code: "ASAT-ALAT",
    specialty: "biochimie",
    specialtyName: "Biochimie",
    description: "Enzymes hépatiques qui augmentent en cas de souffrance du foie. Bilan hépatique de base.",
    sampleType: "Sang veineux",
    delay: "24h",
    frequency: "très courante",
  },
];

const specialtyColors: Record<string, string> = {
  hematologie: "bg-hematology text-hematology-light",
  biochimie: "bg-biochemistry text-biochemistry-light",
  microbiologie: "bg-microbiology text-microbiology-light",
  hormonologie: "bg-hormonology text-hormonology-light",
  immunologie: "bg-immunology text-immunology-light",
  genetique: "bg-genetics text-genetics-light",
};

export default function AnalysesPage() {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const filteredAnalyses = analyses.filter((analysis) => {
    const matchesSearch = 
      analysis.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      analysis.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      analysis.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesSpecialty = 
      selectedSpecialty === "all" || analysis.specialty === selectedSpecialty;

    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/5 to-background pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Guide des Analyses Biologiques
              </h1>
              <p className="text-muted-foreground">
                Explorez notre base de données complète des analyses biologiques. 
                Trouvez des explications claires, des valeurs de référence et des indications.
              </p>
            </div>

            {/* Search */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Rechercher une analyse par nom ou code..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setShowFilters(!showFilters)}
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                >
                  <Filter className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className={`lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <div className="sticky top-24 bg-card rounded-2xl border border-border p-6">
                <h3 className="font-display font-semibold text-foreground mb-4">
                  Filtrer par spécialité
                </h3>
                <div className="space-y-2">
                  {specialties.map((specialty) => (
                    <button
                      key={specialty.id}
                      onClick={() => setSelectedSpecialty(specialty.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        selectedSpecialty === specialty.id
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-secondary text-foreground"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <specialty.icon className="w-4 h-4" />
                        {specialty.name}
                      </div>
                      <span className="text-xs opacity-70">{specialty.count}</span>
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Results */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">
                  {filteredAnalyses.length} analyse{filteredAnalyses.length > 1 ? 's' : ''} trouvée{filteredAnalyses.length > 1 ? 's' : ''}
                </p>
              </div>

              <div className="space-y-4">
                {filteredAnalyses.map((analysis, index) => (
                  <Link
                    key={analysis.id}
                    to={`/analyses/detail/${analysis.id}`}
                    className="group block p-6 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-large transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${specialtyColors[analysis.specialty]}`}>
                            {analysis.specialtyName}
                          </span>
                          <span className="text-xs text-muted-foreground font-mono">
                            {analysis.code}
                          </span>
                        </div>
                        <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {analysis.name}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {analysis.description}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-secondary">
                          <Clock className="w-3 h-3" />
                          {analysis.delay}
                        </div>
                        <span className="px-2 py-1 rounded-lg bg-secondary capitalize">
                          {analysis.frequency}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {filteredAnalyses.length === 0 && (
                <div className="text-center py-16">
                  <FlaskConical className="w-16 h-16 mx-auto text-muted-foreground/30 mb-4" />
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    Aucune analyse trouvée
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Essayez de modifier vos critères de recherche.
                  </p>
                  <Button variant="outline" onClick={() => { setSearchQuery(""); setSelectedSpecialty("all"); }}>
                    Réinitialiser les filtres
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
