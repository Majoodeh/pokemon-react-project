import React from "react";
import PlayAgainButton from "./PlayAgainButton";
import trophyImg from "../../imgs/trophy.png";

function WinScreen({ onReset }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 backdrop-blur-xl p-4">
      <div className="relative bg-slate-900 border-2 border-yellow-500/50 p-10 rounded-[2.5rem] shadow-[0_0_50px_rgba(234,179,8,0.2)] text-center max-w-lg w-full">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-yellow-500 p-4 rounded-full shadow-xl">
          <img
            src={trophyImg}
            alt="Victory Trophy"
            className="w-20 h-20 object-contain"
          />
        </div>

        <div className="mt-12 space-y-4">
          <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-500 tracking-tighter">
            YOU WON!
          </h2>

          <p className="text-slate-400 text-lg font-semibold uppercase tracking-widest">
            You are now a Pokémon Master!
          </p>

          <div className="pt-6 flex justify-center">
            <PlayAgainButton onClick={onReset} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WinScreen;
