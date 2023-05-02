import { Link } from "react-router-dom";
import { BsFillXCircleFill } from "react-icons/bs";
import { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";
import { IoIosStar } from "react-icons/io";

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
    rating: 0,
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
    <div className="add-game">
      <Link to="/" className="btn">
        <BsFillXCircleFill />
      </Link>
      <h2 className="add-game-title">Add a new game</h2>

      {/* Add Game Form */}
      <form onSubmit={onSubmit} className="add-game-form">
        <div>
          <label htmlFor="name" className="label-t1">
            Title:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            className="input-t1"
          />

          <label htmlFor="franchise" className="label-t1">
            Franchise:
          </label>
          <input
            type="text"
            id="franchise"
            name="franchise"
            onChange={handleChange}
            className="input-t1"
          />

          <label htmlFor="publisher" className="label-t1">
            Publisher:
          </label>
          <input
            type="text"
            id="publisher"
            name="publisher"
            onChange={handleChange}
            className="input-t1"
          />

          <label htmlFor="release-date" className="label-t1">
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
            className="input-t1"
          />

          <label htmlFor="image-url" className="label-t1">
            Image URL:
          </label>
          <input
            type="text"
            id="image-url"
            name="imageUrl"
            onChange={handleChange}
            className="input-t1"
          />
        </div>

        {/* Status */}
        <p className="options-title">Status:</p>
        <div className="input-container">
          <div className="input-option-container">
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

          <div className="input-option-container">
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

          <div className="input-option-container">
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

          <div className="input-option-container">
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

          <div className="input-option-container">
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

        {/* Genres */}
        <p className="options-title">Genres:</p>
        <div className="input-container">
          <div className="input-option-container">
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

          <div className="input-option-container">
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

          <div className="input-option-container">
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

          <div className="input-option-container">
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

          <div className="input-option-container">
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

          <div className="input-option-container">
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

          <div className="input-option-container">
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

          <div className="input-option-container">
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

          <div className="input-option-container">
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

          <div className="input-option-container">
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

          <div className="input-option-container">
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

          <div className="input-option-container">
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

          <div className="input-option-container">
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

          <div className="input-option-container">
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
        </div>

        {/* Platforms */}
        <p className="options-title">Platforms:</p>
        <div className="input-super-container">
          <div>
            <p className="label-t1">Nintendo</p>
            <div className="input-option-container">
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

            <div className="input-option-container">
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

            <div className="input-option-container">
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

            <div className="input-option-container">
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

            <div className="input-option-container">
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
            <p className="label-t1">PlayStation</p>
            <div className="input-option-container">
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

            <div className="input-option-container">
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

            <div className="input-option-container">
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

            <div className="input-option-container">
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

            <div className="input-option-container">
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
            <p className="label-t1">Microsoft</p>
            <div className="input-option-container">
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

            <div className="input-option-container">
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

            <div className="input-option-container">
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

            <div className="input-option-container">
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

            <div className="input-option-container">
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
        </div>

        <label className="label-t1">Rating:</label>
        <StarRatingComponent
          id="rating"
          name="rating"
          starCount={5}
          renderStarIcon={() => (
            <span>
              <IoIosStar />
            </span>
          )}
          value={game.rating}
          onStarClick={(value) => {
            setGame({ ...game, rating: value });
          }}
          starColor="#ffffff99"
          emptyStarColor="#000"
          className="star-rating"
        />

        <button type="submit">Add Game</button>
      </form>
    </div>
  );
};
