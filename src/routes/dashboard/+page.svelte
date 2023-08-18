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

<main>
  <Card link="/dashboard/rules" title="Rules" />
  <Card link="/dashboard/modi" title="Modi" />
  <Card link="/dashboard/levels" title="Levels" />
  <Card link="/dashboard/games" title="Games" />
</main>

<div>
  <h2>Further information:</h2>

  <p>
    The games are for golfers who want to train a different way, you only need a
    kind of trackman or a simulator to determine the exact length. After you
    have determined the length with your trackman (or the like). You can click
    the Field with number you played or enter the number in the input Field.
    <br />
    <b>Have fun playing</b>
  </p>

  <p>
    A list of some things that can be used can be found <a
      href="/dashboard/tools">here</a
    >.
  </p>
</div>

<style lang="scss">
  main {
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    @media screen and (max-width: 767px) {
      flex-direction: column;
      justify-items: center;
      align-items: center;
    }
  }
</style>
