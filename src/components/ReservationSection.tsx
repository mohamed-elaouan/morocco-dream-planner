import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Send, CalendarIcon, Users, MapPin, Mail, User, Phone, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useSearchParams } from "react-router-dom";
import { tours } from "@/components/ToursSection";
import contactImg from "@/assets/image.png";

// NOTE: Add your Web3Forms Access Key here to receive emails directly!
const WEB3FORMS_ACCESS_KEY = "eedd2341-84a9-4538-9128-e32268a18bda";

const ReservationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [date, setDate] = useState<DateRange | undefined>();
  const [selectedTour, setSelectedTour] = useState<string>("");

  useEffect(() => {
    const tourParam = searchParams.get("tour");
    if (tourParam) {
      setSelectedTour(tourParam);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Check if the developer has updated the Access Key
    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
      toast({
        title: "Configuration Required",
        description: "Please add your Web3Forms Access Key in the code to enable form submissions.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Format the date range into a string for the email
    let dateStr = "Not selected";
    if (date?.from) {
      if (!date.to) {
        dateStr = format(date.from, "LLL dd, yyyy");
      } else if (date.to) {
        dateStr = `${format(date.from, "LLL dd, yyyy")} - ${format(date.to, "LLL dd, yyyy")}`;
      }
    }

    // Prepare Web3Forms payload
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `New Travel Consultation Request from ${data.name}`,
      from_name: data.name,
      ...data,
      date_range: dateStr,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      
      if (result.success) {
        toast({
          title: "Request Sent Successfully!",
          description: "We've received your inquiry and will get back to you within 24 hours.",
        });
        // Reset form here
        (e.target as HTMLFormElement).reset();
        setDate(undefined);
        setSelectedTour("");
      } else {
        console.error("Web3Forms Error:", result);
        toast({
          title: "Submission failed",
          description: result.message || "We couldn't submit your request. Please try again or email us directly.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      toast({
        title: "Connection Error",
        description: "Please check your internet connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="travel-consulting-form" className="py-24 md:py-32 bg-secondary/10 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16 md:mb-24 flex flex-col items-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-6 shadow-sm border border-accent/20">
            <Mail className="w-4 h-4" />
            Plan Your Trip
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Book Your Experiences
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Fill out the form below and our dedicated team will craft a personalized, unforgettable Moroccan itinerary tailored just for you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="max-w-7xl mx-auto bg-background rounded-[2.5rem] shadow-2xl overflow-hidden border border-border/50 grid lg:grid-cols-5"
        >
          {/* Left Side: The Form */}
          <div className="lg:col-span-3 order-2 lg:order-1 p-8 sm:p-12 md:p-16">
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Section: Personal Info */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-1.5 rounded-full bg-accent" />
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">Personal Information</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                  {/* Name */}
                  <div className="space-y-2.5">
                    <label className="flex items-center gap-2 font-body text-sm font-semibold text-foreground">
                      <User className="h-4 w-4 text-accent" />
                      Full Name
                    </label>
                    <input
                      name="name"
                      required
                      className="w-full rounded-2xl border-2 border-border/50 bg-secondary/20 px-4 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent/40 transition-all hover:border-accent/30"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2.5">
                    <label className="flex items-center gap-2 font-body text-sm font-semibold text-foreground">
                      <Mail className="h-4 w-4 text-accent" />
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-2xl border-2 border-border/50 bg-secondary/20 px-4 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent/40 transition-all hover:border-accent/30"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2.5 sm:col-span-2">
                    <label className="flex items-center gap-2 font-body text-sm font-semibold text-foreground">
                      <Phone className="h-4 w-4 text-accent" />
                      Phone (Optional)
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      className="w-full rounded-2xl border-2 border-border/50 bg-secondary/20 px-4 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent/40 transition-all hover:border-accent/30"
                      placeholder="+212 XXX XXX XXX"
                    />
                  </div>
                </div>
              </div>

              {/* Section: Trip Details */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-1.5 rounded-full bg-accent" />
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">Trip Details</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                  {/* Tour Dropdown */}
                  <div className="space-y-2.5 sm:col-span-2">
                    <label className="flex items-center gap-2 font-body text-sm font-semibold text-foreground">
                      <MapPin className="h-4 w-4 text-accent" />
                      Experience / Tour
                    </label>
                    <select
                      name="tour"
                      required
                      value={selectedTour}
                      onChange={(e) => setSelectedTour(e.target.value)}
                      className="w-full rounded-2xl border-2 border-border/50 bg-secondary/20 px-4 py-3.5 font-body text-sm text-foreground focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent/40 transition-all cursor-pointer hover:border-accent/30 appearance-none"
                    >
                      <option value="">Choose an experience...</option>
                      <optgroup label="Signature Expériences">
                        <option value="The Essence of Casablanca (4–5 Hours)">The Essence of Casablanca (4–5 Hours)</option>
                        <option value="Cultural Walking Experience (3 Hours)">Cultural Walking Experience (3 Hours)</option>
                        <option value="Moroccan Flavors: Culinary Journey (3 Hours)">Moroccan Flavors: Culinary Journey (3 Hours)</option>
                        <option value="Jewish Heritage Experience (3–4 Hours)">Jewish Heritage Experience (3–4 Hours)</option>
                        <option value="Tailored Private Experience (Flexible)">Tailored Private Experience (Flexible)</option>
                      </optgroup>
                      <optgroup label="Multi-Day Tours">
                        {tours.map((t) => (
                          <option key={t.id} value={t.title}>{t.title}</option>
                        ))}
                      </optgroup>
                      <optgroup label="Custom Services">
                        <option value="Private Travel Consulting">Private Travel Consulting</option>
                        <option value="Custom Tour">Custom Tour</option>
                      </optgroup>
                    </select>
                  </div>

                  {/* Date Range Picker (Shadcn) */}
                  <div className="space-y-2.5">
                    <label className="flex items-center gap-2 font-body text-sm font-semibold text-foreground">
                      <CalendarIcon className="h-4 w-4 text-accent" />
                      Travel Dates
                    </label>
                    <div className="grid gap-2">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            id="date"
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-body h-auto px-4 py-3.5 rounded-2xl border-2 border-border/50 bg-secondary/20 hover:bg-secondary/30 hover:text-foreground",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4 text-accent" />
                            {date?.from ? (
                              date.to ? (
                                <>
                                  {format(date.from, "LLL dd, y")} -{" "}
                                  {format(date.to, "LLL dd, y")}
                                </>
                              ) : (
                                format(date.from, "LLL dd, y")
                              )
                            ) : (
                              <span>Select from / to</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 rounded-2xl shadow-xl border-border/50" align="start">
                          <Calendar
                            initialFocus
                            mode="range"
                            defaultMonth={date?.from}
                            selected={date}
                            onSelect={setDate}
                            numberOfMonths={2}
                            className="p-3"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  {/* Guests */}
                  <div className="space-y-2.5">
                    <label className="flex items-center gap-2 font-body text-sm font-semibold text-foreground">
                      <Users className="h-4 w-4 text-accent" />
                      Number of Guests
                    </label>
                    <input
                      name="guests"
                      type="number"
                      min="1"
                      required
                      className="w-full rounded-2xl border-2 border-border/50 bg-secondary/20 px-4 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent/40 transition-all hover:border-accent/30"
                      placeholder="e.g. 2"
                    />
                  </div>
                </div>
              </div>

              {/* Section: Message */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-1.5 rounded-full bg-accent" />
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">Your Message</h3>
                </div>
                <div className="space-y-2.5">
                  <label className="flex items-center gap-2 font-body text-sm font-semibold text-foreground">
                    <MessageSquare className="h-4 w-4 text-accent" />
                    Additional Details
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded-2xl border-2 border-border/50 bg-secondary/20 px-4 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent/40 transition-all resize-none hover:border-accent/30"
                    placeholder="Tell us about your dream trip — preferred pace, interests, special needs..."
                  />
                </div>
              </div>

              {/* Action */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 rounded-2xl bg-accent px-8 py-5 font-body font-bold text-accent-foreground text-lg transition-all hover:shadow-[0_0_30px_-5px_hsl(var(--accent))] hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:hover:scale-100 group"
                >
                  {isSubmitting ? (
                    <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  )}
                  {isSubmitting ? "Sending Request..." : "Send Request"}
                </button>
              </div>

              <p className="text-center text-sm text-muted-foreground font-body">
                Prefer to email directly? Reach us at{" "}
                <a href="mailto:elredouane@gmail.com" className="text-foreground font-semibold hover:text-accent transition-colors underline decoration-border underline-offset-4">
                  contact@radmorocco.com
                </a>
              </p>
            </form>
          </div>

          {/* Right Side: Image Presentation */}
          <div className="hidden lg:block lg:col-span-2 order-1 lg:order-2 relative">
            <img 
              src={contactImg} 
              alt="Radouane El Aouan - Contact Us" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-12 left-10 right-10">
              <h3 className="text-3xl font-heading font-bold text-white mb-4">Crafting Your Dream Journey</h3>
              <p className="text-white/80 font-body leading-relaxed text-sm">
                Whether you're looking for a signature experience or a completely custom itinerary, 
                we're here to make it happen with precision and passion.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReservationSection;
