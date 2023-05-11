import React, { useState } from "react";
import "./profile.css";
import DataGridDemo from "../../components/DataGrid/DataGrid";
import { useDispatch, useSelector } from "react-redux";
import { edituser } from "../../../../redux/userSlice/userSlice";
import { refresh } from "../../../../App";


const Profile = () => {
  const user = useSelector((store) => store?.user?.user);


  const [newUser, setNewUser] = useState(user);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(edituser({ id: user._id, newuser: newUser }));
    refresh();
  };

  http: return (
    <div className="profile-container">
      <div className="profile-input-container">
        <form onSubmit={handleSubmit}>
          <input name="img" onChange={handleChange} placeholder="Url d'image" />
          <input name="name" onChange={handleChange} placeholder="Prénom" />
          <input name="LastName" onChange={handleChange} placeholder="Nom" />
          <input name="CIN" onChange={handleChange} placeholder="CIN" />

          <button
            type="submit"
            className="upd-grad"
            style={{ width: 200, alignSelf: "flex-end", margin: 20 }}
          >
            Modifier
          </button>
        </form>
      </div>
      <div className="profile-show">
        {/* <h2>Profile</h2> */}
        {/* <DataGridDemo /> */}

        <img src={user?.img} />
        <h3>{user?.name || "Prenom"}</h3>
        <h3>{user?.LastName || "Nom"}</h3>
        <h3>{user?.CIN}</h3>

        <h4>{user?.email}</h4>
      </div>
    </div>
  );
};

export default Profile;
