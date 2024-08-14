import React, { useContext } from "react";
/* import NextIcon from "/assets/images/icon-next.svg";
import PrevIcon from "/assets/images/icon-previous.svg"; */
import { ImageContext } from "../../context/ImageContext";


export default function ArrowButton({ PreviousOrNext, extraClass }) {
  const { handlePrevImg, handleNextImg } = useContext(ImageContext);
  return (
    <button
      onClick={PreviousOrNext === "Previous" ? handlePrevImg : handleNextImg}
      aria-label="Show previous picture"
      className={`absolute bg-White p-4 rounded-full aspect-square flex items-center justify-center group  ${extraClass}`}
    >
      {/* <img src={PreviousOrNext === "Previous" ? PrevIcon : NextIcon} alt="" width={10} height={10} /> */}

      {PreviousOrNext === "Previous" ? (
        <svg  width="12" height="18" xmlns="http://www.w3.org/2000/svg" className="transition-colors duration-200 ease-in-out">
          <path className="stroke-VeryDarkBlue group-hover:stroke-Orange" d="M11 1 3 9l8 8" strokeWidth="3" fill="none" fillRule="evenodd" />
        </svg>
      ) : (
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
          <path className="stroke-VeryDarkBlue group-hover:stroke-Orange" d="m2 1 8 8-8 8" stroke-width="3" fill="none" fillRule="evenodd" />
        </svg>
      )}
    </button>
  );
}
