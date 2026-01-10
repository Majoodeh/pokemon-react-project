import React from "react";
import Type from "./Type.jsx";
import Navbar from "../Navbar/Navbar.jsx";

const image = "../src/imgs/LOGO.png";
const name = "Pokemon_Image";
const type = "Item";

function Card() {
  return (
    <div>
      <Navbar />
      <div className="w-full max-w-[350px] h-fit bg-white rounded-[2.5rem] border border-neutral-100 shadow-sm flex flex-col items-center p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group">
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
          <h3 className="text-indigo-950 text-2xl md:text-3xl font-normal font-['Lemon'] leading-tight whitespace-nowrap">
            {name}
          </h3>

          {/* Type  */}
          <Type type={type} />
        </div>
      </div>
    </div>
  );
}

export default Card;
