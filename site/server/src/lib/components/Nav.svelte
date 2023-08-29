<script lang="ts">
  import {
    faHouse,
    faKey,
    faLock,
    faSection,
    faTh,
    faUser,
    type IconDefinition,
  } from "@fortawesome/free-solid-svg-icons";
  import ThemeToggler from "./ThemeToggler.svelte";
  import { page } from "$app/stores";
  import Fa from "svelte-fa";

  export let logged_in = false;

  type link = {
    path: string;
    icon: IconDefinition;
    name: string;
    secured: boolean;
  };

  const links: link[] = [
    {
      path: "/",
      icon: faHouse,
      name: "Home",
      secured: false,
    },
    {
      path: "/dashboard",
      icon: faTh,
      name: "Dashboard",
      secured: true,
    },
    {
      path: "/account",
      icon: faUser,
      name: "Account",
      secured: true,
    },
    {
      path: "/register",
      icon: faLock,
      name: "Register",
      secured: false,
    },
    {
      path: "/login",
      icon: faKey,
      name: "Login",
      secured: false,
    },
    {
      path: "/imprint",
      icon: faSection,
      name: "Imprint",
      secured: false,
    },
  ];
</script>

<nav>
  <ul>
    {#each links as { path, icon, secured, name }}
      {#if path == "/" || path == "/imprint" || secured === logged_in}
        <li
          class:current={$page.url.pathname === path ||
            $page.url.pathname.startsWith(path + "/")}
        >
          <a href={path}>
            <Fa {icon} />
            <span class="name">{name}</span>
          </a>
        </li>
      {/if}
    {/each}
    <li>
      <ThemeToggler />
    </li>
  </ul>
</nav>

<style lang="scss">
  nav {
    padding-block: 1.25rem;
    background-color: var(--nav-color);
  }
  ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.25rem;
    a {
      position: relative;
      text-decoration: none;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 0;
        height: 2px;
        background-color: var(--highlight-color);
        transition: width 0.3s ease;
      }

      &:hover::before {
        width: 100%;
      }
    }

    li.current::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -0.15rem;
      height: 0.1rem;
      border-radius: 100vw;
    }

    li:not(.current) .name {
      /* visually hidden */
      position: absolute;
      left: -100000px;
    }

    @media (max-width: 38rem) {
      nav {
        padding-block: 0.5rem;
      }

      li:not(.current) .name {
        /* visually hidden */
        position: absolute;
        left: -100000px;
      }
    }
  }
</style>
