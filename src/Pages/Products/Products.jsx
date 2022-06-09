import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../components/context/CartProvider";
import "./productsStyle.scss";

export default function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // setData(data);
        // setFilter(data);
        // setLoading(false);
        // console.log(data);
        if (mounted) {
          setData(data);
          setFilter(data);
          setLoading(false);
          console.log(data);
        }
      });
    return function cleanUp() {
      mounted = false;
    };
  }, []);

  const Loading = () => {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  };

  const filterProduct = (categ) => {
    const updatedList = data.filter((item) => item.category === categ);
    setFilter(updatedList);
    console.log(updatedList);
  };

  const handleChange = (ev) => {
    setBusqueda(ev.target.value);
    filtrar(ev.target.value);
    console.log("Busqueda" + ev.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = data.filter((elemento) => {
      if (
        elemento.title
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      } else {
        return false;
      }
    });
    setFilter(resultadosBusqueda);
  };

  const ShowProducts = () => {
    return (
      <>
        {filter.map((product) => {
          return (
            <div className="cardContainer" key={product.id}>
              <img src={product.image} alt={product.title}></img>

              <h3 className="cardTitle">{product.title}</h3>
              <p className="cardPrice">{product.price}€</p>
              <div>
                <NavLink
                  to={`/product/${product.id}`}
                  type="submit"
                  className="linkCart"
                >
                  Details
                </NavLink>
                <button
                  onClick={() => addToCart(product)}
                  type="submit"
                  className="linkCart"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="productsTitulo">
        <h2>Know all our new products !!</h2>
      </div>

      <div className="buscadorYfiltros">
        <div className="buscador">
          <input
            value={busqueda}
            placeholder="Search"
            onChange={handleChange}
          ></input>
          <button type="submit">Search</button>
        </div>
        <div className="botonesFilter">
          <button onClick={() => setFilter(data)}>All</button>
          <button onClick={() => filterProduct("men's clothing")}>Men</button>
          <button onClick={() => filterProduct("women's clothing")}>
            Women
          </button>
          <button onClick={() => filterProduct("jewelery")}>Jewelery</button>
          <button onClick={() => filterProduct("electronics")}>
            Electronic
          </button>
        </div>
      </div>
      <div>
        <div className="productsContainer">
          {loading ? (
            <Loading />
          ) : (
            <ShowProducts className="productsContainer" />
          )}
        </div>
      </div>
    </div>
  );
}
