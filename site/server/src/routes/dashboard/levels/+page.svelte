<script lang="ts">
  export let data;
  let measurement_unit = data.measurement_unit;
</script>

<svelte:head>
  <title>Golf Games - Levels</title>
</svelte:head>

<h1>Levels</h1>

<main>
  <p class="success">Please read the levels.</p>
  <p class="success">To play with the levels is optional.</p>

  <details>
    <summary>Table of Contains</summary>
    <ul class="no-bullets">
      <li><a href="#4-winning">4 Winning</a></li>
      <li><a href="#exact">Exact</a></li>
    </ul>
  </details>

  <h2 id="4-winning">4 Winning</h2>

  <ol class="no-bullets">
    <li><b>Bronze:</b> Only the lenght of the shot applies</li>
    <li>
      <b>Silver:</b> The number of {measurement_unit} and the lateral deviation apply.
    </li>
    <li><b>Gold:</b> Fields can only be played after prior announcement.</li>
    <li><b>Platinum:</b> Like gold, all with a club.</li>
  </ol>

  <h2 id="exact">Exact</h2>

  <ol class="no-bullets">
    <li><b>Bronze:</b> Only the lenght of the shot applies</li>
    <li>
      <b>Silver:</b> The number of {measurement_unit} and the lateral deviation apply.
      - lateral deviation gets choosed by the players
    </li>
    <li>
      <b>Gold:</b> Fields can only be played after prior announcement. The rest is
      like Silver
    </li>
    <li><b>Platinum:</b> Like gold, all with a club.</li>
  </ol>
</main>
