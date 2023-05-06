import { Link } from "react-router-dom";
import { FaGamepad } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-title">
        <FaGamepad /> Game List
      </Link>
    </div>
  );
};
