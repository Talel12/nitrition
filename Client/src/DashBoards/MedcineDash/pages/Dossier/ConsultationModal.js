import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { refresh } from "../../../../App";
import { addConsultation } from "../../../../redux/consultationSlice/consultationSlice";
import PrescriptionModal from "./PrescriptionModal";

const ConsultationModal = ({ patient, patientDossier, setShowModal }) => {
  const dispatch = useDispatch();
  const [consultation, setConsultation] = useState({});
  const [prescription, setPrescription] = useState([]);

  const handleChange = (event) => {
    setConsultation({
      ...consultation,
      [event.target.name]: event.target.value,
    });
  };

  const submitConsultation = () => {
    dispatch(
      addConsultation({
        ...consultation,
        prescription: prescription,
        date: Date.now(),
        patient,
        patientDossier,
      })
    );
    setShowModal(false);
    setTimeout(() => {
      refresh();
    }, 600);
  };

  return (
    <>
      <div className="consultation-modal-container">
        <h2>Sauvegarder les renseignements de la consultation :</h2>
        <div className="consultation-modal-under-container">
          <div className="consultation-modal-form">
            <div>
              <p>Poids:</p>
              <input
                type="text"
                name="poid"
                value={consultation?.poid}
                id="poid"
                placeholder="Poids en kg"
                onChange={handleChange}
              />
            </div>
            <div>
              <p>Taille:</p>

              <input
                type="text"
                name="taille"
                id="taille"
                value={consultation?.taille}
                placeholder="Taille en cm"
                onChange={handleChange}
              />
            </div>
            <div>
              <p>Raison:</p>{" "}
              <input
                type="text"
                name="reason"
                id="reason"
                value={consultation?.reason}
                placeholder="Raison: (ex: Contrôle , consultation annuelle ... )"
                onChange={handleChange}
              />
            </div>

            <div>
              <p>Note:</p>
              <textarea
                style={{
                  padding: 10,
                  borderRadius: 15,
                  boxShadow: "0px 14px 9px -15px rgba(0, 0, 0, 0.25)",
                  backgroundColor: "#f5f5f5",
                  borderColor: "rgba(0, 0, 0, 0.3)",
                }}
                cols={30}
                rows={5}
                type="text"
                name="notes"
                id="note"
                value={consultation?.note}
                onChange={handleChange}
                placeholder="Note"
              />
            </div>
            <button className="confirm-btn" onClick={submitConsultation}>
              Sauvegarder
            </button>
          </div>
          <div className="consulation-prescription-container">
            {prescription.map((presc, i) => (
              <PrescriptionModal
                key={i + 1}
                index={i}
                presc={presc}
                prescription={prescription}
                setPrescription={setPrescription}
              />
            ))}
            <PrescriptionModal
              key={"Add"}
              prescription={prescription}
              setPrescription={setPrescription}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultationModal;
