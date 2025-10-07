import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Zap, Clock, Sparkles } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "Contrato Mensal",
      icon: Sparkles,
      description:
        "Execução de projetos, assessorias, implementação e manutenção contínua",
      highlight: false,
      features: [
        "Execução de projetos sob demanda",
        "Assessoria técnica especializada",
        "Implementação de sistemas",
        "Manutenção de estruturas de TI",
        "Suporte técnico contínuo",
        "Atualizações e melhorias mensais",
        "Relatórios mensais de atividades",
      ],
      cta: "Contratar Mensalmente",
      color: "from-slate-600 to-slate-700",
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
        "Faturamento mensal",
      ],
      cta: "Contratar Horas",
      color: "from-cyan-500 to-blue-600",
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
        "Escalabilidade garantida",
      ],
      cta: "Falar com Especialista",
      color: "from-purple-600 to-pink-600",
    },
  ];

  const addons = [
    "Hospedagem e Infraestrutura (VPS)",
    "Manutenção e Suporte Mensal",
    "Implementação de Analytics",
    "Otimização de Performance",
    "Integração com APIs Externas",
    "Treinamento Adicional",
  ];

  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-950" id="precos">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl dark:text-slate-100">
              Planos Flexíveis para o Seu Projeto
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-slate-600 dark:text-slate-400">
              Entendemos que cada projeto tem um orçamento e necessidades
              específicas. Oferecemos modelos de contratação flexíveis para se
              adequar à sua demanda.
            </p>
            <div className="mx-auto mt-6 h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
          </div>

          {/* Pricing Cards */}
          <div className="mb-16 grid gap-8 md:grid-cols-3">
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <Card
                  key={plan.name}
                  className={`relative overflow-hidden bg-white dark:bg-slate-800 ${
                    plan.highlight
                      ? "scale-105 border-cyan-500 shadow-2xl"
                      : "border-slate-200 hover:border-cyan-500 dark:border-slate-700"
                  } transition-all duration-300`}
                >
                  {plan.highlight && (
                    <div className="absolute top-0 right-0">
                      <Badge className="rounded-none rounded-bl-lg border-0 bg-gradient-to-r from-cyan-500 to-blue-600">
                        {plan.badge}
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="pb-8 text-center">
                    <div
                      className={`h-16 w-16 rounded-xl bg-gradient-to-br ${plan.color} mx-auto mb-4 flex items-center justify-center`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="mb-2 text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-base">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    {/* Features */}
                    <ul className="mb-8 space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-500 dark:text-cyan-400" />
                          <span className="text-sm text-slate-700 dark:text-slate-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button
                      className={`w-full ${
                        plan.highlight
                          ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                          : "bg-slate-900 hover:bg-slate-800"
                      }`}
                      size="lg"
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Add-ons */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-700 dark:bg-slate-800">
            <h3 className="mb-6 text-center text-2xl font-bold text-slate-900 dark:text-slate-100">
              Serviços Adicionais Disponíveis
            </h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {addons.map((addon) => (
                <div
                  key={addon}
                  className="flex items-center gap-3 rounded-lg bg-slate-50 p-4 transition-colors hover:bg-cyan-50 dark:bg-slate-900/50 dark:hover:bg-cyan-900/20"
                >
                  <div className="h-2 w-2 rounded-full bg-cyan-500 dark:bg-cyan-400"></div>
                  <span className="text-slate-700 dark:text-slate-300">
                    {addon}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-12 text-center">
            <h3 className="mb-4 text-3xl font-bold text-white">
              Não tem certeza qual plano escolher?
            </h3>
            <p className="mx-auto mb-8 max-w-2xl text-slate-300">
              Entre em contato e vamos encontrar a melhor solução para o seu
              projeto. Oferecemos orçamentos personalizados sem compromisso.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
            >
              Solicitar Orçamento Personalizado
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
