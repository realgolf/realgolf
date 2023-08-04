<script>
  import { page } from "$app/stores";
  import GoBack from "$lib/components/GoBack.svelte";
  import ThemeToggler from "$lib/components/ThemeToggler.svelte";

  import Fa from "svelte-fa";
  import { faSection } from "@fortawesome/free-solid-svg-icons";
</script>

<nav>
  <ThemeToggler />
  {#if $page.url.pathname !== "/"}
    <GoBack />
  {/if}
  {#if $page.url.pathname === "/"}
    <a href="/imprint"><Fa icon={faSection} /></a>
  {/if}
</nav>

<style>
  nav {
    display: flex;
    text-align: left;
    flex-direction: row;
  }
</style>
