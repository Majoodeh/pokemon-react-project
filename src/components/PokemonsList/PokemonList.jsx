import React, { useEffect } from "react";
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [data]);

  if (loading) {
    return (
      <div className="h-screen w-full bg-gradient-to-br from-purple-400 to-pink-300 flex items-center justify-center">
        <Message
          message={"Throwing all the Poké Balls… this may take a moment"}
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen w-full bg-gradient-to-br from-purple-400 to-pink-300 flex items-center justify-center">
        <Message message={error} />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-400 to-pink-300">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Responsive Grid: 1 col on mobile, 2 on sm, 3 on md, 5 on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {data.results.map((pokemon, index) => (
            <div
              key={pokemon.name}
              className="transform hover:scale-105 transition-transform duration-300"
            >
              <PokemonCard name={pokemon.name} url={pokemon.url} />
            </div>
          ))}
        </div>

        {/* Pagination Section */}
        <div className="mt-12 mb-8 flex justify-center">
          <div className="bg-white/20 backdrop-blur-md p-4 rounded-3xl shadow-xl border border-white/30">
            <Pagination
              next={data.next}
              prev={data.previous}
              onPageChange={setURL}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonList;
