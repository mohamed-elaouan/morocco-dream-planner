import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Calendar, Users, MapPin, Mail, User, Phone, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const tourOptions = [
  "Imperial Cities (8 Days)",
  "Morocco Gems (12 Days)",
  "Exotic Morocco (14 Days)",
  "Desert Escape (12 Days)",
  "Day Trip - From Rabat",
  "Day Trip - From Casablanca",
  "Day Trip - From Marrakech",
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
    const subject = encodeURIComponent(`Tour Reservation: ${data.tour}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nTour: ${data.tour}\nDate: ${data.date}\nGuests: ${data.guests}\nMessage: ${data.message}`
    );
    window.location.href = `mailto:info@radmorocco.com?subject=${subject}&body=${body}`;

    toast({
      title: "Reservation Request Sent!",
      description: "We'll get back to you within 24 hours. Thank you!",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="reservation" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-3">Plan Your Trip</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Book Your Adventure
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below and our team will create a personalized itinerary just for you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-elevated p-8 md:p-12 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 font-body text-sm font-medium text-foreground">
                  <User className="h-4 w-4 text-accent" />
                  Full Name
                </label>
                <input
                  name="name"
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
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
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 font-body text-sm font-medium text-foreground">
                  <Phone className="h-4 w-4 text-accent" />
                  Phone
                </label>
                <input
                  name="phone"
                  type="tel"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  placeholder="+212 XXX XXX XXX"
                />
              </div>

              {/* Tour */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 font-body text-sm font-medium text-foreground">
                  <MapPin className="h-4 w-4 text-accent" />
                  Tour
                </label>
                <select
                  name="tour"
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                >
                  <option value="">Select a tour</option>
                  {tourOptions.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 font-body text-sm font-medium text-foreground">
                  <Calendar className="h-4 w-4 text-accent" />
                  Preferred Date
                </label>
                <input
                  name="date"
                  type="date"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
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
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  placeholder="2"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 font-body text-sm font-medium text-foreground">
                <MessageSquare className="h-4 w-4 text-accent" />
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                placeholder="Tell us about your dream trip..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 font-body font-semibold text-accent-foreground transition-all hover:shadow-glow hover:scale-[1.02] disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
              {isSubmitting ? "Sending..." : "Send Reservation Request"}
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
