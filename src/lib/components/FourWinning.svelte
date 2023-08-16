<script lang="ts">
  import { onMount } from "svelte";
  import GoBack from "./GoBack.svelte";

  /**
   * Declared all variables
   */

  export let teams: Team[];

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
   * This function changes the team
   */

  function changeTeam() {
    currentTeamIndex = (currentTeamIndex + 1) % teams.length;
    currentTeam = teams[currentTeamIndex];
    color = currentTeam.color;
    updateTeamTurn();
  }

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

      FieldClickedFourTimes(outerIndex, innerIndex);
      checkWin();
      changeTeam();
    }
  }

  /**
   * This function checks if a field got hit four times
   * @param outerIndex
   * @param innerIndex
   */

  let hitCounts: Record<string, number> = {};

  function FieldClickedFourTimes(outerIndex: number, innerIndex: number) {
    const cellId = `row${outerIndex + 1}-${innerIndex}`;
    const cell = document.getElementById(cellId);
    if (cell) {
      const teamColor = currentTeam.color;
      const cellKey = `${teamColor}_${cellId}`;

      if (!hitCounts[cellKey]) {
        hitCounts[cellKey] = 1;
      } else {
        hitCounts[cellKey] += 1;
        console.log(hitCounts);
      }

      if (hitCounts[cellKey] === 4) {
        FourTimesWin(cellId, teamColor);
      }
    }
  }

  /**
   * This function outputs the winning team for the FieldClickedFourTimes function
   * @param cellId
   * @param teamColor
   */

  function FourTimesWin(cellId: string, teamColor: string) {
    const confirmed = confirm(
      `Cell ${cellId} has been hit four times by ${teamColor} team!`
    );

    if (confirmed) {
      const confirmed2 = confirm(`Do you want to restart the game?`);

      if (confirmed2) {
        restartGame();
      }
    }
  }

  /**
   * This function updates the Team Turn display
   */

  function updateTeamTurn() {
    const teamTurnDisplay = document.getElementById("team_turn_display");
    if (teamTurnDisplay) {
      teamTurnDisplay.innerHTML = `Current Team Turn: ${color}`;
    }
  }

  /**
   * This function generates all the win combinations for the four in a row
   */

  function generateWinCombinations(): {
    cells: { outerIndex: number; innerIndex: number }[];
  }[] {
    const combinations: {
      cells: { outerIndex: number; innerIndex: number }[];
    }[] = [];

    // Rows
    for (let i = 0; i <= 55; i += 7) {
      for (let j = i; j < i + 4; j++) {
        combinations.push({
          cells: [
            { outerIndex: Math.floor(j / 7), innerIndex: j % 7 },
            { outerIndex: Math.floor((j + 1) / 7), innerIndex: (j + 1) % 7 },
            { outerIndex: Math.floor((j + 2) / 7), innerIndex: (j + 2) % 7 },
            { outerIndex: Math.floor((j + 3) / 7), innerIndex: (j + 3) % 7 },
          ],
        });
      }
    }

    // Columns
    for (let i = 0; i < 7; i++) {
      for (let j = i; j <= i + 21; j += 7) {
        combinations.push({
          cells: [
            { outerIndex: Math.floor(j / 7), innerIndex: j % 7 },
            { outerIndex: Math.floor((j + 7) / 7), innerIndex: (j + 7) % 7 },
            { outerIndex: Math.floor((j + 14) / 7), innerIndex: (j + 14) % 7 },
            { outerIndex: Math.floor((j + 21) / 7), innerIndex: (j + 21) % 7 },
          ],
        });
      }
    }

    // Diagonal (top-left to bottom-right)
    for (let i = 0; i <= 21; i += 7) {
      for (let j = i; j <= i + 2; j++) {
        combinations.push({
          cells: [
            { outerIndex: Math.floor(j / 7), innerIndex: j % 7 },
            { outerIndex: Math.floor((j + 8) / 7), innerIndex: (j + 8) % 7 },
            { outerIndex: Math.floor((j + 16) / 7), innerIndex: (j + 16) % 7 },
            { outerIndex: Math.floor((j + 24) / 7), innerIndex: (j + 24) % 7 },
          ],
        });
      }
    }

    // Diagonal (top-right to bottom-left)
    for (let i = 3; i <= 23; i += 7) {
      for (let j = i; j <= i + 2; j++) {
        combinations.push({
          cells: [
            { outerIndex: Math.floor(j / 7), innerIndex: j % 7 },
            { outerIndex: Math.floor((j + 6) / 7), innerIndex: (j + 6) % 7 },
            { outerIndex: Math.floor((j + 12) / 7), innerIndex: (j + 12) % 7 },
            { outerIndex: Math.floor((j + 18) / 7), innerIndex: (j + 18) % 7 },
          ],
        });
      }
    }

    return combinations;
  }

  /**
   * This function check if a team has won
   */

  const winCombinations = generateWinCombinations();

  function checkWin() {
    for (const combination of winCombinations) {
      const { cells } = combination;
      const teamData = currentTeam.data;
      let isWinningCombination = true;

      for (const cell of cells) {
        const { outerIndex, innerIndex } = cell;
        const cellId = `${outerIndex}-${innerIndex}`;

        if (!teamData.includes(cellId)) {
          isWinningCombination = false;
          break;
        }
      }

      if (isWinningCombination) {
        const confirmed = confirm(
          `Team ${currentTeam.color} wins!Do you want to restart the game?`
        );

        if (confirmed) {
          restartGame();
        }
      }
    }

    return false;
  }

  /**
   * The next to function restart the game, without reloading the page.
   */

  function restartGame() {
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
    changeTeam();
    updateTeamTurn();
  }

  function restartGame_Btn() {
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
    //changeTeam();
    updateTeamTurn();
  }

  /**
   * This function is for the input field, to input the distance.
   */

  function handleClick() {
    let input = document.getElementById("distance") as HTMLInputElement;

    if (input) {
      let distanceStr = input.value.trim();

      if (distanceStr !== "") {
        let distance = parseFloat(distanceStr);

        if (!isNaN(distance)) {
          if (distance >= 10 && distance <= 23) {
            let rowIndex = Math.floor((distance - 10) / 2);
            let cell = document.getElementById(`row1-${rowIndex}`);

            if (cell) {
              cell.style.backgroundColor = currentTeam.color;
              changeTeam();
            }
          } else if (distance >= 24 && distance <= 37) {
            let rowIndex = Math.floor((distance - 24) / 2);
            let cell = document.getElementById(`row2-${rowIndex}`);

            if (cell) {
              cell.style.backgroundColor = currentTeam.color;
              changeTeam();
            }
          } else if (distance >= 38 && distance <= 58) {
            let rowIndex = Math.floor((distance - 38) / 3);
            let cell = document.getElementById(`row3-${rowIndex}`);

            if (cell) {
              cell.style.backgroundColor = currentTeam.color;
              changeTeam();
            }
          } else if (distance >= 59 && distance <= 79) {
            let rowIndex = Math.floor((distance - 59) / 3);
            let cell = document.getElementById(`row4-${rowIndex}`);

            if (cell) {
              cell.style.backgroundColor = currentTeam.color;
              changeTeam();
            }
          } else if (distance >= 80 && distance <= 100) {
            let rowIndex = Math.floor((distance - 80) / 3);
            let cell = document.getElementById(`row5-${rowIndex}`);

            if (cell) {
              cell.style.backgroundColor = currentTeam.color;
              changeTeam();
            }
          } else if (distance >= 101 && distance <= 121) {
            let rowIndex = Math.floor((distance - 101) / 3);
            let cell = document.getElementById(`row6-${rowIndex}`);

            if (cell) {
              cell.style.backgroundColor = currentTeam.color;
              changeTeam();
            }
          } else if (distance >= 122 && distance <= 142) {
            let rowIndex = Math.floor((distance - 122) / 3);
            let cell = document.getElementById(`row7-${rowIndex}`);

            if (cell) {
              cell.style.backgroundColor = currentTeam.color;
              changeTeam();
            }
          }else if (distance >= 143 && distance <= 163) {
            let rowIndex = Math.floor((distance - 142) / 3);
            let cell = document.getElementById(`row8-${rowIndex}`);

            if (cell) {
              cell.style.backgroundColor = currentTeam.color;
              changeTeam();
            }
          } else {
            alert("An unexpected error occured.");
          }

          console.log(distance);
        } else {
          alert("Invalid input. Please enter a valid number.");
        }
      } else {
        alert("You need to enter a number.");
      }
    }
  }

  let isMounted = false;

  onMount(() => {
    console.log(isMounted);
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
            console.log(id);
            const cell = document.getElementById(`row${id}`);
            if (cell) {
              cell.style.backgroundColor = team.color;
            }
          });
        });
      }

      isMounted = true; // Markiere, dass der Hook ausgeführt wurde

      console.log(isMounted);

      // Aktualisiere das aktuelle Team und den Anzeigetext
      currentTeamIndex = 0;
      updateTeamTurn();
    }
  });
</script>

<svelte:head>
  <title>Exact - {teams.length} Players</title>
</svelte:head>

<GoBack />

<h1>{teams.length} Players</h1>

<p id="team_turn_display">Current Team Turn: {currentTeam.color}</p>

<button on:click={changeTeam}>Switch Team</button>
<button on:click={restartGame_Btn}>Restart Game</button>

<p>You can also enter the distance you have played here:</p>
<input type="number" name="distance" id="distance" />
<button on:click={handleClick}>Submit</button>

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
