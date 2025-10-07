import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Zap, Clock, Sparkles } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "Contrato Mensal",
      icon: Sparkles,
      description: "Execução de projetos, assessorias, implementação e manutenção contínua",
      highlight: false,
      features: [
        "Execução de projetos sob demanda",
        "Assessoria técnica especializada",
        "Implementação de sistemas",
        "Manutenção de estruturas de TI",
        "Suporte técnico contínuo",
        "Atualizações e melhorias mensais",
        "Relatórios mensais de atividades"
      ],
      cta: "Contratar Mensalmente",
      color: "from-slate-600 to-slate-700"
    },
    {
      name: "Horas/Consultoria",
      icon: Clock,
      description: "Flexibilidade para demandas pontuais",
      highlight: true,
      badge: "Mais Flexível",
      features: [
        "Pagamento por hora trabalhada",
        "Sem compromisso de longo prazo",
        "Ideal para manutenção e suporte",
        "Consultoria técnica especializada",
        "Prioridade no atendimento",
        "Relatórios de horas trabalhadas",
        "Faturamento mensal"
      ],
      cta: "Contratar Horas",
      color: "from-cyan-500 to-blue-600"
    },
    {
      name: "Pacote Personalizado",
      icon: Zap,
      description: "Soluções sob medida para necessidades complexas",
      highlight: false,
      features: [
        "Análise detalhada das necessidades",
        "Proposta customizada",
        "Desenvolvimento + Hospedagem",
        "Automação de processos",
        "Suporte contínuo dedicado",
        "SLA personalizado",
        "Escalabilidade garantida"
      ],
      cta: "Falar com Especialista",
      color: "from-purple-600 to-pink-600"
    }
  ];

  const addons = [
    "Hospedagem e Infraestrutura (VPS)",
    "Manutenção e Suporte Mensal",
    "Implementação de Analytics",
    "Otimização de Performance",
    "Integração com APIs Externas",
    "Treinamento Adicional"
  ];

  return (
    <section className="py-24 bg-slate-50" id="precos">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Planos Flexíveis para o Seu Projeto
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Entendemos que cada projeto tem um orçamento e necessidades específicas. 
              Oferecemos modelos de contratação flexíveis para se adequar à sua demanda.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-6"></div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <Card 
                  key={plan.name}
                  className={`relative overflow-hidden ${
                    plan.highlight 
                      ? 'border-cyan-500 shadow-2xl scale-105' 
                      : 'border-slate-200 hover:border-cyan-500'
                  } transition-all duration-300`}
                >
                  {plan.highlight && (
                    <div className="absolute top-0 right-0">
                      <Badge className="rounded-none rounded-bl-lg bg-gradient-to-r from-cyan-500 to-blue-600 border-0">
                        {plan.badge}
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-8">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <CardDescription className="text-base">{plan.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button 
                      className={`w-full ${
                        plan.highlight
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700'
                          : 'bg-slate-900 hover:bg-slate-800'
                      }`}
                      size="lg"
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Add-ons */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Serviços Adicionais Disponíveis
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {addons.map((addon) => (
                <div 
                  key={addon}
                  className="flex items-center gap-3 p-4 rounded-lg bg-slate-50 hover:bg-cyan-50 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span className="text-slate-700">{addon}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Não tem certeza qual plano escolher?
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Entre em contato e vamos encontrar a melhor solução para o seu projeto. 
              Oferecemos orçamentos personalizados sem compromisso.
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
