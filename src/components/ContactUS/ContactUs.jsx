import React from "react";
import Navbar from "../Navbar/Navbar.jsx";

/** * About Component
 * Displays information about the platform, its mission, and the game.
 */
const Contact = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-400 to-pink-300">
      <Navbar />

      <div className="max-w-2xl mx-auto p-6 md:pt-20">
        <div className="bg-white/20 backdrop-blur-xl rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-white/30">
          <h1 className="text-4xl font-black text-white mb-8 text-center uppercase tracking-tighter">
            Contact Us
          </h1>

          <form className="space-y-5">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-white text-purple-600 font-black uppercase tracking-widest rounded-2xl hover:bg-yellow-400 hover:text-slate-900 transition-all active:scale-95 shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
