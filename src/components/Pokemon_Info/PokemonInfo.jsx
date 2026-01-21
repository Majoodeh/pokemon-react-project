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
    return (
      <div className="h-screen w-full bg-gradient-to-br from-purple-400 to-pink-300 flex items-center justify-center">
        <Message message={"Analyzing Pokémon DNA..."} />
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

  const pokemonData = {
    name: pokemonName,
    image: data?.sprites?.other?.["official-artwork"].front_default,
    height: data?.height,
    weight: data?.weight,
    abilities: data?.abilities?.map((ability) => ability.ability.name),
    types: data?.types?.map((type) => type.type.name),
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-400 to-pink-300 pb-12">
      <Navbar />
      <div className="max-w-5xl mx-auto p-4 md:p-12">
        <Link
          to="/pokemon"
          className="group inline-flex items-center gap-2 mb-8 text-white font-black uppercase tracking-widest text-sm hover:text-yellow-300 transition-colors"
        >
          <span className="text-2xl group-hover:-translate-x-2 transition-transform">
            ←
          </span>
          Back to Pokedex
        </Link>

        <div className="bg-white/20 backdrop-blur-xl rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-white/30">
          <div className="bg-slate-900/10 md:w-1/2 flex justify-center items-center p-12 relative overflow-hidden group">
            <div className="absolute w-64 h-64 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
            <img
              src={pokemonData.image}
              alt={pokemonData.name}
              className="relative z-10 w-full max-w-[350px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="p-10 md:w-1/2 flex flex-col justify-center bg-white/10">
            <h1 className="text-5xl md:text-6xl font-black capitalize mb-6 text-white tracking-tighter drop-shadow-md">
              {pokemonData.name}
            </h1>

            <div className="space-y-8">
              <div className="flex flex-wrap gap-3">
                {pokemonData.types &&
                  pokemonData.types.map((type, index) => (
                    <Type key={index} type={type} />
                  ))}
              </div>

              <div className="grid grid-cols-2 gap-8 border-y border-white/20 py-8">
                <div>
                  <p className="text-white/60 text-xs font-black uppercase tracking-[0.2em] mb-1">
                    Height
                  </p>
                  <p className="font-bold text-3xl text-white">
                    {pokemonData.height / 10}
                    <span className="text-sm ml-1 opacity-50">M</span>
                  </p>
                </div>
                <div>
                  <p className="text-white/60 text-xs font-black uppercase tracking-[0.2em] mb-1">
                    Weight
                  </p>
                  <p className="font-bold text-3xl text-white">
                    {pokemonData.weight / 10}
                    <span className="text-sm ml-1 opacity-50">KG</span>
                  </p>
                </div>
              </div>

              <div>
                <p className="text-white/60 text-xs font-black uppercase tracking-[0.2em] mb-4">
                  Special Abilities
                </p>
                <div className="flex flex-wrap gap-3">
                  {pokemonData.abilities.map((ability, index) => (
                    <span
                      key={index + 1}
                      className="bg-slate-900/40 backdrop-blur-md px-5 py-2 rounded-xl text-white text-sm font-bold border border-white/10 uppercase tracking-wider"
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
    </div>
  );
}

export default PokemonInfo;
