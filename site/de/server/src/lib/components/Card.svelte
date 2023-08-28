<script lang="ts">
  export let title: string;
  export let link: string;

  let showNormal = true;
  let showHover = false;
  function toggleDetails() {
    showNormal = !showNormal;
    showHover = !showHover;
  }
</script>

<div class:card_normal={!showHover} class:hidden={showHover}>
  <a href={link}>
    <h3>{title}</h3>
  </a>
  <button on:click={toggleDetails}>Details</button>
</div>

<div class:card_hover={!showNormal} class:hidden={showNormal}>
  <h4>{title}</h4>
  {#if title == "Rules"}
    <p>Hier können Sie alle Regeln für alle drei Spiele sehen.</p>
  {:else if title == "Modi"}
    <p>
      Hier finden Sie alle Spielmodi, die Sie spielen können. Klicken Sie
      einfach auf den Link für das Spiel, das Sie spielen möchten.
    </p>
  {:else if title == "Levels"}
    <p>
      Einige zusätzliche Variationen, falls die Spiele für Sie zu einfach sind.
    </p>
  {:else if title == "Games"}
    <p>
      Hier können Sie alle Spiele finden, die Sie in der Datenbank gespeichert
      haben.
    </p>
  {:else if title == "Info"}
    <p>Nur einige zufällige zusätzliche Informationen.</p>
  {/if}
  <button on:click={toggleDetails}>{title}</button>
</div>

<style lang="scss">
  .card_normal {
    background-color: var(--nav-color);
    width: max-content;
    padding: 50px 50px;
    border-radius: 5px;
    border: 1px solid var(--border-color);
    margin: 15px 30px;
    &:hover {
      cursor: pointer;
      box-shadow: 10px 10px 20px var(--border-color);
    }
    h3 {
      text-align: center;
    }
  }
  .card_hover {
    background-color: var(--nav-color);
    width: 20rem;
    padding: 50px 50px;
    border-radius: 5px;
    border: 1px solid var(--border-color);
    margin: 15px 30px;
    text-decoration: none;
  }

  button {
    margin-top: 10px;
  }

  .hidden {
    display: none;
  }
</style>
