import React, { useState } from "react";
import "../styles/Newsletter.css";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import emailjs from "emailjs-com";

const MySwal = withReactContent(Swal);

const Newsletter = () => {
  const user = "k7gVu6MbvICC6TiPI";
  const service = "service_ymehotv";
  const clientTemplate = "template_gffr5ra";
  const doctorTemplate = "template_lbcii91";
  const emailjs_key = "5F6URh4haQRifHYgHHBm7";

  emailjs.init(emailjs_key);
  const alertContent = () => {
    MySwal.fire({
      title: "Félicitations!",
      text: "Vous Recevrez Nos Actualités",
      icon: "success",
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  };
  const INITIAL_STATE = {
    email: "",
  };

  const [contact, setContact] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email } = contact;
    const ManagerName = "Zaineb Kraiem";
    const ManagerEmail = "Cabinetdrkraiemzaineb@gmail.com";

    const msgClient = {
      to_name: email,
      from_name: ManagerName,
      message: `Vous êtes maintenant inscrit au newsletters`,
      to_email: email,
    };
    const msgManager = {
      to_name: ManagerName,
      from_name: email,
      message: `${email} a inscrit au newsletters`,
      to_email: ManagerEmail,
    };
    try {
      await emailjs.send(service, clientTemplate, msgClient, user);
      await emailjs.send(service, doctorTemplate, msgManager, user);
      alertContent();
      setContact(INITIAL_STATE);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="newsletter-area">
        <div className="newsletter-inner-area">
          <div className="newsletter-content">
            <span className="sub-title">Commencez instantanément !</span>
            <h2>
              Inscrivez-vous à notre newsletter pour recevoir les dernières
              nouvelles sur votre Email{" "}
            </h2>

            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="form-control"
                placeholder="Entrer Votre Email"
                name="email"
                onChange={handleChange}
                required
              />
              <button className="btn-subscribe" type="submit">
                Inscrivez-vous !
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
