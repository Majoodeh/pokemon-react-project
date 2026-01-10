import React from "react";
import LOGO from "../imgs/LOGO.png";

function Navbar() {
  return (
    <div
      data-layer="Navigation"
      className="Navigation w-full px-28 py-5 bg-white shadow-[inset_0px_-1px_1px_0px_rgba(0,0,0,0.10)] inline-flex justify-between items-center"
    >
      <img data-layer="LOGO 1" className="Logo1 size-20" src={LOGO} />
      <div
        data-layer="Nav"
        data-property-1="Default"
        className="Nav w-96 flex justify-start items-center gap-7"
      >
        <div
          data-layer="item link"
          data-property-1="Active"
          className="ItemLink size- px-0.5 rounded-sm border-b-2 border-blue-600 flex justify-center items-center gap-2.5"
        >
          <div
            data-layer="Home"
            className="Home justify-center text-blue-600 text-sm font-medium font-['Poppins'] tracking-tight"
          >
            Home
          </div>
        </div>
        <div
          data-layer="item link"
          data-property-1="Default"
          className="ItemLink flex-none flex justify-center items-center gap-2.5"
        >
          <div
            data-layer="Home"
            className="Home justify-center text-neutral-400 text-sm font-medium font-['Inter'] tracking-tight"
          >
            List
          </div>
        </div>
        <div
          data-layer="item link"
          data-property-1="Default"
          className="ItemLink flex-none flex justify-center items-center gap-2.5"
        >
          <div
            data-layer="Home"
            className="Home justify-center text-neutral-400 text-sm font-medium font-['Inter'] tracking-tight"
          >
            Game{" "}
          </div>
        </div>
        <div
          data-layer="item link"
          data-property-1="Default"
          className="ItemLink flex-none flex justify-center items-center gap-2.5"
        >
          <div
            data-layer="Home"
            className="Home justify-center text-neutral-400 text-sm font-medium font-['Inter'] tracking-tight"
          >
            About US
          </div>
        </div>
        <div
          data-layer="item link"
          data-property-1="Default"
          className="ItemLink flex-none flex justify-between items-center gap-2.5"
        >
          <div
            data-layer="Home"
            className="Home justify-center text-neutral-400 text-sm font-medium font-['Inter'] tracking-tight"
          >
            Contact us
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
