<svelte:head>
  <title>Exact</title>
</svelte:head>

<h1>Exact</h1>

<main>
  <div>
    <h2>Rules</h2>

    <ul>
      <li>It is played alternately</li>
      <li>Click the Field you hit.</li>
      <li>Respect the levels</li>
      <li>Only the intger number applies</li>
    </ul>
  </div>

  <div>
    <h2>Levels</h2>

    <ol>
      <li>Bronze: Only the lenght of the shot applies</li>
      <li>
        Silver: The number of meters and the lateral deviation apply. - lateral
        deviation gets choosed by the players
      </li>
      <li>
        Gold: Fields can only be played after prior announcement. The rest is
        like Silver
      </li>
      <li>Platinum: Like gold, all with a club.</li>
    </ol>
  </div>

  <div>
    <h2>Game modes</h2>
    <ol>
      <li><a href="/dashboard/exact/two-players">Two players / teams</a></li>
      <li><a href="/dashboard/exact/three-players">Three players / teams</a></li>
      <li><a href="/dashboard/exact/four-players">Four players / teams</a></li>
    </ol>
  </div>
</main>

<style lang="scss">
  main {
    max-width: 40rem;
    padding-inline: 1rem;
    div {
      display: block;

      ol {
        margin-left: 4vw;
        line-break: auto;
      }
      ol {
        list-style: upper-latin;
      }
    }
  }
</style>
