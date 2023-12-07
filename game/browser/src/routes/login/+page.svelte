<script lang="ts">
  import { faEye } from "@fortawesome/free-solid-svg-icons";
  import { onMount } from "svelte";
  import Fa from "svelte-fa";
  import type { ActionData } from "./$types";

  export let form: ActionData;

  onMount(() => {
    const passwordInput = document.getElementById(
      "password_input"
    ) as HTMLInputElement;
    const toggleButton = document.getElementById("toggle_password");

    if (toggleButton && passwordInput) {
      toggleButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission

        if (passwordInput.type === "password") {
          passwordInput.type = "text";
        } else {
          passwordInput.type = "password";
        }
      });
    }
  });
</script>

<svelte:head>
  <title>Real Golf - Login</title>
</svelte:head>

<h1>Login</h1>

<form method="POST" autocomplete="off">
  <div>
    <label for="email_input">Email</label>
    <input
      type="email"
      id="email_input"
      name="email"
      value={form?.email ?? ""}
    />
  </div>
  <div>
    <label for="password_input">Password</label>
    <input type="password" id="password_input" name="password" />
    <button id="toggle_password" type="button"
      ><Fa id="eye_icon" icon={faEye} /></button
    >
  </div>
  <button>Login</button>
</form>

{#if form?.user}
  <p class="success">
    Welcome {form.user.name}! You can now open the
    <a href="/dashboard">Dashboard</a>.
  </p>
{/if}

{#if form?.error}
  <p class="error">
    {form.error}
  </p>
{/if}

<style>
  #toggle_password {
    margin-top: 10px;
  }
</style>
