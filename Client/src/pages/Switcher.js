import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import loading from "../images/loading.svg";

const Switcher = () => {
  const currentUser = useSelector((store) => store?.user?.user);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      currentUser?.role === "patient"
        ? navigate("/patientdash/rendezvous")
        : currentUser?.role === "medecin"
        ? navigate("/medcinedash")
        : currentUser?.role === "assistant"
        ? navigate("/assistantedash")
        : navigate("/signin");
    }, 1000);
  }, [currentUser?.role,navigate]);
  return (
    <div style={{ color: "black" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <img src={loading} alt="" />
      </div>
    </div>
  );
};

export default Switcher;
