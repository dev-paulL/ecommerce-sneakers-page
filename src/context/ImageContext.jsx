import React, { createContext, useState } from "react";
import { currentProduct } from "../constants";

export const ImageContext = createContext();

export default function ImageProvider({ children }) {
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
    <ImageContext.Provider
      value={{ showLightbox, setShowLightBox, currentImage, images, bigImages, handlePrevImg, handleNextImg, setCurrentImage, toggleLightBox }}
    >
      {children}
    </ImageContext.Provider>
  );
}
