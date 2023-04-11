export const AddGame = () => {
  return (
    <div className="add-game">
      <h2>Add Game</h2>
      <form>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" required />

        <label htmlFor="publisher">Publisher: </label>
        <input type="date" id="publisher" />

        <label htmlFor="release-date">Release date: </label>
        <input type="date" id="release-date" />

        <label htmlFor="image-url">Image URL: </label>
        <input type="text" id="image-url" />

        <fieldset>
          <legend>Status</legend>
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
        </fieldset>

        <fieldset>
          <legend>Genres</legend>
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
        </fieldset>

        <fieldset>
          <legend>Platforms</legend>
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
        </fieldset>

        <h4>Rating</h4>
        <fieldset>
          <legend>Graphics</legend>
          <label htmlFor="character-design">Character Design: </label>
          <input type="range" id="character-design" min="1" max="5" />
          <label htmlFor="textures">Textures: </label>
          <input type="range" id="textures" min="1" max="5" />
          <label htmlFor="frames">Frames: </label>
          <input type="range" id="frames" min="1" max="5" />
          <label htmlFor="animations">Animations: </label>
          <input type="range" id="animations" min="1" max="5" />
        </fieldset>
        <fieldset>
          <legend>World</legend>
          <label htmlFor="soundtrack">Soundtrack: </label>
          <input type="range" id="soundtrack" min="1" max="5" />
          <label htmlFor="world-building">World Building: </label>
          <input type="range" id="world-building" min="1" max="5" />
          <label htmlFor="lore">Lore: </label>
          <input type="range" id="lore" min="1" max="5" />
          <label htmlFor="attention-to-detail">Attention to detail: </label>
          <input type="range" id="attention-to-detail" min="1" max="5" />
          <label htmlFor="realism">Realism: </label>
          <input type="range" id="realism" min="1" max="5" />
        </fieldset>
        <fieldset>
          <legend>Gameplay</legend>
          <label htmlFor="progression">Progression: </label>
          <input type="range" id="progression" min="1" max="5" />
          <label htmlFor="satisfaction">Satistaction: </label>
          <input type="range" id="satisfaction" min="1" max="5" />
          <label htmlFor="unrepetitiveness">Unrepetitiveness: </label>
          <input type="range" id="unrepetitiveness" min="1" max="5" />
        </fieldset>
        <fieldset>
          <legend>Story</legend>
          <label htmlFor="main-character">Main Character: </label>
          <input type="range" id="main-character" min="1" max="5" />
          <label htmlFor="side-characters">Side Characters: </label>
          <input type="range" id="side-characters" min="1" max="5" />
          <label htmlFor="main-story">Main Story: </label>
          <input type="range" id="main-story" min="1" max="5" />
          <label htmlFor="side-content">Side Content: </label>
          <input type="range" id="side-content" min="1" max="5" />
        </fieldset>
      </form>
    </div>
  );
};
