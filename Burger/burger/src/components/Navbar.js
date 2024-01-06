import React from "react";
import Burgerlogo from "../assets/burgerlogo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="main">
        <img src={Burgerlogo} alt="" />
      </div>
      <div className="mainLink">
        <Link to="/">AnaSayfa</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">Hakkımızda</Link>
        <Link to="/contact">İletişim</Link>
      </div>
    </div>
  );
}

export default Navbar;
