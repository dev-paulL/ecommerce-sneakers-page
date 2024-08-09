import React, { useContext, useState } from "react";
import Logo from "../assets/images/logo.svg";
import { navLinks } from "../constants";
import IconCart from "../assets/images/icon-cart.svg";
import ImageAvatar from "../assets/images/image-avatar.png";
import CartContext from "../context/CartContext";
import Cart from "./Cart";
import IconMenu from "../assets/images/icon-menu.svg";
import MobileMenu from "./MobileMenu";
import Overlay from "./Overlay";

export default function Header() {
  const { getTotalItemsInCart } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  const [showMobileNavigation, setShowMobileNavigation] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const toggleMenu = () => {
    setShowMobileNavigation(!showMobileNavigation);
  };

  document.body.style.overflow = showMobileNavigation ? "hidden" : "auto";

  return (
    <>
      <header className="relative p-5 flex items-center border-b border-opacity-50 border-GrayishBlue ">
        <button aria-label="Open Navigation Menu" className="p-1" onClick={toggleMenu}>
          <img className="pr-4" alt="" src={IconMenu} width={30} />
          {/* BOURGIR 🍔🍔 */}
        </button>

        <img className="w-32" src={Logo} alt="Sneakers" />
        <nav className="hidden xl:flex">
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
            <span className="absolute right-2 top-0 bg-Orange block text-White font-bold text-mini lg:text-sm px-2 rounded-md"> {getTotalItemsInCart()}</span>
            <img src={IconCart} className="w-6" alt="" />
          </button>
          <button aria-label="Open Profile.">
            <img src={ImageAvatar} className="w-6" alt="Your profile picture" />
          </button>
        </div>

        {showCart && <Cart />}
      </header>

      {showMobileNavigation && (
        <>
          <MobileMenu toggleMenu={toggleMenu} />
          <Overlay />
        </>
      )}
    </>
  );
}
