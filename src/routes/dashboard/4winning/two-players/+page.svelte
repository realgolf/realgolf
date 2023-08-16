<script lang="ts">
  import FourWinning from "$lib/components/FourWinning.svelte";

  interface Team {
    color: string;
    data: string[];
  }

  let teams: Team[] = [
    { color: "red", data: [] },
    { color: "blue", data: [] },
  ];

  function saveToDataBase() {
    let localStorageData = localStorage.getItem("4winning_team_2");

    if (localStorageData) {
      const parsedData = JSON.parse(localStorageData);

      if (Array.isArray(parsedData)) {
        const redTeam = parsedData.find((team) => team.color === "red");
        const blueTeam = parsedData.find((team) => team.color === "blue");

        if (redTeam) {
          const existingRedTeam = teams.find((t) => t.color === "red");
          if (existingRedTeam) {
            existingRedTeam.data = redTeam.data;
          }
        }

        if (blueTeam) {
          const existingBlueTeam = teams.find((t) => t.color === "blue");
          if (existingBlueTeam) {
            existingBlueTeam.data = blueTeam.data;
          }
        }
        console.log(redTeam, blueTeam);
      }
    }
  }
</script>

<FourWinning {teams} />

<button on:click={saveToDataBase}>Save in Database</button>
