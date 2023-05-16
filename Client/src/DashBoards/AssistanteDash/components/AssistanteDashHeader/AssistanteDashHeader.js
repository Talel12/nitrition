import React, { useState } from "react";
// eslint-disable-next-line
import "./AssHeaderStyles.css";
import NotificationIcon from "../../assets/icons/notification.svg";
import SettingsIcon from "../../assets/icons/settings.svg";
import AddUserModal from "../AddUserModal";
import AddApointmentModal from "../AddApointmentModal";
import { useSelector } from "react-redux";

function AssistanteDashHeader({ btnText, eventTitle }) {
  const [showAddModal, setShowAddModal] = useState(false);
  const user = useSelector((store) => store?.user?.user);

  // Handle the click event on the "Modifier" button
  const handleAddButtonClick = () => {
    setShowAddModal(true);
  };
  return (
    <div className="AssistanteDash-header-container">
      {showAddModal === true ? (
        eventTitle === "appointment" ? (
          <div
            style={{
              width: "100%",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AddApointmentModal setShowAddModal={setShowAddModal} />
          </div>
        ) : (
          <AddUserModal setShowAddModal={setShowAddModal} />
        )
      ) : (
        <>
          {btnText && (
            <button
              className="AssistanteDash-header-btn"
              onClick={() => handleAddButtonClick()}
            >
              {btnText}
            </button>
          )}

          <div className="AssistanteDash-header-right">
            <h3>Assistant</h3>
            {/* <img
              src={NotificationIcon}
              alt="notification-icon"
              className="AssistanteDash-header-icon"
            />
            <img
              src={SettingsIcon}
              alt="settings-icon"
              className="AssistanteDash-header-icon"
            /> */}
            <img
              style={{ marginLeft: 20 }}
              className="AssistanteDash-header-avatar"
              src={user?.img}
              // src="https://reqres.in/img/faces/9-image.jpg"

              alt=""
            />
          </div>
        </>
      )}
    </div>
  );
}

export default AssistanteDashHeader;
