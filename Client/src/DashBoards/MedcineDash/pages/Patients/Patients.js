import React, { useState, useEffect } from "react";
import MedcineDashHeader from "../../components/MedcineDashHeader/MedcineDashHeader";
import UpdateUserModal from "../../components/UpdateUserModal";
import { calculateRange, sliceData } from "../../utils/table-pagination";
import { useDispatch, useSelector } from "react-redux";
import { deleteuser } from "../../../../redux/userSlice/userSlice";

import "../MedPagesStyles.css";

function Patients() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState([]);
  const [patient, setPatient] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const dispatch = useDispatch();

  // Get the updated userList state from the Redux store
  const usersList = useSelector((state) => state.user.userList);
  // Filter the userList to get only the users who have a role of "patient"
  const patientsList = usersList.filter((user) => user.role === "patient");

  useEffect(() => {
    setPagination(calculateRange(patientsList, 5));
    if (patient?.length === 0) {
      setPatient(sliceData(patientsList, page, 5));
    }
  }, [patient, page]);

  // Search
  const handleSearch = (event) => {
    setSearch(event.target.value);
    if (event.target.value !== "") {
      let search_results = patientsList.filter(
        (item) =>
          item?.name.toLowerCase().includes(search.toLowerCase()) ||
          item?.email.toLowerCase().includes(search.toLowerCase()) ||
          item?.CIN.toLowerCase().includes(search.toLowerCase())
      );
      setPatient(search_results);
    } else {
      handleChangePage(1);
    }
  };

  // Change Page
  const handleChangePage = (new_page) => {
    setPage(new_page);
    setPatient(sliceData(patientsList, new_page, 5));
  };

  // Handle the click event on the "Modifier" button
  const handleUpdateButtonClick = (user) => {
    setSelectedUser(user);
    setShowUpdateModal(true);
  };

  const refresh = () => {
    window.location.reload();
  };

  return (
    <div className="MedcineDash-content">
      {showUpdateModal === true ? (
        <UpdateUserModal
          setShowUpdateModal={setShowUpdateModal}
          user={selectedUser}
        />
      ) : (
        <>
          <MedcineDashHeader btnText="Ajouter un Patient" />

          <div className="MedcineDash-content-container">
            <div className="MedcineDash-content-header">
              <h2>Patients</h2>
              <div className="MedcineDash-content-search">
                <input
                  type="text"
                  value={search}
                  placeholder="Rechercher.."
                  className="MedcineDash-content-input"
                  onChange={(e) => handleSearch(e)}
                />
              </div>
            </div>

            <table>
              <thead>
                <th>ID</th>
                <th>PATIENT</th>
                <th>EMAIL</th>
                <th>MODIFIER</th>
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
                        <span>{user.email}</span>
                      </td>
                      <td>
                        <span>
                          <button
                            className="upd-grad"
                            onClick={() => {
                              handleUpdateButtonClick(user);
                            }}
                          >
                            Modifier
                          </button>
                        </span>
                      </td>
                      <td>
                        <span>
                          <button
                            className="supp-grad"
                            onClick={() => {
                              dispatch(deleteuser(user._id));
                              refresh();
                            }}
                          >
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
                    className={
                      item === page ? "active-pagination" : "pagination"
                    }
                    onClick={() => handleChangePage(item)}
                  >
                    {item}
                  </span>
                ))}
              </div>
            ) : (
              <div className="MedcineDash-content-footer">
                <span className="empty-table">No data</span>
              </div>
            )}
          </div>
        </>
      )}
      ;
    </div>
  );
}

export default Patients;
