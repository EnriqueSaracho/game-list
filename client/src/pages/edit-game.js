import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";
import { BsFillXCircleFill } from "react-icons/bs";
import { IoIosStar } from "react-icons/io";
import { SiNintendo } from "react-icons/si";
import { SiPlaystation } from "react-icons/si";
import { SiXbox } from "react-icons/si";
import { BsPlusCircleFill } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";
import { FaGamepad } from "react-icons/fa";

export const EditGame = () => {
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
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchGame();
  }, [id]);

  if (!game) {
    return <div>Loading...</div>;
  }

  const handleChange = (event) => {
    const { name, value, checked } = event.target;

    if (name === "genres" || name === "platforms") {
      if (checked) {
        setGame({ ...game, [name]: [...game[name], value] });
      } else {
        setGame({
          ...game,
          [name]: [...game[name].filter((option) => option !== value)],
        });
      }
    } else {
      setGame({ ...game, [name]: value });
    }

    console.log(game); // {CONSOLE.LOG}
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:3001/games/${id.id}`, game);
      alert("Game updated");
      navigate(`/game/${game._id}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="form-page">
      <div className="navbar">
        <Link to="/" className="navbar-title mobile">
          <FaGamepad />
        </Link>
        <Link to="/" className="navbar-title">
          <FaGamepad /> Game List
        </Link>
      </div>
      <div className="blur"></div>
      <Link to={`/game/${game._id}`} className="btn btn-1">
        <BsFillXCircleFill />
      </Link>
      <h2 className="game-form-title">Edit game</h2>

      {/* Edit Game Form */}
      <form onSubmit={onSubmit} className="game-form">
        <fieldset>
          <div>
            <label htmlFor="name" className="label-text">
              Title:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              className="input-text"
              autoComplete="off"
              value={game.name}
            />

            <label htmlFor="franchise" className="label-text">
              Series:
            </label>
            <input
              type="text"
              id="franchise"
              name="franchise"
              onChange={handleChange}
              className="input-text"
              autoComplete="off"
              value={game.franchise}
            />

            <label htmlFor="developer" className="label-text">
              Developer:
            </label>
            <input
              type="text"
              id="developer"
              name="developer"
              onChange={handleChange}
              className="input-text"
              autoComplete="off"
              value={game.developer}
            />

            <label htmlFor="publisher" className="label-text">
              Publisher:
            </label>
            <input
              type="text"
              id="publisher"
              name="publisher"
              onChange={handleChange}
              className="input-text"
              autoComplete="off"
              value={game.publisher}
            />

            <label htmlFor="release-date" className="label-text">
              Release date:
            </label>
            <DatePicker
              id="release-date"
              name="releaseDate"
              dateFormat="dd/MM/yyyy"
              selected={new Date(game.releaseDate)}
              onChange={(date) => {
                setGame({ ...game, releaseDate: date });
              }}
              className="input-text"
              autoComplete="off"
            />

            <label htmlFor="image-url" className="label-text">
              Image URL:
            </label>
            <input
              type="text"
              id="image-url"
              name="imageUrl"
              onChange={handleChange}
              className="input-text"
              autoComplete="off"
              value={game.imageUrl}
            />
          </div>
        </fieldset>

        {/* Status */}
        <fieldset>
          <legend>Status:</legend>
          <div>
            <div className="option-container">
              <input
                type="radio"
                id="not-played"
                name="status"
                value={"Not played"}
                onChange={handleChange}
                className="input-option input-radio"
                checked={game.status === "Not played"}
              />
              <label htmlFor="not-played" className="label-option">
                Not played
              </label>
            </div>

            <div className="option-container">
              <input
                type="radio"
                id="in-progress"
                name="status"
                value={"In progress"}
                onChange={handleChange}
                className="input-option input-radio"
                checked={game.status === "In progress"}
              />
              <label htmlFor="in-progress" className="label-option">
                In progress
              </label>
            </div>

            <div className="option-container">
              <input
                type="radio"
                id="paused"
                name="status"
                value={"Paused"}
                onChange={handleChange}
                className="input-option input-radio"
                checked={game.status === "Paused"}
              />
              <label htmlFor="paused" className="label-option">
                Paused
              </label>
            </div>

            <div className="option-container">
              <input
                type="radio"
                id="completed"
                name="status"
                value={"Completed"}
                onChange={handleChange}
                className="input-option input-radio"
                checked={game.status === "Completed"}
              />
              <label htmlFor="completed" className="label-option">
                Completed
              </label>
            </div>

            <div className="option-container">
              <input
                type="radio"
                id="abandoned"
                name="status"
                value={"Abandoned"}
                onChange={handleChange}
                className="input-option input-radio"
                checked={game.status === "Abandoned"}
              />
              <label htmlFor="abandoned" className="label-option">
                Abandoned
              </label>
            </div>
          </div>
        </fieldset>

        {/* Genres */}
        <fieldset>
          <legend>Genres:</legend>
          <div>
            <div className="option-container">
              <input
                type="checkbox"
                id="action"
                name="genres"
                value={"Action"}
                onChange={handleChange}
                className="input-option"
                checked={game.genres.includes("Action")}
              />
              <label htmlFor="action" className="label-option">
                Action
              </label>
            </div>

            <div className="option-container">
              <input
                type="checkbox"
                id="adventure"
                name="genres"
                value={"Adventure"}
                onChange={handleChange}
                className="input-option"
                checked={game.genres.includes("Adventure")}
              />
              <label htmlFor="adventure" className="label-option">
                Adventure
              </label>
            </div>

            <div className="option-container">
              <input
                type="checkbox"
                id="fighting"
                name="genres"
                value={"Fighting"}
                onChange={handleChange}
                className="input-option"
                checked={game.genres.includes("Fighting")}
              />
              <label htmlFor="fighting" className="label-option">
                Fighting
              </label>
            </div>

            <div className="option-container">
              <input
                type="checkbox"
                id="first-person-shooter"
                name="genres"
                value={"First Person Shooter (FPS)"}
                onChange={handleChange}
                className="input-option"
                checked={game.genres.includes("First Person Shooter (FPS)")}
              />
              <label htmlFor="first-person-shooter" className="label-option">
                First Person Shooter (FPS)
              </label>
            </div>

            <div className="option-container">
              <input
                type="checkbox"
                id="hack-and-slash"
                name="genres"
                value={"Hack and Slash"}
                onChange={handleChange}
                className="input-option"
                checked={game.genres.includes("Hack and Slash")}
              />
              <label htmlFor="hack-and-slash" className="label-option">
                Hack and Slash
              </label>
            </div>

            <div className="option-container">
              <input
                type="checkbox"
                id="horror"
                name="genres"
                value={"Horror"}
                onChange={handleChange}
                className="input-option"
                checked={game.genres.includes("Horror")}
              />
              <label htmlFor="horror" className="label-option">
                Horror
              </label>
            </div>

            <div className="option-container">
              <input
                type="checkbox"
                id="massively-multiplayer-online"
                name="genres"
                value={"Massively Multiplayer Online (MMO)"}
                onChange={handleChange}
                className="input-option"
                checked={game.genres.includes(
                  "Massively Multiplayer Online (MMO)"
                )}
              />
              <label
                htmlFor="massively-multiplayer-online"
                className="label-option"
              >
                Massively Multiplayer Online (MMO)
              </label>
            </div>

            <div className="option-container">
              <input
                type="checkbox"
                id="platformer"
                name="genres"
                value={"Platformer"}
                onChange={handleChange}
                className="input-option"
                checked={game.genres.includes("Platformer")}
              />
              <label htmlFor="platformer" className="label-option">
                Platformer
              </label>
            </div>

            <div className="option-container">
              <input
                type="checkbox"
                id="puzzle"
                name="genres"
                value={"Puzzle"}
                onChange={handleChange}
                className="input-option"
                checked={game.genres.includes("Puzzle")}
              />
              <label htmlFor="puzzle" className="label-option">
                Puzzle
              </label>
            </div>
          </div>

          <div>
            <div className="option-container">
              <input
                type="checkbox"
                id="racing"
                name="genres"
                value={"Racing"}
                onChange={handleChange}
                className="input-option"
                checked={game.genres.includes("Racing")}
              />
              <label htmlFor="racing" className="label-option">
                Racing
              </label>
            </div>

            <div className="option-container">
              <input
                type="checkbox"
                id="role-playing"
                name="genres"
                value={"Role-Playing (RPG)"}
                onChange={handleChange}
                className="input-option"
                checked={game.genres.includes("Role-Playing (RPG)")}
              />
              <label htmlFor="role-playing" className="label-option">
                Role Playing (RPG)
              </label>
            </div>

            <div className="option-container">
              <input
                type="checkbox"
                id="sandbox"
                name="genres"
                value={"Sandbox"}
                onChange={handleChange}
                className="input-option"
                checked={game.genres.includes("Sandbox")}
              />
              <label htmlFor="sandbox" className="label-option">
                Sandbox
              </label>
            </div>

            <div className="option-container">
              <input
                type="checkbox"
                id="simulation"
                name="genres"
                value={"Simulation"}
                onChange={handleChange}
                className="input-option"
                checked={game.genres.includes("Simulation")}
              />
              <label htmlFor="simulation" className="label-option">
                Simulation
              </label>
            </div>

            <div className="option-container">
              <input
                type="checkbox"
                id="sports"
                name="genres"
                value={"Sports"}
                onChange={handleChange}
                className="input-option"
                checked={game.genres.includes("Sports")}
              />
              <label htmlFor="sports" className="label-option">
                Sports
              </label>
            </div>

            <div className="option-container">
              <input
                type="checkbox"
                id="stealth"
                name="genres"
                value={"Stealth"}
                onChange={handleChange}
                className="input-option"
                checked={game.genres.includes("Stealth")}
              />
              <label htmlFor="stealth" className="label-option">
                Stealth
              </label>
            </div>

            <div className="option-container">
              <input
                type="checkbox"
                id="strategy"
                name="genres"
                value={"Strategy"}
                onChange={handleChange}
                className="input-option"
                checked={game.genres.includes("Strategy")}
              />
              <label htmlFor="strategy" className="label-option">
                Strategy
              </label>
            </div>

            <div className="option-container">
              <input
                type="checkbox"
                id="survival"
                name="genres"
                value={"Survival"}
                onChange={handleChange}
                className="input-option"
                checked={game.genres.includes("Survival")}
              />
              <label htmlFor="survival" className="label-option">
                Survival
              </label>
            </div>

            <div className="option-container">
              <input
                type="checkbox"
                id="third-person-shooter"
                name="genres"
                value={"Third-Person Shooter (TPS)"}
                onChange={handleChange}
                className="input-option"
                checked={game.genres.includes("Third-Person Shooter (TPS)")}
              />
              <label htmlFor="third-person-shooter" className="label-option">
                Third-Person Shooter (TPS)
              </label>
            </div>
          </div>
        </fieldset>

        {/* Platforms */}
        <fieldset>
          <legend>Platforms:</legend>
          <div>
            <SiNintendo className="platform-icon" />
            <div className="option-container">
              <input
                type="checkbox"
                id="nintendo-64"
                name="platforms"
                value={"Nintendo 64"}
                onChange={handleChange}
                className="input-option"
                checked={game.platforms.includes("Nintendo 64")}
              />
              <label htmlFor="nintendo-64" className="label-option">
                Nintendo 64
              </label>
            </div>

            <div className="option-container">
              <input
                type="checkbox"
                id="gamecube"
                name="platforms"
                value={"GameCube"}
                onChange={handleChange}
                className="input-option"
                checked={game.platforms.includes("GameCube")}
              />
              <label htmlFor="gamecube" className="label-option">
                GameCube
              </label>
            </div>

            <div className="option-container">
              <input
                type="checkbox"
                id="wii"
                name="platforms"
                value={"Wii"}
                onChange={handleChange}
                className="input-option"
                checked={game.platforms.includes("Wii")}
              />
              <label htmlFor="wii" className="label-option">
                Wii
              </label>
            </div>

            <div className="option-container">
              <input
                type="checkbox"
                id="wii-u"
                name="platforms"
                value={"Wii U"}
                onChange={handleChange}
                className="input-option"
                checked={game.platforms.includes("Wii U")}
              />
              <label htmlFor="wii-u" className="label-option">
                Wii U
              </label>
            </div>

            <div className="option-container">
              <input
                type="checkbox"
                id="switch"
                name="platforms"
                value={"Switch"}
                onChange={handleChange}
                className="input-option"
                checked={game.platforms.includes("Switch")}
              />
              <label htmlFor="switch" className="label-option">
                Switch
              </label>
            </div>
          </div>

          <div>
            <SiPlaystation className="platform-icon" />
            <div className="option-container">
              <input
                type="checkbox"
                id="playstation"
                name="platforms"
                value={"PlayStation"}
                onChange={handleChange}
                className="input-option"
                checked={game.platforms.includes("PlayStation")}
              />
              <label htmlFor="playstation" className="label-option">
                PlayStation
              </label>
            </div>

            <div className="option-container">
              <input
                type="checkbox"
                id="playstation-2"
                name="platforms"
                value={"PlayStation 2"}
                onChange={handleChange}
                className="input-option"
                checked={game.platforms.includes("PlayStation 2")}
              />
              <label htmlFor="playstation-2" className="label-option">
                PlayStation 2
              </label>
            </div>

            <div className="option-container">
              <input
                type="checkbox"
                id="playstation-3"
                name="platforms"
                value={"PlayStation 3"}
                onChange={handleChange}
                className="input-option"
                checked={game.platforms.includes("PlayStation 3")}
              />
              <label htmlFor="playstation-3" className="label-option">
                PlayStation 3
              </label>
            </div>

            <div className="option-container">
              <input
                type="checkbox"
                id="playstation-4"
                name="platforms"
                value={"PlayStation 4"}
                onChange={handleChange}
                className="input-option"
                checked={game.platforms.includes("PlayStation 4")}
              />
              <label htmlFor="playstation-4" className="label-option">
                PlayStation 4
              </label>
            </div>

            <div className="option-container">
              <input
                type="checkbox"
                id="playstation-5"
                name="platforms"
                value={"PlayStation 5"}
                onChange={handleChange}
                className="input-option"
                checked={game.platforms.includes("PlayStation 5")}
              />
              <label htmlFor="playstation-5" className="label-option">
                PlayStation 5
              </label>
            </div>
          </div>

          <div>
            <SiXbox className="platform-icon" />
            <div className="option-container">
              <input
                type="checkbox"
                id="windows"
                name="platforms"
                value={"Windows"}
                onChange={handleChange}
                className="input-option"
                checked={game.platforms.includes("Windows")}
              />
              <label htmlFor="windows" className="label-option">
                Windows
              </label>
            </div>

            <div className="option-container">
              <input
                type="checkbox"
                id="xbox"
                name="platforms"
                value={"Xbox"}
                onChange={handleChange}
                className="input-option"
                checked={game.platforms.includes("Xbox")}
              />
              <label htmlFor="xbox" className="label-option">
                Xbox
              </label>
            </div>

            <div className="option-container">
              <input
                type="checkbox"
                id="xbox-360"
                name="platforms"
                value={"Xbox 360"}
                onChange={handleChange}
                className="input-option"
                checked={game.platforms.includes("Xbox 360")}
              />
              <label htmlFor="xbox-360" className="label-option">
                Xbox 360
              </label>
            </div>

            <div className="option-container">
              <input
                type="checkbox"
                id="xbox-one"
                name="platforms"
                value={"Xbox One"}
                onChange={handleChange}
                className="input-option"
                checked={game.platforms.includes("Xbox One")}
              />
              <label htmlFor="xbox-one" className="label-option">
                Xbox One
              </label>
            </div>

            <div className="option-container">
              <input
                type="checkbox"
                id="xbox-series-x-s"
                name="platforms"
                value={"Xbox Series X/S"}
                onChange={handleChange}
                className="input-option"
                checked={game.platforms.includes("Xbox Series X/S")}
              />
              <label htmlFor="xbox-series-x-s" className="label-option">
                Xbox Series X/S
              </label>
            </div>
          </div>

          <div>
            <AiFillApple className="platform-icon" />
            <div className="option-container">
              <input
                type="checkbox"
                id="mac-os"
                name="platforms"
                value={"macOS"}
                onChange={handleChange}
                className="input-option"
                checked={game.platforms.includes("macOS")}
              />
              <label htmlFor="mac-os" className="label-option">
                macOS
              </label>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>Rating:</legend>
          <div>
            <div className="rating-container">
              <StarRatingComponent
                id="rating"
                name="rating"
                starCount={10}
                renderStarIcon={() => (
                  <span>
                    <IoIosStar />
                  </span>
                )}
                value={game.rating}
                onStarClick={(value) => {
                  setGame({ ...game, rating: value });
                  console.log("Rating updated");
                }}
                starColor="#fff"
                emptyStarColor="#000"
                className="star-rating"
              />
            </div>
          </div>
        </fieldset>

        <button type="submit" className="btn">
          <BsPlusCircleFill />
        </button>
      </form>
    </div>
  );
};
