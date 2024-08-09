import React from 'react'

export default function Thumbnails({ thumbnailImgs, setCurrentImage, currentImage, extraClass }) {
  return (
    <div className="hidden lg:grid lg:gap-3 lg:w-full lg:grid-cols-images">
        {thumbnailImgs.map((image, index) => {
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
      </div>
  )
}
