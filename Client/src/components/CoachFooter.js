import React from "react";
import "../styles/Footer.css";
import facebook from "../images/facebook.png";

const CoachFooter = () => {
  return (
    <>
      <div className="footer">
        <section className="socials">
          {/* <h2>Nous contacter</h2> */}
          <div className="social_icons">
            <a href="https://instagram.com/sarrathabti?igshid=YmMyMTA2M2Y=">
              <img
                src="https://w7.pngwing.com/pngs/191/478/png-transparent-social-media-facebook-emoji-icon-instagram-icon-instagram-logo-text-rectangle-magenta-thumbnail.png"
                alt="insta"
              />
            </a>
            <a
              href="https://www.facebook.com/sarra.thabti?mibextid=ZbWKwL"
              target="blank"
            >
              <img src={facebook} alt="facebook" />
            </a>
            <a href="tel:+216 29 030 392">
              <img
                src="https://w7.pngwing.com/pngs/583/67/png-transparent-computer-icons-mobile-phones-blue-telephone-desktop-real-estate-miscellaneous-blue-text-thumbnail.png"
                alt="phone"
              />
            </a>

            {/* <a href="mailto:Kr.zeineb@gmail.com">
              <img
                src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
                alt="gmail"
              />
            </a> */}
          </div>
        </section>
      </div>
    </>
  );
};

export default CoachFooter;
