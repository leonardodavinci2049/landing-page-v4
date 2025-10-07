import { companyInfo } from "@/lib/env";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata = {
  title: `Termos de Uso | ${companyInfo.name}`,
  description: `Termos de uso dos serviços da ${companyInfo.name}.`,
};

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600">
            Termos de Uso
          </h1>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">1. Aceitação dos Termos</h2>
            <p className="mb-4 leading-relaxed">
              Bem-vindo(a) aos serviços da {companyInfo.name}. Ao acessar ou usar nosso website e serviços, você concorda em cumprir e estar vinculado(a) a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, você não poderá acessar o serviço.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">2. Serviços Oferecidos</h2>
            <p className="mb-4 leading-relaxed">
              A {companyInfo.name} oferece uma gama de serviços técnicos especializados em informática, incluindo, mas não se limitando a: desenvolvimento web com IA, soluções de e-commerce, criação de landing pages, automação de processos, serviços de hospedagem e infraestrutura, e suporte técnico de informática. Detalhes específicos de cada serviço são fornecidos em nosso website.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">3. Uso do Serviço</h2>
            <h3 className="text-xl font-semibold mb-3">3.1. Elegibilidade</h3>
            <p className="mb-4 leading-relaxed">
              Ao usar nossos serviços, você declara que tem pelo menos 18 anos de idade ou que possui consentimento legal de um responsável para usar o serviço.
            </p>
            <h3 className="text-xl font-semibold mb-3">3.2. Conduta do Usuário</h3>
            <p className="mb-4 leading-relaxed">
              Você concorda em usar nossos serviços apenas para fins lícitos e de maneira que não infrinja os direitos de, restrinja ou iniba o uso e o desfrute do serviço por qualquer terceiro. Condutas proibidas incluem assediar ou causar angústia ou inconveniência a qualquer pessoa, transmitir conteúdo obsceno ou ofensivo ou interromper o fluxo normal de diálogo dentro do nosso serviço.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">4. Propriedade Intelectual</h2>
            <p className="mb-4 leading-relaxed">
              Todo o conteúdo presente neste website, incluindo textos, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais, compilações de dados e software, é propriedade da {companyInfo.name} ou de seus fornecedores de conteúdo e é protegido pelas leis de direitos autorais nacionais e internacionais.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">5. Limitação de Responsabilidade</h2>
            <p className="mb-4 leading-relaxed">
              A {companyInfo.name} não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais, consequenciais ou exemplares, incluindo, mas não se limitando a, danos por perda de lucros, boa vontade, uso, dados ou outras perdas intangíveis (mesmo que a {companyInfo.name} tenha sido avisada da possibilidade de tais danos), resultantes de:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>O uso ou a incapacidade de usar o serviço;</li>
              <li>O custo de aquisição de bens e serviços substitutos resultantes de quaisquer bens, dados, informações ou serviços comprados ou obtidos ou mensagens recebidas ou transações realizadas através ou a partir do serviço;</li>
              <li>Acesso não autorizado ou alteração de suas transmissões ou dados;</li>
              <li>Declarações ou conduta de qualquer terceiro no serviço;</li>
              <li>Qualquer outro assunto relacionado ao serviço.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">6. Indenização</h2>
            <p className="mb-4 leading-relaxed">
              Você concorda em indenizar e isentar a {companyInfo.name} e suas subsidiárias, afiliadas, diretores, agentes, funcionários, parceiros e licenciadores de qualquer reivindicação ou demanda, incluindo honorários advocatícios razoáveis, feita por qualquer terceiro devido ou decorrente de seu uso do serviço, sua violação destes Termos de Uso, ou sua violação de quaisquer direitos de outra pessoa ou entidade.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">7. Alterações nos Termos de Uso</h2>
            <p className="mb-4 leading-relaxed">
              Reservamo-nos o direito de revisar estes Termos de Uso a qualquer momento, publicando as alterações em nosso website. Seu uso continuado do serviço após a publicação de quaisquer alterações constitui sua aceitação dessas alterações.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">8. Lei Aplicável</h2>
            <p className="mb-4 leading-relaxed">
              Estes Termos de Uso serão regidos e interpretados de acordo com as leis do Brasil, sem considerar seus conflitos de disposições legais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Contato</h2>
            <p className="mb-4 leading-relaxed">
              Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Por e-mail: contato@comsuporte.com.br</li>
              <li>Pelo telefone: +55 (11) 98765-4321</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

