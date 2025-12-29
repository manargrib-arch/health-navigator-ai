import { useState, useRef, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Bot, 
  Send, 
  User, 
  Sparkles, 
  RotateCcw, 
  ThumbsUp, 
  ThumbsDown,
  AlertCircle,
  Lightbulb
} from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

const suggestedQuestions = [
  "Qu'est-ce qu'une NFS et pourquoi la prescrire ?",
  "Quelles sont les valeurs normales de la glycémie ?",
  "Comment interpréter un taux de TSH élevé ?",
  "Quelle différence entre HDL et LDL cholestérol ?",
  "Que signifie une CRP élevée ?",
];

const mockResponses: Record<string, string> = {
  default: `Je suis l'assistant LabNet, spécialisé dans les analyses biologiques. Je peux vous expliquer le rôle des différentes analyses, leurs valeurs de référence et les indications courantes.

**Important** : Je peux expliquer les analyses en général, mais je ne suis pas en mesure d'interpréter VOS résultats personnels. Pour cela, consultez votre médecin qui connaît votre contexte clinique complet.

Comment puis-je vous aider aujourd'hui ?`,
  nfs: `## La NFS (Numération Formule Sanguine)

La **NFS**, aussi appelée "hémogramme", est l'une des analyses les plus courantes. Elle mesure les différentes cellules du sang :

### Éléments analysés
- **Globules rouges** : transportent l'oxygène
- **Globules blancs** : défendent contre les infections
- **Plaquettes** : participent à la coagulation

### Indications courantes
- Fatigue inexpliquée
- Suspicion d'infection
- Bilan pré-opératoire
- Suivi de traitement

### Préparation
Pas de jeûne obligatoire, prélèvement sanguin simple.

*Souhaitez-vous en savoir plus sur l'interprétation des résultats ou sur une autre analyse ?*`,
  glycemie: `## La Glycémie

La **glycémie** mesure le taux de sucre (glucose) dans le sang. C'est un examen essentiel pour :

### Dépistage et diagnostic
- **Diabète de type 1 et 2**
- **Prédiabète**
- **Hypoglycémie**

### Valeurs de référence (à jeun)
- Normal : 0,70 à 1,00 g/L
- Prédiabète : 1,00 à 1,26 g/L
- Diabète : ≥ 1,26 g/L (à confirmer)

### Préparation
Jeûne de **8 heures minimum** requis pour la glycémie à jeun.

*Avez-vous des questions sur le diabète ou sur l'HbA1c ?*`,
};

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: mockResponses.default,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (content: string = input) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: content.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    await new Promise((resolve) => setTimeout(resolve, 1500));

    let response = mockResponses.default;
    const lowerContent = content.toLowerCase();
    if (lowerContent.includes("nfs") || lowerContent.includes("numération")) {
      response = mockResponses.nfs;
    } else if (lowerContent.includes("glycémie") || lowerContent.includes("sucre") || lowerContent.includes("diabète")) {
      response = mockResponses.glycemie;
    }

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: response,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setIsTyping(false);
  };

  const handleReset = () => {
    setMessages([
      {
        id: "1",
        role: "assistant",
        content: mockResponses.default,
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16 flex flex-col">
        {/* Chat Container */}
        <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full">
          {/* Header */}
          <div className="p-4 border-b border-border bg-card/50 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="font-display font-semibold text-foreground">Assistant LabNet</h1>
                  <p className="text-xs text-muted-foreground">Guide des analyses biologiques</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={handleReset}>
                <RotateCcw className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {/* Disclaimer */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-warning/10 border border-warning/20">
              <AlertCircle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-foreground mb-1">Information importante</p>
                <p className="text-muted-foreground">
                  Cet assistant peut expliquer les analyses biologiques mais ne peut pas interpréter 
                  vos résultats personnels. Pour toute question médicale, consultez votre médecin.
                </p>
              </div>
            </div>

            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex gap-3",
                  message.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                {message.role === "assistant" && (
                  <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-primary-foreground" />
                  </div>
                )}
                
                <div
                  className={cn(
                    "max-w-[80%] rounded-2xl p-4",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-card border border-border rounded-bl-sm"
                  )}
                >
                  {message.role === "assistant" ? (
                    <div 
                      className="prose prose-sm max-w-none text-foreground prose-headings:text-foreground prose-strong:text-foreground prose-ul:text-muted-foreground"
                      dangerouslySetInnerHTML={{ 
                        __html: message.content
                          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                          .replace(/\*(.*?)\*/g, '<em>$1</em>')
                          .replace(/## (.*?)$/gm, '<h3 class="text-lg font-semibold mt-4 mb-2">$1</h3>')
                          .replace(/### (.*?)$/gm, '<h4 class="font-medium mt-3 mb-1">$1</h4>')
                          .replace(/- (.*?)$/gm, '<li class="ml-4">$1</li>')
                          .replace(/\n/g, '<br />') 
                      }}
                    />
                  ) : (
                    <p>{message.content}</p>
                  )}
                  
                  {message.role === "assistant" && (
                    <div className="flex items-center gap-2 mt-4 pt-3 border-t border-border">
                      <span className="text-xs text-muted-foreground">Cette réponse vous a-t-elle aidé ?</span>
                      <Button variant="ghost" size="icon" className="h-7 w-7">
                        <ThumbsUp className="w-3.5 h-3.5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-7 w-7">
                        <ThumbsDown className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  )}
                </div>
                
                {message.role === "user" && (
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-secondary-foreground" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center">
                  <Bot className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="bg-card border border-border rounded-2xl rounded-bl-sm p-4">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          {messages.length <= 2 && (
            <div className="px-4 py-3 border-t border-border bg-card/50">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Questions suggérées</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSend(question)}
                    className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm hover:bg-secondary/80 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-border bg-card">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-3"
            >
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Posez votre question sur les analyses biologiques..."
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  disabled={isTyping}
                />
              </div>
              <Button type="submit" variant="hero" disabled={!input.trim() || isTyping}>
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
