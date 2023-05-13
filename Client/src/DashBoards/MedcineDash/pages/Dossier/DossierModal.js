import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewPatientDossier,
  fetchPatientDossiersByID,
} from "../../../../redux/dossierSlice/dossierSlice";
import "./dossierModal.css";
import CancelIcon from "../../assets/icons/cancel.svg";
import ConsultationCard from "./ConsultationCard";

const DossierModal = ({ dossier, showModal }) => {
  const dispatch = useDispatch();

  const [newDossier, setnewDossier] = useState(null);
  const currentDossier = useSelector(
    (store) => store?.dossiers?.currentPatientDossier
  );

  useEffect(() => {
    // if (dossier.dosser) {
    dispatch(fetchPatientDossiersByID(dossier.dossier));
    // }
  }, [dispatch]);

  const refresh = () => {
    window.location.reload();
  };

  const handleSubmitDosier = (e) => {
    e.preventDefault(); // Prevent default action from bubbling up to the parent
    dispatch(
      addNewPatientDossier({
        patient: dossier._id,
        consultations: [],
        NCarnet: newDossier.NCarnet,
        notes: newDossier.note,
      })
    );
    setTimeout(() => {
      refresh();
    }, 1000);
  };
  return (
    <div className="modal-container">
      <h2>Dossier de Patient {dossier?.name}</h2>
      {!dossier.dossier ? (
        <div>
          <form
            action=""
            className="modal-creation"
            onSubmit={(e) => handleSubmitDosier(e)}
          >
            <input
              type="text"
              placeholder="Numero de Carnet"
              onChange={(e) =>
                setnewDossier({ ...newDossier, NCarnet: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Note"
              onChange={(e) =>
                setnewDossier({ ...newDossier, note: e.target.value })
              }
            />
            <input
              style={{
                width: 100,
                backgroundColor: "#C6A9FF",
                color: "white",
              }}
              type="submit"
              value="Creer un Dossier"
            />
          </form>
        </div>
      ) : (
        <div className="dossier-patient-container">
          <div className="dossier-pation-profil">
            <img
              src={dossier?.img}
              alt="patient image"
              srcset="https://d2pas86kykpvmq.cloudfront.net/images/humans-3.0/ava-1.png"
            />
            <h3>
              {dossier?.name} {dossier?.LastName}
            </h3>
            <h3>{dossier?.email}</h3>
            <h3>{dossier?.CIN}</h3>
            <h3>{currentDossier?.NCarnet}</h3>
            <p
              style={{
                marginTop: 10,
                textAlign: "center",
                fontSize: 16,
                lineHeight: 1.3,
              }}
            >
              {currentDossier?.notes}
            </p>
          </div>
          <div className="dossier-pation-consultation-container">
            <ConsultationCard />
            {currentDossier?.consultations?.map((consultation, index) => (
              <ConsultationCard consultation={consultation} />
            ))}
          </div>
        </div>
      )}

      <img
        className="close-modal-btn"
        onClick={() => showModal(false)}
        src={CancelIcon}
        alt="cancel"
      />
    </div>
  );
};

export default DossierModal;
