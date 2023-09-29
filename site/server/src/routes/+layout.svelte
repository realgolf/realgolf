<script lang="ts">
  import LoadProgress from "$lib/components/LoadProgress.svelte";
  import Nav from "$lib/components/Nav.svelte";
  import ScrollUp from "$lib/components/ScrollUp.svelte";
  import "$lib/scss/app.scss";
  import type { LayoutData } from "./$types";
  export let data: LayoutData;
</script>

<svelte:head>
  <link rel="icon" href="/golf.PNG" />
</svelte:head>

<LoadProgress />
<ScrollUp />

<Nav auth={data.auth} />

<main>
  <slot />
</main>

<style>
  main {
    max-width: 40rem;
    /* margin-inline: auto; */
    padding-inline: 1rem;
  }
</style>
