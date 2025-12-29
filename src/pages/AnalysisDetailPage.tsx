import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { 
  ArrowLeft, 
  Clock, 
  Droplet, 
  AlertCircle, 
  TrendingUp, 
  TrendingDown,
  MapPin,
  Stethoscope,
  FileText,
  Star,
  Share2,
  Printer,
  Bookmark
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const analysisData = {
  nfs: {
    id: "nfs",
    name: "NFS (Numération Formule Sanguine)",
    nameAr: "تعداد الدم الكامل",
    code: "NFS",
    specialty: "Hématologie",
    specialtyColor: "hematology",
    shortDescription: "Mesure les différentes cellules du sang : globules rouges, blancs et plaquettes.",
    indications: [
      "Fatigue inexpliquée ou pâleur",
      "Suspicion d'infection ou fièvre",
      "Suivi d'une maladie du sang",
      "Bilan pré-opératoire",
      "Surveillance d'un traitement (chimiothérapie)",
      "Saignements anormaux",
    ],
    referenceValues: {
      male: [
        { name: "Globules rouges", min: 4.5, max: 5.5, unit: "T/L" },
        { name: "Hémoglobine", min: 13, max: 17, unit: "g/dL" },
        { name: "Hématocrite", min: 40, max: 54, unit: "%" },
        { name: "Globules blancs", min: 4, max: 10, unit: "G/L" },
        { name: "Plaquettes", min: 150, max: 400, unit: "G/L" },
      ],
      female: [
        { name: "Globules rouges", min: 4.0, max: 5.0, unit: "T/L" },
        { name: "Hémoglobine", min: 12, max: 16, unit: "g/dL" },
        { name: "Hématocrite", min: 36, max: 47, unit: "%" },
        { name: "Globules blancs", min: 4, max: 10, unit: "G/L" },
        { name: "Plaquettes", min: 150, max: 400, unit: "G/L" },
      ],
    },
    interpretationHigh: [
      "Globules rouges élevés : polyglobulie, déshydratation, hypoxie chronique",
      "Globules blancs élevés : infection, inflammation, leucémie",
      "Plaquettes élevées : inflammation, carence en fer, syndrome myéloprolifératif",
    ],
    interpretationLow: [
      "Globules rouges bas : anémie (carence fer, B12, acide folique)",
      "Globules blancs bas : infection virale, déficit immunitaire",
      "Plaquettes basses : purpura, aplasie médullaire, hépatopathie",
    ],
    sampleType: "Sang veineux",
    tubeType: "Tube EDTA (bouchon violet)",
    preparation: [
      "Pas de jeûne strict nécessaire",
      "Signaler les traitements en cours",
      "Éviter l'effort physique intense avant le prélèvement",
    ],
    delay: "24 heures",
    method: "Cytométrie en flux + microscopie optique",
    price: { conventional: 800, nonConventional: 1200 },
    limitations: [
      "Variations possibles selon l'hydratation",
      "Modifications liées à l'altitude",
      "Interférences médicamenteuses possibles",
    ],
    faq: [
      {
        question: "Dois-je être à jeun pour une NFS ?",
        answer: "Non, le jeûne n'est pas obligatoire pour une NFS. Cependant, un repas très riche en graisses peut parfois interférer avec certaines mesures. En cas de doute, demandez conseil à votre laboratoire."
      },
      {
        question: "Pourquoi mon médecin prescrit-il une NFS ?",
        answer: "La NFS est un examen de routine très fréquent. Elle permet de détecter de nombreuses anomalies : anémie, infection, troubles de la coagulation, ou de surveiller l'effet d'un traitement sur le sang."
      },
      {
        question: "Mes résultats sont légèrement hors normes, dois-je m'inquiéter ?",
        answer: "Des variations mineures sont fréquentes et ne sont pas toujours pathologiques. Seul votre médecin, en tenant compte de votre contexte clinique complet, peut interpréter correctement vos résultats."
      },
    ],
    relatedAnalyses: ["ferritine", "vitamine-b12", "reticulocytes", "bilan-martial"],
  },
};

const specialtyColorClasses: Record<string, string> = {
  hematology: "bg-hematology text-hematology-light",
  biochemistry: "bg-biochemistry text-biochemistry-light",
  microbiology: "bg-microbiology text-microbiology-light",
  hormonology: "bg-hormonology text-hormonology-light",
};

export default function AnalysisDetailPage() {
  const { id } = useParams<{ id: string }>();
  const analysis = analysisData[id as keyof typeof analysisData] || analysisData.nfs;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Breadcrumb & Actions */}
        <section className="bg-gradient-to-b from-primary/5 to-background pb-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <Link to="/analyses" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Retour au guide
              </Link>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Bookmark className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Share2 className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Printer className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Header */}
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${specialtyColorClasses[analysis.specialtyColor]}`}>
                  {analysis.specialty}
                </span>
                <span className="text-sm text-muted-foreground font-mono">{analysis.code}</span>
              </div>
              
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                {analysis.name}
              </h1>
              <p className="text-muted-foreground text-right" dir="rtl">
                {analysis.nameAr}
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* En Bref */}
              <section className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  En bref
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {analysis.shortDescription}
                </p>
              </section>

              {/* Indications */}
              <section className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Stethoscope className="w-5 h-5 text-primary" />
                  Pourquoi prescrire ?
                </h2>
                <ul className="space-y-2">
                  {analysis.indications.map((indication, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {indication}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Reference Values */}
              <section className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  Valeurs de référence
                </h2>
                
                <Tabs defaultValue="male" className="w-full">
                  <TabsList className="mb-4">
                    <TabsTrigger value="male">Homme adulte</TabsTrigger>
                    <TabsTrigger value="female">Femme adulte</TabsTrigger>
                  </TabsList>
                  
                  {["male", "female"].map((gender) => (
                    <TabsContent key={gender} value={gender}>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-border">
                              <th className="text-left py-3 px-4 font-medium text-foreground">Paramètre</th>
                              <th className="text-center py-3 px-4 font-medium text-foreground">Valeur min</th>
                              <th className="text-center py-3 px-4 font-medium text-foreground">Valeur max</th>
                              <th className="text-center py-3 px-4 font-medium text-foreground">Unité</th>
                            </tr>
                          </thead>
                          <tbody>
                            {analysis.referenceValues[gender as "male" | "female"].map((ref, index) => (
                              <tr key={index} className="border-b border-border/50">
                                <td className="py-3 px-4 text-foreground">{ref.name}</td>
                                <td className="py-3 px-4 text-center text-muted-foreground">{ref.min}</td>
                                <td className="py-3 px-4 text-center text-muted-foreground">{ref.max}</td>
                                <td className="py-3 px-4 text-center text-muted-foreground font-mono text-xs">{ref.unit}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
                
                <p className="mt-4 text-xs text-muted-foreground flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  Ces valeurs sont indicatives et peuvent varier selon le laboratoire et la méthode utilisée.
                </p>
              </section>

              {/* Interpretation */}
              <section className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  Interprétation pédagogique
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 rounded-xl bg-hematology-light border border-hematology/20">
                    <h3 className="font-medium text-foreground mb-3 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-hematology" />
                      Augmentation possible
                    </h3>
                    <ul className="space-y-2 text-sm">
                      {analysis.interpretationHigh.map((item, index) => (
                        <li key={index} className="text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-biochemistry-light border border-biochemistry/20">
                    <h3 className="font-medium text-foreground mb-3 flex items-center gap-2">
                      <TrendingDown className="w-4 h-4 text-biochemistry" />
                      Diminution possible
                    </h3>
                    <ul className="space-y-2 text-sm">
                      {analysis.interpretationLow.map((item, index) => (
                        <li key={index} className="text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  Questions fréquentes
                </h2>
                <div className="space-y-4">
                  {analysis.faq.map((item, index) => (
                    <div key={index} className="p-4 rounded-xl bg-secondary/50">
                      <h4 className="font-medium text-foreground mb-2">{item.question}</h4>
                      <p className="text-sm text-muted-foreground">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Quick Info Card */}
              <div className="sticky top-24 space-y-6">
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="font-display font-semibold text-foreground mb-4">
                    Informations pratiques
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Droplet className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Type de prélèvement</p>
                        <p className="text-sm text-muted-foreground">{analysis.sampleType}</p>
                        <p className="text-xs text-muted-foreground mt-1">{analysis.tubeType}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Délai de rendu</p>
                        <p className="text-sm text-muted-foreground">{analysis.delay}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Star className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Méthode</p>
                        <p className="text-sm text-muted-foreground">{analysis.method}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="text-sm font-medium text-foreground mb-3">Préparation</h4>
                    <ul className="space-y-2">
                      {analysis.preparation.map((prep, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2" />
                          {prep}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Link to="/laboratoires">
                    <Button variant="hero" className="w-full">
                      <MapPin className="w-4 h-4 mr-2" />
                      Trouver un labo
                    </Button>
                  </Link>
                  <Link to="/assistant">
                    <Button variant="outline" className="w-full">
                      Poser une question à l'IA
                    </Button>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
