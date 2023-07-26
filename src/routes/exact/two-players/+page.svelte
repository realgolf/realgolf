<script lang="ts">
  import Game from "../Game.svelte";

  interface Team {
    color: string;
    data: number[];
    points: number;
  }

  let teams: Team[] = [
    { color: "red", data: [], points: 0 },
    { color: "blue", data: [], points: 0 },
  ];
</script>

<h1>Exact</h1>

<Game {teams} />
