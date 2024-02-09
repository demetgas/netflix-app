import { useRef, useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form action="">
          <h1>Log In</h1>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button className="loginBtn">Log In</button>
          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.<b> Learn more.</b>
          </small>
        </form>
      </div>
    </div>
  );
}
