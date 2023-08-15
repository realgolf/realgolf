<script>
  import GoBack from "$lib/components/GoBack.svelte";
</script>

<svelte:head>
  <title>Modi</title>
</svelte:head>

<GoBack />

<h1>Modi</h1>

<main>
  <p class="success">
    Here you can find the different modi you can play the games in.
  </p>

  <details>
    <summary>Table of Contains</summary>
    <ul class="no-bullets">
      <li><a href="#4-winning">4 Winning</a></li>
      <li><a href="#exact">Exact</a></li>
      <li><a href="#precision">Precision</a></li>
    </ul>
  </details>

  <h2 id="4-winning">4 Winning</h2>

  <ol class="no-bullets">
    <li><a href="/dashboard/4winning/two-players">Two players / teams</a></li>
    <li>
      <a href="/dashboard/4winning/three-players">Three players / teams</a>
    </li>
    <li>
      <a href="/dashboard/4winning/four-players">Four players / teams</a>
    </li>
  </ol>

  <h2 id="exact">Exact</h2>

  <ol class="no-bullets">
    <li><a href="/dashboard/exact/two-players">Two players / teams</a></li>
    <li>
      <a href="/dashboard/exact/three-players">Three players / teams</a>
    </li>
    <li><a href="/dashboard/exact/four-players">Four players / teams</a></li>
  </ol>

  <h2 id="precision">Precision</h2>

  <ol class="no-bullets">
    <li><a href="/dashboard/precision/one-player">One player</a></li>
    <li><a href="/dashboard/precision/two-players">Two players</a></li>
    <li><a href="/dashboard/precision/three-players">Three players</a></li>
    <li><a href="/dashboard/precision/four-players">Four players</a></li>
  </ol>
</main>
