import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, User, BookOpen, Quote, Mail, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import WhatsAppButton from "@/components/WhatsAppButton";
import SeoHead from "@/components/SeoHead";

// Reuse the same editorial CSS
import "@/styles/MoroccanCuisineArticle.css";

// Assets
import musicImg from "@/assets/musical_discovery.png";
import leaderImg from "@/assets/Ingrid_Kovacs.png";

const PullQuote = ({ children }: { children: React.ReactNode }) => (
  <motion.blockquote
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="article-pullquote"
  >
    <Quote className="pullquote-icon" />
    <p>{children}</p>
  </motion.blockquote>
);

const Ornament = () => (
  <div className="article-ornament">
    <span />
    <span className="diamond">◆</span>
    <span />
  </div>
);

const MusicalDiscoveryTrip = () => {
  return (
    <div className="moroccan-article-page">
      <SeoHead
        title="Musical Discovery Trip - Morocco | Led by Dr. Ingrid Kovacs"
        description="Music is an essential element of Moroccan culture! Join Dr. Ingrid Kovacs for an incredible journey into the heart of Andalusian, Gnawa, and Berber music."
      />
      <Navbar />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="article-hero">
        <div className="article-hero-bg">
          <img src={musicImg} alt="Musical Discovery Trip Morocco" />
          <div className="article-hero-overlay" />
        </div>

        <div className="article-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="article-hero-inner"
          >
            <span className="article-badge">
              <BookOpen className="badge-icon" />
              Specialty Tour
            </span>

            <h1 className="article-title text-4xl md:text-5xl lg:text-7xl">
              Musical Discovery Trip
              <span className="title-accent mt-2">Morocco</span>
            </h1>

            <div className="article-meta">
              <div className="meta-item">
                <User className="meta-icon" />
                <span>Led by Dr. Ingrid Kovacs</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── BODY ─────────────────────────────────────────── */}
      <main className="article-main">
        <div className="article-container">
          <Link to="/design-tours" className="article-back-link">
            <ArrowLeft className="back-icon" />
            Back to Signature Tours
          </Link>

          <div className="article-layout">
            
            {/* ── SIDEBAR: Leader Spotlight ── */}
            <motion.aside
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="author-card-wrapper"
            >
              <div className="author-card">
                <div className="author-avatar-img aspect-square object-cover mb-4">
                  <img src={leaderImg} alt="Dr. Ingrid Kovacs" className="w-full h-full object-cover rounded-full shadow-lg border-4 border-white" />
                </div>
                <h3 className="author-name">Dr. Ingrid Kovacs</h3>
                <p className="author-role">Professor of Music</p>
                <div className="author-divider" />
                
                <p className="author-bio text-sm leading-relaxed mb-4">
                  Ingrid is a professor at American Public University and the American College of Music. She is a seasoned group leader who has traveled the world to learn how music is transmitted and taught, visiting Morocco, Peru, Ireland, Tanzania, South Africa, Brazil, Australia, and more.
                </p>

                <div className="text-left space-y-2 text-sm text-slate-600 mb-6 font-medium">
                  <p>• Professor of Music</p>
                  <p>• Personnel Manager, San Luis Obispo Symphony Orchestra</p>
                  <p>• Reviews Editor, American Strings Journal</p>
                </div>

                {/* Contact Info */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-left space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div className="text-xs text-slate-600">
                      <p className="font-semibold text-slate-900 mb-0.5">American Public University</p>
                      <p>111 W. Congress Street</p>
                      <p>Charles Town, WV 25414</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-accent shrink-0" />
                    <a href="mailto:ingrid.kovacs@mycampus.apus.edu" className="text-xs text-accent hover:underline break-all">
                      ingrid.kovacs@mycampus.apus.edu
                    </a>
                  </div>
                </div>
              </div>
            </motion.aside>

            {/* ── MAIN CONTENT ── */}
            <article className="article-content">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <p className="drop-cap">
                  Music is an essential element of Moroccan culture! From the smallest towns to large metropolitan cities, in the mountains or desert, you will always hear the incredible sounds of Moroccan musical instruments.
                </p>

                <p>
                  Your trip will include listening to Andalusian musicians perform on ethnic instruments. Interact with a local ISSAWA troupe, a religious and mystical brotherhood founded in Meknes in the 1400s and known for their spiritual music. You will have the opportunity to enjoy Gnawa music, a well-preserved heritage of ritual poetry with traditional dancing and music.
                </p>

                <PullQuote>
                  Experience the incredible sounds of Moroccan musical instruments, from Andalusian melodies to mystical Gnawa and ISSAWA performances.
                </PullQuote>

                <p>
                  Hear Berber musicians play the bendir (drum) and nair (flute). Visit the historical towns of Fez and Marrakesh, explore the vibrant markets and historical monuments. Visit with a rural Berber family and share some authentic Moroccan mint tea!
                </p>

                <Ornament />

                <h2 className="article-section-heading">Testimonial from Dr. Kovacs</h2>
                
                <div className="bg-slate-50 border-l-4 border-accent p-6 md:p-8 rounded-r-2xl italic text-slate-700 leading-loose text-lg mt-6 shadow-sm">
                  "I have traveled with Rad on many occasions. Each trip has been well-organized, engaging, and tailored to my travel needs. He is the ultimate professional and will do all he can to make your trip amazing and memorable."
                  <p className="not-italic font-bold text-slate-900 mt-4 text-base">— Dr. Ingrid Kovacs</p>
                </div>

              </motion.div>
            </article>
          </div>

          {/* ── CTA SECTION ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="article-cta"
          >
            <div className="article-cta-bg" />
            <div className="article-cta-inner">
              <h2 className="cta-heading">Ready for a Musical Adventure?</h2>
              <p className="cta-text">
                Join Dr. Ingrid Kovacs and Rad Morocco for this unforgettable journey exploring the rich, diverse musical heritage of Morocco.
              </p>
              <div className="cta-buttons">
                <Link to="/contact?tour=Musical%20Discovery%20Trip" className="cta-primary">
                  Inquire About This Tour
                  <ArrowRight className="cta-icon" />
                </Link>
                <Link to="/design-tours" className="cta-secondary">
                  View All Tours
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
      <AIAssistant />
      <WhatsAppButton />
    </div>
  );
};

export default MusicalDiscoveryTrip;
