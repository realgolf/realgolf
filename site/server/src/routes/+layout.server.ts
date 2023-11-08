import { connect_to_db } from "$lib/server/db";
import { error } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const prerender = true;

export const load: LayoutServerLoad = async (event) => {
  const connection = await connect_to_db();
  if (!connection) {
    throw error(500, "Database connection failed");
  }

  const auth = event.cookies.get("auth-token");

  const name = event.cookies.get("name") ?? "";
  const email = event.cookies.get("email") ?? "";

  return { name, email, auth };
};
