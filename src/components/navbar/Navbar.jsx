import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img className="img1"
            src="https://upload.wikimedia.org/wikipedia/commons/3/30/StaryKIDSLOGO.png"
            alt=""
          />
          <span>Home</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Navbar;
