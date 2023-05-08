import React from "react";

import "./PatHeaderStyles.css";
import NotificationIcon from "../../assets/icons/notification.svg";
import SettingsIcon from "../../assets/icons/settings.svg";

function PatientDashHeader({ btnText, onClick }) {
  return (
    <div className="PatDash-header-container">
      {btnText && (
        <button className="PatDash-header-btn" onClick={onClick}>
          {btnText}
        </button>
      )}

      <div className="PatDash-header-right">
        <h3>Patient</h3>
        <img
          src={NotificationIcon}
          alt="notification-icon"
          className="PatDash-header-icon"
        />
        <img
          src={SettingsIcon}
          alt="settings-icon"
          className="PatDash-header-icon"
        />
        <img
          className="PatDash-header-avatar"
          src="https://reqres.in/img/faces/9-image.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default PatientDashHeader;
