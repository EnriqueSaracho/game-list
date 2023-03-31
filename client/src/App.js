import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Auth } from "./pages/auth";
import { AddGame } from "./pages/add-game";
import { SavedGames } from "./pages/saved-games";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/add-game" element={<AddGame />} />
          <Route path="/saved-games" element={<SavedGames />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
