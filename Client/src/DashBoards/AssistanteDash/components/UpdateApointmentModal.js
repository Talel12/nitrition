import React, { useState } from "react";
import DatalistInput from "react-datalist-input";
import { useDispatch, useSelector } from "react-redux";
import { refresh } from "../../../App";
import { updateAppointment } from "../../../redux/rendezvousSlice/rendezvousSlice";

function UpdateApointmentModal({ currentAppointment, setShowEditModal }) {
  const patientList = useSelector((store) =>
    store?.user?.userList
      ?.filter((user) => user.role === "patient")
      .map((el) => ({
        id: el._id,
        value: `${el.CIN} - ${el.name} ${el.LastName}`,
      }))
  );

  //   const location=useLocation()
  //   const path=location.pathname
  const [startAt, setStartAt] = useState(currentAppointment?.startAt);
  const [endAt, setEndAt] = useState(currentAppointment?.endAt);
  const [summary, setSummary] = useState(currentAppointment?.summary);
  const [status, setStatus] = useState(currentAppointment?.status);
  const [patient, setPatient] = useState(currentAppointment?.patient);
  //   console.log('heeey',currentAppointment._id)

  const dispatch = useDispatch();
  // const refresh = () => {
  //   window.location.reload();
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedAppointment = {
      ...currentAppointment,
      startAt: startAt,
      endAt: endAt,
      summary: summary,
      status: status,
      patient: patient,
    };
    console.log(updatedAppointment);
    dispatch(updateAppointment(updatedAppointment));
    setShowEditModal(false);
    setTimeout(() => {
      refresh();
    }, 600);
  };

  const handleCloseButtonClick = () => {
    setShowEditModal(false);
  };

  return (
    <div className="modal">
      {" "}
      <h2>Modifier Rendez-vous</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <h2>Debut de consultation:</h2>
            <input
              value={startAt.substr(0, 19)}
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
              value={endAt.substr(0, 19)}
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
              defaultValue={summary}
              onChange={(e) => setSummary(e.target.value)}
              // disabled
            />
          </div>
          <div>
            <h2>Status:</h2>
            <p>"{status}"</p>
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
              value={`${currentAppointment.patient.CIN} - ${currentAppointment.patient.name} ${currentAppointment.patient.LastName}`}
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
              Modifier
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

export default UpdateApointmentModal;
