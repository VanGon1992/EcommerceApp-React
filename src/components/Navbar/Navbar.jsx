import React from "react";
import { NavLink } from "react-router-dom";
import "./navbarStyle.scss";
import LogoWebStore from "../../assets/img/LogoWebStore-02.png";

export default function Navbar() {
  return (
    <div>
      <nav className="navContainer">
        <NavLink to="/" className="logo">
          <img src={LogoWebStore} alt="imagenLogo"></img>
        </NavLink>

        <ul className="linkList">
          <NavLink to="/" className="linkComp">
            <li>Home</li>
          </NavLink>
          <NavLink to="/products" className="linkComp">
            <li>Products</li>
          </NavLink>
          <NavLink to="/aboutUs" className="linkComp">
            <li>AboutUs</li>
          </NavLink>
          <NavLink to="/contact" className="linkComp">
            <li>Contact</li>
          </NavLink>
        </ul>

        <div className="secondLinks">
          <NavLink to="/loginForm" className="linkComp">
            Login
          </NavLink>
          <NavLink to="/cart" className="linkComp">
            Cart
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
