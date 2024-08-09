import React, { useState } from "react";
import ArrowButton from "./reusable/ArrowButton";
import Thumbnails from "./Thumbnails";
import Lightbox from "./Lightbox";
import Overlay from "./Overlay";
export default function ProductImages({ currentProduct }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [showLightbox, setShowLightBox] = useState(false);

  const images = currentProduct.images.thumbnails;
  const bigImages = currentProduct.images.big;

  const handleNextImg = () => {
    setCurrentImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const handlePrevImg = () => {
    setCurrentImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const toggleLightBox = () => {
    setShowLightBox(!showLightbox);
  };

  return (
    <>
      {showLightbox && (
        <>
          <Overlay />
          <Lightbox
            currentImage={currentImage}
            images={images}
            bigImages={bigImages}
            handlePrevImg={handlePrevImg}
            handleNextImg={handleNextImg}
            setCurrentImage={setCurrentImage}
            toggleLightBox={toggleLightBox}
          />{" "}
        </>
      )}
      <div className="w-full relative lg:static max-h-[25rem] items-center flex overflow-hidden md:max-h-[35rem] lg:gap-3 lg:max-h-max lg:flex-col lg:col-start-1 ">
        <ArrowButton extraClass={"left-4 lg:hidden"} onClick={handlePrevImg} PreviousOrNext={"Previous"} />
        <ArrowButton extraClass={"right-4 lg:hidden"} onClick={handleNextImg} PreviousOrNext={"Next"} />

        <img className="lg:rounded-xl lg:w-full sm:mt-40 lg:mt-0" src={bigImages[currentImage]} alt={currentProduct.name} onClick={toggleLightBox} />

        <Thumbnails
          thumbnailImgs={images}
          setCurrentImage={setCurrentImage}
          currentImage={currentImage}
          handleNextImg={handleNextImg}
          handlePrevImg={handlePrevImg}
        />
      </div>
    </>
  );
}
