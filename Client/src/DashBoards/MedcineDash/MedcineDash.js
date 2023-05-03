import React from "react";
import { Outlet } from "react-router-dom";

import SideBar from "./components/Sidebar/MedSideBar";
import sidebar_menu from "./constants/sidebar-menu";

import "./MedcineDash.css";

function MedcineDash() {
  return (
    <div>
      {" "}
      <div className="MedcineDash-container">
        <SideBar menu={sidebar_menu} />

        <div className="MedcineDash-body">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MedcineDash;
