import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import DatalistInput from "react-datalist-input";

import { addMinutes } from "date-fns";
import { addAppointment } from "../../../redux/rendezvousSlice/rendezvousSlice";

function AddApointmentModal({ setShowAddModal }) {
  const patientList = useSelector((store) =>
    store?.user?.userList
      ?.filter((user) => user.role === "patient")
      .map((el) => ({ id: el._id, value: `${el.CIN} - ${el.name}` }))
  );
  const [startAT, setStartAT] = useState("");
  const [endAt, setEndAt] = useState("");

  const [summary, setSummary] = useState("");
  const [patient, setPatient] = useState("");

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
      patient: patient,
    };
    console.log(newappointment);
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
            autocomplete=""
            placeholder="Date"
            onChange={(e) => {
              setStartAT(e.target.value);
              setEndAt(addMinutes(new Date(e.target.value), 15).toISOString());
            }}
          />
        </div>

        <DatalistInput
          style={{ color: "gray" }}
          placeholder="Patient"
          label="Selectionner Patient"
          onSelect={(item) => {
            setPatient(item.id);
            setSummary(item.value);
          }}
          items={patientList}
        />

        {/* <div>
          <h3>Patient:</h3>
          <input
            type="email"
            autocomplete=""
            placeholder="Patient"
            onChange={(e) => setPatient(e.target.value)}
          />
        </div> */}
        <div>
          <h3>Note:</h3>
          <input //summary=Note
            type="text"
            defaultValue={summary}
            autocomplete=""
            placeholder="Note"
            onChange={(e) => setSummary(e.target.value)}
          />
        </div>

        {/* <div>
          <h3>Password:</h3>
          <input
            type="password"
            autocomplete="current-password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div> */}
        <button type="submit">Ajouter</button>
        <button type="button" onClick={handleCloseButtonClick}>
          Annuler
        </button>
      </form>
    </div>
  );
}

export default AddApointmentModal;
