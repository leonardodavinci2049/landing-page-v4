import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp } from "lucide-react";

export default function PortfolioSection() {
  const projects = [
    {
      title: "Plataforma E-commerce B2B/B2C",
      category: "E-commerce",
      description:
        "Sistema completo de vendas atacadistas e Varejistas com integração de estoque, pagamentos e dashboard admin catálogo dinâmico, gestão de pedidos em lote e integração com ERP.",
      image: "/api/placeholder/600/400",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      results: [
        { metric: "+150%", label: "Aumento em vendas" },
        { metric: "40%", label: "Redução de custos" },
      ],
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "Sistema ERP/PDV para Lojistas",
      category: "Sistema ERP",
      description:
        "Solução completa de ponto de venda com controle de estoque, emissão de notas fiscais e relatórios gerenciais.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Node.js", "MongoDB", "Redis"],
      results: [
        { metric: "99.9%", label: "Uptime" },
        { metric: "3x", label: "Mais rápido" },
      ],
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Landing Page de Alta Conversão",
      category: "Landing Page",
      description:
        "Página otimizada para captação de leads com A/B testing, analytics avançado e integração com CRM.",
      image: "/api/placeholder/600/400",
      tags: ["Next.js", "Tailwind", "Analytics", "Vercel"],
      results: [
        { metric: "85%", label: "Taxa de conversão" },
        { metric: "2.5s", label: "Tempo de carregamento" },
      ],
      color: "from-orange-500 to-red-600",
    },
    {
      title: "Assistência Técnica em Informática",
      category: "Serviços Técnicos",
      description:
        "Suporte técnico especializado com diagnóstico assistido por IA, montagem e conserto de computadores, instalação de redes e configuração de software para empresas e residências.",
      image: "/api/placeholder/600/400",
      tags: ["Diagnóstico IA", "Redes", "Hardware", "Software"],
      results: [
        { metric: "98%", label: "Satisfação" },
        { metric: "24h", label: "Tempo médio" },
      ],
      color: "from-yellow-500 to-amber-600",
    },
  ];

  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-950" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl dark:text-slate-100">
              Projetos de Sucesso
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-slate-700 dark:text-slate-400">
              Nossa experiência se traduz em resultados concretos. Explore
              alguns dos projetos que desenvolvemos.
            </p>
            <div className="mx-auto mt-6 h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
          </div>

          {/* Projects Grid */}
          <div className="mb-12 grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="group overflow-hidden border-slate-200 transition-all duration-300 hover:border-cyan-500 dark:border-slate-700 dark:hover:border-cyan-400"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-900 dark:to-black">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 transition-opacity group-hover:opacity-30`}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="mb-2 text-6xl font-bold text-white/10">
                        {project.category}
                      </div>
                      <Badge
                        className={`bg-gradient-to-r ${project.color} border-0 text-white`}
                      >
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Title */}
                  <h3 className="mb-3 text-2xl font-bold text-slate-900 transition-colors group-hover:text-cyan-600 dark:text-slate-100 dark:group-hover:text-cyan-400">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-4 leading-relaxed text-slate-700 dark:text-slate-300">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="mb-6 grid grid-cols-2 gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4 shadow-md shadow-slate-200/50 dark:border-slate-700 dark:bg-slate-900/50 dark:shadow-slate-950/50">
                    {project.results.map((result) => (
                      <div key={result.label} className="text-center">
                        <div className="mb-1 flex items-center justify-center gap-1">
                          <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
                          <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                            {result.metric}
                          </div>
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    variant="outline"
                    className="group/btn w-full border-slate-300 hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-600 dark:hover:text-cyan-400"
                  >
                    Ver Detalhes do Projeto
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <p className="mb-6 text-lg text-slate-700 dark:text-slate-400">
              Quer ver mais projetos ou discutir como podemos ajudar seu
              negócio?
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
            >
              Agendar Reunião
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
