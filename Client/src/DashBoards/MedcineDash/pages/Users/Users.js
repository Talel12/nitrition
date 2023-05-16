import React, { useState, useEffect } from "react";
import MedcineDashHeader from "../../components/MedcineDashHeader/MedcineDashHeader";

import { calculateRange, sliceData } from "../../utils/table-pagination";

import { useDispatch, useSelector } from "react-redux";

import "../MedPagesStyles.css";
import { edituser } from "../../../../redux/userSlice/userSlice";
import { refresh } from "../../../../App";

function Users() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState([]);
  const [Users, setUsers] = useState([]);

  const dispatch = useDispatch();

  // Get the updated userList state from the Redux store
  const usersList = useSelector((state) => state.user.userList);

  useEffect(() => {
    setPagination(calculateRange(usersList, 5));
    setUsers(sliceData(usersList, page, 5));
  }, [page, usersList]);

  // Search
  const __handleSearch = (event) => {
    setSearch(event.target.value);
    if (event.target.value !== "") {
      let search_results = usersList.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.LastName.toLowerCase().includes(search.toLowerCase()) ||
          item.email.toLowerCase().includes(search.toLowerCase())
      );
      setUsers(search_results);
    } else {
      __handleChangePage(1);
    }
  };

  // Change Page
  const __handleChangePage = (new_page) => {
    setPage(new_page);
    setUsers(sliceData(usersList, new_page, 5));
  };

  return (
    <div className="MedcineDash-content">
      <MedcineDashHeader />

      <div className="MedcineDash-content-container">
        <div className="MedcineDash-content-header">
          <h2>Utilisateurs</h2>
          <div className="MedcineDash-content-search">
            <input
              type="text"
              value={search}
              placeholder="Rechercher..."
              className="MedcineDash-content-input"
              onChange={(e) => __handleSearch(e)}
            />
          </div>
        </div>

        <table>
          <thead>
            <th>ID</th>
            <th>PATIENT</th>
            <th>EMAIL</th>
            <th>ROLE</th>
            <th>MODIFIER</th>
          </thead>

          {Users.length !== 0 ? (
            <tbody>
              {Users.map((user, index) => (
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
                    <h6>{user?.role}</h6>
                  </td>
                  <td>
                    <select
                      // defaultValue={user?.role}
                      onChange={(e) => {
                        dispatch(
                          edituser({
                            id: user._id,
                            newuser: { ...user, role: e.target.value },
                          }),
                          setTimeout(() => {
                            refresh();
                          }, 600)
                        );
                      }}
                    >
                      <option value="">Selectionner</option>
                      <option value="patient">Patient</option>
                      <option value="assistant">Assistant</option>
                      <option value="medecin">Medecin</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : null}
        </table>

        {Users.length !== 0 ? (
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
          <div className="MedcineDash-content-footer">
            <span className="empty-table">No data</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Users;
