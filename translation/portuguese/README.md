# [RealGolf.Games](https://realgolf.games)

![Banner RealGolf.Games](https://raw.githubusercontent.com/realgolf/Golf/main/img/logo_banner.PNG)

## Introdução

Bem-vindo ao repositório do site do RealGolf.Games! Este projeto serve como o hub para a plataforma de treinamento do RealGolf. Seja você um desenvolvedor, colaborador ou usuário, este README fornece informações essenciais para começar.

Você pode visitar o site ao vivo em [realgolf.games](https://realgolf.games).

|              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CI/CD        | ![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Frender-deploy-status-vwj3.onrender.com%2Fsrv-cn12obocmk4c73di1vg0&query=status&style=flat-square&logo=render&label=Render) [![CodeQL](https://github.com/realgolf/Golf/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/realgolf/Golf/actions/workflows/github-code-scanning/codeql) [![Codespell](https://github.com/realgolf/Golf/actions/workflows/codespell.yml/badge.svg?branch=main)](https://github.com/realgolf/Golf/actions/workflows/codespell.yml) [![Build Kit](https://github.com/realgolf/Golf/actions/workflows/kit.yml/badge.svg)](https://github.com/realgolf/Golf/actions/workflows/kit.yml) [![Build Server](https://github.com/realgolf/Golf/actions/workflows/server.yml/badge.svg)](https://github.com/realgolf/Golf/actions/workflows/server.yml) [![Crowdin](https://badges.crowdin.net/realgolf/localized.svg)](https://crowdin.com/project/realgolf) |
| Problemas    | ![GitHub issues by-label](https://img.shields.io/github/issues/realgolf/Golf/feature) ![GitHub issues by-label](https://img.shields.io/github/issues/realgolf/Golf/bug) ![GitHub issues by-label](https://img.shields.io/github/issues/realgolf/Golf/game)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Estatísticas | ![GitHub repo size](https://img.shields.io/github/repo-size/realgolf/Golf) [![Lines of code](https://tokei.rs/b1/github/realgolf/Golf)](https://github.com/XAMPPRocky/tokei) [![wakatime](https://wakatime.com/badge/github/realgolf/web.svg)](https://wakatime.com/badge/github/realgolf/web) ![GitHub package.json version](https://img.shields.io/github/package-json/v/realgolf/Golf)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

## Visão Geral do Projeto

O RealGolf.Games Web é uma plataforma baseada na web que aprimora sua experiência de treinamento de golfe. Este repositório contém todos os dados e código para o site.

## Arquitetura de Produção

![Diagrama de arquitetura de produção do site RealGolf](https://raw.githubusercontent.com/realgolf/Golf/main/img/architecture.png)

## Crachás

- **Status Render**: ![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Frender-deploy-status-vwj3.onrender.com%2Fsrv-cn12obocmk4c73di1vg0&query=status&style=flat-square&logo=render&label=Render) - Indica o estado atual da implantação do site no Render.
- **CodeQL**: [![CodeQL](https://github.com/realgolf/Golf/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/realgolf/Golf/actions/workflows/github-code-scanning/codeql) - Análise de qualidade de código usando o GitHub CodeQL.
- **Tamanho do Repositório GitHub**: ![GitHub repo size](https://img.shields.io/github/repo-size/realgolf/Golf) - Mostra o tamanho do repositório GitHub.

## Uso e Recursos

O RealGolf.Games Web oferece os seguintes recursos:

- 3 diferentes Jogos de Golfe, que incluem
  - 4Winning
  - Exact
  - Precision
- Autenticação do usuário com MongoDB
- Rastreador de Pontuação de Campo de Golfe **Atualmente em desenvolvimento**
- Funcionalidade multiplayer local para usuários jogarem um contra o outro no mesmo dispositivo.
- Problema de recurso [#160](https://github.com/realgolf/Golf/issues/160) levantado para implementar multiplayer remoto, permitindo que os usuários compitam online um contra o outro.

## Jogos

- 4Winning
- Exact
- Precision

<details>
  <summary>Ver informações sobre todos os jogos</summary>

### 4Winning

No 4Winning, o objetivo é conectar estrategicamente quatro peças em uma linha. Nossa versão do jogo apresenta um tabuleiro maior do que o layout padrão 4x4, com 8 colunas e 9 linhas. As colunas adicionais em cada lado introduzem um desafio: os jogadores devem atingir uma distância específica dentro da deviação lateral. Este aspecto torna-se mais pronunciado no Modo Prata e acima, adicionando complexidade e exigindo que os jogadores considerem cuidadosamente suas jogadas.

![Jogo 4Winning](https://raw.githubusercontent.com/realgolf/Golf/main/img/4Winning.png)

### Exact

Exact é um jogo onde o objetivo é atingir 100 ou menos enquanto se pontua a maioria dos pontos. Os jogadores ganham pontos com base nos seguintes critérios: Alcançar exatamente 100 metros concede 5 pontos, atingir múltiplos de dez ganha 3 pontos, números com dígitos repetidos marcam 2 pontos. Além disso, atingir a mesma linha dobra os pontos obtidos. No entanto, qualquer outro número que exceda 100 ou caia abaixo de 5 resulta em uma dedução de 1 ponto. Todos os outros números entre 5 e 100 marcam 1 ponto. O desafio está em equilibrar a precisão com a maximização dos pontos para obter a maior pontuação.

![Jogo Exact](https://raw.githubusercontent.com/realgolf/Golf/main/img/Exact.png)

### Precision

Precision é um jogo onde o objetivo é se aproximar o máximo possível dos alvos. Para cada metro que você errar o alvo, você receberá uma dedução de um ponto. O vencedor do jogo é o jogador com mais pontos no final. O jogo termina quando apenas um jogador tem pontos restantes. Você pode observar a distância que precisa disparar e a equipe atual, juntamente com os pontos restantes para cada equipe.

![Jogo Precision](https://raw.githubusercontent.com/realgolf/Golf/main/img/Precision.png)

</details>

## Licença

Este projeto está licenciado sob a [Licença Todos os Direitos Reservados](LICENSE.md).

## Reconhecimentos

Gostaríamos de agradecer aos seguintes projetos e bibliotecas por suas contribuições:

- [SvelteKit](https://github.com/sveltejs/kit)
- [MongoDB](https://github.com/mongodb)
- [Render](https://github.com/renderinc)

## Contato

Para perguntas ou feedback, sinta-se à vontade para entrar em contato:

- Email: [Suporte](mailto:support@realgolf.games)

Obrigado por fazer parte da comunidade RealGolf!
