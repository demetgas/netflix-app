import { useRef, useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const log = () => {
    if (email.trim() === "" && password.trim() === "") {
      setError("Please fill in both email and password.");
      return;
    }

    if (email.trim() === "") {
      setError("Please fill in the email.");
      return;
    }

    if (password.trim() === "") {
      setError("Please fill in the password.");
      return;
    }
    setError("");
    navigate("/");
  };

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
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginBtn" onClick={log}>
            Log In
          </button>
          <span>{error}</span>
          <span>
            <a href="/register">
              New to Netflix? <b>Sign up now.</b>
            </a>
          </span>
          <small>
            <a href="/">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.<b> Learn more.</b>{" "}
            </a>
          </small>
        </form>
      </div>
    </div>
  );
}
