import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import StarRatingComponent from "react-star-rating-component";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { BiMessageSquareEdit } from "react-icons/bi";
import { BiMessageSquareX } from "react-icons/bi";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { FiPauseCircle } from "react-icons/fi";
import { BiCheckCircle } from "react-icons/bi";
import { HiOutlineBan } from "react-icons/hi";
import { FaGamepad } from "react-icons/fa";

export const Game = () => {
  const id = useParams();
  const [game, setGame] = useState(null);
  const navigate = useNavigate();

  /**
   * Single digit: PC
   *
   * Two digit: Portable
   *  10 - first gen
   *  20 - second gen
   *  30 - third gen
   *  40 - fourth gen
   *
   * Three digit: Console
   *  100 - first gen
   *  200 - second gen
   *  300 - third gen
   *  400 - fourth gen
   *  500 - fifth gen
   */
  const platformPriority = {
    "Nintendo 64": 103,
    "Game Boy Color": 13,
    "Game Boy Advance": 23,
    GameCube: 203,
    "Nintendo DS": 33,
    "Nintendo 3DS": 43,
    Wii: 303,
    "Wii U": 403,
    "Nintendo Switch": 503,
    PlayStation: 102,
    "PlayStation 2": 202,
    "PlayStation Portable": 32,
    "PlayStation 3": 302,
    "PlayStation Vita": 42,
    "PlayStation 4": 402,
    "PlayStation 5": 502,
    Xbox: 203,
    "Xbox 360": 303,
    "Xbox One": 403,
    "Xbox Series X/S": 503,
    "Microsoft Windows": 9,
    macOS: 8,
    Linux: 7,
    "Google Stadia": 6,
    "Amazon Luna": 5,
  };

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/games/${id.id}`
        );
        setGame(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchGame();
  }, [id]);

  if (!game) {
    return <div>Loading...</div>;
  }

  // Function: deletes a game from the database.
  const deleteGame = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this game?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3001/games/${id}`);
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="game-page">
      <div className="navbar">
        <Link to="/" className="navbar-title mobile">
          <FaGamepad />
        </Link>
        <Link to="/" className="navbar-title">
          <FaGamepad /> Game List
        </Link>
      </div>
      <div className="blur"></div>
      <Link to="/" className="btn btn-1">
        <BsFillArrowLeftCircleFill />
      </Link>

      <div className="game">
        <div className="game-header">
          <img src={game.imageUrl} alt={game.name} className="game-img" />
          <div className="game-header-info">
            <h2 className="game-title">{game.name}</h2>
            {game.rating ? (
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
                value={game.rating / 2}
                starColor="#fff"
                emptyStarColor="#ffffff00"
                className="star-rating"
              />
            ) : null}
            <p>
              {game.status}
              {game.status === "Not played" ? (
                <RiCheckboxBlankCircleLine className="status-icon" />
              ) : null}
              {game.status === "In progress" ? (
                <HiOutlineDotsCircleHorizontal className="status-icon" />
              ) : null}
              {game.status === "Paused" ? (
                <FiPauseCircle className="status-icon" />
              ) : null}
              {game.status === "Completed" ? (
                <BiCheckCircle className="status-icon" />
              ) : null}
              {game.status === "Abandoned" ? (
                <HiOutlineBan className="status-icon" />
              ) : null}
            </p>
            <p>{game.developer}</p>
            <p>{new Date(game.releaseDate).getFullYear()}</p>
          </div>
          <div className="game-btn-container">
            <Link to={`/edit-game/${game._id}`} className="btn game-btn">
              <BiMessageSquareEdit />
            </Link>
            <button onClick={() => deleteGame(game._id)}>
              <BiMessageSquareX className="btn game-btn" />
            </button>
          </div>
        </div>

        <div className="game-section">
          <h3 className="game-section-title">Genres:</h3>
          <ul className="attribute-list">
            {game.genres.sort().map((genre) => (
              <li>{genre}</li>
            ))}
          </ul>
        </div>

        <div className="game-section">
          <h3 className="game-section-title">Platforms:</h3>
          <ul className="attribute-list">
            {game.platforms
              .sort((platform1, platform2) => {
                const priority1 = platformPriority[platform1];
                const priority2 = platformPriority[platform2];
                return priority1 - priority2;
              })
              .reverse()
              .map((platform) => (
                <li>{platform}</li>
              ))}
          </ul>
        </div>

        <div className="game-section">
          <h3 className="game-section-title">Modes:</h3>
          <ul className="attribute-list">
            {game.modes
              .sort()
              .reverse()
              .map((mode) => (
                <li>{mode}</li>
              ))}
          </ul>
        </div>

        <div className="game-section game-section-info">
          {game.releaseDate && (
            <p>
              <b>Release date:</b>{" "}
              {new Date(game.releaseDate).toLocaleDateString("en-GB")}
            </p>
          )}
          {game.franchise && (
            <p>
              <b>Series:</b> {game.franchise}
            </p>
          )}
          {game.developer && (
            <p>
              <b>Developer(s):</b> {game.developer}
            </p>
          )}
          {game.publisher && (
            <p>
              <b>Publisher(s):</b> {game.publisher}
            </p>
          )}
          {game.director && (
            <p>
              <b>Director(s):</b> {game.director}
            </p>
          )}
          {game.producer && (
            <p>
              <b>Producer(s):</b> {game.producer}
            </p>
          )}
          {game.designer && (
            <p>
              <b>Designer(s):</b> {game.designer}
            </p>
          )}
          {game.programmer && (
            <p>
              <b>Programmer(s):</b> {game.programmer}
            </p>
          )}
          {game.artist && (
            <p>
              <b>Artist(s):</b> {game.artist}
            </p>
          )}
          {game.writer && (
            <p>
              <b>Writer:</b> {game.writer}
            </p>
          )}
          {game.composer && (
            <p>
              <b>Composer:</b> {game.composer}
            </p>
          )}
          {game.engine && (
            <p>
              <b>Engine:</b> {game.engine}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
