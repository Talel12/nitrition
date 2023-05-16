import React, { useState } from "react";

import "./PatHeaderStyles.css";
import { useSelector } from "react-redux";
import AddApointmentModal from "../../pages/Rendezvous/AddApointmentModal";

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

            <img
              className="PatDash-header-avatar"
              style={{ marginLeft: 20 }}
              src={user?.img}
              alt=""
            />
          </div>
        </>
      )}
    </div>
  );
}

export default PatientDashHeader;
