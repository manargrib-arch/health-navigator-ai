import { Link } from "react-router-dom";
import { TestTubes, Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  plateforme: [
    { name: "Guide des Analyses", href: "/analyses" },
    { name: "Trouver un Laboratoire", href: "/laboratoires" },
    { name: "Prendre Rendez-vous", href: "/rendez-vous" },
    { name: "Assistant IA", href: "/assistant" },
  ],
  professionnels: [
    { name: "Espace Médecin", href: "/espace-pro/medecin" },
    { name: "Espace Pharmacien", href: "/espace-pro/pharmacien" },
    { name: "Espace Biologiste", href: "/espace-pro/biologiste" },
    { name: "Formations", href: "/formations" },
  ],
  ressources: [
    { name: "À propos", href: "/a-propos" },
    { name: "FAQ", href: "/faq" },
    { name: "Blog Santé", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Mentions légales", href: "/mentions-legales" },
    { name: "Confidentialité", href: "/confidentialite" },
    { name: "CGU", href: "/cgu" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <TestTubes className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl">LabNet</span>
                <span className="text-xs text-primary-foreground/70">Santé Numérique Algérie</span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm mb-6 max-w-md">
              La première plateforme algérienne de santé numérique intégrant navigation médicale experte, 
              services professionnels et assistance intelligente.
            </p>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <a href="mailto:contact@labnet.dz" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4" />
                contact@labnet.dz
              </a>
              <a href="tel:+213555123456" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4" />
                +213 555 123 456
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Alger, Algérie
              </span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Plateforme</h4>
            <ul className="space-y-2">
              {footerLinks.plateforme.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Professionnels</h4>
            <ul className="space-y-2">
              {footerLinks.professionnels.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Ressources</h4>
            <ul className="space-y-2">
              {footerLinks.ressources.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-display font-semibold mb-4 mt-6">Légal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2024 LabNet. Tous droits réservés. Made in Algeria 🇩🇿
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
