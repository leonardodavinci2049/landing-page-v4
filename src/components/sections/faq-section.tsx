import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "Qual o prazo de entrega de uma landing page?",
      answer: "O prazo varia conforme a complexidade do projeto, mas geralmente entregamos landing pages otimizadas em 2 a 3 semanas. Após a análise detalhada do seu projeto, forneceremos um cronograma específico com marcos de entrega bem definidos."
    },
    {
      question: "Vocês oferecem suporte pós-lançamento?",
      answer: "Sim! Oferecemos diferentes pacotes de suporte e manutenção para garantir que sua aplicação continue performando no longo prazo. Isso inclui correção de bugs, atualizações de segurança, melhorias de performance e suporte técnico dedicado."
    },
    {
      question: "Como funciona o processo de pagamento?",
      answer: "Trabalhamos com pagamento parcelado conforme o avanço do projeto. Geralmente dividimos em: 30% no início, 40% na entrega do protótipo funcional e 30% na entrega final. Para projetos por hora, o faturamento é mensal. Aceitamos transferência bancária, PIX e cartão de crédito."
    },
    {
      question: "Posso solicitar alterações durante o desenvolvimento?",
      answer: "Sim! Trabalhamos com metodologia ágil, o que permite flexibilidade para ajustes durante o desenvolvimento. Alterações dentro do escopo acordado são incluídas. Para mudanças significativas no escopo, fazemos uma reavaliação de prazo e custo de forma transparente."
    },
    {
      question: "Vocês desenvolvem aplicativos mobile também?",
      answer: "Atualmente nosso foco é desenvolvimento web com React e Next.js. No entanto, podemos desenvolver Progressive Web Apps (PWA) que funcionam perfeitamente em dispositivos móveis, oferecendo experiência similar a apps nativos com a vantagem de não precisar de instalação."
    },
    {
      question: "O código-fonte fica com o cliente?",
      answer: "Sim! Após a conclusão e pagamento integral do projeto, todo o código-fonte desenvolvido é de propriedade do cliente. Fornecemos também documentação completa e, se necessário, treinamento para sua equipe técnica."
    },
    {
      question: "Vocês trabalham com projetos internacionais?",
      answer: "Sim! Temos experiência trabalhando com clientes de diferentes países. Podemos nos comunicar em português, inglês e espanhol. Utilizamos ferramentas de colaboração online que facilitam o trabalho remoto e garantem comunicação eficiente independente do fuso horário."
    },
    {
      question: "Como garantem a segurança da aplicação?",
      answer: "Seguimos as melhores práticas de segurança da indústria, incluindo: validação de dados, proteção contra SQL injection e XSS, autenticação segura, criptografia de dados sensíveis, HTTPS obrigatório e auditorias de segurança regulares. Também mantemos todas as dependências atualizadas."
    },
    {
      question: "Posso ver exemplos de projetos anteriores?",
      answer: "Sim! Temos um portfólio com diversos cases de sucesso que podemos compartilhar. Alguns projetos têm NDA (acordo de confidencialidade), mas temos vários exemplos públicos que demonstram nossa expertise técnica e qualidade de entrega."
    },
    {
      question: "Qual a diferença entre projeto fechado e horas?",
      answer: "Projeto fechado é ideal quando o escopo está bem definido - você paga um valor fixo pela entrega completa. Horas é mais flexível, ideal para manutenção, consultorias ou quando o escopo pode evoluir - você paga apenas pelas horas efetivamente trabalhadas com relatórios detalhados."
    }
  ];

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-slate-600">
              Tire suas dúvidas sobre nossos serviços e processo de trabalho
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-6"></div>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-slate-200 rounded-lg px-6 hover:border-cyan-500 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-cyan-600 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Bottom CTA */}
          <div className="mt-16 text-center bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Ainda tem dúvidas?
            </h3>
            <p className="text-slate-600 mb-6">
              Estamos aqui para ajudar! Entre em contato e teremos prazer em responder todas as suas perguntas.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg">
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
