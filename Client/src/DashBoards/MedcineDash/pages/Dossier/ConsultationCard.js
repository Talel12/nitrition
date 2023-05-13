import React, { useState } from "react";
import addSquareIcon from "../../../../assets/img/add-square.svg";
import ConsultationModal from "./ConsultationModal";

const ConsultationCard = ({ consultation = null }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="consultation-card-container">
      {consultation ? (
        <div className="consultation-card">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <h5>{consultation?.reason}</h5>
            <h5>{consultation?.poid} kg</h5>
            <h5>{consultation?.taille} cm</h5>
            <h5>{consultation?.note}</h5>
            <h5>{consultation?.date}</h5>
          </div>
          {consultation?.prescription?.map((prescription, i) => (
            <div key={i} style={{ border: "1px solid red", margin: 10 }}>
              <div style={{ display: "flex" }}>
                <span>{prescription?.compliment}</span>
                <br />
                <span>{prescription?.dosage}</span>
                <br />
                <span>{prescription?.instructions}</span>
                <br />
                <span>{prescription?.startDate}</span>
                <br />
                <span>{prescription?.endDate}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          onClick={() => setShowModal(true)}
          className="add-consultaion-card-btn"
        >
          {showModal && <ConsultationModal setShowModal={setShowModal} />}
          <img src={addSquareIcon} alt="Add btn" />
          Add consultation
        </div>
      )}
    </div>
  );
};

export default ConsultationCard;
