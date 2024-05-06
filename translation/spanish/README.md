# [RealGolf.Games](https://realgolf.games)

![Banner de RealGolf.Games](https://raw.githubusercontent.com/realgolf/Golf/main/img/logo_banner.PNG)

## Introducción

¡Bienvenido al repositorio del sitio web de RealGolf.Games! Este proyecto sirve como el centro para la plataforma de entrenamiento de RealGolf. Ya seas un desarrollador, colaborador o usuario, este README proporciona información esencial para comenzar.

Puedes visitar el sitio web en vivo en [realgolf.games](https://realgolf.games).

|        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CI/CD  | ![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Frender-deploy-status-vwj3.onrender.com%2Fsrv-cn12obocmk4c73di1vg0&query=status&style=flat-square&logo=render&label=Render) [![CodeQL](https://github.com/realgolf/Golf/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/realgolf/Golf/actions/workflows/github-code-scanning/codeql) [![Codespell](https://github.com/realgolf/Golf/actions/workflows/codespell.yml/badge.svg?branch=main)](https://github.com/realgolf/Golf/actions/workflows/codespell.yml) [![Build Kit](https://github.com/realgolf/Golf/actions/workflows/kit.yml/badge.svg)](https://github.com/realgolf/Golf/actions/workflows/kit.yml) [![Build Server](https://github.com/realgolf/Golf/actions/workflows/server.yml/badge.svg)](https://github.com/realgolf/Golf/actions/workflows/server.yml) [![Crowdin](https://badges.crowdin.net/realgolf/localized.svg)](https://crowdin.com/project/realgolf) |
| Issues | ![GitHub issues by-label](https://img.shields.io/github/issues/realgolf/Golf/feature) ![GitHub issues by-label](https://img.shields.io/github/issues/realgolf/Golf/bug) ![GitHub issues by-label](https://img.shields.io/github/issues/realgolf/Golf/game)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Stats  | ![GitHub repo size](https://img.shields.io/github/repo-size/realgolf/Golf) [![Lines of code](https://tokei.rs/b1/github/realgolf/Golf)](https://github.com/XAMPPRocky/tokei) [![wakatime](https://wakatime.com/badge/github/realgolf/Golf.svg)](https://wakatime.com/badge/github/realgolf/Golf) ![GitHub package.json version](https://img.shields.io/github/package-json/v/realgolf/Golf)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

## Descripción del Proyecto

RealGolf.Games Web es una plataforma basada en web que mejora tu experiencia de entrenamiento de golf. Este repositorio contiene todos los datos y el código para el sitio web.

## Arquitectura de Producción

![Diagrama de arquitectura del servidor de producción RealGolf](https://raw.githubusercontent.com/realgolf/Golf/main/img/architecture.png)

## Insignias

- **Estado de Render**: ![Estado dinámico de Render](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Frender-deploy-status-vwj3.onrender.com%2Fsrv-cn12obocmk4c73di1vg0&query=status&style=flat-square&logo=render&label=Render) - Indica el estado actual de implementación del sitio web en Render.
- **CodeQL**: [![CodeQL](https://github.com/realgolf/Golf/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/realgolf/Golf/actions/workflows/github-code-scanning/codeql) - Análisis de calidad de código utilizando CodeQL de GitHub.
- **Tamaño del Repositorio GitHub**: ![Tamaño del repositorio GitHub](https://img.shields.io/github/repo-size/realgolf/Golf) - Muestra el tamaño del repositorio de GitHub.

## Uso y Características

RealGolf.Games Web ofrece las siguientes características:

- 3 diferentes juegos de golf, que incluyen
  - 4Winning
  - Exact
  - Precision
- Autenticación de usuario con MongoDB
- Seguimiento de Puntuación de Campo de Golf **Actualmente en desarrollo**
- Funcionalidad multijugador local para que los usuarios jueguen entre sí en el mismo dispositivo.
- Se ha planteado el problema de función [#160](https://github.com/realgolf/Golf/issues/160) para implementar multijugador remoto, permitiendo a los usuarios competir entre sí en línea.

## Juegos

- 4Winning
- Exact
- Precision

<details>
  <summary>Ver información sobre todos los juegos</summary>

### 4Winning

En 4Winning, el objetivo es conectar estratégicamente cuatro piezas en línea. Nuestra versión del juego presenta un tablero más grande que el diseño estándar de 4x4, con 8 columnas y 9 filas. Las columnas adicionales a cada lado introducen un desafío: los jugadores deben golpear una distancia específica dentro de la desviación lateral. Este aspecto se vuelve más pronunciado en el Modo Plata y superior, añadiendo complejidad y requiriendo que los jugadores consideren cuidadosamente sus movimientos.

![Juego 4Winning](https://raw.githubusercontent.com/realgolf/Golf/main/img/4Winning.png)

### Exact

Exact es un juego donde el objetivo es alcanzar 100 o menos mientras se obtienen la mayor cantidad de puntos. Los jugadores ganan puntos según los siguientes criterios: Alcanzar exactamente 100 metros otorga 5 puntos, golpear múltiplos de diez otorga 3 puntos, los números con dígitos repetidos suman 2 puntos. Además, golpear la misma fila duplica los puntos obtenidos. Sin embargo, cualquier otro número que exceda 100 o caiga por debajo de 5 resulta en una deducción de 1 punto. Cualquier otro número entre 5 y 100 suma 1 punto. El desafío radica en equilibrar la Precision con la maximización de puntos para alcanzar la puntuación más alta.

![Juego Exact](https://raw.githubusercontent.com/realgolf/Golf/main/img/Exact.png)

### Precision

Precision es un juego donde el objetivo es acercarse lo más posible a los objetivos. Por cada metro que falles en el objetivo, recibirás una deducción de un punto. El ganador del juego es el jugador con más puntos al final. El juego concluye cuando solo un jugador tiene puntos restantes. Puedes observar la distancia que necesitas disparar, el equipo actual y los puntos restantes para cada equipo.

![Juego Precision](https://raw.githubusercontent.com/realgolf/Golf/main/img/Precision.png)

</details>

## Licencia

Este proyecto está licenciado bajo la [Licencia de Todos los Derechos Reservados](LICENSE.md).

## Reconocimientos

Nos gustaría agradecer a los siguientes proyectos y bibliotecas por sus contribuciones:

- [SvelteKit](https://github.com/sveltejs/kit)
- [MongoDB](https://github.com/mongodb)
- [Render](https://github.com/renderinc)

## Contacto

Para consultas o comentarios, no dudes en ponerte en contacto:

- Correo electrónico: [Soporte](mailto:support@realgolf.games)

¡Gracias por ser parte de la comunidad de RealGolf!
