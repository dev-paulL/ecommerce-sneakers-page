import React from "react";

export default function QuantityButton({ img, ariaLabel, onClick }) {
  return (
    <button className="p-2" aria-label={ariaLabel} onClick={onClick}>
      <img src={img} alt="" width={10} height={10}/>
    </button>
  );
}
