import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import "../styles/Map.css";

var icon = L.icon({
  iconUrl: "https://img.icons8.com/plasticine/2x/marker.png",
  iconSize: [38, 45],
  iconAnchor: [19, 40],
  popupAnchor: [0, -30],
});

function Map() {
  const position = [33.8848669, 10.0999126];

  return (
    <div className="mapContainer">
      <MapContainer
        className="map"
        center={[33.8858669, 10.0999126]}
        zoom={17}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position} icon={icon}>
          <Popup>
            <div id="DoctorCard">
              <h2>
                Cabinet Nutritionniste <br /> Zaineb Kraiem
              </h2>
              <p>
                Tel : 75 220 809
                <br />
                81 Rue Mongi Slim (Immeuble Hedoui) , Gabès
                <br />
              </p>
              <img
                className="DoctorImG"
                src="https://scontent.ftun9-1.fna.fbcdn.net/v/t1.15752-9/336601514_1794790650908197_3704060002786267094_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=ZMP_BS_CAPcAX_hxZGH&_nc_ht=scontent.ftun9-1.fna&oh=03_AdQwgjQjMLrslavOoyDacW9ap3nwTRWmEOIha4GnPU-Etg&oe=643D21D3"
                alt=""
              />
            </div>{" "}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
