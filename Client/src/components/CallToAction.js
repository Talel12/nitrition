import React from "react";
import { Link } from "react-router-dom";
import "../styles/CallToAction.css";


const CallToAction = () => {
    return (
        <>
            <div className="call-to-action-area bg-image">
                <div className="container">
                    <h2>
                       Voulez-vouz Prendre Un Rendez Vous ? 
                    </h2>
                    <Link to="/signin">
                        <button className="btn-contact">
                           Connectez-vous <i className="fas fa-chevron-right"></i>
                        </button>
                    </Link>

                </div>
            </div>
        </>
    );
};

export default CallToAction;
