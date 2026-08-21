import { useState, useEffect, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import ResponsiveImage from "./ResponsiveImage";

// Hero section images only from "hero section" folder
import heroDesert from "@/assets/hero section/DSC_3035.webp";
import heroDesertAvif from "@/assets/hero section/DSC_3035.avif";
import heroMorocco from "@/assets/hero section/Morocco_KAI_VM_2025_0077.webp";
import heroMoroccoAvif from "@/assets/hero section/Morocco_KAI_VM_2025_0077.avif";
import heroSchool from "@/assets/hero section/Quranic School.webp";
import heroSchoolAvif from "@/assets/hero section/Quranic School.avif";
import heroRad from "@/assets/hero section/RAD_7725.webp";
import heroRadAvif from "@/assets/hero section/RAD_7725.avif";
import heroRuins from "@/assets/hero section/Roman musaic.webp";
import heroRuinsAvif from "@/assets/hero section/Roman musaic.avif";
import heroFox from "@/assets/hero section/funnic fox.webp";
import heroFoxAvif from "@/assets/hero section/funnic fox.avif";
import heroSnake from "@/assets/hero section/snake charmer.webp";
import heroSnakeAvif from "@/assets/hero section/snake charmer.avif";
import heroTanneries from "@/assets/hero section/tanneries in fes.webp";
import heroTanneriesAvif from "@/assets/hero section/tanneries in fes.avif";

// Mobile-optimized hero section images
import mobileHeroRabat from "@/assets/mobile_hero-section/photo_5834557504061817676_y.webp";
import mobileHeroRabatAvif from "@/assets/mobile_hero-section/photo_5834557504061817676_y.avif";
import mobileHeroFox from "@/assets/mobile_hero-section/Food_tasting Cover.jpg";
import mobileHeroFoxAvif from "@/assets/mobile_hero-section/Food_tasting Cover.avif";
import mobileHeroMarrakech from "@/assets/mobile_hero-section/photo_2026-03-22_20-59-50.webp";
import mobileHeroMarrakechAvif from "@/assets/mobile_hero-section/photo_2026-03-22_20-59-50.avif";
import mobileHeroDesert from "@/assets/mobile_hero-section/photo desert me.jpg";
import mobileHeroDesertAvif from "@/assets/mobile_hero-section/photo desert me.avif";
import mobileHeroRuins from "@/assets/mobile_hero-section/DSC_4443.webp";
import mobileHeroRuinsAvif from "@/assets/mobile_hero-section/DSC_4443.avif";
import mobileHeroFes from "@/assets/mobile_hero-section/photo_5834557504061817702_y.webp";
import mobileHeroFesAvif from "@/assets/mobile_hero-section/photo_5834557504061817702_y.avif";
import mobileHeroSchool from "@/assets/mobile_hero-section/photo_5848272747682184099_y.webp";
import mobileHeroSchoolAvif from "@/assets/mobile_hero-section/photo_5848272747682184099_y.avif";
import mobileHeroRad from "@/assets/mobile_hero-section/RAD_9256.jpg";
import mobileHeroRadAvif from "@/assets/mobile_hero-section/RAD_9256.avif";

const slides = [
  {
    src: heroDesert,
    avifSrc: heroDesertAvif,
    mobileSrc: mobileHeroRabat,
    mobileAvifSrc: mobileHeroRabatAvif,
    city: "Rabat",
    subtitle: "The white capital",
  },
  {
    src: heroFox,
    avifSrc: heroFoxAvif,
    mobileSrc: mobileHeroFox,
    mobileAvifSrc: mobileHeroFoxAvif,
    city: "Desert Fox",
    subtitle: "Wildlife encounters",
    // for Mobile photo
    cityMobile: "Authentic Moroccan tea",
    subtitleMobile: "Wildlife encounters",
  },
  {
    src: heroSnake,
    avifSrc: heroSnakeAvif,
    mobileSrc: mobileHeroMarrakech,
    mobileAvifSrc: mobileHeroMarrakechAvif,
    city: "Marrakech",
    subtitle: "The enchanted square",
    // for Mobile photo
    cityMobile: "Marrakech",
    subtitleMobile: "Hot air balloons",
  },
  {
    src: heroRuins,
    avifSrc: heroRuinsAvif,
    mobileSrc: mobileHeroDesert,
    mobileAvifSrc: mobileHeroDesertAvif,
    city: "Merzouga Desert",
    subtitle: "Golden dunes & starry nights",
  },
  {
    src: heroMorocco,
    avifSrc: heroMoroccoAvif,
    mobileSrc: mobileHeroRuins,
    mobileAvifSrc: mobileHeroRuinsAvif,
    city: "volubilis",
    subtitle: "Roman ruins",
    cityMobile: "Heri E ssouani",
    subtitleMobile: "Meknes",
  },
  {
    src: heroTanneries,
    avifSrc: heroTanneriesAvif,
    mobileSrc: mobileHeroFes,
    mobileAvifSrc: mobileHeroFesAvif,
    city: "Fes Tanneries",
    subtitle: "Living craft tradition",
  },
  {
    src: heroSchool,
    avifSrc: heroSchoolAvif,
    mobileSrc: mobileHeroSchool,
    mobileAvifSrc: mobileHeroSchoolAvif,
    city: "Quranic School",
    subtitle: "Sacred heritage",
    // for Mobile photo
    cityMobile: "CasaBlanca",
    subtitleMobile: "Mosque Hassan II",
  },
  {
    src: heroRad,
    avifSrc: heroRadAvif,
    mobileSrc: mobileHeroRad,
    mobileAvifSrc: mobileHeroRadAvif,
    city: "Camel Ride",
    subtitle: "Camel ride in the desert",
  },
];

const HeroSection = () => {
  const [slideState, setSlideState] = useState({
    current: 0,
    exiting: null as number | null,
  });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const current = slideState.current;

  const showSlide = useCallback((index: number) => {
    setSlideState((previous) =>
      previous.current === index
        ? previous
        : { current: index, exiting: previous.current },
    );
  }, []);

  const next = useCallback(() => {
    setSlideState((previous) => ({
      current: (previous.current + 1) % slides.length,
      exiting: previous.current,
    }));
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updatePreference);
      return () => mediaQuery.removeEventListener("change", updatePreference);
    }

    mediaQuery.addListener(updatePreference);
    return () => mediaQuery.removeListener(updatePreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      if (!document.hidden) next();
    }, 5000);
    return () => clearInterval(timer);
  }, [next, prefersReducedMotion]);

  useEffect(() => {
    if (slideState.exiting === null) return;

    if (prefersReducedMotion) {
      setSlideState((previous) => ({ ...previous, exiting: null }));
      return;
    }

    const timer = window.setTimeout(() => {
      setSlideState((previous) =>
        previous.current === current
          ? { ...previous, exiting: null }
          : previous,
      );
    }, 1200);

    return () => window.clearTimeout(timer);
  }, [current, prefersReducedMotion, slideState.exiting]);

  useEffect(() => {
    if (prefersReducedMotion || document.hidden) return;

    const nextSlide = slides[(current + 1) % slides.length];
    const preload = () => {
      const mobile = window.matchMedia("(max-width: 639px)").matches;
      const source = mobile
        ? (nextSlide.mobileAvifSrc ?? nextSlide.mobileSrc)
        : (nextSlide.avifSrc ?? nextSlide.src);
      const isAvif = source.endsWith(".avif");
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = source;
      if (isAvif) link.type = "image/avif";
      link.setAttribute("fetchpriority", "low");
      document.head.appendChild(link);

      return () => link.remove();
    };
    const idleWindow = window as unknown as {
      requestIdleCallback?: (
        callback: IdleRequestCallback,
        options?: IdleRequestOptions,
      ) => number;
      cancelIdleCallback?: (handle: number) => void;
    };
    let removePreload: (() => void) | undefined;
    const startPreload = () => {
      removePreload = preload();
    };
    const idle = idleWindow.requestIdleCallback
      ? idleWindow.requestIdleCallback(startPreload, { timeout: 3000 })
      : window.setTimeout(startPreload, 1500);
    return () => {
      if (idleWindow.cancelIdleCallback) idleWindow.cancelIdleCallback(idle);
      else window.clearTimeout(idle as number);
      removePreload?.();
    };
  }, [current, prefersReducedMotion]);

  const slide = slides[current];
  const exitingSlide =
    slideState.exiting === null ? null : slides[slideState.exiting];

  return (
    <section
      id="home"
      className="relative h-[100svh] min-h-[500px] sm:min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-black">
        {exitingSlide && !prefersReducedMotion && (
          <ResponsiveImage
            src={exitingSlide.src}
            avifSrc={exitingSlide.avifSrc}
            mobileSrc={exitingSlide.mobileSrc}
            mobileAvifSrc={exitingSlide.mobileAvifSrc}
            alt=""
            aria-hidden="true"
            loading="eager"
            sizes="100vw"
            className="hero-image-exit absolute inset-0 block h-full w-full object-cover"
          />
        )}
        <ResponsiveImage
          key={current}
          src={slide.src}
          avifSrc={slide.avifSrc}
          mobileSrc={slide.mobileSrc}
          mobileAvifSrc={slide.mobileAvifSrc}
          alt={slide.city}
          fetchPriority={current === 0 ? "high" : "auto"}
          loading={current === 0 ? "eager" : "lazy"}
          sizes="100vw"
          className={`${prefersReducedMotion ? "" : "hero-image"} absolute inset-0 block h-full w-full object-cover`}
        />
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/20 via-transparent to-black/70 sm:from-black/30 sm:to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 text-center">
        <p className="hero-copy-enter hero-copy-delay-1 font-body text-gold-light text-[10px] sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6 font-medium drop-shadow-md">
          Boutique Travel Designer & Private cultural Guide
        </p>
        <h1 className="hero-copy-enter hero-copy-delay-2 font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight drop-shadow-xl">
          Unveil the Soul
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
            of Morocco
          </span>
        </h1>

        {/* City indicator */}
        <div
          key={current}
          className="hero-city-enter flex flex-col items-center justify-center mb-8 sm:mb-12"
        >
          <p
            className="font-heading text-lg sm:text-2xl md:text-3xl text-white drop-shadow-lg font-bold"
            aria-live="polite"
          >
            <span className="sm:hidden">{slide.cityMobile ?? slide.city}</span>
            <span className="hidden sm:inline">{slide.city}</span>
          </p>
          <div className="flex items-center gap-4 my-2">
            <span className="w-8 sm:w-12 h-px bg-accent/60" />
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="w-8 sm:w-12 h-px bg-accent/60" />
          </div>
          <p className="font-body text-[10px] sm:text-xs md:text-sm text-white/90 uppercase tracking-[0.2em] font-medium">
            <span className="sm:hidden">
              {slide.subtitleMobile ?? slide.subtitle}
            </span>
            <span className="hidden sm:inline">{slide.subtitle}</span>
          </p>
        </div>

        <div className="hero-copy-enter hero-copy-delay-3 flex flex-row gap-3 sm:gap-6 justify-center">
          <a
            href="#tours"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-accent px-4 sm:px-10 py-3 sm:py-4 font-body font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-orange-500/30 text-[10px] sm:text-base whitespace-nowrap"
          >
            <span className="relative z-10">Explore Our Morocco tours</span>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/5 backdrop-blur-sm px-4 sm:px-10 py-3 sm:py-4 font-body font-bold text-white transition-all hover:bg-white/20 hover:border-white/50 text-[10px] sm:text-base whitespace-nowrap"
          >
            Personalize Your Journey
          </a>
        </div>

        {/* Slide dots */}
        <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-8 sm:mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => showSlide(i)}
              className={`!min-h-0 !min-w-0 h-2 sm:h-2.5 rounded-full transition-all duration-500 ${
                i === current
                  ? "bg-accent w-6 sm:w-8"
                  : "bg-white/30 w-2 sm:w-2.5 hover:bg-white/50"
              }`}
              aria-label={`Show ${slides[i].cityMobile ?? slides[i].city}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="hero-scroll-indicator absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-30 text-white/70 hover:text-white transition-colors"
      >
        <ChevronDown className="h-8 w-8 sm:h-10 sm:w-10" />
      </a>
    </section>
  );
};

export default HeroSection;
