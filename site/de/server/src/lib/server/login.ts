import { SECRET_JWT_KEY } from "$env/static/private";
import { User_Model } from "./models";
import { email_regexp } from "./utils";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function login_user(email: string, password: string) {
  const user = await get_user(email, password);

  if ("error" in user) {
    return { error: user.error };
  }

  const token = jwt.sign({ id: user.id }, SECRET_JWT_KEY);

  return { token, user };
}

async function get_user(
  email: string,
  password: string
): Promise<{ error: string } | user> {
  if (!email) {
    return { error: "E-Mail ist erforderlich." };
  }

  if (!email.match(email_regexp)) {
    return { error: "Bitte geben Sie eine gültige Email-Adresse ein." };
  }

  const user = await User_Model.findOne({ "user.email": email });

  if (!user) {
    return { error: "Email konnte nicht gefunden werden." };
  }

  if (!password) {
    return { error: "Passwort ist erforderlich." };
  }

  const password_is_correct = await bcrypt.compare(
    password,
    user.user.password
  );

  if (!password_is_correct) {
    return { error: "Passwort ist nicht korrekt." };
  }

  const id = user._id.toString();
  const name = user.user.name;

  return { id, email, name };
}
