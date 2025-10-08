import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { WhatsAppChat } from "@/components/whatsapp-chat";
import Link from "next/link";

const stats = [
  { value: "5+", label: "anos desenvolvendo soluções digitais" },
  { value: "50+", label: "projetos entregues com sucesso" },
  { value: "98%", label: "taxa de satisfação de clientes" },
  { value: "24/7", label: "suporte estratégico com IA" },
];

const values = [
  {
    title: "Missão",
    description:
      "Transformar empresas com soluções digitais inteligentes que combinam tecnologia de ponta, estratégia de negócios e experiências memoráveis.",
    bullets: [
      "Entrega orientada a resultados mensuráveis",
      "Produtos escaláveis e preparados para o futuro",
      "Parceria consultiva do planejamento ao suporte",
    ],
  },
  {
    title: "Visão",
    description:
      "Ser referência nacional em desenvolvimento web full-stack com inteligência artificial, ajudando negócios a crescer com inovação contínua.",
    bullets: [
      "Evolução constante da stack tecnológica",
      "Processos ágeis e transparentes",
      "Experiências digitais centradas no usuário",
    ],
  },
  {
    title: "Valores",
    description:
      "Construímos confiança com entregas consistentes, comunicação clara e foco absoluto no sucesso dos nossos clientes.",
    bullets: [
      "Qualidade técnica impecável",
      "Compromisso com prazos e metas",
      "Colaboração e suporte contínuo",
    ],
  },
];

const differentiators = [
  {
    title: "Especialistas em IA aplicada",
    description:
      "Integramos inteligência artificial em interfaces, automações e decisões de negócio para maximizar performance e conversões.",
  },
  {
    title: "Entrega full-stack ponta a ponta",
    description:
      "Cuidamos de toda a jornada digital: discovery, UX/UI, desenvolvimento, DevOps, monitoramento e suporte.",
  },
  {
    title: "Performance orientada a conversão",
    description:
      "Projetamos experiências rápidas, seguras e focadas em gerar resultados – seja em e-commerce, SaaS ou landing pages corporativas.",
  },
  {
    title: "Suporte próximo e consultivo",
    description:
      "Atuação proativa com relatórios, otimizações contínuas e canais diretos para tomar decisões estratégicas em tempo real.",
  },
];

const process = [
  {
    step: "01",
    title: "Descoberta e Planejamento",
    description:
      "Mergulhamos no contexto do seu negócio para alinhar objetivos, público-alvo e indicadores de sucesso.",
    bullets: [
      "Análise de requisitos",
      "Mapeamento de stakeholders",
      "Roadmap estratégico",
    ],
  },
  {
    step: "02",
    title: "Design e Experiência",
    description:
      "Criamos protótipos e fluxos centrados no usuário para garantir clareza, conversão e consistência visual.",
    bullets: [
      "Wireframes interativos",
      "Design system escalável",
      "Validação com stakeholders",
    ],
  },
  {
    step: "03",
    title: "Desenvolvimento Ágil",
    description:
      "Implementação full-stack com sprints curtas, code reviews e integrações contínuas para maximizar qualidade.",
    bullets: [
      "Stack moderna",
      "Entregas incrementais",
      "Integração com APIs e automações",
    ],
  },
  {
    step: "04",
    title: "Lançamento e Evolução",
    description:
      "Deploy assistido, monitoramento com IA e suporte proativo para garantir estabilidade e crescimento contínuo.",
    bullets: [
      "Observabilidade 24/7",
      "Otimização contínua",
      "Planos de evolução",
    ],
  },
];

const services = [
  {
    category: "Desenvolvimento Web",
    items: [
      "Sites institucionais e portais orientados a SEO",
      "Sistemas corporativos e dashboards inteligentes",
      "Apps web responsivos com integrações complexas",
    ],
  },
  {
    category: "E-commerce de Alta Performance",
    items: [
      "Plataformas B2B e B2C com precificação dinâmica",
      "Integração com ERP, meios de pagamento e logística",
      "Analytics avançado para prever demanda e aumentar ticket médio",
    ],
  },
  {
    category: "Landing Pages que Convertem",
    items: [
      "Copywriting com IA e neurovendas",
      "Testes A/B automatizados e heatmaps",
      "Integração com CRM, WhatsApp e campanhas paid media",
    ],
  },
  {
    category: "Automação & Suporte Técnico",
    items: [
      "Bots inteligentes em WhatsApp, Telegram e N8N",
      "Infraestrutura VPS, CI/CD e monitoramento",
      "Suporte especializado com diagnóstico assistido por IA",
    ],
  },
];

const techStack = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI"],
  },
  {
    title: "Backend",
    items: ["Node.js", "NestJS", "Express", "Python"],
  },
  {
    title: "Banco de Dados",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Prisma"],
  },
  {
    title: "DevOps & Automação",
    items: ["Vercel", "AWS", "Docker", "GitHub Actions", "N8N"],
  },
];

const highlightProjects = [
  {
    title: "Plataforma E-commerce B2B/B2C",
    description:
      "Catálogo dinâmico com precificação inteligente, gestão de pedidos em lote e integração com ERP, elevando as vendas em 150% em três meses.",
    metrics: ["+150% em vendas", "40% redução de custos operacionais"],
  },
  {
    title: "Sistema ERP/PDV para Lojistas",
    description:
      "Controle completo de estoque, emissão fiscal e dashboards em tempo real com uptime de 99,9% garantido.",
    metrics: ["99,9% uptime", "3x mais rápido que a solução anterior"],
  },
  {
    title: "Landing Pages de Alta Conversão",
    description:
      "Experiências focadas em performance com IA para copywriting, testes automatizados e integração omnichannel.",
    metrics: ["85% taxa de conversão", "Tempo de carregamento médio de 2,5s"],
  },
];

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="bg-background text-foreground">
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:18px_24px]" />
          <div className="relative container mx-auto px-4 py-24 lg:py-32">
            <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
              <div className="space-y-8">
                <span className="inline-flex items-center rounded-full border border-slate-700/60 bg-slate-900/40 px-4 py-1.5 text-xs tracking-wider text-slate-200/80 uppercase">
                  Sobre a Comsuporte
                </span>
                <h1 className="text-4xl leading-tight font-bold md:text-5xl">
                  Parceria estratégica para transformar tecnologia em
                  crescimento
                </h1>
                <p className="text-lg text-slate-300 md:text-xl">
                  Somos especialistas em desenvolvimento web full-stack,
                  e-commerce, automação e suporte técnico. Unimos inteligência
                  artificial, design centrado no usuário e processos ágeis para
                  construir produtos digitais que geram resultados reais para
                  empresas em todo o Brasil.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-6 text-base font-semibold"
                  >
                    <Link href="/#contato">Iniciar uma conversa</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="cursor-pointer border-slate-600 px-8 py-6 text-base text-slate-100 hover:bg-slate-800/70"
                  >
                    <Link href="/#portfolio">Ver cases de sucesso</Link>
                  </Button>
                </div>
              </div>
              <div className="mt-16 lg:mt-0">
                <div className="grid gap-6 rounded-3xl border border-slate-800/80 bg-slate-900/50 p-10 backdrop-blur-lg md:grid-cols-2">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="border border-slate-700/40 bg-slate-800/40 p-6 text-center shadow-lg shadow-slate-900/30"
                    >
                      <div className="text-3xl font-bold text-cyan-400 md:text-4xl">
                        {stat.value}
                      </div>
                      <p className="mt-2 text-sm text-slate-300">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Nossa essência
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Cada projeto é tratado como uma parceria de longo prazo. Alinhamos
              estratégia e tecnologia para criar experiências digitais que
              impulsionam negócios e fortalecem marcas.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="border-border bg-card flex flex-col rounded-2xl border p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                  {value.description}
                </p>
                <ul className="text-muted-foreground mt-6 space-y-2 text-sm">
                  {value.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="bg-primary mt-1 h-1.5 w-1.5 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-muted/40 py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold md:text-4xl">
                Diferenciais que potencializam resultados
              </h2>
              <p className="text-muted-foreground mt-4 text-lg">
                Somos uma equipe enxuta, ágil e orientada a dados. Atuamos como
                braço tecnológico da sua operação, garantindo performance em
                cada entrega.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="group border-border bg-background/80 hover:border-primary/60 rounded-2xl border p-8 transition-colors"
                >
                  <h3 className="text-foreground group-hover:text-primary text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mt-3 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Metodologia comprovada
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Aplicamos uma abordagem consultiva e incremental para acelerar a
              entrega de valor, reduzir riscos e manter o alinhamento com o seu
              time.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-4">
            {process.map((phase) => (
              <div
                key={phase.title}
                className="border-border bg-card flex flex-col rounded-2xl border p-8 shadow-sm"
              >
                <span className="text-primary text-sm font-semibold">
                  {phase.step}
                </span>
                <h3 className="mt-4 text-xl font-semibold">{phase.title}</h3>
                <p className="text-muted-foreground mt-3 text-sm">
                  {phase.description}
                </p>
                <ul className="text-muted-foreground mt-4 space-y-2 text-xs">
                  {phase.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="bg-primary mt-1 h-1 w-1 rounded-full" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="servicos" className="bg-muted/40 py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold md:text-4xl">
                Serviços para cada etapa da sua operação
              </h2>
              <p className="text-muted-foreground mt-4 text-lg">
                Do primeiro protótipo à escala global, entregamos soluções
                completas com suporte estratégico contínuo.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.category}
                  className="border-border bg-background flex flex-col rounded-2xl border p-8 shadow-sm"
                >
                  <h3 className="text-foreground text-xl font-semibold">
                    {service.category}
                  </h3>
                  <ul className="text-muted-foreground mt-4 space-y-3 text-sm">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="bg-primary/80 mt-1 inline-block h-2.5 w-2.5 rounded-md" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Stack tecnológica moderna
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Utilizamos ferramentas testadas em projetos complexos para
              garantir escalabilidade, segurança e performance desde o primeiro
              deploy.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {techStack.map((group) => (
              <div
                key={group.title}
                className="border-border bg-card rounded-2xl border p-8 shadow-sm"
              >
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <ul className="text-muted-foreground mt-4 space-y-2 text-sm">
                  {group.items.map((tech) => (
                    <li key={tech} className="flex items-center gap-2">
                      <span className="bg-primary h-1.5 w-1.5 rounded-full" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-muted/40 py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold md:text-4xl">
                Resultados que falam por si
              </h2>
              <p className="text-muted-foreground mt-4 text-lg">
                Projetamos, construímos e evoluímos soluções digitais que geram
                crescimento sustentável para nossos clientes.
              </p>
            </div>
            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {highlightProjects.map((project) => (
                <article
                  key={project.title}
                  className="border-border bg-background flex flex-col justify-between rounded-2xl border p-8 shadow-sm"
                >
                  <div>
                    <h3 className="text-foreground text-xl font-semibold">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mt-4 text-sm">
                      {project.description}
                    </p>
                  </div>
                  <ul className="text-foreground mt-6 space-y-2 text-sm font-medium">
                    {project.metrics.map((metric) => (
                      <li key={metric} className="flex items-center gap-2">
                        <span className="bg-primary/15 text-primary inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold">
                          ✓
                        </span>
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contato"
          className="from-primary/90 via-primary to-primary/90 text-primary-foreground relative overflow-hidden bg-gradient-to-br py-24"
        >
          <div className="absolute inset-0 opacity-30" aria-hidden>
            <div className="h-full w-full bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.5),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.5),_transparent_50%)]" />
          </div>
          <div className="relative container mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Pronto para acelerar a transformação digital da sua empresa?
            </h2>
            <p className="text-primary-foreground/90 mt-4 text-lg">
              Fale com a Comsuporte e descubra como podemos potencializar seu
              projeto com tecnologia, estratégia e inteligência artificial.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="cursor-pointer bg-slate-900 px-6 py-6 text-base font-semibold text-slate-100 hover:bg-slate-800"
              >
                <Link href="/#contato">Agendar uma reunião</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-primary-foreground cursor-pointer border-slate-200/60 px-6 py-6 text-base font-semibold"
              >
                <Link href="mailto:contato@comsuporte.com.br">
                  contato@comsuporte.com.br
                </Link>
              </Button>
            </div>
            <p className="text-primary-foreground/80 mt-6 text-sm">
              Atendimento de segunda a sexta das 9h às 18h • Resposta em até 24
              horas úteis • Serviços para todo o Brasil
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppChat />
    </>
  );
};

export default AboutPage;
