# [RealGolf.Games](https://realgolf.games)

![RealGolf.Games Banner](https://raw.githubusercontent.com/realgolf/web/main/img/logo_banner.PNG)

![Dynamisches JSON-Abzeichen](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Frender-deploy-status-vwj3.onrender.com%2Fsrv-cn12obocmk4c73di1vg0&query=status&style=flat-square&logo=render&label=Render) [![CodeQL](https://github.com/realgolf/Golf/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/realgolf/Golf/actions/workflows/github-code-scanning/codeql) [![Codespell](https://github.com/realgolf/Golf/actions/workflows/codespell.yml/badge.svg?branch=main)](https://github.com/realgolf/Golf/actions/workflows/codespell.yml) [![Build Kit](https://github.com/realgolf/Golf/actions/workflows/kit.yml/badge.svg)](https://github.com/realgolf/Golf/actions/workflows/kit.yml) [![Build Server](https://github.com/realgolf/Golf/actions/workflows/server.yml/badge.svg)](https://github.com/realgolf/Golf/actions/workflows/server.yml) [![Crowdin](https://badges.crowdin.net/realgolf/localized.svg)](https://crowdin.com/project/realgolf) ![GitHub-Probleme nach Label](https://img.shields.io/github/issues/realgolf/Golf/feature) ![GitHub-Probleme nach Label](https://img.shields.io/github/issues/realgolf/Golf/bug) ![GitHub-Probleme nach Label](https://img.shields.io/github/issues/realgolf/Golf/game) ![GitHub-Repository-Größe](https://img.shields.io/github/repo-size/realgolf/Golf) [![Codezeilen](https://tokei.rs/b1/github/realgolf/Golf)](https://github.com/XAMPPRocky/tokei) [![wakatime](https://wakatime.com/badge/github/realgolf/web.svg)](https://wakatime.com/badge/github/realgolf/web) ![GitHub package.json version](https://img.shields.io/github/package-json/v/realgolf/Golf)

RealGolf ist eine Trainingsplattform für Golfer. Sie können drei verschiedene Spiele spielen, um das Training unterhaltsamer zu gestalten. Es ist die erste Golf-Trainingsplattform.

Es bietet drei verschiedene Spiele: 4Winning, Exact und Precision. Jedes Spiel hat seine eigenen einzigartigen Regeln und Ziele und bietet damit eine vielfältige und ansprechende Erfahrung für die Spieler. RealGolf bietet auch eine lokale Mehrspielerfunktion, mit der Benutzer auf demselben Gerät gegeneinander antreten können. Die Plattform umfasst die Benutzerauthentifizierung mit MongoDB, die es den Spielern ermöglicht, Konten zu erstellen und ihren Fortschritt zu verfolgen. RealGolf ist darauf ausgelegt, zugänglich und benutzerfreundlich zu sein, sodass Golfer aller Könnensstufen die Spiele genießen und ihre Fähigkeiten verbessern können.

RealGolf ist in [Svelte](https://svelte.dev) geschrieben und basiert auf [SvelteKit](https://kit.svelte.dev) sowie [NodeJS](https://nodejs.org/en). [NodeJS](https:://nodejs.org/en) wird verwendet, um einen asynchronen Node-Server für die Kommunikation zwischen Client und Datenbank bereitzustellen. [SvelteKit](https://kit.svelte.dev) wird als die Vollstackversion von [Svelte](https://svelte.dev) verwendet. Web-Socket-Verbindungen werden direkt vom Node-Server behandelt. [MongoDB](https://www.mongodb.com/) wird verwendet, um Benutzerkonten sowie Kursdaten zu speichern. HTTP-Anfragen werden von [Render](https://render.com) verarbeitet. Der Webclient ist in [TypeScript](https://www.typescriptlang.org/) und [Svelte](https://svelte.dev) geschrieben. Der Server ist in [TypeScript](https://www.typescriptlang.org/) verfasst und zu JavaScript kompiliert. [SASS](https://sass-lang.com/) wird verwendet, um CSS zu generieren. Bitte helfen Sie uns dabei, RealGolf mit Crowdin zu [übersetzen](https://crowdin.com/project/realgolf).

## Produktionsarchitektur (Stand: April 2024)

![Diagramm der Produktionsarchitektur der RealGolf-Serverseite](https://raw.githubusercontent.com/realgolf/Golf/main/img/architecture.png)

## Verwendung und Funktionen

RealGolf.Games Web bietet folgende Funktionen:

- 3 verschiedene Golfspiele, darunter
  - 4Winning
  - Exact
  - Precision
- Lokale Mehrspielerfunktionalität für Benutzer, um auf demselben Gerät gegeneinander zu spielen.
- Benutzerauthentifizierung mit MongoDB
- Golfplatz-Score-Tracker **Entwicklung pausiert [#714](https://github.com/realgolf/Golf/issues/714)**
- Trainingsplaner **Derzeit in Entwicklung [#718](https://github.com/realgolf/Golf/issues/718)**
- Feature-Anfrage [#715](https://github.com/realgolf/Golf/issues/715) gestellt für die Implementierung von Remote-Mehrspielermodus, sodass Benutzer online gegeneinander antreten können.

## Spiele

- 4Winning
- Exact
- Precision

<details>
  <summary>Informationen zu allen Spielen anzeigen</summary>

### 4Winning

Bei 4Winning geht es darum, strategisch vier Stücke hintereinander zu verbinden. Unsere Version des Spiels hat ein größeres Spielfeld als das Standardlayout 4x4, mit 8 Spalten und 9 Zeilen. Die zusätzlichen Spalten auf jeder Seite stellen eine Herausforderung dar: Die Spieler müssen eine bestimmte Distanz innerhalb der seitlichen Abweichung treffen. Dieser Aspekt wird in Silber-Modus und höher stärker ausgeprägt, was die Komplexität erhöht und die Spieler dazu zwingt, ihre Züge sorgfältig zu überdenken.

![4Winning Spiel](https://raw.githubusercontent.com/realgolf/Golf/main/img/4Winning.png)

### Exact

Exact ist ein Spiel, bei dem das Ziel ist, 100 oder weniger zu treffen und dabei die meisten Punkte zu erzielen. Die Spieler erhalten Punkte basierend auf folgenden Kriterien: Das Erreichen genau 100 Meter belohnt mit 5 Punkten, das Treffen von Vielfachen von zehn ergibt 3 Punkte, Zahlen mit wiederholten Ziffern erzielen 2 Punkte. Darüber hinaus verdoppelt das Treffen derselben Zeile die verdienten Punkte. Jede andere Zahl, die 100 überschreitet oder unter 5 fällt, führt zu einem Abzug von 1 Punkt. Jede andere Zahl zwischen 5 und 100 erzielt 1 Punkt. Die Herausforderung besteht darin, Genauigkeit und maximale Punktzahl in Einklang zu bringen, um die höchste Punktzahl zu erreichen.

![Exact Spiel](https://raw.githubusercontent.com/realgolf/Golf/main/img/Exact.png)

### Precision

Precision ist ein Spiel, bei dem das Ziel darin besteht, so nah wie möglich an die Ziele heranzukommen. Für jeden Meter, den Sie das Ziel verfehlen, erhalten Sie einen Abzug von einem Punkt. Der Gewinner des Spiels ist der Spieler mit den meisten Punkten am Ende. Das Spiel endet, wenn nur noch ein Spieler Punkte übrig hat. Sie können die Entfernung, die Sie schießen müssen, und das aktuelle Team sowie die verbleibenden Punkte für jedes Team einsehen.

![Precision Spiel](https://raw.githubusercontent.com/realgolf/Golf/main/img/Precision.png)

</details>

## Lizenz

RealGolf ist lizenziert unter der [All Rights Reserved License](LICENSE.md).

## Kontakt

Für Anfragen oder Feedback können Sie sich gerne an uns wenden:

- E-Mail: [Support](mailto:support@realgolf.games)

Vielen Dank, dass Sie Teil der RealGolf-Community sind!
