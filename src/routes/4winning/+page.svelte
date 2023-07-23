<svelte:head>
    <title>4 Winning</title>
  </svelte:head>
  
  <h1>4 Winning</h1>
  
  <div>
    <h2>Rules</h2>
  
    <p>
      The rules of the game are very simple, it's just a kind of four-in-a-row,
      you click the button which one you hit from the distance. After the first
      team's turn, the second teams is and clicks on a field, regardless of
      whether it has already been clicked on by another team, then it's the turn
      of the next team, you can see which team it is at the top of the respective
      game recognize. The game continues until one team has four squares in a row
      or column. If you click the same field four times, a message appears telling
      you that you have clicked the same field four times. When a team wins,
      the values ​of the fields are reset and you can start from the beginning.
      The game automatically switches teams. All of the above information applies
      to all games!
    </p>
  </div>
  
  <div>
    <h2>Levels</h2>
  
    <ol>
      <li>Bronze: Only the lenght of the shot applies</li>
      <li>Silver: The number of meters and the lateral deviation apply.</li>
      <li>Gold: Fields can only be played after prior announcement.</li>
      <li>Platinum: Like gold, all with a club.</li>
    </ol>
  </div>
  
  <div>
    <h2>Game modes</h2>
    <ol>
      <li><a href="/4winning/two-players">Two players / teams</a></li>
      <li><a href="/4winning/three-players">Three players / teams</a></li>
      <li><a href="/4winning/four-players">Four players / teams</a></li>
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
  