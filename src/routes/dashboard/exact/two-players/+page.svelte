<script lang="ts">
  import { onMount } from "svelte";
  import { enhance } from "$app/forms";
  import Exact from "$lib/components/Exact.svelte";
  import type { ActionData } from "./$types";

  let form: ActionData;

  interface Team {
    color: string;
    data: number[];
    points: number;
  }

  let teams: Team[] = [
    { color: "red", data: [], points: 0 },
    { color: "blue", data: [], points: 0 },
  ];

  function saveToDataBase() {
    // Extract data from localStorage
    const localStorageData = localStorage.getItem("exact_2_data");
    console.log(localStorageData);

    if (localStorageData) {
      const parsedData = JSON.parse(localStorageData);
      teams = Object.keys(parsedData).map((color) => ({
        color,
        data: parsedData[color].shots,
        points: parsedData[color].points,
      }));
      console.log(teams);
    }
  }
</script>

<Exact {teams} />

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
