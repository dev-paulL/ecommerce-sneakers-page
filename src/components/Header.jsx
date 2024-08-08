import React, { useContext, useState } from "react";
import Logo from "../assets/images/logo.svg";
import { navLinks } from "../constants";
import IconCart from "../assets/images/icon-cart.svg";
import ImageAvatar from "../assets/images/image-avatar.png";
import CartContext from "../context/CartContext";
import Cart from "./Cart";
import IconMenu from "../assets/images/icon-menu.svg";

export default function Header() {
  const { getTotalItemsInCart } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  const [showMobileNavigation, setShowMobileNavigation] = useState(false);

  const toggleCart = () => {
    showCart ? setShowCart(false) : setShowCart(true);
  };
  return (
    <header className="relative p-5 flex items-center border-b border-opacity-50 border-GrayishBlue ">
      <button aria-label="Open Navigation Menu" className="p-1">
        <img className="pr-4" alt="" src={IconMenu} width={30} />
        {/* BOURGIR 🍔🍔 */}
      </button>

      <img className="w-32" src={Logo} alt="Sneakers" /* width={180} height={35} */ />
      <nav className="hidden">
        <ul className="lg:flex gap-8 ml-16 text-DarkGrayishBlue text-lg items-center">
          {navLinks.map((linkName) => {
            return (
              <li key={linkName}>
                <a href="#">{linkName}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex ml-auto mr-2 gap-2">
        <button aria-label="Open Cart." className="relative w-10" onClick={toggleCart}>
          <span className="absolute right-0 top-3 bg-Orange block text-White font-bold text-xs px-2 rounded-md"> {getTotalItemsInCart()}</span>
          <img src={IconCart} className="w-6" /* width={30} height={30} */ alt="" />
        </button>
        <button aria-label="Open Profile.">
          <img src={ImageAvatar} className="w-6" alt="Your profile picture" />
        </button>
      </div>

      {showCart && <Cart />}
    </header>
  );
}
