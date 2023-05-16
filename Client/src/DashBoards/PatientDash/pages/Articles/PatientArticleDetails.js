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
        padding: 30,
      }}
    >
      <h2 style={{ textAlign: "center", paddingTop: 50 }}>{title}</h2>

      <div style={{ display: "flex" }}>
        <img
          style={{
            width: "30vw",
            height: "80vh",
            objectFit: "cover",
            margin: "auto",
            alignSelf: "center",
            borderRadius: "15px",
          }}
          src={img}
          alt={title}
        />

        <div style={{ padding: 50, width: "60%" }}>
          <p>{body}</p>
          {source && (
            <a href={source} target="_blank">
              <span>voir source</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientArticleDetails;
