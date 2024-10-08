import React, { useContext } from "react";
import ArrowButton from "../reusable/ArrowButton";
import Thumbnails from "../reusable/Thumbnails";
import Lightbox from "../Lightbox";
import Overlay from "../reusable/Overlay";
import { ImageContext } from "../../context/ImageContext";
import { AnimatePresence, motion } from "framer-motion";

export default function ProductImages({ currentProduct }) {
  const { showLightbox, currentImage, toggleLightBox, bigImages } = useContext(ImageContext);

  return (
    <>
      <AnimatePresence>
        {showLightbox && window.innerWidth >= 976 && (
          <>
            <Overlay />
            <Lightbox />
          </>
        )}
      </AnimatePresence>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="w-full relative lg:static max-h-[25rem] items-center flex overflow-hidden md:max-h-[35rem] lg:gap-3 lg:max-h-max lg:flex-col lg:col-start-1 "
      >
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
      </motion.div>
    </>
  );
}
