import { useState } from "react";
import "./App.css";

import { mockPokemons } from "./data/pokemonsDataShorList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {mockPokemons.map((pokemon) => (
        <div key={pokemon.name}>{pokemon.name}</div>
      ))}
    </>
  );
}

export default App;
