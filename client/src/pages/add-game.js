import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AddGame = () => {
  // State Object: keeps track of every input in the form.
  const [game, setGame] = useState({
    name: "",
    publisher: "",
    releaseDate: new Date().toISOString().substr(0, 10),
    imageUrl: "",
    status: "",
  });

  // Hook: useNavigate hook to travel across pages
  const navigate = useNavigate();

  // Function: changes State Object on input change.
  const handleChange = (event) => {
    const { name, value } = event.target;
    setGame({ ...game, [name]: value });
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
      <h2>Add Game</h2>

      {/* Add-Game form */}
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          onChange={handleChange}
        />

        <label htmlFor="franchise">Franchise: </label>
        <input
          type="text"
          id="franchise"
          name="franchise"
          onChange={handleChange}
        />

        <label htmlFor="publisher">Publisher: </label>
        <input
          type="text"
          id="publisher"
          name="publisher"
          onChange={handleChange}
        />

        <label htmlFor="release-date">Release date: </label>
        <input
          type="date"
          id="release-date"
          name="releaseDate"
          onChange={handleChange}
        />

        <label htmlFor="image-url">Image URL: </label>
        <input
          type="text"
          id="image-url"
          name="imageUrl"
          onChange={handleChange}
        />

        <p>Status</p>
        <input
          type="radio"
          id="not-played"
          name="status"
          value={"not-played"}
          onChange={handleChange}
        />
        <label htmlFor="not-played">Not played</label>

        <input
          type="radio"
          id="in-progress"
          name="status"
          value={"in-progress"}
          onChange={handleChange}
        />
        <label htmlFor="in-progress">In Progress</label>

        <input
          type="radio"
          id="paused"
          name="status"
          value={"paused"}
          onChange={handleChange}
        />
        <label htmlFor="paused">Paused</label>

        <input
          type="radio"
          id="completed"
          name="status"
          value={"completed"}
          onChange={handleChange}
        />
        <label htmlFor="completed">Completed</label>

        <input
          type="radio"
          id="abandoned"
          name="status"
          value={"abandoned"}
          onChange={handleChange}
        />
        <label htmlFor="abandoned">Abandoned</label>

        <br />
        <button type="submit">Add Game</button>
      </form>
    </div>
  );
};
