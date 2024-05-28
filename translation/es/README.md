# [RealGolf.Games](https://realgolf.games)

![RealGolf.Games Banner](https://raw.githubusercontent.com/realgolf/web/main/img/logo_banner.PNG)

|        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CI/CD  | ![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Frender-deploy-status-vwj3.onrender.com%2Fsrv-cn12obocmk4c73di1vg0&query=status&style=flat-square&logo=render&label=Render) [![CodeQL](https://github.com/realgolf/realgolf/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/realgolf/realgolf/actions/workflows/github-code-scanning/codeql) [![Test Golf](https://github.com/realgolf/realgolf/actions/workflows/test.yml/badge.svg)](https://github.com/realgolf/realgolf/actions/workflows/test.yml) [![Codespell](https://github.com/realgolf/realgolf/actions/workflows/codespell.yml/badge.svg?branch=main)](https://github.com/realgolf/realgolf/actions/workflows/codespell.yml) [![Build Kit](https://github.com/realgolf/realgolf/actions/workflows/kit.yml/badge.svg)](https://github.com/realgolf/realgolf/actions/workflows/kit.yml) [![Build Server](https://github.com/realgolf/realgolf/actions/workflows/server.yml/badge.svg)](https://github.com/realgolf/realgolf/actions/workflows/server.yml) |
| Issues | ![GitHub issues by-label](https://img.shields.io/github/issues/realgolf/realgolf/feature) ![GitHub issues by-label](https://img.shields.io/github/issues/realgolf/realgolf/bug) ![GitHub issues by-label](https://img.shields.io/github/issues/realgolf/realgolf/game)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Stats  | [![Crowdin](https://badges.crowdin.net/realgolf/localized.svg)](https://crowdin.com/project/realgolf) ![GitHub repo size](https://img.shields.io/github/repo-size/realgolf/realgolf) [![Lines of code](https://tokei.rs/b1/github/realgolf/realgolf)](https://github.com/XAMPPRocky/tokei) [![wakatime](https://wakatime.com/badge/github/realgolf/web.svg)](https://wakatime.com/badge/github/realgolf/web) ![GitHub package.json version](https://img.shields.io/github/package-json/v/realgolf/realgolf)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

RealGolf es una plataforma de entrenamiento para golfistas, donde puedes jugar tres juegos diferentes para divertirte más entrenando. Es la primera plataforma de entrenamiento de golf.

Ofrece tres juegos diferentes: 4Winning, Exact y Precision. Cada juego tiene su propio conjunto único de reglas y objetivos, proporcionando una experiencia diversa y atractiva para los jugadores. RealGolf también ofrece funcionalidad multijugador local, permitiendo a los usuarios competir entre sí en el mismo dispositivo. La plataforma incluye autenticación de usuario con MongoDB, lo que permite a los jugadores crear cuentas y rastrear su progreso. RealGolf está diseñado para ser accesible y fácil de usar, haciendo que sea fácil para golfistas de todos los niveles de habilidad disfrutar de los juegos y mejorar sus habilidades.

RealGolf, escrito en [Svelte](https://svelte.dev), se basa en [SvelteKit](https://kit.svelte.dev) así como [NodeJS](https://nodejs.org/en). [NodeJS](https://nodejs.org/en) se utiliza para proporcionar un servidor de nodo asincrónico para la comunicación entre clientes y bases de datos. [SvelteKit](https://kit.svelte.dev) se utiliza como la versión full-stack de [Svelte](https://svelte.dev). Las conexiones Web Socket son manejadas directamente por el servidor Node. [MongoDB](https://www.mongodb.com/) se utiliza para almacenar cuentas de usuario así como datos de cursos. Las solicitudes HTTP son manejadas por [Render](https://render.com). El cliente web está escrito en [TypeScript](https://www.typescriptlang.org/) y [Svelte](https://svelte.dev). El servidor está escrito en [TypeScript](https://www.typescriptlang.org/) y compilado en JavaScript. [SASS](https://sass-lang.com/) se utiliza para generar CSS. Por favor ayúdanos a [traducir RealGolf con Crowdin](https://crowdin.com/project/realgolf).

## Arquitectura de Producción (a partir de abril de 2024)

![Diagrama de arquitectura de producción del servidor RealGolf](https://raw.githubusercontent.com/realgolf/realgolf/main/img/architecture.png)

## Uso y Características

RealGolf.Games Web ofrece las siguientes características:

- 3 juegos de golf diferentes, que incluyen
  - 4Winning
  - Exact
  - Precision
- Funcionalidad multijugador local para que los usuarios jueguen entre sí en el mismo dispositivo.
- Autenticación de usuario con MongoDB
- Planificador de entrenamiento
- Rastreador de puntuación de campos de golf **Desarrollo pausado [#714](https://github.com/realgolf/realgolf/issues/714)**
- Issue de característica [#715](https://github.com/realgolf/realgolf/issues/715) planteado para implementar multijugador remoto, permitiendo a los usuarios competir en línea.
- Issue de característica [#802](https://github.com/realgolf/realgolf/issues/802) planteado para implementar una herramienta de análisis de swing, permitiendo a los usuarios analizar sus swings y mejorar su técnica.
- Issue de característica [#726](https://github.com/realgolf/realgolf/issues/726) planteado para implementar una aplicación de preguntas sobre reglas de golf, permitiendo a los usuarios mejorar su conocimiento de las reglas.
- Issue de característica [#719](https://github.com/realgolf/realgolf/issues/719) planteado para implementar una tabla de clasificación global para Precision.

## Juegos

- 4Winning
- Exact
- Precision

<details>
  <summary>Ver información sobre todos los juegos</summary>

### 4Winning

En 4Winning, el objetivo es conectar estratégicamente cuatro piezas en una fila. Nuestra versión del juego presenta un tablero más grande que el diseño estándar 4x4, con 8 columnas y 9 filas. Las columnas adicionales en cada lado introducen un desafío: los jugadores deben golpear una distancia específica dentro de la desviación lateral. Este aspecto se vuelve más pronunciado en el Modo Plata y superior, agregando complejidad y requiriendo que los jugadores consideren cuidadosamente sus movimientos.

![Juego 4Winning](https://raw.githubusercontent.com/realgolf/realgolf/main/img/4Winning.png)

### Exact

Exact es un juego donde el objetivo es alcanzar 100 o menos mientras se obtienen la mayor cantidad de puntos. Los jugadores ganan puntos según los siguientes criterios: Alcanzar exactamente 100 metros otorga 5 puntos, golpear múltiplos de diez gana 3 puntos, los números con dígitos repetidos obtienen 2 puntos. Además, golpear la misma fila dobla los puntos obtenidos. Sin embargo, cualquier otro número que exceda 100 o sea menor que 5 resulta en una deducción de 1 punto. Cada otro número entre 5 y 100 gana 1 punto. El desafío radica en equilibrar la precisión con la maximización de puntos para lograr la puntuación más alta.

![Juego Exact](https://raw.githubusercontent.com/realgolf/realgolf/main/img/Exact.png)

### Precision

Precision es un juego donde el objetivo es acercarse lo más posible a los objetivos. Por cada metro que falles el objetivo, recibirás una deducción de un punto. El ganador del juego es el jugador con la mayor cantidad de puntos al final. El juego concluye hasta que solo un jugador tenga puntos restantes. Puedes observar la distancia que necesitas disparar y el equipo actual, junto con los puntos restantes para cada equipo.

![Juego Precision](https://raw.githubusercontent.com/realgolf/realgolf/main/img/Precision.png)

</details>

## Licencia

RealGolf está licenciado bajo la [Licencia All Rights Reserved](LICENSE.md).

## Contacto

Para consultas o comentarios, no dudes en contactarnos:

- Correo electrónico: [Soporte](mailto:support@realgolf.games)

¡Gracias por ser parte de la comunidad RealGolf!
