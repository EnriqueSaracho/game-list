import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/add-game">Add Game</Link>
      <Link to="/saved-games">Saved Games</Link>
      <Link to="/auth">Login/Register</Link>
    </div>
  );
};