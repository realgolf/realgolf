<script lang="ts">
  import { first_row, rows } from "./table";
</script>

<svelte:head>
  <title>Sinking Ships- 2 Teas</title>
</svelte:head>

<h1>2 Teas</h1>

<table>
  {#each first_row as { side, data }, i (i)}
    <tr>
      <td class="points">{side}</td>
      {#each data as item, j (j)}
        <td class="points">{item}</td>
      {/each}
    </tr>
  {/each}
  {#each rows as { side, data }, i (i)}
    <tr>
      <td class="points">{side}</td>
      {#each data as item, j (j)}
        <td class="meters">{item}</td>
      {/each}
    </tr>
  {/each}
</table>

<style>
  .meters,
  .points {
    flex: 0 0 25%;
    box-sizing: border-box;
    border: 5px solid var(--border-color);
    min-width: calc(90vw / 15);
    height: calc(50vh / 8);
    text-align: center;
  }

  .meters:hover {
    cursor: pointer;
  }

  button {
    cursor: pointer;
    border: 5px solid var(--border-color);
  }
</style>
