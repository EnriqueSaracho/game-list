import { useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID.js";
import { useNavigate } from "react-router-dom";

export const AddGame = () => {
  // Hook: logged in userID
  const userID = useGetUserID();

  // State Object: keeps track of every input in the form.
  const [game, setGame] = useState({
    name: "",
    publisher: "",
    releaseDate: new Date().toISOString().substr(0, 10),
    imageUrl: "",
    user: userID,
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
        <button type="submit">Add Game</button>
      </form>
    </div>
  );
};

{
  /* <p>Status</p>
        <input type="radio" id="not-played" name="status" />
        <label htmlFor="not-played">Not played</label>
        <input type="radio" id="in-progress" name="status" />
        <label htmlFor="in-progress">In progress</label>
        <input type="radio" id="paused" name="status" />
        <label htmlFor="paused">Paused</label>
        <input type="radio" id="completed" name="status" />
        <label htmlFor="completed">Completed</label>
        <input type="radio" id="abandoned" name="status" />
        <label htmlFor="abandoned">Abandoned</label>

        <div>
          <p>Genres</p>
          <input type="checkbox" id="action" />
          <label htmlFor="action">Action</label>
          <input type="checkbox" id="adventure" />
          <label htmlFor="adventure">Adventure</label>
          <input type="checkbox" id="role-playing" />
          <label htmlFor="role-playing">Role-playing (RPG)</label>
          <input type="checkbox" id="strategy" />
          <label htmlFor="strategy">Strategy</label>
          <input type="checkbox" id="simulation" />
          <label htmlFor="simulation">Simulation</label>
          <input type="checkbox" id="sports" />
          <label htmlFor="sports">Sports</label>
          <input type="checkbox" id="racing" />
          <label htmlFor="racing">Racing</label>
          <input type="checkbox" id="fighting" />
          <label htmlFor="fighting">fighting</label>
          <input type="checkbox" id="platformer" />
          <label htmlFor="platformer">Platformer</label>
          <input type="checkbox" id="puzzle" />
          <label htmlFor="puzzle">Puzzle</label>
          <input type="checkbox" id="massively-multiplayer-online" />
          <label htmlFor="massively-multiplayer-online">
            Massively Multiplayer Online (MMO)
          </label>
          <input type="checkbox" id="horror" />
          <label htmlFor="horror">Horror</label>
          <input type="checkbox" id="first-person-shooter" />
          <label htmlFor="first-person-shooter">
            First-Person Shooter (FPS)
          </label>
          <input type="checkbox" id="survival" />
          <label htmlFor="survival">Survival</label>
        </div>

        <div>
          <p>Platforms</p>
          <input type="checkbox" id="microsoft-windows" />
          <label htmlFor="microsoft-windows">Microsoft Windows</label>
          <input type="checkbox" id="macos" />
          <label htmlFor="macos">macOS</label>
          <input type="checkbox" id="android" />
          <label htmlFor="android">Android</label>
          <input type="checkbox" id="super-nintendo-entertainment-system" />
          <label htmlFor="super-nintendo-entertainment-system">
            Super-Nintendo-Entertainment-System (SNES)
          </label>
          <input type="checkbox" id="sega-genesis" />
          <label htmlFor="sega-genesis">Sega Genesis</label>
          <input type="checkbox" id="atari-jaguar" />
          <label htmlFor="atari-jaguar">Atari Jaguar</label>
          <input type="checkbox" id="sony-playstation" />
          <label htmlFor="sony-playstation">Sony PlayStation</label>
          <input type="checkbox" id="sega-saturn" />
          <label htmlFor="sega-saturn">Sega Saturn</label>
          <input type="checkbox" id="nintendo-64" />
          <label htmlFor="nintendo-64">Nintendo 64</label>
          <input type="checkbox" id="sega-dreamcast" />
          <label htmlFor="sega-dreamcast">Sega Dreamcast</label>
          <input type="checkbox" id="sony-playstation-2" />
          <input type="checkbox" id="nintendo-game-boy" />
          <label htmlFor="nintendo-game-boy">Nintendo Game Boy</label>
          <label htmlFor="sony-playstation-2">Sony PlayStation 2</label>
          <input type="checkbox" id="nintendo-gamecube" />
          <label htmlFor="nintendo-gamecube">Nintendo GameCube</label>
          <input type="checkbox" id="microsoft-xbox" />
          <label htmlFor="microsoft-xbox">Microsoft Xbox</label>
          <input type="checkbox" id="nintendo-ds" />
          <label htmlFor="nintendo-ds">Nintendo DS</label>
          <input type="checkbox" id="sony-playstation-portable" />
          <label htmlFor="sony-playstation-portable">
            Sony PlayStation Portable (PSP)
          </label>
          <input type="checkbox" id="microsoft-xbox-360" />
          <label htmlFor="microsoft-xbox-360">Microsoft Xbox 360</label>
          <input type="checkbox" id="nintendo-wii" />
          <label htmlFor="nintendo-wii">Nintendo Wii</label>
          <input type="checkbox" id="sony-playstation-3" />
          <label htmlFor="sony-playstation-3">Sony PlayStation 3</label>
          <input type="checkbox" id="nintendo-3ds" />
          <label htmlFor="nintendo-3ds">Nintendo 3DS</label>
          <input type="checkbox" id="sony-playstation-vita" />
          <label htmlFor="sony-playstation-vita">Sony PlayStation Vita</label>
          <input type="checkbox" id="nintendo-wii-u" />
          <label htmlFor="nintendo-wii-u">Nintendo Wii U</label>
          <input type="checkbox" id="microsoft-xbox-one" />
          <label htmlFor="microsoft-xbox-one">Microsoft Xbox One</label>
          <input type="checkbox" id="sony-playstation-4" />
          <label htmlFor="sony-playstation-4">Sony PlayStation 4</label>
          <input type="checkbox" id="nintendo-switch" />
          <label htmlFor="nintendo-switch">Nintendo Switch</label>
          <input type="checkbox" id="microsoft-xbox-series-x/s" />
          <label htmlFor="microsoft-xbox-series-x/s">
            Microsoft Xbox Series X/S
          </label>
          <input type="checkbox" id="sony-playstation-5" />
          <label htmlFor="sony-playstation-5">Sony PlayStation 5</label>
        </div> */
}
