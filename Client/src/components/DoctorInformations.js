import React from "react";
import "../styles/DoctorInformations.css";
import { Swiper, SwiperSlide } from "swiper/react";

import Sarra from "../assets/img/Sarra.jpeg";
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
                <img
                  src={Sarra}
                  // src="https://scontent.ftun9-1.fna.fbcdn.net/v/t1.15752-9/336601514_1794790650908197_3704060002786267094_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=ZMP_BS_CAPcAX_hxZGH&_nc_ht=scontent.ftun9-1.fna&oh=03_AdQwgjQjMLrslavOoyDacW9ap3nwTRWmEOIha4GnPU-Etg&oe=643D21D3"
                  alt=""
                />
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
              <p>Français, L'arabe</p>
              <h4>Pays d'exercice</h4>
              <p>Tunisie</p>
            </div>
            <div className="card-left">
              <div className="imgContainer">
                <img
                  src={zaineb}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default DoctorInformations;
