import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsPlusCircleFill } from "react-icons/bs";
import { FaGamepad } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { BsSortDown } from "react-icons/bs";

// Page: Home.
export const Home = () => {
  // State Object: keeps track of all the games in database.
  const [games, setGames] = useState([]);

  // State Objects: keeps track of the navbar terms.
  const [searchTerm, setSearchTerm] = useState("");
  const [sortTerm, setSortTerm] = useState("rating");

  // Function: sorts games.
  const sortGames = () => {
    if (sortTerm === "rating") {
      return games.sort((prevGame, nextGame) => {
        return (
          (nextGame.rating.mainCharacter +
            nextGame.rating.sideCharacters +
            nextGame.rating.plot +
            nextGame.rating.emotionalImpact +
            nextGame.rating.cutscenes +
            nextGame.rating.pacing +
            nextGame.rating.lore +
            nextGame.rating.setting +
            nextGame.rating.progression +
            nextGame.rating.exploration +
            nextGame.rating.immersion +
            nextGame.rating.gameFeel +
            nextGame.rating.variety +
            nextGame.rating.replayability +
            nextGame.rating.stability +
            nextGame.rating.soundtrack +
            nextGame.rating.worldDesign +
            nextGame.rating.characterDesign +
            nextGame.rating.animations +
            nextGame.rating.graphics) /
            20 -
          (prevGame.rating.mainCharacter +
            prevGame.rating.sideCharacters +
            prevGame.rating.plot +
            prevGame.rating.emotionalImpact +
            prevGame.rating.cutscenes +
            prevGame.rating.pacing +
            prevGame.rating.lore +
            prevGame.rating.setting +
            prevGame.rating.progression +
            prevGame.rating.exploration +
            prevGame.rating.immersion +
            prevGame.rating.gameFeel +
            prevGame.rating.variety +
            prevGame.rating.replayability +
            prevGame.rating.stability +
            prevGame.rating.soundtrack +
            prevGame.rating.worldDesign +
            prevGame.rating.characterDesign +
            prevGame.rating.animations +
            prevGame.rating.graphics) /
            20
        );
      });
    } else if (sortTerm === "name") {
      return games.sort((prevGame, nextGame) => {
        return prevGame.name.localeCompare(nextGame.name);
      });
    } else if (sortTerm === "releaseDate") {
      return games.sort((prevGame, nextGame) => {
        return new Date(nextGame.releaseDate) - new Date(prevGame.releaseDate);
      });
    }
    return games;
  };

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

  sortGames();

  return (
    <div className="home">
      <div className="navbar">
        <Link to="/" className="navbar-title">
          <FaGamepad /> Game List
        </Link>
        <div className="navbar-container">
          <label htmlFor="searchbar">
            <BsSearch />
          </label>
          <input
            type="text"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            id="searchbar"
            className="navbar-input"
            placeholder="Search"
          />
        </div>
        <div className="navbar-container">
          <label htmlFor="sort">
            <BsSortDown />
          </label>
          <select
            id="sort"
            className="navbar-input"
            onChange={(event) => {
              setSortTerm(event.target.value);
              console.log(sortTerm);
            }}
          >
            <option value="name">Title</option>
            <option value="rating">Rating</option>
            <option value="releaseDate">Release date</option>
          </select>
        </div>
      </div>
      <div className="blur"></div>
      <Link to="/add-game" className="btn btn-1">
        <BsPlusCircleFill />
      </Link>

      <ul className="game-list">
        {games
          .filter((game) => {
            if (searchTerm === "") {
              return game;
            } else if (
              game.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return game;
            } else {
              return null;
            }
          })
          .map((game) => (
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
