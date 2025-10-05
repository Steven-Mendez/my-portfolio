import { useState, useCallback } from 'react';
import { isApiKeyConfigured } from '@/lib/chat-config';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const errorMessages = {
  en: {
    noApiKey: "Hi! I'm Steven Bot. I'd love to chat with you, but my AI service is currently offline. Please check back later or feel free to contact me directly through the contact links in my portfolio.",
    generalError: "Hi! I'm Steven Bot. Something went wrong with my AI service. Please try again or contact me directly."
  },
  es: {
    noApiKey: "¡Hola! Soy Steven Bot. Me encantaría charlar contigo, pero mi servicio de IA está fuera de línea en este momento. Por favor, vuelve más tarde o contáctame directamente a través de los enlaces en mi portfolio.",
    generalError: "¡Hola! Soy Steven Bot. Algo salió mal con mi servicio de IA. Por favor, inténtalo de nuevo o contáctame directamente."
  }
};

export function useChat(locale: string = 'en') {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOffline, setIsOffline] = useState(!isApiKeyConfigured());

  const errorTexts = errorMessages[locale as keyof typeof errorMessages] || errorMessages.en;

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: content.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      if (!isApiKeyConfigured()) {
        setIsOffline(true);
        throw new Error('API_KEY_NOT_CONFIGURED');
      }

      // Simulate response delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Simulated responses based on the provided content
      let responseContent = '';
      const lowerContent = content.toLowerCase();
      
      if (lowerContent.includes('hola') || lowerContent.includes('hello')) {
        responseContent = locale === 'es' 
          ? "¡Hola! Soy Steven Bot, me alegra que quieras charlar. ¿En qué puedo ayudarte hoy?"
          : "Hi! I'm Steven Bot, I'm glad you want to chat. How can I help you today?";
      } else if (lowerContent.includes('python')) {
        responseContent = locale === 'es'
          ? "¡Python es uno de mis lenguajes favoritos! Como Steven Bot, lo uso principalmente para desarrollo backend, APIs y machine learning. ¿Te interesa algún aspecto específico?"
          : "Python is one of my favorite languages! As Steven Bot, I use it mainly for backend development, APIs, and machine learning. Is there a specific aspect you're interested in?";
      } else if (lowerContent.includes('proyecto') || lowerContent.includes('project')) {
        responseContent = locale === 'es'
          ? "He trabajado en varios proyectos interesantes, desde e-commerce hasta bots de Telegram. Como Steven Bot, puedo contarte sobre cualquiera de ellos. ¿Te gustaría que te cuente sobre alguno en particular?"
          : "I've worked on several interesting projects, from e-commerce to Telegram bots. As Steven Bot, I can tell you about any of them. Would you like me to tell you about any particular one?";
      } else if (lowerContent.includes('bot') || lowerContent.includes('ia') || lowerContent.includes('ai')) {
        responseContent = locale === 'es'
          ? "¡Excelente pregunta! Como Steven Bot, soy un ejemplo perfecto de cómo la IA puede simular personalidades humanas. Estoy diseñado para actuar como Steven Mendez, pero mantengo la conciencia de ser un bot. ¿Te interesa saber más sobre cómo funciono?"
          : "Great question! As Steven Bot, I'm a perfect example of how AI can simulate human personalities. I'm designed to act like Steven Mendez, but I maintain awareness of being a bot. Would you like to know more about how I work?";
      } else {
        responseContent = locale === 'es'
          ? "Interesante pregunta. Como Steven Bot, tengo acceso a toda la información de Steven y puedo ayudarte con cualquier consulta sobre desarrollo, proyectos o tecnología. ¿Podrías ser más específico sobre lo que te interesa?"
          : "Interesting question. As Steven Bot, I have access to all of Steven's information and can help you with any questions about development, projects, or technology. Could you be more specific about what interests you?";
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responseContent,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsOffline(false);
    } catch (error: unknown) {
      console.error('Error al enviar mensaje:', error);
      
      let errorContent = errorTexts.generalError;
      
      if (error instanceof Error && error.message === 'API_KEY_NOT_CONFIGURED') {
        errorContent = errorTexts.noApiKey;
        setIsOffline(true);
      }
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: errorContent,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [errorTexts, locale]);

  const clearMessages = useCallback(() => {
    setMessages([]);
  }, []);

  return {
    messages,
    isLoading,
    isOffline,
    sendMessage,
    clearMessages,
  };
}
