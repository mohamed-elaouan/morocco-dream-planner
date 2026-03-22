import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Angelica Long",
    date: "A month ago",
    text: "My husband and I took our two thirty-something daughters with us to Morocco in October, 2025. We used the tour operator Alexander & Roberts and were very satisfied with their itinerary of experiences. However, the shining star of our time in Morocco was the tour guide assigned to our small group for the duration of the trip.\n\nWe’ve been fortunate to have encountered some outstanding guides during our travels. But without a doubt, Rad goes to the top of our list. His knowledge of Moroccan and world history and culture is truly impressive. But what truly makes Rad special, even beyond his passion for Morocco, are all the ways he cares for and about his groups.\n\nUnasked, Rad spent personal hours beyond his “assigned” day to accompany a group of us to the open air markets at night, helping us see areas of Marakesh we might never have experienced. If something wasn’t quite right with one of our rooms, he acted as our unyielding advocate. When he discovered some personal preference, like several of us being vegetarian, he made sure we were accommodated at every restaurant without anyone knowing.\n\nRad was the most fun, personable, and attentive guide we could hope for. There seemed to be almost nothing he wouldn’t do for our small cadre of twelve and for our family. Because of him, our tour group became more like extended family by the end of our trip, than a collection of strangers who came together less than two weeks earlier.\n\nSimply put, Rad was amazing. We would wholeheartedly recommend booking Rad directly to ensure a truly exceptional and unforgettable Moroccan experience.",
    rating: 5,
    avatar: "A",
  },
  {
    name: "Lexi Pacek",
    date: "11 months ago",
    text: "We had the best experience exploring Morocco with Rad as our guide! He took as through the main cities, showing us all the highlights and even diverting a bit from the itinerary based on our interests. Some of my favorite moments came from the spontaneous stops he suggested.I also really liked that he sat in the back of the van with us during the longer drives. He was very welcoming to all the questions we had, and it was fun to get a deeper look at Moroccos culture through a natives eyes.It was clear how truly passionate Rad is about what he does, something you don’t see often nowadays!",
    rating: 5,
    avatar: "L",
  },
  {
    name: "Murray Manzione",
    date: "A month ago",
    text: "Rad provided a safe, comfortable and fun experience for us. He was not just a fantastic guide- he was a perfect travel companion. His knowledge of the history of Morocco, environment, sites, shopping, eating and cultural attractions is remarkable. And his photography skills are an added bonus! I would give Rad 1000 stars!",
    rating: 5,
    avatar: "M",
  },
  {
    name: "Tiff Ellis",
    date: "11 months ago",
    text: "Im a travel advisor in the US and hired Rad for a shore excursion in Casablanca. I had my parents with me with my dad in particular having mobility issues and Rad designed the tour with that in mind. We were able to see everything without missing anything and having a nice van and driver was critical. The tour was informative and interesting. Book without hesitation, Rad and his team will take great care of you; I highly recommend!",
    rating: 5,
    avatar: "T",
  },
  {
    name: "cathi kelly",
    date: "7 months ago",
    text: "I recently had the pleasure of having Rad guide our small group tour of Morocco.Rads' knowledge of history, culture, geography, architecture and more, was exceptional. Every day was an adventure and we always felt safe. Rad knew all the best amenities, and was able to organise coffee very quickly due to being such a well known and resected tour guide. Everything was organised in advance and flowed smoothly. Nothing was too much trouble when we needed anything.We had many interesting discussions, and lots of laughs along the way. The tour felt very relaxed even though we had some added highlights not in the itinerary.This was a fascinating adventure of a lifetime, delivered with the passion and love Rad feels for his country, and his wonderful sense of humour thrown in! Thanks Rad!",
    rating: 5,
    avatar: "C",
  },
  {
    name: "Christa Gardner",
    date: "2 years ago",
    text: "RadMorocco is the tour agency I trust most in Morocco. I have traveled as a guest with Rad and have since entrusted my clients to his care for their time in Morocco. Every tour is planned and executed with great attention to detail from guiding someone on their first trip through the country to creating customized design tours (photography, wellness, etc). I highly recommend booking your next trip with RadMorocco.",
    rating: 5,
    avatar: "C",
  },
  {
    name: "Ben Lee",
    date: "9 months ago",
    text: "If you plan on traveling to Morocco and need someone to guide you, then Rad is your person! Rad is extremely knowledgeable about all aspects of Moroccan life, history, culture, geography, cuisine, economy and government... so basically all things pertaining to Morocco! Additionally, Rad is very professional, respectful, and easy to get along with. He is incredibly well connected throughout the country, and will go above and beyond to cater to your needs.Our time and experiences in Morocco was greatly enhanced by having Rad as our guide, and made our trip there phenomenal. Highly highly recommended... you will not be disappointed if you go with Rad!",
    rating: 5,
    avatar: "B",
  },
  {
    name: "James Lundin",
    date: "A month ago",
    text: "We had a really great culture and food tasting tour with Rad today! He was super knowledgeable about his history and had a great passion for his city, the people and the food!We highly recommend Rad!",
    rating: 5,
    avatar: "J",
  },
  {
    name: "Aleksandra Harbour",
    date: "8 months ago",
    text: "I can’t recommend Rad enough! He made our experience in Morocco truly unforgettable. He was very knowledgeable about every city we visited (Casablanca, Fes and Marrakesh), including their history and culture, the best spots to visit, and places to shop. He was also very attentive to our needs, flexible with the itinerary, and always made sure we were comfortable and enjoying ourselves. He is very passionate about Morocco and about his job! Also, very personable and fun to be around. We couldn’t have asked for a better guide!",
    rating: 5,
    avatar: "A",
  },
  {
    name: "David Cummings",
    date: "8 months ago",
    text: "Radouane is excellent. He was the tour leader on a tour we booked with an international company when we met him. We frankly didn’t know what to expect in Morocco. He opened our eyes to a great culture - the people, the places, and it was better than expected. He’s smart, patient, and takes time to explain everything. When we go back to Morocco he will be the only tour inquiry we make. It’s great to see he has his own company now…",
    rating: 5,
    avatar: "D",
  },
  {
    name: "Carol Salomon",
    date: "9 months ago",
    text: "Rad was a great guide to the cities of Morocco, thoughtful, knowledgeable, and kind. I think we were fortunate to get the best guide.",
    rating: 5,
    avatar: "C",
  },
  {
    name: "nour elomari",
    date: "2 years ago",
    text: "Literally the best experience in all of my 12 years of traveling and discovering the undiscovered, Radouane is a master at creating an exquisite vibe out of thin air. Thank you to Radouane and to the Rad team for everything.",
    rating: 5,
    avatar: "N",
  },
];

const GoogleReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const activeReview = reviews[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" as const }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" as const }
    }),
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-slate-50 text-slate-900 select-none">
      {/* Light Luxury Background Aesthetics */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[20rem] h-[20rem] md:w-[40rem] md:h-[40rem] bg-amber-200 rounded-full mix-blend-multiply blur-[80px] md:blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-[15rem] h-[15rem] md:w-[30rem] md:h-[30rem] bg-orange-200 rounded-full mix-blend-multiply blur-[80px] md:blur-[128px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Top Header */}
        <div className="flex flex-col items-center justify-center text-center w-full mb-10 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="h-px w-6 bg-amber-500 hidden sm:block" />
              <p className="font-body text-amber-600 text-xs md:text-sm tracking-[0.2em] uppercase font-bold">
                Guest Experiences
              </p>
              <span className="h-px w-6 bg-amber-500 hidden sm:block" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Tales from Morocco
            </h2>

            {/* Google Badge Centered */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-full px-5 py-3 flex items-center gap-4 hover:bg-slate-50 transition-colors cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <div className="flex flex-col text-left">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-[10px] md:text-xs text-slate-500 tracking-wide mt-0.5 font-body">Based on Verified Google Reviews</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative w-full max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Master Review Card */}
          <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-white border border-slate-100 shadow-xl p-6 md:p-10 lg:p-14">
            
            {/* Soft Quote Icon in background */}
            <Quote className="absolute top-4 right-4 md:top-8 md:right-8 w-16 h-16 md:w-24 md:h-24 text-slate-50 pointer-events-none" />
            
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative z-10 w-full flex flex-col items-center text-center gap-6 md:gap-8"
              >
                {/* Author Info First */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-2xl font-heading font-bold text-white shadow-md mb-4">
                    {activeReview.avatar}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-1">{activeReview.name}</h3>
                  <p className="text-slate-500 text-xs font-body mb-3">{activeReview.date}</p>
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>

                {/* Review Text - Improved scroll UX */}
                <div 
                  className="w-full relative h-[18rem] md:h-[14rem] lg:h-[11rem] overflow-y-auto custom-scrollbar px-2 md:px-6 pb-12 pt-2 touch-pan-y overscroll-contain"
                  style={{
                    maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)"
                  }}
                >
                  <p className="font-body italic text-sm md:text-lg leading-relaxed md:leading-loose text-slate-700 whitespace-pre-wrap">
                    "{activeReview.text}"
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation & Progress Block */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-8 md:mt-10 px-4">
            
            {/* Mobile/Desktop Navigation Buttons */}
            <div className="flex gap-4">
              <button 
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 transition-all hover:bg-amber-500 hover:text-white hover:border-amber-500 hover:scale-105 shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 transition-all hover:bg-amber-500 hover:text-white hover:border-amber-500 hover:scale-105 shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Progress dots (Hidden on very small screens, shown otherwise) */}
            <div className="hidden md:flex justify-center gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    idx === currentIndex 
                    ? "w-6 h-1.5 bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]" 
                    : "w-1.5 h-1.5 bg-slate-200 hover:bg-slate-300"
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            {/* Read More Link */}
            <a
              href="https://www.google.com/search?q=RADMOROCCO#lrd=0xda76bbbc28c0b2f:0xfce7c5a04400e980,1,,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center sm:items-end"
            >
              <span className="text-sm font-bold text-amber-600 group-hover:text-amber-500 transition-colors uppercase tracking-widest flex items-center gap-1">
                Write a Review & Read All <ChevronRight className="w-4 h-4 translate-y-px" />
              </span>
              <span className="h-px w-0 bg-amber-500 group-hover:w-full transition-all duration-300 mt-1" />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;
