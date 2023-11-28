<script lang="ts">
  import { enhance } from "$app/forms";
  import { faEye } from "@fortawesome/free-solid-svg-icons";
  import { onMount } from "svelte";
  import Fa from "svelte-fa";
  import type { ActionData } from "./$types";

  export let form: ActionData;

  onMount(() => {
    const passwordInput = document.getElementById(
      "password_input"
    ) as HTMLInputElement;
    const passwordVerifyInput = document.getElementById(
      "password_verify_input"
    ) as HTMLInputElement;

    const toggleButton = document.getElementById("toggle_password");

    if (toggleButton && passwordInput && passwordVerifyInput) {
      toggleButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission

        if (passwordInput.type === "password") {
          passwordInput.type = "text";
        } else {
          passwordInput.type = "password";
        }

        if (passwordVerifyInput.type === "password") {
          passwordVerifyInput.type = "text";
        } else {
          passwordVerifyInput.type = "password";
        }
      });
    }
  });
</script>

<svelte:head>
  <title>Golf Games - Register</title>
</svelte:head>

<h1>Register</h1>

<main>
  <form method="POST" autocomplete="off" use:enhance>
    <div>
      <label for="email_input">Email</label>
      <input
        type="email"
        id="email_input"
        name="email"
        value={form?.user?.email ?? ""}
      />
    </div>
    <div>
      <label for="password_input">Password</label>
      <input type="password" id="password_input" name="password" />
    </div>
    <div>
      <label for="password_verify_input">Verify Password</label>
      <input
        type="password"
        id="password_verify_input"
        name="password_verify"
      />
    </div>
    <button id="toggle_password" type="button"
      ><Fa id="eye_icon" icon={faEye} /></button
    >
    <div>
      <label for="name_input">Name</label>
      <input
        type="text"
        id="name_input"
        name="name"
        value={form?.user?.name ?? ""}
      />
    </div>
    <button>Register</button>
  </form>

  {#if form?.error}
    <p class="error">
      {form?.error}
    </p>
  {/if}
</main>

<style lang="scss">
  main {
    max-width: 40rem;
  }
</style>