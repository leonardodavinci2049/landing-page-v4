import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  ShoppingCart, 
  Layers, 
  Sparkles, 
  BarChart3, 
  Workflow, 
  MessageSquare, 
  Server,
  ArrowRight,
  Wrench,
  Bot,
  Zap
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      category: "Desenvolvimento Web",
      icon: Globe,
      color: "from-cyan-500 to-blue-600",
      items: [
        {
          title: "Sites Institucionais",
          description: "Presença online otimizada para SEO e performance, com design responsivo e moderno.",
          features: ["SEO Otimizado", "Design Responsivo", "CMS Integrado"],
          aiFeature: false
        },
        {
          title: "Sistemas PDV",
          description: "Soluções online para varejo com integração de estoque, pagamentos e dashboard completo.",
          features: ["Gestão de Estoque", "Pagamentos", "Dashboard Admin"],
          aiFeature: false
        },
        {
          title: "Painel Administrativo",
          description: "Sistema completo de gestão de produtos, entrada, clientes e pedidos com IA para análise preditiva.",
          features: ["Gestão de Produtos", "Controle de Clientes", "Análise com IA"],
          aiFeature: true
        }
      ]
    },
    {
      category: "E-commerce",
      icon: ShoppingCart,
      color: "from-purple-500 to-pink-600",
      items: [
        {
          title: "E-commerce B2B",
          description: "Catálogos atacadistas com preços diferenciados e pedidos em lote, otimizados com IA.",
          features: ["Catálogo B2B", "Preços Variáveis", "IA para Precificação"],
          aiFeature: true
        },
        {
          title: "E-commerce B2C",
          description: "Lojas online para varejo com gestão completa de produtos e pagamentos.",
          features: ["Gestão de Produtos", "Pagamentos", "Checkout Otimizado"],
          aiFeature: false
        },
        {
          title: "WooCommerce",
          description: "Instalação e configuração profissional do WooCommerce com otimizações e integrações.",
          features: ["Instalação", "Configuração", "Otimização"],
          aiFeature: false
        }
      ]
    },
    {
      category: "Landing Pages",
      icon: Sparkles,
      color: "from-orange-500 to-red-600",
      items: [
        {
          title: "Landing Pages para Ads",
          description: "Páginas de alta conversão para Google Ads, Meta Ads e outras plataformas, criadas com IA.",
          features: ["Google Ads", "Meta Ads", "Copy com IA"],
          aiFeature: true
        },
        {
          title: "Integração Social",
          description: "Landing pages com integração WhatsApp e redes sociais para máxima conversão.",
          features: ["WhatsApp", "Redes Sociais", "Chat Integrado"],
          aiFeature: false
        },
        {
          title: "Marketing & Campanhas",
          description: "Landing pages para ações de marketing com ChatGPT e Gemini para copywriting otimizado.",
          features: ["ChatGPT", "Gemini", "A/B Testing"],
          aiFeature: true
        }
      ]
    },
    {
      category: "Automação",
      icon: Workflow,
      color: "from-green-500 to-emerald-600",
      items: [
        {
          title: "Workflows Inteligentes",
          description: "Integração entre sistemas e automatização de tarefas com N8N e IA para otimização.",
          features: ["N8N", "Integração", "IA Preditiva"],
          aiFeature: true
        },
        {
          title: "Bots Telegram",
          description: "Atendimento automatizado com IA e notificações em tempo real.",
          features: ["Atendimento IA", "Notificações", "Integração"],
          aiFeature: true
        },
        {
          title: "Integração WhatsApp",
          description: "Automação de mensagens e atendimento via WhatsApp com respostas inteligentes por IA.",
          features: ["WhatsApp API", "Respostas IA", "Chatbot"],
          aiFeature: true
        }
      ]
    },
    {
      category: "Hospedagem & Infraestrutura",
      icon: Server,
      color: "from-blue-500 to-indigo-600",
      items: [
        {
          title: "WordPress Gerenciado",
          description: "Configuração otimizada com backups automáticos e segurança avançada.",
          features: ["Backups", "SSL", "Segurança"],
          aiFeature: false
        },
        {
          title: "Deploy de Aplicações",
          description: "CI/CD para aplicações React/Next.js com monitoramento e IA para otimização de performance.",
          features: ["CI/CD", "Monitoramento IA", "Performance"],
          aiFeature: true
        },
        {
          title: "VPS Linux",
          description: "Instalação e gerenciamento completo de VPS Linux com configurações otimizadas.",
          features: ["Instalação", "Gerenciamento", "Otimização"],
          aiFeature: false
        }
      ]
    },
    {
      category: "Serviços Técnico de Informática",
      icon: Wrench,
      color: "from-yellow-500 to-amber-600",
      items: [
        {
          title: "Montagem e Consertos",
          description: "Montagem e consertos de computadores com diagnóstico assistido por IA para identificação rápida de problemas.",
          features: ["Montagem", "Consertos", "Diagnóstico IA"],
          aiFeature: true
        },
        {
          title: "Redes e Infraestrutura",
          description: "Instalação e configuração de redes com otimização inteligente e monitoramento por IA.",
          features: ["Instalação", "Configuração", "Monitoramento IA"],
          aiFeature: true
        },
        {
          title: "Software e Sistemas",
          description: "Instalação e configuração de software com suporte de IA para resolução rápida de problemas.",
          features: ["Instalação", "Configuração", "Suporte IA"],
          aiFeature: true
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-slate-50" id="servicos">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Soluções completas para o seu negócio digital, desde o desenvolvimento até a automação e hospedagem, 
              <span className="text-cyan-600 font-semibold"> potencializadas por Inteligência Artificial</span>.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-6"></div>
          </div>

          {/* AI Badge */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg">
              <Bot className="w-5 h-5" />
              <span className="font-semibold">Serviços Potencializados por IA</span>
              <Zap className="w-5 h-5" />
            </div>
          </div>

          {/* Services Grid */}
          <div className="space-y-12">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.category}>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{service.category}</h3>
                  </div>

                  {/* Service Cards */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {service.items.map((item) => (
                      <Card 
                        key={item.title} 
                        className={`hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-cyan-500 group relative overflow-hidden ${
                          item.aiFeature ? 'ring-2 ring-cyan-500/20' : ''
                        }`}
                      >
                        {/* AI Badge */}
                        {item.aiFeature && (
                          <div className="absolute top-3 right-3 z-10">
                            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold shadow-lg">
                              <Bot className="w-3 h-3" />
                              <span>IA</span>
                            </div>
                          </div>
                        )}

                        <CardHeader>
                          <CardTitle className="text-xl group-hover:text-cyan-600 transition-colors">
                            {item.title}
                          </CardTitle>
                          <CardDescription className="text-base leading-relaxed">
                            {item.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {item.features.map((feature) => (
                              <Badge 
                                key={feature} 
                                variant="secondary"
                                className={`${
                                  feature.includes('IA') || feature.includes('ChatGPT') || feature.includes('Gemini')
                                    ? 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200'
                                    : 'bg-slate-100 text-slate-700 hover:bg-cyan-100 hover:text-cyan-700'
                                }`}
                              >
                                {feature}
                              </Badge>
                            ))}
                          </div>
                          <Button 
                            variant="ghost" 
                            className="w-full group/btn"
                          >
                            Saiba Mais
                            <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-lg text-slate-600 mb-6">
              Não encontrou o que procura? Entre em contato para soluções personalizadas com IA.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
            >
              Solicitar Orçamento Personalizado
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
