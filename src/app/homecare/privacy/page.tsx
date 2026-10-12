import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Política de Privacidade | HomeCare" },
  description:
    "Como o HomeCare trata dados pessoais, utiliza o login Facebook e permite exercer seus direitos e excluir sua conta.",
  alternates: {
    canonical: "https://pedrorbc.com/homecare/privacy",
  },
};

export default function HomeCarePrivacyPage() {
  return (
    <>
      <header className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Política de Privacidade do HomeCare
        </h1>
        <p>
          Última atualização desta página:{" "}
          <time dateTime="2026-10-11">11/10/2026</time>. Referência: política do
          aplicativo, versão 2026-10-09.
        </p>
        <p>
          Esta política descreve o tratamento de dados pessoais pelo HomeCare,
          aplicativo para organizar casas, cuidadores, escalas e pagamentos, e
          os direitos previstos na Lei Geral de Proteção de Dados Pessoais (Lei
          nº 13.709/2018 — LGPD). Ela se refere ao aplicativo HomeCare, não às
          demais atividades do portfólio que hospeda esta página.
        </p>
      </header>

      <section aria-labelledby="responsavel">
        <h2 id="responsavel">1. Responsável e contato</h2>
        <p>
          O responsável pelo tratamento de dados do aplicativo é o desenvolvedor
          do HomeCare. Dúvidas, solicitações sobre dados pessoais e exercício de
          direitos podem ser encaminhados a{" "}
          <a href="mailto:contato@pedrorbc.com?subject=HomeCare%20-%20Privacidade">
            contato@pedrorbc.com
          </a>
          .
        </p>
      </section>

      <section aria-labelledby="dados">
        <h2 id="dados">2. Dados tratados</h2>
        <h3>Conta e autenticação</h3>
        <ul>
          <li>
            Identificador do usuário, nome de exibição, ícone ou foto de perfil,
            método de login e endereço de e-mail, quando disponível.
          </li>
          <li>
            Versão e data de aceite das políticas e escolhas de consentimento.
          </li>
        </ul>
        <h3>Informações registradas no aplicativo</h3>
        <ul>
          <li>
            Casas: nome, descrição e gerentes convidados, com nome e e-mail.
          </li>
          <li>
            Cuidadores: nome, e-mail de acesso opcional, frequência e valores de
            pagamento.
          </li>
          <li>Escalas de trabalho, histórico de pagamentos e convites.</li>
        </ul>
        <p>
          Ao cadastrar informações de outras pessoas, você deve ter uma base
          legal para esse tratamento e informá-las sobre o uso do HomeCare.
        </p>
        <h3>Uso, falhas e notificações</h3>
        <p>
          Com seu consentimento, o aplicativo coleta telas visualizadas e ações
          realizadas para estatísticas, além de informações técnicas de falhas,
          como modelo do aparelho e versão do sistema. Parâmetros de
          estatísticas são filtrados para evitar nomes, e-mails, valores e
          mensagens pessoais. O aplicativo também trata a permissão de
          notificações e agenda lembretes de pagamento no próprio aparelho.
        </p>
      </section>

      <section aria-labelledby="finalidades">
        <h2 id="finalidades">3. Finalidades e bases legais</h2>
        <ul>
          <li>
            Criar e manter sua conta e sincronizar casas, cuidadores, escalas e
            pagamentos: execução do contrato (art. 7º, V, da LGPD).
          </li>
          <li>
            Estatísticas de uso e relatórios de falhas: consentimento (art. 7º,
            I), revogável nas configurações de privacidade do aplicativo.
          </li>
          <li>
            Segurança da conta e prevenção a fraudes: legítimo interesse (art.
            7º, IX).
          </li>
          <li>
            Atendimento a obrigações legais e ordens de autoridades: cumprimento
            de obrigação legal (art. 7º, II).
          </li>
        </ul>
        <p>
          Estatísticas e relatórios de falhas são opcionais. Recusar ou revogar
          esses consentimentos não impede o uso das funcionalidades do
          aplicativo.
        </p>
      </section>

      <section aria-labelledby="facebook">
        <h2 id="facebook">4. Login com Facebook e outros provedores</h2>
        <p>
          Você pode escolher um método de autenticação disponível, como e-mail e
          senha, Google ou Facebook. O login com Facebook é opcional. A Meta
          pode retornar identidade básica, como identificador, nome, foto e
          e-mail, quando disponível; essas informações são utilizadas pelo
          Firebase para autenticação e perfil. O e-mail pode não ser fornecido
          pelo Facebook.
        </p>
        <p>
          O HomeCare não envia intencionalmente dados de casas, cuidadores,
          escalas ou pagamentos à Meta. O SDK Facebook não é utilizado pelo
          aplicativo para publicidade nem para registro automático de eventos de
          uso.
        </p>
        <p>
          Remover o HomeCare nas configurações de apps e sites do Facebook
          revoga o acesso pelo provedor, mas{" "}
          <strong>não exclui sua conta nem os dados do HomeCare</strong>.
          Consulte as{" "}
          <Link href="/homecare/data-deletion">instruções de exclusão</Link>{" "}
          para realizar esse procedimento ou solicitar ajuda se não conseguir
          entrar.
        </p>
      </section>

      <section aria-labelledby="compartilhamento">
        <h2 id="compartilhamento">5. Compartilhamento</h2>
        <p>O HomeCare não vende nem aluga seus dados pessoais.</p>
        <ul>
          <li>
            Gerentes convidados para uma casa têm acesso aos dados dessa casa.
            Cuidadores com acesso aceito podem consultar a escala e seus
            plantões.
          </li>
          <li>
            O Google Firebase fornece serviços de autenticação e banco de dados.
            Google Analytics e Firebase Crashlytics são utilizados no aplicativo
            somente com os respectivos consentimentos.
          </li>
          <li>
            Google ou Meta participam da autenticação quando você escolhe o
            respectivo login, de acordo também com as políticas desses
            provedores.
          </li>
          <li>
            Dados podem ser fornecidos a autoridades quando exigido por lei.
          </li>
        </ul>
      </section>

      <section aria-labelledby="seguranca">
        <h2 id="seguranca">6. Armazenamento e segurança</h2>
        <p>
          O acesso ao Firebase utiliza conexões criptografadas (TLS), e regras
          de acesso restringem a leitura ao perfil e às casas permitidas para
          cada conta. Campos sensíveis de cuidadores e pagamentos utilizam
          criptografia AES-256-GCM no aplicativo antes do envio, com uma chave
          por casa. Registros antigos são tratados pelo processo de migração.
        </p>
        <p>
          Essa criptografia complementa os controles de acesso; não significa
          que todos os campos sejam cifrados nem que o serviço seja inacessível
          aos administradores da infraestrutura. Informações necessárias a
          convites e acesso à escala podem ser armazenadas sem essa criptografia
          de campo. Revogar acesso não apaga retroativamente cópias ou chaves já
          obtidas por outras pessoas.
        </p>
      </section>

      <section aria-labelledby="transferencias">
        <h2 id="transferencias">7. Transferências internacionais</h2>
        <p>
          Provedores utilizados pelo HomeCare podem processar e armazenar dados
          em servidores fora do Brasil. Esse tratamento está sujeito às regras
          aplicáveis de transferência internacional da LGPD e às condições e
          garantias contratuais dos provedores. Para esclarecimentos sobre o
          tratamento de seus dados, utilize o contato desta política.
        </p>
      </section>

      <section aria-labelledby="retencao">
        <h2 id="retencao">8. Retenção e exclusão</h2>
        <p>
          Os dados são mantidos para disponibilizar a conta e as funcionalidades
          do aplicativo. Após uma exclusão concluída com sucesso, o fluxo remove
          a identidade de autenticação, o perfil, os consentimentos e as casas
          de sua propriedade com seus dados associados. Em casas de outras
          pessoas, remove sua participação e seus vínculos de acesso, sem apagar
          a casa ou todos os registros mantidos por seus responsáveis.
        </p>
        <p>
          Dados registrados por outras pessoas sobre seu trabalho podem
          permanecer sob responsabilidade delas. Backups dos provedores,
          exportações e cópias obtidas por terceiros não são declarados apagados
          imediatamente por esse fluxo. A retenção dessas cópias e da telemetria
          depende das políticas e configurações aplicáveis, além de eventuais
          obrigações legais; não há um prazo único de eliminação garantido por
          esta página.
        </p>
        <p>
          Consulte o procedimento e seus limites em{" "}
          <Link href="/homecare/data-deletion">Exclusão de conta e dados</Link>.
        </p>
      </section>

      <section aria-labelledby="direitos">
        <h2 id="direitos">9. Seus direitos e escolhas</h2>
        <p>
          Conforme as condições previstas na LGPD, você pode solicitar
          confirmação e acesso ao tratamento, correção, anonimização, bloqueio
          ou eliminação de dados, portabilidade, informações sobre
          compartilhamento e sobre a possibilidade de não consentir, além de
          revogar consentimentos e apresentar petição à Autoridade Nacional de
          Proteção de Dados (ANPD).
        </p>
        <p>
          Em <strong>Configurações → Privacidade e Dados</strong>, o HomeCare
          oferece exportação de dados, escolhas de consentimento e exclusão da
          conta. Exportações parciais ou dados indisponíveis são sinalizados
          pelo aplicativo. Outras solicitações ou dificuldades de acesso podem
          ser encaminhadas a{" "}
          <a href="mailto:contato@pedrorbc.com">contato@pedrorbc.com</a>. A
          identidade deve ser verificada de forma segura antes de ações sobre a
          conta. Não envie senhas, tokens ou chaves de criptografia.
        </p>
      </section>

      <section aria-labelledby="idade-alteracoes">
        <h2 id="idade-alteracoes">10. Público e alterações</h2>
        <p>
          O HomeCare é destinado a pessoas maiores de 18 anos e não coleta
          intencionalmente dados de crianças ou adolescentes. Se identificar
          esse tipo de informação, entre em contato para avaliação e tratamento
          da solicitação.
        </p>
        <p>
          Alterações da política do aplicativo são apresentadas no HomeCare, com
          indicação da versão e solicitação de novo aceite quando aplicável. A
          data desta página identifica sua atualização na web e não altera, por
          si só, a versão aceita no aplicativo.
        </p>
      </section>

      <section aria-labelledby="site">
        <h2 id="site">11. Sobre este site</h2>
        <p>
          Esta página é hospedada no site pedrorbc.com, que utiliza Vercel
          Analytics para estatísticas de navegação e Vercel Speed Insights para
          métricas de desempenho. Essa telemetria do site é distinta do Google
          Analytics e do Firebase Crashlytics do HomeCare; as escolhas de
          consentimento feitas no aplicativo não controlam os serviços deste
          site.
        </p>
        <p>
          Saiba mais sobre esses serviços na{" "}
          <a href="https://vercel.com/docs/analytics/privacy-policy">
            documentação de privacidade do Vercel Analytics
          </a>{" "}
          e na{" "}
          <a href="https://vercel.com/docs/speed-insights/privacy-policy">
            documentação de privacidade do Vercel Speed Insights
          </a>
          .
        </p>
      </section>
    </>
  );
}
