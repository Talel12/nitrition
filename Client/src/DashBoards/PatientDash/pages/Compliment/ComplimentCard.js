import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchConsultationbyID } from "../../../../redux/consultationSlice/consultationSlice";

const ComplimentCard = ({ dossier }) => {
  const consult = useSelector(
    (store) => store?.user?.user?.dossier.consultations[0]
  );
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(consult);
    if (consult) {
      dispatch(fetchConsultationbyID(consult));
    }
  }, []);

  const lastConsultation = useSelector(
    (store) => store?.consultation?.patientConsultation
  );
  return (
    <div style={{ color: "black" }}>
      <h2>Voutre dernier Consultation:</h2>
      <div
        style={{
          display: "flex",
          gap: 100,
        }}
      >
        <h2>Poids: {lastConsultation?.poid}</h2>
        <h2>Taille: {lastConsultation?.taille}</h2>
      </div>
      {lastConsultation?.prescription?.map((prescription, i) => (
        <div key={i} style={{ border: "1px solid red", margin: 10 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
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
  );
};

export default ComplimentCard;
