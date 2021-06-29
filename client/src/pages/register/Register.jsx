import { Fragment, useRef } from "react";
import "./register.css";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("passwords don't match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">WasSocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on WasSocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              ref={username}
              className="loginInput"
              required
            />
            <input
              placeholder="Email"
              type="email"
              ref={email}
              className="loginInput"
              required
            />
            <input
              placeholder="Password"
              type="password"
              ref={password}
              className="loginInput"
              required
              minLength="6"
            />
            <input
              placeholder="Password Again"
              ref={passwordAgain}
              type="password"
              className="loginInput"
              required
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton">
              <Link to="/login">Log into Account</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
