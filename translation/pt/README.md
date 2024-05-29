# [RealGolf.Games](https://realgolf.games)

![Banner RealGolf.Games](https://raw.githubusercontent.com/realgolf/web/main/img/logo_banner.PNG)

|              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CI/CD        | ![Distintivo JSON Dinâmico](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Frender-deploy-status-vwj3.onrender.com%2Fsrv-cpbhfa5ds78s73evmceg&query=status&style=flat-square&logo=render&label=Render) [![CodeQL](https://github.com/realgolf/realgolf/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/realgolf/realgolf/actions/workflows/github-code-scanning/codeql) [![Test Golf](https://github.com/realgolf/realgolf/actions/workflows/test.yml/badge.svg)](https://github.com/realgolf/realgolf/actions/workflows/test.yml) [![Codespell](https://github.com/realgolf/realgolf/actions/workflows/codespell.yml/badge.svg?branch=main)](https://github.com/realgolf/realgolf/actions/workflows/codespell.yml) [![Construir Kit](https://github.com/realgolf/realgolf/actions/workflows/kit.yml/badge.svg)](https://github.com/realgolf/realgolf/actions/workflows/kit.yml) [![Construir Servidor](https://github.com/realgolf/realgolf/actions/workflows/server.yml/badge.svg)](https://github.com/realgolf/realgolf/actions/workflows/server.yml) |
| Questões     | ![Questões do GitHub por etiqueta](https://img.shields.io/github/issues/realgolf/realgolf/feature) ![Questões do GitHub por etiqueta](https://img.shields.io/github/issues/realgolf/realgolf/bug) ![Questões do GitHub por etiqueta](https://img.shields.io/github/issues/realgolf/realgolf/game)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Estatísticas | [![Crowdin](https://badges.crowdin.net/realgolf/localized.svg)](https://crowdin.com/project/realgolf) ![Tamanho do repositório GitHub](https://img.shields.io/github/repo-size/realgolf/realgolf) [![Linhas de código](https://tokei.rs/b1/github/realgolf/realgolf)](https://github.com/XAMPPRocky/tokei) [![wakatime](https://wakatime.com/badge/github/realgolf/web.svg)](https://wakatime.com/badge/github/realgolf/web) ![Versão do package.json do GitHub](https://img.shields.io/github/package-json/v/realgolf/realgolf)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

RealGolf é uma plataforma de treinamento para golfistas, onde você pode jogar três jogos diferentes para se divertir mais durante o treinamento. É a primeira plataforma de treinamento de golfe.

Oferece três jogos diferentes: 4Winning, Exact e Precision. Cada jogo tem seu próprio conjunto único de regras e objetivos, proporcionando uma experiência diversificada e envolvente para os jogadores. O RealGolf também oferece funcionalidade multiplayer local, permitindo que os usuários compitam entre si no mesmo dispositivo. A plataforma inclui autenticação de usuários com o MongoDB, permitindo que os jogadores criem contas e rastreiem seu progresso. O RealGolf é projetado para ser acessível e fácil de usar, tornando simples para golfistas de todos os níveis de habilidade desfrutar dos jogos e melhorar suas habilidades.

O RealGolf é escrito em [Svelte](https://svelte.dev), baseado em [SvelteKit](https://kit.svelte.dev) e [NodeJS](https://nodejs.org/en). O [NodeJS](https:://nodejs.org/en) é usado para fornecer um servidor Node assíncrono para comunicação entre cliente e banco de dados. O [SvelteKit](https://kit.svelte.dev) é usado como a versão full stack do [Svelte](https://svelte.dev). As conexões WebSocket são manipuladas diretamente pelo servidor Node. O [MongoDB](https://www.mongodb.com/) é usado para armazenar contas de usuários e dados de cursos. As solicitações HTTP são tratadas pelo [Render](https://render.com). O cliente da web é escrito em [TypeScript](https://www.typescriptlang.org/) e [Svelte](https://svelte.dev). O servidor é escrito em [TypeScript](https://www.typescriptlang.org/) e compilado para JavaScript. O [SASS](https://sass-lang.com/) é usado para gerar CSS. Por favor, nos ajude a [traduzir o RealGolf com o Crowdin](https://crowdin.com/project/realgolf).

## Arquitetura de Produção (a partir de abril de 2024)

![Diagrama de arquitetura de produção do site do servidor RealGolf](https://raw.githubusercontent.com/realgolf/realgolf/main/img/architecture.png)

## Uso e Recursos

RealGolf.Games Web oferece os seguintes recursos:

- 3 jogos de golfe diferentes, que incluem
  - 4Winning
  - Exact
  - Precision
- Funcionalidade multiplayer local para os usuários jogarem entre si no mesmo dispositivo.
- Autenticação de usuários com MongoDB
- Planejador de treinamento
- Rastreador de pontuação do campo de golfe **Desenvolvimento pausado [#714](https://github.com/realgolf/realgolf/issues/714)**
- Problema de recurso [#715](https://github.com/realgolf/realgolf/issues/715) levantado para implementar o multiplayer remoto, permitindo que os usuários compitam online.
- Problema de recurso [#802](https://github.com/realgolf/realgolf/issues/802) levantado para implementar uma ferramenta de análise de swing, permitindo que os usuários analisem seus swings e melhorem sua técnica.
- Problema de recurso [#726](https://github.com/realgolf/realgolf/issues/726) levantado para implementar um aplicativo de quiz sobre regras de golfe, permitindo que os usuários melhorem seu conhecimento das regras.
- Problema de recurso [#719](https://github.com/realgolf/realgolf/issues/719) levant

## Jogos

- 4Winning
- Exact
- Precision

<details>
  <summary>Ver informações sobre todos os jogos</summary>

### 4Winning

No 4Winning, o objetivo é conectar estrategicamente quatro peças em uma fileira. Nossa versão do jogo apresenta um tabuleiro maior do que o layout padrão 4x4, com 8 colunas e 9 linhas. As colunas adicionais em cada lado introduzem um desafio: os jogadores devem atingir uma distância específica dentro da desvio lateral. Esse aspecto se torna mais pronunciado no Modo Silver e acima, adicionando complexidade e exigindo que os jogadores considerem cuidadosamente seus movimentos.

![Jogo 4Winning](https://raw.githubusercontent.com/realgolf/realgolf/main/img/4Winning.png)

### Exact

Exact é um jogo onde o objetivo é acertar 100 ou menos pontos enquanto marca a maioria dos pontos. Os jogadores ganham pontos com base nos seguintes critérios: Alcançar exatamente 100 metros concede 5 pontos, acertar múltiplos de dez ganha 3 pontos, números com dígitos repetidos marcam 2 pontos. Além disso, acertar a mesma linha dobra os pontos ganhos. No entanto, qualquer outro número que exceda 100 ou caia abaixo de 5 resulta em uma dedução de 1 ponto. Todos os outros números entre 5 e 100 marcam 1 ponto. O desafio está em equilibrar a precisão com a maximização dos pontos para alcançar a maior pontuação.

![Jogo Exact](https://raw.githubusercontent.com/realgolf/realgolf/main/img/Exact.png)

### Precision

Precision é um jogo onde o objetivo é chegar o mais perto possível dos alvos. Para cada metro que você erra o alvo, você receberá uma dedução de um ponto. O vencedor do jogo é o jogador com mais pontos no final. O jogo termina até que apenas um jogador tenha pontos restantes. Você pode observar a distância que precisa disparar e a equipe atual, juntamente com os pontos restantes para cada equipe.

![Jogo Precision](https://raw.githubusercontent.com/realgolf/realgolf/main/img/Precision.png)

</details>

## Licença

O RealGolf é licenciado sob a [Licença de Todos os Direitos Reservados](LICENSE.md).

## Contato

Para perguntas ou feedback, sinta-se à vontade para entrar em contato:

- Email: [Suporte](mailto:support@realgolf.games)

Obrigado por fazer parte da comunidade RealGolf!
