<script lang="ts">
  import { enhance } from "$app/forms";
  import Exact from "$lib/components/Exact.svelte";

  interface Team {
    color: string;
    data: number[];
    points: number;
  }

  let teams: Team[] = [
    { color: "red", data: [], points: 0 },
    { color: "blue", data: [], points: 0 },
    { color: "green", data: [], points: 0 },
  ];

  function saveToDatabaseAndSubmitForm() {
    // Extract data from localStorage
    const localStorageData = localStorage.getItem("exact_3_data");

    if (localStorageData) {
      teams = JSON.parse(localStorageData);

      // Daten in das Eingabefeld setzen
      const team_data = document.getElementById(
        "team_data"
      ) as HTMLInputElement;
      if (team_data) {
        team_data.value = JSON.stringify(teams);
      }

      // Das Formular absenden
      const form = document.querySelector("form") as HTMLFormElement;
      form.submit();
    }
  }

  function saveToLS() {
    let gameData = document.getElementById("game") as HTMLInputElement;

    localStorage.setItem("exact_3_data", gameData.value);

    location.reload();
  }
</script>

<Exact {teams} />

<p>Paste the data you got from <a href="/dashboard/games">Games</a> here:</p>
<input type="text" id="game" name="game" />
<button on:click={saveToLS}>Submit</button>
<br />

<form method="POST" autocomplete="off" use:enhance>
  <input
    type="text"
    name="team_data"
    id="team_data"
    value={JSON.stringify(teams)}
  />
  <button on:click={saveToDatabaseAndSubmitForm}>Push to Database</button>
</form>

<style>
  button {
    margin-top: 2rem;
  }
</style>
