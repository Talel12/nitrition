import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userlogi } from "../../../redux/userSlice/userSlice";
import logo from "../../Connexion/assets/LogoGreen.png";
import Input from "./Input";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userlogi(user));
    setTimeout(() => {
      navigate("/switch");
    }, 1000);
  };

  return (
    <div className="sidebar">
      {/* SignIn Componenet */}
      <div className="logoContainer">
        <img src={logo} alt="Rebel Programming" />
      </div>
      <div className="formContainer">
        <div>
          <h3>Sign In</h3>
          <form onSubmit={handleSubmit}>
            <Input
              handleChange={handleChange}
              name="email"
              type="email"
              placeholder="Email"
            />
            <Input
              handleChange={handleChange}
              name="password"
              type="password"
              placeholder="Password"
            />
            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
      <div>
        <h4>
          You Dont have an account?
          <Link to="/signup">
            <span> Sign Up</span>
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default SignIn;
