import React from "react";
import Type from "./Type.jsx";
import useFetchUrl from "../Hooks/useFetchUrl.js";
import { Link } from "react-router-dom";

function PokemonCard({ name, url, onClick }) {
  const { data, loading, error } = useFetchUrl(url);
  // Name to first letter uppercase
  const capitalizeFirstLetter = name.charAt(0).toUpperCase() + name.slice(1);
  const image = data?.sprites?.other?.["official-artwork"].front_default;
  const types = data?.types;

  return (
    <Link to={`${name}`}>
      <div
        onClick={onClick}
        className=" cursor-pointer w-full max-w-[350px] h-fit bg-white rounded-[2.5rem] border border-neutral-100 shadow-sm flex flex-col items-center p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
      >
        {/*  Image Container */}

        <div className="w-full flex justify-center items-center mb-6">
          <div className="w-32 h-32 md:w-48 md:h-48 flex items-center justify-center overflow-hidden bg-transparent">
            <img
              src={image}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-md"
              alt={name}
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center gap-5 w-full">
          <h3 className="text-indigo-950 text-2xl md:text-3xl font-normal font-['Lemon'] leading-tight whitespace-nowrap capitalize">
            {name}
          </h3>

          {/* Type  */}
          <div className="w-full flex flex-wrap justify-center items-center gap-2">
            {types &&
              types.map((type, index) => (
                <Type key={index} type={type.type.name} />
              ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PokemonCard;
