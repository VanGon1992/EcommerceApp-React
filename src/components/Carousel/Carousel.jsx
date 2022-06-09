import React, { useState, useEffect } from "react";
import { images } from "./CarouselData";
import "./carouselStyle.scss";

export default function Corousel2() {
  const [currImg, setCurrImg] = useState(0);
  const len = images.length - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrImg(currImg === len ? 0 : currImg + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [len, currImg]);

  return (
    <div className="carousel">
      <img
        src={images[currImg].img}
        alt="Imagenes"
        className="imagenSlide"
      ></img>

      <div>
        <h2>{images[currImg].title}</h2>
        <h3>{images[currImg].subtitle}</h3>
      </div>

      <button
        onClick={() => {
          setCurrImg(currImg < 1 ? len : currImg - 1);
        }}
      >
        Prev{"<"}
      </button>
      <button
        onClick={() => {
          setCurrImg(currImg === len ? 0 : currImg + 1);
        }}
      >
        {">"}Next
      </button>
    </div>
  );
}
