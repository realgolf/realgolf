<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title>Golf Games - Dashboard</title>
</svelte:head>

<h2>Willkommen {data.name}</h2>

<p class="success">
  Sie könne alle Spiele in dem <b>Modi</b> Tab finden.
</p>
<p class="success">
  Alles zu den regln köönen Sie in <b>Regeln</b> finden.
</p>
<p class="success">
  Wenn Ihnen die normalen Spiele zu langweilig sind finden Sie weitere Ideen bei <b>Level</b>.
</p>

<h3>Aber am wichtigsten Viel Spaß beim spielen!</h3>

<main>
  <Card link="/dashboard/rules" title="Regeln" />
  <Card link="/dashboard/modi" title="Modi" />
  <Card link="/dashboard/levels" title="Level" />
  <Card link="/dashboard/games" title="Spiele" />
  <Card link="/dashboard/info" title="Info" />
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: left;
    flex-wrap: wrap; /* Elemente unterhalb der Breite umbrechen */

    @media screen and (max-width: 767px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
</style>
