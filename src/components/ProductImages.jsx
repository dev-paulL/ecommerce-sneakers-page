import React, { useState } from "react";
import ArrowButton from "./reusable/ArrowButton";
import Thumbnails from "./Thumbnails";

export default function ProductImages({ currentProduct }) {
  const [currentImage, setCurrentImage] = useState(0);

  const images = currentProduct.images.thumbnails;
  const bigImages = currentProduct.images.big;

  const handleNextImg = () => {
    setCurrentImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const handlePrevImg = () => {
    setCurrentImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  return (
    <div className="w-full relative max-h-[25rem] items-center flex overflow-hidden md:max-h-[35rem] lg:gap-3 lg:max-h-max lg:flex-col lg:col-start-1 ">
      <ArrowButton extraClass={"left-4"} onClick={handlePrevImg} PreviousOrNext={"Previous"} />
      <ArrowButton extraClass={"right-4"} onClick={handleNextImg} PreviousOrNext={"Next"} />

      <img className="lg:rounded-xl lg:w-full sm:mt-40 lg:mt-0" src={bigImages[currentImage]} alt={currentProduct.name} />

      <Thumbnails thumbnailImgs={images} setCurrentImage={setCurrentImage} currentImage={currentImage} handleNextImg={handleNextImg} handlePrevImg={handlePrevImg}/>
    </div>
  );
}
