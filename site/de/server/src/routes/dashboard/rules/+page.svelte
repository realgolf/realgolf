<script lang="ts">
  import GoBack from "$lib/components/GoBack.svelte";
</script>

<svelte:head>
  <title>Golf Games - Regeln</title>
</svelte:head>

<GoBack />

<h1>Regeln</h1>

<main>
  <p class="success">Dies sind alle Regeln für alle drei Spiele</p>
  <p class="success">Bitte lesen Sie sie sorgfälltig.</p>

  <details>
    <summary>Inhalte</summary>
    <ul class="no-bullets">
      <li><a href="#4-winning">4 Winning</a></li>
      <li><a href="#exact">Exact</a></li>
      <li><a href="#precision">Precision</a></li>
    </ul>
  </details>

  <h2 id="4-winning">4 Winning</h2>

  <p>
    Die Regeln des Spiels sind sehr einfach, es handelt sich lediglich um eine
    Art Vier-in-einer-Reihe-Spiel. Sie klicken auf den Button, den Sie aus der
    Entfernung treffen. Nach dem Zug des ersten Teams ist das zweite Team an der
    Reihe und wählt ein Feld aus, unabhängig davon, ob es bereits von einem
    anderen Team ausgewählt wurde. Anschließend ist das nächste Team an der
    Reihe; Sie können am oberen Rand des jeweiligen Spiels erkennen, welches
    Team gerade am Zug ist. Das Spiel geht weiter, bis ein Team vier Felder in
    einer Reihe oder Spalte hat. Wenn Sie dasselbe Feld viermal anklicken,
    erscheint eine Nachricht, die besagt, dass Sie dasselbe Feld bereits viermal
    angeklickt haben. Wenn ein Team gewinnt, werden die Werte der Felder
    zurückgesetzt und Sie können von vorne beginnen. Das Spiel wechselt
    automatisch zwischen den Teams. Alle oben genannten Informationen gelten für
    alle Spiele!
  </p>

  <h2 id="exact">Exact</h2>

  <ul class="no-bullets">
    <li>Es wird abwechselnd gespielt</li>
    <li>Klicken Sie auf das Feld, das Sie treffen möchten.</li>
    <li>Beachten Sie die Ebenen</li>
    <li>Nur die ganze Zahl ist gültig</li>
  </ul>

  <h2 id="precision">Precision</h2>

  <p>
    Das Ziel dieses Golfspiels "Precision" besteht darin, so viele Punkte wie
    möglich von den anfänglichen 100 Punkten durch präzise Schläge zu behalten.
    Für jeden Schlag wird die Abweichung des Balls von der Zielentfernung
    gemessen.
    <br />
    <br />
    Die Präzision wird anhand der Abweichung in Metern von der Zielentfernung gemessen.
    Je näher der Ball an der angegebenen Entfernung ist, desto weniger Punkte werden
    abgezogen. Es erfolgt eine Abzug von 1 Punkt pro Meter Abweichung vom Ziel.
    <br />
    <br />
    Am Ende des Spiels wird der Spieler, der die höchste Punktzahl von den anfänglichen
    100 Punkten behalten hat, zum Gewinner erklärt. Das bedeutet, dass die Person
    mit der höchsten Punktzahl aufgrund der Abzüge als Sieger hervorgeht! Fairness
    und Respekt gegenüber anderen Spielern stehen im Vordergrund. Achten Sie unbedingt
    auf die Regeln und die Etikette des Spiels sowie auf die Richtlinien des Clubs.
    <br />
    <br />
    Sie können das Spiel interessanter gestalten, indem Sie zusätzliche Herausforderungen
    einführen, wie das Spielen bei unterschiedlichen Wetterbedingungen oder auf verschiedenen
    Geländen. Ob Sie Anfänger oder erfahrener Golfer sind, "Präzision" bietet eine
    aufregende Gelegenheit, Ihre Fähigkeiten und Präzision zu zeigen. Genießen Sie
    das Spiel und die Gesellschaft Ihrer Mitspieler!
    <br />
    <br />
    Sind Sie bereit, Ihre Golfschwünge zu perfektionieren und so viele Punkte wie
    möglich zu behalten? Lassen Sie uns "Precision" spielen und herausfinden, wer
    am Ende die höchste Punktzahl erreicht!
  </p>
</main>
