import { Link } from "react-router-dom";
import { BsFillXCircleFill } from "react-icons/bs";
import { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

export const AddGame = () => {
  const [game, setGame] = useState({
    name: "",
    franchise: "",
    publisher: "",
    releaseDate: new Date(),
    imageUrl: "",
    status: "",
    genres: [],
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setGame({ ...game, [name]: value });
    console.log(game); // {CONSOLE.LOG}
  };

  const handleOptionChange = (event) => {
    const { name, value, checked } = event.target;
    if (checked) {
      setGame({ ...game, [name]: [...game[name], value] });
    } else {
      setGame({
        ...game,
        [name]: [...game[name].filter((option) => option !== value)],
      });
    }
    console.log(game[name]); // {CONSOLE.LOG}
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
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Title:</label>
        <input type="text" id="name" name="name" onChange={handleChange} />

        <label htmlFor="franchise">Franchise:</label>
        <input
          type="text"
          id="franchise"
          name="franchise"
          onChange={handleChange}
        />

        <label htmlFor="publisher">Publisher:</label>
        <input
          type="text"
          id="publisher"
          name="publisher"
          onChange={handleChange}
        />

        <label htmlFor="release-date">Release date:</label>
        <DatePicker
          id="release-date"
          name="releaseDate"
          dateFormat="dd/MM/yyyy"
          selected={game.releaseDate}
          onChange={(date) => {
            setGame({ ...game, releaseDate: date });
          }}
        />

        <label htmlFor="image-url">Image URL:</label>
        <input
          type="text"
          id="image-url"
          name="imageUrl"
          onChange={handleChange}
        />

        {/* Status */}
        <p>Status:</p>
        <div>
          <div>
            <input
              type="radio"
              id="not-played"
              name="status"
              value={"Not played"}
              onChange={handleChange}
            />
            <label htmlFor="not-played">Not played</label>
          </div>

          <div>
            <input
              type="radio"
              id="in-progress"
              name="status"
              value={"In progress"}
              onChange={handleChange}
            />
            <label htmlFor="in-progress">In progress</label>
          </div>

          <div>
            <input
              type="radio"
              id="paused"
              name="status"
              value={"Paused"}
              onChange={handleChange}
            />
            <label htmlFor="paused">Paused</label>
          </div>

          <div>
            <input
              type="radio"
              id="completed"
              name="status"
              value={"Completed"}
              onChange={handleChange}
            />
            <label htmlFor="completed">Completed</label>
          </div>

          <div>
            <input
              type="radio"
              id="abandoned"
              name="status"
              value={"Abandoned"}
              onChange={handleChange}
            />
            <label htmlFor="Abandoned">Abandoned</label>
          </div>
        </div>

        {/* Genres */}
        <p>Genres:</p>
        <div>
          <div>
            <input
              type="checkbox"
              id="action"
              name="genres"
              value={"Action"}
              onChange={handleOptionChange}
            />
            <label htmlFor="action">Action</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="adventure"
              name="genres"
              value={"Adventure"}
              onChange={handleOptionChange}
            />
            <label htmlFor="adventure">Adventure</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="role-playing"
              name="genres"
              value={"Role-Playing (RPG)"}
              onChange={handleOptionChange}
            />
            <label htmlFor="role-playing">Role Playing (RPG)</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="strategy"
              name="genres"
              value={"Strategy"}
              onChange={handleOptionChange}
            />
            <label htmlFor="strategy">Strategy</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="simulation"
              name="genres"
              value={"Simulation"}
              onChange={handleOptionChange}
            />
            <label htmlFor="simulation">Simulation</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="sports"
              name="genres"
              value={"Sports"}
              onChange={handleOptionChange}
            />
            <label htmlFor="sports">Sports</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="racing"
              name="genres"
              value={"Racing"}
              onChange={handleOptionChange}
            />
            <label htmlFor="racing">Racing</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="fighting"
              name="genres"
              value={"Fighting"}
              onChange={handleOptionChange}
            />
            <label htmlFor="fighting">Fighting</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="platformer"
              name="genres"
              value={"Platformer"}
              onChange={handleOptionChange}
            />
            <label htmlFor="platformer">Platformer</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="puzzle"
              name="genres"
              value={"Puzzle"}
              onChange={handleOptionChange}
            />
            <label htmlFor="puzzle">Puzzle</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="massively-multiplayer-online"
              name="genres"
              value={"Massively Multiplayer Online (MMO)"}
              onChange={handleOptionChange}
            />
            <label htmlFor="massively-multiplayer-online">
              Massively Multiplayer Online (MMO)
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              id="horror"
              name="genres"
              value={"Horror"}
              onChange={handleOptionChange}
            />
            <label htmlFor="horror">Horror</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="first-person-shooter"
              name="genres"
              value={"First Person Shooter (FPS)"}
              onChange={handleOptionChange}
            />
            <label htmlFor="first-person-shooter">
              First Person Shooter (FPS)
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              id="survival"
              name="genres"
              value={"Survival"}
              onChange={handleOptionChange}
            />
            <label htmlFor="survival">Survival</label>
          </div>
        </div>

        <button type="submit">Add Game</button>
      </form>
    </div>
  );
};
