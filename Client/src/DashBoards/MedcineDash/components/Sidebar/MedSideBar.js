import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import SideBarItem from "./MedSideBar-item";

import "./MedSidestyles.css";
import logo from "../../../../images/LogoGreen.png";
import LogoutIcon from "../../assets/icons/logout.svg";

function MedSideBar({ menu }) {
  const location = useLocation();

  const [active, setActive] = useState(1);

  useEffect(() => {
    menu.forEach((element) => {
      if (location.pathname === element.path) {
        setActive(element.id);
      }
    });
  }, [location.pathname,menu]);

  const __navigate = (id) => {
    setActive(id);
  };

  return (
    <nav className="Medcine-Sidebar">
      <div className="Medcine-Sidebar-container">
        <div className="Medcine-Sidebar-logo-container">
          <img src={logo} alt="logo" />
          {/* <h2>MedcineDash</h2> */}
        </div>

        <div className="Medcine-Sidebar-container">
          <div className="Medcine-Sidebar-items">
            {menu.map((item, index) => (
              <div key={index} onClick={() => __navigate(item.id)}>
                <SideBarItem active={item.id === active} item={item} />
              </div>
            ))}
          </div>

          <div
            className="Medcine-Sidebar-footer"
            onClick={() => {
              window.localStorage.removeItem("token");
              setTimeout(() => {
                window.location.replace("/signin");
              }, 600);
            }}
          >
            <h1 className="Medcine-Sidebar-item-label">Déconnexion</h1>
            <img
              src={LogoutIcon}
              alt="icon-logout"
              className="Medcine-Sidebar-item-icon"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MedSideBar;
