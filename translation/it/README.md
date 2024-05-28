# [RealGolf.Games](https://realgolf.games)

![Banner RealGolf.Games](https://raw.githubusercontent.com/realgolf/web/main/img/logo_banner.PNG)

|             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CI/CD       | ![Badge JSON dinamico](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Frender-deploy-status-vwj3.onrender.com%2Fsrv-cn12obocmk4c73di1vg0&query=status&style=flat-square&logo=render&label=Render) [![CodeQL](https://github.com/realgolf/realgolf/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/realgolf/realgolf/actions/workflows/github-code-scanning/codeql) [![Test Golf](https://github.com/realgolf/realgolf/actions/workflows/test.yml/badge.svg)](https://github.com/realgolf/realgolf/actions/workflows/test.yml) [![Codespell](https://github.com/realgolf/realgolf/actions/workflows/codespell.yml/badge.svg?branch=main)](https://github.com/realgolf/realgolf/actions/workflows/codespell.yml) [![Costruisci Kit](https://github.com/realgolf/realgolf/actions/workflows/kit.yml/badge.svg)](https://github.com/realgolf/realgolf/actions/workflows/kit.yml) [![Costruisci Server](https://github.com/realgolf/realgolf/actions/workflows/server.yml/badge.svg)](https://github.com/realgolf/realgolf/actions/workflows/server.yml) |
| Problemi    | ![Problemi GitHub per etichetta](https://img.shields.io/github/issues/realgolf/realgolf/feature) ![Problemi GitHub per etichetta](https://img.shields.io/github/issues/realgolf/realgolf/bug) ![Problemi GitHub per etichetta](https://img.shields.io/github/issues/realgolf/realgolf/game)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Statistiche | [![Crowdin](https://badges.crowdin.net/realgolf/localized.svg)](https://crowdin.com/project/realgolf) ![Dimensione repository GitHub](https://img.shields.io/github/repo-size/realgolf/realgolf) [![Linee di codice](https://tokei.rs/b1/github/realgolf/realgolf)](https://github.com/XAMPPRocky/tokei) [![wakatime](https://wakatime.com/badge/github/realgolf/web.svg)](https://wakatime.com/badge/github/realgolf/web) ![Versione GitHub package.json](https://img.shields.io/github/package-json/v/realgolf/realgolf)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

RealGolf è una piattaforma di allenamento per golfisti, puoi giocare a tre giochi diversi per divertirti di più durante l'allenamento. È la prima piattaforma di allenamento per il golf.

Offre tre giochi diversi: 4Winning, Exact e Precision. Ogni gioco ha il proprio set unico di regole e obiettivi, offrendo un'esperienza diversificata e coinvolgente per i giocatori. RealGolf offre anche una funzionalità multiplayer locale, permettendo agli utenti di competere tra loro sullo stesso dispositivo. La piattaforma include l'autenticazione degli utenti con MongoDB, consentendo ai giocatori di creare account e monitorare i loro progressi. RealGolf è progettato per essere accessibile e facile da usare, rendendo semplice per i golfisti di tutti i livelli godersi i giochi e migliorare le loro abilità.

RealGolf scritto in [Svelte](https://svelte.dev), si basa su [SvelteKit](https://kit.svelte.dev) così come [NodeJS](https://nodejs.org/en). [NodeJS](https:://nodejs.org/en) è utilizzato per fornire un server Node asincrono per la comunicazione tra client e database. [SvelteKit](https://kit.svelte.dev) è utilizzato come la versione full stack di [Svelte](https://svelte.dev). Le connessioni WebSocket sono gestite direttamente dal server Node. [MongoDB](https://www.mongodb.com/) è utilizzato per memorizzare gli account degli utenti così come i dati dei percorsi. Le richieste HTTP sono gestite da [Render](https://render.com). Il client web è scritto in [TypeScript](https://www.typescriptlang.org/) e [Svelte](https://svelte.dev). Il server è scritto in [TypeScript](https://www.typescriptlang.org/) e compilato in JavaScript. [SASS](https://sass-lang.com/) è utilizzato per generare il CSS. Per favore aiutaci a [tradurre RealGolf con Crowdin](https://crowdin.com/project/realgolf).

## Architettura di Produzione (ad aprile 2024)

![Diagramma di architettura di produzione del sito server RealGolf](https://raw.githubusercontent.com/realgolf/realgolf/main/img/architecture.png)

## Utilizzo e Funzionalità

RealGolf.Games Web offre le seguenti funzionalità:

- 3 giochi di golf diversi, tra cui
  - 4Winning
  - Exact
  - Precision
- Funzionalità multiplayer locale per permettere agli utenti di giocare uno contro l'altro sullo stesso dispositivo.
- Autenticazione degli utenti con MongoDB
- Pianificatore di allenamenti
- Tracciatore del punteggio del campo da golf **Sviluppo in pausa [#714](https://github.com/realgolf/realgolf/issues/714)**
- Problema di funzionalità [#715](https://github.com/realgolf/realgolf/issues/715) sollevato per l'implementazione del multiplayer remoto, permettendo agli utenti di competere online.
- Problema di funzionalità [#802](https://github.com/realgolf/realgolf/issues/802) sollevato per l'implementazione di un analizzatore di swing, permettendo agli utenti di analizzare i loro swing e migliorare la tecnica.
- Problema di funzionalità [#726](https://github.com/realgolf/realgolf/issues/726) sollevato per l'implementazione di un'app quiz sulle regole del golf, permettendo agli utenti di migliorare la loro conoscenza delle regole.
- Problema di funzionalità [#719](https://github.com/realgolf/realgolf/issues/719) sollevato per l'implementazione di una classifica globale per la Precisione.

## Giochi

- 4Winning
- Exact
- Precision

<details>
  <summary>Visualizza informazioni su tutti i giochi</summary>

### 4Winning

In 4Winning, l'obiettivo è connettere strategicamente quattro pezzi in fila. La nostra versione del gioco presenta una scacchiera più grande rispetto al layout standard 4x4, con 8 colonne e 9 righe. Le colonne aggiuntive su ogni lato introducono una sfida: i giocatori devono colpire una distanza specifica entro la deviazione laterale. Questo aspetto diventa più pronunciato in modalità Silver e oltre, aggiungendo complessità e richiedendo ai giocatori di considerare attentamente le loro mosse.

![Gioco 4Winning](https://raw.githubusercontent.com/realgolf/realgolf/main/img/4Winning.png)

### Exact

Exact è un gioco in cui l'obiettivo è colpire 100 o meno segnando il maggior numero di punti possibile. I giocatori guadagnano punti in base ai seguenti criteri: raggiungere esattamente 100 metri assegna 5 punti, colpire multipli di dieci guadagna 3 punti, i numeri con cifre ripetute segnano 2 punti. Inoltre, colpire la stessa riga raddoppia i punti guadagnati. Tuttavia, qualsiasi altro numero che superi 100 o cada al di sotto di 5 comporta una deduzione di 1 punto. Ogni altro numero compreso tra 5 e 100 segna 1 punto. La sfida sta nel bilanciare la precisione con il massimizzare i punti per ottenere il punteggio più alto.

![Gioco Exact](https://raw.githubusercontent.com/realgolf/realgolf/main/img/Exact.png)

### Precision

Precision è un gioco in cui l'obiettivo è avvicinarsi il più possibile ai bersagli. Per ogni metro che manca il bersaglio, riceverai una deduzione di un punto. Il vincitore del gioco è il giocatore con il punteggio più alto alla fine. Il gioco si conclude fino a quando rimane solo un giocatore con punti. Puoi osservare la distanza che devi sparare e il team attuale, insieme ai punti rimanenti per ogni team.

![Gioco Precision](https://raw.githubusercontent.com/realgolf/realgolf/main/img/Precision.png)

</details>

## Licenza

RealGolf è concessa in licenza con la [Licenza Tutti i Diritti Riservati](LICENSE.md).

## Contatto

Per domande o feedback, non esitare a contattarci:

- Email: [Supporto](mailto:support@realgolf.games)

Grazie per far parte della comunità RealGolf!
