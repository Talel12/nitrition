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
    console.log(newuser);
    dispatch(userRegister(newuser));
    setShowAddModal(false);
    refresh();
  };

  const handleCloseButtonClick = () => {
    setShowAddModal(false);
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <h2>Creer un Patient</h2>
        <div>
          <h3>Prénom:</h3>
          <input
            type="text"
            autocomplete=""
            placeholder="Prénom"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <h3>Nom:</h3>
          <input
            type="text"
            autocomplete=""
            placeholder="Nom"
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
          <h3>Mot de Passe:</h3>
          <input
            type="password"
            autocomplete="current-password"
            placeholder="mot de passe"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Ajouter</button>
        <button type="button" onClick={handleCloseButtonClick}>
          Annuler
        </button>
      </form>
    </div>
  );
}

export default AddUserModal;
