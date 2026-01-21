import React from "react";
import Type from "./Type.jsx";
import useFetchUrl from "../Hooks/useFetchUrl.js";
import { Link } from "react-router-dom";

function PokemonCard({ name, url, onClick }) {
  const { data, loading, error } = useFetchUrl(url);
  const image = data?.sprites?.other?.["official-artwork"].front_default;
  const types = data?.types;

  return (
    <Link to={`${name}`} className="block h-full">
      <div
        onClick={onClick}
        className="group relative h-full w-full bg-white/20 backdrop-blur-md rounded-4xl border border-white/30 shadow-xl flex flex-col items-center p-6 transition-all duration-300 hover:bg-white/30 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
      >
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"></div>

        {/* Image Container */}
        <div className="relative w-full aspect-square flex items-center justify-center mb-4 bg-slate-900/10 rounded-2xl overflow-hidden">
          {loading ? (
            <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
          ) : (
            <img
              src={image}
              className="w-[80%] h-[80%] object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-2xl"
              alt={name}
            />
          )}
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center gap-3 w-full">
          <h3 className="text-white text-xl md:text-2xl font-black tracking-tight capitalize drop-shadow-sm">
            {name}
          </h3>

          {/* Types */}
          <div className="w-full flex flex-wrap justify-center items-center gap-1.5">
            {types &&
              types.map((type, index) => (
                <div key={index} className="scale-90">
                  <Type type={type.type.name} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PokemonCard;
