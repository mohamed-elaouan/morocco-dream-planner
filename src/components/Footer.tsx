import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import logo from "@/assets/RAD_BRAND_LOGO.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={logo} 
                alt="RAD Morocco" 
                className="h-12 md:h-16 w-auto brightness-0 invert transition-opacity hover:opacity-90" 
              />
              <span className="font-heading text-xl md:text-2xl font-bold">RAD Morocco</span>
            </div>
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
              A boutique travel agency based in Morocco, crafting personalized journeys since 2007. Experience the magic of Morocco with expert-guided tours.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {[
                { label: "Home", href: "/#home" },
                { label: "About", href: "/#about" },
                { label: "Tours", href: "/#tours" },
                { label: "Day Trips", href: "/#daytrips" },
                { label: "Gallery", href: "/#gallery" },
                { label: "Travel Consulting", href: "/travel-consulting" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block font-body text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="mailto:info@radmorocco.com"
                className="flex items-center gap-3 font-body text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4 shrink-0" />
                info@radmorocco.com
              </a>
              <a
                href="tel:+212666796488"
                className="flex items-center gap-3 font-body text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Phone className="h-4 w-4 shrink-0" />
                +212 666796488
              </a>
              <div className="flex items-center gap-3 font-body text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 shrink-0" />
                Morocco
              </div>
              <a
                href="https://wa.me/message/F2FIG7DSVSLDO1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 rounded-full bg-accent/20 px-5 py-2.5 text-sm font-semibold text-accent hover:bg-accent/30 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="font-body text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} RAD Morocco. All rights reserved. Boutique Travel Agency.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
