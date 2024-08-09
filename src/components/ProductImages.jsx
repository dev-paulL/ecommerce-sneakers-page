import React, { useState } from "react";
import NextIcon from "../assets/images/icon-next.svg";
import PrevIcon from "../assets/images/icon-previous.svg";
import ArrowButton from "./reusable/ArrowButton";

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
      <ArrowButton extraClass={"left-4"} onClick={handlePrevImg}>
        <img src={PrevIcon} alt="" width={10} height={10} />
      </ArrowButton>

      <ArrowButton extraClass={"right-4"} onClick={handleNextImg}>
        <img src={NextIcon} width={10} height={10} alt="" />
      </ArrowButton>

      <img className="lg:rounded-xl lg:w-full sm:mt-40 lg:mt-0" src={bigImages[currentImage]} alt={currentProduct.name} />

      <div className="hidden lg:grid lg:gap-3 lg:w-full lg:grid-cols-images">
        {currentProduct.images.thumbnails.map((image, index) => {
          return <img className="rounded-xl cursor-pointer w-auto" key={index} src={image} alt="" onClick={() => setCurrentImage(index)} />;
        })}
      </div>
    </div>
  );
}
