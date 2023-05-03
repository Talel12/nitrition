import React, { useState } from "react";
import DatalistInput from "react-datalist-input";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { updateAppointment } from "../../../redux/rendezvousSlice/rendezvousSlice";
import { edituser } from "../../../redux/userSlice/userSlice";

function UpdateApointmentModal({ currentAppointment, setShowEditModal }) {
  const patientList = useSelector((store) =>
    store?.user?.userList
      ?.filter((user) => user.role === "patient")
      .map((el) => ({ id: el._id, value: `${el.CIN} - ${el.name}` }))
  );

  //     {
  //         id: 1,
  //         startAt: '2023-04-23T18:00:00.000Z',
  //         endAt: '2023-04-23T19:00:00.000Z',
  //         timezoneStartAt: 'Europe/Berlin', // optional
  //         summary: 'test',
  //         color: 'blue',
  //         calendarID: 'work'
  //     },

  //   const location=useLocation()
  //   const path=location.pathname
  const [startAt, setStartAt] = useState(currentAppointment?.startAt);
  const [endAt, setEndAt] = useState(currentAppointment?.endAt);
  const [summary, setSummary] = useState(currentAppointment?.summary);
  const [status, setStatus] = useState(currentAppointment?.status);
  const [patient, setPatient] = useState(currentAppointment?.patient);
  //   console.log('heeey',currentAppointment._id)

  const dispatch = useDispatch();
  const refresh = () => {
    window.location.reload();
  };
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
    dispatch(updateAppointment({ appointment: updatedAppointment }));
    setShowEditModal(false);
    // refresh();
  };

  const handleCloseButtonClick = () => {
    setShowEditModal(false);
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <h2>Update Appointment</h2>
        <div>
          <h2>Start At:</h2>
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
          <h2>End At:</h2>
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
          <select>
            <option>Scheduled</option>
            <option>Accepted</option>
            <option>Canceled</option>
          </select>
          <input
            type="text"
            autocomplete=""
            defaultValue={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <div>
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

        <button type="submit">Update</button>
        <button type="button" onClick={handleCloseButtonClick}>
          Close
        </button>
      </form>
    </div>
  );
}

export default UpdateApointmentModal;
