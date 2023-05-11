import React from "react";
import "./dossierModal.css";

const DossierModal = ({ dossier, showModal }) => {
  return (
    <div className="modal-container">
      <h2>{dossier.name}</h2>
      {dossier.dossier ? "votre dossier" : "cree un dossier"}
      <button onClick={() => showModal(false)}>Cancel</button>
    </div>
  );
};

export default DossierModal;
