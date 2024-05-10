# [RealGolf.Games](https://realgolf.games)

![Banner do RealGolf.Games](https://raw.githubusercontent.com/realgolf/web/main/img/logo_banner.PNG)

![Distintivo JSON Dinâmico](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Frender-deploy-status-vwj3.onrender.com%2Fsrv-cn12obocmk4c73di1vg0&query=status&style=flat-square&logo=render&label=Render) [![CodeQL](https://github.com/realgolf/Golf/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/realgolf/Golf/actions/workflows/github-code-scanning/codeql) [![Codespell](https://github.com/realgolf/Golf/actions/workflows/codespell.yml/badge.svg?branch=main)](https://github.com/realgolf/Golf/actions/workflows/codespell.yml) [![Kit de Construção](https://github.com/realgolf/Golf/actions/workflows/kit.yml/badge.svg)](https://github.com/realgolf/Golf/actions/workflows/kit.yml) [![Servidor de Construção](https://github.com/realgolf/Golf/actions/workflows/server.yml/badge.svg)](https://github.com/realgolf/Golf/actions/workflows/server.yml) [![Crowdin](https://badges.crowdin.net/realgolf/localized.svg)](https://crowdin.com/project/realgolf) ![Problemas do GitHub por etiqueta](https://img.shields.io/github/issues/realgolf/Golf/feature) ![Problemas do GitHub por etiqueta](https://img.shields.io/github/issues/realgolf/Golf/bug) ![Problemas do GitHub por etiqueta](https://img.shields.io/github/issues/realgolf/Golf/game) ![Tamanho do repositório GitHub](https://img.shields.io/github/repo-size/realgolf/Golf) [![Linhas de código](https://tokei.rs/b1/github/realgolf/Golf)](https://github.com/XAMPPRocky/tokei) [![wakatime](https://wakatime.com/badge/github/realgolf/web.svg)](https://wakatime.com/badge/github/realgolf/web) ![Versão do package.json GitHub](https://img.shields.io/github/package-json/v/realgolf/Golf)

#### **Leia isso em [outros idiomas](./translation/translations.md).**

<kbd>[<img title="Deutsch" alt="Deutsch" src="https://cdn.statically.io/gh/hjnilsson/country-flags/master/svg/de.svg" width="22">](./translation/german/German.md)</kbd> <kbd>[<img title="Español" alt="Español" src="https://cdn.statically.io/gh/hjnilsson/country-flags/master/svg/es.svg" width="22">](./translation/spanish/Spanish.md)</kbd> <kbd>[<img title="Français" alt="Français" src="https://cdn.statically.io/gh/hjnilsson/country-flags/master/svg/fr.svg" width="22">](./translation/french/French.md)</kbd> <kbd>[<img title="Italiano" alt="Italiano" src="https://cdn.statically.io/gh/hjnilsson/country-flags/master/svg/it.svg" width="22">](./translation/italian/Italian.md)</kbd> <kbd>[<img title="Português" alt="Português" src="https://cdn.statically.io/gh/hjnilsson/country-flags/master/svg/pt.svg" width="22">](./translation/portuguese/Portuguese.md)</kbd>

O RealGolf é uma plataforma de treinamento para golfistas. Você pode jogar três jogos diferentes para tornar o treinamento mais divertido. É a primeira plataforma de treinamento de golfe.

Apresenta três jogos diferentes: 4Winning, Exact e Precision. Cada jogo tem suas próprias regras e objetivos únicos, proporcionando uma experiência diversificada e envolvente para os jogadores. O RealGolf também oferece funcionalidade multijogador local, permitindo que os usuários compitam entre si no mesmo dispositivo. A plataforma inclui autenticação de usuário com MongoDB, permitindo que os jogadores criem contas e acompanhem seu progresso. O RealGolf é projetado para ser acessível e fácil de usar, tornando-o fácil para golfistas de todos os níveis de habilidade aproveitarem os jogos e melhorarem suas habilidades.

O RealGolf é escrito em [Svelte](https://svelte.dev), depende do [SvelteKit](https://kit.svelte.dev) e do [NodeJS](https://nodejs.org/en). [NodeJS](https:://nodejs.org/en) é usado para fornecer um servidor node assíncrono para comunicação entre cliente e banco de dados. [SvelteKit](https://kit.svelte.dev) é usado como a versão full stack do [Svelte](https://svelte.dev). As conexões WebSocket são tratadas diretamente pelo servidor Node. [MongoDB](https://www.mongodb.com/) é usado para armazenar contas de usuário e dados de percursos. As solicitações HTTP são tratadas pelo [Render](https://render.com). O cliente da web é escrito em [TypeScript](https://www.typescriptlang.org/) e [Svelte](https://svelte.dev). O servidor é escrito em [TypeScript](https://www.typescriptlang.org/) e compilado para JavaScript. [SASS](https://sass-lang.com/) é usado para gerar o CSS. Por favor, nos ajude a [traduzir o RealGolf com o Crowdin](https://crowdin.com/project/realgolf).

## Arquitetura de Produção (abril de 2024)

![Diagrama de arquitetura de produção do servidor RealGolf](https://raw.githubusercontent.com/realgolf/Golf/main/img/architecture.png)

## Uso e Recursos

O RealGolf.Games Web oferece as seguintes características:

- 3 jogos de golfe diferentes, que incluem
  - 4Winning
  - Exact
  - Precision
- Funcionalidade multijogador local para os usuários jogarem entre si no mesmo dispositivo.
- Autenticação de usuário com MongoDB
- Rastreador de Pontuação de Campo de Golfe **Desenvolvimento pausado [#714](https://github.com/realgolf/Golf/issues/714)**
- Planejador de Treinamentos **Atualmente em desenvolvimento [#718](https://github.com/realgolf/Golf/issues/718)**
- Problema de funcionalidade [#715](https://github.com/realgolf/Golf/issues/715) levantado para implementar multijogador remoto, permitindo que os usuários compitam entre si online.

## Jogos

- 4Winning
- Exact
- Precision

<details>
  <summary>Visualizar informações sobre todos os jogos</summary>

### 4Winning

No 4Winning, o objetivo é conectar estrategicamente quatro peças em uma fileira. Nossa versão do jogo apresenta um tabuleiro maior do que o layout padrão 4x4, com 8 colunas e 9 linhas. As colunas adicionais em cada lado introduzem um desafio: os jogadores devem atingir uma distância específica dentro da deviação lateral. Este aspecto se torna mais pronunciado no Modo Prata e acima, adicionando complexidade e exigindo que os jogadores considerem cuidadosamente seus movimentos.

![Jogo 4Winning](https://raw.githubusercontent.com/realgolf/Golf/main/img/4Winning.png)

### Exact

Exact é um jogo onde o objetivo é acertar 100 ou menos enquanto marca a maior quantidade de pontos. Os jogadores ganham pontos com base nos seguintes critérios: Alcançar exatamente 100 metros premia 5 pontos, acertar múltiplos de dez ganha 3 pontos, números com dígitos repetidos pontuam 2 pontos. Além disso, acertar a mesma linha dobra os pontos ganhos. No entanto, qualquer outro número que exceda 100 ou caia abaixo de 5 resulta em uma dedução de 1 ponto. Todos os outros números entre 5 e 100 pontuam 1 ponto. O desafio está em equilibrar a precisão com a maximização dos pontos para obter a pontuação mais alta.

![Jogo Exact](https://raw.githubusercontent.com/realgolf/Golf/main/img/Exact.png)

### Precision

Precision é um jogo onde o objetivo é se aproximar o máximo possível dos alvos. Para cada metro que você errar do alvo, você receberá uma dedução de um ponto. O vencedor do jogo é o jogador com mais pontos no final. O jogo termina quando apenas um jogador tem pontos restantes. Você pode observar a distância que precisa atirar e o time atual, juntamente com os pontos restantes para cada equipe.

![Jogo Precision](https://raw.githubusercontent.com/realgolf/Golf/main/img/Precision.png)

</details>

## Licença

O RealGolf é licenciado sob a [Licença Todos os Direitos Reservados](LICENSE.md).

## Contato

Para dúvidas ou feedback, sinta-se à vontade para entrar em contato:

- E-mail: [Suporte](mailto:support@realgolf.games)

Obrigado por fazer parte da comunidade do RealGolf!
