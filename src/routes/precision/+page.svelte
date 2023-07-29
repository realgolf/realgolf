<svelte:head>
  <title>Precision</title>
</svelte:head>

<h1>Precision</h1>

<main>
  <div>
    <h2>Rules</h2>

    <p>
      The aim of this golf game "Precision" is to retain as many points as
      possible out of the initial 100 points by executing precise shots. For
      each shot, the deviation of the ball from the target distance is measured.
      <br />
      <br />
      Precision is measured by the deviation in meters from the target distance.
      The closer the ball is to the specified distance, the fewer points will be
      deducted. It follows a deduction of 1 point per meter deviation from the target.
      <br />
      <br />
      At the end of the game, the player who has retained the highest score out of
      the initial 100 points is declared the winner. This means that the individual
      with the highest score due to deductions emerges as the victor! Fairness and
      respect towards other players are paramount. Be sure to adhere to the rules
      and etiquette of the game, as well as the guidelines of the club.
      <br />
      <br />
      "Precision" can also be played in teams. Points can be aggregated for the entire
      team to determine the winner. Each player in a team contributes 100 points
      to the team's overall score. Regardless of the number of players in a team,
      the baseline for points is set by the team with the most players.
      <br />
      <br />
      You can make the game more interesting by introducing additional challenges,
      such as playing in different weather conditions or on various terrains. Whether
      you are a novice or an experienced golfer, "Precision" offers an exciting opportunity
      to demonstrate your skills and precision. Enjoy the game and the company of
      your fellow players!
      <br />
      <br />
      Are you ready to perfect your golf swings and retain as many points as possible?
      Let's play "Precision" and find out who achieves the highest score at the end!
    </p>
  </div>

  <div>
    <h2>Game modes</h2>
    <h3>Single player games:</h3>
    <ol>
      <li><a href="/precision/players/two-players">Two players</a></li>
      <li><a href="/precision/players/three-players">Three players</a></li>
      <li><a href="/precision/players/four-players">Four players</a></li>
    </ol>
    <h3>Team games:</h3>
    <ol>
      <li><a href="/precision/teams/two-teams">Two Teams</a></li>
      <li><a href="/precision/teams/three-teams">Three Teams</a></li>
      <li><a href="/precision/teams/four-teams">Four Teams</a></li>
    </ol>
  </div>
</main>

<style lang="scss">
  main {
    max-width: 40rem;
    padding-inline: 1rem;
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
  }
</style>
