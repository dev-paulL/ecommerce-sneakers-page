import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import IconDelete from "../assets/images/icon-delete.svg";
import { getPriceAfterDiscount } from "../utils";
export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="absolute z-10 top-20 left-5 right-5 md:left-auto md:w-96 md:right-10 bg-White p-4 rounded-lg shadow-xl" aria-live="assertive">
      <h2 className="text-md font-bold border-b pb-4 border-GrayishBlue border-opacity-30">Cart</h2>
      {cart.length > 0 &&
        cart.map((item) => {
          return (
            <article key={item.name} className="grid grid-rows-2 grid-cols-cartItem mt-4 items-center justify-evenly text-sm">
              <img className="row-span-2 col-start-1 rounded-md" src={item.images.thumbnails[0]} width={45} height={45} />
              <p className="col-start-2 row-start-1  text-DarkGrayishBlue">{item.name}</p>
              <p className="col-start-2 row-start-2  text-DarkGrayishBlue">
                ${getPriceAfterDiscount(item)} x {item.quantity}
                <strong className="ml-2 text-Black">${(getPriceAfterDiscount(item) * item.quantity).toFixed(2)}</strong>
              </p>
              <button className="col-start-3 row-span-2" aria-label={`Remove ${item.name} from Cart.`} onClick={() => removeFromCart(item.name)}>
                <img src={IconDelete} width={15} height={15} alt="" />
              </button>
            </article>
          );
        })}
      <button name="Checkout" className="bg-Orange rounded-lg w-full mt-4 p-3 font-bold">
        Checkout
      </button>
    </div>
  );
}
