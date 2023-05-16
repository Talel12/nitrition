import React, { useState } from "react";
import addSquareIcon from "../../../../assets/img/add-square.svg";
import ConsultationModal from "./ConsultationModal";
import CancelIcon from "../../assets/icons/cancel.svg";
import { useDispatch } from "react-redux";
import { refresh } from "../../../../App";
import { deleteConsultation } from "../../../../redux/consultationSlice/consultationSlice";

const ConsultationCard = ({ consultation = null, patient, patientDossier }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="consultation-card-container">
      {consultation ? (
        <div className="consultation-card" style={{ position: "relative" }}>
          <div
            style={{
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: 5,
              width: "100%",
              margin: "30px 10px",
            }}
          >
            <img
              style={{
                top: 10,
                right: 15,
                width: 30,
              }}
              className="close-modal-btn"
              onClick={() => {
                dispatch(deleteConsultation(consultation._id));
                setTimeout(() => {
                  refresh();
                }, 600);
              }}
              src={CancelIcon}
              alt="cancel"
            />
            <h4>Raison : {consultation?.reason}</h4>
            <p style={{ display: "flex", gap: 35, fontSize: 18 }}>
              <h4>Poids : {consultation?.poid} kg </h4>
              <h4>:</h4>
              <h4>Taille : {consultation?.taille} cm</h4>
              <h4>:</h4>
              <h4>
                Date : {consultation?.date.slice(0, 10)}
                {"  :  "}
                {consultation?.date.slice(11, 16)}{" "}
              </h4>{" "}
            </p>

            <h4>Note : {consultation?.notes}</h4>
          </div>
          {consultation?.prescription?.map((prescription, i) => (
            <div
              key={i}
              style={{
                border: "1px solid rgba(0,0,0,0.3)",
                margin: 10,
                padding: 30,
                borderRadius: 20,
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                minWidth: "100%",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>
                  <h4>Compliment :</h4> {prescription?.compliment}
                </span>

                <span>
                  <h4>Dosage :</h4>
                  {prescription?.dosage}
                </span>

                <span>
                  <h4>Instruction :</h4>
                  {prescription?.instructions}
                </span>
                <span>
                  <h4>Date de debut :</h4>
                  {prescription?.startDate}
                </span>
                <span>
                  <h4>Date de fin : </h4>
                  {prescription?.endDate}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          onClick={() => setShowModal(true)}
          className="add-consultaion-card-btn"
        >
          {showModal && (
            <ConsultationModal
              patient={patient}
              patientDossier={patientDossier}
              setShowModal={setShowModal}
            />
          )}
          <img src={addSquareIcon} alt="Add btn" />
          Ajouter une consultation
        </div>
      )}
    </div>
  );
};

export default ConsultationCard;
