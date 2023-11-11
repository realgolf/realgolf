<script lang="ts">
  import { capitalizeFirstLetter } from "$lib/shared/utils";
  import { first_row, rows } from "./scripts/table";

  interface Team {
    color: string;
    ship_position: string[];
    data: string[];
  }

  let teams: Team[] = [
    {
      color: "red",
      ship_position: [],
      data: [],
    },
    {
      color: "blue",
      ship_position: [],
      data: [],
    },
  ];

  let currentTeamIndex = 0;
  let color = teams[currentTeamIndex].color;
  let currentTeam = teams[currentTeamIndex];

  /**
   * This function changes the team
   */

  function changeTeam() {
    currentTeamIndex = (currentTeamIndex + 1) % teams.length;
    currentTeam = teams[currentTeamIndex];
    color = currentTeam.color;
  }
</script>

<svelte:head>
  <title>Sinking Ships - 2 Teams</title>
</svelte:head>

<h1>2 Teams</h1>

<button on:click={changeTeam}>Change Team</button>
<table>
  {#each first_row as { side, data }, i (i)}
    <tr>
      <td class="points" style="background-color: {color};"
        >{capitalizeFirstLetter(color)}</td
      >
      {#each data as item, j (j)}
        <td class="points">{item}</td>
      {/each}
    </tr>
  {/each}
  {#each rows as { side, data }, i (i)}
    <tr>
      <td class="points">{side}</td>
      {#each data as item, j (j)}
        <td class="meters">{item}</td>
      {/each}
    </tr>
  {/each}
</table>

<style>
  .meters,
  .points {
    flex: 0 0 25%;
    box-sizing: border-box;
    border: 5px solid var(--border-color);
    min-width: calc(90vw / 15);
    height: calc(50vh / 8);
    text-align: center;
  }

  .meters:hover {
    cursor: pointer;
  }

  button {
    cursor: pointer;
    border: 5px solid var(--border-color);
  }
</style>
