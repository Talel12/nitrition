import React from "react";
import "../styles/Footer.css";
import facebook from "../images/facebook.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <section className="socials">
          <h2>Nous contacter</h2>
          <div className="social_icons">
            <a href="tel:+216 75 220 809">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3223/3223664.png"
                alt="phone"
              />
            </a>
            <a href="tel:+216 29 030 392">
              <img
                src="https://w7.pngwing.com/pngs/583/67/png-transparent-computer-icons-mobile-phones-blue-telephone-desktop-real-estate-miscellaneous-blue-text-thumbnail.png"
                alt="phone"
              />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100064469691680"
              target="blank"
            >
              <img src={facebook} alt="facebook" />
            </a>

            <a href="mailto:Kr.zeineb@gmail.com">
              <img
                src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
                alt="gmail"
              />
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
