import type { Cookies } from "@sveltejs/kit";
import bcrypt from "bcrypt";
import { authenticate } from "./authenticate";
import { User_Model } from "./models";
import { verify_email, verify_name, verify_password } from "./register";

export async function change_name(
  cookies: Cookies,
  name: string
): Promise<{ error: string } | { name: string }> {
  const auth = authenticate(cookies);

  if (!auth) {
    return { error: "You are not authenticated" };
  }

  const { id } = auth;

  const name_error = verify_name(name);

  if (name_error) {
    return { error: name_error };
  }

  const user = await User_Model.findOne({ _id: id });

  if (!user) {
    return { error: "User could not found" };
  }

  if (user.user.name === name) {
    return { error: "You already have this name." };
  }

  user.user.name = name;

  try {
    await user.save();
    return { name };
  } catch (err) {
    return { error: err as string };
  }
}

export async function change_email(
  cookies: Cookies,
  email: string
): Promise<{ error: string } | { email: string }> {
  const auth = authenticate(cookies);

  if (!auth) {
    return { error: "You are not authenticated" };
  }

  const { id } = auth;

  const email_error = await verify_email(email);

  if (email_error) {
    return { error: email_error };
  }

  const user = await User_Model.findOne({ _id: id });

  if (!user) {
    return { error: "User could not found" };
  }

  user.user.email = email;

  try {
    await user.save();
    return { email };
  } catch (err) {
    return { error: err as string };
  }
}

export async function change_password(
  cookies: Cookies,
  current_password: string,
  new_password: string,
  verified_password: string
): Promise<{ error: string } | { new_password: string }> {
  const auth = authenticate(cookies);

  if (!auth) {
    return { error: "You are not authenticated" };
  }

  const { id } = auth;

  const user = await User_Model.findOne({ _id: id });

  const valid_current_password = (await bcrypt.compare(
    current_password,
    user.user.password
  )) as unknown as boolean;

  if (!valid_current_password) {
    return { error: "Invalid current password" };
  } else if (new_password == current_password) {
    return { error: "New password cannot be the same as the old password" };
  } else if (new_password == verified_password) {
    const password_error = verify_password(new_password, verified_password);

    if (password_error) {
      return { error: password_error };
    }

    if (!user) {
      return { error: "User could not be found" };
    }

    const saltRounds = 10;
    const hashed_password = await bcrypt.hash(new_password, saltRounds);

    user.user.password = hashed_password;
  } else {
    return { error: "Passwords do not match" };
  }

  try {
    await user.save();
    return { new_password };
  } catch (err) {
    return { error: err as string };
  }
}

export async function change_measurement(
  cookies: Cookies,
  measurement_unit: string
) {
  const auth = authenticate(cookies);

  if (!auth) {
    return { error: "You are not authenticated" };
  }

  const { id } = auth;

  const user = await User_Model.findOne({ _id: id });

  if (!user) {
    return { error: "User could not be found" };
  }

  user.user.measurement_units = measurement_unit;

  try {
    await user.save();
    return { measurement_unit };
  } catch (err) {
    return { error: err as string };
  }
}

export async function change_theme(cookies: Cookies, theme: string) {
  const auth = authenticate(cookies);

  if (!auth) {
    return { error: "You are not authenticated" };
  }

  const { id } = auth;

  const user = await User_Model.findOne({ _id: id });

  if (!user) {
    return { error: "User could not be found" };
  }

  user.user.theme = theme;

  try {
    await user.save();
    return { theme };
  } catch (err) {
    return { error: err as string };
  }
}

export async function delete_account(cookies: Cookies, password: string) {
  const auth = authenticate(cookies);
  let verified_password = password;

  if (!auth) {
    return { error: "You are not authenticated" };
  }

  const { id } = auth;

  const user = await User_Model.findOne({ _id: id });

  if (!user) {
    return { error: "User could not be found" };
  }

  const password_error = verify_password(password, verified_password);

  if (password_error) {
    console.log(password_error);
    return { error: password_error };
  }

  const password_is_correct = await bcrypt.compare(
    password,
    user.user?.password as string
  );

  if (password_is_correct) {
    try {
      await User_Model.deleteOne({ _id: id });
      return { message: "The user got deleted", account_deleted: true };
    } catch (err) {
      return { error: err as string, account_deleted: false };
    }
  } else {
    return { error: "The passwords did not match", account_deleted: false };
  }
}

export async function change_handicap(cookies: Cookies, handicap: number) {
  const auth = authenticate(cookies);

  if (!auth) {
    return { error: "You are not authenticated" };
  }

  const { id } = auth;

  const user = await User_Model.findOne({ _id: id });

  if (!user) {
    return { error: "User could not be found" };
  }

  if (handicap < 0) {
    return { error: "Handicap must be greater than zero" };
  }

  user.user.handicap = handicap;

  try {
    await user.save();
    return { handicap };
  } catch (err) {
    return { error: err as string };
  }
}
