import React from "react";
import { Outlet } from "react-router-dom";

import SideBar from "./components/Sidebar/PatSidebar";
import sidebar_menu from "./constants/sidebar-menu";

import "./PatientDash.css";

function PatientDash() {
  return (
    <div>
      {" "}
      <div className="PatientDash-container">
        <SideBar menu={sidebar_menu} />

        <div className="PatientDash-body">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default PatientDash;
