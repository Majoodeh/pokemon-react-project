import React from "react";

import blastoise from "../imgs/blastoise.svg";
import charizard from "../imgs/charizard.svg";
import pokemon_logo from "../imgs/pokemon_logo.svg";
import homeImage from "../imgs/image_5.svg";

function HomePage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center overflow-hidden p-[2vw]">
      <div className="w-full h-full max-w-[1400px] flex flex-col lg:flex-row items-center justify-center gap-[5vw]">
        {/* Left Side: Image & Logo Container */}
        <div className="flex flex-col items-center justify-center w-full lg:w-[45%] bg-transparent">
          {/* Logo  */}
          <div className="w-[60%] lg:w-[70%] mb-[2vh] flex justify-center">
            <img
              src={pokemon_logo}
              className="w-full h-auto object-contain"
              alt="Logo"
            />
          </div>

          {/* Home Image  */}
          <div className="w-full flex justify-center items-center bg-transparent">
            <img
              src={homeImage}
              className="w-full h-auto max-h-[60vh] object-contain drop-shadow-2xl rounded-[3vw]"
              alt="Hero"
            />
          </div>
        </div>

        {/* Right Side: Cards Container */}
        <div className="flex flex-row lg:flex-row gap-[3vw] w-full lg:w-[50%] h-auto">
          {/* Card 1 */}
          <div className="flex-1 bg-white/95 backdrop-blur-md rounded-[2.5vw] p-[2vw] flex flex-col items-center justify-between shadow-xl border border-white/20 aspect-[3/4] lg:aspect-auto">
            <span className="text-[3.5vw] lg:text-[1.8vw] font-semibold text-slate-800 text-center">
              Pokémon Collection
            </span>
            <img
              src={charizard}
              className="w-[80%] h-auto object-contain transition-transform duration-300 hover:scale-110"
              alt="Charizard"
            />
          </div>

          {/* Card 2 */}
          <div className="flex-1 bg-white/95 backdrop-blur-md rounded-[2.5vw] p-[2vw] flex flex-col items-center justify-between shadow-xl border border-white/20 aspect-[3/4] lg:aspect-auto">
            <span className="text-[3.5vw] lg:text-[1.8vw] font-semibold text-slate-800 text-center">
              Memory Game
            </span>
            <img
              src={blastoise}
              className="w-[80%] h-auto object-contain transition-transform duration-300 hover:scale-110"
              alt="Blastoise"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
