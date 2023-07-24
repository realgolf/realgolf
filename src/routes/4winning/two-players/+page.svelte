<script lang="ts">
  interface Row {
    side: string;
    data: string[];
  }

  interface Team {
    color: string;
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

  let colors: string[] = ["red", "blue"];
  let color = colors[0];
  let teams: Team[] = [
    { color: "red", data: [] },
    { color: "blue", data: [] },
  ];

  let currentTeam = teams[0];

  function changeTeam() {
    color = color === colors[0] ? colors[1] : colors[0];
    currentTeam = currentTeam === teams[0] ? teams[1] : teams[0];
    updateTeamTurn();
  }

  function HandleEvent(outerIndex: number, innerIndex: number) {
    const cellId = `row${outerIndex + 1}-${innerIndex}`;
    const cell = document.getElementById(cellId);
    if (cell) {
      cell.style.backgroundColor = color;
      const Id = `${outerIndex + 1}-${innerIndex}`;
      currentTeam.data.push(Id);
      console.log(teams);
    }
    changeTeam();
  }

  function updateTeamTurn() {
    const teamTurnDisplay = document.getElementById("team_turn_display");
    if (teamTurnDisplay) {
      teamTurnDisplay.innerHTML = `Current Team Turn: ${color}`;
    }
  }
</script>

<svelte:head>
  <title>4 winning - 2 Players</title>
</svelte:head>

<h1>2 Players</h1>

<p id="team_turn_display">Current Team Turn: {currentTeam.color}</p>

<button on:click={changeTeam}>Switch Team</button>

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
