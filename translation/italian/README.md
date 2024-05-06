# [RealGolf.Games](https://realgolf.games)

![Banner RealGolf.Games](https://raw.githubusercontent.com/realgolf/web/main/img/logo_banner.PNG)

## Introduzione

Benvenuto nel repository del sito web di RealGolf.Games! Questo progetto funge da centro per la piattaforma di addestramento di RealGolf. Che tu sia uno sviluppatore, un collaboratore o un utente, questo README fornisce informazioni essenziali per iniziare.

Puoi visitare il sito web live su [realgolf.games](https://realgolf.games).

|             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CI/CD       | ![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Frender-deploy-status-vwj3.onrender.com%2Fsrv-cn12obocmk4c73di1vg0&query=status&style=flat-square&logo=render&label=Render) [![CodeQL](https://github.com/realgolf/web/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/realgolf/web/actions/workflows/github-code-scanning/codeql) [![Codespell](https://github.com/realgolf/web/actions/workflows/codespell.yml/badge.svg?branch=main)](https://github.com/realgolf/web/actions/workflows/codespell.yml) [![Build Kit](https://github.com/realgolf/web/actions/workflows/kit.yml/badge.svg)](https://github.com/realgolf/web/actions/workflows/kit.yml) [![Build Server](https://github.com/realgolf/web/actions/workflows/server.yml/badge.svg)](https://github.com/realgolf/web/actions/workflows/server.yml) [![Crowdin](https://badges.crowdin.net/realgolf/localized.svg)](https://crowdin.com/project/realgolf) |
| Problemi    | ![GitHub issues by-label](https://img.shields.io/github/issues/realgolf/web/feature) ![GitHub issues by-label](https://img.shields.io/github/issues/realgolf/web/bug) ![GitHub issues by-label](https://img.shields.io/github/issues/realgolf/web/game)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Statistiche | ![GitHub repo size](https://img.shields.io/github/repo-size/realgolf/web) [![Lines of code](https://tokei.rs/b1/github/realgolf/web)](https://github.com/XAMPPRocky/tokei) [![wakatime](https://wakatime.com/badge/github/realgolf/web.svg)](https://wakatime.com/badge/github/realgolf/web) ![GitHub package.json version](https://img.shields.io/github/package-json/v/realgolf/web)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

## Panoramica del Progetto

RealGolf.Games Web è una piattaforma basata sul web che migliora la tua esperienza di allenamento di golf. Questo repository contiene tutti i dati e il codice per il sito web.

## Architettura di Produzione

![Diagramma dell'architettura di produzione del sito RealGolf](https://raw.githubusercontent.com/realgolf/web/main/img/architecture.png)

## Badge

- **Stato di Render**: ![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Frender-deploy-status-vwj3.onrender.com%2Fsrv-cn12obocmk4c73di1vg0&query=status&style=flat-square&logo=render&label=Render) - Indica lo stato corrente del deployment del sito su Render.
- **CodeQL**: [![CodeQL](https://github.com/realgolf/web/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/realgolf/web/actions/workflows/github-code-scanning/codeql) - Analisi della qualità del codice utilizzando GitHub CodeQL.
- **Dimensione del Repository GitHub**: ![GitHub repo size](https://img.shields.io/github/repo-size/realgolf/web) - Mostra la dimensione del repository GitHub.

## Utilizzo e Funzionalità

RealGolf.Games Web offre le seguenti funzionalità:

- 3 diversi Giochi di Golf, che includono
  - 4Winning
  - Exact
  - Precision
- Autenticazione Utente con MongoDB
- Tracker Punteggio del Campo da Golf **Attualmente in fase di sviluppo**
- Funzionalità multiplayer locale per gli utenti che desiderano giocare l'uno contro l'altro sullo stesso dispositivo.
- Issue di feature [#160](https://github.com/realgolf/web/issues/160) sollevata per implementare il multiplayer remoto, consentendo agli utenti di competere online l'uno contro l'altro.

## Giochi

- 4Winning
- Exact
- Precision

<details>
  <summary>Visualizza informazioni su tutti i giochi</summary>

### 4Winning

In 4Winning, l'obiettivo è quello di collegare strategicamente quattro pezzi in fila. La nostra versione del gioco presenta una board più grande rispetto al layout standard 4x4, con 8 colonne e 9 righe. Le colonne aggiuntive su ogni lato introducono una sfida: i giocatori devono colpire una distanza specifica all'interno della deviazione laterale. Questo aspetto diventa più pronunciato in Modalità Argento e oltre, aggiungendo complessità e richiedendo ai giocatori di considerare attentamente le loro mosse.

![Gioco 4Winning](https://raw.githubusercontent.com/realgolf/web/main/img/4Winning.png)

### Exact

Exact è un gioco in cui l'obiettivo è colpire 100 o meno mentre si ottengono il maggior numero di punti. I giocatori guadagnano punti in base ai seguenti criteri: Ottenere esattamente 100 metri concede 5 punti, colpire multipli di dieci guadagna 3 punti, i numeri con cifre ripetute ottengono 2 punti. Inoltre, colpire la stessa riga raddoppia i punti ottenuti. Tuttavia, qualsiasi altro numero che superi 100 o cada al di sotto di 5 comporta una deduzione di 1 punto. Ogni altro numero compreso tra 5 e 100 segna 1 punto. La sfida sta nel bilanciare la precisione con la massimizzazione dei punti per ottenere il punteggio più alto.

![Gioco Exact](https://raw.githubusercontent.com/realgolf/web/main/img/Exact.png)

### Precision

Precision è un gioco in cui l'obiettivo è avvicinarsi il più possibile ai bersagli. Per ogni metro in cui ti manca il bersaglio, riceverai una deduzione di un punto. Il vincitore del gioco è il giocatore con il punteggio più alto alla fine. Il gioco termina quando solo un giocatore ha ancora punti. Puoi osservare la distanza che devi sparare e la squadra attuale, insieme ai punti rimanenti per ciascuna squadra.

![Gioco Precision](https://raw.githubusercontent.com/realgolf/web/main/img/Precision.png)

</details>

## Licenza

Questo progetto è concesso in licenza sotto la [Licenza Tutti i Diritti Riservati](LICENSE.md).

## Ringraziamenti

Vorremmo ringraziare i seguenti progetti e librerie per il loro contributo:

- [SvelteKit](https://github.com/sveltejs/kit)
- [MongoDB](https://github.com/mongodb)
- [Render](https://github.com/renderinc)

## Contatto

Per domande o feedback, non esitare a contattarci:

- Email: [Supporto](mailto:support@realgolf.games)

Grazie per far parte della comunità di RealGolf!
