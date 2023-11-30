<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title>Real Golf - Dashboard</title>
</svelte:head>

<main>
  <h2>Dashboard</h2>

  <p>
    <b>
      Welcome to "Real Golf" {data.name} - your ultimate destination for golf challenges!
      Discover "4 Winning", "Exact", and "Precision" - captivating golf experiences
      tested with trainers.
    </b>
  </p>

  <p class="success">
    You can find all the games in the <b>Modi</b> Card below.
  </p>
  <p class="success">
    Everything about the Rules is in the Card labeld <b>Rules</b>.
  </p>
  <p class="success">
    If the normal games are to boring, you can find more challenging ideas in
    the Card labeled <b>Levels</b>.
  </p>

  <h3>But most important enjoy the games and have fun!</h3>

  <div class="modi">
    <div class="modis">
      <Card
        link="/dashboard/rules"
        title="Rules"
        description="Here you can see all rules for all three games."
      />

      <Card
        link="/dashboard/modi"
        title="Modi"
        description="Here you can find all game modes you can play, just click on the link for
the game you want to play."
      />

      <Card
        link="/dashboard/levels"
        title="Levels"
        description="Some extra variation, if the games are to easy for you."
      />
    </div>
    <div class="modis">
      <Card
        link="/dashboard/games"
        title="Games"
        description="Here you can find all games you have saved in the database."
      />

      <Card
        link="/dashboard/info"
        title="Info"
        description="Just some random further information."
      />

      <Card
        link="/dashboard/settings"
        title="Settings"
        description="Here you can edit your Account settings"
      />
    </div>
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
