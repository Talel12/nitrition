import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userRegister } from "../../../redux/userSlice/userSlice";
import logo from "../../Connexion/assets/LogoGreen.png";
import Input from "./Input";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent the default form submission
    dispatch(userRegister(user));
    setTimeout(() => {
      navigate("/switch");
    }, 1000);
  };

  return (
    <div className="sidebar">
      {/* SignUp Component */}
      <div className="logoContainer">
        <img src={logo} alt="Rebel Programming" />
      </div>
      <div className="formContainer">
        <div>
          <h3>Sign Up</h3>
          <form onSubmit={handleSubmit}> {/* Enclose the inputs in a form element */}
            <Input
              name="name"
              handleChange={handleChange}
              placeholder="First Name"
            />
            <Input
              name="LastName"
              handleChange={handleChange}
              placeholder="Last Name"
            />
            <Input
              name="email"
              type="email"
              handleChange={handleChange}
              placeholder="Email"
              onChange={handleChange}
            />
            <Input
              name="password"
              type="password"
              handleChange={handleChange}
              placeholder="Password"
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
      <div>
        <div className="Terms">
          By signing up, I agree to the Privacy Policy <br /> and Terms of Service
        </div>
        <h4>
          Already have an account?
          <Link to="/signin">
            <span> Sign In</span>
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default SignUp;
