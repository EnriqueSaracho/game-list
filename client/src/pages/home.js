import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import { BsPlusCircleFill } from "react-icons/bs";
import { FaGamepad } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { BsSortDown } from "react-icons/bs";

// Page: Home.
export const Home = () => {
  // State Object: keeps track of all the games in database.
  const [games, setGames] = useState([]);

  // State Object: cookies.
  const [cookies, setCookies] = useCookies(["sortTerm"]);

  // State Objects: keeps track of the navbar terms.
  const [searchTerm, setSearchTerm] = useState("");
  const initialSortTerm = cookies.sortTerm || "rating";
  const [sortTerm, setSortTerm] = useState(initialSortTerm);

  // Functions: sorts games.
  const handleSortTermChange = (event) => {
    const newSortTerm = event.target.value;
    setSortTerm(newSortTerm);
    setCookies("sortTerm", newSortTerm, { path: "/" });
  };
  const sortGames = () => {
    const sortedGames = games;
    if (sortTerm === "rating") {
      return sortedGames.sort((prevGame, nextGame) => {
        const prevRating = prevGame.rating?.total ?? -Infinity;
        const nextRating = nextGame.rating?.total ?? -Infinity;
        return nextRating - prevRating;
      });
    } else if (sortTerm === "name") {
      return sortedGames.sort((prevGame, nextGame) => {
        return prevGame.name.localeCompare(nextGame.name);
      });
    } else if (sortTerm === "releaseDate") {
      return sortedGames.sort((prevGame, nextGame) => {
        return new Date(nextGame.releaseDate) - new Date(prevGame.releaseDate);
      });
    }
    return games;
  };

  sortGames();

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
      <div className="navbar">
        <Link to="/" className="navbar-title mobile">
          <FaGamepad />
        </Link>
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
            onChange={handleSortTermChange}
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
