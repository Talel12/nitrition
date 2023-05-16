import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addMinutes } from "date-fns";
import { addAppointment } from "../../../redux/rendezvousSlice/rendezvousSlice";
import DatalistInput from "react-datalist-input";

function AddApointmentModal({ setShowAddModal }) {
  const patientId = useSelector((store) => store?.user?.user?._id);
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
    console.log(newappointment);
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
      {/* <form onSubmit={handleSubmit}>
        <div>
          <div>
            <h3>Date de rendez-vous:</h3>
            <input
              type="datetime-local"
              autocomplete=""
              placeholder="Date"
              onChange={(e) => {
                setStartAT(e.target.value);
                setEndAt(
                  addMinutes(new Date(e.target.value), 15).toISOString()
                );
              }}
            />
          </div>

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
      </form> */}
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <h2>Debut de consultation:</h2>
            <input
              // value={startAt.substr(0, 19)}
              type="datetime-local"
              autocomplete=""
              placeholder="Start Date"
              onChange={(e) => {
                setStartAt(e.target.value);
              }}
            />
          </div>
          <div>
            <h2>Fin de consultation:</h2>
            <input
              // value={endAt.substr(0, 19)}
              type="datetime-local"
              // autocomplete=""
              // placeholder="End Date"
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
              autocomplete=""
              // defaultValue={summary}
              onChange={(e) => setSummary(e.target.value)}
              // disabled
            />
          </div>
          <div>
            <h2>Status:</h2>
            {/* <p>"{status}"</p> */}
            <span>Modifier : </span>
            <select onChange={(e) => setStatus(e.target.value)}>
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
