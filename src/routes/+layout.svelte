<script>
  import { page } from "$app/stores";
  import GoBack from "$lib/components/GoBack.svelte";
  import ThemeToggler from "../lib/components/ThemeToggler.svelte";
  import "./app.css";
</script>

<svelte:head>
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon16x16.png" />

  <title>Golf Games</title>
</svelte:head>

<div class="wrapper">
  <main>
    <div class="themetoggler">
      <ThemeToggler />
    </div>
    {#if $page.url.pathname !== "/"}
      <GoBack />
    {/if}
    <slot />
  </main>
</div>

<style>
  .wrapper {
    margin-top: 1rem;
    margin-inline: auto;
    padding-inline: 1rem;
  }
  .themetoggler {
    display: flex;
    text-align: left;
    flex-direction: row;
  }
</style>
