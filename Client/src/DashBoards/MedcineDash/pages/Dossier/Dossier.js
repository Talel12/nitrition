import React, { useState, useEffect } from "react";
import MedcineDashHeader from "../../components/MedcineDashHeader/MedcineDashHeader";

import { useSelector } from "react-redux";
import { calculateRange, sliceData } from "../../utils/table-pagination";

import "../MedPagesStyles.css";
import DoneIcon from "../../assets/icons/done.svg";
import CancelIcon from "../../assets/icons/cancel.svg";
import RefundedIcon from "../../assets/icons/refunded.svg";
import DossierIcon from "../../../../assets/img/folder-icon.svg";

function Dossier() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState([]);
  const [patient, setPatient] = useState([]);

  // Get the updated userList state from the Redux store
  const usersList = useSelector((state) => state.user.userList);
  // Filter the userList to get only the users who have a role of "patient"
  const patientsList = usersList.filter((user) => user.role === "patient");

  useEffect(() => {
    setPagination(calculateRange(patientsList, 5));
    setPatient(sliceData(patientsList, page, 5));
  }, []);

  // Search
  const __handleSearch = (event) => {
    setSearch(event.target.value);
    if (event.target.value !== "") {
      let search_results = patientsList.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.LastName.toLowerCase().includes(search.toLowerCase())
      );
      setPatient(search_results);
    } else {
      __handleChangePage(1);
    }
  };

  // Change Page
  const __handleChangePage = (new_page) => {
    setPage(new_page);
    setPatient(sliceData(patientsList, new_page, 5));
  };

  return (
    <div className="MedcineDash-content">
      <MedcineDashHeader />

      <div className="MedcineDash-content-container">
        <div className="MedcineDash-content-header">
          <h2>Dossiers</h2>
          <div className="MedcineDash-content-search">
            <input
              type="text"
              value={search}
              placeholder="Rechercher.."
              className="MedcineDash-content-input"
              onChange={(e) => __handleSearch(e)}
            />
          </div>
        </div>

        <table>
          <thead>
            <th>ID</th>
            <th>PATIENT</th>
            <th>CIN</th>
            <th>DOSSIER</th>
            <th>SUPPRIMER</th>
          </thead>

          {patient.length !== 0 ? (
            <tbody>
              {patient.map((user, index) => (
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
                      >
                        <img src={DossierIcon} width={30} />
                      </button>
                    </span>
                  </td>
                  <td>
                    <span>
                      <button className="supp-grad" style={{ padding: 10 }}>
                        Supprimer
                      </button>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : null}
        </table>

        {patient.length !== 0 ? (
          <div className="MedcineDash-content-footer">
            {pagination.map((item, index) => (
              <span
                key={index}
                className={item === page ? "active-pagination" : "pagination"}
                onClick={() => __handleChangePage(item)}
              >
                {item}
              </span>
            ))}
          </div>
        ) : (
          <div className="s-content-footer">
            <span className="empty-table">No data</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dossier;
