import { Mail, Phone, MapPin, ExternalLink, Facebook, Linkedin, Instagram } from "lucide-react";
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
                className="h-12 md:h-16 w-auto transition-opacity hover:opacity-90 drop-shadow-md" 
              />
              <span className="font-heading text-xl md:text-2xl font-bold">RAD Morocco</span>
            </div>
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed mb-6">
              A boutique travel agency based in Morocco, crafting personalized journeys since 2007. Experience the magic of Morocco with expert-guided tours.
            </p>
            <div className="flex gap-4">
              <a href="https://web.facebook.com/radmorocco/reviews" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/radmorocco/" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/radmorocco/" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://t.me/elredouane" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-[#0088cc] hover:text-white transition-all" aria-label="Telegram">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.94z"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@radmorocco?_r=1&_t=ZS-94pd4EEbCh2" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-black hover:text-white transition-all" aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {[
                { label: "Home", href: "/#home" },
                { label: "About", href: "/#about" },
                { label: "Morocco tours", href: "/#tours" },
                { label: "Day tours", href: "/#daytrips" },
                { label: "Happy Travelers", href: "/#gallery" },
                { label: "Travel Consulting", href: "/travel-consulting" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
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
            <h3 className="font-heading text-lg font-bold mb-3 mt-6">Popular Pages</h3>
            <div className="space-y-2">
              {[
                { label: "Casablanca Private Tours", href: "/casablanca-private-tours" },
                { label: "Jewish Heritage Morocco", href: "/jewish-heritage-morocco" },
                { label: "Morocco Custom Itinerary", href: "/morocco-custom-itinerary" },
                { label: "Signature Tours", href: "/design-tours" },
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
                href="tel:+212520302005"
                className="flex items-center gap-3 font-body text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Phone className="h-4 w-4 shrink-0" />
                +212 520 302005 (Fix)
              </a>
              <a
                href="tel:+212666796488"
                className="flex items-center gap-3 font-body text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Phone className="h-4 w-4 shrink-0" />
                +212 666 796488 (Mobile)
              </a>
              <div className="flex items-start gap-3 flex-1 font-body text-sm text-primary-foreground/70 mt-1">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>BP 14646 CASA PAL<br/>Casablanca 20032, Morocco</span>
              </div>
              <a
                href="https://wa.me/message/F2FIG7DSVSLDO1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 rounded-full bg-[#25D366]/20 px-5 py-2.5 text-sm font-semibold text-[#25D366] hover:bg-[#25D366]/30 transition-colors w-max"
              >
                <Phone className="h-4 w-4" />
                Chat on WhatsApp
              </a>
              <a
                href="https://t.me/elredouane"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 rounded-full bg-[#0088cc]/20 px-5 py-2.5 text-sm font-semibold text-[#0088cc] hover:bg-[#0088cc]/30 transition-colors w-max"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.94z"/>
                </svg>
                Chat on Telegram
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
