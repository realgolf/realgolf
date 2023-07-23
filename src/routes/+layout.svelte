<script>
  import GoBack from "$lib/components/GoBack.svelte";
  import ThemeToggler from "../lib/components/ThemeToggler.svelte";
  import "./app.css";
</script>

<div class="wrapper">
  <main>
    <div class="themetoggler">
      <ThemeToggler />
      <GoBack />
    </div>
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
