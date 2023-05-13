import React from "react";
import appoinment from "../images/appoinment.jpg";
import ring1 from "../assets/img/ring_orange.svg";
import message1 from "../assets/img/message_pink.svg";
import message2 from "../assets/img/message_blue.svg";
import "../styles/HeaderContent.css";
import { Link } from "react-router-dom";

const HeaderContent = () => {
  return (
    <>
      <div className="HeaderContent">
        <div className="left-content">
          <div className="left-text-container">
            <h1 data-aos="zoom-in-right">
              Pourquoi Prendre rendez-vous avec Mon Docteur ?{" "}
            </h1>
            <p className="white">
              Avec Mon Docteur Prenez rendez-vous en ligne avec votre
              Nutritionniste
            </p>
            <Link to={"/signin"}>
              <button className="btn-rdv">
                <span>réserver un rendez-vous</span>
                <i className="fas fa-arrow-right"></i>
              </button>
            </Link>
          </div>
        </div>
        <div className="right-content">
          <img src={appoinment} alt="" className="phone" />
          <img src={ring1} alt="" className="ring1" />
          <img src={message1} alt="" className="message1" />
          <img src={message2} alt="" className="message2" />
        </div>
      </div>
    </>
  );
};

export default HeaderContent;
