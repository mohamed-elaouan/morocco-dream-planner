import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, User, BookOpen, Quote, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import WhatsAppButton from "@/components/WhatsAppButton";
import SeoHead from "@/components/SeoHead";
import foodImg from "@/assets/Food_tasting Cover.webp";//food_tasting.png
import authorImg from "@/assets/Judith_H.Dern_profil.webp";
import "@/styles/MoroccanCuisineArticle.css";

/* ── pull-quote helper ──────────────────────────────────────── */
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

/* ── separator ornament ─────────────────────────────────────── */
const Ornament = () => (
  <div className="article-ornament">
    <span />
    <span className="diamond">◆</span>
    <span />
  </div>
);

/* ════════════════════════════════════════════════════════════ */
const MoroccanCuisineArticle = () => {
  return (
    <div className="moroccan-article-page">
      <SeoHead
        title="Enticing Spices and Blended Culinary Cultures Set Morocco's Cuisine Apart — by Judith H. Dern"
        description="Smell, taste, touch, and see. All four senses will be enchanted when discovering Moroccan cuisine. An article by Judith H. Dern exploring Morocco's cross-cultural culinary magic."
      />
      <Navbar />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="article-hero">
        <div className="article-hero-bg">
          <img src={foodImg} alt="Moroccan Cuisine" />
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
              Featured Article
            </span>

            <h1 className="article-title">
              Enticing Spices and Blended Culinary Cultures
              <span className="title-accent"> Set Morocco's Cuisine Apart</span>
            </h1>

            <div className="article-meta">
              <div className="meta-item">
                <User className="meta-icon" />
                <span>Judith H. Dern</span>
              </div>
              <div className="meta-divider" />
              <div className="meta-item">
                <Calendar className="meta-icon" />
                <span>April 28, 2023</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── ARTICLE BODY ─────────────────────────────────── */}
      <main className="article-main">
        <div className="article-container">
          {/* Back link */}
          <Link to="/design-tours" className="article-back-link">
            <ArrowLeft className="back-icon" />
            Back to Design Tours
          </Link>

          <div className="article-layout">
            {/* ── Sidebar: Author Card ── */}
            <motion.aside
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="author-card-wrapper"
            >
              <div className="author-card">
                <div className="author-avatar-img">
                  <img src={authorImg} alt="Judith H. Dern" />
                </div>
                <h3 className="author-name">Judith H. Dern</h3>
                <p className="author-role">Author &amp; Culinary Writer</p>
                <div className="author-divider" />
                <p className="author-bio">
                  A published author with numerous cookbooks, national and regional magazine articles to her credit, Judith has pursued word wizardry and all things edible throughout her career, the outcome of cooking and collecting cookbooks since she was a teenager.
                </p>
                <p className="author-bio" style={{ marginTop: "0.75rem" }}>
                  Her newest book is titled <em>The Food &amp; Drink of Seattle: From Wild Salmon to Craft Beer</em> (Rowman &amp; Littlefield Publishing Group, 2018).
                </p>
                <div className="author-affiliations">
                  <span className="affiliation-badge">IACP Member</span>
                  <span className="affiliation-badge">Les Dames d'Escoffier</span>
                </div>
                <a
                  href="https://www.judithhdern.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="author-website-link"
                >
                  <ExternalLink className="author-link-icon" />
                  Visit Author's Website
                </a>
              </div>
            </motion.aside>

            {/* ── Main Content ── */}
            <article className="article-content">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {/* Drop-cap paragraph */}
                <p className="drop-cap">
                  Smell, taste, touch, and see. All four senses will be enchanted when discovering
                  Moroccan cuisine. And if food is a door to discovering new cultures, as I've delightedly
                  discovered on two visits, the door is wide open in this fascinating country.
                </p>

                <p>
                  Start with fragrant spices encountered while walking through a souk. At a riad, local
                  restaurant or your own cooking class, taste tender, tagine-roasted chicken, fish, duck, or lamb;
                  freshly prepared carrot or eggplant salads, while you enjoy flakey leaves of pastry holding the
                  savory filling of a chicken b'stilla (authentically made using pigeon, but chicken works well),
                  savor platefuls of couscous, along with bites of freshly baked, warm-from-the-oven khobz
                  flatbread, and sip sweet mint tea. One mouthful of any dish and you'll want more, because
                  every taste delights the senses. All are examples of Morocco's cross-cultural culinary magic.
                </p>

                <PullQuote>
                  If food reveals a country's history and traditions to enhance a vibrant culture, exploring
                  the cuisine of the kingdom of Morocco offers discoveries in every dimension.
                </PullQuote>

                <p>
                  This happens from your first walk wandering the hallways of a souk, the covered street markets where food
                  vendors offer their wares ranging from colorful pyramids of spices to mountains of olives and
                  dates and stacked jars of glistening preserved lemons, where flat loaves of khobz bread are
                  baking and ready to take home still warm, and where handmade pottery for cooking tagines
                  entices cooks. Without question, from city to city, each with its own distinct dishes, the
                  fragrances, sights, and tastes of Moroccan cuisine are guaranteed captivating.
                </p>

                <Ornament />

                <h2 className="article-section-heading">A Tapestry of Culinary Heritage</h2>

                <p>
                  The delights of Moroccan cuisine can be traced to the multiple intersecting cultures of
                  this North African country. First are the original indigenous Berber tribes with many of this
                  population still making homes in mountain caves. Farmers and herdsmen, for centuries they
                  have lived across all North Africa, from Egypt westward to the Atlantic coast of Morocco.
                  Berber cooking traditions bestowed Morocco with couscous, along with savory one-pot stews
                  called tagines, which are cooked stovetop in a special ceramic dish also called a tagine.
                </p>

                <p>
                  Add the culinary contributions of other nomadic cultures from North Africa and Europe
                  and the resulting mix is sophisticated, fresh, fragrant, and delicious. From roaming Bedouins, to
                  Arabs arriving from the seventh to the 14th centuries and instilling Islamic culinary customs, to
                  the Ottomans and Moorish invaders from Spain, plus Sephardic Jewish and, most recently,
                  Syrian refugees, and it's easy to see why Moroccan cuisine expanded even further. Each group
                  brought its traditional dishes, taking advantage of local resources and adding to the country's
                  culinary kaleidoscope of tastes and textures.
                </p>

                <PullQuote>
                  From roaming Bedouins, to Arabs, Ottomans, Moorish invaders, Sephardic Jewish communities
                  and Syrian refugees — each group brought its traditional dishes, adding to the country's
                  culinary kaleidoscope of tastes and textures.
                </PullQuote>

                <Ornament />

                <h2 className="article-section-heading">The French Influence</h2>

                <p>
                  To these influences, add another from Europe, one connected to the French occupation
                  of Morocco from the early 1900s until 1956. During this colonization period, French residents
                  introduced café culture, grape growing and wine making, baguettes and croissants, soups and
                  seafood, plus their relaxed lifestyle. It's a mix mingling still with today's modern, Arabic
                  Morocco.
                </p>

                <Ornament />

                <h2 className="article-section-heading">A Verdant Landscape of Flavors</h2>

                <p>
                  For this diverse blend of culinary cultures to mingle and thrive, Morocco's verdant
                  landscape and hospitable climate are unquestionably an essential foundation. From abundant
                  sunshine to rich soil, the country's North African location offers ideal resources for growing
                  small crops and fruits, and raising animals used in many dishes. It's a landscape abundant with
                  green growing orchards of oranges and lemons, date groves, vineyards, and small farms seen
                  while exploring the countryside, all signaling of platefuls of deliciousness waiting to be
                  discovered.
                </p>

                <p className="article-closing">
                  Don't hesitate to come visit and grab a fork and a handful of just-baked khobz
                  flatbread. Mint tea will be poured in elegant silver-handled mugs and served wherever you
                  stop.
                </p>
              </motion.div>
            </article>
          </div>

          {/* ── CTA Section ────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="article-cta"
          >
            <div className="article-cta-bg" />
            <div className="article-cta-inner">
              <h2 className="cta-heading">
                Experience Morocco's Cuisine First-Hand
              </h2>
              <p className="cta-text">
                Join our Two-Week Crafts and Culinary Tour to immerse yourself in the flavors, aromas, and traditions described in this article.
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="cta-primary">
                  Book the Culinary Tour
                  <ArrowRight className="cta-icon" />
                </Link>
                <Link to="/design-tours" className="cta-secondary">
                  View All Design Tours
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

export default MoroccanCuisineArticle;
