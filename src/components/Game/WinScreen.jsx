import React from "react";
import PlayAgainButton from "./PlayAgainButton";
import trophyImg from "../../imgs/trophy.png";

function WinScreen({ onReset }) {
  // You can replace this URL with any trophy or victory image you like

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">
      <div className="bg-white p-8 rounded-3xl shadow-2xl border-b-8 border-yellow-500 text-center max-w-sm w-full mx-4 animate-ing zoom-in duration-300">
        {/* The Image Tag */}
        <div className="flex justify-center mb-6">
          <img
            src={trophyImg}
            alt="Victory Trophy"
            className="w-32 h-32 object-contain "
          />
        </div>

        <h2 className="text-4xl font-black text-gray-800 mb-2">VICTORY!</h2>

        <p className="text-gray-500 mb-8 font-medium">
          You matched all the Pokémon!
        </p>

        <div className="flex justify-center">
          <PlayAgainButton onClick={onReset} />
        </div>
      </div>
    </div>
  );
}

export default WinScreen;
