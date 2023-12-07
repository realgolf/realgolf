<script lang="ts">
  import Card from "$lib/components/Card.svelte";

  interface Card {
    link: string;
    title: string;
    description: string;
  }

  let fourwinning: Card[] = [
    {
      link: "/dashboard/modi/4Winning/Two-Players",
      title: "Two Players",
      description:
        "This version of 4Winning can be played with Two Players,  Red and  Blue",
    },
    {
      link: "/dashboard/modi/4Winning/Three-Players",
      title: "Three Players",
      description:
        "This version of 4Winning can be played with Three Players, Red, Blue and Green",
    },
    {
      link: "/dashboard/modi/4Winning/Four-Players",
      title: "Four Players",
      description:
        "This version of 4Winning can be played with Four Players, Red, Blue, Green and Orange",
    },
  ];

  let exact: Card[] = [
    {
      link: "/dashboard/modi/Exact/Two-Players",
      title: "Two Players",
      description:
        "This version of Exact can be played with Two Players,  Red and  Blue",
    },
    {
      link: "/dashboard/modi/Exact/Three-Players",
      title: "Three Players",
      description:
        "This version of Exact can be played with Three Players, Red, Blue and Green",
    },
    {
      link: "/dashboard/modi/Exact/Four-Players",
      title: "Four Players",
      description:
        "This version of Exact can be played with Four Players, Red, Blue, Green and Orange",
    },
  ];

  let precision: Card[] = [
    {
      link: "/dashboard/modi/Precision/One-Player",
      title: "One Player",
      description:
        "This version of Precision can be played with One Player, Red",
    },
    {
      link: "/dashboard/modi/Precision/Two-Players",
      title: "Two Players",
      description:
        "This version of Precision can be played with Two Players, Red, Blue ",
    },
    {
      link: "/dashboard/modi/Precision/Three-Players",
      title: "Three Players",
      description:
        "This version of Precision can be played with Three Players, Red, Blue and Green",
    },
    {
      link: "/dashboard/modi/Precision/Four-Players",
      title: "Four Players",
      description:
        "This version of Precision can be played with Four Players, Red, Blue, Green and Orange",
    },
  ];

  let sinking_ships: Card[] = [
    {
      link: "/dashboard/modi/Sinking-Ships/Two-Players",
      title: "Two Players",
      description:
        "This version of Sinking Ships can be played with Two Players, Red, Blue",
    },
  ];
</script>

<svelte:head>
  <title>Real Golf - Modi</title>
</svelte:head>

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

  <div class="modi">
    <h2 id="4-winning">4 Winning</h2>

    <div class="modis">
      {#each fourwinning as { link, title, description }}
        <Card {link} {title} {description} />
      {/each}
    </div>

    <h2 id="exact">Exact</h2>

    <div class="modis">
      {#each exact as { link, title, description }}
        <Card {link} {title} {description} />
      {/each}
    </div>

    <h2 id="precision">Precision</h2>

    <div class="modis">
      {#each precision as { link, title, description }}
        <Card {link} {title} {description} />
      {/each}
    </div>
  </div>

  <h2 id="sinking-ships">Sinking Ships</h2>

  <div class="modis">
    {#each sinking_ships as { link, title, description }}
      <Card {link} {title} {description} />
    {/each}
  </div>
</main>

<style lang="scss">
  .modi {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 90vw;
  }

  .modis {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: left;

    @media screen and (max-width: 767px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
</style>
