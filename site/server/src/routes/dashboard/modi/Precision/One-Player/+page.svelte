<script>
  import PrecisionOnePlayer from "$lib/components/Precision-One-Player.svelte";

  export let data;
  let measurement_unit = data.measurement_unit;
</script>

<PrecisionOnePlayer {measurement_unit} />
