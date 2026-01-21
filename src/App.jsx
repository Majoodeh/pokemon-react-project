import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/ContactUS/ContactUs.jsx";
import PokemonInfo from "./components/Pokemon_Info/PokemonInfo.jsx";
import { Routes, Route } from "react-router-dom";
import GameBoard from "./components/Game/GameBoard.jsx";
import PokemonList from "./components/PokemonsList/PokemonList.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/game" element={<GameBoard />} />
        <Route path="/pokemon" element={<PokemonList />} />
        <Route path="/pokemon/:pokemonName" element={<PokemonInfo />} />
      </Routes>
    </div>
  );
}

export default App;
