<svelte:head>
  <title>Exact</title>
</svelte:head>

<h1>Exact</h1>

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
    <li>Silver: The number of meters and the lateral deviation apply. - lateral deviation gets choosed by the players</li>
    <li>Gold: Fields can only be played after prior announcement. The rest is like Silver</li>
    <li>Platinum: Like gold, all with a club.</li>
  </ol>
</div>

<div>
  <h2>Game modes</h2>
  <ol>
    <li><a href="/exact/two-players">Two players / teams</a></li>
    <li><a href="/exact/three-players">Three players / teams</a></li>
    <li><a href="/exact/four-players">Four players / teams</a></li>
  </ol>
</div>

<div>
  <h2>Further information:</h2>

  <p>
    This game is for golfers who want to train a different way, you only need a
    kind of trackman or a simulator to determine the exact length. After you
    have determined the length with your trackman (or the like), you can do that
    with this Click length labeled field in the respective game. The games
    automatically change the teams or the players through.
    <br />
    <b>Have fun playing</b>
    <br />
    <a href="https://www.trackman.com/" target="_blank"
      >Here you could buy a trackman. (Very expensive!)</a
    >
  </p>
</div>

<style lang="scss">
  div {
    display: block;
    p,
    ol {
      margin-left: 4vw;
      line-break: auto;
    }
    ol {
      list-style: upper-latin;
    }
  }
</style>
