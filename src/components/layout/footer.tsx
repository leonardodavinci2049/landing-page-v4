import { Code2, Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { companyInfo } from "@/lib/env";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    servicos: [
      { label: "Desenvolvimento Web", href: "#servicos" },
      { label: "E-commerce", href: "#servicos" },
      { label: "Automação", href: "#servicos" },
      { label: "Hospedagem", href: "#servicos" }
    ],
    empresa: [
      { label: "Sobre", href: "#sobre" },
      { label: "Portfólio", href: "#portfolio" },
      { label: "Processo", href: "#processo" },
      { label: "Depoimentos", href: "#depoimentos" }
    ],
    recursos: [
      { label: "Blog", href: "#" },
      { label: "Documentação", href: "#" },
      { label: "Suporte", href: "#contato" },
      { label: "FAQ", href: "#faq" }
    ]
  };

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com" },
    { icon: Twitter, label: "Twitter", url: "https://twitter.com" }
  ];

  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center mb-6 group">
              <img 
                src="/logo.webp" 
                alt={`${companyInfo.name} Logo`}
                className="h-10 w-auto group-hover:scale-105 transition-transform"
              />
            </a>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              <strong className="text-white">{companyInfo.name}</strong> - {companyInfo.title}. 
              {companyInfo.description}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:contato@comsuporte.com.br" className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span>contato@comsuporte.com.br</span>
              </a>
              <a href="tel:+5511987654321" className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors">
                <Phone className="w-5 h-5" />
                <span>+55 (11) 98765-4321</span>
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-5 h-5" />
                <span>São Paulo, Brasil</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Serviços</h3>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Recursos</h3>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-slate-500 text-sm">
              © {currentYear} {companyInfo.name} - {companyInfo.title}. Todos os direitos reservados.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500 flex items-center justify-center transition-all hover:scale-110 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  </a>
                );
              })}
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm">
              <a href="/privacy-policy" className="text-slate-500 hover:text-cyan-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="/terms-of-service" className="text-slate-500 hover:text-cyan-400 transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
