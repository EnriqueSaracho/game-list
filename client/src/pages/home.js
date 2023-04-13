import axios from "axios";
import { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID.js";

export const Home = () => {
  // State Object: keeps track of all the games in database.
  const [games, setGames] = useState([]);
  // State Object: keeps track of saved games
  const [savedGames, setSavedGames] = useState([]);
  // Logged in userID
  const userID = useGetUserID();

  // On Render Function: get the games from database.
  useEffect(() => {
    // Function: gets games from database
    const fetchGame = async () => {
      try {
        const response = await axios.get("http://localhost:3001/games");
        setGames(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    // Function: gets saved games from database.
    const fetchSavedGame = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/games//savedGames/ids/${userID}`
        );
        setSavedGames(response.data.savedGames);
      } catch (err) {
        console.log(err);
      }
    };

    // Can't have an "on render" async function, so we call the async function inside the "on render" one.
    fetchGame();
    fetchSavedGame();
  }, []);

  // Function: save a game to the user.
  const saveGame = async (gameID) => {
    try {
      const response = await axios.put("http://localhost:3001/games", {
        gameID,
        userID,
      });
      setSavedGames(response.data.savedGames);
    } catch (err) {
      console.log(err);
    }
  };

  // Function: checks if game is saved
  const isGameSaved = (id) => savedGames.includes(id);

  return (
    <div>
      <h1>Games</h1>
      <ul>
        {games.map((game) => (
          <li key={game._id}>
            <img src={game.imageUrl} alt={game.name} />
            <h2>{game.name}</h2>
            <h4>Publisher: {game.publisher}</h4>
            <h4>
              Release Date: {new Date(game.releaseDate).toLocaleDateString()}
            </h4>
            <button
              onClick={() => saveGame(game._id)}
              disabled={isGameSaved(game._id)}
            >
              {isGameSaved(game._id) ? "Saved" : "Save"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
