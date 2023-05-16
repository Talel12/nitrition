import React from "react";
import { Link } from "react-router-dom";

import "./PatSideStyles.css";

const SideBarItem = ({ item, active }) => {
  return (
    <Link
      to={item.path}
      className={active ? "PatSidebar-item-active" : "PatSidebar-item"}
    >
      <img
        src={item.icon}
        alt={`icon-${item.icon}`}
        className="PatSidebar-item-icon"
      />
      <h1 className="PatSidebar-item-label">{item.title}</h1>
    </Link>
  );
};
export default SideBarItem;
