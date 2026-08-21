import { lazy, Suspense, useState } from "react";
import { MessageCircle } from "lucide-react";

const AIAssistant = lazy(() => import("./AIAssistant"));

/** Keeps the chatbot, Markdown renderer, and Supabase client out of initial JS. */
const AIAssistantLauncher = () => {
  const [activated, setActivated] = useState(false);

  if (activated) {
    return <Suspense fallback={null}><AIAssistant initiallyOpen /></Suspense>;
  }

  return (
    <button
      type="button"
      onClick={() => setActivated(true)}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      aria-label="Open AI travel assistant"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </button>
  );
};

export default AIAssistantLauncher;
