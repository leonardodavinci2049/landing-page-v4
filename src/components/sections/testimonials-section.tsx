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
    <section className="py-24 bg-white" id="depoimentos">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              O que Nossos Clientes Dizem
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A satisfação dos nossos clientes é a nossa maior recompensa. Veja
              alguns depoimentos de quem já transformou suas ideias em realidade
              conosco.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-6"></div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="border-slate-200 hover:border-cyan-500 hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-10 h-10 text-cyan-500 opacity-50" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-slate-700 leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 group-hover:text-cyan-600 transition-colors">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-slate-600">
                        {testimonial.role} • {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-slate-50 rounded-2xl border border-slate-200">
            {[
              { value: "50+", label: "Clientes Satisfeitos" },
              { value: "98%", label: "Taxa de Satisfação" },
              { value: "4.9/5", label: "Avaliação Média" },
              { value: "100%", label: "Projetos Entregues" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
