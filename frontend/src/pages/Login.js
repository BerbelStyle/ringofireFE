/** @format */

import React, { useContext, useState } from "react";
import { UserContext } from "../application/UserContext";

import Footer from "../components/Footer/Footer";

const Home = () => {
  const [user, setUser] = useContext(UserContext);
  //Registration fields
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  //Login fields
  const [usernameLog, setUsernameLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");

  const Register = async () => {
    try {
      const body = {
        username: usernameReg,
        password: passwordReg,
        userrole: "user",
      };
      await fetch("http://localhost:5000/register", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  const Login = async () => {
    try {
      const body = { username: usernameLog, password: passwordLog };
      await fetch("http://localhost:5000/login", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <div className="form-container">
        <div className="registration">
          <h1>Registration</h1>
          <label>Username</label>
          <input type="text" onChange={(e) => setUsernameReg(e.target.value)} />
          <label>Password</label>
          <input type="text" onChange={(e) => setPasswordReg(e.target.value)} />
          <button onClick={Register}>Register</button>
        </div>
        <div className="login">
          <h1>Login</h1>
          <input
            type="text"
            placeholder="Username..."
            onChange={(e) => setUsernameLog(e.target.value)}
          />
          <input
            type="passowrd"
            placeholder="Password..."
            onChange={(e) => setPasswordLog(e.target.value)}
          />
          <button onClick={Login}>Login</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
