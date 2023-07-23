<script>
  let rows = [
    {
      side: "1 meter",
      data: ["10-11", "12-13", "14-15", "16-17", "18-19", "20-21", "22-23"],
    },
    {
      side: "1 meter",
      data: ["24-25", "26-27", "28-29", "30-31", "32-33", "34-35", "36-37"],
    },
    {
      side: "2 meters",
      data: ["38-40", "41-43", "44-46", "47-49", "50-52", "53-55", "56-58"],
    },
    {
      side: "2 meters",
      data: ["59-61", "62-64", "65-67", "68-70", "71-73", "74-76", "77-79"],
    },
  ];
</script>

<svelte:head>
  <title>4 winning - 2 Players</title>
</svelte:head>

<h1>2 Players</h1>

<table>
  {#each rows as { side, data }, outerIndex}
    <tbody id={`row${outerIndex + 1}`}>
      <tr>
        <td class="points">{side}</td>
        {#each data as value, innerIndex}
          <td class="meters" id={`row${outerIndex + 1}-${innerIndex}`}>
            {value}
          </td>
        {/each}
        <td class="points">{side}</td>
      </tr>
    </tbody>
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

  /* button {
    cursor: pointer;
    border: 5px solid var(--border-color);
  } */
</style>
