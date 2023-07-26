<script>
  import Nav from "$lib/components/Nav.svelte";
  import "./app.css";
</script>

<svelte:head>
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon16x16.png" />

  <title>Golf Games</title>
</svelte:head>

<div class="wrapper">
  <Nav />
  <main>
    <slot />
  </main>
</div>

<style>
  .wrapper {
    margin-top: 1rem;
    margin-inline: auto;
    padding-inline: 1rem;
  }
</style>
