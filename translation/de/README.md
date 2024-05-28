# [RealGolf.Games](https://realgolf.games)

![RealGolf.Games Banner](https://raw.githubusercontent.com/realgolf/web/main/img/logo_banner.PNG)

|        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CI/CD  | ![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Frender-deploy-status-vwj3.onrender.com%2Fsrv-cn12obocmk4c73di1vg0&query=status&style=flat-square&logo=render&label=Render) [![CodeQL](https://github.com/realgolf/realgolf/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/realgolf/realgolf/actions/workflows/github-code-scanning/codeql) [![Test Golf](https://github.com/realgolf/realgolf/actions/workflows/test.yml/badge.svg)](https://github.com/realgolf/realgolf/actions/workflows/test.yml) [![Codespell](https://github.com/realgolf/realgolf/actions/workflows/codespell.yml/badge.svg?branch=main)](https://github.com/realgolf/realgolf/actions/workflows/codespell.yml) [![Build Kit](https://github.com/realgolf/realgolf/actions/workflows/kit.yml/badge.svg)](https://github.com/realgolf/realgolf/actions/workflows/kit.yml) [![Build Server](https://github.com/realgolf/realgolf/actions/workflows/server.yml/badge.svg)](https://github.com/realgolf/realgolf/actions/workflows/server.yml) |
| Issues | ![GitHub issues by-label](https://img.shields.io/github/issues/realgolf/realgolf/feature) ![GitHub issues by-label](https://img.shields.io/github/issues/realgolf/realgolf/bug) ![GitHub issues by-label](https://img.shields.io/github/issues/realgolf/realgolf/game)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Stats  | [![Crowdin](https://badges.crowdin.net/realgolf/localized.svg)](https://crowdin.com/project/realgolf) ![GitHub repo size](https://img.shields.io/github/repo-size/realgolf/realgolf) [![Lines of code](https://tokei.rs/b1/github/realgolf/realgolf)](https://github.com/XAMPPRocky/tokei) [![wakatime](https://wakatime.com/badge/github/realgolf/web.svg)](https://wakatime.com/badge/github/realgolf/web) ![GitHub package.json version](https://img.shields.io/github/package-json/v/realgolf/realgolf)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

RealGolf ist eine Trainingsplattform für Golfer, auf der Sie drei verschiedene Spiele spielen können, um mehr Spaß beim Training zu haben. Es ist die erste Golf-Trainingsplattform.

Es bietet drei verschiedene Spiele: 4Winning, Exact und Precision. Jedes Spiel hat seine eigenen einzigartigen Regeln und Ziele, die eine vielfältige und spannende Erfahrung für die Spieler bieten. RealGolf bietet auch eine lokale Mehrspielerfunktion, die es den Benutzern ermöglicht, auf demselben Gerät gegeneinander anzutreten. Die Plattform beinhaltet eine Benutzerauthentifizierung mit MongoDB, wodurch die Spieler Konten erstellen und ihren Fortschritt verfolgen können. RealGolf ist darauf ausgelegt, zugänglich und benutzerfreundlich zu sein, sodass Golfer aller Fähigkeitsstufen die Spiele genießen und ihre Fähigkeiten verbessern können.

RealGolf, geschrieben in [Svelte](https://svelte.dev), basiert auf [SvelteKit](https://kit.svelte.dev) sowie [NodeJS](https://nodejs.org/en). [NodeJS](https://nodejs.org/en) wird verwendet, um einen asynchronen Node-Server für die Kommunikation zwischen Clients und Datenbanken bereitzustellen. [SvelteKit](https://kit.svelte.dev) wird als Full-Stack-Version von [Svelte](https://svelte.dev) verwendet. Web-Socket-Verbindungen werden direkt vom Node-Server verwaltet. [MongoDB](https://www.mongodb.com/) wird verwendet, um Benutzerkonten sowie Kursdaten zu speichern. HTTP-Anfragen werden von [Render](https://render.com) verarbeitet. Der Web-Client ist in [TypeScript](https://www.typescriptlang.org/) und [Svelte](https://svelte.dev) geschrieben. Der Server ist in [TypeScript](https://www.typescriptlang.org/) geschrieben und wird in JavaScript kompiliert. [SASS](https://sass-lang.com/) wird verwendet, um CSS zu generieren. Bitte helfen Sie uns, [RealGolf mit Crowdin zu übersetzen](https://crowdin.com/project/realgolf).

## Produktionsarchitektur (Stand April 2024)

![Produktionsarchitektur von RealGolf](https://raw.githubusercontent.com/realgolf/realgolf/main/img/architecture.png)

## Nutzung und Funktionen

RealGolf.Games Web bietet die folgenden Funktionen:

- 3 verschiedene Golfspiele, darunter
  - 4Winning
  - Exact
  - Precision
- Lokale Mehrspielerfunktion, mit der Benutzer auf demselben Gerät gegeneinander spielen können.
- Benutzerauthentifizierung mit MongoDB
- Trainingsplaner
- Golfplatz-Score-Tracker **Entwicklung pausiert [#714](https://github.com/realgolf/realgolf/issues/714)**
- Feature-Issue [#715](https://github.com/realgolf/realgolf/issues/715) für die Implementierung von Remote-Multiplayer, der es Benutzern ermöglicht, online gegeneinander anzutreten.
- Feature-Issue [#802](https://github.com/realgolf/realgolf/issues/802) für die Implementierung eines Schwunganalysetools, das es Benutzern ermöglicht, ihre Schwünge zu analysieren und ihre Technik zu verbessern.
- Feature-Issue [#726](https://github.com/realgolf/realgolf/issues/726) für die Implementierung einer Quiz-App über Golfregeln, die es Benutzern ermöglicht, ihr Wissen über die Regeln zu verbessern.
- Feature-Issue [#719](https://github.com/realgolf/realgolf/issues/719) für die Implementierung einer globalen Rangliste für Precision.

## Spiele

- 4Winning
- Exact
- Precision

<details>
  <summary>Informationen zu allen Spielen anzeigen</summary>

### 4Winning

In 4Winning ist das Ziel, strategisch vier Stücke in einer Reihe zu verbinden. Unsere Version des Spiels bietet ein größeres Spielfeld als das Standard-4x4-Layout mit 8 Spalten und 9 Reihen. Die zusätzlichen Spalten auf jeder Seite stellen eine Herausforderung dar: Die Spieler müssen eine bestimmte Entfernung innerhalb der seitlichen Abweichung treffen. Dieser Aspekt wird im Silbermodus und höher deutlicher, was die Komplexität erhöht und die Spieler dazu zwingt, ihre Züge sorgfältig zu überlegen.

![4Winning Spiel](https://raw.githubusercontent.com/realgolf/realgolf/main/img/4Winning.png)

### Exact

Exact ist ein Spiel, bei dem das Ziel ist, 100 oder weniger zu treffen und dabei die meisten Punkte zu erzielen. Die Spieler erhalten Punkte basierend auf den folgenden Kriterien: Genau 100 Meter zu erreichen, bringt 5 Punkte, Vielfache von zehn zu treffen, bringt 3 Punkte, Zahlen mit sich wiederholenden Ziffern bringen 2 Punkte. Zusätzlich verdoppelt das Treffen derselben Reihe die erzielten Punkte. Jede andere Zahl über 100 oder unter 5 führt zu einem Abzug von 1 Punkt. Jede andere Zahl zwischen 5 und 100 bringt 1 Punkt. Die Herausforderung besteht darin, die Genauigkeit mit der Maximierung der Punkte zu balancieren, um die höchste Punktzahl zu erreichen.

![Exact Spiel](https://raw.githubusercontent.com/realgolf/realgolf/main/img/Exact.png)

### Precision

Precision ist ein Spiel, bei dem das Ziel ist, so nah wie möglich an die Ziele zu kommen. Für jeden Meter, den Sie das Ziel verfehlen, erhalten Sie einen Punktabzug. Der Gewinner des Spiels ist der Spieler mit den meisten Punkten am Ende. Das Spiel endet, bis nur noch ein Spieler Punkte übrig hat. Sie können die Entfernung beobachten, die Sie schießen müssen, und das aktuelle Team sowie die verbleibenden Punkte für jedes Team sehen.

![Precision Spiel](https://raw.githubusercontent.com/realgolf/realgolf/main/img/Precision.png)

</details>

## Lizenz

RealGolf ist unter der [All Rights Reserved License](LICENSE.md) lizenziert.

## Kontakt

Für Anfragen oder Feedback können Sie uns gerne kontaktieren:

- E-Mail: [Support](mailto:support@realgolf.games)

Vielen Dank, dass Sie Teil der RealGolf-Community sind!
