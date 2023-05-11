import React from "react";
import SarraImage from "../../../../assets/img/Sarra.jpeg";
import CoachFooter from "../../../../components/CoachFooter";

const PatientCoach = () => {
  return (
    <div>
      <div
        style={{
          position: "relative",
          paddingBottom: "56.25%",
          height: 0,
          aspectRatio: "16/9",
          pointerEvents: "none",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <iframe
          style={{
            position: "absolute",
            top: 0,
            right: "-50%",
            width: "200%",
            height: "100%",
          }}
          width="100%"
          height="100%"
          src="https://www.youtube-nocookie.com/embed/1MugeX2WMhc?autoplay=1&mute=1&loop=1&color=white&controls=0&vq=hd720"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div style={{ position: "relative" }}>
        <div>
          <h2 style={{ padding: 30, fontSize: 30 }}>Coach Privé</h2>
        </div>
        <div style={{ width: "100%", height: 400, paddingLeft: 30 }}>
          <div>
            <h2>Thabti Sarra</h2>
            <h3>Coach du Fitness, votre coach sportif à Gabes</h3>
            <div>
              <h5>
                <ul
                  style={{
                    width: "100%",
                    padding: 20,
                    display: "flex",
                    justifyContent: "flex-start",
                    gap: 10,
                    flexDirection: "column",
                  }}
                >
                  <li>* Accompagnement personnalisé</li>
                </ul>
              </h5>
              <h3>
                110 Rue Montreal Cité Olympique Sidi Abouloubaba Gabes,
                <br /> Tunisie-Gabes
              </h3>
              <h3>+216 53 355 203</h3>
            </div>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.2,
                width: "50%",
                paddingTop: 20,
              }}
            >
              Vous êtes à la recherche d’un professionnel du bien-être pour un
              coaching sportif pour femme avec tonification et perte de poids à
              Gabes? Sarra vous propose des séances de sport adaptées à votre
              niveau pour retrouver un corps plein d’énergie. J’aide les femmes
              dans leur projet de remise en forme et de tonification avec un
              accompagnement personnalisé à 100 %.
            </p>
            <CoachFooter />
          </div>
          <div
            style={{
              position: "absolute",
              right: 20,
              top: 20,
              borderRadius: 20,
            }}
          >
            <img
              style={{ borderRadius: 20, marginRight: 50 }}
              width={320}
              src={SarraImage}
              alt=" "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientCoach;
