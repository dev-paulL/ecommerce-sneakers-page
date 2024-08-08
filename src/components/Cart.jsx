import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import IconDelete from "../assets/images/icon-delete.svg";
import { getPriceAfterDiscount } from "../utils";
export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="absolute top-24 z-10 right-20 bg-White p-4 w-96 rounded-lg shadow-xl">
      <h2 className="text-xl font-bold">Cart</h2>
      <hr className="opacity-10 my-4"/>
      {cart.length > 0 &&
        cart.map((item) => {
          return (
            <article key={item.name} className="grid grid-rows-2 grid-cols-3 text-lg items-center justify-between">
              <img className="row-span-2 col-start-1 rounded-lg" src={item.images.thumbnails[0]} width={55} height={55} />
              <p className="col-start-2 row-start-1  text-DarkGrayishBlue">{item.name}</p>
              <p className="col-start-2 row-start-2  text-DarkGrayishBlue">
                ${getPriceAfterDiscount(item)} x {item.quantity} <strong className="ml-2 text-Black">${(getPriceAfterDiscount(item) * item.quantity).toFixed(2)}</strong>
              </p>
              <button className="col-start-3 row-span-2" aria-label={`Remove ${item.name} from Cart.`} onClick={() => removeFromCart(item.name)}>
                <img src={IconDelete} width={15} height={15} alt="" />
              </button>
            </article>
          );
        })}
      <button name="Checkout" className="bg-Orange rounded-lg w-full mt-4 p-4 font-bold text-xl">Checkout</button>
    </div>
  );
}
