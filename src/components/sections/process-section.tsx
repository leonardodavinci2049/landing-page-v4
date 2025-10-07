import { Search, Palette, Code, TestTube, Rocket } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Descoberta e Planejamento",
      description: "Entendemos suas necessidades, objetivos e público-alvo para traçar a melhor estratégia.",
      details: ["Análise de requisitos", "Definição de escopo", "Planejamento de arquitetura"]
    },
    {
      number: "02",
      icon: Palette,
      title: "Design e Prototipagem",
      description: "Criamos wireframes e protótipos para visualizar a interface e a experiência do usuário.",
      details: ["Wireframes", "Protótipos interativos", "Design system"]
    },
    {
      number: "03",
      icon: Code,
      title: "Desenvolvimento Ágil",
      description: "Construímos sua aplicação com as melhores práticas, utilizando metodologias ágeis.",
      details: ["Sprints semanais", "Code review", "Entregas contínuas"]
    },
    {
      number: "04",
      icon: TestTube,
      title: "Testes e Otimização",
      description: "Realizamos testes rigorosos para garantir performance, segurança e usabilidade.",
      details: ["Testes automatizados", "Performance", "Segurança"]
    },
    {
      number: "05",
      icon: Rocket,
      title: "Deploy e Suporte",
      description: "Lançamos sua solução e oferecemos suporte contínuo para garantir o sucesso.",
      details: ["Deploy automatizado", "Monitoramento", "Suporte contínuo"]
    }
  ];

  return (
    <section className="py-24 bg-white" id="processo">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Nosso Processo
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transparência e eficiência em cada etapa do desenvolvimento
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-6"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line - Hidden on mobile */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 -translate-x-1/2"></div>

            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div 
                    key={step.number}
                    className={`relative flex flex-col lg:flex-row gap-8 items-center ${
                      isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Content Card */}
                    <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-cyan-500 hover:shadow-lg transition-all duration-300 group">
                        <div className={`flex items-start gap-4 ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-bold text-cyan-600 mb-2">{step.number}</div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                            <p className="text-slate-600 leading-relaxed mb-4">{step.description}</p>
                            <ul className={`space-y-2 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                              {step.details.map((detail) => (
                                <li key={detail} className="text-sm text-slate-500 flex items-center gap-2">
                                  <span className={`w-1.5 h-1.5 rounded-full bg-cyan-500 ${isEven ? 'lg:order-2' : ''}`}></span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Center Number Badge */}
                    <div className="hidden lg:flex flex-shrink-0 w-16 h-16 rounded-full bg-white border-4 border-cyan-500 items-center justify-center font-bold text-xl text-cyan-600 shadow-lg z-10">
                      {index + 1}
                    </div>

                    {/* Spacer for alignment */}
                    <div className="hidden lg:block flex-1"></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Pronto para começar seu projeto?
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Entre em contato e vamos transformar sua ideia em uma solução digital de sucesso.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
              Iniciar Conversa
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
