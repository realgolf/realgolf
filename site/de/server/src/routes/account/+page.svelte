<script lang="ts">
  import { enhance } from "$app/forms";
  import { onMount } from "svelte";
  import type { ActionData, PageData } from "./$types";
  import Fa from "svelte-fa";
  import { faEye } from "@fortawesome/free-solid-svg-icons";

  export let form: ActionData;
  export let data: PageData;

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
  <title>Golf Games - Konto</title>
</svelte:head>

<h1>Konto</h1>

<form
  action="?/name"
  method="POST"
  autocomplete="off"
  class="update-form"
  use:enhance
>
  <div>
    <label for="name_input">Name</label>
    <input type="text" id="name_input" name="name" value={data.name} />
  </div>
  <button aria-label="update name">Aktualisieren</button>
</form>

<form
  action="?/email"
  method="POST"
  autocomplete="off"
  class="update-form"
  use:enhance
>
  <div>
    <label for="email_input">Email</label>
    <input type="email" id="email_input" name="email" value={data.email} />
  </div>
  <button aria-label="update email">Aktualisieren</button>
</form>

<form
  action="?/password"
  method="POST"
  autocomplete="off"
  class="update-form"
  use:enhance
>
  <div>
    <label for="password_input">Passwort</label>
    <input type="password" id="password_input" name="password" value="" />
  </div>

  <div>
    <button id="toggle_password" type="button"
      ><Fa id="eye_icon" icon={faEye} /></button
    >
    <button aria-label="update password">Aktualisieren</button>
  </div>
</form>

{#if form?.message}
  <p class="success">
    {form.message}
  </p>
{/if}

{#if form?.error}
  <p class="error">
    {form.error}
  </p>
{/if}

<form action="/logout" method="POST" class="logout-form" use:enhance>
  <button>Abmelden</button>
</form>

<style>
  .update-form {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: end;
    gap: 1rem;
  }
  .logout-form {
    margin-top: 1.5rem;
  }
</style>
