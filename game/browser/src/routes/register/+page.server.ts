import { login_user } from "$lib/server/login";
import { register_user } from "$lib/server/register";
import { cookie_options } from "$lib/server/utils";
import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
  default: async (event) => {
    const data = await event.request.formData();
    const email = (data.get("email") as string)?.toLowerCase()?.trim();
    const password = data.get("password") as string;
    const verified_password = data.get("password_verify") as string;
    const name = (data.get("name") as string)?.trim();

    const user = { email, name };

    const { error } = await register_user(
      email,
      password,
      verified_password,
      name
    );

    if (error) {
      return fail(400, { error, user });
    } else {
      const user_data = await login_user(email, password);

      if ("error" in user_data) {
        return fail(400, { email, error: user_data.error });
      } else {
        const { token, user } = user_data;

        event.cookies.set("auth-token", token, cookie_options);
        event.cookies.set("email", user.email, cookie_options);
        event.cookies.set("name", user.name, cookie_options);

        return { email, user };
      }
      //const message = "Registration successful! You can now login.";
      //return {user, message}
    }
  },
};
