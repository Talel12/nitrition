import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userRegister } from "../../../redux/userSlice/userSlice";

function AddUserModal({ setShowAddModal }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const refresh = () => {
    window.location.reload();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newuser = {
      name: name,
      LastName: lastName,
      email: email,
      password: password,
    };
    console.log(newuser)
    dispatch(userRegister( newuser ));
    setShowAddModal(false);
    refresh();
  };

  const handleCloseButtonClick = () => {
    setShowAddModal(false);
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <h2>Add User</h2>
        <div>
          <h3>Name:</h3>
          <input
            type="text"
            autocomplete=""
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <h3>Last Name:</h3>
          <input
            type="text"
            autocomplete=""
            placeholder="lastName"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <h3>Email:</h3>
          <input
            type="email"
            autocomplete=""
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <h3>Password:</h3>
          <input
            type="password"
            autocomplete="current-password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
        <button type="button" onClick={handleCloseButtonClick}>
          Close
        </button>
      </form>
    </div>
  );
}

export default AddUserModal;
