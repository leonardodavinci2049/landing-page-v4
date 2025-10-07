import { companyInfo } from "@/lib/env";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata = {
  title: `Política de Privacidade | ${companyInfo.name}`,
  description: `Política de privacidade da ${companyInfo.name}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 py-24 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="mb-12 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl">
            Política de Privacidade
          </h1>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">1. Introdução</h2>
            <p className="mb-4 leading-relaxed text-slate-800 dark:text-slate-300">
              A {companyInfo.name} (&ldquo;nós&rdquo;, &ldquo;nosso&rdquo;,
              &ldquo;nossa&rdquo;) está comprometida em proteger a privacidade
              dos dados de seus usuários e clientes. Esta Política de
              Privacidade descreve como coletamos, usamos, processamos e
              divulgamos suas informações, incluindo dados pessoais, em conexão
              com seu acesso e uso de nossos serviços e website.
            </p>
            <p className="mb-4 leading-relaxed text-slate-800 dark:text-slate-300">
              Ao utilizar nossos serviços, você concorda com a coleta e uso de
              informações de acordo com esta política.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">
              2. Informações que Coletamos
            </h2>
            <p className="mb-4 leading-relaxed text-slate-800 dark:text-slate-300">
              Coletamos diferentes tipos de informações para diversas
              finalidades, a fim de fornecer e melhorar nossos serviços para
              você.
            </p>
            <h3 className="mb-3 text-xl font-semibold">2.1. Dados Pessoais</h3>
            <p className="mb-4 leading-relaxed text-slate-800 dark:text-slate-300">
              Ao utilizar nossos serviços, podemos solicitar que você nos
              forneça certas informações de identificação pessoal que podem ser
              usadas para contatá-lo ou identificá-lo (&ldquo;Dados
              Pessoais&rdquo;). As informações de identificação pessoal podem
              incluir, mas não se limitam a:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2">
              <li>Endereço de e-mail</li>
              <li>Nome e sobrenome</li>
              <li>Número de telefone</li>
              <li>Endereço, estado, província, CEP, cidade</li>
              <li>Cookies e Dados de Uso</li>
            </ul>
            <h3 className="mb-3 text-xl font-semibold">2.2. Dados de Uso</h3>
            <p className="mb-4 leading-relaxed text-slate-800 dark:text-slate-300">
              Também podemos coletar informações sobre como o serviço é acessado
              e usado (&ldquo;Dados de Uso&rdquo;). Esses Dados de Uso podem
              incluir informações como o endereço de protocolo de internet do
              seu computador (por exemplo, endereço IP), tipo de navegador,
              versão do navegador, as páginas do nosso serviço que você visita,
              a hora e a data da sua visita, o tempo gasto nessas páginas,
              identificadores exclusivos de dispositivos e outros dados de
              diagnóstico.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">3. Uso dos Dados</h2>
            <p className="mb-4 leading-relaxed text-slate-800 dark:text-slate-300">
              A {companyInfo.name} utiliza os dados coletados para diversas
              finalidades:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2">
              <li>Para fornecer e manter nosso serviço</li>
              <li>Para notificá-lo sobre alterações em nosso serviço</li>
              <li>
                Para permitir que você participe de recursos interativos de
                nosso serviço quando você optar por fazê-lo
              </li>
              <li>Para fornecer suporte ao cliente</li>
              <li>
                Para coletar análises ou informações valiosas para que possamos
                melhorar nosso serviço
              </li>
              <li>Para monitorar o uso do nosso serviço</li>
              <li>Para detectar, prevenir e resolver problemas técnicos</li>
              <li>
                Para fornecer notícias, ofertas especiais e informações gerais
                sobre outros bens, serviços e eventos que oferecemos e que são
                semelhantes aos que você já comprou ou perguntou, a menos que
                você tenha optado por não receber tais informações.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">
              4. Transferência de Dados
            </h2>
            <p className="mb-4 leading-relaxed text-slate-800 dark:text-slate-300">
              Suas informações, incluindo Dados Pessoais, podem ser transferidas
              para — e mantidas em — computadores localizados fora do seu
              estado, província, país ou outra jurisdição governamental onde as
              leis de proteção de dados podem ser diferentes das da sua
              jurisdição.
            </p>
            <p className="mb-4 leading-relaxed text-slate-800 dark:text-slate-300">
              Se você estiver localizado fora do Brasil e optar por nos fornecer
              informações, observe que transferimos os dados, incluindo Dados
              Pessoais, para o Brasil e os processamos lá. Seu consentimento a
              esta Política de Privacidade, seguido do envio de tais
              informações, representa sua concordância com essa transferência.
            </p>
            <p className="mb-4 leading-relaxed text-slate-800 dark:text-slate-300">
              A {companyInfo.name} tomará todas as medidas razoavelmente
              necessárias para garantir que seus dados sejam tratados com
              segurança e de acordo com esta Política de Privacidade e nenhuma
              transferência de seus Dados Pessoais ocorrerá para uma organização
              ou um país, a menos que haja controles adequados em vigor,
              incluindo a segurança de seus dados e outras informações pessoais.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">
              5. Divulgação de Dados
            </h2>
            <h3 className="mb-3 text-xl font-semibold">
              5.1. Requisitos Legais
            </h3>
            <p className="mb-4 leading-relaxed text-slate-800 dark:text-slate-300">
              A {companyInfo.name} pode divulgar seus Dados Pessoais de boa fé,
              acreditando que tal ação é necessária para:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2">
              <li>Cumprir uma obrigação legal</li>
              <li>
                Proteger e defender os direitos ou propriedade da{" "}
                {companyInfo.name}
              </li>
              <li>
                Prevenir ou investigar possíveis irregularidades relacionadas ao
                Serviço
              </li>
              <li>
                Proteger a segurança pessoal dos usuários do Serviço ou do
                público
              </li>
              <li>Proteger contra responsabilidade legal</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">
              6. Segurança dos Dados
            </h2>
            <p className="mb-4 leading-relaxed text-slate-800 dark:text-slate-300">
              A segurança dos seus dados é importante para nós, mas lembre-se
              que nenhum método de transmissão pela Internet ou método de
              armazenamento eletrônico é 100% seguro. Embora nos esforcemos para
              usar meios comercialmente aceitáveis para proteger seus Dados
              Pessoais, não podemos garantir sua segurança absoluta.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">
              7. Seus Direitos de Proteção de Dados (LGPD)
            </h2>
            <p className="mb-4 leading-relaxed text-slate-800 dark:text-slate-300">
              De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem
              certos direitos de proteção de dados. A {companyInfo.name} visa
              tomar medidas razoáveis para permitir que você corrija, altere,
              exclua ou limite o uso de seus Dados Pessoais.
            </p>
            <p className="mb-4 leading-relaxed text-slate-800 dark:text-slate-300">
              Se você deseja ser informado sobre quais Dados Pessoais mantemos
              sobre você e se deseja que eles sejam removidos de nossos
              sistemas, entre em contato conosco.
            </p>
            <p className="mb-4 leading-relaxed text-slate-800 dark:text-slate-300">
              Em certas circunstâncias, você tem os seguintes direitos de
              proteção de dados:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2">
              <li>
                O direito de acessar, atualizar ou excluir as informações que
                temos sobre você.
              </li>
              <li>O direito de retificação.</li>
              <li>O direito de se opor.</li>
              <li>O direito de restrição.</li>
              <li>O direito à portabilidade de dados.</li>
              <li>O direito de retirar o consentimento.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">
              8. Provedores de Serviço
            </h2>
            <p className="mb-4 leading-relaxed text-slate-800 dark:text-slate-300">
              Podemos empregar empresas e indivíduos terceirizados para
              facilitar nosso serviço (&ldquo;Provedores de Serviço&rdquo;),
              para fornecer o serviço em nosso nome, para executar serviços
              relacionados ao serviço ou para nos ajudar a analisar como nosso
              serviço é usado.
            </p>
            <p className="mb-4 leading-relaxed text-slate-800 dark:text-slate-300">
              Esses terceiros têm acesso aos seus Dados Pessoais apenas para
              realizar essas tarefas em nosso nome e são obrigados a não
              divulgá-los ou usá-los para qualquer outra finalidade.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">
              9. Links para Outros Sites
            </h2>
            <p className="mb-4 leading-relaxed text-slate-800 dark:text-slate-300">
              Nosso serviço pode conter links para outros sites que não são
              operados por nós. Se você clicar em um link de terceiros, você
              será direcionado para o site desse terceiro. Aconselhamos
              vivamente que você revise a Política de Privacidade de todos os
              sites que você visita.
            </p>
            <p className="mb-4 leading-relaxed text-slate-800 dark:text-slate-300">
              Não temos controle e não assumimos responsabilidade pelo conteúdo,
              políticas de privacidade ou práticas de quaisquer sites ou
              serviços de terceiros.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">
              10. Privacidade de Crianças
            </h2>
            <p className="mb-4 leading-relaxed text-slate-800 dark:text-slate-300">
              Nosso serviço não se destina a menores de 18 anos
              (&ldquo;Crianças&rdquo;). Não coletamos intencionalmente
              informações de identificação pessoal de menores de 18 anos. Se
              você é pai/mãe ou responsável e sabe que seu filho nos forneceu
              Dados Pessoais, entre em contato conosco. Se tomarmos conhecimento
              de que coletamos Dados Pessoais de crianças sem verificação do
              consentimento dos pais, tomaremos medidas para remover essas
              informações de nossos servidores.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">
              11. Alterações a Esta Política de Privacidade
            </h2>
            <p className="mb-4 leading-relaxed text-slate-800 dark:text-slate-300">
              Podemos atualizar nossa Política de Privacidade de tempos em
              tempos. Iremos notificá-lo sobre quaisquer alterações, publicando
              a nova Política de Privacidade nesta página.
            </p>
            <p className="mb-4 leading-relaxed text-slate-800 dark:text-slate-300">
              Aconselhamos que você revise esta Política de Privacidade
              periodicamente para quaisquer alterações. As alterações a esta
              Política de Privacidade são efetivas quando são publicadas nesta
              página.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">12. Contato</h2>
            <p className="mb-4 leading-relaxed text-slate-800 dark:text-slate-300">
              Se você tiver alguma dúvida sobre esta Política de Privacidade,
              entre em contato conosco:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2">
              <li>Por e-mail: {companyInfo.email}</li>
              <li>Pelo telefone: {companyInfo.phone}</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
