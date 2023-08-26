<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title>Golf Games - Dashboard</title>
</svelte:head>

<h2>Welcome {data.name}</h2>

<p class="success">
  You can find all the games in the <b>Modi</b> Card below.
</p>
<p class="success">
  Everything about the Rules is in the Card labeld <b>Rules</b>.
</p>
<p class="success">
  If the normal games are to boring, you can find more challenging ideas in the
  Card labeled <b>Levels</b>.
</p>

<h3>But most important enjoy the games and have fun!</h3>

<main>
  <Card link="/dashboard/rules" title="Rules" />
  <Card link="/dashboard/modi" title="Modi" />
  <Card link="/dashboard/levels" title="Levels" />
  <Card link="/dashboard/games" title="Games" />
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
