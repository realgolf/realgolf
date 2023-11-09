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
  password: string,
  verified_password: string
): Promise<{ error: string } | { password: string }> {
  const auth = authenticate(cookies);

  if (!auth) {
    return { error: "You are not authenticated" };
  }

  const { id } = auth;

  const password_error = await verify_password(password, verified_password);

  if (password_error) {
    return { error: password_error };
  }

  const user = await User_Model.findOne({ _id: id });

  if (!user) {
    return { error: "User could not be found" };
  }

  const saltRounds = 10;
  const hashed_password = await bcrypt.hash(password, saltRounds);

  user.user.password = hashed_password;

  try {
    await user.save();
    return { password };
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
