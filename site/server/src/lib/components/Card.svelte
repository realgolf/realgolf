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
  <h3>{title}</h3>
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
		padding: 50px 50px;
		border-radius: 5px;
		border: 1px solid var(--border-color);
		margin: 15px;
		&:hover {
			cursor: pointer;
			box-shadow: 10px 10px 20px var(--border-color);
		}
		h3 {
			text-align: center;
		}
	}

	/* Auf Desktop: Karten nehmen die gesamte Breite ein */
	@media (min-width: 768px) {
		.card_normal {
			width: calc(
				40vw
			); /* Abzug von 30px Marge, um sicherzustellen, dass die Karten die gesamte Breite einnehmen */
		}
	}

	/* Auf Handy: Karten sind 90vw breit */
	@media (max-width: 767px) {
		.card_normal {
			width: 80vw;
		}
	}
	.card_hover {
		background-color: var(--nav-color);
		padding: 50px 50px;
		border-radius: 5px;
		border: 1px solid var(--border-color);
		margin: 15px;
		&:hover {
			cursor: pointer;
			box-shadow: 10px 10px 20px var(--border-color);
		}
		h3 {
			text-align: center;
		}
	}

	/* Auf Desktop: Karten nehmen die gesamte Breite ein */
	@media (min-width: 768px) {
		.card_hover {
			width: calc(
				40vw
			); /* Abzug von 30px Marge, um sicherzustellen, dass die Karten die gesamte Breite einnehmen */
		}
	}

	/* Auf Handy: Karten sind 90vw breit */
	@media (max-width: 767px) {
		.card_hover {
			width: 80vw;
		}
	}

  button {
    margin-top: 10px;
  }

  .hidden {
    display: none;
  }
</style>
