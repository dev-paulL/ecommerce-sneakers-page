import React from "react";
import { navLinks } from "../../constants";
import CloseSvg from "/assets/images/icon-close.svg";
import { motion } from "framer-motion";

export default function MobileMenu({ toggleMenu }) {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="w-8/12 max-w-96 absolute z-20 top-0 left-0 h-full bg-White p-10"
      aria-live="assertive"
    >
      <button aria-label="Close Menu" onClick={toggleMenu}>
        <img src={CloseSvg} alt="" />
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
    </motion.div>
  );
}
