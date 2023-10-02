<script lang="ts">
  import { THEMES } from "$lib/shared/config";
  import { faSun } from "@fortawesome/free-regular-svg-icons";
  import { faMoon } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";

  function set_theme(theme: string) {
    if (!Object.values(THEMES).includes(theme)) return;
    localStorage.setItem("theme", theme);
    document.body.setAttribute("data-theme", theme);
  }

  function toggle_theme(): void {
    const current_theme = document.body.getAttribute("data-theme");
    const theme = current_theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    set_theme(theme);
  }
</script>

<button on:click={toggle_theme} aria-label="Toggle theme">
  <Fa icon={faMoon} class="moon" />
  <Fa icon={faSun} class="sun" />
</button>

<style>
  button {
    width: 1.5rem;
    height: 1.5rem;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: var(--nav-color);
  }

  button :global(svg) {
    position: absolute;
    transition: opacity 250ms linear, rotate 250ms linear;
    color: var(--font-color);
  }

  :global(body[data-theme="dark"] .sun),
  :global(body[data-theme="light"] .moon) {
    opacity: 0;
    rotate: 45deg;
  }
</style>
