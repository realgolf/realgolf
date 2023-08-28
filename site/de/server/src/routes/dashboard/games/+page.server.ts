import { User_Model } from "$lib/server/models";

export async function load(event): Promise<any> {
  const email = event.cookies.get("email");

  const user = await User_Model.findOne({ "user.email": email });

  if (!user) {
    return { status: 400, error: new Error("Nutzer konnte nicht gefunden werden") };
  } else {
    const games = user.games.map((game) => {
      const gameCopy = JSON.parse(JSON.stringify(game));
      delete gameCopy._id; // Remove the _id field
      return gameCopy;
    });
    return { games };
  }
}
