import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsPlusCircleFill } from "react-icons/bs";

// Page: Home.
export const Home = () => {
  // State Object: keeps track of all the games in database.
  const [games, setGames] = useState([]);

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

    // Can't have an "on render" async function, so we call the async function inside the "on render" one.
    fetchGame();
  }, []);

  return (
    <div className="home">
      <Link to="/add-game" className="btn btn-1">
        <BsPlusCircleFill />
      </Link>
      <ul className="game-list">
        {games.map((game) => (
          <li key={game._id} className="thumbnail">
            <Link to={`/game/${game._id}`} className="thumbnail-link">
              <img
                src={game.imageUrl}
                alt={game.name}
                className="thumbnail-img"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
