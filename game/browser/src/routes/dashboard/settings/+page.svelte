<script lang="ts">
  import { capitalizeFirstLetter } from "$lib/shared/utils";
  import { faEye } from "@fortawesome/free-solid-svg-icons";
  import { onMount } from "svelte";
  import Fa from "svelte-fa";
  import type { ActionData } from "../$types";

  export let form: ActionData;
  export let data;

  onMount(() => {
    const newPasswordInput = document.getElementById(
      "new_password_input"
    ) as HTMLInputElement;
    const currentPasswordInput = document.getElementById(
      "current_password_input"
    ) as HTMLInputElement;
    const confirmPasswordInput = document.getElementById(
      "confirm_password_input"
    ) as HTMLInputElement;

    const toggleButton = document.getElementById("toggle_password");

    if (
      toggleButton &&
      newPasswordInput &&
      currentPasswordInput &&
      confirmPasswordInput
    ) {
      toggleButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission

        if (
          newPasswordInput.type === "password" &&
          currentPasswordInput.type === "password" &&
          confirmPasswordInput.type === "password"
        ) {
          newPasswordInput.type = "text";
          currentPasswordInput.type = "text";
          confirmPasswordInput.type = "text";
        } else {
          newPasswordInput.type = "password";
          currentPasswordInput.type = "password";
          confirmPasswordInput.type = "password";
        }
      });
    }
  });
</script>

<svelte:head>
  <title>Real Golf - Settings</title>
</svelte:head>

<h1>Settings</h1>

<main>
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

  <div id="account">
    <h2>Account</h2>

    <form action="?/name" method="POST" autocomplete="off" class="update-form">
      <div>
        <label for="name_input">Name</label>
        <input type="text" id="name_input" name="name" value={data.name} />
      </div>
      <button aria-label="update name">Update</button>
    </form>

    <form action="?/email" method="POST" autocomplete="off" class="update-form">
      <div>
        <label for="email_input">Email</label>
        <input type="email" id="email_input" name="email" value={data.email} />
      </div>
      <button aria-label="update email">Update</button>
    </form>

    <form
      action="?/password"
      method="POST"
      autocomplete="off"
      class="update-form"
    >
      <div>
        <label for="password_input">Password</label>
        <div>
          <label for="current_password_input">Current Password</label>
          <input
            type="password"
            id="current_password_input"
            name="current_password"
            value=""
          />
        </div>
        <div>
          <label for="new_password_input">New Password</label>
          <input
            type="password"
            id="new_password_input"
            name="new_password"
            value=""
          />
        </div>
        <div>
          <label for="confirm_password_input">Confirm Password</label>
          <input
            type="password"
            id="confirm_password_input"
            name="confirm_password"
            value=""
          />
        </div>
      </div>

      <div>
        <button id="toggle_password" type="button"
          ><Fa id="eye_icon" icon={faEye} /></button
        >
        <button aria-label="update password">Update</button>
      </div>
    </form>
  </div>

  <div class="measurement">
    <h2>Measurement Unit</h2>
    <p>
      Your current measurement unit is: {capitalizeFirstLetter(
        data.measurement_unit
      )}
    </p>
    <form action="?/measurement" method="POST" class="measurement-form">
      <label for="measurement-unit"
        >Select your prefered Measurement Unit:</label
      >
      <select
        id="measurement-unit"
        name="measurement-unit"
        bind:value={data.measurement_unit}
      >
        <option value="yards">Yards</option>
        <option value="meters">Meters</option>
      </select>
      <br />
      <button aria-label="update Measurement Unit">Update</button>
    </form>
  </div>

  <div id="preferences">
    <h2>Theme Preference</h2>
    <p>Your currently saved Theme is: {capitalizeFirstLetter(data.theme)}</p>
    <form action="?/theme" method="POST" class="theme-form">
      <label for="theme-settings">Select your prefered Theme Setting:</label>
      <select id="theme-settings" name="theme-settings" bind:value={data.theme}>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="system">System</option>
      </select>
      <br />
      <button aria-label="update Theme">Update</button>
    </form>
  </div>

  <div class="delete-account">
    <h2>Danger Zone</h2>
    <h3>Account deletion</h3>
    <h2 class="error">Your Account will be lost forever! (a long time!)</h2>
    <form action="?/delete_account" method="POST" class="delete_account_form">
      <div>
        <label for="password_input">Password</label>
        <input
          type="password"
          id="password_input"
          name="password_delete_account"
          value=""
        />
      </div>
      <button aria-label="delete Account">Delete Account</button>
    </form>
  </div>

  <div>
    <form action="/logout" method="POST" class="logout-form">
      <button>Logout</button>
    </form>
  </div>
</main>

<style lang="scss">
  main {
    max-width: 40rem;
  }
  .update-form {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: end;
    gap: 1rem;
  }
  .logout-form {
    margin-top: 1.5rem;
  }

  .error {
    font-size: var(--medium-font);
  }

  select {
    color: var(--font-color);
    border: none;
    font-family: inherit;
    font-size: inherit;
    border-radius: 0.25rem;
    background: none;
    margin-bottom: 1.5rem;
    text-align: center;

    padding: 0.4rem 0.8rem;
    background-color: var(--accent-color);
    cursor: pointer;

    &:focus {
      outline: 0.1rem solid var(--font-color);
      outline-offset: 0.2rem;
    }
  }
</style>
