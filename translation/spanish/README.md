# [RealGolf.Games](https://realgolf.games)

![Banner de RealGolf.Games](https://raw.githubusercontent.com/realgolf/web/main/img/logo_banner.PNG)

![Insignia JSON Dinámica](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Frender-deploy-status-vwj3.onrender.com%2Fsrv-cn12obocmk4c73di1vg0&query=status&style=flat-square&logo=render&label=Render) [![CodeQL](https://github.com/realgolf/Golf/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/realgolf/Golf/actions/workflows/github-code-scanning/codeql) [![Codespell](https://github.com/realgolf/Golf/actions/workflows/codespell.yml/badge.svg?branch=main)](https://github.com/realgolf/Golf/actions/workflows/codespell.yml) [![Kit de Construcción](https://github.com/realgolf/Golf/actions/workflows/kit.yml/badge.svg)](https://github.com/realgolf/Golf/actions/workflows/kit.yml) [![Servidor de Construcción](https://github.com/realgolf/Golf/actions/workflows/server.yml/badge.svg)](https://github.com/realgolf/Golf/actions/workflows/server.yml) [![Crowdin](https://badges.crowdin.net/realgolf/localized.svg)](https://crowdin.com/project/realgolf) ![Problemas de GitHub por etiqueta](https://img.shields.io/github/issues/realgolf/Golf/feature) ![Problemas de GitHub por etiqueta](https://img.shields.io/github/issues/realgolf/Golf/bug) ![Problemas de GitHub por etiqueta](https://img.shields.io/github/issues/realgolf/Golf/game) ![Tamaño del repositorio de GitHub](https://img.shields.io/github/repo-size/realgolf/Golf) [![Líneas de código](https://tokei.rs/b1/github/realgolf/Golf)](https://github.com/XAMPPRocky/tokei) [![wakatime](https://wakatime.com/badge/github/realgolf/web.svg)](https://wakatime.com/badge/github/realgolf/web) ![Versión del package.json de GitHub](https://img.shields.io/github/package-json/v/realgolf/Golf)

RealGolf es una plataforma de entrenamiento para golfistas. Puedes jugar tres juegos diferentes para hacer el entrenamiento más divertido. Es la primera plataforma de entrenamiento de golf.

Presenta tres juegos diferentes: 4Winning, Exact y Precision. Cada juego tiene sus propias reglas y objetivos únicos, proporcionando una experiencia diversa y atractiva para los jugadores. RealGolf también ofrece funcionalidad multijugador local, lo que permite a los usuarios competir entre sí en el mismo dispositivo. La plataforma incluye autenticación de usuario con MongoDB, lo que permite a los jugadores crear cuentas y hacer un seguimiento de su progreso. RealGolf está diseñado para ser accesible y fácil de usar, lo que facilita que golfistas de todos los niveles de habilidad disfruten de los juegos y mejoren sus habilidades.

RealGolf está escrito en [Svelte](https://svelte.dev), depende de [SvelteKit](https://kit.svelte.dev) y [NodeJS](https://nodejs.org/en). [NodeJS](https:://nodejs.org/en) se utiliza para proporcionar un servidor node asíncrono para la comunicación entre cliente y base de datos. [SvelteKit](https://kit.svelte.dev) se utiliza como la versión full stack de [Svelte](https://svelte.dev). Las conexiones WebSocket son manejadas directamente por el servidor Node. [MongoDB](https://www.mongodb.com/) se utiliza para almacenar cuentas de usuario y datos de campo de golf. Las solicitudes HTTP son manejadas por [Render](https://render.com). El cliente web está escrito en [TypeScript](https://www.typescriptlang.org/) y [Svelte](https://svelte.dev). El servidor está escrito en [TypeScript](https://www.typescriptlang.org/) y compilado en JavaScript. [SASS](https://sass-lang.com/) se utiliza para generar CSS. Por favor, ayúdenos a [traducir RealGolf con Crowdin](https://crowdin.com/project/realgolf).

## Arquitectura de Producción (a partir de abril de 2024)

![Diagrama de arquitectura de producción del servidor RealGolf](https://raw.githubusercontent.com/realgolf/Golf/main/img/architecture.png)

## Uso y Características

RealGolf.Games Web ofrece las siguientes características:

- 3 juegos de golf diferentes, que incluyen
  - 4Winning
  - Exact
  - Precision
- Funcionalidad multijugador local para que los usuarios jueguen entre sí en el mismo dispositivo.
- Autenticación de usuario con MongoDB.
- Rastreador de puntuaciones del campo de golf **Desarrollo pausado [#714](https://github.com/realgolf/Golf/issues/714)**
- Planificador de entrenamientos **Actualmente en desarrollo [#718](https://github.com/realgolf/Golf/issues/718)**
- Problema de funcionalidad [#715](https://github.com/realgolf/Golf/issues/715) planteado para implementar multijugador remoto, permitiendo a los usuarios competir entre sí en línea.

## Juegos

- 4Winning
- Exact
- Precision

<details>
  <summary>Ver información sobre todos los juegos</summary>

### 4Winning

En 4Winning, el objetivo es conectar estratégicamente cuatro piezas en fila. Nuestra versión del juego presenta un tablero más grande que el diseño estándar 4x4, con 8 columnas y 9 filas. Las columnas adicionales a cada lado introducen un desafío: los jugadores deben golpear una distancia específica dentro de la desviación lateral. Este aspecto se vuelve más pronunciado en el Modo Plata y superior, agregando complejidad y requiriendo que los jugadores consideren cuidadosamente sus movimientos.

![Juego 4Winning](https://raw.githubusercontent.com/realgolf/Golf/main/img/4Winning.png)

### Exact

Exact es un juego donde el objetivo es golpear 100 o menos mientras se obtienen la mayor cantidad de puntos. Los jugadores obtienen puntos en función de los siguientes criterios: Lograr exactamente 100 metros otorga 5 puntos, golpear múltiplos de diez gana 3 puntos, los números con dígitos repetidos puntúan 2 puntos. Además, golpear la misma fila duplica los puntos ganados. Sin embargo, cualquier otro número que exceda 100 o caiga por debajo de 5 resulta en una deducción de 1 punto. Todos los demás números entre 5 y 100 puntúan 1 punto. El desafío radica en equilibrar la precisión con la maximización de puntos para lograr la puntuación más alta.

![Juego Exact](https://raw.githubusercontent.com/realgolf/Golf/main/img/Exact.png)

### Precision

Precision es un juego donde el objetivo es acercarse lo más posible a los objetivos. Por cada metro que falles del objetivo, recibirás una deducción de un punto. El ganador del juego es el jugador con más puntos al final. El juego termina cuando solo un jugador tiene puntos restantes. Puedes observar la distancia que necesitas disparar y el equipo actual, junto con los puntos restantes para cada equipo.

![Juego Precision](https://raw.githubusercontent.com/realgolf/Golf/main/img/Precision.png)

</details>

## Licencia

RealGolf está bajo licencia de [Todos los Derechos Reservados](LICENSE.md).

## Contacto

Para consultas o comentarios, no dude en comunicarse:

- Correo electrónico: [Soporte](mailto:support@realgolf.games)

¡Gracias por ser parte de la comunidad de RealGolf!
