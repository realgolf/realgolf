<script lang="ts">
  import Describtion from "$lib/components/Describtion.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title>Golf Games - Dashboard</title>
</svelte:head>

<h1>Dashboard</h1>

<h2>Welcome {data.name}</h2>

<Describtion />
