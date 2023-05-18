import React, { useState } from "react";

import "./MedHeaderstyles.css";
import AddUserModal from "../AddUserModal";
import { useSelector } from "react-redux";
import AddApointmentModal from "../../../AssistanteDash/components/AddApointmentModal";

function MedcineDashHeader({ btnText, eventTitle }) {
  const [showAddModal, setShowAddModal] = useState(false);
  const user = useSelector((store) => store?.user?.user);

  // Handle the click event on the "Modifier" button
  const handleAddButtonClick = () => {
    setShowAddModal(true);
  };

  return (
    <div className="MedcineDash-header-container">
      {showAddModal === true ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {eventTitle === "appointment" ? (
            <AddApointmentModal setShowAddModal={setShowAddModal} />
          ) : (
            <AddUserModal setShowAddModal={setShowAddModal} />
          )}
        </div>
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
            <h3>Dr. Zeineb Kraiem </h3>

            <img
              className="MedcineDash-header-avatar"
              style={{ marginLeft: 20 }}
              src={user?.img}
              alt="avatar"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default MedcineDashHeader;
