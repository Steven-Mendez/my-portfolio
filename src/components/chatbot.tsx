"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Minimize2, Send, Loader2, WifiOff } from "lucide-react";
import { useChat } from "@/hooks/use-chat";

const chatbotTexts = {
  en: {
    title: "Steven Mendez",
    openButton: "Chat with Steven",
    minimizeButton: "Minimize chat",
    closeButton: "Close chat",
    welcomeTitle: "Hi! I'm Steven 👋",
    welcomeMessage: "I'm a backend developer and AI enthusiast. Feel free to ask me anything about my projects, experience, or just chat about technology!",
    inputPlaceholder: "Ask me anything...",
    sendButton: "Send",
    clearButton: "Clear chat",
    offlineMessage: "I'm currently offline, but you can still leave me a message and I'll get back to you later!",
    typingMessage: "Typing..."
  },
  es: {
    title: "Steven Mendez",
    openButton: "Chatear con Steven",
    minimizeButton: "Minimizar chat",
    closeButton: "Cerrar chat",
    welcomeTitle: "¡Hola! Soy Steven 👋",
    welcomeMessage: "Soy desarrollador backend y entusiasta de la IA. ¡Pregúntame lo que quieras sobre mis proyectos, experiencia, o solo charlemos sobre tecnología!",
    inputPlaceholder: "Pregúntame lo que quieras...",
    sendButton: "Enviar",
    clearButton: "Limpiar chat",
    offlineMessage: "Estoy desconectado en este momento, pero puedes dejarme un mensaje y te responderé más tarde!",
    typingMessage: "Escribiendo..."
  }
};

interface ChatbotProps {
  locale: string;
}

export default function Chatbot({ locale }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { messages, isLoading, isOffline, sendMessage, clearMessages } = useChat(locale);
  
  const texts = chatbotTexts[locale as keyof typeof chatbotTexts] || chatbotTexts.en;

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;
    await sendMessage(inputValue);
    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-brand hover:bg-brand/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
        aria-label={texts.openButton}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-background border border-border rounded-lg shadow-2xl z-50 flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-border bg-muted/50 rounded-t-lg">
        <div className="flex items-center space-x-2">
          <MessageCircle className="h-5 w-5 text-brand" />
          <h3 className="font-semibold text-foreground">{texts.title}</h3>
          {isOffline && (
            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
              <WifiOff className="h-3 w-3" />
              <span>Offline</span>
            </div>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            onClick={() => setIsMinimized(!isMinimized)}
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 hover:bg-muted"
            aria-label={texts.minimizeButton}
          >
            <Minimize2 className="h-4 w-4" />
          </Button>
          <Button
            onClick={() => setIsOpen(false)}
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 hover:bg-muted"
            aria-label={texts.closeButton}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {!isMinimized && (
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
                <MessageCircle className="h-12 w-12 mb-4 text-muted-foreground/50" />
                <h4 className="text-lg font-medium mb-2">{texts.welcomeTitle}</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {texts.welcomeMessage}
                </p>
                {isOffline && (
                  <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3 text-xs text-yellow-800 dark:text-yellow-200">
                    {texts.offlineMessage}
                  </div>
                )}
              </div>
            ) : (
              <>
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-3 py-2 ${
                        message.role === 'user'
                          ? 'bg-brand text-white'
                          : 'bg-muted text-foreground'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted text-foreground rounded-lg px-3 py-2">
                      <div className="flex items-center space-x-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span className="text-sm">{texts.typingMessage}</span>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
          
          <div className="p-4 border-t border-border bg-muted/30">
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 p-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand resize-none"
                  placeholder={texts.inputPlaceholder}
                  rows={3}
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="px-4 py-2 bg-brand hover:bg-brand/90 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </div>
              {messages.length > 0 && (
                <div className="flex justify-end">
                  <Button
                    onClick={clearMessages}
                    variant="ghost"
                    size="sm"
                    className="text-xs text-muted-foreground hover:text-foreground"
                  >
                    {texts.clearButton}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
