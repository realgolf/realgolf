<script lang="ts">
  export let data;

  console.log(data.auth);
</script>

<svelte:head>
  <title>Golf Games</title>
</svelte:head>

<h1>Golf Games</h1>

<main>
  <p>
    <b>
      Welcome to "Golf Games" - your ultimate destination for golf challenges!
      Discover "4 Winning", "Exact", and "Precision" - captivating golf
      experiences tested with trainers.
    </b>
  </p>
  <br />
  {#if data.auth == "true"}
    <p>
      If you don't have an account, that is no problem you can easily create one <a
        href="/register">here</a
      >.
    </p>
    <br />
    <p>
      If you already got an account you can log in <a href="/login">here</a>.
    </p>
    <br />
  {/if}
  <p>
    The offline version can be played here: <a
      target="_blank"
      href="https://golf-offline.moinjulian.com">Golf Games Offline</a
    >, you need an network connection for the first load and then all the data
    is cached so you can play it without an network connection.
  </p>
</main>
