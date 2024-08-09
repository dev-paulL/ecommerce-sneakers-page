import React from "react";
import { navLinks } from "../constants";
import CloseSvg from "../assets/images/icon-close.svg";

export default function MobileMenu({ toggleMenu }) {
  return (
    <div className="w-8/12 max-w-96 absolute z-20 top-0 left-0 h-full bg-White p-10">
      <button aria-label="Close Menu">
        <img src={CloseSvg} alt="" onClick={toggleMenu}/>
      </button>
      <ul role="navigation" className="mt-8 leading-9">
        {navLinks.map((link) => {
          return (
            <li key={link} className="font-bold">
              <a href="#">{link}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
