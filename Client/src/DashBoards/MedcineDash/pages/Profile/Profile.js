import React, { useState } from "react";
import "./profile.css";
import { useDispatch, useSelector } from "react-redux";
import { edituser } from "../../../../redux/userSlice/userSlice";
import { refresh } from "../../../../App";

const Profile = () => {
  const [newUser, setNewUser] = useState({});
  const user = useSelector((store) => store?.user?.user);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...user,
      ...newUser,
    };
    console.log(updatedUser);
    console.log(user._id);
    dispatch(edituser({ id: user._id, newuser: updatedUser }));
    refresh();
  };

  return (
    <div className="profile-container">
      <div className="profile-input-container">
        <form onSubmit={handleSubmit}>
          <input
            name="img"
            onChange={handleChange}
            placeholder="Url d'image "
          />
          <input name="name" onChange={handleChange} placeholder="Prénom" />
          <input name="LastName" onChange={handleChange} placeholder="Nom" />
          <input name="CIN" onChange={handleChange} placeholder="CIN" />

          <button
            type="submit"
            className="upd-grad"
            style={{ width: 200, alignSelf: "flex-end", margin: 20 }}
          >
            Mise à jour
          </button>
        </form>
      </div>
      <div className="profile-show">
        {/* <h2>Profile</h2> */}
        {/* <DataGridDemo /> */}
        <img src={user?.img} alt="" />
        <h3>{user?.name || "Prénom"}</h3>
        <h3>{user?.LastName || "Nom"}</h3>
        <h3>{user?.CIN}</h3>
        <h4>{user?.email}</h4>
      </div>
    </div>
  );
};

export default Profile;
