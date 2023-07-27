<script lang="ts">
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
</script>

<Exact {teams} />
