# [RealGolf.Games](https://realgolf.games)

![RealGolf.Games Banner](https://raw.githubusercontent.com/realgolf/Golf/main/img/logo_banner.PNG)

## Einleitung

Willkommen im RealGolf.Games Web Repository! Dieses Projekt dient als zentraler Ort für die Trainingsplattform von RealGolf. Egal, ob Sie Entwickler, Beitragender oder Benutzer sind, diese README enthält wichtige Informationen, um Ihnen den Einstieg zu erleichtern.

Sie können die Live-Website unter [realgolf.games](https://realgolf.games) besuchen.

|        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CI/CD  | ![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Frender-deploy-status-vwj3.onrender.com%2Fsrv-cn12obocmk4c73di1vg0&query=status&style=flat-square&logo=render&label=Render) [![CodeQL](https://github.com/realgolf/Golf/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/realgolf/Golf/actions/workflows/github-code-scanning/codeql) [![Codespell](https://github.com/realgolf/Golf/actions/workflows/codespell.yml/badge.svg?branch=main)](https://github.com/realgolf/Golf/actions/workflows/codespell.yml) [![Build Kit](https://github.com/realgolf/Golf/actions/workflows/kit.yml/badge.svg)](https://github.com/realgolf/Golf/actions/workflows/kit.yml) [![Build Server](https://github.com/realgolf/Golf/actions/workflows/server.yml/badge.svg)](https://github.com/realgolf/Golf/actions/workflows/server.yml) [![Crowdin](https://badges.crowdin.net/realgolf/localized.svg)](https://crowdin.com/project/realgolf) |
| Issues | ![GitHub issues by-label](https://img.shields.io/github/issues/realgolf/Golf/feature) ![GitHub issues by-label](https://img.shields.io/github/issues/realgolf/Golf/bug) ![GitHub issues by-label](https://img.shields.io/github/issues/realgolf/Golf/game)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Stats  | ![GitHub repo size](https://img.shields.io/github/repo-size/realgolf/Golf) [![Lines of code](https://tokei.rs/b1/github/realgolf/Golf)](https://github.com/XAMPPRocky/tokei) [![wakatime](https://wakatime.com/badge/github/realgolf/web.svg)](https://wakatime.com/badge/github/realgolf/web) ![GitHub package.json version](https://img.shields.io/github/package-json/v/realgolf/web)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

## Projektübersicht

RealGolf.Games Web ist eine webbasierte Plattform, die Ihr Golftrainingserlebnis verbessert. Dieses Repository enthält alle Daten und den Code für die Website.

## Produktionsarchitektur

![RealGolf server site production architecture diagram](https://raw.githubusercontent.com/realgolf/Golf/main/img/architecture.png)

## Abzeichen

- **Render-Status**: ![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Frender-deploy-status-vwj3.onrender.com%2Fsrv-cn12obocmk4c73di1vg0&query=status&style=flat-square&logo=render&label=Render) - Zeigt den aktuellen Bereitstellungsstatus der Website auf Render an.
- **CodeQL**: [![CodeQL](https://github.com/realgolf/Golf/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/realgolf/Golf/actions/workflows/github-code-scanning/codeql) - Analyse der Codequalität mit GitHub CodeQL.
- **GitHub-Repositorygröße**: ![GitHub repo size](https://img.shields.io/github/repo-size/realgolf/Golf) - Zeigt die Größe des GitHub-Repositorys an.

## Verwendung und Funktionen

RealGolf.Games Web bietet die folgenden Funktionen:

- 3 verschiedene Golftrainingsspiele, darunter
  - 4Winning
  - Exact
  - Precision
- Benutzerauthentifizierung mit MongoDB
- Golfplatz-Score-Tracker **Derzeit in Entwicklung**
- Lokale Mehrspielerfunktionalität für Benutzer, um gegeneinander auf demselben Gerät zu spielen.
- Feature-Issue [#715](https://github.com/realgolf/Golf/issues/715) zur Implementierung von Remote-Mehrspielerfunktionalität, die es Benutzern ermöglicht, online gegeneinander anzutreten.

## Spiele

- 4Winning
- Exact
- Precision

<details>
  <summary>Informationen zu allen Spielen anzeigen</summary>

### 4Winning

Bei 4Winning ist das Ziel, strategisch vier Stücke in einer Reihe zu verbinden. Unsere Version des Spiels hat ein größeres Spielfeld als das Standardlayout von 4x4, mit 8 Spalten und 9 Reihen. Die zusätzlichen Spalten auf jeder Seite stellen eine Herausforderung dar: Die Spieler müssen eine spezifische Distanz innerhalb der seitlichen Abweichung treffen. Dieser Aspekt wird in Silbermodus und höher deutlicher und erfordert, dass die Spieler ihre Züge sorgfältig überlegen.

![4Winning Spiel](https://raw.githubusercontent.com/realgolf/Golf/main/img/4Winning.png)

### Exact

Exact ist ein Spiel, bei dem das Ziel darin besteht, 100 oder weniger zu erreichen und dabei die meisten Punkte zu erzielen. Spieler erhalten Punkte basierend auf folgenden Kriterien: Das Erreichen genau 100 Meter belohnt mit 5 Punkten, das Treffen von Vielfachen von zehn bringt 3 Punkte ein, Zahlen mit wiederholten Ziffern erzielen 2 Punkte. Zusätzlich verdoppelt das Treffen derselben Reihe die erzielten Punkte. Jede andere Zahl über 100 oder unter 5 führt jedoch zu einem Abzug von 1 Punkt. Jede andere Zahl zwischen 5 und 100 erzielt 1 Punkt. Die Herausforderung besteht darin, Genauigkeit und Punktemaximierung auszubalancieren, um die höchste Punktzahl zu erreichen.

![Exact Spiel](https://raw.githubusercontent.com/realgolf/Golf/main/img/Exact.png)

### Precision

Precision ist ein Spiel, bei dem das Ziel darin besteht, so nah wie möglich an die Ziele heranzukommen. Für jeden Meter, den du das Ziel verfehlst, erhältst du einen Punktabzug von einem Punkt. Der Gewinner des Spiels ist der Spieler mit den meisten Punkten am Ende. Das Spiel endet, wenn nur noch ein Spieler Punkte hat. Du kannst die Entfernung, die du schießen musst, und das aktuelle Team sowie die verbleibenden Punkte für jedes Team beobachten.

![Precision Spiel](https://raw.githubusercontent.com/realgolf/Golf/main/img/Precision.png)

</details>

## Lizenz

Dieses Projekt ist unter der [All Rights Reserved License](LICENSE.md) lizenziert.

## Anerkennungen

Wir möchten den folgenden Projekten und Bibliotheken für ihre Beiträge danken:

- [SvelteKit](https://github.com/sveltejs/kit)
- [MongoDB](https://github.com/mongodb)
- [Render](https://github.com/renderinc)

## Kontakt

Für Anfragen oder Feedback können Sie sich gerne an uns wenden:

- E-Mail: [Support](mailto:support@realgolf.games)

Vielen Dank, dass Sie Teil der RealGolf-Community sind!
