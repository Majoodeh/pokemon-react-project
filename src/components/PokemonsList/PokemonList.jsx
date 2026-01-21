import React from "react";
import Type from "./Type.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import Pagination from "./Pagination.jsx";
import Message from "./Message.jsx";
import PokemonCard from "./PokemonCard.jsx";

import useFetchUrl from "../Hooks/useFetchUrl.js";

function PokemonList() {
  const [URL, setURL] = React.useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
  );
  const { data, loading, error } = useFetchUrl(URL);

  if (loading) {
    return (
      <Message
        message={"Throwing all the Poké Balls… this may take a moment"}
      />
    );
  }

  if (error) {
    return <Message message={error} />;
  }
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-5 gap-6 p-4">
        {data.results.map((pokemon, index) => (
          <PokemonCard name={pokemon.name} key={index + 1} url={pokemon.url} />
        ))}
      </div>
      <Pagination next={data.next} prev={data.previous} onPageChange={setURL} />
    </div>
  );
}

export default PokemonList;
