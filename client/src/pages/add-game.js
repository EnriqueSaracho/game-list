import { Link } from "react-router-dom";
import { useState } from "react";
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

export const AddGame = () => {
  const [game, setGame] = useState({
    name: "",
    franchise: "",
    publisher: "",
    releaseDate: new Date(),
    imageUrl: "",
    status: "",
    genres: [],
    platforms: [],
    rating: {
      mainCharacter: 0,
      sideCharacters: 0,
      mainStory: 0,
      sideContent: 0,
      lore: 0,
      progression: 0,
      gameFeel: 0,
      variety: 0,
      replayability: 0,
      worldDesign: 0,
      characterDesign: 0,
      animations: 0,
      realism: 0,
      textures: 0,
      frames: 0,
      soundtrack: 0,
    },
  });

  const navigate = useNavigate();

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
      await axios.post("http://localhost:3001/games", game);
      alert("Game added");
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="form-page">
      <Link to="/" className="btn btn-1">
        <BsFillXCircleFill />
      </Link>
      <h2 className="game-form-title">Add a new game</h2>

      {/* Add Game Form */}
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
            />

            <label htmlFor="franchise" className="label-text">
              Franchise:
            </label>
            <input
              type="text"
              id="franchise"
              name="franchise"
              onChange={handleChange}
              className="input-text"
              autoComplete="off"
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
            />

            <label htmlFor="release-date" className="label-text">
              Release date:
            </label>
            <DatePicker
              id="release-date"
              name="releaseDate"
              dateFormat="dd/MM/yyyy"
              selected={game.releaseDate}
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
              />
              <label htmlFor="adventure" className="label-option">
                Adventure
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
              />
              <label htmlFor="role-playing" className="label-option">
                Role Playing (RPG)
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
              />
              <label htmlFor="strategy" className="label-option">
                Strategy
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
              />
              <label htmlFor="sports" className="label-option">
                Sports
              </label>
            </div>

            <div className="option-container">
              <input
                type="checkbox"
                id="racing"
                name="genres"
                value={"Racing"}
                onChange={handleChange}
                className="input-option"
              />
              <label htmlFor="racing" className="label-option">
                Racing
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
              />
              <label htmlFor="fighting" className="label-option">
                Fighting
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
              />
              <label htmlFor="stealth" className="label-option">
                Stealth
              </label>
            </div>
          </div>

          <div>
            <div className="option-container">
              <input
                type="checkbox"
                id="platformer"
                name="genres"
                value={"Platformer"}
                onChange={handleChange}
                className="input-option"
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
              />
              <label htmlFor="puzzle" className="label-option">
                Puzzle
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
                id="horror"
                name="genres"
                value={"Horror"}
                onChange={handleChange}
                className="input-option"
              />
              <label htmlFor="horror" className="label-option">
                Horror
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
              />
              <label htmlFor="first-person-shooter" className="label-option">
                First Person Shooter (FPS)
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
              />
              <label htmlFor="survival" className="label-option">
                Survival
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
              />
              <label htmlFor="sandbox" className="label-option">
                Sandbox
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
              />
              <label htmlFor="hack-and-slash" className="label-option">
                Hack and Slash
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
              />
              <label htmlFor="mac-os" className="label-option">
                macOS
              </label>
            </div>
          </div>
        </fieldset>

        {/* Rating */}
        <fieldset>
          <legend>Rating:</legend>
          <div>
            <div className="rating-container">
              <label htmlFor="main-character" className="label-rating">
                Main Character(s):
              </label>
              <StarRatingComponent
                id="main-character"
                name="mainCharacter"
                starCount={5}
                renderStarIcon={() => (
                  <span>
                    <IoIosStar />
                  </span>
                )}
                value={game.rating.mainCharacter}
                onStarClick={(value) => {
                  setGame({
                    ...game,
                    rating: { ...game.rating, mainCharacter: value },
                  });
                }}
                starColor="#fff"
                emptyStarColor="#000"
                className="star-rating"
              />
            </div>

            <div className="rating-container">
              <label htmlFor="side-characters" className="label-rating">
                Side Characters:
              </label>
              <StarRatingComponent
                id="side-characters"
                name="sideCharacters"
                starCount={5}
                renderStarIcon={() => (
                  <span>
                    <IoIosStar />
                  </span>
                )}
                value={game.sideCharacters}
                onStarClick={(value) => {
                  setGame({
                    ...game,
                    rating: { ...game.rating, sideCharacters: value },
                  });
                }}
                starColor="#fff"
                emptyStarColor="#000"
                className="star-rating"
              />
            </div>

            <div className="rating-container">
              <label htmlFor="main-story" className="label-rating">
                Main Story:
              </label>
              <StarRatingComponent
                id="main-story"
                name="mainStory"
                starCount={5}
                renderStarIcon={() => (
                  <span>
                    <IoIosStar />
                  </span>
                )}
                value={game.mainStory}
                onStarClick={(value) => {
                  setGame({
                    ...game,
                    rating: { ...game.rating, mainStory: value },
                  });
                }}
                starColor="#fff"
                emptyStarColor="#000"
                className="star-rating"
              />
            </div>

            <div className="rating-container">
              <label htmlFor="side-content" className="label-rating">
                Side Content:
              </label>
              <StarRatingComponent
                id="side-content"
                name="sideContent"
                starCount={5}
                renderStarIcon={() => (
                  <span>
                    <IoIosStar />
                  </span>
                )}
                value={game.sideContent}
                onStarClick={(value) => {
                  setGame({
                    ...game,
                    rating: { ...game.rating, sideContent: value },
                  });
                }}
                starColor="#fff"
                emptyStarColor="#000"
                className="star-rating"
              />
            </div>

            <div className="rating-container">
              <label htmlFor="lore" className="label-rating">
                Lore:
              </label>
              <StarRatingComponent
                id="lore"
                name="lore"
                starCount={5}
                renderStarIcon={() => (
                  <span>
                    <IoIosStar />
                  </span>
                )}
                value={game.lore}
                onStarClick={(value) => {
                  setGame({
                    ...game,
                    rating: { ...game.rating, lore: value },
                  });
                }}
                starColor="#fff"
                emptyStarColor="#000"
                className="star-rating"
              />
            </div>

            <div className="rating-container">
              <label htmlFor="progression" className="label-rating">
                Progression:
              </label>
              <StarRatingComponent
                id="progression"
                name="progression"
                starCount={5}
                renderStarIcon={() => (
                  <span>
                    <IoIosStar />
                  </span>
                )}
                value={game.progression}
                onStarClick={(value) => {
                  setGame({
                    ...game,
                    rating: { ...game.rating, progression: value },
                  });
                }}
                starColor="#fff"
                emptyStarColor="#000"
                className="star-rating"
              />
            </div>

            <div className="rating-container">
              <label htmlFor="game-feel" className="label-rating">
                Game Feel:
              </label>
              <StarRatingComponent
                id="game-feel"
                name="gameFeel"
                starCount={5}
                renderStarIcon={() => (
                  <span>
                    <IoIosStar />
                  </span>
                )}
                value={game.gameFeel}
                onStarClick={(value) => {
                  setGame({
                    ...game,
                    rating: { ...game.rating, gameFeel: value },
                  });
                }}
                starColor="#fff"
                emptyStarColor="#000"
                className="star-rating"
              />
            </div>

            <div className="rating-container">
              <label htmlFor="variety" className="label-rating">
                Variety:
              </label>
              <StarRatingComponent
                id="variety"
                name="variety"
                starCount={5}
                renderStarIcon={() => (
                  <span>
                    <IoIosStar />
                  </span>
                )}
                value={game.variety}
                onStarClick={(value) => {
                  setGame({
                    ...game,
                    rating: { ...game.rating, variety: value },
                  });
                }}
                starColor="#fff"
                emptyStarColor="#000"
                className="star-rating"
              />
            </div>

            <div className="rating-container">
              <label htmlFor="replayability" className="label-rating">
                Replayability:
              </label>
              <StarRatingComponent
                id="replayability"
                name="replayability"
                starCount={5}
                renderStarIcon={() => (
                  <span>
                    <IoIosStar />
                  </span>
                )}
                value={game.replayability}
                onStarClick={(value) => {
                  setGame({
                    ...game,
                    rating: { ...game.rating, replayability: value },
                  });
                }}
                starColor="#fff"
                emptyStarColor="#000"
                className="star-rating"
              />
            </div>

            <div className="rating-container">
              <label htmlFor="world-design" className="label-rating">
                World Design:
              </label>
              <StarRatingComponent
                id="world-design"
                name="worldDesign"
                starCount={5}
                renderStarIcon={() => (
                  <span>
                    <IoIosStar />
                  </span>
                )}
                value={game.worldDesign}
                onStarClick={(value) => {
                  setGame({
                    ...game,
                    rating: { ...game.rating, worldDesign: value },
                  });
                }}
                starColor="#fff"
                emptyStarColor="#000"
                className="star-rating"
              />
            </div>

            <div className="rating-container">
              <label htmlFor="character-design" className="label-rating">
                Character Design:
              </label>
              <StarRatingComponent
                id="character-design"
                name="characterDesign"
                starCount={5}
                renderStarIcon={() => (
                  <span>
                    <IoIosStar />
                  </span>
                )}
                value={game.characterDesign}
                onStarClick={(value) => {
                  setGame({
                    ...game,
                    rating: { ...game.rating, characterDesign: value },
                  });
                }}
                starColor="#fff"
                emptyStarColor="#000"
                className="star-rating"
              />
            </div>

            <div className="rating-container">
              <label htmlFor="animations" className="label-rating">
                Animations:
              </label>
              <StarRatingComponent
                id="animations"
                name="animations"
                starCount={5}
                renderStarIcon={() => (
                  <span>
                    <IoIosStar />
                  </span>
                )}
                value={game.animations}
                onStarClick={(value) => {
                  setGame({
                    ...game,
                    rating: { ...game.rating, animations: value },
                  });
                }}
                starColor="#fff"
                emptyStarColor="#000"
                className="star-rating"
              />
            </div>

            <div className="rating-container">
              <label htmlFor="realism" className="label-rating">
                Realism:
              </label>
              <StarRatingComponent
                id="realism"
                name="realism"
                starCount={5}
                renderStarIcon={() => (
                  <span>
                    <IoIosStar />
                  </span>
                )}
                value={game.realism}
                onStarClick={(value) => {
                  setGame({
                    ...game,
                    rating: { ...game.rating, realism: value },
                  });
                }}
                starColor="#fff"
                emptyStarColor="#000"
                className="star-rating"
              />
            </div>

            <div className="rating-container">
              <label htmlFor="textures" className="label-rating">
                Textures:
              </label>
              <StarRatingComponent
                id="textures"
                name="textures"
                starCount={5}
                renderStarIcon={() => (
                  <span>
                    <IoIosStar />
                  </span>
                )}
                value={game.textures}
                onStarClick={(value) => {
                  setGame({
                    ...game,
                    rating: { ...game.rating, textures: value },
                  });
                }}
                starColor="#fff"
                emptyStarColor="#000"
                className="star-rating"
              />
            </div>

            <div className="rating-container">
              <label htmlFor="frames" className="label-rating">
                Frames:
              </label>
              <StarRatingComponent
                id="frames"
                name="frames"
                starCount={5}
                renderStarIcon={() => (
                  <span>
                    <IoIosStar />
                  </span>
                )}
                value={game.frames}
                onStarClick={(value) => {
                  setGame({
                    ...game,
                    rating: { ...game.rating, frames: value },
                  });
                }}
                starColor="#fff"
                emptyStarColor="#000"
                className="star-rating"
              />
            </div>

            <div className="rating-container">
              <label htmlFor="soundtrack" className="label-rating">
                Soundtrack:
              </label>
              <StarRatingComponent
                id="soundtrack"
                name="soundtrack"
                starCount={5}
                renderStarIcon={() => (
                  <span>
                    <IoIosStar />
                  </span>
                )}
                value={game.soundtrack}
                onStarClick={(value) => {
                  setGame({
                    ...game,
                    rating: { ...game.rating, soundtrack: value },
                  });
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
