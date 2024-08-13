import React from "react";
import { btnTransition } from "../../constants";

export default function QuantityButton({ img, ariaLabel, onClick }) {
  return (
    <button className={`p-2 hover:opacity-60 ${btnTransition}`} aria-label={ariaLabel} onClick={onClick}>
      <img src={img} alt="" width={10} height={10} />
    </button>
  );
}
