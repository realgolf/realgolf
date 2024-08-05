# [RealGolf.Games](https://realgolf.games)

![Bannière RealGolf.Games](https://raw.githubusercontent.com/realgolf/web/main/img/logo_banner.PNG)

|              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CI/CD        | ![Badge JSON dynamique](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Frender-deploy-status-vwj3.onrender.com%2Fsrv-cpbhfa5ds78s73evmceg&query=status&style=flat-square&logo=render&label=Render) [![CodeQL](https://github.com/realgolf/realgolf/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/realgolf/realgolf/actions/workflows/github-code-scanning/codeql) [![Test Golf](https://github.com/realgolf/realgolf/actions/workflows/test.yml/badge.svg)](https://github.com/realgolf/realgolf/actions/workflows/test.yml) [![Codespell](https://github.com/realgolf/realgolf/actions/workflows/codespell.yml/badge.svg?branch=main)](https://github.com/realgolf/realgolf/actions/workflows/codespell.yml) [![Construction Kit](https://github.com/realgolf/realgolf/actions/workflows/kit.yml/badge.svg)](https://github.com/realgolf/realgolf/actions/workflows/kit.yml) [![Construction Serveur](https://github.com/realgolf/realgolf/actions/workflows/server.yml/badge.svg)](https://github.com/realgolf/realgolf/actions/workflows/server.yml) |
| Problèmes    | ![Problèmes GitHub par libellé](https://img.shields.io/github/issues/realgolf/realgolf/feature) ![Problèmes GitHub par libellé](https://img.shields.io/github/issues/realgolf/realgolf/bug) ![Problèmes GitHub par libellé](https://img.shields.io/github/issues/realgolf/realgolf/game)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Statistiques | [![Crowdin](https://badges.crowdin.net/realgolf/localized.svg)](https://crowdin.com/project/realgolf) ![Taille du dépôt GitHub](https://img.shields.io/github/repo-size/realgolf/realgolf) [![Lignes de code](https://tokei.rs/b1/github/realgolf/realgolf)](https://github.com/XAMPPRocky/tokei) [![wakatime](https://wakatime.com/badge/github/realgolf/web.svg)](https://wakatime.com/badge/github/realgolf/web) ![Version GitHub package.json](https://img.shields.io/github/package-json/v/realgolf/realgolf)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

RealGolf.Games est une plateforme d'entraînement pour golfeurs, où vous pouvez jouer à trois jeux différents pour vous amuser encore plus pendant l'entraînement. C'est la première plateforme d'entraînement au golf.

Elle propose trois jeux différents : 4Winning, Exact et Precision. Chaque jeu a son propre ensemble de règles et d'objectifs uniques, offrant une expérience diversifiée et attrayante pour les joueurs. RealGolf.Games offre également une fonctionnalité multijoueur local, permettant aux utilisateurs de compétitionner les uns contre les autres sur le même appareil. La plateforme inclut une authentification des utilisateurs avec MongoDB, permettant aux joueurs de créer des comptes et de suivre leur progression. RealGolf.Games est conçu pour être accessible et convivial, permettant aux golfeurs de tous niveaux de compétence de profiter des jeux et d'améliorer leurs compétences.

RealGolf.Games, écrit en [Svelte](https://svelte.dev), repose sur [SvelteKit](https://kit.svelte.dev) ainsi que [NodeJS](https://nodejs.org/en). [NodeJS](https://nodejs.org/en) est utilisé pour fournir un serveur Node asynchrone pour la communication entre clients et bases de données. [SvelteKit](https://kit.svelte.dev) est utilisé comme la version full-stack de [Svelte](https://svelte.dev). Les connexions Web Socket sont gérées directement par le serveur Node. [MongoDB](https://www.mongodb.com/) est utilisé pour stocker les comptes utilisateurs ainsi que les données de cours. Les requêtes HTTP sont gérées par [Render](https://render.com). Le client web est écrit en [TypeScript](https://www.typescriptlang.org/) et [Svelte](https://svelte.dev). Le serveur est écrit en [TypeScript](https://www.typescriptlang.org/) et compilé en JavaScript. [SASS](https://sass-lang.com/) est utilisé pour générer le CSS. Veuillez nous aider à [traduire RealGolf.Games avec Crowdin](https://crowdin.com/project/realgolf).

## Architecture de Production (à partir d'avril 2024)

![Diagramme d'architecture de production du serveur RealGolf.Games](https://raw.githubusercontent.com/realgolf/realgolf/main/img/architecture.png)

## Utilisation et Fonctionnalités

RealGolf.Games Web offre les fonctionnalités suivantes :

- 3 jeux de golf différents, comprenant
  - 4Winning
  - Exact
  - Precision
- Fonctionnalité multijoueur local pour que les utilisateurs jouent les uns contre les autres sur le même appareil.
- Authentification des utilisateurs avec MongoDB
- Planificateur d'entraînement
- Suivi des scores des parcours de golf **Développement en pause [#714](https://github.com/realgolf/realgolf/issues/714)**
- Problème de fonctionnalité [#715](https://github.com/realgolf/realgolf/issues/715) soulevé pour implémenter le multijoueur à distance, permettant aux utilisateurs de jouer en ligne les uns contre les autres.
- Problème de fonctionnalité [#802](https://github.com/realgolf/realgolf/issues/802) soulevé pour implémenter un outil d'analyse de swing, permettant aux utilisateurs d'analyser leurs swings et d'améliorer leur technique.
- Problème de fonctionnalité [#726](https://github.com/realgolf/realgolf/issues/726) soulevé pour implémenter une application de quiz sur les règles de golf, permettant aux utilisateurs d'améliorer leur connaissance

## Jeux

- 4Winning
- Exact
- Precision

<details>
  <summary>Voir les informations sur tous les jeux</summary>

### 4Winning

Dans 4Winning, l'objectif est de connecter stratégiquement quatre pièces en ligne. Notre version du jeu présente un plateau plus grand que la disposition standard 4x4, avec 8 colonnes et 9 rangées. Les colonnes supplémentaires de chaque côté introduisent un défi : les joueurs doivent frapper une distance spécifique dans la déviation latérale. Cet aspect devient plus prononcé en Mode Argent et au-dessus, ajoutant de la complexité et obligeant les joueurs à considérer soigneusement leurs mouvements.

![Jeu 4Winning](https://raw.githubusercontent.com/realgolf/realgolf/main/img/4Winning.png)

### Exact

Exact est un jeu où l'objectif est de frapper 100 ou moins tout en marquant le plus de points possible. Les joueurs gagnent des points selon les critères suivants : Atteindre exactement 100 mètres accorde 5 points, frapper des multiples de dix rapporte 3 points, les nombres avec des chiffres répétés marquent 2 points. De plus, frapper la même rangée double les points gagnés. Cependant, tout autre nombre dépassant 100 ou tombant en dessous de 5 entraîne une déduction d'un point. Tout autre nombre entre 5 et 100 rapporte 1 point. Le défi réside dans l'équilibre entre la précision et la maximisation des points pour obtenir le score le plus élevé.

![Jeu Exact](https://raw.githubusercontent.com/realgolf/realgolf/main/img/Exact.png)

### Precision

Precision est un jeu où l'objectif est de se rapprocher le plus possible des cibles. Pour chaque mètre que vous manquez la cible, vous recevrez une déduction d'un point. Le gagnant du jeu est le joueur avec le plus de points à la fin. Le jeu se termine jusqu'à ce qu'il ne reste plus qu'un joueur avec des points. Vous pouvez observer la distance que vous devez tirer et l'équipe actuelle, ainsi que les points restants pour chaque équipe.

![Jeu Precision](https://raw.githubusercontent.com/realgolf/realgolf/main/img/Precision.png)

</details>

## Licence

RealGolf.Games est sous licence [All Rights Reserved License](LICENSE.md).

## Contact

Pour toute question ou commentaire, n'hésitez pas à nous contacter :

- Email : [Support](mailto:support@realgolf.games)

Merci de faire partie de la communauté RealGolf.Games !
