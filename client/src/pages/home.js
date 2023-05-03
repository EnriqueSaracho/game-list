import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsPlusCircleFill } from "react-icons/bs";
import StarRatingComponent from "react-star-rating-component";

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
          <li key={game._id} className="game">
            <img src={game.imageUrl} alt={game.name} className="game-img" />
            <div className="game-info">
              <h2 className="game-title">{game.name}</h2>
              <p>
                Release Date:{" "}
                {new Date(game.releaseDate).toLocaleDateString("en-GB")}
              </p>
              <p>Publisher: {game.publisher}</p>
              <p>Franchise: {game.franchise}</p>
              <p>Status: {game.status}</p>
              <p>Genres: {game.genres}</p>
              <p>Platforms: {game.platforms}</p>
              <h3>
                Rating:
                <StarRatingComponent
                  name="rating"
                  editing={false}
                  starCount={5}
                  value={game.rating}
                />
              </h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
