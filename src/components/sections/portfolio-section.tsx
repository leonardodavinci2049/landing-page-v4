import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp } from "lucide-react";

export default function PortfolioSection() {
  const projects = [
    {
      title: "Plataforma E-commerce B2B",
      category: "E-commerce",
      description: "Sistema completo de vendas atacadistas com catálogo dinâmico, gestão de pedidos em lote e integração com ERP.",
      image: "/api/placeholder/600/400",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      results: [
        { metric: "+150%", label: "Aumento em vendas" },
        { metric: "40%", label: "Redução de custos" }
      ],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Sistema PDV para Varejo",
      category: "Sistema Corporativo",
      description: "Solução completa de ponto de venda com controle de estoque, emissão de notas fiscais e relatórios gerenciais.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Node.js", "MongoDB", "Redis"],
      results: [
        { metric: "99.9%", label: "Uptime" },
        { metric: "3x", label: "Mais rápido" }
      ],
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Landing Page de Alta Conversão",
      category: "Marketing Digital",
      description: "Página otimizada para captação de leads com A/B testing, analytics avançado e integração com CRM.",
      image: "/api/placeholder/600/400",
      tags: ["Next.js", "Tailwind", "Analytics", "Vercel"],
      results: [
        { metric: "85%", label: "Taxa de conversão" },
        { metric: "2.5s", label: "Tempo de carregamento" }
      ],
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Plataforma de Comparação de Preços",
      category: "Marketplace",
      description: "Sistema de scraping e comparação de preços com dashboard analítico e sistema de afiliação integrado.",
      image: "/api/placeholder/600/400",
      tags: ["Python", "React", "PostgreSQL", "AWS"],
      results: [
        { metric: "50k+", label: "Produtos indexados" },
        { metric: "10k", label: "Usuários ativos" }
      ],
      color: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <section className="py-24 bg-slate-50" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Projetos de Sucesso
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Nossa experiência se traduz em resultados concretos. Explore alguns dos projetos que desenvolvemos.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-6"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projects.map((project) => (
              <Card 
                key={project.title}
                className="overflow-hidden border-slate-200 hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-white/10 mb-2">{project.category}</div>
                      <Badge className={`bg-gradient-to-r ${project.color} text-white border-0`}>
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag}
                        variant="secondary"
                        className="bg-slate-100 text-slate-700"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    {project.results.map((result) => (
                      <div key={result.label} className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <TrendingUp className="w-4 h-4 text-green-600" />
                          <div className="text-2xl font-bold text-slate-900">{result.metric}</div>
                        </div>
                        <div className="text-xs text-slate-600">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button 
                    variant="outline" 
                    className="w-full group/btn border-slate-300 hover:border-cyan-500 hover:text-cyan-600"
                  >
                    Ver Detalhes do Projeto
                    <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <p className="text-lg text-slate-600 mb-6">
              Quer ver mais projetos ou discutir como podemos ajudar seu negócio?
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
            >
              Agendar Reunião
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
