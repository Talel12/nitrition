import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ComplimentCard from "./ComplimentCard";

const Compliment = () => {
  const dossier = useSelector((store) => store?.user?.user?.dossier || null);
  useEffect(() => {}, []);
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
