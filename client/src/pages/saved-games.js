import axios from "axios";
import { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID.js";

export const SavedGames = () => {
  // State Object: keeps track of all the games in database.
  const [savedGames, setSavedGames] = useState([]);
  // Logged in userID
  const userID = useGetUserID();

  // On Render Function: get the games from database.
  useEffect(() => {
    // Function: gets saved games from database.
    const fetchSavedGame = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/games/savedGames/${userID}`
        );
        setSavedGames(response.data.savedGames);
      } catch (err) {
        console.log(err);
      }
    };

    // Can't have an "on render" async function, so we call the async function inside the "on render" one.
    fetchSavedGame();
  }, []);

  return (
    <div>
      <h1>Saved Games</h1>
      <ul>
        {savedGames.map((game) => (
          <li key={game._id}>
            <img src={game.imageUrl} alt={game.name} />
            <h2>{game.name}</h2>
            <h4>Publisher: {game.publisher}</h4>
            <h4>
              Release Date: {new Date(game.releaseDate).toLocaleDateString()}
            </h4>
          </li>
        ))}
      </ul>
    </div>
  );
};
