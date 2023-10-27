<script lang="ts">
  import { THEMES } from "$lib/shared/config";
  import { capitalizeFirstLetter } from "$lib/shared/utils";
  import { onMount } from "svelte";

  let currentTheme: string;
  let displayTheme: string;

  const setTheme = (theme: string) => {
    if (!Object.values(THEMES).includes(theme)) return;
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    currentTheme = theme;
    displayTheme = capitalizeFirstLetter(currentTheme);
  };

  const toggleTheme = (theme: string) => {
    setTheme(theme);
  };

  const toggleSystemTheme = () => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? THEMES.DARK
      : THEMES.LIGHT;
    setTheme("system");
  };

  onMount(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.body.setAttribute("data-theme", savedTheme);
      currentTheme = savedTheme;
      displayTheme = capitalizeFirstLetter(currentTheme);
    } else {
      const prefers_dark = window.matchMedia("(prefers-color-scheme: dark)");
      const theme = prefers_dark.matches ? THEMES.DARK : THEMES.LIGHT;
      setTheme(theme);
    }
  });
</script>

{#if currentTheme !== "system"}
  <p>You are currently using the <strong>{displayTheme}</strong> theme</p>
{:else}
  <p>
    You are currently using your <strong>{displayTheme}</strong> preferences
  </p>
{/if}

{#if currentTheme == THEMES.DARK || currentTheme == THEMES.SYSTEM}
  <button
    on:click={() => toggleTheme(THEMES.LIGHT)}
    aria-label="Switch to Light theme">Light</button
  >
{/if}

{#if currentTheme == THEMES.LIGHT || currentTheme == THEMES.SYSTEM}
  <button
    on:click={() => toggleTheme(THEMES.DARK)}
    aria-label="Switche to Dark theme">Dark</button
  >
{/if}

{#if currentTheme != THEMES.SYSTEM}
  <button on:click={toggleSystemTheme} aria-label="Use System theme"
    >System theme</button
  >
{/if}
