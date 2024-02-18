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
            {game.genres.map((genre) => (
              <li>{genre}</li>
            ))}
          </ul>
        </div>

        <div className="game-section">
          <h3 className="game-section-title">Platforms:</h3>
          <ul className="attribute-list">
            {game.platforms.map((platform) => (
              <li>{platform}</li>
            ))}
          </ul>
        </div>

        <div className="game-section">
          <h3 className="game-section-title">Modes:</h3>
          <ul className="attribute-list">
            {game.modes.map((mode) => (
              <li>{mode}</li>
            ))}
          </ul>
        </div>

        <div className="game-section game-section-info">
          <p>
            Release date:{" "}
            {new Date(game.releaseDate).toLocaleDateString("en-GB")}
          </p>
          <p>Series: {game.franchise}</p>
          <p>Developer(s): {game.developer}</p>
          <p>Publisher(s): {game.publisher}</p>
          <p>Director(s): {game.director}</p>
          <p>Producer(s): {game.producer}</p>
          <p>Designer(s): {game.designer}</p>
          <p>Programmer(s): {game.programmer}</p>
          <p>Artist(s): {game.artist}</p>
          <p>Writer: {game.writer}</p>
          <p>Composer: {game.composer}</p>
          <p>Engine: {game.engine}</p>
        </div>
      </div>
    </div>
  );
};
