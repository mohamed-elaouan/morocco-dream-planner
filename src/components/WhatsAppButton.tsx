import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/message/F2FIG7DSVSLDO1"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2 rounded-full bg-[hsl(142,70%,45%)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg hover:scale-105 transition-transform"
      animate={{ y: [0, -5, 0] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </motion.a>
  );
};

export default WhatsAppButton;
