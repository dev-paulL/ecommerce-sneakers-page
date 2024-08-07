import { useState } from "react";
import Header from "./components/Header";
import IconMinus from "../src/assets/images/icon-minus.svg";
import IconPlus from "../src/assets/images/icon-plus.svg";
import IconCart from "../src/assets/images/icon-cart.svg";
import QuantityButton from "./components/QuantityButton";
import { currentProduct } from "./constants";

function App() {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <>
      <Header />

      <main className="lg:grid justify-items-center lg:max-w-7xl lg:grid-cols-main mt-20 gap-20">
        <div className="w-full">
          <img
            className="rounded-xl max-w-lg"
            src={currentProduct.images.big[currentImage]}
            alt=""
          />
          <div className="flex justify-between mt-8">
            {currentProduct.images.thumbnails.map((image, index) => {
              return (
                <img
                  className="rounded-xl"
                  key={index}
                  src={image}
                  alt=""
                  width={100}
                  onClick={() => setCurrentImage(index)}
                />
              );
            })}
          </div>
        </div>

        <section className="p-16">
          <p className="uppercase text-sm font-bold text-DarkGrayishBlue">
            {currentProduct.company}
          </p>
          <h1 className="text-VeryDarkBlue text-6xl font-bold mt-6">{currentProduct.name}</h1>
          <p className="mt-12 text-DarkGrayishBlue text-lg">{currentProduct.description}</p>
          <h2 className="font-bold text-4xl mt-8 inline-block">
            ${((currentProduct.price * currentProduct.discount) / 100).toFixed(2)}
          </h2>
          <p className="bg-VeryDarkBlue text-White w-min py-1 text-lg font-bold px-3 rounded-lg inline ml-6">
            {currentProduct.discount}%
          </p>
          <p className="text-DarkGrayishBlue line-through font-bold text-lg mt-2">
            ${currentProduct.price.toFixed(2)}
          </p>
          {/* which is the price before discount */}
          <div className="flex mt-8">
            <div className="flex w-48 justify-between bg-LightGrayishBlue p-4 text-VeryDarkBlue text-lg font-bold rounded-lg items-center">
              <QuantityButton
                img={IconMinus}
                ariaLabel={`Decrease quantity of ${currentProduct.name}`}
              />
              0
              <QuantityButton
                img={IconPlus}
                ariaLabel={`Increase quantity of ${currentProduct.name}`}
              />
            </div>

            <button className="w-80 bg-Orange flex justify-center items-center text-xl rounded-lg ml-6 font-extrabold text-VeryDarkBlue">
              <img
                src={IconCart}
                alt=""
                aria-label={`Add ${currentProduct.name} to cart.`}
                className="pr-4"
              />
              Add to cart
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
