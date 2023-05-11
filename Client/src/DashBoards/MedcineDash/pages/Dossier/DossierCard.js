import React, { useState } from "react";
import DossierIcon from "../../../../assets/img/folder-icon.svg";
import DossierModal from "./DossierModal";

const DossierCard = ({ user, index }) => {
  const [addDossierShowModal, setAddDossierShowModal] = useState(false);

  return (
    <>
      {addDossierShowModal && (
        <DossierModal dossier={user} showModal={setAddDossierShowModal} />
      )}
      <tr key={index}>
        <td>
          <span>{index}</span>
        </td>

        <td>
          <div>
            <img
              src={user.img}
              className="AssistanteDash-content-avatar"
              alt={user.name + " " + user.LastName}
            />
            <span>
              {user.name} {user.LastName}
            </span>
          </div>
        </td>
        <td>
          <span>{user?.CIN}</span>
        </td>
        <td>
          <span>
            {" "}
            <button
              className="upd-grad"
              style={{ padding: "10px 20px" }}
              onClick={() => {
                setAddDossierShowModal(true);
              }}
            >
              <img src={DossierIcon} width={30} />
            </button>
          </span>
        </td>
        {/* <td>
                    <span>
                      <button className="supp-grad" style={{ padding: 10 }}>
                        Supprimer
                      </button>
                    </span>
                  </td> */}
      </tr>
    </>
  );
};

export default DossierCard;
