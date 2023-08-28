import type { Cookies } from "@sveltejs/kit";
import { authenticate } from "./authenticate";
import { verify_email, verify_name, verify_password } from "./register";
import { User_Model } from "./models";
import bcrypt from "bcrypt";

export async function change_name(
  cookies: Cookies,
  name: string
): Promise<{ error: string } | { name: string }> {
  const auth = authenticate(cookies);

  if (!auth) {
    return { error: "Sie sind nicht authentifiziert" };
  }

  const { id } = auth;

  const name_error = verify_name(name);

  if (name_error) {
    return { error: name_error };
  }

  const user = await User_Model.findOne({ _id: id });

  if (!user) {
    return { error: "Nutzer konnte nicht gefunden werden" };
  }

  if (user.user.name === name) {
    return { error: "Sie haben breits diesen Namen" };
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
    return { error: "Sie sind nicht authentifiziert" };
  }

  const { id } = auth;

  const email_error = await verify_email(email);

  if (email_error) {
    return { error: email_error };
  }

  const user = await User_Model.findOne({ _id: id });

  if (!user) {
    return { error: "Nutzer konnte nicht gefunden werden" };
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
    return { error: "Sie sind nicht authentifiziert" };
  }

  const { id } = auth;

  const password_error = await verify_password(password, verified_password);

  if (password_error) {
    return { error: password_error };
  }

  const user = await User_Model.findOne({ _id: id });

  if (!user) {
    return { error: "Nutzer konnte nicht gefunden werden" };
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
