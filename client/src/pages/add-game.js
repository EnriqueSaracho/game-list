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
    // releaseDate: new Date().toISOString().substr(0, 10),
    imageUrl: "",
    status: "",
  });

  // Hook: useNavigate hook to travel across pages
  const navigate = useNavigate();

  // Function: changes State Object on input change.
  const handleChange = (event) => {
    const { name, value } = event.target;
    setGame({ ...game, [name]: value });
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

        <p className="label-t1">Status:</p>
        <div className="input-option-container">
          <input
            className="input-option input-radio"
            type="radio"
            id="not-played"
            name="status"
            value={"not-played"}
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
            value={"in-progress"}
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
            value={"paused"}
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
            value={"completed"}
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
            value={"abandoned"}
            onChange={handleChange}
          />
          <label htmlFor="abandoned" className="label-option">
            Abandoned
          </label>
        </div>

        <br />
        <button type="submit">Add Game</button>
      </form>
    </div>
  );
};
