import { User_Model } from "$lib/server/models";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
  const email = event.cookies.get("email");

  const user = await User_Model.findOne({ "user.email": email });

  if (!user) {
    return { status: 400, error: new Error("User could not be found") };
  } else {
    const measurement_unit = user.user?.measurement_units;
    return { measurement_unit };
  }
};
