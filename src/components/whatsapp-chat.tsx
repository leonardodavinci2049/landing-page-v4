"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { companyInfo } from "@/lib/env";

// Ícone SVG oficial do WhatsApp
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (!message.trim()) return;

    // Formata o número do WhatsApp (remove caracteres não numéricos)
    const phoneNumber = companyInfo.whatsapp.replace(/\D/g, "");

    // Codifica a mensagem para URL
    const encodedMessage = encodeURIComponent(message);

    // Cria o link do WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Abre o WhatsApp em uma nova aba
    window.open(whatsappUrl, "_blank");

    // Limpa a mensagem e fecha o diálogo
    setMessage("");
    setIsOpen(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Botão Flutuante */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl focus:ring-4 focus:ring-[#25D366]/50 focus:outline-none"
        aria-label="Abrir chat do WhatsApp"
      >
        <WhatsAppIcon className="h-8 w-8" />
      </button>

      {/* Diálogo do Chat */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]">
                <WhatsAppIcon className="h-7 w-7 text-white" />
              </div>
              <div>
                <DialogTitle className="text-left">Chat WhatsApp</DialogTitle>
                <DialogDescription className="text-left">
                  Envie uma mensagem para {companyInfo.name}
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {/* Mensagem de boas-vindas simulada */}
            <div className="bg-muted rounded-lg p-3">
              <p className="text-muted-foreground text-sm">
                Olá! 👋 Como posso ajudá-lo hoje?
              </p>
            </div>

            {/* Área de texto para mensagem */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Sua mensagem
              </label>
              <Textarea
                id="message"
                placeholder="Digite sua mensagem aqui..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="min-h-[120px] resize-none"
                autoFocus
              />
            </div>

            {/* Botão de enviar */}
            <Button
              onClick={handleSendMessage}
              disabled={!message.trim()}
              className="w-full bg-[#25D366] text-white hover:bg-[#20BA5A]"
              size="lg"
            >
              <Send className="mr-2 h-4 w-4" />
              Enviar via WhatsApp
            </Button>

            <p className="text-muted-foreground text-center text-xs">
              Você será redirecionado para o WhatsApp
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
