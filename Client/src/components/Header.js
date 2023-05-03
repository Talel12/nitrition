import React from "react";
import "../styles/Header.css";

import HeaderContent from "../components/HeaderContent";
import Navigation from "../components/Navigation";

const Header = () => {
  return (
    <div id='header'>
      <div className="header-content">
        <Navigation />
        <HeaderContent />
      </div>
    </div>
  );
};


export default Header;
