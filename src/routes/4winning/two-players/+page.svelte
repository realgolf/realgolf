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
</script>

<FourWinning {teams} />
