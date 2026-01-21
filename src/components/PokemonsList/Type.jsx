import React from "react";

const typeColors = {
  fire: "bg-orange-500 shadow-orange-500/40",
  water: "bg-blue-500 shadow-blue-500/40",
  grass: "bg-emerald-500 shadow-emerald-500/40",
  electric: "bg-yellow-400 shadow-yellow-400/40",
  psychic: "bg-pink-500 shadow-pink-500/40",
  ice: "bg-cyan-400 shadow-cyan-400/40",
  dragon: "bg-indigo-600 shadow-indigo-600/40",
  dark: "bg-slate-800 shadow-slate-800/40",
  fairy: "bg-rose-400 shadow-rose-400/40",
  normal: "bg-slate-400 shadow-slate-400/40",
  fighting: "bg-red-700 shadow-red-700/40",
  flying: "bg-sky-400 shadow-sky-400/40",
  poison: "bg-purple-500 shadow-purple-500/40",
  ground: "bg-amber-700 shadow-amber-700/40",
  rock: "bg-stone-500 shadow-stone-500/40",
  bug: "bg-lime-500 shadow-lime-500/40",
  ghost: "bg-violet-700 shadow-violet-700/40",
  steel: "bg-gray-500 shadow-gray-500/40",
};

function Type({ type }) {
  const colorClass = typeColors[type.toLowerCase()] || "bg-slate-500";

  return (
    <div
      className={`${colorClass} px-3 py-1 md:px-4 md:py-1 rounded-lg shadow-lg border border-white/20 backdrop-brightness-110 transition-transform hover:scale-105`}
    >
      <span className="text-white text-xs md:text-sm font-black tracking-wider uppercase drop-shadow-sm">
        {type}
      </span>
    </div>
  );
}

export default Type;
