import React from "react";
import { useLocation } from "react-router-dom";

const PatientArticleDetails = () => {
  const location = useLocation();
  const { title, img, body, source } = location?.state;
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <h2 style={{ textAlign: "center", paddingTop: 50 }}>{title}</h2>
      <img
        style={{
          width: "40vw",
          height: "20vw",
          objectFit: "contain",
          //   opacity: 0.1,
          //   position: "absolute",
          margin: "auto",
          alignSelf: "center",
          borderRadius: "15px",
        }}
        src={img}
        alt={title}
      />
      <div style={{ padding: 50 }}>
        <p
        //  style={{ width: "70%" }}
        >
          {body}
        </p>
        {source && (
          <a href={source} target="_blank">
            voir source
          </a>
        )}
      </div>
    </div>
  );
};

export default PatientArticleDetails;
