"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code2,
  Zap,
  ChevronLeft,
  ChevronRight,
  Bot,
  ShoppingCart,
  Sparkles,
  Workflow,
  Server,
  Wrench,
} from "lucide-react";
import { companyInfo } from "@/lib/env";

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 7000, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const slides = [
    // Slide 1 - Original
    {
      icon: Code2,
      badge: `${companyInfo.name} - ${companyInfo.title}`,
      headline: "Transforme Sua Visão Digital em Realidade",
      subheadline: `Soluções Web Full-Stack com React & Next.js pela ${companyInfo.name}`,
      description: `Desenvolvimento de ponta para empresas que buscam performance, escalabilidade e inovação. A ${companyInfo.name} oferece serviços completos de TI e desenvolvimento web.`,
      techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
      cta1: "Solicite um Orçamento Grátis",
      cta2: "Conheça Nossos Serviços",
      gradient: "from-cyan-500 to-blue-600",
    },
    // Slide 2 - Desenvolvimento Web com IA
    {
      icon: Bot,
      badge: "Desenvolvimento Web Potencializado por IA",
      headline: "Seu Site Precisa Ser Mais que Bonito. Precisa Converter.",
      subheadline:
        "Você está perdendo clientes porque seu site não transmite credibilidade?",
      description:
        "Desenvolvemos sites e sistemas web com IA integrada que não apenas impressionam visualmente, mas convertem visitantes em clientes. Painéis administrativos inteligentes que preveem tendências e otimizam sua operação automaticamente.",
      benefits: [
        "IA para análise preditiva de vendas",
        "Sistemas que aprendem com seu negócio",
        "Performance 3x mais rápida que a concorrência",
      ],
      cta1: "Quero um Site Inteligente",
      cta2: "Ver Cases de Sucesso",
      gradient: "from-purple-500 to-pink-600",
    },
    // Slide 3 - E-commerce
    {
      icon: ShoppingCart,
      badge: "E-commerce de Alta Performance",
      headline: "Venda Mais. Venda Melhor. Venda com Inteligência Artificial.",
      subheadline: "Sua loja online está deixando dinheiro na mesa?",
      description:
        "Plataformas de e-commerce B2B e B2C com IA para precificação dinâmica, recomendações personalizadas e previsão de demanda. Aumente suas vendas em até 150% com tecnologia que trabalha por você 24/7.",
      benefits: [
        "Precificação inteligente com IA",
        "Checkout otimizado para conversão",
        "Integração total com ERP e pagamentos",
      ],
      cta1: "Criar Minha Loja Agora",
      cta2: "Calcular ROI",
      gradient: "from-emerald-500 to-teal-600",
    },
    // Slide 4 - Landing Pages
    {
      icon: Sparkles,
      badge: "Landing Pages que Convertem",
      headline: "Seus Anúncios Estão Trazendo Cliques, Mas Não Vendas?",
      subheadline: "O problema não é seu tráfego. É sua landing page.",
      description:
        "Landing pages criadas com IA (ChatGPT e Gemini) especializadas em conversão para Google Ads e Meta Ads. Copywriting neurocientífico, design persuasivo e integração com WhatsApp. Aumente sua taxa de conversão em até 85%.",
      benefits: [
        "Copywriting com IA e neurovendas",
        "Integração WhatsApp e redes sociais",
        "A/B Testing automatizado",
      ],
      cta1: "Aumentar Minhas Conversões",
      cta2: "Ver Exemplos",
      gradient: "from-orange-500 to-red-600",
    },
    // Slide 5 - Automação
    {
      icon: Workflow,
      badge: "Automação Inteligente",
      headline: "Pare de Perder Tempo com Tarefas Repetitivas.",
      subheadline:
        "Sua equipe está fazendo trabalho manual que uma IA poderia fazer?",
      description:
        "Automatize processos com N8N, bots inteligentes para Telegram e WhatsApp com respostas por IA. Economize até 40 horas por semana e elimine erros humanos. Sua equipe foca no que realmente importa: crescer o negócio.",
      benefits: [
        "Atendimento 24/7 com IA",
        "Integração entre todos seus sistemas",
        "ROI em menos de 3 meses",
      ],
      cta1: "Automatizar Meu Negócio",
      cta2: "Ver Como Funciona",
      gradient: "from-green-500 to-emerald-600",
    },
    // Slide 6 - Hospedagem e Infraestrutura
    {
      icon: Server,
      badge: "Hospedagem & Infraestrutura",
      headline: "Seu Site Está Fora do Ar? Seus Clientes Estão Indo Embora.",
      subheadline: "Cada minuto offline é dinheiro perdido.",
      description:
        "Infraestrutura robusta em VPS Linux com monitoramento por IA, backups automáticos e 99.9% de uptime garantido. WordPress gerenciado, deploy automatizado e performance otimizada. Durma tranquilo sabendo que seu negócio está sempre online.",
      benefits: [
        "99.9% de uptime garantido",
        "Monitoramento com IA 24/7",
        "Backups automáticos diários",
      ],
      cta1: "Migrar Meu Site Agora",
      cta2: "Comparar Planos",
      gradient: "from-blue-500 to-indigo-600",
    },
    // Slide 7 - Serviços Técnicos
    {
      icon: Wrench,
      badge: "Suporte Técnico Especializado",
      headline: "Problemas Técnicos Paralisando Seu Negócio?",
      subheadline: "Cada hora parado é prejuízo. Resolva agora.",
      description:
        "Suporte técnico com diagnóstico assistido por IA para identificação instantânea de problemas. Montagem, consertos, redes e software. Atendimento rápido, solução definitiva. Seu negócio não pode esperar.",
      benefits: [
        "Diagnóstico com IA em minutos",
        "Atendimento prioritário",
        "Garantia de satisfação",
      ],
      cta1: "Solicitar Atendimento",
      cta2: "Falar com Técnico",
      gradient: "from-yellow-500 to-amber-600",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Embla Carousel */}
      <div className="relative z-10 h-screen" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => {
            const Icon = slide.icon;
            return (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <div className="flex items-center justify-center h-full px-4 py-20">
                  <div className="max-w-5xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm mb-8">
                      <Icon className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm text-slate-300">
                        {slide.badge}
                      </span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 leading-tight">
                      {slide.headline}
                    </h1>

                    {/* Sub-headline */}
                    <p className="text-xl md:text-2xl text-cyan-400 font-semibold mb-4">
                      {slide.subheadline}
                    </p>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                      {slide.description}
                    </p>

                    {/* Benefits or Techs */}
                    {slide.benefits ? (
                      <div className="flex flex-col gap-3 mb-8 max-w-2xl mx-auto">
                        {slide.benefits.map((benefit, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 text-left bg-slate-800/30 backdrop-blur-sm px-4 py-3 rounded-lg border border-slate-700/50"
                          >
                            <Zap className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                            <span className="text-slate-200">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {slide.techs?.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 rounded-lg bg-slate-800/30 border border-slate-700/50 text-slate-300 text-sm font-medium backdrop-blur-sm hover:border-cyan-500/50 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <Button
                        size="lg"
                        className={`bg-gradient-to-r ${slide.gradient} hover:opacity-90 text-white px-8 py-6 text-lg group`}
                      >
                        {slide.cta1}
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-slate-600 text-slate-200 hover:bg-slate-800 px-8 py-6 text-lg"
                      >
                        {slide.cta2}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 flex items-center justify-center text-white hover:bg-slate-700/50 transition-colors"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 flex items-center justify-center text-white hover:bg-slate-700/50 transition-colors"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-slate-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
