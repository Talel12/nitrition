import React from "react";
import { Link } from "react-router-dom";

import "./AssSideStyles.css";

const AssistanteSidebaritem = ({ item, active }) => {
  return (
    <Link
      to={item.path}
      className={
        active ? "Assistante-sidebar-item-active" : "Assistante-sidebar-item"
      }
    >
      <img
        src={item.icon}
        alt={`icon-${item.icon}`}
        className="Assistante-sidebar-item-icon"
      />
      <h1 className="Assistante-sidebar-item-label">{item.title}</h1>
    </Link>
  );
};
export default AssistanteSidebaritem;
