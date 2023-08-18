import { User_Model } from "$lib/server/models";

export async function load(event): Promise<any> {
  const email = event.cookies.get("email");

  const user = await User_Model.findOne({ "user.email": email });
  console.log(user?.games);
}
