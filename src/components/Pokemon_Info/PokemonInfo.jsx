import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";
import useFetchUrl from "../Hooks/useFetchUrl.js";
import Message from "../PokemonsList/Message.jsx";
import Type from "../PokemonsList/Type.jsx";

function PokemonInfo() {
  const { pokemonName } = useParams();

  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  const { data, loading, error } = useFetchUrl(URL);

  if (loading) {
    return <Message message={"Products are loading..."} />;
  }

  if (error) {
    return <Message message={error} />;
  }

  const pokemonData = {
    name: pokemonName,
    image: data?.sprites?.other?.["official-artwork"].front_default,
    height: data?.height,
    weight: data?.weight,
    abilities: data?.abilities?.map((ability) => ability.ability.name),
    types: data?.types?.map((type) => type.type.name),
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        {/* Back Button */}
        <Link to="/pokemon">
          <button className="mb-6 text-blue-500 hover:text-blue-700 font-medium flex items-center gap-2 cursor-pointer">
            &larr; Back to List
          </button>
        </Link>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
          {/* Left Side: Image Section */}
          <div className="bg-gray-50 md:w-1/2 flex justify-center items-center p-10">
            <img
              src={pokemonData.image}
              alt={pokemonData.name}
              className="w-full max-w-[300px] drop-shadow-2xl"
            />
          </div>

          {/* Right Side: Info Section */}
          <div className="p-8 md:w-1/2">
            <h1 className="text-4xl font-bold capitalize mb-6 text-gray-800">
              {pokemonData.name}
            </h1>

            <div className="space-y-6">
              {/* Types */}
              <div className="flex gap-2">
                {pokemonData.types &&
                  pokemonData.types.map((type, index) => (
                    <Type key={index} type={type} />
                  ))}
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 border-t border-b py-6">
                <div>
                  <p className="text-gray-400 text-sm uppercase">Height</p>
                  <p className="font-bold text-lg">{pokemonData.height}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase">Weight</p>
                  <p className="font-bold text-lg">{pokemonData.weight} </p>
                </div>
              </div>

              {/* Abilities */}
              <div>
                <p className="text-gray-400 text-sm uppercase mb-2">
                  Abilities
                </p>
                <div className="flex flex-wrap gap-2">
                  {pokemonData.abilities.map((ability, index) => (
                    <span
                      key={index + 1}
                      className="bg-gray-100 px-3 py-1 rounded text-gray-700 text-sm italic"
                    >
                      {ability}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PokemonInfo;
