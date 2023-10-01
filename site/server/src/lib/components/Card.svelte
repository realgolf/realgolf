<script lang="ts">
  export let title: string;
  export let link: string;
  export let description: string;

  let showNormal = true;
  let showHover = false;

  function toggleDetails() {
    showNormal = !showNormal;
    showHover = !showHover;
  }
</script>

<a href={link} class="card_normal">
  <div>
    <h3>{title}</h3>
    <p class="description">{description}</p>
  </div>
</a>

<style lang="scss">
  .card_normal {
    background-color: var(--nav-color);
    padding: 50px 50px;
    border-radius: 5px;
    border: 1px solid var(--border-color);
    margin: 15px;
    text-align: center;
    &:hover {
      cursor: pointer;
      box-shadow: 10px 10px 20px var(--border-color);
    }
    h3 {
      text-align: center;
    }

    .description {
      text-align: left;
      text-decoration: none !important;
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
</style>
