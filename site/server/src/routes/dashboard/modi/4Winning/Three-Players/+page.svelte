<script lang="ts">
  import { enhance } from "$app/forms";
  import FourWinning from "$lib/components/FourWinning.svelte";

  export let data: any;
  let measurement_unit = data.measurement_unit;

  interface Team {
    color: string;
    data: string[];
  }

  let teams: Team[] = [
    { color: "red", data: [] },
    { color: "blue", data: [] },
    { color: "green", data: [] },
  ];

  function saveToDatabaseAndSubmitForm(event: any) {
    event.preventDefault();
    let localStorageData = localStorage.getItem("4winning_team_3");

    if (localStorageData) {
      const parsedData = JSON.parse(localStorageData);

      if (Array.isArray(parsedData)) {
        const redTeam = parsedData.find((team) => team.color === "red");
        const blueTeam = parsedData.find((team) => team.color === "blue");
        const greenTeam = parsedData.find((team) => team.color === "green");

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

        if (greenTeam) {
          const existingGreenTeam = teams.find((t) => t.color === "green");
          if (existingGreenTeam) {
            existingGreenTeam.data = greenTeam.data;
          }
        }

        let new_teams = [redTeam, blueTeam, greenTeam];

        // Hier aktualisiere den Wert von teams, wenn du das möchtest
        teams = new_teams;

        // Daten in das Eingabefeld setzen
        const team_data = document.getElementById(
          "team_data"
        ) as HTMLInputElement;
        if (team_data) {
          team_data.value = JSON.stringify(new_teams);
        }

        // Das Formular absenden
        const form = document.querySelector("form") as HTMLFormElement;
        form.submit();
      }
    } else {
      let error = "There is no game data!";
      alert(error);
    }
  }

  function saveToLS() {
    alert("Please note, that the website will reload after the submit");
    let gameData = document.getElementById("game") as HTMLInputElement;

    localStorage.setItem("4winning_team_3", gameData.value);

    location.reload();
  }
</script>

<FourWinning {teams} {measurement_unit} />

<div class="ls">
  <p>Paste the data you got from <a href="/dashboard/games">Games</a> here:</p>
  <input type="text" id="game" name="game" />
  <button on:click={saveToLS}>Submit</button>
</div>
<br />
<div class="database">
  <form method="POST" autocomplete="off" use:enhance>
    <input
      type="text"
      name="team_data"
      id="team_data"
      value={JSON.stringify(teams)}
    />
    <button on:click={saveToDatabaseAndSubmitForm}>Save to Database</button>
  </form>
</div>

<style lang="scss">
  .ls {
    button {
      margin-top: 1.5rem;
    }
  }
</style>
