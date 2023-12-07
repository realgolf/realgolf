<script lang="ts">
  import LoadProgress from "$lib/components/LoadProgress.svelte";
  import Nav from "$lib/components/Nav.svelte";
  import ScrollUp from "$lib/components/ScrollUp.svelte";
  import "$lib/scss/app.scss";
  import { onMount } from "svelte";
  export let data;

  onMount(() => {
    let theme = data.theme as string;
    if (theme === undefined) {
      theme = "system";
    }
    localStorage.setItem("theme", theme);
  });
</script>

<svelte:head>
  <link rel="icon" href="/logo.PNG" />
</svelte:head>

<LoadProgress />
<ScrollUp />

<Nav auth={data.auth} />

<main>
  <slot />
</main>

<style>
  main {
    /* max-width: 40rem; */
    /* margin-inline: auto; */
    padding-inline: 1rem;

    @media screen and (max-width: 767px) {
      margin-bottom: 20px;
    }
  }
</style>
