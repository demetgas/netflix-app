import "./register.scss";

export default function Register() {
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
        <div className="input">
          <input type="email" placeholder="email" />
          <button className="registerBtn">Sign Up</button>
        </div>
      </div>
    </div>
  );
}
