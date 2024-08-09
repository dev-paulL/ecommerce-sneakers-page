import React, { useDeferredValue, useState } from "react";
import NextIcon from "../assets/images/icon-next.svg";
import PrevIcon from "../assets/images/icon-previous.svg";
import ArrowButton from "./reusable/ArrowButton";


export default function ProductImages({ currentProduct }) {
  const [currentImage, setCurrentImage] = useState(0);

  const images = currentProduct.images.thumbnails;
  const bigImages = currentProduct.images.big ;

  const handleNextImg = () => {
    setCurrentImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const handlePrevImg = () => {
    setCurrentImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  return (
    <div className="w-full relative items-center flex overflow-hidden">
      <ArrowButton extraClass={"left-4"} onClick={handlePrevImg}>
        <img src={PrevIcon} alt="" width={10} height={10} />
      </ArrowButton>

      <ArrowButton extraClass={"right-4"} onClick={handleNextImg}>
        <img src={NextIcon} width={10} height={10} alt="" />
      </ArrowButton>
      <img className="xl:rounded-xl max-w-full" src={bigImages[currentImage]} alt={currentProduct.name} />
      <div className="hidden">
        {currentProduct.images.thumbnails.map((image, index) => {
          return <img className="rounded-xl cursor-pointer" key={index} src={image} alt="" onClick={() => setCurrentImage(index)} />;
        })}
      </div>
    </div>
  );
}
