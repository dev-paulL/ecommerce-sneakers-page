import React, { useContext, useEffect } from "react";
import ExitSvg from "/assets/images/icon-close.svg";
import Thumbnails from "./reusable/Thumbnails";
import ArrowButton from "./reusable/ArrowButton";
import { ImageContext } from "../context/ImageContext";

export default function Lightbox() {
  const { currentImage, bigImages, toggleLightBox } = useContext(ImageContext);
 
  
  return (
    <div className="flex absolute gap-6 w-2/4 flex-col min-h-full max-w-[30rem] justify-center items-center z-20">
      <button aria-label="Exit Picture Lightbox" className="ml-auto" onClick={toggleLightBox}>
        <img src={ExitSvg} alt="" width={30} className="brightness-200" />
      </button>

      <div className="relative">
        <img src={bigImages[currentImage]} alt="" className="rounded-lg" />

        <ArrowButton PreviousOrNext={"Previous"} extraClass={"-left-5 top-[50%]"} />
        <ArrowButton PreviousOrNext={"Next"} extraClass={"-right-5 top-[50%]"} />
      </div>
      <Thumbnails extraClass={"max-w-[70%] gap-2 mx-auto"} />
    </div>
  );
}
