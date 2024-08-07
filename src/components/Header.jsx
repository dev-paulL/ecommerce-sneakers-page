import React from "react";
import Logo from "../assets/images/logo.svg";
import { navLinks } from "../constants";
import IconCart from "../assets/images/icon-cart.svg";
import ImageAvatar from "../assets/images/image-avatar.png";

export default function Header() {
  return (
    <header className="py-12 max-w-7xl w-full flex items-center border-b border-opacity-50 border-GrayishBlue">
      <img src={Logo} alt="sneakers logo" />
      <nav className="flex w-full justify-between">
        <ul className="flex gap-8 ml-16 text-DarkGrayishBlue text-lg items-center">
          {navLinks.map((linkName) => {
            return (
              <li key={linkName}>
                <a>{linkName}</a>
              </li>
            );
          })}
        </ul>
        <div className="flex gap-12">
          <button>
            <img src={IconCart} width={30} alt="" aria-label="Open Cart." />
          </button>
          <button>
            <img src={ImageAvatar} width={60} />
          </button>
        </div>
      </nav>
    </header>
  );
}
