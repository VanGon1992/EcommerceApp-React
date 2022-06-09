import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { useCart } from "../../components/context/CartProvider";

export default function Product() {
  const { addToCart } = useCart();
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: "",
    category: "",
    rating: "",
    image: "",
    price: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
        console.log(data);
      });
  }, [id]);

  const Loading = () => {
    return <>Loading....</>;
  };

  const ShowProduct = () => {
    return (
      <>
        <div key={product.id}>
          <div>
            <img src={product.image} alt={product.title}></img>
          </div>
          <div>
            <h4>{product.category}</h4>
            <h1>{product.title}</h1>
            <p>Rating {product.rating && product.rating.rate}</p>
            <h3>{product.price}€</h3>
            <p>{product.description}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <NavLink to="/cart">Go to Cart</NavLink>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="productContainer">
        <div>{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
}
