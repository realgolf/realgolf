import { connect_to_db } from "$lib/server/db";
import { User_Model } from "$lib/server/models";
import { error } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event) => {
  const connection = await connect_to_db();
  if (!connection) {
    throw error(500, "Database connection failed");
  }

  const auth = event.cookies.get("auth-token");

  const name = event.cookies.get("name") ?? "";
  const email = event.cookies.get("email") ?? "";

  const user = await User_Model.findOne({ "user.email": email });

  if (!user) {
    return {
      status: 404,
      error: "User not found",
    };
  }

  let theme = user.user?.theme;

  return { name, email, auth, theme };
};
