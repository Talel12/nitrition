import React, { useState, useEffect } from "react";
import PatientDashHeader from "../../components/PatientDashHeader/PatientDashHeader";

import { useSelector } from "react-redux";
import { calculateRange, sliceData } from "../../utils/table-pagination";

import "../PatPagesStyles.css";
import DoneIcon from "../../assets/icons/done.svg";
import CancelIcon from "../../assets/icons/cancel.svg";
import RefundedIcon from "../../assets/icons/refunded.svg";

function Rendezvous() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState([]);

  const [rendv, setrendv] = useState([]);

  const current = useSelector((state) => state.user.user);

  // Get the updated userList state from the Redux store
  const rendezVousList = useSelector((state) => state.rendezvous.appointment);
  // Filter the userList to get only the users who have a role of "patient"
  const meRendezVous = useSelector((state) => state.user.user.rendezvous);

  useEffect(() => {
    setPagination(calculateRange(meRendezVous || [], 5));
    setrendv(sliceData(meRendezVous || [], page, 5));
  }, []);

  // Search
  const __handleSearch = (event) => {
    setSearch(event.target.value);
    if (event.target.value !== "") {
      let search_results = meRendezVous.filter(
        (item) =>
          item.status.toLowerCase().includes(search.toLowerCase()) ||
          item.startAt.toLowerCase().includes(search.toLowerCase()) ||
          item.summary.toLowerCase().includes(search.toLowerCase())
      );
      setrendv(search_results);
    } else {
      __handleChangePage(1);
    }
  };

  // Change Page
  const __handleChangePage = (new_page) => {
    setPage(new_page);
    setrendv(sliceData(meRendezVous, new_page, 5));
  };
  return (
    <div className="PatientDash-content">
      <PatientDashHeader btnText="Nouveau Rendez-vous" />

      <div className="PatientDash-content-container">
        <div className="PatientDash-content-header">
          <h2>Mes Rendez-vous</h2>
          <div className="PatientDash-content-search">
            <input
              type="text"
              value={search}
              placeholder="Rechercher..."
              className="PatientDash-content-input"
              onChange={(e) => __handleSearch(e)}
            />
          </div>
        </div>

        <table>
          <thead>
            <th>ID</th>
            <th>DATE</th>
            <th>L'HEURE</th>
            <th>NOTE</th>
            <th>ETAT</th>
          </thead>

          {meRendezVous?.length !== 0 ? (
            <tbody>
              {rendv?.map((rdv, index) => (
                <tr key={index}>
                  <td>
                    <span>{index}</span>
                  </td>

                  <td>
                    <div>
                      <span>{rdv?.startAt?.slice(0, 10)}</span>
                    </div>
                  </td>
                  <td>
                    <span>{rdv?.startAt?.slice(11, 16)}</span>
                  </td>
                  <td>
                    <span>{rdv.summary}</span>
                  </td>
                  <td>
                    <span>
                      <button className="supp-grad">{rdv.status}</button>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : null}
        </table>

        {rendv?.length !== 0 ? (
          <div className="MedcineDash-content-footer">
            {pagination?.map((item, index) => (
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

export default Rendezvous;
