<script lang="ts">
  import PrecisionTeams from "$lib/components/Precision-Teams.svelte";

  interface Team {
    color: string;
    points: number;
    distance: number;
    teamSize: number;
  }

  let point = 100;

  let teams: Team[] = [
    { color: "red", points: point, distance: 0, teamSize: 1 },
    { color: "blue", points: point, distance: 0, teamSize: 1 },
    { color: "green", points: point, distance: 0, teamSize: 1 },
  ];
</script>

<PrecisionTeams {teams} {point} />
