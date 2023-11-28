<script lang="ts">
  import Precision from "$lib/components/Precision.svelte";

  let point = 100;

  export let data;
  let measurement_unit = data.measurement_unit;

  interface Team {
    color: string;
    points: number;
    distance: number;
  }

  let teams: Team[] = [
    { color: "red", points: point, distance: null as unknown as number },
    { color: "blue", points: point, distance: null as unknown as number },
    { color: "green", points: point, distance: null as unknown as number },
  ];
</script>

<Precision {teams} {point} {measurement_unit} />
