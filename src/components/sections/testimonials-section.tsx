import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "CEO",
      company: "TechCommerce Brasil",
      content:
        "A plataforma e-commerce desenvolvida superou todas as nossas expectativas. O aumento de 150% nas vendas no primeiro trimestre comprova a qualidade do trabalho. Profissionalismo e expertise técnica de alto nível.",
      rating: 5,
      image: "/api/placeholder/100/100",
    },
    {
      name: "Maria Oliveira",
      role: "Diretora de Marketing",
      company: "Varejo Plus",
      content:
        "O sistema PDV transformou completamente nossa operação. A interface intuitiva facilitou o treinamento da equipe e a integração com nosso ERP foi perfeita. Recomendo fortemente!",
      rating: 5,
      image: "/api/placeholder/100/100",
    },
    {
      name: "João Santos",
      role: "Fundador",
      company: "StartupTech",
      content:
        "Precisávamos de uma landing page que convertesse e o resultado foi excepcional. A taxa de conversão de 85% fala por si. A atenção aos detalhes e o conhecimento em UX fizeram toda a diferença.",
      rating: 5,
      image: "/api/placeholder/100/100",
    },
    {
      name: "Ana Costa",
      role: "Gerente de TI",
      company: "Indústria Digital",
      content:
        "A automação de processos com N8N economizou inúmeras horas de trabalho manual. A implementação foi rápida e o suporte contínuo garante que tudo funcione perfeitamente. Excelente investimento!",
      rating: 5,
      image: "/api/placeholder/100/100",
    },
    {
      name: "Pedro Almeida",
      role: "Diretor Comercial",
      company: "Atacado Online",
      content:
        "O sistema B2B desenvolvido atende perfeitamente nossas necessidades complexas de precificação e pedidos em lote. A arquitetura escalável permite nosso crescimento sem preocupações técnicas.",
      rating: 5,
      image: "/api/placeholder/100/100",
    },
    {
      name: "Juliana Ferreira",
      role: "Product Owner",
      company: "FinTech Solutions",
      content:
        "Trabalhar com metodologia ágil e ter entregas contínuas nos deu segurança durante todo o projeto. A comunicação foi transparente e o código entregue é de altíssima qualidade. Parceria de longo prazo garantida!",
      rating: 5,
      image: "/api/placeholder/100/100",
    },
  ];

  return (
    <section className="bg-white py-24 dark:bg-slate-900" id="depoimentos">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl dark:text-slate-100">
              O que Nossos Clientes Dizem
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-slate-700 dark:text-slate-400">
              A satisfação dos nossos clientes é a nossa maior recompensa. Veja
              alguns depoimentos de quem já transformou suas ideias em realidade
              conosco.
            </p>
            <div className="mx-auto mt-6 h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
          </div>

          {/* Testimonials Grid */}
          <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="group border-slate-200 transition-all duration-300 hover:border-cyan-500 dark:border-slate-700 dark:hover:border-cyan-400"
              >
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="h-10 w-10 text-cyan-500 opacity-50 dark:text-cyan-400" />
                  </div>

                  {/* Rating */}
                  <div className="mb-4 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="mb-6 leading-relaxed text-slate-800 italic dark:text-slate-300">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 border-t border-slate-200 pt-4 dark:border-slate-700">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-lg font-bold text-white">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 transition-colors group-hover:text-cyan-600 dark:text-slate-100 dark:group-hover:text-cyan-400">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {testimonial.role} • {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-xl shadow-slate-200/50 backdrop-blur-sm md:grid-cols-4 dark:border-slate-700 dark:bg-slate-800/50 dark:shadow-slate-950/50">
            {[
              { value: "50+", label: "Clientes Satisfeitos" },
              { value: "98%", label: "Taxa de Satisfação" },
              { value: "4.9/5", label: "Avaliação Média" },
              { value: "100%", label: "Projetos Entregues" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mb-2 text-3xl font-bold text-cyan-600 md:text-4xl dark:text-cyan-400">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
