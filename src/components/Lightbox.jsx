import React from "react";
import ExitSvg from "../assets/images/icon-close.svg";
import Thumbnails from "./Thumbnails";
import ArrowButton from "./reusable/ArrowButton";
export default function Lightbox({ currentImage, images, bigImages, handlePrevImg, handleNextImg, setCurrentImage }) {
  return (
    <div className="flex absolute">
      {/* Exit button */}
      <button aria-label="Exit Picture Lightbox">
        <img src={ExitSvg} alt="" />
      </button>
      {/* Main image */}
      <div className="relative">
        <img src={bigImages[currentImage]} alt="" />
        <ArrowButton PreviousOrNext={"Previous"} extraClass={""} onClick={handlePrevImg} />
        <ArrowButton PreviousOrNext={"Next"} extraClass={""} onClick={handleNextImg} />
      </div>
      <Thumbnails thumbnailImgs={images} setCurrentImage={setCurrentImage} currentImage={currentImage}/>
    </div>
  );
}
