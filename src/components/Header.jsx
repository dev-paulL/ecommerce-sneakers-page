import React from "react";
import Logo from "../assets/images/logo.svg";

export default function Header() {
  const navLinks = ["Collections", "Men", "Women", "About", "Contact"];
  return (
    <header>
      <img src={Logo} alt="sneakers logo" />
      <nav>
        <ul>
          {navLinks.map((linkName) => {
            return (
              <li key={linkName}>
                <a>{linkName}</a>
              </li>
            );
          })}
        </ul>

        <div>
          <button>🛒</button>
          <button>🧑‍⚕️</button>
        </div>
      </nav>
    </header>
  );
}
