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
  <title>Real Golf - Register</title>
</svelte:head>

<h1>Register</h1>

<form method="POST" autocomplete="off">
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
    <input type="password" id="password_verify_input" name="password_verify" />
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

  <div>
    <label for="handicap">Handicap</label>
    <input type="text" name="handicap" id="handicap" />
  </div>
  <button>Register</button>
</form>

{#if form?.error}
  <p class="error">
    {form?.error}
    You can still try to login here: <a href="/login">Login</a>, or open the
    <a href="/dashboard">Dashboard</a>
  </p>
{/if}

{#if form?.user}
  <p class="success">
    Welcome {form.user.name}! You can now open the
    <a href="/dashboard">Dashboard</a>.
  </p>
{/if}
