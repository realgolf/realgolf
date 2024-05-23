# [RealGolf.Games](https://realgolf.games)

![RealGolf.Games Banner](https://raw.githubusercontent.com/realgolf/web/main/img/logo_banner.PNG)

|        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CI/CD  | ![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Frender-deploy-status-vwj3.onrender.com%2Fsrv-cn12obocmk4c73di1vg0&query=status&style=flat-square&logo=render&label=Render) [![CodeQL](https://github.com/realgolf/realgolf/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/realgolf/realgolf/actions/workflows/github-code-scanning/codeql) [![Codespell](https://github.com/realgolf/realgolf/actions/workflows/codespell.yml/badge.svg?branch=main)](https://github.com/realgolf/realgolf/actions/workflows/codespell.yml) [![Build Kit](https://github.com/realgolf/realgolf/actions/workflows/kit.yml/badge.svg)](https://github.com/realgolf/realgolf/actions/workflows/kit.yml) [![Build Server](https://github.com/realgolf/realgolf/actions/workflows/server.yml/badge.svg)](https://github.com/realgolf/realgolf/actions/workflows/server.yml) |
| Issues | ![GitHub issues by-label](https://img.shields.io/github/issues/realgolf/realgolf/feature) ![GitHub issues by-label](https://img.shields.io/github/issues/realgolf/realgolf/bug) ![GitHub issues by-label](https://img.shields.io/github/issues/realgolf/realgolf/game)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Stats  | [![Crowdin](https://badges.crowdin.net/realgolf/localized.svg)](https://crowdin.com/project/realgolf) ![GitHub repo size](https://img.shields.io/github/repo-size/realgolf/realgolf) [![Lines of code](https://tokei.rs/b1/github/realgolf/realgolf)](https://github.com/XAMPPRocky/tokei) [![wakatime](https://wakatime.com/badge/github/realgolf/web.svg)](https://wakatime.com/badge/github/realgolf/web) ![GitHub package.json version](https://img.shields.io/github/package-json/v/realgolf/realgolf)                                                                                                                                                                                                                                                                                                                                                                                                            |

RealGolf is a trainings platform for Golfers, you can play three different games to have more fun training. It is the first golf trainings platform.

It features three different games: 4Winning, Exact, and Precision. Each game has its own unique set of rules and objectives, providing a diverse and engaging experience for players. RealGolf also offers local multiplayer functionality, allowing users to compete against each other on the same device. The platform includes user authentication with MongoDB, enabling players to create accounts and track their progress. RealGolf is designed to be accessible and user-friendly, making it easy for golfers of all skill levels to enjoy the games and improve their skills.

RealGolf written in [Svelte](https://svelte.dev), relies on [SvelteKit](https://kit.svelte.dev) as well as [NodeJS](https://nodejs.org/en). [NodeJS](https:://nodejs.org/en) is used to provide a asynchronous node server for cross-client and database communication. [SvelteKit](https://kit.svelte.dev) is used as the full stack version of [Svelte](https://svelte.dev). Web Socket connections are handled by the Node server directly. [MongoDB](https://www.mongodb.com/) is used to store user accounts as well as course data. HTTP requests are handled by [Render](https://render.com). The web client is written in [TypeScript](https://www.typescriptlang.org/) and [Svelte](https://svelte.dev). The server is written in [TypeScript](https://www.typescriptlang.org/) and compiled into JavaScript. [SASS](https://sass-lang.com/) is used to generate CSS. Please help us [translate RealGolf with Crowdin](https://crowdin.com/project/realgolf).

## Production Architecture (as of April 2024)

![RealGolf server site production architecture diagram](https://raw.githubusercontent.com/realgolf/realgolf/main/img/architecture.png)

## Usage and Features

RealGolf.Games Web offers the following features:

- 3 different Golf Games, which include
  - 4Winning
  - Exact
  - Precision
- Local multiplayer functionality for users to play against each other on the same device.
- User Authentication with MongoDB
- Trainings Planner
- Golf Course Score Tracker **Development paused [#714](https://github.com/realgolf/realgolf/issues/714)**
- Feature issue [#715](https://github.com/realgolf/realgolf/issues/715) raised for implementing remote multiplayer, enabling users to compete against each other online.
- Feature issue [#802(https://github.com/realgolf/realgolf/issues/802)] raised for implemening a swing analyzer tool, allowing users to analyze their swings and improve their technique.
- Feature issue [#726](https://github.com/realgolf/realgolf/issues/726) raised for implementing a Quiz App about Golfrules, allowing users to improve their knowledge of the rules.
- Feature issue [#719](https://github.com/realgolf/realgolf/issues/719) raised for implementing a global leberboard for Precision.

## Games

- 4Winning
- Exact
- Precision

<details>
  <summary>View information about all the games</summary>

### 4Winning

In 4Winning, the objective is to strategically connect four pieces in a row. Our version of the game features a larger board than the standard 4x4 layout, with 8 columns and 9 rows. The additional columns on each side introduce a challenge: players must hit a specific distance within the lateral deviation. This aspect becomes more pronounced in Silver Mode and above, adding complexity and requiring players to carefully consider their moves.

![4Winning Game](https://raw.githubusercontent.com/realgolf/realgolf/main/img/4Winning.png)

### Exact

Exact is a game where the objective is to hit 100 or below while scoring the most points. Players earn points based on the following criteria: Achieving exactly 100 meters awards 5 points, hitting multiples of ten earns 3 points, numbers with repeating digits score 2 points. Additionally, hitting the same row doubles the points earned. However, any other number exceeding 100 or falling below 5 results in a deduction of 1 point. Every other number between 5 and 100 scores 1 point. The challenge lies in balancing accuracy with maximizing points to achieve the highest score.

![Exact Game](https://raw.githubusercontent.com/realgolf/realgolf/main/img/Exact.png)

### Precision

Precision is a game where the objective is to get as close to the targets as possible. For every meter you miss the target, you will receive a deduction of one point. The winner of the game is the player with the highest points at the end. The game concludes until only one player has points remaining. You can observe the distance you need to shoot and the current team, along with the remaining points for each team.

![Precision Game](https://raw.githubusercontent.com/realgolf/realgolf/main/img/Precision.png)

</details>

## License

RealGolf is licensed under the [All Rights Reserved License](LICENSE.md).

## Contact

For inquiries or feedback, feel free to reach out:

- Email: [Support](mailto:support@realgolf.games)

Thank you for being a part of the RealGolf community!
