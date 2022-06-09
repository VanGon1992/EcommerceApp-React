import React from "react";
import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./Pages/Products/Products";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Contact from "./Pages/Contact/Contact";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Cart from "./Pages/Cart/Cart";
import LoginForm from "./components/LoginForm/LoginForm";
import CartProvider from "./components/context/CartProvider";

function App() {
  return (
    <>
      <div className="mainContainer">
        <CartProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="aboutUs" element={<AboutUs />} />
              <Route path="contact" element={<Contact />} />
              <Route path="product/:id" element={<SingleProduct />} />
              <Route path="cart" element={<Cart />} />
              <Route path="loginForm" element={<LoginForm />} />
            </Routes>
          </Router>
        </CartProvider>
      </div>
    </>
  );
}

export default App;
