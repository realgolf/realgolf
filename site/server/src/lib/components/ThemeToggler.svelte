<script lang="ts">
  import { THEMES } from "$lib/shared/config";
  import { onMount } from "svelte";

  let currentTheme: string;

  const setTheme = (theme: string) => {
    if (!Object.values(THEMES).includes(theme)) return;
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    currentTheme = theme;
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
    } else {
      const prefers_dark = window.matchMedia("(prefers-color-scheme: dark)");
      const theme = prefers_dark.matches ? THEMES.DARK : THEMES.LIGHT;
      setTheme(theme);
    }
  });
</script>

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
