import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchConsultationbyID } from "../../../../redux/consultationSlice/consultationSlice";

const ComplimentCard = ({ dossier }) => {
  const consult = useSelector(
    (store) => store?.user?.user?.dossier?.consultations[0]
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (consult) {
      dispatch(fetchConsultationbyID(consult));
    }
  }, []);

  const lastConsultation = useSelector(
    (store) => store?.consultation?.patientConsultation
  );
  return !consult ? (
    <div
      style={{
        width: "80vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h2>Liste de compliments est vide</h2>

      <h2>en attendant votre première consultation ...</h2>
    </div>
  ) : (
    <div style={{ color: "black", textAlign: "center" }}>
      <h2>Votre dernière Consultation:</h2>
      <div
        style={{
          marginTop: 20,
          display: "flex",
          gap: 100,
          justifyContent: "center",
        }}
      >
        <h4>Poids: {lastConsultation?.poid}</h4>
        <h4>Taille: {lastConsultation?.taille}</h4>
      </div>
      <div
        style={{
          marginTop: 30,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        {lastConsultation?.prescription?.map((prescription, i) => (
          <div
            key={i}
            style={{
              border: "1px solid rgba(0,0,0,0.3)",
              margin: 10,
              padding: 30,
              borderRadius: 20,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              width: "44%",
              gap: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
              }}
            >
              <span style={{ color: "#02a1d8" }}>
                <h4>Compliment :</h4> {prescription?.compliment}
              </span>

              <span style={{ color: "#02a1d8" }}>
                <h4>Dosage :</h4>
                {prescription?.dosage}
              </span>

              <span style={{ color: "#02a1d8" }}>
                <h4>Instruction :</h4>
                {prescription?.instructions}
              </span>
              <span style={{ color: "#02a1d8" }}>
                <h4>Date de debut :</h4>
                {prescription?.startDate}
              </span>
              <span style={{ color: "#02a1d8" }}>
                <h4>Date de fin : </h4>
                {prescription?.endDate}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComplimentCard;
