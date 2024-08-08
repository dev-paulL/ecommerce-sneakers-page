import { useContext, useState } from "react";
import Header from "./components/Header";
import IconMinus from "../src/assets/images/icon-minus.svg";
import IconPlus from "../src/assets/images/icon-plus.svg";
import IconCart from "../src/assets/images/icon-cart.svg";
import QuantityButton from "./components/QuantityButton";
import { currentProduct } from "./constants";
import CartContext from "./context/CartContext";
import ProductInfos from "./components/ProductInfos";
import ProductImages from "./components/ProductImages";

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

      <main className="xl:grid xl:grid-cols-main xl:mt-20 xl:gap-20">
        <ProductImages currentProduct={currentProduct} />

        <section className="p-6">
          <ProductInfos currentProduct={currentProduct} />

          <div className="flex mt-6 flex-col gap-4 shadow-sm">
            <div className="flex w-full justify-between bg-LightGrayishBlue p-4 text-VeryDarkBlue text-lg font-bold rounded-lg items-center">
              <QuantityButton img={IconMinus} ariaLabel={`Decrease quantity of ${currentProduct.name}`} onClick={handleDecrement} />

              {quantityInCart}

              <QuantityButton img={IconPlus} ariaLabel={`Increase quantity of ${currentProduct.name}`} onClick={handleIncrement} />
            </div>
            <button
              onClick={() => addItemToCart(currentProduct)}
              className="w-full p-4 shadow-2xl bg-Orange flex justify-center items-center text-lg rounded-lg font-extrabold text-VeryDarkBlue"
            >
              <img src={IconCart} /* width={35} height={35} */ alt="" aria-label={`Add ${currentProduct.name} to cart.`} className="pr-4" />
              Add to cart
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
