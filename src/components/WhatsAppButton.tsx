import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

// Kept component name as WhatsAppButton to avoid changing App.tsx import, but upgraded to handle both contacts
const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
      {/* Telegram Button */}
      <motion.a
        href="https://t.me/elredouane"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded-full bg-[#0088cc] hover:bg-[#0077b5] px-4 py-3 sm:px-5 sm:py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(0,136,204,0.3)] transition-colors"
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.94z"/>
        </svg>
        <span className="hidden sm:inline">Telegram</span>
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/message/F2FIG7DSVSLDO1"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1da851] px-4 py-3 sm:px-5 sm:py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(37,211,102,0.3)] transition-colors"
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">WhatsApp</span>
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;
