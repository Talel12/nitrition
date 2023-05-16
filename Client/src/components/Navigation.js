import React from "react";
import logo from "../images/LogoGreen.png";
import "../styles/Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="NavigationStyle">
      <div className="logoCountainer">
        <img className="logo" src={logo} alt="" />
      </div>
      <Link to={"/Signin"}>
        <button className="btn-signup">Se connecter</button>
      </Link>
    </div>
  );
};
export default Navigation;
