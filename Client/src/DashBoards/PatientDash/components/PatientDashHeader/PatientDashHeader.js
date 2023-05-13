import React, { useState } from "react";

import "./PatHeaderStyles.css";
import NotificationIcon from "../../assets/icons/notification.svg";
import SettingsIcon from "../../assets/icons/settings.svg";
import { useSelector } from "react-redux";
import AddApointmentModal from "../../../AssistanteDash/components/AddApointmentModal";

function PatientDashHeader({ btnText, onClick }) {
  const [showModal, setShowModal] = useState(false);
  const user = useSelector((store) => store?.user?.user);

  return (
    <div className="PatDash-header-container">
      {showModal ? (
        <AddApointmentModal setShowAddModal={setShowModal} />
      ) : (
        <>
          {btnText && (
            <button
              className="PatDash-header-btn"
              onClick={() => setShowModal(true)}
            >
              {btnText}
            </button>
          )}

          <div className="PatDash-header-right">
            <h3>Patient</h3>
            {/* <img
          src={NotificationIcon}
          alt="notification-icon"
          className="PatDash-header-icon"
        />
        <img
          src={SettingsIcon}
          alt="settings-icon"
          className="PatDash-header-icon"
        /> */}

            <img
              className="PatDash-header-avatar"
              style={{ marginLeft: 20 }}
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

export default PatientDashHeader;
