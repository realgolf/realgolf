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
    <p>Here you can see all rules for all three games.</p>
  {:else if title == "Modi"}
    <p>
      Here you can find all game modes you can play, just click on the link for
      the game you want to play.
    </p>
  {:else if title == "Levels"}
    <p>Some extra variation, if the games are to easy for you.</p>
  {:else if title == "Games"}
    <p>Here you can find all games you have saved in the database.</p>
  {:else if title == "Info"}
    <p>Just some random further information.</p>
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
