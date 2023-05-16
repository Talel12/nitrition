import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import SideBarItem from "./AssistanteSidebar-item";

import "./AssSideStyles.css";
import logo from "../../../../images/LogoGreen.png";
import LogoutIcon from "../../assets/icons/logout.svg";

function AssistanteSidebar({ menu }) {
  const location = useLocation();

  const [active, setActive] = useState(1);

  useEffect(() => {
    menu.forEach((element) => {
      if (location.pathname === element.path) {
        setActive(element.id);
      }
    });
  }, [location.pathname, menu]);

  const __navigate = (id) => {
    setActive(id);
  };

  return (
    <nav className="Assistante-sidebar">
      <div className="Assistante-sidebar-container">
        <div className="Assistante-sidebar-logo-container">
          <img src={logo} alt="logo" />
          {/* <h2>AssistanteDash</h2> */}
        </div>

        <div className="Assistante-sidebar-container">
          <div className="Assistante-sidebar-items">
            {menu.map((item, index) => (
              <div key={index} onClick={() => __navigate(item.id)}>
                <SideBarItem active={item.id === active} item={item} />
              </div>
            ))}
          </div>

          <div
            className="Assistante-sidebar-footer"
            onClick={() => {
              window.localStorage.removeItem("token");
              setTimeout(() => {
                window.location.replace("/signin");
              }, 600);
            }}
          >
            <h1 className="Assistante-sidebar-item-label">Déconnexion</h1>
            <img
              src={LogoutIcon}
              alt="icon-logout"
              className="Assistante-sidebar-item-icon"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default AssistanteSidebar;
