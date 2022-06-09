import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Products from "../../Pages/Products/Products";

export default function Home() {
  return (
    <div>
      <div className="home">
        <h2>Carousel</h2>
        <Carousel />
      </div>
      <Products />
    </div>
  );
}
