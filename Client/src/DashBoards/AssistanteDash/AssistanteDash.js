import React from "react";
import { Outlet } from "react-router-dom";

import SideBar from "./components/Sidebar/AssistanteSidebar";
import sidebar_menu from "./constants/sidebar-menu";

import "./AssistanteDash.css";

function AssistanteDash() {
  return (
    <div>
      {" "}
      <div className="AssistanteDash-container">
        <SideBar menu={sidebar_menu} />

        <div className="AssistanteDash-body">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AssistanteDash;
