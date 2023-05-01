import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsFillXCircleFill } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const AddGame = () => {
  // State Object: keeps track of every input in the form.
  const [game, setGame] = useState({
    name: "",
    publisher: "",
    releaseDate: new Date(),
    imageUrl: "",
    status: "",
    genres: [],
  });

  // Hook: useNavigate hook to travel across pages
  const navigate = useNavigate();

  // Function: changes State Object on input change.
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (name === "genres") {
      if (checked) {
        setGame({ ...game, genres: [...game.genres, value] });
      } else {
        setGame({
          ...game,
          genres: game.genres.filter((genre) => genre !== value),
        });
      }
    } else {
      setGame({ ...game, [name]: type === "checkbox" ? checked : value });
    }

    // setGame({ ...game, [name]: value });
    console.log(game);
  };

  // Function: sends form data to API.
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/games", game);
      alert("Game added");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("An error occurred while adding the game");
    }
  };

  return (
    <div className="add-game">
      <Link to="/" className="btn">
        <BsFillXCircleFill />
      </Link>
      <h2 className="add-game-title">Add a new game</h2>

      {/* Add-Game form */}
      <form onSubmit={onSubmit} className="add-game-form">
        <label htmlFor="name" className="label-t1">
          Title:
        </label>
        <input
          autoComplete="off"
          className="input-t1"
          type="text"
          id="name"
          name="name"
          required
          onChange={handleChange}
        />

        <label htmlFor="franchise" className="label-t1">
          Franchise:
        </label>
        <input
          autoComplete="off"
          className="input-t1"
          type="text"
          id="franchise"
          name="franchise"
          onChange={handleChange}
        />

        <label htmlFor="publisher" className="label-t1">
          Publisher:
        </label>
        <input
          autoComplete="off"
          className="input-t1"
          type="text"
          id="publisher"
          name="publisher"
          onChange={handleChange}
        />

        <label htmlFor="release-date" className="label-t1">
          Release date:
        </label>
        <DatePicker
          className="input-t1"
          id="release-date"
          name="releaseDate"
          dateFormat="dd/MM/yyyy"
          selected={game.releaseDate}
          onChange={(date) => {
            setGame({ ...game, releaseDate: date });
            console.log(game);
          }} // For the DatePicker, the handleChange function doesn't work because it doesn't provide an event.
        />

        <label htmlFor="image-url" className="label-t1">
          Image URL:
        </label>
        <input
          autoComplete="off"
          className="input-t1"
          type="text"
          id="image-url"
          name="imageUrl"
          onChange={handleChange}
        />

        {/* Status */}
        <p className="label-t1">Status:</p>
        <div className="input-container">
          <div className="input-option-container">
            <input
              className="input-option input-radio"
              type="radio"
              id="not-played"
              name="status"
              value={"Not played"}
              onChange={handleChange}
            />
            <label htmlFor="not-played" className="label-option">
              Not played
            </label>
          </div>

          <div className="input-option-container">
            <input
              className="input-option input-radio"
              type="radio"
              id="in-progress"
              name="status"
              value={"In progress"}
              onChange={handleChange}
            />
            <label htmlFor="in-progress" className="label-option">
              In Progress
            </label>
          </div>

          <div className="input-option-container">
            <input
              className="input-option input-radio"
              type="radio"
              id="paused"
              name="status"
              value={"Paused"}
              onChange={handleChange}
            />
            <label htmlFor="paused" className="label-option">
              Paused
            </label>
          </div>

          <div className="input-option-container">
            <input
              className="input-option input-radio"
              type="radio"
              id="completed"
              name="status"
              value={"Completed"}
              onChange={handleChange}
            />
            <label htmlFor="completed" className="label-option">
              Completed
            </label>
          </div>

          <div className="input-option-container">
            <input
              className="input-option input-radio"
              type="radio"
              id="abandoned"
              name="status"
              value={"Abandoned"}
              onChange={handleChange}
            />
            <label htmlFor="abandoned" className="label-option">
              Abandoned
            </label>
          </div>
        </div>

        {/* Genres */}
        <p className="label-t1">Genres:</p>
        <div className="input-container">
          <div className="input-option-container">
            <input
              className="input-option"
              type="checkbox"
              id="action"
              name="genres"
              value={"Action"}
              onChange={handleChange}
            />
            <label htmlFor="action" className="label-option">
              Action
            </label>
          </div>

          <div className="input-option-container">
            <input
              className="input-option"
              type="checkbox"
              id="adventure"
              name="genres"
              value={"Adventure"}
              onChange={handleChange}
            />
            <label htmlFor="adventure" className="label-option">
              Adventure
            </label>
          </div>

          <div className="input-option-container">
            <input
              className="input-option"
              type="checkbox"
              id="role-playing"
              name="genres"
              value={"Role-Playing (RPG)"}
              onChange={handleChange}
            />
            <label htmlFor="role-playing" className="label-option">
              Role-playing (RPG)
            </label>
          </div>

          <div className="input-option-container">
            <input
              className="input-option"
              type="checkbox"
              id="strategy"
              name="genres"
              value={"Strategy"}
              onChange={handleChange}
            />
            <label htmlFor="strategy" className="label-option">
              Strategy
            </label>
          </div>

          <div className="input-option-container">
            <input
              className="input-option"
              type="checkbox"
              id="simulation"
              name="genres"
              value={"Simulation"}
              onChange={handleChange}
            />
            <label htmlFor="Simulation" className="label-option">
              Simulation
            </label>
          </div>

          <div className="input-option-container">
            <input
              className="input-option"
              type="checkbox"
              id="sports"
              name="genres"
              value={"Sports"}
              onChange={handleChange}
            />
            <label htmlFor="sports" className="label-option">
              Sports
            </label>
          </div>

          <div className="input-option-container">
            <input
              className="input-option"
              type="checkbox"
              id="racing"
              name="genres"
              value={"Racing"}
              onChange={handleChange}
            />
            <label htmlFor="racing" className="label-option">
              Racing
            </label>
          </div>

          <div className="input-option-container">
            <input
              className="input-option"
              type="checkbox"
              id="fighting"
              name="genres"
              value={"Fighting"}
              onChange={handleChange}
            />
            <label htmlFor="fighting" className="label-option">
              Fighting
            </label>
          </div>

          <div className="input-option-container">
            <input
              className="input-option"
              type="checkbox"
              id="platformer"
              name="genres"
              value={"Platformer"}
              onChange={handleChange}
            />
            <label htmlFor="platformer" className="label-option">
              Platformer
            </label>
          </div>

          <div className="input-option-container">
            <input
              className="input-option"
              type="checkbox"
              id="puzzle"
              name="genres"
              value={"Puzzle"}
              onChange={handleChange}
            />
            <label htmlFor="Puzzle" className="label-option">
              Puzzle
            </label>
          </div>

          <div className="input-option-container">
            <input
              className="input-option"
              type="checkbox"
              id="massively-multiplayer-online"
              name="genre"
              value={"Massively Multiplayer Online (MMO)"}
              onChange={handleChange}
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
              className="input-option"
              type="checkbox"
              id="horror"
              name="genre"
              value={"Genre"}
              onChange={handleChange}
            />
            <label htmlFor="horror" className="label-option">
              Horror
            </label>
          </div>

          <div className="input-option-container">
            <input
              className="input-option"
              type="checkbox"
              id="first-person-shooter"
              name="genre"
              value={"first-person-shooter"}
              onChange={handleChange}
            />
            <label htmlFor="first-person-shooter" className="label-option">
              First-Person Shooter (FPS)
            </label>
          </div>

          <div className="input-option-container">
            <input
              className="input-option"
              type="checkbox"
              id="survival"
              name="genre"
              value={"Survival"}
              onChange={handleChange}
            />
            <label htmlFor="survival" className="label-option">
              Survival
            </label>
          </div>
        </div>

        <br />
        <button type="submit">Add Game</button>
      </form>
    </div>
  );
};
