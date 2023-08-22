<script lang="ts">
  import { enhance } from "$app/forms";
  import FourWinning from "$lib/components/FourWinning.svelte";
  import type { ActionData } from "./$types";

  let form: ActionData;
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
        let new_teams = [redTeam, blueTeam];
        console.log(new_teams);

        // Hier aktualisiere den Wert von teams, wenn du das möchtest
        teams = new_teams;
        console.log(teams);
        console.log("Form object:", form);
      }
    } else {
      let error = "There is no game data!";
      alert(error);
    }
  }

  function saveToLS() {
    let gameData = document.getElementById("game") as HTMLInputElement;
    console.log(gameData.value);

    localStorage.setItem("4winning_team_2", gameData.value);

    location.reload();
  }
</script>

<FourWinning {teams} />

<p>Paste the data you got from <a href="/dashboard/games">Games</a> here:</p>
<input type="text" id="game" name="game" />
<button on:click={saveToLS}>Submit</button>
<br />
<button on:click={saveToDataBase}>Extract data for database.</button>
<form method="POST" autocomplete="off" use:enhance>
  <input
    type="text"
    name="team_data"
    id="team_data"
    value={JSON.stringify(teams)}
  />
  <button>Push to Database</button>
</form>

<style>
  button {
    margin-top: 2rem;
  }
</style>
