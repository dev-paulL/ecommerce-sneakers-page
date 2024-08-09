import React from "react";
import ExitSvg from "../assets/images/icon-close.svg";
import Thumbnails from "./Thumbnails";
import ArrowButton from "./reusable/ArrowButton";

export default function Lightbox({ currentImage, images, bigImages, handlePrevImg, handleNextImg, setCurrentImage, toggleLightBox }) {
  return (
    <div className="flex absolute gap-6 w-2/4 flex-col min-h-full max-w-[30rem] justify-center items-center z-20">
      {/* Exit button */}
      <button aria-label="Exit Picture Lightbox" className="ml-auto">
        <img src={ExitSvg} alt="" width={30} className="brightness-200" onClick={toggleLightBox}/>
      </button>
      {/* Main image */}
      <div className="relative">
        <img src={bigImages[currentImage]} alt="" className="rounded-lg" />
        <ArrowButton PreviousOrNext={"Previous"} extraClass={"-left-5 top-[50%]"} onClick={handlePrevImg} />
        <ArrowButton PreviousOrNext={"Next"} extraClass={"-right-5 top-[50%]"} onClick={handleNextImg} />
      </div>
      <Thumbnails extraClass={'max-w-[70%] gap-2 mx-auto'} thumbnailImgs={images} setCurrentImage={setCurrentImage} currentImage={currentImage} />
    </div>
  );
}
