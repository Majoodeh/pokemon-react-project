import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/ContactUS/ContactUs.jsx";
import PokemonInfo from "./components/Pokemon_Info/PokemonInfo.jsx";
import { Routes, Route } from "react-router-dom";
import GameCard from "./components/Game/GameCard.jsx";
import Card from "./components/PokemonsList/Card.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/game" element={<GameCard />} />
        <Route path="/pokemon" element={<Card />}>
          <Route path=":pokemonId" element={<PokemonInfo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
