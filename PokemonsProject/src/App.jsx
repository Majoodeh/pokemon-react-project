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
  //! proplem, each 2 items have the same id // solved by mapping to new objects
  const doubleArray = [...arr, ...arr].map((item) => ({ ...item })); // map,because without it it will copy the refernce only and changing one will change the other also and both will share the same id ..
  // console.log("doubleArray", doubleArray);
  // console.log("item", doubleArray[1].name);

  // Give unique ids and keys to each item
  for (let i = 0; i < doubleArray.length; i++) {
    doubleArray[i].id = i + 1;

    doubleArray[i].key = i + 1;
    // console.log("id", doubleArray[i].id);
    // console.log("key", doubleArray[i].key);
  }

  // console.log(doubleArray);

  // Fisher-Yates Shuffle Algorithm
  for (let i = doubleArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [doubleArray[i], doubleArray[j]] = [doubleArray[j], doubleArray[i]];
  }

  return doubleArray;
}

// get the doubled and shuffled array
let cardsArray = getDoubleShuffleArray(mockPokemons);

function App() {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-6 p-10 bg-gray-100 min-h-screen">
        {cardsArray.map((pokemon) => {
          return (
            <FlipCard
              name={pokemon.name}
              id={pokemon.id}
              imageUrl={pokemon.imageUrl}
              key={pokemon.key}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;

//! ------------------ Proplems to solve ------------------

// -  Card flip only once, it stops after that, why?
// - flippedCards array not updating correctly
// -  when clicking on already flipped card, it adds it again to the flippedCards array
// -  need to prevent clicking on already matched cards
// -  need to prevent clicking on more than 2 cards at a time
// -  need to flip back the cards if they dont match after a timeout
// -  need to keep the matched cards flipped permanently
