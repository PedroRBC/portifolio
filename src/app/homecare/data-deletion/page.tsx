import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Exclusão de conta e dados | HomeCare" },
  description:
    "Instruções para excluir sua conta e dados do HomeCare, inclusive contas com login Facebook, e solicitar ajuda sem acesso ao aplicativo.",
  alternates: {
    canonical: "https://pedrorbc.com/homecare/data-deletion",
  },
};

export default function HomeCareDataDeletionPage() {
  return (
    <>
      <header className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Exclusão de conta e dados do HomeCare
        </h1>
        <p>
          Última atualização: <time dateTime="2026-10-11">11/10/2026</time>.
        </p>
        <p>
          Estas instruções explicam como excluir sua conta no aplicativo
          HomeCare, inclusive quando você utiliza o login Facebook. Esta página
          é informativa: não executa exclusões e não é um callback ou uma API de
          exclusão de dados da Meta.
        </p>
      </header>

      <section aria-labelledby="procedimento">
        <h2 id="procedimento">1. Excluir pelo aplicativo</h2>
        <ol>
          <li>Abra o HomeCare e entre na conta que deseja excluir.</li>
          <li>
            Vá a{" "}
            <strong>
              Configurações → Privacidade e Dados → Excluir conta e dados
            </strong>
            . Também há a opção <strong>Excluir Conta</strong> nas
            Configurações.
          </li>
          <li>
            Leia o aviso. Se desejar guardar uma cópia, use{" "}
            <strong>Exportar meus dados</strong> antes de excluir. Uma
            exportação parcial é identificada como tal pelo aplicativo.
          </li>
          <li>
            Confirme sua identidade com um método vinculado e disponível: senha,
            Google ou Facebook. Uma conta criada somente com Facebook não
            precisa criar uma senha para essa confirmação.
          </li>
          <li>
            Confirme a exclusão no aviso final e aguarde o resultado exibido no
            aplicativo. <strong>A ação é permanente.</strong>
          </li>
        </ol>
        <p>
          Se a operação apresentar erro, ela não deve ser considerada concluída.
          Problemas de acesso a casas próprias podem exigir correção antes de
          apagar a conta. Nesse caso, utilize o contato abaixo para solicitar
          ajuda.
        </p>
      </section>

      <section aria-labelledby="dados-excluidos">
        <h2 id="dados-excluidos">2. O que o fluxo exclui</h2>
        <p>Quando a operação termina com sucesso, o HomeCare exclui:</p>
        <ul>
          <li>
            A identidade de autenticação, o perfil da conta e seus
            consentimentos.
          </li>
          <li>
            As casas de sua propriedade e os dados associados, incluindo
            cuidadores, escalas, pagamentos e as chaves de criptografia dessas
            casas.
          </li>
          <li>
            Sua participação e seus registros de acesso em casas de outras
            pessoas, além dos vínculos de acesso à escala associados à conta.
          </li>
          <li>
            Os convites abrangidos pela identidade da conta. O tratamento de
            convites por e-mail depende de um endereço disponível e verificado.
          </li>
          <li>Os dados pessoais locais tratados pelo fluxo de encerramento.</li>
        </ul>
      </section>

      <section aria-labelledby="limites">
        <h2 id="limites">3. Dados de outras pessoas e cópias</h2>
        <p>
          Excluir sua conta{" "}
          <strong>não exclui casas de outros proprietários</strong>. Registros
          que outras pessoas mantêm sobre seu trabalho como cuidador podem
          permanecer sob responsabilidade delas; remover seu acesso à escala não
          apaga esses registros. Solicitações sobre esses dados podem ser
          encaminhadas ao responsável pela casa ou ao contato do HomeCare.
        </p>
        <p>
          Cópias de segurança e dados mantidos pelos provedores seguem as
          políticas de retenção aplicáveis. A exclusão no banco ativo não
          comprova apagamento imediato de backups, cópias exportadas ou arquivos
          e chaves que outras pessoas já tenham obtido. Para esclarecer o
          tratamento de suas informações, entre em contato.
        </p>
      </section>

      <section aria-labelledby="facebook">
        <h2 id="facebook">4. Facebook e revogação do login</h2>
        <p>
          Remover o HomeCare nas configurações de apps e sites do Facebook
          revoga o acesso pelo provedor, mas{" "}
          <strong>
            não substitui a exclusão da conta e dos dados no HomeCare
          </strong>
          .
        </p>
        <p>
          Se já revogou o login e não consegue entrar por outro método
          vinculado, solicite ajuda pelo contato abaixo. Não é necessário enviar
          um token do Facebook ou criar uma nova conta para fazer uma
          solicitação.
        </p>
      </section>

      <section aria-labelledby="contato">
        <h2 id="contato">5. Solicitar ajuda sem acesso ao aplicativo</h2>
        <p>
          Envie uma solicitação para{" "}
          <a href="mailto:contato@pedrorbc.com?subject=HomeCare%20-%20Exclus%C3%A3o%20de%20conta%20e%20dados">
            contato@pedrorbc.com
          </a>{" "}
          com o assunto <strong>HomeCare — Exclusão de conta e dados</strong>.
          Informe somente o necessário para identificar a conta e o problema;
          contas com login Facebook podem não ter um e-mail disponível.
        </p>
        <p>
          A identidade deve ser verificada de forma segura antes de qualquer
          exclusão.{" "}
          <strong>
            Nunca envie sua senha, tokens de Facebook ou Google, documentos
            sensíveis ou chaves de criptografia por e-mail.
          </strong>{" "}
          O tratamento da solicitação observa as obrigações legais aplicáveis,
          sem promessa de exclusão antes dessa verificação.
        </p>
        <p>
          Consulte também a{" "}
          <Link href="/homecare/privacy">
            Política de Privacidade do HomeCare
          </Link>
          , incluindo seus direitos e as informações sobre a telemetria deste
          site.
        </p>
      </section>
    </>
  );
}
