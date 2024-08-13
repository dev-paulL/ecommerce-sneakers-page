import React, { useContext } from "react";
import { ImageContext } from "../../context/ImageContext";
import { motion } from 'framer-motion';

export default function Thumbnails({ extraClass }) {
  const { images, setCurrentImage, currentImage } = useContext(ImageContext);
  return (
    <motion.div initial={{ opacity: 0, x: -200}} animate={{opacity: 100, x: 0}} transition={{duration: 0.8, delay:1}} className="hidden lg:grid lg:gap-3 lg:w-full lg:grid-cols-images">
      {images.map((image, index) => {
        const isActive = index === currentImage;
        return (
          <img
            className={`rounded-xl cursor-pointer w-auto hover:opacity-50 ${isActive && "border-2 border-Orange opacity-50"} ${extraClass}`}
            key={index}
            src={image}
            alt=""
            onClick={() => setCurrentImage(index)}
          />
        );
      })}
    </motion.div>
  );
}
