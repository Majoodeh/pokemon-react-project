import React from "react";

function Type({ type }) {
  return (
    /* Removed the outer w-full div so types can sit side-by-side */
    <div className="bg-orange-400 px-4 py-1 rounded-full shadow-sm">
      <span className="text-white text-sm md:text-base font-normal font-['Lemon'] capitalize">
        {type}
      </span>
    </div>
  );
}

export default Type;
