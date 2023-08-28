import { User_Model } from "./models";
import { email_regexp } from "./utils";
import bcrypt from "bcrypt";

export async function register_user(
  email: string,
  password: string,
  verified_password: string,
  name: string
): Promise<{ error: string }> {
  const email_error = await verify_email(email);

  if (email_error) {
    return { error: email_error };
  }

  const password_error = verify_password(password, verified_password);

  if (password_error) {
    return { error: password_error };
  }

  const name_error = verify_name(name);

  if (name_error) {
    return { error: name_error };
  }

  const saltRounds = 10;
  const hashed_password = await bcrypt.hash(password, saltRounds);

  const user = new User_Model({
    user: {
      email,
      password: hashed_password,
      name,
    },
  });

  try {
    user.save();
    return { error: "" };
  } catch (err) {
    return { error: err as string };
  }
}

export async function verify_email(email: string): Promise<string> {
  if (!email) {
    return "Email ist erforderlich.";
  }
  if (!email.match(email_regexp)) {
    return "Please enter a valid email.";
  }

  const previous_user = await User_Model.findOne({ "user.email": email });

  console.log("New user:", email, "Old user:", previous_user);

  if (previous_user) {
    return "Es gibt bereits ein Konto mit dieser E-Mail.";
  }

  return "";
}

export function verify_password(
  password: string,
  verified_password: string
): string {
  if (!password) {
    return "Paswort ist erforderlich.";
  }

  if (password !== verified_password) {
    return "Die Passwörter müssen identisch sein.";
  }

  if (password.length < 8) {
    return "Passwort muss mindestens 8 Zeichen lang sein.";
  }

  return "";
}

export function verify_name(name: string): string {
  if (!name) {
    return "Name ist erforderlich.";
  }

  if (name.length <= 1) {
    return "Der Name muss mindestens 2 Zeichen lang sein.";
  }

  return "";
}
