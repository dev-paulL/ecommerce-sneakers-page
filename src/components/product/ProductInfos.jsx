import React from "react";
import { getPriceAfterDiscount } from "../../utils";
import { motion } from 'framer-motion';

export default function ProductInfos({ currentProduct }) {
  return (
    <>
      <motion.p initial={{ opacity: 0, y: -100}} animate={{opacity: 100, y: 0}} transition={{duration: 0.5, delay:0.5}} className="uppercase text-sm font-bold text-DarkGrayishBlue">{currentProduct.company}</motion.p>
      <motion.h1 initial={{ opacity: 0, x: -100}} animate={{opacity: 100, x: 0}} transition={{duration: 1, delay:1}} className="text-VeryDarkBlue text-4xl font-bold mt-2">{currentProduct.name}</motion.h1>
      <motion.p initial={{ opacity: 0, y: 100}} animate={{opacity: 100, y: 0}} transition={{duration: 1, delay:0.6}} className="mt-6 text-DarkGrayishBlue text-lg">{currentProduct.description}</motion.p>

      <motion.div initial={{ opacity: 0, x: 200}} animate={{opacity: 100, x: 0}} transition={{duration: 1, delay:2}} className="flex items-center gap-6 mt-6 lg:block">
        <h2 className="font-bold text-3xl lg:inline">${getPriceAfterDiscount(currentProduct)}</h2>
        <p className="bg-VeryDarkBlue text-White w-min py-1 font-bold px-3 rounded-lg lg:inline lg:ml-5">{currentProduct.discount}%</p>
        <p className="text-DarkGrayishBlue line-through font-bold ml-auto lg:ml-0 md:ml-10">${currentProduct.price.toFixed(2)}</p>
      </motion.div>
      {/* which is the price before discount */}
    </>
  );
}
