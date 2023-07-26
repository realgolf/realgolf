<script lang="ts">
  import Game from "../Game.svelte";

  interface Team {
    color: string;
    data: string[];
  }

  let teams: Team[] = [
    { color: "red", data: [] },
    { color: "blue", data: [] },
  ];
</script>

<Game {teams} />
