# [RealGolf.Games](https://realgolf.games)

![Bannière RealGolf.Games](https://raw.githubusercontent.com/realgolf/web/main/img/logo_banner.PNG)

![Badge JSON dynamique](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Frender-deploy-status-vwj3.onrender.com%2Fsrv-cn12obocmk4c73di1vg0&query=status&style=flat-square&logo=render&label=Render) [![CodeQL](https://github.com/realgolf/Golf/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/realgolf/Golf/actions/workflows/github-code-scanning/codeql) [![Codespell](https://github.com/realgolf/Golf/actions/workflows/codespell.yml/badge.svg?branch=main)](https://github.com/realgolf/Golf/actions/workflows/codespell.yml) [![Construction Kit](https://github.com/realgolf/Golf/actions/workflows/kit.yml/badge.svg)](https://github.com/realgolf/Golf/actions/workflows/kit.yml) [![Serveur de construction](https://github.com/realgolf/Golf/actions/workflows/server.yml/badge.svg)](https://github.com/realgolf/Golf/actions/workflows/server.yml) [![Crowdin](https://badges.crowdin.net/realgolf/localized.svg)](https://crowdin.com/project/realgolf) ![Problèmes GitHub par étiquette](https://img.shields.io/github/issues/realgolf/Golf/feature) ![Problèmes GitHub par étiquette](https://img.shields.io/github/issues/realgolf/Golf/bug) ![Problèmes GitHub par étiquette](https://img.shields.io/github/issues/realgolf/Golf/game) ![Taille du dépôt GitHub](https://img.shields.io/github/repo-size/realgolf/Golf) [![Lignes de code](https://tokei.rs/b1/github/realgolf/Golf)](https://github.com/XAMPPRocky/tokei) [![wakatime](https://wakatime.com/badge/github/realgolf/web.svg)](https://wakatime.com/badge/github/realgolf/web) ![Version package.json GitHub](https://img.shields.io/github/package-json/v/realgolf/Golf)

RealGolf est une plateforme d'entraînement pour les golfeurs. Vous pouvez jouer à trois jeux différents pour rendre l'entraînement plus amusant. C'est la première plateforme d'entraînement au golf.

Il propose trois jeux différents : 4Winning, Exact et Precision. Chaque jeu a ses propres règles et objectifs uniques, offrant ainsi une expérience diversifiée et engageante pour les joueurs. RealGolf propose également une fonctionnalité multijoueur local, permettant aux utilisateurs de jouer les uns contre les autres sur le même appareil. La plateforme inclut une authentification utilisateur avec MongoDB, permettant aux joueurs de créer des comptes et de suivre leur progression. RealGolf est conçu pour être accessible et convivial, ce qui permet aux golfeurs de tous niveaux de compétence de profiter des jeux et d'améliorer leurs compétences.

RealGolf est écrit en [Svelte](https://svelte.dev), reposant sur [SvelteKit](https://kit.svelte.dev) ainsi que sur [NodeJS](https://nodejs.org/en). [NodeJS](https:://nodejs.org/en) est utilisé pour fournir un serveur node asynchrone pour la communication entre clients et bases de données. [SvelteKit](https://kit.svelte.dev) est utilisé comme version full-stack de [Svelte](https://svelte.dev). Les connexions WebSocket sont gérées directement par le serveur Node. [MongoDB](https://www.mongodb.com/) est utilisé pour stocker les comptes utilisateurs ainsi que les données des parcours. Les requêtes HTTP sont gérées par [Render](https://render.com). Le client web est écrit en [TypeScript](https://www.typescriptlang.org/) et [Svelte](https://svelte.dev). Le serveur est écrit en [TypeScript](https://www.typescriptlang.org/) et compilé en JavaScript. [SASS](https://sass-lang.com/) est utilisé pour générer le CSS. Veuillez nous aider à [traduire RealGolf avec Crowdin](https://crowdin.com/project/realgolf).

## Architecture de production (en date d'avril 2024)

![Diagramme de l'architecture de production du site serveur RealGolf](https://raw.githubusercontent.com/realgolf/Golf/main/img/architecture.png)

## Utilisation et fonctionnalités

RealGolf.Games Web propose les fonctionnalités suivantes :

- 3 différents jeux de golf, comprenant
  - 4Winning
  - Exact
  - Precision
- Fonctionnalité multijoueur local permettant aux utilisateurs de jouer les uns contre les autres sur le même appareil.
- Authentification utilisateur avec MongoDB
- Suivi des scores des parcours de golf **Développement en pause [#714](https://github.com/realgolf/Golf/issues/714)**
- Planificateur d'entraînements **Actuellement en développement [#718](https://github.com/realgolf/Golf/issues/718)**
- Problème de fonctionnalité [#715](https://github.com/realgolf/Golf/issues/715) soulevé pour implémenter le multijoueur distant, permettant aux utilisateurs de concourir en ligne les uns contre les autres.

## Jeux

- 4Winning
- Exact
- Precision

<details>
  <summary>Voir des informations sur tous les jeux</summary>

### 4Winning

Dans 4Winning, l'objectif est de connecter stratégiquement quatre pièces à la suite. Notre version du jeu présente un plateau plus grand que la disposition standard 4x4, avec 8 colonnes et 9 lignes. Les colonnes supplémentaires de chaque côté introduisent un défi : les joueurs doivent frapper une distance spécifique dans la déviation latérale. Cet aspect devient plus prononcé en mode Argent et supérieur, ajoutant de la complexité et obligeant les joueurs à réfléchir soigneusement à leurs mouvements.

![Jeu 4Winning](https://raw.githubusercontent.com/realgolf/Golf/main/img/4Winning.png)

### Exact

Exact est un jeu où l'objectif est d'atteindre 100 ou moins tout en marquant le plus de points. Les joueurs gagnent des points en fonction des critères suivants : Atteindre exactement 100 mètres accorde 5 points, frapper des multiples de dix rapporte 3 points, les chiffres avec des chiffres répétés rapportent 2 points. De plus, frapper la même rangée double les points gagnés. Cependant, tout autre chiffre dépassant 100 ou tombant en dessous de 5 entraîne une déduction d'un point. Tout autre chiffre entre 5 et 100 rapporte 1 point. Le défi consiste à équilibrer la précision avec la maximisation des points pour obtenir le meilleur score.

![Jeu Exact](https://raw.githubusercontent.com/realgolf/Golf/main/img/Exact.png)

### Precision

Precision est un jeu où l'objectif est de se rapprocher le plus possible des cibles. Pour chaque mètre que vous manquez la cible, vous recevrez une déduction d'un point. Le gagnant du jeu est le joueur ayant le plus de points à la fin. Le jeu se termine lorsque seul un joueur a des points restants. Vous pouvez observer la distance que vous devez tirer et l'équipe actuelle, ainsi que les points restants pour chaque équipe.

![Jeu Precision](https://raw.githubusercontent.com/realgolf/Golf/main/img/Precision.png)

</details>

## Licence

RealGolf est sous licence [All Rights Reserved License](LICENSE.md).

## Contact

Pour toute question ou commentaire, n'hésitez pas à nous contacter :

- Email : [Support](mailto:support@realgolf.games)

Merci de faire partie de la communauté RealGolf !
