<script lang="ts">
  export let title: string;
  export let link: string;
</script>

<a href={link}>
  <div class="card">
    <h3>{title}</h3>
  </div>
</a>

<style lang="scss">
  .card {
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
  }
</style>
