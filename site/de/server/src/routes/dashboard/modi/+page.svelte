<script>
  import GoBack from "$lib/components/GoBack.svelte";
</script>

<svelte:head>
  <title>Golf Games - Modi</title>
</svelte:head>

<GoBack />

<h1>Modi</h1>

<main>
  <p class="success">
    Hier finden Sie die verschiedenen Modi, in denen Sie die Spiele spielen
    können.
  </p>

  <details>
    <summary>Inhalte</summary>
    <ul class="no-bullets">
      <li><a href="#4-winning">4 Winning</a></li>
      <li><a href="#exact">Exact</a></li>
      <li><a href="#precision">Precision</a></li>
    </ul>
  </details>

  <h2 id="4-winning">4 Winning</h2>

  <ol class="no-bullets">
    <li><a href="/dashboard/4winning/two-players">Zwei Spieler / Teams</a></li>
    <li>
      <a href="/dashboard/4winning/three-players">Drei Spieler / Teams</a>
    </li>
    <li>
      <a href="/dashboard/4winning/four-players">Vier Spieler / Teams</a>
    </li>
  </ol>

  <h2 id="exact">Exact</h2>

  <ol class="no-bullets">
    <li><a href="/dashboard/exact/two-players">Zwei Spieler / Teams</a></li>
    <li>
      <a href="/dashboard/exact/three-players">Drei Spieler / Teams</a>
    </li>
    <li><a href="/dashboard/exact/four-players">Vier Spieler / Teams</a></li>
  </ol>

  <h2 id="precision">Precision</h2>

  <ol class="no-bullets">
    <li><a href="/dashboard/precision/one-player">Ein Spieler</a></li>
    <li><a href="/dashboard/precision/two-players">Zwei Spieler</a></li>
    <li><a href="/dashboard/precision/three-players">Drei Spieler</a></li>
    <li><a href="/dashboard/precision/four-players">Vier Spieler</a></li>
  </ol>
</main>
