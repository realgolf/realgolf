<script lang="ts">
  import ThemeToggler from "./ThemeToggler.svelte";

  export let logged_in = false;

  type link = {
    path: string;
    text: string;
    protected: boolean;
  };

  const links: link[] = [
    {
      path: "/",
      text: "Home",
      protected: false,
    },
    {
      path: "/dashboard",
      text: "Dashboard",
      protected: true,
    },
    {
      path: "/account",
      text: "Account",
      protected: true,
    },
    {
      path: "/register",
      text: "Register",
      protected: false,
    },
    {
      path: "/login",
      text: "Login",
      protected: false,
    },
    {
      path: "/imprint",
      text: "Imprint",
      protected: false,
    },
  ];
</script>

<nav>
  <ul>
    {#each links as link}
      {#if link.path == "/" || link.path == "/imprint" || link.protected === logged_in}
        <li>
          <a href={link.path}>
            {link.text}
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
  }
</style>
