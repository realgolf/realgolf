import {
  change_email,
  change_handicap,
  change_measurement,
  change_name,
  change_password,
  change_theme,
  delete_account,
} from "$lib/server/account";
import { User_Model } from "$lib/server/models";
import { cookie_options } from "$lib/server/utils";
import { fail, redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";

export const load: PageServerLoad = async (event) => {
  const email = event.cookies.get("email");

  const user = await User_Model.findOne({ "user.email": email });

  let measurement_unit = user?.user?.measurement_units as string;
  let theme = user?.user?.theme as string;
  let handicap = user?.user?.handicap as number;

  return { measurement_unit, theme, handicap };
};

export const actions: Actions = {
  name: async (event) => {
    const data = await event.request.formData();
    const name = (data.get("name") as string)?.trim();
    const update = await change_name(event.cookies, name);

    if ("error" in update) {
      return fail(400, { error: update.error });
    }

    event.cookies.set("name", name, cookie_options);

    const message = `Your new name is ${name}`;

    return { name, message };
  },
  email: async (event) => {
    const data = await event.request.formData();
    const email = (data.get("email") as string)?.toLowerCase()?.trim();
    const update = await change_email(event.cookies, email);

    if ("error" in update) {
      return fail(400, { error: update.error });
    }

    event.cookies.set("email", email, cookie_options);

    const message = `Your new email is ${email}`;

    return { email, message };
  },
  password: async (event) => {
    const data = await event.request.formData();
    const current_password = data.get("current_password") as string;
    const new_password = data.get("new_password") as string;
    const verified_password = data.get("confirm_password") as string;
    const update = await change_password(
      event.cookies,
      current_password,
      new_password,
      verified_password
    );

    if ("error" in update) {
      return fail(400, { error: update.error });
    }

    const message = `Your password got changed`;

    return { message };
  },
  measurement: async (event) => {
    const data = await event.request.formData();
    const measurement_unit = data.get("measurement-unit") as string;

    const update = await change_measurement(event.cookies, measurement_unit);

    if ("error" in update) {
      return fail(400, { error: update.error });
    }

    const message = `Your measurement unit got changed`;

    return { message, measurement_unit };
  },
  theme: async (event) => {
    const data = await event.request.formData();
    const theme_settings = data.get("theme-settings") as string;

    const update = await change_theme(event.cookies, theme_settings);

    if ("error" in update) {
      return fail(400, { error: update.error });
    }

    const message = `Your theme settings got changed`;

    return { message, theme_settings };
  },
  delete_account: async (event) => {
    const data = await event.request.formData();
    const password = data.get("password_delete_account") as string;

    const update = await delete_account(event.cookies, password);

    if ("error" in update) {
      return fail(400, { error: update.error });
    }

    if (update.account_deleted) {
      throw redirect(301, "/logout");
    }

    const message = update.message;

    return { message };
  },
  handicap: async (event) => {
    const data = await event.request.formData();
    const handicap = data.get("handicap") as unknown as number;

    const update = await change_handicap(event.cookies, handicap);

    if ("error" in update) {
      return fail(400, { error: update.error });
    }

    const message = `Your Handicap settings got changed`;

    return { message, handicap };
  },
};
