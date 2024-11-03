import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Shield, Lock, Trash2, ExternalLink, Briefcase, FileText } from 'lucide-react';

interface Message {
  id: number;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      content: 'Hej! Jag är din AI-guide för svenska stiftelser. Jag kan hjälpa dig med juridiska frågor, stiftelseförvaltning och information om hur du startar eller driver en stiftelse. Vad vill du veta?',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        type: 'bot',
        content: getExampleResponse(),
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const getExampleResponse = (): string => {
    const responses = [
      'En stiftelse i Sverige är en självägande förmögenhet som ska främja ett bestämt ändamål. Det finns över 15,000 registrerade stiftelser i Sverige.',
      'För att bilda en stiftelse krävs ett stiftelseförordnande och att förmögenheten överförs till separat förvaltning enligt Stiftelselagen (1994:1220).',
      'Som stiftelseförvaltare har du ansvar för att förvalta stiftelsens tillgångar på bästa sätt och se till att ändamålet uppfylls enligt stiftelseurkunden.',
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 mb-8">
        {/* Chat Header */}
        <div className="bg-white/10 p-6 border-b border-white/20">
          <div className="flex items-center space-x-3">
            <Bot className="w-8 h-8 text-white" />
            <div>
              <h2 className="text-xl font-bold text-white">Stiftelse-AI Assistent</h2>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center space-x-1 text-white/80 text-sm">
                  <Shield className="w-4 h-4" />
                  <span>GDPR-säker</span>
                </div>
                <div className="flex items-center space-x-1 text-white/80 text-sm">
                  <Lock className="w-4 h-4" />
                  <span>Krypterad</span>
                </div>
                <div className="flex items-center space-x-1 text-white/80 text-sm">
                  <Trash2 className="w-4 h-4" />
                  <span>Ingen datalagring</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="h-[500px] overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`flex items-start space-x-2 max-w-[80%] ${
                  message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                <div
                  className={`p-2 rounded-full ${
                    message.type === 'user' ? 'bg-white/20' : 'bg-white/10'
                  }`}
                >
                  {message.type === 'user' ? (
                    <User className="w-5 h-5 text-white" />
                  ) : (
                    <Bot className="w-5 h-5 text-white" />
                  )}
                </div>
                <div
                  className={`p-4 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-white/20 text-white'
                      : 'bg-white/10 text-white'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-full bg-white/10">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="p-4 rounded-2xl bg-white/10">
                <div className="flex items-center space-x-2 text-white">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  <span>Tänker...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-white/20 bg-white/5">
          <div className="flex space-x-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ställ en fråga om svenska stiftelser..."
              className="flex-1 p-4 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/40 bg-white/10 text-white placeholder-white/50"
            />
            <button
              type="submit"
              className="px-6 py-4 bg-white/20 text-white rounded-xl hover:bg-white/30 transition-colors flex items-center space-x-2"
              disabled={isLoading}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>

      {/* CTAs */}
      <div className="grid md:grid-cols-2 gap-6 mt-12">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
          <div className="flex items-center space-x-3 mb-4">
            <Briefcase className="w-8 h-8 text-white" />
            <h3 className="text-xl font-semibold text-white">För Organisationer</h3>
          </div>
          <p className="text-white/80 mb-6">
            Vill du implementera en skräddarsydd AI-lösning för din organisation? HEIMLANDR.IO erbjuder specialanpassade AI-tjänster.
          </p>
          <a
            href="https://heimlandr.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-all"
          >
            <span>Kontakta HEIMLANDR.IO</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
          <div className="flex items-center space-x-3 mb-4">
            <FileText className="w-8 h-8 text-white" />
            <h3 className="text-xl font-semibold text-white">Stiftelsetjänster</h3>
          </div>
          <p className="text-white/80 mb-6">
            Behöver du hjälp med ansökningar, mallar eller att starta en stiftelse? Besök sokastiftelsemedel.se för personlig vägledning.
          </p>
          <a
            href="https://www.sokastiftelsemedel.se"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-all"
          >
            <span>Besök Sokastiftelsemedel.se</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* GDPR Notice */}
      <div className="mt-8 p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
        <h3 className="text-lg font-semibold text-white mb-3">Integritet & Säkerhet</h3>
        <p className="text-white/80 text-sm leading-relaxed">
          Denna tjänst är 100% GDPR-kompatibel. Vi använder inga cookies, sparar ingen data och säljer aldrig information. 
          All kommunikation är krypterad och raderas omedelbart efter varje session genom vår "information burn"-funktion. 
          Din integritet och säkerhet är vår högsta prioritet.
        </p>
      </div>

      {/* Collaboration Footer */}
      <div className="mt-8 text-center">
        <p className="text-white/60 text-sm">
          Denna AI-tjänst är ett samarbete mellan{' '}
          <a 
            href="https://heimlandr.io" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-white/80 underline"
          >
            HEIMLANDR.IO
          </a>
          {' '}och{' '}
          <a 
            href="https://www.sokastiftelsemedel.se" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-white/80 underline"
          >
            sokastiftelsemedel.se
          </a>
        </p>
      </div>
    </div>
  );
}