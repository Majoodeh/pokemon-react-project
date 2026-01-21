import React from "react";

import blastoise from "../../imgs/blastoise.svg";
import charizard from "../../imgs/charizard.svg";
import pokemon_logo from "../../imgs/pokemon_logo.svg";
import homeImage from "../../imgs/image_5.svg";
import Navbar from "../Navbar/Navbar.jsx";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen w-full bg-gradient-to-br from-purple-400 to-pink-300 flex items-center justify-center p-4">
        <div className="w-full max-w-[1400px] flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side: Image & Logo Container */}
          <div className="flex flex-col items-center w-full lg:w-1/2 gap-6">
            {/* Logo */}
            <div className="w-2/3 lg:w-1/2 flex justify-center transform hover:scale-105 transition-transform duration-500">
              <img
                src={pokemon_logo}
                className="w-full h-auto object-contain drop-shadow-2xl"
                alt="Logo"
              />
            </div>

            {/* Home Image */}
            <div className="w-full flex justify-center transform hover:scale-105 transition-transform duration-500">
              <img
                src={homeImage}
                className="w-full h-auto max-h-[60vh] object-contain rounded-3xl shadow-2xl"
                alt="Hero"
              />
            </div>
          </div>

          {/* Right Side: Cards Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full lg:w-1/2">
            {/* Card 1 */}
            <Link key={"pokemonList"} to="/pokemon">
              <div className="bg-gradient-to-br from-yellow-300 to-orange-400 rounded-3xl shadow-2xl p-6 flex flex-col items-center gap-4 transform hover:scale-105 hover:shadow-4xl transition-all duration-500 border-2 border-yellow-500 relative overflow-hidden">
                <div className="absolute -top-8 -right-8 w-20 h-20 bg-yellow-100 rounded-full opacity-30 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-orange-200 rounded-full opacity-40 animate-pulse"></div>
                <img
                  src={charizard}
                  className="w-3/4 h-auto object-contain z-10 drop-shadow-lg"
                  alt="Charizard"
                />
                <span className="text-xl lg:text-2xl font-bold text-gray-900 text-center z-10">
                  Pokémon Collection
                </span>
              </div>
            </Link>

            {/* Card 2 */}
            <Link key={"memoryGame"} to="/game">
              <div className="bg-gradient-to-br from-blue-300 to-indigo-400 rounded-3xl shadow-2xl p-6 flex flex-col items-center gap-4 transform hover:scale-105 hover:shadow-4xl transition-all duration-500 border-2 border-blue-500 relative overflow-hidden">
                <div className="absolute -top-8 -right-8 w-20 h-20 bg-blue-100 rounded-full opacity-30 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-indigo-200 rounded-full opacity-40 animate-pulse"></div>
                <img
                  src={blastoise}
                  className="w-3/4 h-auto object-contain z-10 drop-shadow-lg"
                  alt="Blastoise"
                />
                <span className="text-xl lg:text-2xl font-bold text-gray-900 text-center z-10">
                  Memory Game
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
