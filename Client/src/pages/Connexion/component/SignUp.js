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
          <h3>S'inscrire</h3>
          <form onSubmit={handleSubmit}>
            {" "}
            {/* Enclose the inputs in a form element */}
            <Input
              name="name"
              handleChange={handleChange}
              placeholder="Prénom"
            />
            <Input
              name="LastName"
              handleChange={handleChange}
              placeholder="Nom"
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
              placeholder="Mot de passe"
            />
            <button type="submit">S'inscrire</button>
          </form>
        </div>
      </div>
      <div>
        <div className="Terms">
          En m'inscrivant, j'accepte la politique de confidentialité <br /> et
          les conditions d'utilisation
        </div>
        <h4>
          Vous avez déjà un compte?
          <Link to="/signin">
            <span>Se connecter</span>
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default SignUp;
