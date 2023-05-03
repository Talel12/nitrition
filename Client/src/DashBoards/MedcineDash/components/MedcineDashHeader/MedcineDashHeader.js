import React, { useState } from "react";

import "./MedHeaderstyles.css";
import NotificationIcon from "../../assets/icons/notification.svg";
import SettingsIcon from "../../assets/icons/settings.svg";
import AddUserModal from "../AddUserModal";

function MedcineDashHeader({ btnText }) {
  const [showAddModal, setShowAddModal] = useState(false);

  // Handle the click event on the "Modifier" button
  const handleAddButtonClick = () => {
    setShowAddModal(true);
  };

  return (
    <div className="MedcineDash-header-container">
      {showAddModal === true ? (
        <AddUserModal setShowAddModal={setShowAddModal} />
      ) : (
        <>
          {btnText && (
            <button
              className="MedcineDash-header-btn"
              onClick={() => handleAddButtonClick()}
            >
              {btnText}
            </button>
          )}
          <div className="MedcineDash-header-right">
            <h3>Nutritionniste </h3>
            <img
              src={NotificationIcon}
              alt="notification-icon"
              className="MedcineDash-header-icon"
            />
            <img
              src={SettingsIcon}
              alt="settings-icon"
              className="MedcineDash-header-icon"
            />
            <img
              className="MedcineDash-header-avatar"
              src="https://reqres.in/img/faces/9-image.jpg"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default MedcineDashHeader;
