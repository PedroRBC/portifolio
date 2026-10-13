<p align="center">
  <img src="https://github.com/pedrorbc.png" alt="Profile Image" width="100" />
</p>

# Pedro Rbc — portfólio

Portfólio editorial em português brasileiro, construído com Next.js e hospedado na [Vercel](https://vercel.com). Apresenta perfil, habilidades, projetos e formas de contato. As rotas atuais incluem `/`, `/about`, `/projects`, `/maintenance`, `/homecare/privacy` e `/homecare/data-deletion`.

## Projetos do GitHub

A página `/projects` usa `github-automated-repos` 1.4 e o hook `useGitHubAutomatedRepos("PedroRBC", "portfolio")` para listar os repositórios em destaque. O tópico `portfolio` nos tópicos do repositório controla essa seleção; tópicos de tecnologia podem ser usados para exibir as stacks.

A listagem pública geral é obtida separadamente no servidor, com cache de uma hora, páginas de 100 itens e limite de segurança de 10 páginas. Uma falha de paginação não apresenta dados parciais como completos. O explorador permite buscar por nome, descrição, linguagem ou tópico, filtrar por tópico de tecnologia e ordenar por atualização, nome ou estrelas.

Para incluir uma imagem nos destaques, adicione um arquivo com nome em minúsculas contendo `banner`, como `public/banner.png`, diretamente na pasta `public` do repositório. PNG, JPG, JPEG e SVG são suportados pela biblioteca. Sem imagem ou com imagem indisponível, um painel gráfico substitui a prévia. A seleção de destaques da biblioteca considera até os primeiros 100 repositórios públicos; o explorador geral usa a paginação separada. Falhas ou limites da API não impedem o restante do portfólio de funcionar. Nenhum token do GitHub é necessário.

Perfil, contatos, tecnologias, nome de usuário, tópico e ordem dos destaques ficam em `src/config/site.ts`. Os documentos legais do HomeCare permanecem disponíveis mesmo com `MAINTENANCE_MODE=true`.

## Desenvolvimento

Use Bun 1.4.x e Node.js 24.x. Instale as versões travadas em `bun.lock` e inicie o servidor de desenvolvimento:

```sh
bun install --frozen-lockfile
bun run dev
```

Scripts disponíveis:

```sh
bun run build
bun run start
bun run lint
bun run typecheck
bun test
```

O projeto usa o runner de testes integrado do Bun; ainda não há uma dependência de framework de testes dedicada. Vercel usa Bun 1.4.x para instalação e build, conforme `vercel.json`; `engines.node` mantém Node.js 24.x e `@types/node` acompanha a linha 24.

### Exceções de compatibilidade

- `typescript` fica em 6.0.3, a versão mais recente suportada por `typescript-eslint` 8.71.2, usado em `eslint-config-next` 16.4.0 (peer range `<6.1.0`). TypeScript 7.0.2 está fora desse intervalo.
- `eslint` fica em 9.39.5: as versões atuais de `eslint-plugin-react` e `eslint-plugin-jsx-a11y`, usadas pelo Next.js, ainda não declaram compatibilidade com ESLint 10.
- `@types/node` acompanha Node.js 24, em vez da linha 26, para corresponder ao runtime de implantação.

As demais dependências diretas, incluindo `lucide-react` 1.55.0, usam suas versões estáveis mais recentes compatíveis com este projeto.
