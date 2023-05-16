import React from "react";
import "./prescription.css";
import CancelIcon from "../../assets/icons/cancel.svg";

const PrescriptionModal = ({ setPrescription, prescription, presc, index }) => {
  const handleChange = (event) => {
    setPrescription(
      prescription.map((pre, i) =>
        i === index ? { ...pre, [event.target.name]: event.target.value } : pre
      )
    );
  };

  const handleCancel = (event) => {
    setPrescription(prescription.filter((pre, i) => pre.compliment !== event));
  };

  return (
    <div className="prescription-Modal-container">
      {presc ? (
        <div>
          <img
            src={CancelIcon}
            alt="cancel"
            onClick={() => handleCancel(presc.compliment)}
          />
          <h1>Compliment {index + 1}</h1>
          <div className="prescription-Modal-form">
            <input
              type="text"
              placeholder="compliment"
              name="compliment"
              onChange={handleChange}
              value={presc?.compliment}
            />
            <input
              type="text"
              placeholder="dosage"
              name="dosage"
              onChange={handleChange}
              value={presc?.dosage}
            />
            <input
              type="text"
              placeholder="instructions"
              name="instructions"
              onChange={handleChange}
              value={presc?.instructions}
              style={{ width: "93%", maxWidth: 700 }}
            />
            <input
              type="text"
              placeholder="Date de debut d'utilisation"
              name="startDate"
              onChange={handleChange}
              value={presc?.startDate}
            />
            <input
              type="text"
              placeholder="Date de fin d'utilisation"
              name="endDate"
              onChange={handleChange}
              value={presc?.endDate}
            />
          </div>
        </div>
      ) : (
        <>
          <p>Ajouter un Compliment :</p>
          <div
            className="prescription-card-add-btn"
            onClick={() => setPrescription(prescription.concat({}))}
          >
            <h1>+</h1>
          </div>
        </>
      )}
    </div>
  );
};

export default PrescriptionModal;
