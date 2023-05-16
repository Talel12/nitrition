import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { edituser } from "../../../redux/userSlice/userSlice";

function UpdateUserModal({ user, setShowUpdateModal }) {
  const location = useLocation();
  const path = location.pathname;
  const [name, setName] = useState(user.name);
  const [lastName, setLastName] = useState(user.LastName);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [CIN, setCIN] = useState(user.CIN);

  const dispatch = useDispatch();
  const refresh = () => {
    window.location.reload();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...user,
      name: name,
      LastName: lastName,
      email: email,
      password: password,
      CIN: CIN,
    };
    dispatch(edituser({ id: user._id, newuser: updatedUser }));
    setShowUpdateModal(false);
    setTimeout(() => {
      refresh();
    }, 600);
  };

  const handleCloseButtonClick = () => {
    setShowUpdateModal(false);
  };

  return (
    <div className="modal">
      <h2>Modifier Patient</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <h2>Prénom:</h2>
            <input
              type="text"
              autoComplete=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <h2>Nom:</h2>
            <input
              type="text"
              autoComplete=""
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div>
            <h2>Email:</h2>
            <input
              type="email"
              autoComplete=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              readOnly
            />
          </div>
          <div>
            <h2>CIN:</h2>
            <input
              type="number"
              autoComplete=""
              value={CIN}
              onChange={(e) => setCIN(e.target.value)}
            />
          </div>
        </div>
        {path.includes("profil") ? (
          <div>
            <h2>Mot de passe:</h2>
            <input
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        ) : null}
        <div>
          <button className="confirm-btn-primary" type="submit">
            Modifier
          </button>
          <button
            className="cancel-btn-primary"
            type="button"
            onClick={handleCloseButtonClick}
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateUserModal;
