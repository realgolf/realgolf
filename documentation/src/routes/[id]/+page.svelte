<script lang="ts">
  export let data;

  $: toc = data.toc;
  $: html_code = data.html_code;
  $: title = data.attributes.title;
</script>

<svelte:head>
  <title>Golf Games Docs | {title}</title>
</svelte:head>

<h1>
  {title}
</h1>

{#if toc.length > 0}
  <details class="toc">
    <summary>In this article</summary>
    <ol>
      {#each toc as h2Item}
        <li>
          <a tabindex="-1" href="#{h2Item.id}">{h2Item.text}</a>
          {#if h2Item.subheadings && h2Item.subheadings.length > 0}
            <ol>
              {#each h2Item.subheadings as h3Item}
                <li>
                  <a tabindex="-1" href="#{h3Item.id}">{h3Item.text}</a>
                </li>
              {/each}
            </ol>
          {/if}
        </li>
      {/each}
    </ol>
  </details>

  <div class="outer-toc" class:long={toc.length > 15} aria-hidden="true">
    <ol>
      <p>In this article</p>
      {#each toc as h2Item}
        <li>
          <a tabindex="-1" href="#{h2Item.id}">{h2Item.text}</a>
          {#if h2Item.subheadings && h2Item.subheadings.length > 0}
            <ol>
              {#each h2Item.subheadings as h3Item}
                <li>
                  <a tabindex="-1" href="#{h3Item.id}">{h3Item.text}</a>
                </li>
              {/each}
            </ol>
          {/if}
        </li>
      {/each}
    </ol>
  </div>
{/if}

<article>
  {@html html_code}
</article>

<style lang="scss">
  .toc {
    margin-top: 1rem;
    margin-bottom: 1rem;

    ol {
      margin-top: 0.5rem;
    }
  }

  .outer-toc {
    opacity: 0;
    pointer-events: none;

    @media (min-width: 68rem) {
      opacity: 1;
      pointer-events: initial;
    }

    transition: opacity 250ms linear;
    position: fixed;
    top: 0;
    height: 100vh;
    transform: translateX(78rem);
    overflow-y: auto;

    display: flex;
    align-items: center;
    color: var(--secondary-font-color);

    ol {
      margin-left: 0;
      padding-left: 2rem;
      border-left: 1px solid var(--border-color);
    }

    a:hover {
      color: var(--font-color);
    }

    &.long {
      align-items: start;

      li + li {
        margin-block: 0;
      }

      ol {
        padding-block: 1rem;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  }

  article {
    :global(h2) {
      padding-top: 5rem;
      margin-top: -3.5rem;
    }

    :global(blockquote) {
      margin-block: 1rem;
      margin-left: 1rem;
      padding-left: 0.5rem;
      color: var(--secondary-font-color);
      font-size: var(--small-font);
      border-left: 0.2rem solid var(--border-color);
      line-height: 1.6;
    }

    :global(pre) {
      border-radius: 0.4rem;
      font-size: var(--small-font);
      padding: 1rem;
      margin-block: 1rem;
      overflow: auto;
      max-height: 30rem;
      border: 0.15rem solid var(--code-border-color);
      background-color: var(--code-bg-color);
      tab-size: 4;

      scrollbar-width: thin;
      &::-webkit-scrollbar {
        width: 0.4rem;
        height: 0.4rem;
      }
      &::-webkit-scrollbar-thumb {
        background-color: var(--secondary-font-color);
      }
    }

    :global(code:not(pre code)) {
      font-family: monospace;
      background-color: var(--inline-code-bg-color);
      padding-inline: 0.5rem;
      padding-block: 0.05rem;
      border-radius: 0.2rem;
      font-size: var(--small-font);
      white-space: nowrap;
    }
  }
</style>
