export default function TechStackSection() {
  const technologies = [
    {
      category: "Frontend",
      items: [
        { name: "React", description: "Biblioteca para interfaces interativas" },
        { name: "Next.js", description: "Framework React para produção" },
        { name: "TypeScript", description: "JavaScript com tipagem estática" },
        { name: "Tailwind CSS", description: "Framework CSS utilitário" },
        { name: "Shadcn/UI", description: "Componentes UI modernos" }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", description: "Runtime JavaScript server-side" },
        { name: "Express.js", description: "Framework web minimalista" },
        { name: "NestJS", description: "Framework Node.js escalável" },
        { name: "Python", description: "Linguagem versátil e poderosa" }
      ]
    },
    {
      category: "Banco de Dados",
      items: [
        { name: "PostgreSQL", description: "Banco relacional robusto" },
        { name: "MongoDB", description: "Banco NoSQL flexível" },
        { name: "Redis", description: "Cache e message broker" },
        { name: "Prisma", description: "ORM moderno para Node.js" }
      ]
    },
    {
      category: "DevOps & Cloud",
      items: [
        { name: "AWS", description: "Serviços cloud escaláveis" },
        { name: "Vercel", description: "Deploy otimizado para Next.js" },
        { name: "Docker", description: "Containerização de aplicações" },
        { name: "GitHub Actions", description: "CI/CD automatizado" }
      ]
    },
    {
      category: "Ferramentas",
      items: [
        { name: "Git", description: "Controle de versão" },
        { name: "Figma", description: "Design e prototipagem" },
        { name: "N8N", description: "Automação de workflows" },
        { name: "Postman", description: "Testes de API" }
      ]
    }
  ];

  return (
    <section className="py-24 bg-slate-900" id="tecnologias">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nossa Stack Tecnológica
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Trabalhamos com as tecnologias mais avançadas e eficientes do mercado para garantir 
              que sua aplicação seja robusta, escalável e preparada para o futuro.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-6"></div>
          </div>

          {/* Technologies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech) => (
              <div 
                key={tech.category}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-500 transition-all duration-300 group"
              >
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors">
                  {tech.category}
                </h3>
                <div className="space-y-4">
                  {tech.items.map((item) => (
                    <div 
                      key={item.name}
                      className="flex items-start gap-3 group/item"
                    >
                      <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform"></div>
                      <div>
                        <div className="text-white font-semibold group-hover/item:text-cyan-400 transition-colors">
                          {item.name}
                        </div>
                        <div className="text-sm text-slate-400">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "20+", label: "Tecnologias Dominadas" },
              { value: "100%", label: "Código Moderno" },
              { value: "99.9%", label: "Uptime Garantido" },
              { value: "24/7", label: "Suporte Técnico" }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-16 text-center">
            <p className="text-slate-400 mb-6">Sempre atualizados com as últimas tendências e melhores práticas</p>
            <div className="flex flex-wrap justify-center gap-4">
              {['AWS Certified', 'Google Cloud', 'React Expert', 'Node.js Professional'].map((cert) => (
                <div 
                  key={cert}
                  className="px-6 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:border-cyan-500 hover:text-cyan-400 transition-all"
                >
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
