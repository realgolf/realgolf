import { redirect } from "@sveltejs/kit";

export async function load(event) {
  const auth = event.cookies.get("auth-token");

  if (auth) {
    throw redirect(302, "/dashboard/modi");
  }
}