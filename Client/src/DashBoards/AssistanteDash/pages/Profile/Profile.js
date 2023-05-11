import React, { useState } from "react";
import "./profile.css"
import {  useSelector } from "react-redux"

const Profile = () => {
  const [newUser, setNewUser] = useState({});
  const user = useSelector(store => store?.user?.user)


  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value })
  }

  return (
    <div className="profile-container">
      <div className="profile-input-container">
        <form>
          <input name="img" onChange={handleChange} placeholder="New Image Url" />
          <input name="name" onChange={handleChange} placeholder="First Name" />
          <input name="LastName" onChange={handleChange} placeholder="Last Name" />
          <input name="CIN" onChange={handleChange} placeholder="CIN" />

          <button type="submit" className="upd-grad" style={{ width: 200, alignSelf: "flex-end", margin: 20 }}>Update</button>
        </form>
      </div>
      <div className="profile-show">
        {/* <h2>Profile</h2> */}
        {/* <DataGridDemo /> */}
        <img src={user?.img} alt="" />
        <h3>{user?.name || "First Name"}</h3>
        <h3>{user?.LastName || "Last Name"}</h3>
        <h3>{user.CIN}</h3>
        <h4>{user?.email}</h4>
      </div>

    </div>
  );
};

export default Profile;
