# [RealGolf.Games](https://realgolf.games)

![Bannière RealGolf.Games](https://raw.githubusercontent.com/realgolf/Golf/main/img/logo_banner.PNG)

## Introduction

Bienvenue dans le dépôt du site Web RealGolf.Games ! Ce projet sert de centre pour la plateforme d'entraînement de RealGolf. Que vous soyez développeur, contributeur ou utilisateur, ce README fournit des informations essentielles pour vous aider à démarrer.

Vous pouvez visiter le site web en direct sur [realgolf.games](https://realgolf.games).

|        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CI/CD  | ![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Frender-deploy-status-vwj3.onrender.com%2Fsrv-cn12obocmk4c73di1vg0&query=status&style=flat-square&logo=render&label=Render) [![CodeQL](https://github.com/realgolf/Golf/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/realgolf/Golf/actions/workflows/github-code-scanning/codeql) [![Codespell](https://github.com/realgolf/Golf/actions/workflows/codespell.yml/badge.svg?branch=main)](https://github.com/realgolf/Golf/actions/workflows/codespell.yml) [![Build Kit](https://github.com/realgolf/Golf/actions/workflows/kit.yml/badge.svg)](https://github.com/realgolf/Golf/actions/workflows/kit.yml) [![Build Server](https://github.com/realgolf/Golf/actions/workflows/server.yml/badge.svg)](https://github.com/realgolf/Golf/actions/workflows/server.yml) [![Crowdin](https://badges.crowdin.net/realgolf/localized.svg)](https://crowdin.com/project/realgolf) |
| Issues | ![GitHub issues by-label](https://img.shields.io/github/issues/realgolf/Golf/feature) ![GitHub issues by-label](https://img.shields.io/github/issues/realgolf/Golf/bug) ![GitHub issues by-label](https://img.shields.io/github/issues/realgolf/Golf/game)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Stats  | ![GitHub repo size](https://img.shields.io/github/repo-size/realgolf/Golf) [![Lines of code](https://tokei.rs/b1/github/realgolf/Golf)](https://github.com/XAMPPRocky/tokei) [![wakatime](https://wakatime.com/badge/github/realgolf/web.svg)](https://wakatime.com/badge/github/realgolf/web) ![GitHub package.json version](https://img.shields.io/github/package-json/v/realgolf/Golf)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

## Aperçu du projet

RealGolf.Games Web est une plateforme basée sur le web qui améliore votre expérience d'entraînement au golf. Ce dépôt contient toutes les données et le code du site web.

## Architecture de production

![Diagramme d'architecture de production du site RealGolf](https://raw.githubusercontent.com/realgolf/Golf/main/img/architecture.png)

## Badges

- **État du déploiement sur Render** : ![Badge JSON dynamique](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Frender-deploy-status-vwj3.onrender.com%2Fsrv-cn12obocmk4c73di1vg0&query=status&style=flat-square&logo=render&label=Render) - Indique l'état actuel du déploiement du site sur Render.
- **CodeQL** : [![CodeQL](https://github.com/realgolf/Golf/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/realgolf/Golf/actions/workflows/github-code-scanning/codeql) - Analyse de la qualité du code avec GitHub CodeQL.
- **Taille du dépôt GitHub** : ![Taille du dépôt GitHub](https://img.shields.io/github/repo-size/realgolf/Golf) - Indique la taille du dépôt GitHub.

## Utilisation et fonctionnalités

RealGolf.Games Web propose les fonctionnalités suivantes :

- 3 différents jeux de golf, comprenant
  - 4Winning
  - Exact
  - Précision
- Authentification des utilisateurs avec MongoDB
- Suivi des scores sur le parcours de golf **Actuellement en développement**
- Fonctionnalité multijoueur local permettant aux utilisateurs de jouer les uns contre les autres sur le même appareil.
- Problème de fonctionnalité [#160](https://github.com/realgolf/Golf/issues/160) soulevé pour implémenter un multijoueur distant, permettant aux utilisateurs de se défier en ligne.

## Jeux

- 4Winning
- Exact
- Précision

<details>
  <summary>Voir des informations sur tous les jeux</summary>

### 4Winning

Dans 4Winning, l'objectif est de connecter stratégiquement quatre pièces en ligne. Notre version du jeu présente un plateau plus grand que la disposition standard 4x4, avec 8 colonnes et 9 rangées. Les colonnes supplémentaires de chaque côté introduisent un défi : les joueurs doivent frapper à une distance spécifique dans la déviation latérale. Cet aspect devient plus prononcé en mode Argent et supérieur, ajoutant de la complexité et obligeant les joueurs à réfléchir soigneusement à leurs mouvements.

![Jeu 4Winning](https://raw.githubusercontent.com/realgolf/Golf/main/img/4Winning.png)

### Exact

Exact est un jeu où l'objectif est d'atteindre 100 ou moins tout en marquant le plus de points possible. Les joueurs gagnent des points en fonction des critères suivants : Atteindre exactement 100 mètres accorde 5 points, frapper des multiples de dix rapporte 3 points, les nombres avec des chiffres répétés marquent 2 points. De plus, frapper la même rangée double les points gagnés. Cependant, tout autre nombre dépassant 100 ou tombant en dessous de 5 entraîne une déduction d'1 point. Tout autre nombre entre 5 et 100 marque 1 point. Le défi réside dans l'équilibre entre la précision et la maximisation des points pour atteindre le score le plus élevé.

![Jeu Exact](https://raw.githubusercontent.com/realgolf/Golf/main/img/Exact.png)

### Précision

Précision est un jeu où l'objectif est de se rapprocher le plus possible des cibles. Pour chaque mètre où vous manquez la cible, vous recevez une déduction d'un point. Le gagnant du jeu est le joueur ayant le plus de points à la fin. Le jeu se termine lorsque seul un joueur a des points. Vous pouvez observer la distance que vous devez tirer, l'équipe actuelle ainsi que les points restants pour chaque équipe.

![Jeu Précision](https://raw.githubusercontent.com/realgolf/Golf/main/img/Precision.png)

</details>

## Licence

Ce projet est sous licence [All Rights Reserved License](LICENSE.md).

## Remerciements

Nous tenons à remercier les projets et bibliothèques suivants pour leurs contributions :

- [SvelteKit](https://github.com/sveltejs/kit)
- [MongoDB](https://github.com/mongodb)
- [Render](https://github.com/renderinc)

## Contact

Pour des questions ou des commentaires, n'hésitez pas à nous contacter :

- Email : [Support](mailto:support@realgolf.games)

Merci de faire partie de la communauté RealGolf !
