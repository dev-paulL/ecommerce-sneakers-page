import React from "react";

export default function ArrowButton({ children, extraClass, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Show previous picture"
      className={`absolute bg-White p-4 rounded-full aspect-square flex items-center justify-center ${extraClass}`}
    >
      {children}
    </button>
  );
}
