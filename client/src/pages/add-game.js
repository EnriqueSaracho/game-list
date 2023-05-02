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
    platforms: [],
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
        <div>
          <p>Status:</p>
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
        <div>
          <p>Genres:</p>
          <div>
            <input
              type="checkbox"
              id="action"
              name="genres"
              value={"Action"}
              onChange={handleChange}
            />
            <label htmlFor="action">Action</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="adventure"
              name="genres"
              value={"Adventure"}
              onChange={handleChange}
            />
            <label htmlFor="adventure">Adventure</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="role-playing"
              name="genres"
              value={"Role-Playing (RPG)"}
              onChange={handleChange}
            />
            <label htmlFor="role-playing">Role Playing (RPG)</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="strategy"
              name="genres"
              value={"Strategy"}
              onChange={handleChange}
            />
            <label htmlFor="strategy">Strategy</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="simulation"
              name="genres"
              value={"Simulation"}
              onChange={handleChange}
            />
            <label htmlFor="simulation">Simulation</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="sports"
              name="genres"
              value={"Sports"}
              onChange={handleChange}
            />
            <label htmlFor="sports">Sports</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="racing"
              name="genres"
              value={"Racing"}
              onChange={handleChange}
            />
            <label htmlFor="racing">Racing</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="fighting"
              name="genres"
              value={"Fighting"}
              onChange={handleChange}
            />
            <label htmlFor="fighting">Fighting</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="platformer"
              name="genres"
              value={"Platformer"}
              onChange={handleChange}
            />
            <label htmlFor="platformer">Platformer</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="puzzle"
              name="genres"
              value={"Puzzle"}
              onChange={handleChange}
            />
            <label htmlFor="puzzle">Puzzle</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="massively-multiplayer-online"
              name="genres"
              value={"Massively Multiplayer Online (MMO)"}
              onChange={handleChange}
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
              onChange={handleChange}
            />
            <label htmlFor="horror">Horror</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="first-person-shooter"
              name="genres"
              value={"First Person Shooter (FPS)"}
              onChange={handleChange}
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
              onChange={handleChange}
            />
            <label htmlFor="survival">Survival</label>
          </div>
        </div>

        {/* Platforms */}
        <div>
          <p>Platforms:</p>
          <div>
            <p>Nintendo</p>
            <div>
              <input
                type="checkbox"
                id="nintendo-64"
                name="platforms"
                value={"Nintendo 64"}
                onChange={handleChange}
              />
              <label htmlFor="nintendo-64">Nintendo 64</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="gamecube"
                name="platforms"
                value={"GameCube"}
                onChange={handleChange}
              />
              <label htmlFor="gamecube">GameCube</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="wii"
                name="platforms"
                value={"Wii"}
                onChange={handleChange}
              />
              <label htmlFor="wii">Wii</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="wii-u"
                name="platforms"
                value={"Wii U"}
                onChange={handleChange}
              />
              <label htmlFor="wii-u">Wii U</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="switch"
                name="platforms"
                value={"Switch"}
                onChange={handleChange}
              />
              <label htmlFor="switch">Switch</label>
            </div>
          </div>

          <div>
            <p>PlayStation</p>
            <div>
              <input
                type="checkbox"
                id="playstation"
                name="platforms"
                value={"PlayStation"}
                onChange={handleChange}
              />
              <label htmlFor="playstation">PlayStation</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="playstation-2"
                name="platforms"
                value={"PlayStation 2"}
                onChange={handleChange}
              />
              <label htmlFor="playstation-2">PlayStation 2</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="playstation-3"
                name="platforms"
                value={"PlayStation 3"}
                onChange={handleChange}
              />
              <label htmlFor="playstation-3">PlayStation 3</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="playstation-4"
                name="platforms"
                value={"PlayStation 4"}
                onChange={handleChange}
              />
              <label htmlFor="playstation-4">PlayStation 4</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="playstation-5"
                name="platforms"
                value={"PlayStation 5"}
                onChange={handleChange}
              />
              <label htmlFor="playstation-5">PlayStation 5</label>
            </div>
          </div>

          <div>
            <p>Microsoft</p>
            <div>
              <input
                type="checkbox"
                id="playstation"
                name="platforms"
                value={"PlayStation"}
                onChange={handleChange}
              />
              <label htmlFor="playstation">Windows</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="playstation"
                name="platforms"
                value={"PlayStation"}
                onChange={handleChange}
              />
              <label htmlFor="playstation">Xbox</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="playstation"
                name="platforms"
                value={"PlayStation"}
                onChange={handleChange}
              />
              <label htmlFor="playstation">Xbox 360</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="playstation"
                name="platforms"
                value={"PlayStation"}
                onChange={handleChange}
              />
              <label htmlFor="playstation">Xbox One</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="playstation"
                name="platforms"
                value={"PlayStation"}
                onChange={handleChange}
              />
              <label htmlFor="playstation">Xbox Series X/S</label>
            </div>
          </div>
        </div>

        <button type="submit">Add Game</button>
      </form>
    </div>
  );
};
