import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      title: "E-mail",
      value: "contato@devfullstack.com.br",
      link: "mailto:contato@devfullstack.com.br"
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "+55 (11) 98765-4321",
      link: "tel:+5511987654321"
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "São Paulo, Brasil",
      link: null
    }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com" },
    { icon: Twitter, label: "Twitter", url: "https://twitter.com" }
  ];

  return (
    <section className="py-24 bg-slate-900" id="contato">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Vamos Construir Algo Incrível Juntos!
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Pronto para levar seu negócio ao próximo nível? Preencha o formulário abaixo ou entre em contato diretamente.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Nome Completo *
                    </label>
                    <Input 
                      id="name"
                      type="text"
                      placeholder="Seu nome"
                      className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      E-mail *
                    </label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                      Telefone
                    </label>
                    <Input 
                      id="phone"
                      type="tel"
                      placeholder="(11) 98765-4321"
                      className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                      Assunto *
                    </label>
                    <Input 
                      id="subject"
                      type="text"
                      placeholder="Sobre o que você quer falar?"
                      className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Mensagem *
                    </label>
                    <Textarea 
                      id="message"
                      placeholder="Descreva seu projeto ou necessidade..."
                      rows={6}
                      className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500 resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                  >
                    Enviar Mensagem
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <Card 
                      key={info.title}
                      className="bg-slate-800 border-slate-700 hover:border-cyan-500 transition-colors group"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-sm text-slate-400 mb-1">{info.title}</div>
                            {info.link ? (
                              <a 
                                href={info.link}
                                className="text-white font-medium hover:text-cyan-400 transition-colors"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <div className="text-white font-medium">{info.value}</div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Social Links */}
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-white font-semibold mb-4">Redes Sociais</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-700 hover:border-cyan-500 flex items-center justify-center transition-all hover:scale-110 group"
                          aria-label={social.label}
                        >
                          <Icon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="bg-gradient-to-br from-cyan-500 to-blue-600 border-0">
                <CardContent className="p-6">
                  <h3 className="text-white font-bold text-lg mb-2">
                    Disponibilidade
                  </h3>
                  <p className="text-white/90">
                    Respondemos em até 24 horas úteis. Para urgências, entre em contato via WhatsApp.
                  </p>
                </CardContent>
              </Card>

              {/* Working Hours */}
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-white font-semibold mb-4">Horário de Atendimento</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Segunda - Sexta</span>
                      <span className="text-white">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Sábado</span>
                      <span className="text-white">9:00 - 13:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Domingo</span>
                      <span className="text-slate-500">Fechado</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
