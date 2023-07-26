<script lang="ts">
  import Game from "../Game.svelte";

  interface Team {
    color: string;
    data: string[];
  }

  let teams: Team[] = [
    { color: "red", data: [] },
    { color: "blue", data: [] },
    { color: "green", data: [] },
    { color: "orange", data: [] },
  ];
</script>

<Game {teams} />
