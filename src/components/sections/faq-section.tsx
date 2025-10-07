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
      answer:
        "O prazo varia conforme a complexidade do projeto, mas geralmente entregamos landing pages otimizadas em 2 a 3 semanas. Após a análise detalhada do seu projeto, forneceremos um cronograma específico com marcos de entrega bem definidos.",
    },
    {
      question: "Vocês oferecem suporte pós-lançamento?",
      answer:
        "Sim! Oferecemos diferentes pacotes de suporte e manutenção para garantir que sua aplicação continue performando no longo prazo. Isso inclui correção de bugs, atualizações de segurança, melhorias de performance e suporte técnico dedicado.",
    },
    {
      question: "Como funciona o processo de pagamento?",
      answer:
        "Trabalhamos com pagamento parcelado conforme o avanço do projeto. Geralmente dividimos em: 30% no início, 40% na entrega do protótipo funcional e 30% na entrega final. Para projetos por hora, o faturamento é mensal. Aceitamos transferência bancária, PIX e cartão de crédito.",
    },
    {
      question: "Posso solicitar alterações durante o desenvolvimento?",
      answer:
        "Sim! Trabalhamos com metodologia ágil, o que permite flexibilidade para ajustes durante o desenvolvimento. Alterações dentro do escopo acordado são incluídas. Para mudanças significativas no escopo, fazemos uma reavaliação de prazo e custo de forma transparente.",
    },
    {
      question: "Vocês desenvolvem aplicativos mobile também?",
      answer:
        "Atualmente nosso foco é desenvolvimento web com React e Next.js. No entanto, podemos desenvolver Progressive Web Apps (PWA) que funcionam perfeitamente em dispositivos móveis, oferecendo experiência similar a apps nativos com a vantagem de não precisar de instalação.",
    },
    {
      question: "O código-fonte fica com o cliente?",
      answer:
        "Sim! Após a conclusão e pagamento integral do projeto, todo o código-fonte desenvolvido é de propriedade do cliente. Fornecemos também documentação completa e, se necessário, treinamento para sua equipe técnica.",
    },
    {
      question: "Vocês trabalham com projetos internacionais?",
      answer:
        "Sim! Temos experiência trabalhando com clientes de diferentes países. Podemos nos comunicar em português, inglês e espanhol. Utilizamos ferramentas de colaboração online que facilitam o trabalho remoto e garantem comunicação eficiente independente do fuso horário.",
    },
    {
      question: "Como garantem a segurança da aplicação?",
      answer:
        "Seguimos as melhores práticas de segurança da indústria, incluindo: validação de dados, proteção contra SQL injection e XSS, autenticação segura, criptografia de dados sensíveis, HTTPS obrigatório e auditorias de segurança regulares. Também mantemos todas as dependências atualizadas.",
    },
    {
      question: "Posso ver exemplos de projetos anteriores?",
      answer:
        "Sim! Temos um portfólio com diversos cases de sucesso que podemos compartilhar. Alguns projetos têm NDA (acordo de confidencialidade), mas temos vários exemplos públicos que demonstram nossa expertise técnica e qualidade de entrega.",
    },
    {
      question: "Qual a diferença entre projeto fechado e horas?",
      answer:
        "Projeto fechado é ideal quando o escopo está bem definido - você paga um valor fixo pela entrega completa. Horas é mais flexível, ideal para manutenção, consultorias ou quando o escopo pode evoluir - você paga apenas pelas horas efetivamente trabalhadas com relatórios detalhados.",
    },
  ];

  return (
    <section className="bg-white py-24 dark:bg-slate-900" id="faq">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl dark:text-slate-100">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-slate-700 dark:text-slate-400">
              Tire suas dúvidas sobre nossos serviços e processo de trabalho
            </p>
            <div className="mx-auto mt-6 h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border border-slate-200 bg-white/80 px-6 shadow-md shadow-slate-200/50 backdrop-blur-sm transition-colors hover:border-cyan-500 dark:border-slate-700 dark:bg-slate-800/80 dark:shadow-slate-950/50"
              >
                <AccordionTrigger className="py-6 text-left text-lg font-semibold text-slate-900 hover:text-cyan-600 dark:text-slate-100 dark:hover:text-cyan-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 leading-relaxed text-slate-700 dark:text-slate-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Bottom CTA */}
          <div className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center shadow-xl shadow-slate-200/50 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/50 dark:shadow-slate-950/50">
            <h3 className="mb-3 text-2xl font-bold text-slate-900 dark:text-slate-100">
              Ainda tem dúvidas?
            </h3>
            <p className="mb-6 text-slate-700 dark:text-slate-400">
              Estamos aqui para ajudar! Entre em contato e teremos prazer em
              responder todas as suas perguntas.
            </p>
            <button className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:from-cyan-600 hover:to-blue-700 hover:shadow-lg">
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
