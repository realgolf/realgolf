<script lang="ts">
  import { onMount } from "svelte";
  import GoBack from "./GoBack.svelte";
  import { changeTeam } from "$lib/scripts/FourWinning/changeTeam";
  import { updateTeamTurn } from "$lib/scripts/FourWinning/updateTeamTurn";
  import { FourTimesWin } from "$lib/scripts/FourWinning/FourTimesWin";
  import { restartGame } from "$lib/scripts/FourWinning/restartGame";
  import { winCombinations } from "$lib/scripts/FourWinning/generateWinCombinations";
  import { FieldClickedFourTimes } from "$lib/scripts/FourWinning/FieldClickedFourTimes";
  import { checkWin } from "$lib/scripts/FourWinning/checkWin";
  import { handleClick } from "$lib/scripts/FourWinning/handleClick";

  export let teams: Team[];

  let hitCounts: Record<string, number> = {};

  interface Team {
    color: string;
    data: string[];
  }

  interface Row {
    side: string;
    data: string[];
  }

  let rows: Row[] = [
    {
      side: "1 meter",
      data: ["10-11", "12-13", "14-15", "16-17", "18-19", "20-21", "22-23"],
    },
    {
      side: "1 meter",
      data: ["24-25", "26-27", "28-29", "30-31", "32-33", "34-35", "36-37"],
    },
    {
      side: "2 meters",
      data: ["38-40", "41-43", "44-46", "47-49", "50-52", "53-55", "56-58"],
    },
    {
      side: "2 meters",
      data: ["59-61", "62-64", "65-67", "68-70", "71-73", "74-76", "77-79"],
    },
    {
      side: "3 meters",
      data: ["80-82", "83-85", "86-88", "89-91", "92-94", "95-97", "98-100"],
    },
    {
      side: "3 meters",
      data: [
        "101-103",
        "104-106",
        "107-109",
        "110-112",
        "113-115",
        "116-118",
        "119-121",
      ],
    },
    {
      side: "4 meters",
      data: [
        "122-124",
        "125-127",
        "128-130",
        "131-133",
        "134-136",
        "137-139",
        "140-142",
      ],
    },
    {
      side: "4 meters",
      data: [
        "143-145",
        "146-148",
        "149-151",
        "152-154",
        "155-157",
        "158-160",
        "161-163",
      ],
    },
  ];

  let currentTeamIndex = 0;
  let color = teams[currentTeamIndex].color;
  let currentTeam = teams[currentTeamIndex];

  /**
   * This function handles the click event for each field
   * @param outerIndex
   * @param innerIndex
   */

  function HandleEvent(outerIndex: number, innerIndex: number) {
    const cellId = `row${outerIndex + 1}-${innerIndex}`;
    const cell = document.getElementById(cellId);

    if (cell) {
      cell.style.backgroundColor = color;
      const Id = `${outerIndex + 1}-${innerIndex}`;
      currentTeam.data.push(Id);

      // Aktualisieren der teams-Variablen im Local Storage
      localStorage.setItem(
        `4winning_team_${teams.length}`,
        JSON.stringify(teams)
      );

      FieldClickedFourTimes(
        outerIndex,
        innerIndex,
        currentTeam,
        hitCounts,
        teams,
        currentTeamIndex,
        color
      );
      checkWin(
        winCombinations,
        currentTeam,
        teams,
        hitCounts,
        currentTeamIndex,
        color
      );
      changeTeam(currentTeam, currentTeamIndex, teams, color);
    }
  }

  function restartGame_Btn() {
    let input = document.getElementById("distance") as HTMLInputElement;

    if (input) {
      input.value = "";
    }

    localStorage.removeItem(`4winning_team_${teams.length}`);

    teams.forEach((team) => {
      team.data = [];
    });

    const cells = document.querySelectorAll(".meters");
    cells.forEach((cell) => {
      (cell as HTMLElement).style.backgroundColor = "";
    });

    hitCounts = {};

    currentTeamIndex = 0;
    currentTeam = teams[currentTeamIndex];
    color = currentTeam.color;
    updateTeamTurn(color);
  }

  let isMounted = false;

  onMount(() => {
    if (!isMounted) {
      const storedTeams = localStorage.getItem(`4winning_team_${teams.length}`);

      if (!storedTeams) {
        // Speichere die teams-Variable im Local Storage
        localStorage.setItem(
          `4winning_team_${teams.length}`,
          JSON.stringify(teams)
        );

        // Weise die initialisierte teams-Variable zu
        teams = teams;
      } else {
        // Lade die teams-Variable aus dem Local Storage
        teams = JSON.parse(storedTeams);

        // Wiederherstellen der Farben der Felder basierend auf den gespeicherten Daten
        teams.forEach((team) => {
          team.data.forEach((id) => {
            const cell = document.getElementById(`row${id}`);
            if (cell) {
              cell.style.backgroundColor = team.color;
            }
          });
        });
      }

      isMounted = true; // Markiere, dass der Hook ausgeführt wurde

      // Aktualisiere das aktuelle Team und den Anzeigetext
      currentTeamIndex = 0;
      updateTeamTurn(color);
    }
  });
</script>

<svelte:head>
  <title>4 Winning - {teams.length} Players</title>
</svelte:head>

<GoBack />

<h1>{teams.length} Players</h1>

<p id="team_turn_display">Current Team Turn: {currentTeam.color}</p>

<button on:click={() => changeTeam(currentTeam, currentTeamIndex, teams, color)}
  >Switch Team</button
>
<button on:click={restartGame_Btn}>Restart Game</button>

<p>You can also enter the distance you have played here:</p>
<input type="number" name="distance" id="distance" />
<button
  on:click={() =>
    handleClick(currentTeam, currentTeamIndex, teams, color, hitCounts)}
  >Submit</button
>

<table>
  {#each rows as { side, data }, outerIndex}
    <tbody id={`row${outerIndex + 1}`}>
      <tr>
        <td class="points">{side}</td>
        {#each data as value, innerIndex}
          <td
            class="meters"
            id={`row${outerIndex + 1}-${innerIndex}`}
            on:click={() => HandleEvent(outerIndex, innerIndex)}
          >
            {value}
          </td>
        {/each}
        <td class="points">{side}</td>
      </tr>
    </tbody>
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
