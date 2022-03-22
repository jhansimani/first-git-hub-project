import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          Shop
        </Link>
        <Link to="/signin" className="option">
          Sign up
        </Link>
        <Link to="/cart" className="option">
          cart
        </Link>
        <Link to="bag" className="option">
          <ion-icon name="cart-outline"></ion-icon>
        </Link>
      </div>
    </div>
  );
};
export default Header;
