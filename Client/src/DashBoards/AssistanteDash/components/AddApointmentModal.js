import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addAppointment } from "../../../redux/rendezvousSlice/rendezvousSlice";
import DatalistInput from "react-datalist-input";

function AddApointmentModal({ setShowAddModal }) {
  // const patientId = useSelector((store) => store?.user?.user?._id);
  const patientList = useSelector((store) =>
    store?.user?.userList
      ?.filter((user) => user.role === "patient")
      .map((el) => ({ id: el._id, value: `${el.CIN} - ${el.name}` }))
  );
  const [startAT, setStartAt] = useState("");
  const [endAt, setEndAt] = useState("");

  const [summary, setSummary] = useState("");
  const [status, setStatus] = useState("Scheduled");
  const [patient, setPatient] = useState(null);

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
    dispatch(addAppointment({ ...newappointment }));
    setShowAddModal(false);
    setTimeout(() => {
      refresh();
    }, 1000);
  };

  const handleCloseButtonClick = () => {
    setShowAddModal(false);
  };

  return (
    <div
      classsName="modal"
      //  style={{ width: "70%", padding: 30 }}
    >
      {" "}
      <h2>Ajouter un rendez-vous</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <h2>Debut de consultation:</h2>
            <input
              // value={startAt.substr(0, 19)}
              min={new Date()
                .toISOString()
                .slice(0, new Date().toISOString().lastIndexOf(":"))}
              type="datetime-local"
              autoComplete=""
              placeholder="Start Date"
              onChange={(e) => {
                setStartAt(e.target.value);
              }}
            />
          </div>
          <div>
            <h2>Fin de consultation:</h2>
            <input
              type="datetime-local"
              min={new Date()
                .toISOString()
                .slice(0, new Date().toISOString().lastIndexOf(":"))}
              onChange={(e) => {
                setEndAt(e.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <div>
            <h2>Note:</h2>
            <input
              type="text"
              autoComplete=""
              onChange={(e) => setSummary(e.target.value)}
            />
          </div>
          <div>
            <h2>Status:</h2>
            <span>Modifier : </span>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="Scheduled">En Cours</option>
              <option value="Accepted">Confirmer</option>
              <option value="Cancelled">Annuler</option>
            </select>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h2>Patient:</h2>
            <DatalistInput
              style={{ color: "gray" }}
              placeholder="Patient"
              label="Selectionner Patient"
              onSelect={(item) => {
                setPatient(item.id);
              }}
              items={patientList}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
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
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddApointmentModal;
