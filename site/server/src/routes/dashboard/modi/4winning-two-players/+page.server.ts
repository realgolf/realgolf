import { User_Model } from "$lib/server/models";
import { v4 as uuidv4 } from "uuid";
import type { Actions } from "./$types";

export const actions: Actions = {
  default: async (event) => {
    const data = await event.request.formData();
    const raw_team_data = data.get("team_data") as string;

    let team_data;
    try {
      team_data = JSON.parse(raw_team_data);
    } catch (jsonParseError) {
      console.error("Error parsing team_data:", jsonParseError);
      return {
        status: 400,
        body: JSON.stringify({ error: "Invalid team_data JSON" }),
      };
    }

    const email = event.cookies.get("email");

    try {
      // Find the user
      const user = await User_Model.findOne({ "user.email": email });

      if (!user) {
        return {
          status: 404,
          body: JSON.stringify({ error: "User not found" }),
        };
      }

      // Generate a unique ID for the game
      const gameId = uuidv4();

      const today = new Date();
      const year = today.getFullYear();
      const month = (today.getMonth() + 1).toString().padStart(2, "0");
      const day = today.getDate().toString().padStart(2, "0");
      const formattedDate = `${year}-${month}-${day}`;

      // Add the game to the user
      if (user.games) {
        user.games.push({
          id: gameId,
          name: "4 Winning 2 Teams",
          teams: "4winning_2_teams",
          date: formattedDate,
          data: JSON.stringify(team_data),
        });
      }

      // Save the user with the new game
      await user.save();

      return {
        status: 200,
        body: JSON.stringify({ message: "Game saved successfully" }),
      };
    } catch (error) {
      console.error(error);
      return {
        status: 500,
        body: JSON.stringify({ error: "Error saving game" }),
      };
    }
  },
};
