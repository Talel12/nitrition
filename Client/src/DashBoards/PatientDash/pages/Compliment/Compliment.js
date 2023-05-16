import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchConsultationbyID } from "../../../../redux/consultationSlice/consultationSlice";
import ComplimentCard from "./ComplimentCard";

const Compliment = () => {
  const dossier = useSelector((store) => store?.user?.user?.dossier || null);
  const dispatch = useDispatch();
  console.log(dossier);
  useEffect(() => {
    // dossier.consultaions
    // dispatch(fetchConsultationbyID(id));
  }, []);
  console.log(dossier);
  return (
    <div
      style={{
        padding: "30px 20px",
      }}
    >
      <ComplimentCard dossier={dossier} />
    </div>
  );
};

export default Compliment;
