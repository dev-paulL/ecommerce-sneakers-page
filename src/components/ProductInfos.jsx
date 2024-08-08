import React from "react";
import { getPriceAfterDiscount } from "../utils";

export default function ProductInfos({currentProduct}) {
  return (
    <>
      <p className="uppercase text-sm font-bold text-DarkGrayishBlue">{currentProduct.company}</p>
      <h1 className="text-VeryDarkBlue text-6xl font-bold mt-6">{currentProduct.name}</h1>
      <p className="mt-12 text-DarkGrayishBlue text-lg">{currentProduct.description}</p>
      <h2 className="font-bold text-4xl mt-8 inline-block">${getPriceAfterDiscount(currentProduct)}</h2>
      <p className="bg-VeryDarkBlue text-White w-min py-1 text-lg font-bold px-3 rounded-lg inline ml-6">{currentProduct.discount}%</p>
      <p className="text-DarkGrayishBlue line-through font-bold text-lg mt-2">${currentProduct.price.toFixed(2)}</p>
      {/* which is the price before discount */}
    </>
  );
}
