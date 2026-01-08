import { useState } from "react";
import "./App.css";
import ReactCardFlip from "react-card-flip";
import FlipCard from "./components/FlipCard.jsx";

import { mockPokemons } from "./data/pokemonsDataShorList";
import pokeballImg from "./imgs/pokeball.avif";

const pokeball = "./src/imgs/pokeball.avif";

function App() {
  return (
    <>
      <FlipCard />
    </>
  );
}

export default App;
