import { useRef, useState } from "react";
import "./register.scss";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const start = () => {
    setEmail(emailRef.current.value);
  };
  const finish = () => {
    setPassword(passwordRef.current.value);
    navigate("/");
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt=""
          />
          <button className="loginBtn">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, Tv shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email" ref={emailRef} />
            <button className="registerBtn" onClick={start}>
              Next
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerBtn" onClick={finish}>
              Sign Up
            </button>
          </form>
        )}
        <a href="/login">
          <p>
            Already have an account? <b>Click to Log in.</b>
          </p>
        </a>
      </div>
    </div>
  );
}
