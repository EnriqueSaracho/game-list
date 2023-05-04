import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { AddGame } from "./pages/add-game";
import { Navbar } from "./components/navbar";
import { EditGame } from "./pages/edit-game";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="blur"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-game" element={<AddGame />} />
          <Route path="/edit-game/:id" element={<EditGame />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
