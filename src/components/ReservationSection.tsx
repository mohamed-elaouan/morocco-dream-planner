import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Calendar, CalendarCheck, Users, MapPin, Mail, User, Phone, MessageSquare, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const tourOptions = [
  "The Essence of Casablanca (4–5 Hours)",
  "Cultural Walking Experience (3 Hours)",
  "Moroccan Flavors: Culinary Journey (3 Hours)",
  "Jewish Heritage Experience (3–4 Hours)",
  "Tailored Private Experience (Flexible)",
  "Imperial Cities (8 Days)",
  "Morocco Gems (12 Days)",
  "Exotic Morocco (14 Days)",
  "Desert Escape (12 Days)",
  "Private Travel Consulting",
  "Custom Tour",
];

const ReservationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // mailto fallback
    const subject = encodeURIComponent(`Travel Consulting Request: ${data.tour}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nTour: ${data.tour}\nStart Date: ${data.startDate}\nEnd Date & Time: ${data.endDateTime}\nGuests: ${data.guests}\nMessage: ${data.message}`
    );
    window.location.href = `mailto:info@radmorocco.com?subject=${subject}&body=${body}`;

    toast({
      title: "Request Sent!",
      description: "We'll get back to you within 24 hours. Thank you!",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="travel-consulting-form" className="py-20 md:py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 md:mb-16"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-3">Plan Your Trip</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Book Your Adventure
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Fill out the form below and our team will create a personalized itinerary just for you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-elevated p-6 sm:p-8 md:p-12 space-y-8">
            {/* Section: Personal Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-6 w-1 rounded-full bg-accent" />
                <h3 className="font-heading text-sm sm:text-base font-bold text-foreground">Personal Information</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 font-body text-sm font-medium text-foreground">
                    <User className="h-4 w-4 text-accent" />
                    Full Name
                  </label>
                  <input
                    name="name"
                    required
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/30 transition-all hover:border-accent/30"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 font-body text-sm font-medium text-foreground">
                    <Mail className="h-4 w-4 text-accent" />
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/30 transition-all hover:border-accent/30"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2 sm:col-span-2">
                  <label className="flex items-center gap-2 font-body text-sm font-medium text-foreground">
                    <Phone className="h-4 w-4 text-accent" />
                    Phone
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/30 transition-all hover:border-accent/30"
                    placeholder="+212 XXX XXX XXX"
                  />
                </div>
              </div>
            </div>

            {/* Section: Trip Details */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-6 w-1 rounded-full bg-accent" />
                <h3 className="font-heading text-sm sm:text-base font-bold text-foreground">Trip Details</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Tour */}
                <div className="space-y-2 sm:col-span-2">
                  <label className="flex items-center gap-2 font-body text-sm font-medium text-foreground">
                    <MapPin className="h-4 w-4 text-accent" />
                    Experience / Tour
                  </label>
                  <select
                    name="tour"
                    required
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/30 transition-all cursor-pointer hover:border-accent/30"
                  >
                    <option value="">Select an experience</option>
                    <optgroup label="Signature Expériences">
                      <option value="The Essence of Casablanca (4–5 Hours)">The Essence of Casablanca (4–5 Hours)</option>
                      <option value="Cultural Walking Experience (3 Hours)">Cultural Walking Experience (3 Hours)</option>
                      <option value="Moroccan Flavors: Culinary Journey (3 Hours)">Moroccan Flavors: Culinary Journey (3 Hours)</option>
                      <option value="Jewish Heritage Experience (3–4 Hours)">Jewish Heritage Experience (3–4 Hours)</option>
                      <option value="Tailored Private Experience (Flexible)">Tailored Private Experience (Flexible)</option>
                    </optgroup>
                    <optgroup label="Multi-Day Tours">
                      <option value="Imperial Cities (8 Days)">Imperial Cities (8 Days)</option>
                      <option value="Morocco Gems (12 Days)">Morocco Gems (12 Days)</option>
                      <option value="Exotic Morocco (14 Days)">Exotic Morocco (14 Days)</option>
                      <option value="Desert Escape (12 Days)">Desert Escape (12 Days)</option>
                    </optgroup>
                    <optgroup label="Custom Services">
                      <option value="Private Travel Consulting">Private Travel Consulting</option>
                      <option value="Custom Tour">Custom Tour</option>
                    </optgroup>
                  </select>
                </div>

                {/* Start Date */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 font-body text-sm font-medium text-foreground">
                    <Calendar className="h-4 w-4 text-accent" />
                    Start Date
                  </label>
                  <input
                    name="startDate"
                    type="date"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/30 transition-all hover:border-accent/30"
                  />
                </div>

                {/* End Date & Time */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 font-body text-sm font-medium text-foreground">
                    <CalendarCheck className="h-4 w-4 text-accent" />
                    End Date & Time
                  </label>
                  <input
                    name="endDateTime"
                    type="datetime-local"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/30 transition-all hover:border-accent/30"
                  />
                </div>

                {/* Guests */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 font-body text-sm font-medium text-foreground">
                    <Users className="h-4 w-4 text-accent" />
                    Number of Guests
                  </label>
                  <input
                    name="guests"
                    type="number"
                    min="1"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/30 transition-all hover:border-accent/30"
                    placeholder="2"
                  />
                </div>
              </div>
            </div>

            {/* Section: Message */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-6 w-1 rounded-full bg-accent" />
                <h3 className="font-heading text-sm sm:text-base font-bold text-foreground">Your Message</h3>
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 font-body text-sm font-medium text-foreground">
                  <MessageSquare className="h-4 w-4 text-accent" />
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/30 transition-all resize-none hover:border-accent/30"
                  placeholder="Tell us about your dream trip — preferred pace, interests, special needs..."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 font-body font-semibold text-accent-foreground transition-all hover:shadow-glow hover:scale-[1.02] disabled:opacity-50 group"
            >
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              {isSubmitting ? "Sending..." : "Send Request"}
            </button>

            <p className="text-center text-xs text-muted-foreground font-body">
              Or contact us directly at{" "}
              <a href="mailto:info@radmorocco.com" className="text-accent hover:underline">
                info@radmorocco.com
              </a>
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ReservationSection;
