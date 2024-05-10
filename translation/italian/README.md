# [RealGolf.Games](https://realgolf.games)

![Banner di RealGolf.Games](https://raw.githubusercontent.com/realgolf/web/main/img/logo_banner.PNG)

![Badge JSON dinamico](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Frender-deploy-status-vwj3.onrender.com%2Fsrv-cn12obocmk4c73di1vg0&query=status&style=flat-square&logo=render&label=Render) [![CodeQL](https://github.com/realgolf/Golf/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/realgolf/Golf/actions/workflows/github-code-scanning/codeql) [![Codespell](https://github.com/realgolf/Golf/actions/workflows/codespell.yml/badge.svg?branch=main)](https://github.com/realgolf/Golf/actions/workflows/codespell.yml) [![Kit di Costruzione](https://github.com/realgolf/Golf/actions/workflows/kit.yml/badge.svg)](https://github.com/realgolf/Golf/actions/workflows/kit.yml) [![Server di Costruzione](https://github.com/realgolf/Golf/actions/workflows/server.yml/badge.svg)](https://github.com/realgolf/Golf/actions/workflows/server.yml) [![Crowdin](https://badges.crowdin.net/realgolf/localized.svg)](https://crowdin.com/project/realgolf) ![Problemi GitHub per etichetta](https://img.shields.io/github/issues/realgolf/Golf/feature) ![Problemi GitHub per etichetta](https://img.shields.io/github/issues/realgolf/Golf/bug) ![Problemi GitHub per etichetta](https://img.shields.io/github/issues/realgolf/Golf/game) ![Dimensione del repository GitHub](https://img.shields.io/github/repo-size/realgolf/Golf) [![Linee di codice](https://tokei.rs/b1/github/realgolf/Golf)](https://github.com/XAMPPRocky/tokei) [![wakatime](https://wakatime.com/badge/github/realgolf/web.svg)](https://wakatime.com/badge/github/realgolf/web) ![Versione di package.json GitHub](https://img.shields.io/github/package-json/v/realgolf/Golf)

RealGolf è una piattaforma di allenamento per golfisti. Puoi giocare a tre giochi diversi per rendere l'allenamento più divertente. È la prima piattaforma di allenamento per il golf.

Offre tre giochi diversi: 4Winning, Exact e Precision. Ogni gioco ha le proprie regole e obiettivi unici, offrendo un'esperienza variegata e coinvolgente per i giocatori. RealGolf offre anche funzionalità multigiocatore locale, che consente agli utenti di competere tra loro sullo stesso dispositivo. La piattaforma include l'autenticazione dell'utente con MongoDB, consentendo ai giocatori di creare account e tenere traccia dei loro progressi. RealGolf è progettato per essere accessibile e user-friendly, rendendo facile per i golfisti di tutti i livelli di abilità godersi i giochi e migliorare le loro abilità.

RealGolf è scritto in [Svelte](https://svelte.dev), si basa su [SvelteKit](https://kit.svelte.dev) e su [NodeJS](https://nodejs.org/en). [NodeJS](https:://nodejs.org/en) viene utilizzato per fornire un server node asincrono per la comunicazione tra client e database. [SvelteKit](https://kit.svelte.dev) viene utilizzato come versione full stack di [Svelte](https://svelte.dev). Le connessioni WebSocket sono gestite direttamente dal server Node. [MongoDB](https://www.mongodb.com/) viene utilizzato per memorizzare gli account degli utenti e i dati dei percorsi. Le richieste HTTP sono gestite da [Render](https://render.com). Il client web è scritto in [TypeScript](https://www.typescriptlang.org/) e [Svelte](https://svelte.dev). Il server è scritto in [TypeScript](https://www.typescriptlang.org/) e compilato in JavaScript. [SASS](https://sass-lang.com/) viene utilizzato per generare il CSS. Ti preghiamo di aiutarci a [tradurre RealGolf con Crowdin](https://crowdin.com/project/realgolf).

## Architettura di Produzione (aprile 2024)

![Diagramma dell'architettura di produzione del server RealGolf](https://raw.githubusercontent.com/realgolf/Golf/main/img/architecture.png)

## Utilizzo e Caratteristiche

RealGolf.Games Web offre le seguenti caratteristiche:

- 3 giochi di golf diversi, che includono
  - 4Winning
  - Exact
  - Precision
- Funzionalità multigiocatore locale per consentire agli utenti di giocare tra loro sullo stesso dispositivo.
- Autenticazione utente con MongoDB
- Tracker dei punteggi dei percorsi di golf **Sviluppo in pausa [#714](https://github.com/realgolf/Golf/issues/714)**
- Planner di Allenamenti **Attualmente in fase di sviluppo [#718](https://github.com/realgolf/Golf/issues/718)**
- Problema di funzionalità [#715](https://github.com/realgolf/Golf/issues/715) sollevato per l'implementazione del multigiocatore remoto, consentendo agli utenti di competere tra loro online.

## Giochi

- 4Winning
- Exact
- Precision

<details>
  <summary>Visualizza informazioni su tutti i giochi</summary>

### 4Winning

In 4Winning, l'obiettivo è connettere strategicamente quattro pezzi in fila. La nostra versione del gioco presenta una tavola più grande rispetto alla disposizione standard 4x4, con 8 colonne e 9 righe. Le colonne aggiuntive su ogni lato introducono una sfida: i giocatori devono colpire una distanza specifica all'interno della deviazione laterale. Questo aspetto diventa più pronunciato in modalità Argento e superiori, aggiungendo complessità e richiedendo ai giocatori di considerare attentamente le loro mosse.

![Gioco 4Winning](https://raw.githubusercontent.com/realgolf/Golf/main/img/4Winning.png)

### Exact

Exact è un gioco in cui l'obiettivo è colpire 100 o meno segnando il maggior numero di punti. I giocatori guadagnano punti in base ai seguenti criteri: Raggiungere esattamente 100 metri premia 5 punti, colpire multipli di dieci guadagna 3 punti, i numeri con cifre ripetute segnano 2 punti. Inoltre, colpire la stessa riga raddoppia i punti guadagnati. Tuttavia, qualsiasi altro numero che superi 100 o scenda sotto 5 comporta una deduzione di 1 punto. Ogni altro numero compreso tra 5 e 100 segna 1 punto. La sfida consiste nel bilanciare la precisione con la massimizzazione dei punti per ottenere il punteggio più alto.

![Gioco Exact](https://raw.githubusercontent.com/realgolf/Golf/main/img/Exact.png)

### Precision

Precision è un gioco in cui l'obiettivo è avvicinarsi il più possibile ai bersagli. Per ogni metro che manchi il bersaglio, riceverai una deduzione di un punto. Il vincitore del gioco è il giocatore con il punteggio più alto alla fine. Il gioco si conclude quando solo un giocatore ha punti rimanenti. È possibile osservare la distanza che devi tirare e la squadra attuale, insieme ai punti rimanenti per ciascuna squadra.

![Gioco Precision](https://raw.githubusercontent.com/realgolf/Golf/main/img/Precision.png)

</details>

## Licenza

RealGolf è distribuito con licenza [All Rights Reserved License](LICENSE.md).

## Contatto

Per domande o commenti, non esitare a contattarci:

- Email: [Supporto](mailto:support@realgolf.games)

Grazie per far parte della comunità di RealGolf!
