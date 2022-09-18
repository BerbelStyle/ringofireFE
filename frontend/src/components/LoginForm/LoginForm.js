/** @format */

import React, { useContext, useState } from "react";
import Axios from "axios";
import { UserContext } from "../../application/UserContext";
import { LanguageContext } from "../../application/Provider";
import "./styles/loginFormStyles.css";

const LoginForm = (props) => {
  const [language, setLanguage] = useContext(LanguageContext);
  let literals = require(`../../data/ringoffire-${language}.json`).literals;
  const { setUser } = useContext(UserContext);
  const [showRegistration, setShowRegistration] = useState(false);
  //Registration fields
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  //Login fields
  const [usernameLog, setUsernameLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");

  const Register = () => {
    Axios.post("http://localhost:5000/register", {
      username: usernameReg,
      password: passwordReg,
      userrole: "user",
    }).then((response) => {
      console.log(response);
    });
  };

  const Login = () => {
    Axios.post("http://localhost:5000/login", {
      username: usernameLog,
      password: passwordLog,
    }).then((response) => {
      if (response.data.rows[0]) {
        const user = response.data.rows[0];
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        window.location = "/";
      } else {
        console.log("error");
      }
    });
  };

  return (
    <>
      <div className="form-container">
        {showRegistration ? (
          <div className="form-login">
            <h1>{literals.registration}</h1>
            <label>{literals.username}</label>
            <input
              type="text"
              className="input-text"
              onChange={(e) => setUsernameReg(e.target.value)}
            />
            <label>{literals.password}</label>
            <input
              type="text"
              className="input-text"
              onChange={(e) => setPasswordReg(e.target.value)}
            />
            <div className="form-row-center">
              <button className="btn-send" onClick={Register}>
                {literals.register}
              </button>
              <div
                className="btn-send"
                style={{
                  border: "none",
                  textDecoration: "underline",
                  fontFamily: "'EB Garamond', serif",
                }}
                onClick={() => setShowRegistration(false)}
              >
                I have an account
              </div>
            </div>
          </div>
        ) : (
          <div className="form-login">
            <h1>{literals.login}</h1>
            <input
              type="text"
              className="input-text"
              placeholder={literals.username}
              onChange={(e) => setUsernameLog(e.target.value)}
            />
            <input
              type="password"
              className="input-text"
              placeholder={literals.password}
              onChange={(e) => setPasswordLog(e.target.value)}
            />
            <div className="form-row-center">
              <button className="btn-send" onClick={Login}>
                {literals.login}
              </button>
              <div
                className="btn-send"
                style={{
                  border: "none",
                  textDecoration: "underline",
                  fontFamily: "'EB Garamond', serif",
                }}
                onClick={() => setShowRegistration(true)}
              >
                Create an account
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LoginForm;
