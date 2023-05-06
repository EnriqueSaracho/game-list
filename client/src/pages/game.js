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
      <Link to="/" className="btn btn-1">
        <BsFillArrowLeftCircleFill />
      </Link>

      <div className="game">
        <div className="game-header">
          <img src={game.imageUrl} alt={game.name} className="game-img" />
          <div className="game-header-info">
            <h2 className="game-title">{game.name}</h2>
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
                Math.round(
                  ((game.rating.mainCharacter +
                    game.rating.sideCharacters +
                    game.rating.mainStory +
                    game.rating.sideContent +
                    game.rating.cutscenes +
                    game.rating.lore +
                    game.rating.progression +
                    game.rating.gameFeel +
                    game.rating.variety +
                    game.rating.replayability +
                    game.rating.worldDesign +
                    game.rating.characterDesign +
                    game.rating.animations +
                    game.rating.realism +
                    game.rating.graphics +
                    game.rating.frames +
                    game.rating.stability +
                    game.rating.soundtrack) /
                    18) *
                    2
                ) / 2
              }
              starColor="#fff"
              emptyStarColor="#ffffff00"
              className="star-rating"
            />
            <p>{new Date(game.releaseDate).toLocaleDateString("en-GB")}</p>
            <p>Developer: {game.developer}</p>
            <p>Publisher: {game.publisher}</p>
            <p>Series: {game.franchise}</p>
            <p>Status: {game.status}</p>
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
      </div>
    </div>
  );
};
