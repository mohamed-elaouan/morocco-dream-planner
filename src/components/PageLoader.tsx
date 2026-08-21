import logo from "@/assets/RAD_BRAND_LOGO.png";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="relative flex flex-col items-center">
        {/* Animated Glow Effect */}
        <div className="page-loader-glow absolute inset-0 rounded-full bg-amber-400/20 blur-3xl" />

        {/* Logo Animation */}
        <div className="page-loader-logo relative z-10">
          <img
            src={logo}
            alt="RAD Morocco Logo"
            className="h-20 md:h-28 w-auto drop-shadow-2xl"
          />
        </div>

        {/* Loading Progress Bar (Subtle) */}
        <div className="page-loader-progress mt-8 h-[2px] w-32 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
        
        <p className="page-loader-caption mt-4 font-body text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold">
          Morocco Dream Planner
        </p>
      </div>
    </div>
  );
};

export default PageLoader;
