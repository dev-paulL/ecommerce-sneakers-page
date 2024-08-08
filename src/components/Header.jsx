import React, { useContext } from "react";
import Logo from "../assets/images/logo.svg";
import { navLinks } from "../constants";
import IconCart from "../assets/images/icon-cart.svg";
import ImageAvatar from "../assets/images/image-avatar.png";
import CartContext from "../context/CartContext";

export default function Header() {
  const { getTotalItemsInCart } = useContext(CartContext);

  return (
    <header className="py-12 max-w-7xl w-full flex items-center border-b border-opacity-50 border-GrayishBlue">
      <img src={Logo} alt="sneakers logo" width={180} height={35} />
      <nav className="flex w-full justify-between">
        <ul className="flex gap-8 ml-16 text-DarkGrayishBlue text-lg items-center">
          {navLinks.map((linkName) => {
            return (
              <li key={linkName}>
                <a href="#">{linkName}</a>
              </li>
            );
          })}
        </ul>
        <div className="flex gap-8">
          <button aria-label="Open Cart." className="relative w-10">
            <span className="absolute right-0 top-3 bg-Orange block text-White font-bold text-xs px-2 rounded-md"> {getTotalItemsInCart()}</span>
            <img src={IconCart} width={30} height={30} alt="" />
          </button>
          <button aria-label="Open Profile.">
            <img src={ImageAvatar} width={60} height={60} alt="Your profile picture" />
          </button>
        </div>
      </nav>
    </header>
  );
}
