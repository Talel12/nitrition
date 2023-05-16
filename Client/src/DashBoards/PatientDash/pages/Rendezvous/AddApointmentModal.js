import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addMinutes } from "date-fns";
import { addAppointment } from "../../../../redux/rendezvousSlice/rendezvousSlice";

function AddApointmentModal({ setShowAddModal }) {
  const [startAT, setStartAT] = useState("");
  const [endAt, setEndAt] = useState("");
  const currentPatient = useSelector((store) => store?.user?.user);

  const [summary, setSummary] = useState("");

  const dispatch = useDispatch();

  const refresh = () => {
    window.location.reload();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newappointment = {
      startAt: startAT,
      endAt: endAt,
      summary: summary,
      patient: currentPatient?._id,
    };
    dispatch(addAppointment(newappointment));
    setShowAddModal(false);
    setTimeout(() => {
      refresh();
    }, 1000);
  };

  const handleCloseButtonClick = () => {
    setShowAddModal(false);
  };

  return (
    <div classsName="modal">
      <form onSubmit={handleSubmit}>
        <h2>Ajouter un rendez-vous</h2>
        <div>
          <h3>Date de rendez-vous:</h3>
          <input
            type="datetime-local"
            autoComplete=""
            placeholder="Date"
            onChange={(e) => {
              setStartAT(e.target.value);
              setEndAt(addMinutes(new Date(e.target.value), 15).toISOString());
            }}
          />
        </div>

        <div>
          <h3>Note:</h3>
          <input //summary=Note
            type="text"
            defaultValue={summary}
            autoComplete=""
            placeholder="Note"
            onChange={(e) => setSummary(e.target.value)}
          />
        </div>

        <button className="confirm-btn-primary" type="submit">
          Ajouter
        </button>
        <button
          className="cancel-btn-primary"
          type="button"
          onClick={handleCloseButtonClick}
        >
          Annuler
        </button>
      </form>
    </div>
  );
}

export default AddApointmentModal;
