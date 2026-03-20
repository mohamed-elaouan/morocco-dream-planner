import { motion } from "framer-motion";
import logo from "@/assets/RAD_BRAND_LOGO.png";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="relative flex flex-col items-center">
        {/* Animated Glow Effect */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-amber-400/20 blur-3xl rounded-full"
        />

        {/* Logo Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="relative z-10"
        >
          <motion.img
            src={logo}
            alt="RAD Morocco Logo"
            className="h-20 md:h-28 w-auto drop-shadow-2xl"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Loading Progress Bar (Subtle) */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="mt-8 h-[2px] w-32 bg-gradient-to-r from-transparent via-amber-500 to-transparent"
        />
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 font-body text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold"
        >
          Morocco Dream Planner
        </motion.p>
      </div>
    </div>
  );
};

export default PageLoader;
