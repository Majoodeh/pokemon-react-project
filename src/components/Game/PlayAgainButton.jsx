import React from "react";

/**
 * PlayAgainButton Component
 * Renders a button that allows the user to play the game again.
 */

function PlayAgainButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className=" cursor-pointer group relative px-8 py-3 bg-white text-slate-900 font-bold rounded-full transition-all hover:bg-yellow-400 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
    >
      PLAY AGAIN
    </button>
  );
}

export default PlayAgainButton;
