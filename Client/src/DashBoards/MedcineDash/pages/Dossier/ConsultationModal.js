import React from "react";

const ConsultationModal = () => {
  return (
    <div className="consultation-modal-container">
      <h2>Cree Nouveau Consultation:</h2>
      <input type="text" name="poid" id="poid" />
      <input type="text" name="taille" id="taille" />
      <input type="text" name="reason" id="reason" />
      <input type="text" name="note" id="note" />
    </div>
  );
};

export default ConsultationModal;
