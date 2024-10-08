import React, { useContext, useState } from "react";
import Logo from "/assets/images/logo.svg";
import { navLinks, btnTransition } from "../../constants";
import IconCart from "/assets/images/icon-cart.svg";
import ImageAvatar from "/assets/images/image-avatar.png";
import CartContext from "../../context/CartContext";
import Cart from "../Cart";
import IconMenu from "/assets/images/icon-menu.svg";
import MobileMenu from "../header/MobileMenu";
import Overlay from "../reusable/Overlay";
import { AnimatePresence } from "framer-motion";

export default function Header() {
  const { getTotalItemsInCart, toggleCart, showCart } = useContext(CartContext);
  const [showMobileNavigation, setShowMobileNavigation] = useState(false);

  const toggleMenu = () => {
    setShowMobileNavigation(!showMobileNavigation);
  };

  document.body.style.overflowY = showMobileNavigation ? "hidden" : "auto";

  return (
    <>
      <header className="relative p-5 flex items-center border-b border-opacity-50 border-GrayishBlue max-w-[70rem] w-full lg:w-[80%]">
        <button aria-label="Open Navigation Menu" className="p-1 lg:hidden mr-3" onClick={toggleMenu}>
          <img className="" alt="" src={IconMenu} width={15} />
          {/* BOURGIR 🍔🍔 */}
        </button>

        <img className="w-32" src={Logo} alt="Sneakers" />
        <nav className="hidden lg:flex ">
          <ul className="lg:flex gap-8 ml-16 text-DarkGrayishBlue text-lg items-center">
            {navLinks.map((linkName) => {
              return (
                <li className="text-sm relative hover:text-Black " key={linkName}>
                  <a
                    className="after:content-[''] after:absolute after:bg-Orange after:w-full after:top-11 after:h-1 after:left-0 after:rounded-md after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
                    href="#"
                  >
                    {/* relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100" */}
                    {linkName}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex ml-auto mr-2 gap-2">
          <button aria-label="Open Cart." className="relative w-10" onClick={toggleCart}>
            <span className="absolute right-2 top-0 bg-Orange block text-White font-bold text-mini px-2 rounded-md">{getTotalItemsInCart()}</span>
            <img src={IconCart} className="w-6" alt="" />
          </button>
          <button className={`rounded-full border-White hover:border-Orange border-2 ${btnTransition}`} aria-label="Open Profile.">
            <img src={ImageAvatar} className="w-8" alt="Your profile picture" />
          </button>
        </div>
        <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
      </header>

      <AnimatePresence>
        {showMobileNavigation && (
          <>
            <MobileMenu toggleMenu={toggleMenu} />
            <Overlay />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
