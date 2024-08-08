import React from "react";
import { getPriceAfterDiscount } from "../utils";

export default function ProductInfos({ currentProduct }) {
  return (
    <>
      <p className="uppercase text-sm font-bold text-DarkGrayishBlue">{currentProduct.company}</p>
      <h1 className="text-VeryDarkBlue text-4xl font-bold mt-2">{currentProduct.name}</h1>
      <p className="mt-6 text-DarkGrayishBlue text-lg">{currentProduct.description}</p>

      <span className="flex items-center gap-6 mt-6">
        <h2 className="font-bold text-3xl">${getPriceAfterDiscount(currentProduct)}</h2>
        <p className="bg-VeryDarkBlue text-White w-min py-1 font-bold px-3 rounded-lg ">{currentProduct.discount}%</p>
        <p className="text-DarkGrayishBlue line-through font-bold ml-auto">${currentProduct.price.toFixed(2)}</p>
      </span>
      {/* which is the price before discount */}
    </>
  );
}
