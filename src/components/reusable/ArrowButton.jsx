import React from "react";
import NextIcon from "../../assets/images/icon-next.svg";
import PrevIcon from "../../assets/images/icon-previous.svg";

export default function ArrowButton({ PreviousOrNext, extraClass, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Show previous picture"
      className={`absolute bg-White p-4 rounded-full aspect-square flex items-center justify-center lg:hidden ${extraClass}`}
    >
      <img src={PreviousOrNext === "Previous" ? PrevIcon : NextIcon} alt="" width={10} height={10} />
    </button>
  );
}
