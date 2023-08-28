<script>
  import GoBack from "$lib/components/GoBack.svelte";
</script>

<svelte:head>
  <title>Golf Games - Level</title>
</svelte:head>

<GoBack />

<h1>Level</h1>

<main>
  <p class="success">Bitte lesen Sie die Regeln.</p>
  <p class="success">Mit den Leveln zu spielen ist optional.</p>

  <details>
    <summary>Inhalte</summary>
    <ul class="no-bullets">
      <li><a href="#4-winning">4 Winning</a></li>
      <li><a href="#exact">Exact</a></li>
    </ul>
  </details>

  <h2 id="4-winning">4 Winning</h2>

  <ol class="no-bullets">
    <li><b>Bronze:</b> Nur die Länge zählt</li>
    <li>
      <b>Silber:</b> Die Länge und die seitliche Abweichung gelten.
    </li>
    <li>
      <b>Gold:</b> Felder können nur nach vorheriger Ansage gespielt werden.
    </li>
    <li><b>Platin:</b> Wie Golf alles mit einem Schlag.</li>
  </ol>

  <h2 id="exact">Exact</h2>

  <ol class="no-bullets">
    <li><b>Bronze:</b> Nur die Länge zählt</li>
    <li>
      <b>Silber:</b> Die Länge und seitliche Abweichung gelten. - Seitliche Abweichung
      wird von den Spielern ausgesucht.
    </li>
    <li>
      <b>Gold:</b> Felder können nur nach vorheriger Ansage gespielt werden. Der
      Rest ist wie Silber.
    </li>
    <li><b>Platin:</b> Wie Gold, alles mit einem Schläger.</li>
  </ol>
</main>
