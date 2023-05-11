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
  console.log("heeey", user._id);

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
    console.log(updatedUser);
    console.log(user._id);
    dispatch(edituser({ id: user._id, newuser: updatedUser }));
    setShowUpdateModal(false);
    refresh();
  };

  const handleCloseButtonClick = () => {
    setShowUpdateModal(false);
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <h2>Modifier :</h2>
        <div>
          <h2>Prénom:</h2>
          <input
            type="text"
            autocomplete=""
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <h2>Nom:</h2>
          <input
            type="text"
            autocomplete=""
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <h2>Email:</h2>
          <input
            type="email"
            autocomplete=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            readOnly
          />
        </div>
        <div>
          <h2>CIN:</h2>
          <input
            type="number"
            autocomplete=""
            value={CIN}
            onChange={(e) => setCIN(e.target.value)}
          />
        </div>
        {path.includes("profil") ? (
          <div>
            <h2>Mot de passe:</h2>
            <input
              type="password"
              autocomplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        ) : null}

        <button type="submit">Modifier</button>
        <button type="button" onClick={handleCloseButtonClick}>
          Annuler
        </button>
      </form>
    </div>
  );
}

export default UpdateUserModal;
