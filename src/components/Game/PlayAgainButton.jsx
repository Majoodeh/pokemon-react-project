import React from "react";

function PlayAgainButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-200 bg-red-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 hover:bg-red-700 active:scale-95 shadow-lg hover:shadow-red-500/50 cursor-pointer disabled:cursor-not-allowed bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
    >
      <span className="absolute left-3 w-3 h-3 bg-white rounded-full border border-gray-400 group-hover:animate-ping"></span>

      <span className="ml-4 tracking-widest uppercase">Play Again</span>
    </button>
  );
}

export default PlayAgainButton;
