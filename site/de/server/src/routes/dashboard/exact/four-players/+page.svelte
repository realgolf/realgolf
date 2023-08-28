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
    { color: "orange", data: [], points: 0 },
  ];

  function saveToDataBase() {
    // Extract data from localStorage
    const localStorageData = localStorage.getItem("exact_4_data");
    console.log(localStorageData);

    if (localStorageData) {
      teams = JSON.parse(localStorageData);
      console.log(teams);
    }
  }

  function saveToLS() {
    let gameData = document.getElementById("game") as HTMLInputElement;
    console.log(gameData.value);

    localStorage.setItem("exact_4_data", gameData.value);

    location.reload();
  }
</script>

<Exact {teams} />

<p>
  Fügen Sie die Daten ein, die Sie von <a href="/dashboard/games">Spiele</a> erhalten
  haben:
</p>
<input type="text" id="game" name="game" />
<button on:click={saveToLS}>Abschicken</button>
<br />
<button on:click={saveToDataBase}
  >Extrahieren Sie Daten für die Datenbank.</button
>

<form method="POST" autocomplete="off" use:enhance>
  <input
    type="text"
    name="team_data"
    id="team_data"
    value={JSON.stringify(teams)}
  />
  <button>In die Datenbank übertragen</button>
</form>

<style>
  button {
    margin-top: 2rem;
  }
</style>
