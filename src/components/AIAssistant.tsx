import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const quickReplies = [
  "What tours do you offer?",
  "Tell me about day trips",
  "How do I book?",
  "Contact info",
];

const getResponse = (input: string): string => {
  const lower = input.toLowerCase();
  if (lower.includes("tour") || lower.includes("itinerary")) {
    return "We offer 4 main tours: Imperial Cities (8 days), Morocco Gems (12 days), Exotic Morocco (14 days), and Desert Escape (12 days). Each can be customized to your preferences! Would you like to book one?";
  }
  if (lower.includes("day trip")) {
    return "We offer day trips from Rabat, Casablanca, and Marrakech. Each includes visits to iconic landmarks, historical sites, and local experiences. Check our Day Trips section for details!";
  }
  if (lower.includes("book") || lower.includes("reserv")) {
    return "You can book by filling out our reservation form on this page, or contact us directly at info@radmorocco.com. You can also reach us via WhatsApp for quick inquiries!";
  }
  if (lower.includes("contact") || lower.includes("email") || lower.includes("phone")) {
    return "📧 Email: info@radmorocco.com\n📱 WhatsApp: wa.me/message/F2FIG7DSVSLDO1\nWe respond within 24 hours!";
  }
  if (lower.includes("price") || lower.includes("cost")) {
    return "Our tour prices vary based on group size, season, and customization. Contact us for a personalized quote at info@radmorocco.com!";
  }
  return "Thank you for your interest in RAD Morocco! I'd love to help you plan your perfect Moroccan adventure. You can ask about our tours, day trips, booking process, or contact information. For detailed inquiries, reach us at info@radmorocco.com.";
};

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Welcome to RAD Morocco! 🇲🇦 I'm here to help you plan your dream Moroccan adventure. Ask me about our tours, day trips, or how to book!" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", content: text };
    const assistantMsg: Message = { role: "assistant", content: getResponse(text) };
    setMessages((prev) => [...prev, userMsg, assistantMsg]);
    setInput("");
  };

  return (
    <>
      {/* Toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 rounded-full bg-accent p-4 text-accent-foreground shadow-glow hover:scale-110 transition-transform"
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-40 w-[360px] max-w-[calc(100vw-48px)] rounded-2xl bg-card shadow-elevated border border-border overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary text-primary-foreground p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <p className="font-heading text-sm font-bold">RAD Travel Assistant</p>
                <p className="text-xs opacity-80">Online • Ask me anything</p>
              </div>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.role === "assistant" && (
                    <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-1">
                      <Bot className="h-3.5 w-3.5 text-accent" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm font-body whitespace-pre-line ${
                      msg.role === "user"
                        ? "bg-accent text-accent-foreground rounded-br-md"
                        : "bg-muted text-foreground rounded-bl-md"
                    }`}
                  >
                    {msg.content}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                      <User className="h-3.5 w-3.5 text-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick replies */}
            <div className="px-4 pb-2 flex flex-wrap gap-1.5">
              {quickReplies.map((qr) => (
                <button
                  key={qr}
                  onClick={() => sendMessage(qr)}
                  className="text-xs font-body bg-muted text-muted-foreground px-3 py-1.5 rounded-full hover:bg-accent/10 hover:text-accent transition-colors"
                >
                  {qr}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                placeholder="Type a message..."
                className="flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
              <button
                onClick={() => sendMessage(input)}
                className="rounded-full bg-accent p-2.5 text-accent-foreground hover:shadow-glow transition-all"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
