<script lang="ts">
  import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
  import {
    faArrowRightFromBracket,
    faBars,
    faBook,
    faChartLine,
    faGamepad,
    faGavel,
    faGear,
    faHouse,
    faInfoCircle,
    faKey,
    faLock,
    faSave,
    faTh,
    faWrench,
  } from "@fortawesome/free-solid-svg-icons";
  import { onDestroy, onMount } from "svelte";
  import Fa from "svelte-fa";

  export let auth: string | undefined;

  let isOpen = false;
  let blurBackground = false;

  function toggleDropdown() {
    isOpen = !isOpen;
    blurBackground = isOpen;
  }

  function closeDropdown() {
    isOpen = false;
  }

  onMount(() => {
    function closeDropdownOnClick(event: any) {
      if (
        event.target instanceof Element &&
        !event.target.closest(".dropdown") &&
        !event.target.closest(".dropdown-button") &&
        !event.target.closest(".dropdown-content")
      ) {
        closeDropdown();
      }
    }

    window.addEventListener("click", closeDropdownOnClick);
    window.addEventListener("touchend", closeDropdownOnClick);

    onDestroy(() => {
      window.removeEventListener("click", closeDropdown);
    });
  });
</script>

<div class="dropdown">
  <button class="dropdown-button" on:click|stopPropagation={toggleDropdown}>
    <Fa icon={faBars} />
    <span class="description">Menu</span>
  </button>
</div>
{#if isOpen}
  <div class="blurry-background" />
  <div class="dropdown-content">
    <button class="close-button" on:click={closeDropdown}>x</button>
    <div class="home row border-bottom">
      <a href="/"><span><Fa icon={faHouse} /></span>Home</a>
    </div>
    {#if !auth}
      <div class="logged-out row border-bottom">
        <a href="/register"><span><Fa icon={faLock} /></span>Register</a>
        <a href="/login"><span><Fa icon={faKey} /></span>Login</a>
      </div>
    {/if}
    {#if auth}
      <div class="logged-in row border-bottom">
        <a href="/dashboard"><span><Fa icon={faTh} /></span>Dashboard</a>
        <a href="/dashboard/settings"
          ><span><Fa icon={faGear} /></span>Settings</a
        >
      </div>
      <div class="games row border-bottom">
        <a href="/dashboard/modi"><span><Fa icon={faGamepad} /></span>Modi</a>
        <a href="/dashboard/games"><span><Fa icon={faSave} /></span>Games</a>
        <a href="/dashboard/info"><span><Fa icon={faInfoCircle} /></span>Info</a
        >
        <a href="/dashboard/levels"
          ><span><Fa icon={faChartLine} /></span>Levels</a
        >
        <a href="/dashboard/rules"><span><Fa icon={faBook} /></span>Rules</a>
        <a href="/dashboard/tools"><span><Fa icon={faWrench} /></span>Tools</a>
      </div>
      <div class="logged-out row border-bottom">
        <a href="/logout"
          ><span><Fa icon={faArrowRightFromBracket} /></span>Logout</a
        >
      </div>
    {/if}
    <div class="external-links row border-bottom">
      <a href="/faq"><span><Fa icon={faQuestionCircle} /></span>FAQ</a>
      <a href="https://docs.realgolf.games"
        ><span><Fa icon={faBook} /></span>Documentation</a
      >
    </div>
    <div class="copyright row border-bottom">
      <p><a href="/imprint"><Fa icon={faGavel} /> Imprint</a></p>
      <p>© 2023 Julian Hammer</p>
      <p>All rights reserved</p>
      <p>
        <a
          class="underline"
          target="_blank"
          href="https://github.com/MoinJulian/Golf">GitHub</a
        >
      </p>
    </div>
  </div>
{/if}

<style lang="scss">
  .dropdown {
    position: relative;
    display: inline-block;
  }

  button {
    width: max-content;
    height: max-content;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    background-color: var(--nav-color);

    span .description {
      font-size: var(--tiny-font);
    }
  }

  button :global(svg) {
    transition: opacity 250ms linear, rotate 250ms linear;
    color: var(--font-color);
  }

  .blurry-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(110, 118, 129, 0.4);
    opacity: 50%;
    z-index: 998;
    display: block;
  }

  .dropdown-content {
    position: absolute;
    position: fixed;
    z-index: 999;
    display: block;
    right: 0;
    top: 0;
    left: auto;

    font-size: var(--small-font);

    box-shadow: 0px 0px 10px var(--shadow-color);

    background-color: var(--nav-color);

    height: 100%;
    overflow-y: auto;

    max-width: 250px;
    text-align: left;

    border: 2px solid var(--border-color);
    border-right: none;
    border-top-left-radius: 0.75rem;
    border-bottom-left-radius: 0.75rem;

    a {
      text-decoration: none;

      span {
        margin-right: 0.5rem;
      }
    }

    .underline {
      text-decoration: underline !important;
    }

    .close-button {
      margin: 10px;

      &:hover {
        background-color: var(--label-color);
      }
    }

    .border-bottom {
      border-bottom: 2px solid var(--border-color);
    }

    .row {
      display: flex;
      flex-direction: column;
      padding-right: 30px;
      padding-left: 15px;
    }

    .home,
    .external-links,
    .copyright,
    .games,
    .logged-out,
    .logged-in {
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
</style>
