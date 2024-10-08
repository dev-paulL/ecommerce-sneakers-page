import { useContext, useState } from "react";
import Header from "./components/header/Header";
import IconMinus from "/assets/images/icon-minus.svg";
import IconPlus from "/assets/images/icon-plus.svg";
import IconCart from "/assets/images/icon-cart.svg";
import QuantityButton from "./components/reusable/QuantityButton";
import { currentProduct, btnTransition } from "./constants";
import CartContext from "./context/CartContext";
import ProductInfos from "./components/product/ProductInfos";
import ProductImages from "./components/product/ProductImages";
import { motion } from "framer-motion";

function App() {
  const { addItemToCart, updateItemInCart, removeFromCart, getQuantityInCart } = useContext(CartContext);

  const quantityInCart = getQuantityInCart(currentProduct.name);

  const handleDecrement = () => {
    if (quantityInCart > 1) {
      updateItemInCart(currentProduct.name, -1);
    } else if (quantityInCart === 1) {
      removeFromCart(currentProduct.name);
    }
  };

  const handleIncrement = () => {
    quantityInCart === 0 ? addItemToCart(currentProduct) : updateItemInCart(currentProduct.name, 1);
  };

  return (
    <>
      <Header />

      <main className="lg:grid lg:grid-cols-main lg:mt-20 lg:gap-10 xl:gap-20 flex flex-col lg:w-[90%] lg:justify-center lg:items-center max-w-[70rem] lg:place-items-center mb-auto">
        <ProductImages currentProduct={currentProduct} />

        <section className="p-6 lg:col-start-2 lg:w-[80%]">
          <ProductInfos currentProduct={currentProduct} />

          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ opacity: 100, x: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
            className="flex mt-6 flex-col md:flex-row gap-4 shadow-sm"
          >
            <div className="flex md:w-auto w-full justify-between bg-LightGrayishBlue p-4 text-VeryDarkBlue text-lg font-bold rounded-lg items-center flex-1">
              <QuantityButton img={IconMinus} ariaLabel={`Decrease quantity of ${currentProduct.name}`} onClick={handleDecrement} />

              {quantityInCart}

              <QuantityButton img={IconPlus} ariaLabel={`Increase quantity of ${currentProduct.name}`} onClick={handleIncrement} />
            </div>
            <button
              onClick={() => addItemToCart(currentProduct)}
              aria-label={`Add ${currentProduct.name} to cart.`}
              className={`md:flex-grow md:w-auto w-full p-4 shadow-2xl lg:shadow-sm bg-Orange flex justify-center items-center text-lg rounded-lg font-extrabold text-VeryDarkBlue ${btnTransition}`}
            >
              <img src={IconCart} alt="" className="pr-4" />
              Add to cart
            </button>
          </motion.div>
        </section>
      </main>

      <footer className="font-bold">
        Coded by{" "}
        <a className="text-Orange hover:underline" href="https://github.com/dev-paulL">
          @dev-paulL
        </a>
      </footer>
    </>
  );
}

export default App;
