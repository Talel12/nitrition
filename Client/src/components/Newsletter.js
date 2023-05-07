import React, { useState } from "react";
import "../styles/Newsletter.css";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import emailjs from 'emailjs-com';


const MySwal = withReactContent(Swal);



const Newsletter = () => {

  const user = 'userID';
const service = 'service';
const template = 'template';
const emailjs_key = 'emailapi';

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
  const msgClient = {
    to_name: email,
    from_name: 'Manager',
    message: `Vous êtes maintenant inscrit au newsletters`,
    to_email: email 
  };
  const msgManager = {
    to_name: 'Manager Name',
    from_name: email,
    message: `${email} a inscrit au newsletters`,
    to_email: 'Manager Email' 
  };
  try {
    await emailjs.send(service, template, msgClient, user);
    await emailjs.send(service, template, msgManager, user);

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
                placeholder="Enter your email"
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
