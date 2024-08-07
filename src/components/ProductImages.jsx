import React, { useRef, useState } from "react";

export default function ProductImages({ currentProduct }) {
  const [currentImage, setCurrentImage] = useState(0);
  return (
    <div className="w-full">
      <img className="rounded-xl max-w-lg cursor-pointer" src={currentProduct.images.big[currentImage]} alt={currentProduct.name} />
      <div className="flex justify-between mt-8">
        {currentProduct.images.thumbnails.map((image, index) => {
          return <img className="rounded-xl cursor-pointer" key={index} src={image} alt="" width={100} onClick={() => setCurrentImage(index)} />;
        })}
      </div>
    </div>
  );
}
