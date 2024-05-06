# [RealGolf.Games](https://realgolf.games)

![RealGolf.Games Banner](https://raw.githubusercontent.com/realgolf/web/main/img/logo_banner.PNG)

#### **Read this in [other languages](./translation/translations.md).**

<kbd>[<img title="Deutsch" alt="Deutsch" src="https://cdn.statically.io/gh/hjnilsson/country-flags/master/svg/de.svg" width="22">](./translation/german/German.md)</kbd> <kbd>[<img title="Español" alt="Español" src="https://cdn.statically.io/gh/hjnilsson/country-flags/master/svg/es.svg" width="22">](./translation/spanish/Spanish.md)</kbd> <kbd>[<img title="Français" alt="Français" src="https://cdn.statically.io/gh/hjnilsson/country-flags/master/svg/fr.svg" width="22">](./translation/french/French.md)</kbd> <kbd>[<img title="Italiano" alt="Italiano" src="https://cdn.statically.io/gh/hjnilsson/country-flags/master/svg/it.svg" width="22">](./translation/italian/Italian.md)</kbd> <kbd>[<img title="Português" alt="Português" src="https://cdn.statically.io/gh/hjnilsson/country-flags/master/svg/pt.svg" width="22">](./translation/portuguese/Portuguese.md)</kbd>

## Introduction

Welcome to the RealGolf.Games website repository! This project serves as the hub for RealGolf's training platform. Whether you're a developer, contributor, or user, this README provides essential information to get you started.

You can visit the live website at [realgolf.games](https://realgolf.games).

|        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CI/CD  | ![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Frender-deploy-status-vwj3.onrender.com%2Fsrv-cn12obocmk4c73di1vg0&query=status&style=flat-square&logo=render&label=Render) [![CodeQL](https://github.com/realgolf/Golf/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/realgolf/Golf/actions/workflows/github-code-scanning/codeql) [![Codespell](https://github.com/realgolf/Golf/actions/workflows/codespell.yml/badge.svg?branch=main)](https://github.com/realgolf/Golf/actions/workflows/codespell.yml) [![Build Kit](https://github.com/realgolf/Golf/actions/workflows/kit.yml/badge.svg)](https://github.com/realgolf/Golf/actions/workflows/kit.yml) [![Build Server](https://github.com/realgolf/Golf/actions/workflows/server.yml/badge.svg)](https://github.com/realgolf/Golf/actions/workflows/server.yml) [![Crowdin](https://badges.crowdin.net/realgolf/localized.svg)](https://crowdin.com/project/realgolf) |
| Issues | ![GitHub issues by-label](https://img.shields.io/github/issues/realgolf/Golf/feature) ![GitHub issues by-label](https://img.shields.io/github/issues/realgolf/Golf/bug) ![GitHub issues by-label](https://img.shields.io/github/issues/realgolf/Golf/game)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Stats  | ![GitHub repo size](https://img.shields.io/github/repo-size/realgolf/Golf) [![Lines of code](https://tokei.rs/b1/github/realgolf/Golf)](https://github.com/XAMPPRocky/tokei) [![wakatime](https://wakatime.com/badge/github/realgolf/web.svg)](https://wakatime.com/badge/github/realgolf/web) ![GitHub package.json version](https://img.shields.io/github/package-json/v/realgolf/Golf)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

## Project Overview

RealGolf.Games Web is a web-based platform that enhances your golf training experience. This repository contains all the data and code for the website.

## Production Architecture

![RealGolf server site production architecture diagram](https://raw.githubusercontent.com/realgolf/Golf/main/img/architecture.png)

## Badges

- **Render Status**: ![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Frender-deploy-status-vwj3.onrender.com%2Fsrv-cn12obocmk4c73di1vg0&query=status&style=flat-square&logo=render&label=Render) - Indicates the current deployment status of the website on Render.
- **CodeQL**: [![CodeQL](https://github.com/realgolf/Golf/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/realgolf/Golf/actions/workflows/github-code-scanning/codeql) - Code quality analysis using GitHub CodeQL.
- **GitHub Repo Size**: ![GitHub repo size](https://img.shields.io/github/repo-size/realgolf/Golf) - Shows the size of the GitHub repository.

## Usage and Features

RealGolf.Games Web offers the following features:

- 3 different Golf Games, which include
  - 4Winning
  - Exact
  - Precision
- User Authentication with MongoDB
- Golf Course Score Tracker **Currently under development**
- Local multiplayer functionality for users to play against each other on the same device.
- Feature issue [#715](https://github.com/realgolf/Golf/issues/715) raised for implementing remote multiplayer, enabling users to compete against each other online.

## Games

- 4Winning
- Exact
- Precision

<details>
  <summary>View information about all the games</summary>

### 4Winning

In 4Winning, the objective is to strategically connect four pieces in a row. Our version of the game features a larger board than the standard 4x4 layout, with 8 columns and 9 rows. The additional columns on each side introduce a challenge: players must hit a specific distance within the lateral deviation. This aspect becomes more pronounced in Silver Mode and above, adding complexity and requiring players to carefully consider their moves.

![4Winning Game](https://raw.githubusercontent.com/realgolf/Golf/main/img/4Winning.png)

### Exact

Exact is a game where the objective is to hit 100 or below while scoring the most points. Players earn points based on the following criteria: Achieving exactly 100 meters awards 5 points, hitting multiples of ten earns 3 points, numbers with repeating digits score 2 points. Additionally, hitting the same row doubles the points earned. However, any other number exceeding 100 or falling below 5 results in a deduction of 1 point. Every other number between 5 and 100 scores 1 point. The challenge lies in balancing accuracy with maximizing points to achieve the highest score.

![Exact Game](https://raw.githubusercontent.com/realgolf/Golf/main/img/Exact.png)

### Precision

Precision is a game where the objective is to get as close to the targets as possible. For every meter you miss the target, you will receive a deduction of one point. The winner of the game is the player with the highest points at the end. The game concludes until only one player has points remaining. You can observe the distance you need to shoot and the current team, along with the remaining points for each team.

![Precision Game](https://raw.githubusercontent.com/realgolf/Golf/main/img/Precision.png)

</details>

## License

This project is licensed under the [All Rights Reserved License](LICENSE.md).

## Acknowledgments

We would like to thank the following projects and libraries for their contributions:

- [SvelteKit](https://github.com/sveltejs/kit)
- [MongoDB](https://github.com/mongodb)
- [Render](https://github.com/renderinc)

## Contact

For inquiries or feedback, feel free to reach out:

- Email: [Support](mailto:support@realgolf.games)

Thank you for being a part of the RealGolf community!
