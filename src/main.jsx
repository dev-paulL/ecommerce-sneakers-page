import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "./context/CartContext.jsx";
import ImageProvider from "./context/ImageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ImageProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ImageProvider>
  </React.StrictMode>
);
