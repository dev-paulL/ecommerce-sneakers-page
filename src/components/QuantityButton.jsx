import React from "react";

export default function QuantityButton({img, ariaLabel}) {
  return (
    <button className="p-2" aria-label={ariaLabel}>
      <img src={img} alt="" /> 
    </button>
  );
}
