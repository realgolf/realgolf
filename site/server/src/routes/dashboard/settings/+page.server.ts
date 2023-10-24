import {
  change_email,
  change_name,
  change_password,
} from "$lib/server/account";
import { cookie_options } from "$lib/server/utils";
import { fail, type Actions } from "@sveltejs/kit";

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
    const password = data.get("password") as string;
    const verified_password = password;
    const update = await change_password(
      event.cookies,
      password,
      verified_password
    );

    if ("error" in update) {
      return fail(400, { error: update.error });
    }

    const message = `Your password got changed`;

    return { message };
  },
};
