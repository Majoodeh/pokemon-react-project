import React from "react";

function Type(props) {
  return (
    <div className="flex justify-center w-full">
      <div className="bg-orange-400 px-8 py-2 rounded-full shadow-md">
        <span className="text-white text-lg md:text-xl font-normal font-['Lemon']">
          {props.type}
        </span>
      </div>
    </div>
  );
}

export default Type;
