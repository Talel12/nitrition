import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./MedSidestyles.css";

const MedSideBarItem = ({ item, active }) => {
  const [hover, setHover] = useState(false);
  return (
    <Link
      to={item.path}
      className={
        active ? "Medcine-Sidebar-item-active" : "Medcine-Sidebar-item"
      }
    >
      <img
        src={item.icon}
        alt={`icon-${item.icon}`}
        className="Medcine-Sidebar-item-icon"
      />
      <h1 className="Medcine-Sidebar-item-label">{item.title}</h1>
    </Link>
  );
};
export default MedSideBarItem;
