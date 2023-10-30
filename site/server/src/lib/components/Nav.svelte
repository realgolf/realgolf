<script lang="ts">
  import { page } from "$app/stores";
  import { capitalizeFirstLetter } from "$lib/shared/utils";
  import {
    faHouse,
    type IconDefinition,
  } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";
  import Dropdownmenu from "./Dropdownmenu.svelte";

  export let auth: string | undefined;

  type link = {
    path: string;
    icon: IconDefinition;
  };

  let links: link[] = [
    {
      path: "/",
      icon: faHouse,
    },
  ];

  $: currentPagePath = $page.url.pathname;

  function getPagePath() {
    const path = currentPagePath;
    if (path === "/") {
      return "<strong>Home</strong>";
    }

    if (path === "/dashboard") {
      return "<strong>Dashboard</strong>";
    }

    if (path === "/login") {
      return "<strong>Login</strong>";
    }

    if (path === "/register") {
      return "<strong>Register</strong>";
    }

    if (path === "/faq") {
      return "<strong>FAQ</strong>";
    }

    if (path === "/imprint") {
      return "<strong>Imprint</strong>";
    }

    if (path === "/rules") {
      return "<strong>Rules</strong>";
    }

    const pathParts = path.split("/").filter((part) => part !== "");
    let breadcrumbPath = "";

    for (let i = 0; i < pathParts.length; i++) {
      const pathBefore = pathParts.slice(0, i + 1).join("/");
      const isLastSegment = i === pathParts.length - 1;

      if (isLastSegment) {
        breadcrumbPath += ` <span style="color: darkgrey;">/</span> <strong>${capitalizeFirstLetter(
          pathParts[i]
        )}</strong>`;
      } else if (i === 0) {
        breadcrumbPath += ` <a href="/${pathBefore}" style="text-decoration: none;">${capitalizeFirstLetter(
          pathParts[i]
        )}</a>`;
      } else {
        if (pathBefore.startsWith("/dashboard/")) {
          breadcrumbPath += ` <span style="color: darkgrey;">/</span> Dashboard`;
          const afterDashboard = pathBefore.substring("/dashboard/".length);
          breadcrumbPath += ` <a href="/dashboard/${afterDashboard}" style="text-decoration: none;">${capitalizeFirstLetter(
            pathParts[i]
          )}</a>`;
        } else {
          breadcrumbPath += ` <span style="color: darkgrey;">/</span> <a href="/${pathBefore}" style="text-decoration: none;">${capitalizeFirstLetter(
            pathParts[i]
          )}</a>`;
        }
      }
    }

    return breadcrumbPath;
  }
</script>

<nav>
  <ul>
    {#each links as { path, icon }}
      <li>
        <a href={path}>
          <Fa {icon} />
        </a>
        <span class="no-line">{@html getPagePath()}</span>
      </li>
    {/each}
    <li>
      <Dropdownmenu {auth} />
    </li>
  </ul>
</nav>

<style lang="scss">
  nav {
    padding-block: 1.25rem;
    background-color: var(--nav-color);

    @media (max-width: 38rem) {
      padding-block: 0.5rem;
    }

    ul {
      list-style-type: none;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 1.25rem;
      margin-right: 20px;
      margin-left: 20px;
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

      li {
        span {
          margin-left: 15px;
          white-space: nowrap;
        }
      }
    }
  }
</style>
