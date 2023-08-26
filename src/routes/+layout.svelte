<script lang="ts">
  import Nav from "$lib/components/Nav.svelte";
  import "$lib/css/app.css";
  import type { LayoutData } from "./$types";
  export let data: LayoutData;
</script>

<svelte:head>
  <link rel="icon" href="/favicon16x16.png" />
</svelte:head>

<Nav logged_in={!!data.name && !!data.email} />

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
