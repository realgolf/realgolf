import { User_Model } from "$lib/server/models";
import type { Actions } from "@sveltejs/kit";

export async function load(event): Promise<any> {
  const email = event.cookies.get("email");

  const user = await User_Model.findOne({ "user.email": email });

  if (!user) {
    return { status: 400, error: new Error("User could not be found") };
  } else {
    const games = user.games.map((game) => {
      const gameCopy = JSON.parse(JSON.stringify(game));
      delete gameCopy._id; // Remove the _id field
      return gameCopy;
    });
    return { games };
  }
}

export const actions: Actions = {
  delete_all: async (event) => {
    const email = event.cookies.get("email");

    try {
      const user = await User_Model.findOne({ "user.email": email });

      if (!user) {
        return {
          status: 404,
          error: "User not found",
        };
      }

      user.games = [];

      await user.save();

      return {
        status: 200,
        message: "Games deleted succesfully",
      };
    } catch (error) {
      console.error(error);
      return {
        status: 500,
        error: "Error saving game",
      };
    }
  },
  delete_game: async (event) => {
    const email = event.cookies.get("email");
    const user = await User_Model.findOne({ "user.email": email });
    const data = await event.request.formData();
    const id = data.get("id") as string;
    const games = user?.games;

    if (games) {
      const updatedGames = games.filter((game) => game.id !== id);
      user.games = updatedGames;
      await user.save();
    }
  },
  rename: async (event) => {
    const email = event.cookies.get("email");
    const user = await User_Model.findOne({ "user.email": email });
    const data = await event.request.formData();
    const id = data.get("id") as string;
    const name = (data.get("name") as string)?.trim();
    const games = user?.games;

    if (games) {
      const game = games.find((game) => game.id === id);

      if (game) {
        game.name = name;
        await user.save();
      }
    }
  },
};
