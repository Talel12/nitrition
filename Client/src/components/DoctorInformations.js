import React from "react";
import "../styles/DoctorInformations.css";
import { Swiper, SwiperSlide } from "swiper/react";

import Zeinebk from "../assets/img/zeineb2.jpeg";
import zaineb from "../assets/img/zaineb.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-flip";

import SwiperCore, { EffectFlip, Navigation } from "swiper";

SwiperCore.use([Navigation]);
SwiperCore.use([EffectFlip]);
const DoctorInformations = () => {
  return (
    <div id="card">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        effect="flip"
      >
        <SwiperSlide>
          <div className="card-container">
            <div className="card-left">
              <div className="imgContainer">
                <img src={zaineb} alt="" />
              </div>
            </div>
            <div className="card-right">
              <h2 className="secondary-heading">
                Diététicienne-Nutritionniste
              </h2>
              <p>
                Education Nutritionnelle Diététique thérapeutique Suivis
                nutritionnels du sportifs, femmes enceintes et allaitantes.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-container">
            <div className="card-right">
              <h2 className="secondary-heading">Zaineb Kraiem</h2>
              <h4>Diplômes et Formation:</h4>
              <p>2009-2010: Licence en Nutrition Humain</p>
              <p>
                2011-2012: Mastère Professionnel Contrôle de la Qualité et de la
                Sécurité des Aliments
              </p>
              <h4>Langues parlées</h4>
              <p>Français, Arabe</p>
              <h4>Pays d'exercice</h4>
              <p>Tunisie</p>
            </div>
            <div className="card-left">
              <div className="imgContainer">
                <img src={Zeinebk} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default DoctorInformations;
