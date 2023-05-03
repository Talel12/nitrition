import React, { useState, useEffect } from "react";
import AssistanteDashHeader from "../../components/AssistanteDashHeader/AssistanteDashHeader";

import { calculateRange, sliceData } from "../../utils/table-pagination";

import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../../redux/userSlice/userSlice";

import "../AssPagesStyles.css";
import DoneIcon from "../../assets/icons/done.svg";
import CancelIcon from "../../assets/icons/cancel.svg";
import RefundedIcon from "../../assets/icons/refunded.svg";

function Dossier() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState([]);
  const [patient, setPatient] = useState([]);

  const dispatch = useDispatch();

  // Dispatch the getAllUsers action to fetch all the users on component mount
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

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
    <div className="AssistanteDash-content">
      <AssistanteDashHeader />

      <div className="AssistanteDash-content-container">
        <div className="AssistanteDash-content-header">
          <h2>Dossiers List</h2>
          <div className="AssistanteDash-content-search">
            <input
              type="text"
              value={search}
              placeholder="Search.."
              className="AssistanteDash-content-input"
              onChange={(e) => __handleSearch(e)}
            />
          </div>
        </div>

        <table>
          <thead>
            <th>ID</th>
            <th>COSTUMER</th>
            <th>Creation Date</th>
            <th>UPDATE</th>
            <th>DELETE</th>
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
                    <span>date</span>
                  </td>
                  <td>
                    <span>
                      <button className="upd-grad">Modifier</button>
                    </span>
                  </td>
                  <td>
                    <span>
                      <button className="supp-grad">Supprimer</button>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : null}
        </table>

        {patient.length !== 0 ? (
          <div className="AssistanteDash-content-footer">
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
          <div className="AssistanteDash-content-footer">
            <span className="empty-table">No data</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dossier;
