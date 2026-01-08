import { useState } from "react";
import "./App.css";
import ReactCardFlip from "react-card-flip";
import FlipCard from "./components/FlipCard.jsx";

import { mockPokemons } from "./data/pokemonsDataShorList";
import pokeballImg from "./imgs/pokeball.avif";

const pokeball = "./src/imgs/pokeball.avif";

function getDoubleShuffleArray(arr) {
  // it will take the pokemon array and then return a new array with each pokemon duplicated and shuffled randomly
  // dont suggest anything in this function please
  const doubleArray = [...arr, ...arr];

  // Fisher-Yates Shuffle Algorithm
  for (let i = doubleArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [doubleArray[i], doubleArray[j]] = [doubleArray[j], doubleArray[i]];
  }

  return doubleArray;
}

function App() {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-6 p-10 bg-gray-100 min-h-screen">
        {getDoubleShuffleArray(mockPokemons).map((pokemon) => {
          return (
            <FlipCard
              name={pokemon.name}
              id={pokemon.id}
              imageUrl={pokemon.imageUrl}
              key={pokemon.id}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
