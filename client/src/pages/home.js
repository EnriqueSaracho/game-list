import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";
import { BsPlusCircleFill } from "react-icons/bs";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { BiMessageSquareEdit } from "react-icons/bi";

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
                  renderStarIcon={() => (
                    <span>
                      <IoIosStar />
                    </span>
                  )}
                  renderStarIconHalf={() => (
                    <span>
                      <IoIosStarHalf style={{ color: "#fff" }} />
                    </span>
                  )}
                  value={
                    (game.rating.mainCharacter +
                      game.rating.sideCharacters +
                      game.rating.mainStory +
                      game.rating.sideContent +
                      game.rating.lore +
                      game.rating.progression +
                      game.rating.gameFeel +
                      game.rating.variety +
                      game.rating.replayability +
                      game.rating.worldDesign +
                      game.rating.characterDesign +
                      game.rating.animations +
                      game.rating.realism +
                      game.rating.textures +
                      game.rating.frames +
                      game.rating.soundtrack) /
                    16
                  }
                  starColor="#fff"
                  emptyStarColor="#ffffff00"
                  className="star-rating"
                />
              </h3>
              <Link>
                <BiMessageSquareEdit className="btn info-btn" />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
