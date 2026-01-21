import React from "react";
import Navbar from "../Navbar/Navbar.jsx";

const About = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-400 to-pink-300">
      <Navbar />

      <div className="max-w-4xl  mx-auto p-6 md:p-12">
        <div className="bg-white/20 backdrop-blur-xl rounded-[3rem] shadow-2xl p-10 md:p-16 border border-white/30 text-center">
          <div className="inline-block p-4 bg-yellow-400 rounded-2xl shadow-lg mb-8 rotate-3">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase">
              About Us
            </h1>
          </div>

          <div className="space-y-6 text-white text-lg md:text-xl font-medium leading-relaxed">
            <p className="drop-shadow-sm">
              Welcome to the ultimate Pokémon experience! Our platform is
              designed for trainers who want to explore the vast world of
              Pokémon through a modern, interactive Pokedex and sharpen their
              skills with our signature memory challenge.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
              <div className="bg-slate-900/20 p-6 rounded-3xl border border-white/10 hover:bg-slate-900/30 transition-colors">
                <h3 className="text-yellow-300 font-black uppercase tracking-widest mb-2">
                  Our Mission
                </h3>
                <p className="text-sm opacity-90">
                  To provide a fast, beautiful, and responsive interface for
                  Pokémon enthusiasts to discover and learn about their favorite
                  creatures.
                </p>
              </div>

              <div className="bg-slate-900/20 p-6 rounded-3xl border border-white/10 hover:bg-slate-900/30 transition-colors">
                <h3 className="text-blue-300 font-black uppercase tracking-widest mb-2">
                  The Game
                </h3>
                <p className="text-sm opacity-90">
                  Our memory game uses real-time data to test your focus and
                  knowledge, making learning about Pokémon fun and competitive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
