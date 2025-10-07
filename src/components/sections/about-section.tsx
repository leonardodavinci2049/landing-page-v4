import { CheckCircle2, Rocket, Shield, TrendingUp, Users } from "lucide-react";

export default function AboutSection() {
  const differentials = [
    {
      icon: Rocket,
      title: "Tecnologia de Ponta",
      description: "Utilizamos as ferramentas mais modernas do mercado para resultados superiores."
    },
    {
      icon: Shield,
      title: "Soluções Completas",
      description: "Do conceito à automação, cuidamos de todo o ciclo de desenvolvimento."
    },
    {
      icon: TrendingUp,
      title: "Experiência Comprovada",
      description: "Anos de experiência em e-commerce e sistemas corporativos complexos."
    },
    {
      icon: Users,
      title: "Orientado a Resultados",
      description: "Foco no sucesso do cliente e no impacto real para o negócio."
    }
  ];

  return (
    <section className="py-24 bg-white" id="sobre">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Sua Parceria Estratégica em Desenvolvimento Web
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-6"></div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Text */}
            <div>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Com anos de experiência em desenvolvimento Full-Stack, sou especialista em criar 
                <strong className="text-slate-900"> aplicações web robustas e escaláveis</strong> utilizando 
                as tecnologias mais modernas do mercado, como React, Next.js e TypeScript.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Meu foco é entregar soluções que não apenas atendam, mas <strong className="text-slate-900">superem 
                as expectativas do seu negócio</strong>, garantindo performance, segurança e uma experiência 
                de usuário impecável.
              </p>

              {/* Key Points */}
              <div className="space-y-3">
                {[
                  'Arquitetura escalável e manutenível',
                  'Código limpo e bem documentado',
                  'Metodologias ágeis de desenvolvimento',
                  'Comunicação transparente e constante'
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image/Visual */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-8 border border-slate-200">
                <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 mb-6">
                      <Rocket className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">5+ Anos</h3>
                    <p className="text-slate-400">de Experiência</p>
                  </div>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 border border-slate-200">
                <div className="text-3xl font-bold text-cyan-600">98%</div>
                <div className="text-sm text-slate-600">Taxa de Satisfação</div>
              </div>
            </div>
          </div>

          {/* Differentials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.title}
                  className="p-6 rounded-xl border border-slate-200 hover:border-cyan-500 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
