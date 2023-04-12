import axios from "axios";
import { useEffect, useState } from "react";

export const Home = () => {
  // State Object: keeps track of all the games in database
  const [games, setGames] = useState([]);

  // On Render Function: get the games from database
  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await axios.get("http://localhost:3001/games");
        setGames(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchGame();
  }, []);
  return (
    <div>
      <h1>Games</h1>
      <ul>
        {games.map((game) => (
          <li key={game._id}>
            <img src={game.imageURL} alt={game.name} />
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
