import React, { useContext } from "react";
import ArrowButton from "../reusable/ArrowButton";
import Thumbnails from "../reusable/Thumbnails";
import Lightbox from "../Lightbox";
import Overlay from "../reusable/Overlay";
import { ImageContext } from "../../context/ImageContext";

export default function ProductImages({ currentProduct }) {
  const { showLightbox, currentImage, toggleLightBox, bigImages } = useContext(ImageContext);
  
  return (
    <>
      {showLightbox && (window.innerWidth >= 976) &&  (
        <>
          <Overlay />
          <Lightbox />
        </>
      )}
      <div className="w-full relative lg:static max-h-[25rem] items-center flex overflow-hidden md:max-h-[35rem] lg:gap-3 lg:max-h-max lg:flex-col lg:col-start-1 ">
        <ArrowButton extraClass={"left-4 lg:hidden"} PreviousOrNext={"Previous"} />
        <ArrowButton extraClass={"right-4 lg:hidden"} PreviousOrNext={"Next"} />

        <img
          className="lg:cursor-pointer lg:rounded-xl lg:w-full sm:mt-40 lg:mt-0"
          src={bigImages[currentImage]}
          alt={currentProduct.name}
          onClick={toggleLightBox}
          loading="lazy"
        />

        <Thumbnails extraClass={""} />
      </div>
    </>
  );
}
