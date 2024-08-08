import React, { useRef, useState } from "react";
import NextIcon from "../assets/images/icon-next.svg";
import PrevIcon from "../assets/images/icon-previous.svg";
import ArrowButton from "./reusable/ArrowButton";

export default function ProductImages({ currentProduct }) {
  const [currentImage, setCurrentImage] = useState(0);
  const handleNextImg = () => {
    currentImage < 3 ? setCurrentImage(currentImage + 1) : setCurrentImage(0);
  };

  const handlePrevImg = () => {
    currentImage > 0 ? setCurrentImage(currentImage - 1) : setCurrentImage(0);
  };
  return (
    <div className="w-full relative h-72 overflow-hidden items-center flex">
      <ArrowButton extraClass={"left-4"} onClick={handlePrevImg}>
        <img src={PrevIcon} alt="" width={10} height={10} />
      </ArrowButton>

      <ArrowButton extraClass={"right-4"} onClick={handleNextImg}>
        <img src={NextIcon} width={10} height={10} alt="" />
      </ArrowButton>
     <img className="self-start xl:rounded-xl w-full" src={currentProduct.images.big[currentImage]} alt={currentProduct.name} /> 
      <div className="hidden">
        {currentProduct.images.thumbnails.map((image, index) => {
          return <img className="rounded-xl cursor-pointer" key={index} src={image} alt="" onClick={() => setCurrentImage(index)} />;
        })}
      </div>
    </div>
  );
}
