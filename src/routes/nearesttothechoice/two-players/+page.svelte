<script lang="ts">
  let distanceChoosen: number = 40;

  let teams = [
    { color: "red", distance: 0 },
    { color: "blue", distance: 0 },
  ];

  let winningTeam: string = "";

  function determineWinningTeam() {
    const [team1, team2] = teams;
    const differenceTeam1 = Math.abs(distanceChoosen - team1.distance);
    const differenceTeam2 = Math.abs(distanceChoosen - team2.distance);

    if (differenceTeam1 < differenceTeam2) {
      winningTeam = team1.color;
    } else if (differenceTeam2 < differenceTeam1) {
      winningTeam = team2.color;
    } else {
      winningTeam = "Non";
    }

    const confirmed = confirm(
      `The winner is ${winningTeam}! Do you want to play again?`
    );

    if (confirmed) {
      restartGame();
    }
  }

  function restartGame() {
    distanceChoosen = 40;
    teams = [
      { color: "red", distance: 0 },
      { color: "blue", distance: 0 },
    ];
    winningTeam = "";
  }
</script>

<h1>Nearest to the Choice</h1>

<p>
  Distance to play: <input bind:value={distanceChoosen} type="number" /> meters
</p>

<p>
  Player {teams[0].color} played:
  <input bind:value={teams[0].distance} type="number" /> meters
</p>
<p>
  Player {teams[1].color} played:
  <input bind:value={teams[1].distance} type="number" /> meters
</p>

<button on:click={determineWinningTeam}>Determine Winning Team</button>

<style>
  input {
    border: none;
    background-color: var(--border-color);
    color: var(--font-color);
    font-size: var(--medium-font);
  }
</style>
