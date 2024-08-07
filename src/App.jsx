import { useState } from "react";
import Header from "./components/Header";

const currentProduct = {
  company: "Sneaker Company",
  name: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outside sole, they'll withstand everything the weather can offer.",
  price: 250.0,
  discount: 50,
  images: {
    big: [
      "../src/assets/images/image-product-1.jpg",
      "../src/assets/images/image-product-2.jpg",
      "../src/assets/images/image-product-3.jpg",
      "../src/assets/images/image-product-4.jpg",
    ],
    thumbnails: [
      "../src/assets/images/image-product-1-thumbnail.jpg",
      "../src/assets/images/image-product-2-thumbnail.jpg",
      "../src/assets/images/image-product-3-thumbnail.jpg",
      "../src/assets/images/image-product-4-thumbnail.jpg",
    ],
  },
};

function App() {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <>
      <Header />

      <main>
        <div>
          <img src={currentProduct.images.big[currentImage]} alt="" />
          <div>
            {currentProduct.images.thumbnails.map((image, index) => {
              return <img key={index} src={image} alt="" onClick={() => setCurrentImage(index)} />;
            })}
          </div>
        </div>

        <section>
          <p>{currentProduct.company}</p>
          <h1>{currentProduct.name}</h1>
          <p>{currentProduct.description}</p>
          <h2>{/* currentProduct.price * discount */}$125.00</h2>
          <p>{currentProduct.discount}%</p>
          <p>{currentProduct.price}</p> {/* which is the price before discount */}
          <div>
            <div>
              <button>➖</button>0<button>➕</button>
            </div>

            <button>🛒 Add to cart</button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
