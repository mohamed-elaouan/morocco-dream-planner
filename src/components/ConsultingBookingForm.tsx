import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Send, CalendarIcon, User, Mail, Phone, MessageSquare, ArrowRight, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { buildConsultingPayload } from "@/lib/email-payload";

// Email submissions are handled by the cPanel PHP endpoint at /api/sendEmail.

const ConsultingBookingForm = () => {
  const { toast } = useToast();
  
  const [step, setStep] = useState<1 | 2>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [date, setDate] = useState<Date | undefined>();

  const handleNextStep = () => {
    if (!date) {
      toast({
        title: "Date Required",
        description: "Please select your preferred consultation date first.",
        variant: "destructive",
      });
      return;
    }
    setStep(2);
  };

  const handlePrevStep = () => {
    setStep(1);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Format the single date into a string for the email
    const dateStr = date ? format(date, "LLL dd, yyyy") : "Not selected";

    // Prepare payload specifically for our API
    const payload = buildConsultingPayload(data, dateStr);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      
      if (result.success) {
        toast({
          title: "Request Sent Successfully!",
          description: "We've received your consultation request and will email you shortly to confirm the time.",
        });
        // Reset form
        (e.target as HTMLFormElement).reset();
        setDate(undefined);
        setStep(1);
      } else {
        console.error("API Error:", result);
        toast({
          title: "Submission failed",
          description: result.message || "We couldn't submit your request. Please try again.",
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
    <section id="consulting-booking-form" className="py-20 md:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center mb-12 md:mb-16 flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4 border border-accent/20">
            <CalendarIcon className="w-4 h-4" />
            Book Your Session
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Schedule a Consultation
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Select your preferred date, tell us about your travel vision, and we'll arrange a private strategy session.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-card rounded-[2rem] shadow-xl border border-border/50 overflow-hidden relative min-h-[500px]">
          
          {/* Progress Indicator */}
          <div className="bg-secondary/10 px-8 py-4 border-b border-border/50 flex justify-between items-center relative">
             <div className="absolute bottom-0 left-0 h-1 bg-accent transition-all duration-500" style={{ width: step === 1 ? '50%' : '100%' }} />
             
             <div className="flex items-center gap-3">
               <div className={cn("w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors", step === 1 ? "bg-accent text-white" : "bg-accent/20 text-accent")}>
                 1
               </div>
               <span className={cn("font-heading text-sm sm:text-base font-semibold transition-colors", step === 1 ? "text-foreground" : "text-muted-foreground")}>
                 Select Date
               </span>
             </div>

             <div className="flex items-center gap-3">
               <div className={cn("w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors", step === 2 ? "bg-accent text-white" : "bg-secondary text-muted-foreground")}>
                 2
               </div>
               <span className={cn("font-heading text-sm sm:text-base font-semibold transition-colors", step === 2 ? "text-foreground" : "text-muted-foreground")}>
                 Your Details
               </span>
             </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-10">
            <AnimatePresence mode="wait">
              {/* STEP 1: DATE SELECTION */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center"
                >
                  <div className="text-center mb-8">
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-2">When do you plan to have the consultation?</h3>
                    <p className="font-body text-muted-foreground text-sm">Select a date to help us prepare for your session.</p>
                  </div>

                  <div className="bg-white rounded-2xl p-4 shadow-sm border border-border/50 mb-10 w-full max-w-sm mx-auto">
                    <Calendar
                      initialFocus
                      mode="single"
                      defaultMonth={date || new Date()}
                      selected={date}
                      onSelect={setDate}
                      className="p-0 mx-auto w-full flex justify-center"
                    />
                  </div>

                  <Button
                    type="button"
                    onClick={handleNextStep}
                    className="w-full sm:w-auto min-w-[200px] h-14 rounded-full bg-accent hover:bg-accent/90 text-white font-bold text-lg group"
                  >
                    Continue to Details
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              )}

              {/* STEP 2: PERSONAL DETAILS */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-8 flex items-center gap-4">
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="icon"
                      onClick={handlePrevStep}
                      className="rounded-full shrink-0 border-border/50 hover:bg-secondary/20"
                    >
                      <ArrowLeft className="h-4 w-4 text-foreground" />
                    </Button>
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-foreground">About You</h3>
                      <p className="font-body text-muted-foreground text-sm">Selected date: {date ? format(date, "LLL dd, yyyy") : "None"}</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 mb-8">
                    <div className="space-y-2.5">
                      <label className="flex items-center gap-2 font-body text-sm font-semibold text-foreground">
                        <User className="h-4 w-4 text-accent" /> Full Name
                      </label>
                      <input
                        name="name"
                        required
                        className="w-full rounded-2xl border-2 border-border/50 bg-secondary/10 px-4 py-3.5 font-body text-sm text-foreground focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent/40 transition-all"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="space-y-2.5">
                      <label className="flex items-center gap-2 font-body text-sm font-semibold text-foreground">
                        <Mail className="h-4 w-4 text-accent" /> Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-2xl border-2 border-border/50 bg-secondary/10 px-4 py-3.5 font-body text-sm text-foreground focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent/40 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="space-y-2.5 sm:col-span-2">
                      <label className="flex items-center gap-2 font-body text-sm font-semibold text-foreground">
                        <Phone className="h-4 w-4 text-accent" /> Phone (Optional)
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        className="w-full rounded-2xl border-2 border-border/50 bg-secondary/10 px-4 py-3.5 font-body text-sm text-foreground focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent/40 transition-all"
                        placeholder="+212 XXX XXX XXX"
                      />
                    </div>

                    <div className="space-y-2.5 sm:col-span-2">
                      <label className="flex items-center gap-2 font-body text-sm font-semibold text-foreground">
                        <MessageSquare className="h-4 w-4 text-accent" /> Consultation Description
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        required
                        className="w-full rounded-2xl border-2 border-border/50 bg-secondary/10 px-4 py-3.5 font-body text-sm text-foreground focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent/40 transition-all resize-none"
                        placeholder="Tell us about your travel style, the regions you want to visit, and what you hope to get out of this consultation..."
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 rounded-full bg-accent hover:bg-accent/90 text-white font-bold text-lg group"
                  >
                    {isSubmitting ? (
                      <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                    ) : (
                      <Send className="mr-3 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    )}
                    {isSubmitting ? "Sending Request..." : "Confirm Reservation"}
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConsultingBookingForm;
