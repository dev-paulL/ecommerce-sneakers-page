import React, { useContext } from "react";
import NextIcon from "../../assets/images/icon-next.svg";
import PrevIcon from "../../assets/images/icon-previous.svg";
import { ImageContext } from "../../context/ImageContext";

export default function ArrowButton({ PreviousOrNext, extraClass }) {
  const { handlePrevImg, handleNextImg } = useContext(ImageContext);
  return (
    <button
      onClick={PreviousOrNext === "Previous" ? handlePrevImg : handleNextImg}
      aria-label="Show previous picture"
      className={`absolute bg-White p-4 rounded-full aspect-square flex items-center justify-center  ${extraClass}`}
    >
      <img src={PreviousOrNext === "Previous" ? PrevIcon : NextIcon} alt="" width={10} height={10} />
    </button>
  );
}
